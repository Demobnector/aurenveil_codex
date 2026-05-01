// civilian/garrick-stoneheart-data.js
(function() {
  const garrick = {
    id: 'garrick_stoneheart',
    name: 'Garrick Stoneheart',
    title: 'Guild Master of Aurenveil',
    avBg: '#4A4A5A',
    avColor: '#E0E0E8',
    avText: 'GS',
    accentColor: '#C0392B',
    rankLabel: 'Former Diamond',
    role: 'Guild Master',
    category: 'Civilian',
    affiliatedFaction: 'adventurer_guild',
    basic: {
      Age: '58',
      Gender: 'Male',
      Height: '1.85 m',
      Race: 'Dwarf',
      Affiliation: 'Adventurer\'s Guild',
      Rank: 'Former Diamond',
      Role: 'Guild Master'
    },
    appearance: 'A sturdy dwarf with a grey-streaked beard braided with iron rings. His face is weathered from years of adventuring, with a prominent scar across his left cheek from an encounter with an orc chieftain. He wears simple but well-made clothes under a heavy fur-lined coat. His hands are calloused, and he moves with the quiet confidence of someone who has survived things they don\'t talk about.',
    personality: 'Blunt, wise, and surprisingly patient. He speaks plainly and expects the same. He has little patience for bureaucracy but tolerates it because the guild needs structure. He remembers every adventurer by name, even the Iron ranks. He is generous with advice but stingy with praise – when he gives it, it means something.',
    background: 'Garrick started as an Iron-rank adventurer over forty years ago. He climbed to Diamond through sheer persistence, surviving encounters that killed his entire party twice. He retired after a dungeon collapse that shattered his knee – he walks with a slight limp, but refuses a cane. He became Guild Master twenty years ago and has since transformed the guild into the efficient organization it is today. He personally approved the promotions of both Blue Constellation and Red Wings.',
    equipment: [
      { icon: '🪨', name: 'Stoneheart Signet Ring', note: 'A heavy iron ring with the guild crest. Given to him by the previous Guild Master. He never takes it off.' },
      { icon: '📜', name: 'The Guild Ledger', note: 'A massive book containing the names of every registered adventurer. He updates it personally each month.' }
    ],
    abilities: {},
    signature: {
      name: 'The Stoneheart Decree',
      desc: 'Garrick has the authority to promote, demote, or ban any adventurer. His word is final. He has only used the ban twice in twenty years.'
    },
    strengths: ['Decades of experience', 'Knows every adventurer', 'Can identify a monster from a brief description', 'Fair and respected'],
    weaknesses: ['Old injury (limp)', 'No longer fights', 'Can be gruff with new adventurers', 'Stubborn'],
    feats: ['Survived a dungeon collapse that killed his entire party', 'Trained three Gold-rank parties personally', 'Has never made a promotion decision he regretted'],
    teammates: [],
    teamRole: 'Guild Administrator',
    reputation: 'Universally respected. Adventurers complain about his gruffness, but never about his fairness.',
    nickname: '"Old Stone" (affectionate, never to his face)',
    misc: {
      Hobbies: 'Whittling, reading old expedition logs, smoking a pipe',
      Likes: 'Quiet mornings, honest adventurers, a well-kept ledger',
      Dislikes: 'Paperwork, reckless adventurers, being interrupted during meals',
      Trivia: 'He can name every Diamond-rank adventurer in the kingdom\'s history – all twelve of them.'
    },
    stats: {
      rank: 'Former Diamond',
      values: { 'Administration': 487, 'Guild Lore': 492, 'Survival Instinct': 478 },
      bars: { 'Administration': '#C0392B', 'Guild Lore': '#4A9B7C', 'Survival Instinct': '#D85A30' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(garrick);
    console.log('Garrick Stoneheart (Guild Master) loaded.');
  }
})();