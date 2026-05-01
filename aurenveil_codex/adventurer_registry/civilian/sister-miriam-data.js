// civilian/sister-miriam-data.js
(function() {
  const sisterMiriam = {
    id: 'sister_miriam',
    name: 'Sister Miriam',
    title: 'High Priestess of the Temple of Light',
    avBg: '#E8E0D0',
    avColor: '#5A4A3A',
    avText: 'SM',
    accentColor: '#D4AF37',
    rankLabel: 'N/A',
    role: 'Temple Representative',
    category: 'Civilian',
    basic: {
      Age: '62',
      Gender: 'Female',
      Height: '1.65 m',
      Race: 'Human',
      Affiliation: 'Temple of Light / Aurenveil Council',
      Rank: 'N/A',
      Role: 'High Priestess'
    },
    appearance: 'Petite and silver-haired, with kind blue eyes that seem to see through pretense. She wears simple white robes with gold trim, a silver pendant of the sun resting on her chest. Her hands are soft but steady – she has healed thousands. She moves with a calm grace that puts people at ease.',
    personality: 'Wise, patient, and deeply compassionate. She speaks softly, but her words carry weight. She is not naive – she has seen the worst of humanity and still believes in redemption. She is a skilled mediator, often called upon to resolve disputes between council members. She never raises her voice, but she rarely needs to.',
    background: 'Miriam joined the temple as a young woman after her village was destroyed by undead. She trained as a healer and rose through the ranks, eventually becoming High Priestess twenty-five years ago. She has blessed countless adventuring parties before expeditions and has presided over too many funerals. She is the spiritual heart of the city, and her counsel is sought by nobles and commoners alike.',
    equipment: [
      { icon: '☀️', name: 'Sun Pendant', note: 'A silver pendant shaped like the sun. Blessed by the temple. It glows faintly when undead are near.' },
      { icon: '📿', name: 'Prayer Beads', note: 'Wooden beads, worn smooth by decades of prayer. She carries them everywhere.' }
    ],
    abilities: {},
    signature: {
      name: 'The Blessing of Light',
      desc: 'Sister Miriam can bless a party before a dungeon expedition. Blessed adventurers gain minor resistance to undead curses and fear effects for 24 hours.'
    },
    strengths: ['Wise counsel', 'Skilled mediator', 'Healing knowledge', 'Respected by all factions'],
    weaknesses: ['Pacifist – will not condone violence', 'Struggles with the council\'s political nature', 'Her compassion can be exploited'],
    feats: ['Healed over a thousand wounded adventurers in her tenure', 'Mediated the dispute between the Guild and the Miners\' Union – prevented a strike', 'Personally blessed the expedition that first mapped the Aurenveil Dungeon\'s 30th floor'],
    teammates: [],
    teamRole: 'Spiritual Advisor',
    reputation: 'Loved by the people. Even the cynical adventurers speak of her with genuine respect.',
    nickname: '"Mother Miriam" (used by those she has healed, given with affection)',
    misc: {
      Hobbies: 'Gardening, prayer, visiting the sick',
      Likes: 'Morning light, fresh herbs, a successful healing',
      Dislikes: 'Cruelty, unnecessary suffering, the undead',
      Trivia: 'She has never turned away anyone seeking healing, regardless of their ability to pay.'
    },
    stats: {
      rank: 'N/A',
      values: { 'Healing': 498, 'Wisdom': 487, 'Mediation': 476 },
      bars: { 'Healing': '#D4AF37', 'Wisdom': '#4A9B7C', 'Mediation': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(sisterMiriam);
    console.log('Sister Miriam loaded.');
  }
})();