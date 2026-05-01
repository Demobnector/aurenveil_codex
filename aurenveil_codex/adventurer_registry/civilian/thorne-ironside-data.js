// civilian/thorne-ironside-data.js
(function() {
  const thorne = {
    id: 'thorne_ironside',
    name: 'Thorne Ironside',
    title: 'The Face of the Guild',
    avBg: '#6E5E4A',
    avColor: '#F0E0C0',
    avText: 'TI',
    accentColor: '#8E6E3E',
    rankLabel: 'N/A',
    role: 'Reception Desk Lead',
    category: 'Civilian',
    basic: {
      Age: '62',
      Gender: 'Male',
      Height: '1.75 m',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild',
      Rank: 'N/A',
      Role: 'Reception Desk Lead'
    },
    appearance: 'Stocky and grey-bearded, with kind eyes that have seen too many young adventurers come and go. He wears simple but well-made clothes – a linen shirt, leather vest, and comfortable boots. A pair of reading glasses hangs from a chain around his neck. His desk is cluttered with quills, inkpots, and quest forms. He smells faintly of old paper and pipe smoke.',
    personality: 'Patient, warm, and endlessly reliable. He remembers every adventurer\'s name, rank, and preferred quest types. He is the first person new adventurers meet, and he takes that responsibility seriously. He is not a pushover – he has thrown out drunk Gold-ranks who got too rowdy. He is genuinely proud of every adventurer who succeeds.',
    background: 'Thorne started as a clerk at the guild forty years ago, working his way up through every desk job before becoming Lead. He has served under four Guild Masters. He knows where every body is buried – literally and figuratively – but he never speaks of it. He plans to retire soon, but no one believes he actually will.',
    equipment: [
      { icon: '📝', name: 'The Master Ledger', note: 'A massive leather-bound book containing every active quest. He updates it daily.' },
      { icon: '🖋️', name: 'Guild Quill', note: 'A silver-tipped quill given to him by Garrick Stoneheart. He uses it for all official promotions.' }
    ],
    abilities: {},
    signature: {
      name: 'The Desk Clearance',
      desc: 'Thorne has the authority to approve or deny any quest assignment. He has only denied a Gold-rank quest once – the adventurer later thanked him.'
    },
    strengths: ['Remembers everyone', 'Calm under pressure', 'Knows guild regulations by heart', 'Respected by adventurers'],
    weaknesses: ['No combat ability', 'Can be too lenient with young adventurers', 'Hates paperwork but does it anyway'],
    feats: ['Has never lost a quest form in forty years', 'Recognized a forged rank insignia immediately – the forger was banned', 'Trained every current guild receptionist personally'],
    teammates: [],
    teamRole: 'Guild Administrator',
    reputation: 'Universally liked. Adventurers trust him; nobles find him useful.',
    nickname: '"Old Thorne" (affectionate, he answers to it)',
    misc: {
      Hobbies: 'Pipe smoking, reading old quest logs, fishing',
      Likes: 'Quiet mornings, a clean desk, seeing adventurers succeed',
      Dislikes: 'Loud arguments, overdue paperwork, adventurers who ignore rank requirements',
      Trivia: 'He has a drawer full of thank-you letters from adventurers he helped. He never throws them away.'
    },
    stats: {
      rank: 'N/A',
      values: { 'Organization': 498, 'Memory': 487, 'Regulation': 476 },
      bars: { 'Organization': '#8E6E3E', 'Memory': '#4A9B7C', 'Regulation': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(thorne);
    console.log('Thorne Ironside loaded.');
  }
})();