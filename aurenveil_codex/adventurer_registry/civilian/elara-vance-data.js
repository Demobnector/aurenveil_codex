// civilian/elara-vance-data.js
(function() {
  const elara = {
    id: 'elara_vance',
    name: 'Elara Vance',
    title: 'The Scribe of Records',
    avBg: '#C8D6C0',
    avColor: '#3A5A2A',
    avText: 'EV',
    accentColor: '#6A9B4A',
    rankLabel: 'N/A',
    role: 'Guild Scribe',
    category: 'Civilian',
    basic: {
      Age: '44',
      Gender: 'Female',
      Height: '1.62 m',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild',
      Rank: 'N/A',
      Role: 'Guild Scribe'
    },
    appearance: 'Slender and soft-spoken, with chestnut hair tied in a bun and warm brown eyes. She wears practical clothing – a long skirt, a buttoned blouse, and a cardigan against the archive\'s chill. Her hands are ink-stained, and she always has a quill behind her ear. Her desk is meticulously organized.',
    personality: 'Quiet, meticulous, and deeply caring. She speaks softly but her words are precise. She worries about her son Elias constantly but supports his adventuring career. She is the guild\'s institutional memory – she knows where every report is filed. She is shy around adventurers but opens up when discussing records.',
    background: 'Elara has worked at the guild for twenty years. She started as a clerk and became head scribe fifteen years ago. She is the mother of Elias Vance (The Whisperer of Beasts). She is proud of his gift, even though she cannot hear the animals herself. Her husband passed away five years ago; the guild has been her family since.',
    equipment: [
      { icon: '📓', name: 'The Expedition Archive', note: 'A massive collection of expedition logs, organized by date, rank, and location. She maintains it personally.' },
      { icon: '🖋️', name: 'Family Quill', note: 'A simple quill passed down from her grandmother. She uses it for all official records.' }
    ],
    abilities: {},
    signature: {
      name: 'The Scribe\'s Seal',
      desc: 'Elara\'s seal on a quest report makes it official guild record. No document is archived without her approval.'
    },
    strengths: ['Perfect memory for records', 'Organizational genius', 'Knows the guild\'s history', 'Calm in crises'],
    weaknesses: ['No combat ability', 'Worries constantly about Elias', 'Hates confrontation'],
    feats: ['Recovered a "lost" expedition report from thirty years ago – saved a legal dispute', 'Organized the guild archives after a fire – lost no records', 'Has never made a filing error in ten years'],
    teammates: [],
    teamRole: 'Guild Archivist / Scribe',
    reputation: 'Respected by guild staff, unknown to most adventurers. Those who know her appreciate her efficiency.',
    nickname: '"The Quiet Quill" (used by coworkers, she finds it embarrassing)',
    misc: {
      Hobbies: 'Reading, knitting, tending her small garden',
      Likes: 'Order, silence after work, a properly filed stack of papers',
      Dislikes: 'Disorganization, loud adventurers, Elias staying out too late',
      Trivia: 'She has a small collection of pressed flowers from expeditions – kept in a drawer with the reports they came with.'
    },
    stats: {
      rank: 'N/A',
      values: { 'Organization': 498, 'Memory': 487, 'Archiving': 476 },
      bars: { 'Organization': '#6A9B4A', 'Memory': '#4A9B7C', 'Archiving': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(elara);
    console.log('Elara Vance loaded.');
  }
})();