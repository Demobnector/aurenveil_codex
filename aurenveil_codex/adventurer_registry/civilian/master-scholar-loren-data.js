// civilian/master-scholar-loren-data.js
(function() {
  const masterLoren = {
    id: 'master_scholar_loren',
    name: 'Master Scholar Loren',
    title: 'Head of the Royal Academy',
    avBg: '#4A6A5A',
    avColor: '#D0E0D8',
    avText: 'ML',
    accentColor: '#4A9B7C',
    rankLabel: 'N/A',
    role: 'Academy Head',
    category: 'Civilian',
    basic: {
      Age: '68',
      Gender: 'Male',
      Height: '1.70 m',
      Race: 'Human',
      Affiliation: 'Royal Academy / Aurenveil Council',
      Rank: 'N/A',
      Role: 'Academic Director'
    },
    appearance: 'Wrinkled and thin, with a white beard stained with ink. His eyes are sharp and curious behind wire-rimmed spectacles. He wears simple academic robes – dark blue with silver trim. His hands are stained with ink and dust from old tomes. He moves with a slight stoop from decades hunched over manuscripts.',
    personality: 'Brilliant, absent-minded, and endlessly curious. He forgets names but remembers dungeon layouts from forty years ago. He is kind but socially awkward, often missing jokes. He values knowledge above all else and will defend the Academy\'s archives with surprising ferocity. He is the only council member who genuinely has no political ambition.',
    background: 'Loren was a field researcher before becoming a scholar, mapping the upper floors of the Aurenveil Dungeon before the Guild was established. He has written seven books on dungeon ecology and monster behavior. He became Head of the Academy twenty years ago and has since expanded its archives into the most comprehensive collection in the kingdom. He is respected by adventurers and scholars alike.',
    equipment: [
      { icon: '📚', name: 'The Dungeon Compendium', note: 'A massive tome he has been writing for thirty years. Not yet complete. He estimates it will be finished in another decade.' },
      { icon: '🔍', name: 'Magnifying Lens', note: 'A silver-framed lens for examining ancient texts. It belonged to his mentor.' }
    ],
    abilities: {},
    signature: {
      name: 'The Scholar\'s Access',
      desc: 'Loren has access to the Royal Archives restricted section – a privilege granted by three successive monarchs. He is one of three people in the kingdom allowed to read certain forbidden texts.'
    },
    strengths: ['Encyclopedic knowledge', 'Can identify most artifacts', 'Connected to researchers across the continent', 'Respected by the Guild'],
    weaknesses: ['Physically frail', 'Socially awkward', 'Can be oblivious to political implications', 'His advice is often too academic for practical use'],
    feats: ['Mapped the first ten floors of the Aurenveil Dungeon', 'Identified the source of a magical plague – saved hundreds of lives', 'Trained three generations of scholars'],
    teammates: [],
    teamRole: 'Academic Advisor',
    reputation: 'Respected by scholars, tolerated by nobles. Adventurers find his advice useful but dry.',
    nickname: '"Old Lore" (used by his students, affectionate)',
    misc: {
      Hobbies: 'Reading, writing, correcting other scholars\' work',
      Likes: 'A new discovery, well-preserved ink, students who listen',
      Dislikes: 'Loud noises, disorganized archives, anyone who returns books late',
      Trivia: 'He once identified a monster by describing its mating call – he had never seen the creature, only read about it.'
    },
    stats: {
      rank: 'N/A',
      values: { 'Dungeon Lore': 523, 'Ancient Languages': 498, 'Research': 487 },
      bars: { 'Dungeon Lore': '#4A9B7C', 'Ancient Languages': '#D4AF37', 'Research': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(masterLoren);
    console.log('Master Scholar Loren loaded.');
  }
})();