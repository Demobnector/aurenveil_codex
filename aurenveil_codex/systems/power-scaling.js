// systems/power-scaling.js (kept at 0-100 scale)
(function() {
  function computeBasePower(stats, rankCap) {
    if (!stats || !rankCap) return 0;
    let total = 0, count = 0;
    for (let k in stats) {
      if (typeof stats[k] === 'number') {
        total += Math.min(100, (stats[k] / rankCap) * 100);
        count++;
      }
    }
    return count ? total / count : 0;
  }

  const roleSynergyMap = {
    balanced: { bonus: 1.15, desc: 'Balanced party (tank, dps, support) gains +15% effective power.' },
    allDps: { bonus: 0.9, desc: 'All damage dealers; no defense or healing.' },
    allTank: { bonus: 0.7, desc: 'No damage output, enemies will outlast you.' },
    duoCoord: { bonus: 1.2, desc: 'Two-person team with complementary roles gains +20% synergy.' },
    solo: { bonus: 0.85, desc: 'Solo adventurers suffer a 15% penalty compared to a coordinated party.' }
  };

  function getRoleSynergy(party) {
    if (!party || party.length === 0) return { bonus: 0.85, desc: roleSynergyMap.solo.desc };
    const roles = party.map(m => (m.role || '').toLowerCase());
    const hasTank = roles.some(r => r.includes('tank') || r.includes('frontline') || r === 'warrior');
    const hasHealer = roles.some(r => r.includes('heal') || r.includes('support'));
    const hasDps = roles.some(r => r.includes('dps') || r.includes('damage') || r.includes('ranged'));
    if (hasTank && hasHealer && hasDps) return { bonus: 1.15, desc: roleSynergyMap.balanced.desc };
    if (party.length === 2 && ((hasTank && hasDps) || (hasTank && hasHealer) || (hasDps && hasHealer))) {
      return { bonus: 1.2, desc: roleSynergyMap.duoCoord.desc };
    }
    if (hasDps && !hasTank && !hasHealer) return { bonus: 0.9, desc: roleSynergyMap.allDps.desc };
    if ((hasTank || hasHealer) && !hasDps) return { bonus: 0.7, desc: roleSynergyMap.allTank.desc };
    return { bonus: 1.0, desc: 'No significant synergy bonus.' };
  }

  function getPreparationFactor(level) {
    if (level === 'extensive') return 1.3;
    if (level === 'basic') return 1.1;
    return 1.0;
  }

  function calculateEffectivePower(partyOrSolo, options = {}) {
    const isParty = Array.isArray(partyOrSolo);
    const rankCaps = { Copper: 100, Iron: 200, Silver: 350, Gold: 550, Diamond: 800, Mythril: 1200 };
    let basePower = 0;
    if (isParty) {
      let total = 0;
      for (let m of partyOrSolo) {
        const cap = rankCaps[m.rankLabel] || 550;
        total += computeBasePower(m.stats?.values, cap);
      }
      basePower = total / partyOrSolo.length;
    } else {
      const cap = rankCaps[partyOrSolo.rankLabel] || 550;
      basePower = computeBasePower(partyOrSolo.stats?.values, cap);
    }
    const synergy = isParty ? getRoleSynergy(partyOrSolo) : { bonus: 0.85, desc: roleSynergyMap.solo.desc };
    const prep = getPreparationFactor(options.preparationLevel || 'none');
    // Cap at 100 for clean comparison with threat (threat max 25, so 4:1 ratio)
    const effective = Math.min(100, basePower * synergy.bonus * prep);
    const recommendation = effective >= 80 ? 'Likely victory' : (effective >= 55 ? 'Challenging but possible' : 'Avoid engagement');
    return {
      basePower: Math.round(basePower),
      effectivePower: Math.round(effective),
      synergy: synergy.desc,
      preparationFactor: prep,
      recommendation
    };
  }

  window.POWER_SCALING = { calculateEffectivePower, computeBasePower };
  console.log('Power scaling module loaded (0-100 scale, capped at 100).');
})();