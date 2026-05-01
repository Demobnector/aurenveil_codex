// civilian/master-lyn-data.js
(function() {
  const masterLyn = {
    id: 'master_lyn',
    name: 'Master Lyn',
    title: 'The Keeper of Lore',
    avBg: '#4A6A6A',
    avColor: '#D0E0E0',
    avText: 'ML',
    accentColor: '#00Bcd4',
    rankLabel: 'Former Gold',
    role: 'Guild Archivist',
    category: 'Civilian',
    basic: {
      Age: '71',
      Gender: 'Female',
      Height: '1.60 m',
      Race: 'Elf',
      Affiliation: 'Adventurer\'s Guild',
      Rank: 'Former Gold',
      Role: 'Guild Archivist'
    },
    appearance: 'Elven, with silver-white hair and pale blue eyes that still sparkle with curiosity. She is thin and slightly hunched from decades bent over books. She wears simple robes in deep blue, always dusted with the faint residue of ancient tomes. Her hands are delicate but steady, and she moves with an elf\'s natural grace despite her age.',
    personality: 'Wise, patient, and endlessly curious. She speaks slowly, choosing her words with care. She values knowledge above all else and has forgotten more than most scholars will ever learn. She is kind but eccentric, often muttering to herself while reading. She rarely leaves the archives – she does not need to; the world comes to her.',
    background: 'Master Lyn has been the guild archivist for over forty years. She was a Gold-rank mage who retired to pursue research. She has catalogued every expedition report, monster description, and dungeon map the guild possesses. She is the kingdom\'s foremost expert on dungeon ecology, though she rarely publishes. She claims she is still organizing the archives – she will be for the rest of her life.',
    equipment: [
      { icon: '📚', name: 'The Guild Archive', note: 'The complete collection of guild records – over 10,000 volumes. She knows where every single one is located.' },
      { icon: '🔮', name: 'Magnifying Crystal', note: 'A small crystal lens for examining ancient texts. She has used it for decades.' }
    ],
    abilities: {},
    signature: {
      name: 'The Archivist\'s Anecdote',
      desc: 'Master Lyn can recall a relevant piece of information from the archives for almost any situation. Her memory is legendary – and documented in the archives themselves.'
    },
    strengths: ['Encyclopedic knowledge', 'Perfect memory for records', 'Can identify almost any creature', 'Connected to scholars across the continent'],
    weaknesses: ['Physically frail', 'Rarely leaves the archives', 'Can be socially awkward', 'Her answers are often too detailed'],
    feats: ['Identified a creature based on a single scale – saved an expedition', 'Recovered a "lost" record from the archives after a fire – it was the only copy', 'Has trained every guild archivist for three generations'],
    teammates: [],
    teamRole: 'Guild Archivist',
    reputation: 'Respected by scholars, unknown to most adventurers. Those who need her information seek her out.',
    nickname: '"The Archive" (given by guild staff, she is amused by it)',
    misc: {
      Hobbies: 'Reading, organizing, correcting other scholars\' work',
      Likes: 'A new book, a well-organized shelf, quiet afternoons',
      Dislikes: 'Loud noises, returning books late, dust (ironically)',
      Trivia: 'She has read every volume in the archives at least twice. She is currently on her third read-through.'
    },
    stats: {
      rank: 'Former Gold',
      values: { 'Dungeon Lore': 523, 'Ancient History': 498, 'Research': 487 },
      bars: { 'Dungeon Lore': '#00Bcd4', 'Ancient History': '#4A9B7C', 'Research': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(masterLyn);
    console.log('Master Lyn loaded.');
  }
})();