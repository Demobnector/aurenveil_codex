// systems/rank-system.js
(function() {
  // Adventurer ranks (lowest to highest)
  const ADVENTURER_RANKS = [
    { tier: 'Copper',   label: 'Copper',   description: 'The lowest rank of the guild. Mostly material-gathering, chores, and only able to deal with the weakest creatures around.', minQuests: 0,   minCreatureRank: 'F' },
    { tier: 'Iron',     label: 'Iron',     description: 'Better than Copper, unlocks opportunities for more monster-related tasks like stronger creatures.',                     minQuests: 10,  minCreatureRank: 'E' },
    { tier: 'Silver',   label: 'Silver',   description: 'Brighter version than Iron. Access to cave mining, escort and environmental investigation.',                     minQuests: 25,  minCreatureRank: 'D' },
    { tier: 'Gold',     label: 'Gold',     description: 'Allowed to take almost any task on the board. Access to emergencies, royal escort, and many more opportunities.',   minQuests: 50,  minCreatureRank: 'B' },
    { tier: 'Diamond',  label: 'Diamond',  description: 'Allowed to take on almost any dangerous task that others cannot. Can escort the king to another kingdom.',          minQuests: 100, minCreatureRank: 'S' },
    { tier: 'Mythril',  label: 'Mythril',  description: 'No adventurer has attained this rank yet. Reserved for legendary heroes.',                                         minQuests: 0,   minCreatureRank: 'SSS' }
  ];

  // Creature ranks (F to SSS)
  const CREATURE_RANKS = [
    { tier: 'F',    label: 'F',    description: 'Minimal threat. Copper rank adventurers can handle.' },
    { tier: 'E',    label: 'E',    description: 'Minor threat. Requires Iron rank or higher.' },
    { tier: 'D',    label: 'D',    description: 'Moderate threat. Silver rank recommended.' },
    { tier: 'C',    label: 'C',    description: 'Significant threat. Silver or Gold rank party.' },
    { tier: 'B',    label: 'B',    description: 'Dangerous. Gold rank party recommended.' },
    { tier: 'A',    label: 'A',    description: 'Very dangerous. Gold to Diamond rank party.' },
    { tier: 'S',    label: 'S',    description: 'Extreme threat. Diamond rank required.' },
    { tier: 'SS',   label: 'SS',   description: 'Cataclysmic. Multiple Diamond parties or Mythril heroes needed.' },
    { tier: 'SSS',  label: 'SSS',  description: 'World-ending. Mythril rank intervention required.' }
  ];

  function evaluatePromotion(adventurer, questLog) {
    const currentRank = adventurer.rankLabel;
    const currentIdx = ADVENTURER_RANKS.findIndex(r => r.label === currentRank);
    if (currentIdx === -1 || currentIdx === ADVENTURER_RANKS.length - 1) {
      return { eligible: false, requirements: ['Already at maximum rank (or invalid rank)'], nextRank: null };
    }
    const next = ADVENTURER_RANKS[currentIdx + 1];
    const requirements = [];
    if ((questLog.completedQuests || 0) < next.minQuests) {
      requirements.push(`Complete ${next.minQuests - (questLog.completedQuests || 0)} more quests.`);
    }
    const highestDefeated = questLog.highestCreatureRank || 'F';
    const requiredIdx = CREATURE_RANKS.findIndex(r => r.tier === next.minCreatureRank);
    const achievedIdx = CREATURE_RANKS.findIndex(r => r.tier === highestDefeated);
    if (achievedIdx < requiredIdx) {
      requirements.push(`Defeat a creature of rank ${next.minCreatureRank} or higher.`);
    }
    return {
      eligible: requirements.length === 0,
      requirements: requirements,
      nextRank: next.tier
    };
  }

  function getRankCapability(rank, type = 'adventurer') {
    if (type === 'adventurer') {
      const found = ADVENTURER_RANKS.find(r => r.label === rank);
      return found ? found.description : 'Unknown rank';
    } else {
      const found = CREATURE_RANKS.find(r => r.tier === rank);
      return found ? found.description : 'Unknown rank';
    }
  }

  // Rank to numeric value for calculations
  function getRankValue(rank, type = 'adventurer') {
    if (type === 'adventurer') {
      const idx = ADVENTURER_RANKS.findIndex(r => r.label === rank);
      return idx !== -1 ? idx + 1 : 1;
    } else {
      const idx = CREATURE_RANKS.findIndex(r => r.tier === rank);
      return idx !== -1 ? idx + 1 : 1;
    }
  }

  window.RANK_SYSTEM = { 
    ADVENTURER_RANKS, 
    CREATURE_RANKS, 
    evaluatePromotion, 
    getRankCapability,
    getRankValue
  };
  console.log('Rank system module loaded (updated with Copper→Mythril).');
})();