// civilian/lord-valemont-data.js
(function() {
  const lordValemont = {
    id: 'lord_valemont',
    name: 'Lord Aldric Valemont',
    title: 'Head of House Valemont · Council Chairman',
    avBg: '#1A3A4A',
    avColor: '#C8D8E8',
    avText: 'LV',
    accentColor: '#C0392B',
    rankLabel: 'Former Gold',
    role: 'Noble Representative',
    category: 'Civilian',
    basic: {
      Age: '52',
      Gender: 'Male',
      Height: '1.85 m',
      Race: 'Human',
      Affiliation: 'House Valemont / Aurenveil Council',
      Rank: 'Former Gold',
      Role: 'Council Chairman'
    },
    appearance: 'Tall and imposing, with grey-streaked dark hair and sharp grey eyes that have seen decades of political maneuvering. He wears finely tailored noble attire in deep blue and silver – the Valemont colors. A signet ring bearing the family crest sits on his right hand. Despite his age, he still carries himself with the posture of a former adventurer. His face is lined with worry as much as age – the weight of ruling is visible.',
    personality: 'Diplomatic, calculating, and deeply protective of his family. He speaks carefully, measuring every word. He is not unkind, but he is pragmatic – he has made difficult decisions that cost lives, and he carries those burdens silently. He loves his children (Alistair, Cecilia, Elizabeth, Lucien) but struggles to express it openly. He is proud of the Red Wings but worries constantly about their safety.',
    background: 'Lord Aldric was a Gold-rank adventurer in his youth, leading a party that cleared the upper floors of the Aurenveil Dungeon. He retired to manage the family estate when his father passed. He married into political alliances and raised four children, all of whom became adventurers – much to his quiet dismay. He has served on the Council for eighteen years and became Chairman twelve years ago. He is respected, but not universally loved – his decisions have not always been popular.',
    equipment: [
      { icon: '💍', name: 'Valemont Signet Ring', note: 'A gold ring with the Valemont crest – a red wing on a black field. Passed down through generations. He never removes it.' },
      { icon: '📜', name: 'Council Ledger', note: 'A leather-bound book containing records of every council decision in the last decade. He annotates each entry personally.' }
    ],
    abilities: {},
    signature: {
      name: 'The Chairman\'s Veto',
      desc: 'Lord Aldric has the authority to veto any council decision, though he has only used this power twice. Both times, history proved him correct.'
    },
    strengths: ['Political acumen', 'Decades of experience', 'Knows the dungeon better than most nobles', 'Strong family connections'],
    weaknesses: ['Can be too cautious', 'Struggles to show emotion', 'Bears guilt over past decisions', 'Overprotective of his children'],
    feats: ['Negotiated the treaty that allowed the Guild to regulate dungeon access', 'Vetoed a mining operation that would have damaged the dungeon core – the decision saved countless lives', 'Trained all four of his children in basic combat before they joined the Guild'],
    teammates: [],
    teamRole: 'Noble Administrator',
    reputation: 'Respected by nobles and commoners alike. Some find him cold, but none question his competence.',
    nickname: '"The Old Wing" (used behind his back, referencing the Valemont crest)',
    misc: {
      Hobbies: 'Reading history, chess, walking the castle ramparts',
      Likes: 'Order, a well-reasoned argument, his children\'s success',
      Dislikes: 'Recklessness, unnecessary risks, family dinners where everyone argues',
      Trivia: 'He still wields his old adventuring sword – it hangs above his desk. He has not drawn it in fifteen years.'
    },
    stats: {
      rank: 'Former Gold',
      values: { 'Politics': 498, 'Dungeon Lore': 423, 'Leadership': 467 },
      bars: { 'Politics': '#C0392B', 'Dungeon Lore': '#4A9B7C', 'Leadership': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(lordValemont);
    console.log('Lord Aldric Valemont loaded.');
  }
})();