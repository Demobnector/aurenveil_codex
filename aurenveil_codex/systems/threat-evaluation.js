// systems/threat-evaluation.js (properly scaled to rank caps)
(function() {
  // Rank caps for normalization (same as bestiary)
  const RANK_CAPS = {
    'F': 100, 'E': 250, 'D': 500, 'C': 1000, 'B': 2500,
    'A': 6000, 'S': 15000, 'SS': 40000, 'SSS': 100000
  };

  // Base threat by rank (as a sanity check)
  const RANK_BASE_THREAT = {
    'F': 1.0, 'E': 1.5, 'D': 2.5, 'C': 4.0, 'B': 6.0,
    'A': 8.5, 'S': 12.0, 'SS': 17.0, 'SSS': 22.0
  };

  const NON_CREATURE_IDS = [
    'trap_floor', 'necrotic_source', 'city_dungeon', 'abysmal_dungeon',
    'gray_gasp_cellar', 'dungeon_core_anomaly', 'spine_of_the_world',
    'whisperwood'
  ];

  function isCreature(creature) {
    if (creature.id && NON_CREATURE_IDS.includes(creature.id)) return false;
    if (creature.stats && typeof creature.stats.HP === 'number') return true;
    return false;
  }

  // Calculate threat based on stats relative to rank cap
  function computeStatBasedThreat(stats, rank) {
    if (!stats) return 1.0;
    
    const cap = RANK_CAPS[rank] || 100;
    const baseThreat = RANK_BASE_THREAT[rank] || 3.0;
    
    // Calculate average stat percentage relative to cap
    let totalPercent = 0;
    let statCount = 0;
    
    // Key combat stats that matter for threat
    const relevantStats = ['HP', 'Damage', 'Defense', 'Speed', 'Mana'];
    
    for (let stat of relevantStats) {
      if (typeof stats[stat] === 'number') {
        let percent = (stats[stat] / cap) * 100;
        percent = Math.min(100, percent); // Cap at 100%
        totalPercent += percent;
        statCount++;
      }
    }
    
    if (statCount === 0) return baseThreat;
    
    const avgPercent = totalPercent / statCount;
    
    // Scale threat based on average stats (0-100% maps to 0.7x to 1.3x of base threat)
    let threat = baseThreat * (0.7 + (avgPercent / 100) * 0.6);
    
    return threat;
  }

  function getRecommendedRank(threatValue) {
    // Threat scale now properly matches rank expectations
    if (threatValue <= 1.8) return 'Copper';
    if (threatValue <= 2.8) return 'Iron';
    if (threatValue <= 4.5) return 'Silver';
    if (threatValue <= 7.5) return 'Gold';
    if (threatValue <= 12) return 'Diamond';
    if (threatValue <= 18) return 'Mythril';
    return 'Legendary';
  }

  function evaluateThreat(creature, options = {}) {
    if (!isCreature(creature)) {
      return {
        baseThreatValue: 0,
        effectiveThreat: 0,
        rating: 'Not applicable',
        recommendedRank: 'N/A',
        factors: {},
        note: 'Not a standard creature.'
      };
    }

    const creatureRank = creature.rank;
    
    // Get base threat from stats (properly normalized)
    let baseThreat = computeStatBasedThreat(creature.stats, creatureRank);
    
    const count = options.count || 1;
    const coordinated = options.coordinated || false;
    
    // Swarm factor (less aggressive for tiny creatures)
    let swarmFactor = 1;
    if (count > 1) {
      swarmFactor = Math.sqrt(count);
      if (coordinated) swarmFactor *= 1.2;
      swarmFactor = Math.min(swarmFactor, 4);
    }
    
    let threat = baseThreat * swarmFactor;
    
    const inNativeBiome = options.biome && creature.biomes && creature.biomes.includes(options.biome);
    if (inNativeBiome) threat *= 1.15;
    if (options.isHomeTerritory) threat *= 1.2;
    
    const hasHorde = creature.ab && creature.ab.some(txt => txt.toLowerCase().includes('horde') || txt.toLowerCase().includes('swarm'));
    if (hasHorde && count > 1) threat *= 1.15;
    
    // Apply a small adjustment for aggression (0.9x to 1.1x)
    if (typeof creature.stats?.Aggression === 'number') {
      const aggressionMod = 0.9 + (Math.min(100, creature.stats.Aggression) / 1000);
      threat *= aggressionMod;
    }
    
    // Cap at 25 for safety (but should naturally stay within 1-22)
    let finalThreat = Math.min(25, Math.max(0.5, threat));
    finalThreat = Math.round(finalThreat * 100) / 100;
    
    let rating = '';
    if (finalThreat <= 1.8) rating = 'Trivial';
    else if (finalThreat <= 2.8) rating = 'Low';
    else if (finalThreat <= 4.5) rating = 'Moderate';
    else if (finalThreat <= 7.5) rating = 'High';
    else if (finalThreat <= 12) rating = 'Extreme';
    else rating = 'Apocalyptic';
    
    return {
      baseThreatValue: parseFloat(baseThreat.toFixed(2)),
      effectiveThreat: finalThreat,
      rating: rating,
      recommendedRank: getRecommendedRank(finalThreat),
      factors: { count, coordinated, nativeBiome: inNativeBiome, hasHorde: hasHorde && count > 1 },
      note: `Base threat for ${creatureRank} rank: ${baseThreat.toFixed(2)}`
    };
  }

  // Evaluate encounter between party and enemy
  function evaluateEncounter(party, enemy, options = {}) {
    if (!window.POWER_SCALING) {
      console.warn('Power scaling module not loaded');
      return { result: 'Unknown', ratio: 0, partyPower: 0, enemyThreat: 0 };
    }
    
    const partyPower = window.POWER_SCALING.calculateEffectivePower(party, options);
    const enemyThreat = evaluateThreat(enemy, options);
    
    // Party power is 0-100, enemy threat is 1-22
    // A balanced fight is when party power ≈ enemy threat × 5
    const ratio = partyPower.effectivePower / (enemyThreat.effectiveThreat * 5);
    let result = '';
    if (ratio >= 1.3) result = 'Dominant victory';
    else if (ratio >= 1.0) result = 'Likely victory';
    else if (ratio >= 0.7) result = 'High risk';
    else result = 'Avoid';
    
    return {
      result: result,
      ratio: parseFloat(ratio.toFixed(2)),
      partyPower: partyPower.effectivePower,
      enemyThreat: enemyThreat.effectiveThreat,
      partyRecommendation: partyPower.recommendation,
      enemyRating: enemyThreat.rating,
      recommendedRank: enemyThreat.recommendedRank
    };
  }

  window.THREAT_EVALUATION = { evaluateThreat, getRecommendedRank, isCreature, evaluateEncounter };
  console.log('Threat evaluation loaded (properly scaled to rank caps).');
})();