// civilian/ronan-blackthorn-data.js
(function() {
  const ronan = {
    id: 'ronan_blackthorn',
    name: 'Ronan Blackthorn',
    title: 'The Quest Arbiter',
    avBg: '#5A4A5A',
    avColor: '#E0D0E0',
    avText: 'RB',
    accentColor: '#8E44AD',
    rankLabel: 'Former Gold',
    role: 'Quest Coordinator',
    category: 'Civilian',
    basic: {
      Age: '48',
      Gender: 'Male',
      Height: '1.80 m',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild',
      Rank: 'Former Gold',
      Role: 'Quest Coordinator'
    },
    appearance: 'Lean and sharp-featured, with greying black hair and piercing grey eyes. He dresses in dark, functional clothes – a holdover from his rogue days. A thin scar runs along his left hand. He moves quietly, often startling people who didn\'t hear him approach.',
    personality: 'Calculating, fair, and observant. He evaluates quests with cold precision, weighing risk against reward. He has little patience for adventurers who overestimate their abilities. He is not cruel – he has personally talked rookies out of quests that would have killed them. He respects competence above all else.',
    background: 'Ronan was a Gold-rank rogue who retired after a quest left him with a permanent limp (barely noticeable). He joined the guild staff fifteen years ago and has since evaluated thousands of quests. He has a reputation for being harsh but accurate. Adventurers complain about his assessments – but they also trust them.',
    equipment: [
      { icon: '⚖️', name: 'The Risk Scale', note: 'A small balance scale he uses symbolically when evaluating quests. It is not magical; it is ceremonial.' },
      { icon: '📜', name: 'Quest Ledger', note: 'A thick book containing every quest he has evaluated. His notes are ruthless but accurate.' }
    ],
    abilities: {},
    signature: {
      name: 'The Coordinator\'s Assessment',
      desc: 'Ronan\'s evaluation of a quest determines its rank and reward. His assessments are rarely disputed, and when they are, he is almost always proven correct.'
    },
    strengths: ['Accurate risk assessment', 'Knows adventurer capabilities', 'Fair', 'Respected'],
    weaknesses: ['Blunt – can be discouraging', 'No patience for excuses', 'Struggles to show warmth'],
    feats: ['Predicted the failure rate of a B-rank quest – his warnings saved three parties from attempting it', 'Identified a pattern of monster migrations that led to early dungeon breach warnings', 'Has never been wrong about a quest\'s difficulty in fifteen years'],
    teammates: [],
    teamRole: 'Quest Evaluator',
    reputation: 'Respected and slightly feared. Adventurers complain about his assessments but follow them.',
    nickname: '"The Judge" (given by adventurers, he has never acknowledged it)',
    misc: {
      Hobbies: 'Risk analysis (he considers it a hobby), chess, reading old quest reports',
      Likes: 'Accuracy, well-prepared adventurers, quests that go as planned',
      Dislikes: 'Recklessness, poorly written quest requests, being wrong',
      Trivia: 'He has never taken a day off in fifteen years. No one knows if this is dedication or compulsion.'
    },
    stats: {
      rank: 'Former Gold',
      values: { 'Risk Assessment': 512, 'Knowledge': 498, 'Fairness': 476 },
      bars: { 'Risk Assessment': '#8E44AD', 'Knowledge': '#4A9B7C', 'Fairness': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(ronan);
    console.log('Ronan Blackthorn loaded.');
  }
})();