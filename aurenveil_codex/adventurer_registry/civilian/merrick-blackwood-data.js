// civilian/merrick-blackwood.js
(function() {
  const merrick = {
    id: 'merrick_blackwood',
    name: 'Merrick Blackwood',
    title: 'The Hammer of Aurenveil',
    avBg: '#C0B8A0',
    avColor: '#3A2A1A',
    avText: 'MB',
    accentColor: '#B87333',
    rankLabel: 'N/A',
    role: 'Master Blacksmith',
    category: 'Civilian',
    basic: {
      Age: '54',
      Gender: 'Male',
      Height: '1.78 m',
      Race: 'Dwarf (adopted human)',
      Affiliation: 'Blackwood Forge',
      Rank: 'N/A',
      Role: 'Master Blacksmith'
    },
    appearance: 'Stocky and strong, with arms scarred from years at the forge. Grey-streaked beard, weathered face, sharp eyes that miss no detail in metal. Wears a heavy leather apron over a simple tunic. His hands are calloused, and he smells of smoke and oil.',
    personality: 'Blunt, honest, and gruff. He has no patience for fools, but respects hard work. He speaks his mind and expects the same. He is generous to those in need, though he would never admit it. He mentors young smiths without charging, saying "a good smith is good for business."',
    background: 'Merrick was abandoned as a child and taken in by a dwarven smith who taught him the trade. He inherited the forge and built it into the finest in Aurenveil. He has crafted weapons for three generations of adventurers, including several members of Blue Constellation and Red Wings. He refuses to make weapons for those he considers unworthy.',
    equipment: [
      { icon: '🔨', name: 'The Heirloom Hammer', note: 'A heavy smithing hammer passed down from his dwarven mentor. The head is worn smooth from decades of use.' },
      { icon: '🧤', name: 'Leather Work Apron', note: 'Thick, fire-resistant leather. Covered in burn marks and metal shavings.' }
    ],
    abilities: {},
    signature: {
      name: 'The Blackwood Edge',
      desc: 'Merrick\'s signature weapon style – blades that never dull and hold an edge longer than any others. He has never revealed his secret tempering process.'
    },
    strengths: ['Master craftsmanship', 'Knows all active adventurers', 'Fair pricing', 'Can identify any metal'],
    weaknesses: ['No combat ability', 'Refuses to work for those he dislikes', 'Stubborn'],
    feats: ['Forged the blade of a Diamond-rank adventurer (the adventurer retired, the blade is in the guild hall)', 'Never missed a delivery deadline in 30 years'],
    teammates: [],
    teamRole: 'Civilian craftsman',
    reputation: 'Widely respected as the finest blacksmith in Aurenveil. Adventurers wait weeks for his work.',
    nickname: '"Old Hammer" (affectionate)',
    misc: { Hobbies: 'Collecting rare metals, studying ancient smithing techniques', Likes: 'Honest customers, hard work, a well-made blade', Dislikes: 'Cheap steel, customers who haggle too much, laziness', Trivia: 'He once fixed a golem\'s arm mid-battle using a rock as an anvil. The golem\'s owner still tells the story.' },
    stats: { rank: 'N/A', values: { 'Smithing': 487, 'Metal Lore': 456, 'Strength': 423 }, bars: { 'Smithing': '#B87333', 'Metal Lore': '#7D6E4A', 'Strength': '#D85A30' } }
  };
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(merrick);
  }
})();