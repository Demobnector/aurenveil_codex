// civilian/captain-croft-data.js
(function() {
  const captainCroft = {
    id: 'captain_croft',
    name: 'Captain Alistair Croft',
    title: 'Commander of the City Guard',
    avBg: '#3A5A5A',
    avColor: '#D0E0E0',
    avText: 'AC',
    accentColor: '#2E8B57',
    rankLabel: 'Veteran',
    role: 'City Guard Commander',
    category: 'Civilian',
    basic: {
      Age: '45',
      Gender: 'Male',
      Height: '1.83 m',
      Race: 'Human',
      Affiliation: 'City Guard / Aurenveil Council',
      Rank: 'Veteran',
      Role: 'Guard Commander'
    },
    appearance: 'Built like a soldier – broad shoulders, straight posture, close-cropped steel-grey hair. His face is weathered, with a deep scar running from his left ear to his jaw – a souvenir from a dungeon breach five years ago. He wears the silver-and-blue armor of the City Guard, polished but dented. A longsword rests at his hip, and he carries a shield bearing the city crest. His eyes are sharp and miss nothing.',
    personality: 'Disciplined, pragmatic, and fiercely protective of the city. He speaks in short, direct sentences. He has little patience for bureaucracy but respects the chain of command. He cares deeply for his guards, and they would follow him anywhere. He is not unkind, but he is not soft – he has buried too many young guards to be anything but realistic.',
    background: 'Croft started as a city guard at eighteen, working his way through the ranks. He earned his captaincy twenty years ago after distinguishing himself during a dungeon outbreak that threatened the market district. He has since reorganized the guard into a professional force capable of handling monster incursions. He works closely with the Guild, often coordinating joint responses. He has never married; the guard is his family.',
    equipment: [
      { icon: '⚔️', name: 'City Guard Longsword', note: 'Standard-issue, but well-maintained. The hilt is worn from years of use. He sharpens it himself.' },
      { icon: '🛡️', name: 'City Crest Shield', note: 'A steel shield bearing the crest of Aurenveil – a tower over crossed swords. The left edge is scarred from an orc chieftain\'s axe.' }
    ],
    abilities: {},
    signature: {
      name: 'The Captain\'s Order',
      desc: 'Croft can mobilize the entire City Guard within minutes. His word is law in matters of city defense. He has only ordered a full evacuation once – it saved hundreds of lives.'
    },
    strengths: ['Decades of tactical experience', 'Respected by his troops', 'Knows the city\'s defenses intimately', 'Calm under pressure'],
    weaknesses: ['Blunt – offends diplomats occasionally', 'Prefers action over discussion', 'Carries guilt for every guard lost', 'No patience for politics'],
    feats: ['Led the defense during the Great Dungeon Breach of 1423 – held the line for six hours until the Guild arrived', 'Trained over two hundred guards personally', 'Has never lost a civilian under his direct protection'],
    teammates: [],
    teamRole: 'Military Commander',
    reputation: 'Universally respected. Civilians trust him; nobles find him difficult, but they trust his competence.',
    nickname: '"Old Stoneface" (behind his back, he knows, he doesn\'t care)',
    misc: {
      Hobbies: 'Sword practice, reading tactical manuals, walking the walls at night',
      Likes: 'Order, discipline, a quiet patrol',
      Dislikes: 'Politics, paperwork, adventurers who ignore evacuation orders',
      Trivia: 'He has never lost a spar to a guard under his command – not because he is the best, but because he refuses to let them win.'
    },
    stats: {
      rank: 'Veteran',
      values: { 'Tactics': 487, 'Command': 478, 'Swordsmanship': 456 },
      bars: { 'Tactics': '#2E8B57', 'Command': '#C0392B', 'Swordsmanship': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(captainCroft);
    console.log('Captain Alistair Croft loaded.');
  }
})();