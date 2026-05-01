// civilian/serra-ironvein-data.js
(function() {
  const serra = {
    id: 'serra_ironvein',
    name: 'Serra Ironvein',
    title: 'The Rank Examiner',
    avBg: '#5A5A4A',
    avColor: '#E0E0D0',
    avText: 'SI',
    accentColor: '#B87333',
    rankLabel: 'Former Silver',
    role: 'Rank Examiner',
    category: 'Civilian',
    basic: {
      Age: '52',
      Gender: 'Female',
      Height: '1.58 m',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild',
      Rank: 'Former Silver',
      Role: 'Rank Examiner'
    },
    appearance: 'Stocky and solid, with short-cropped grey hair and a weathered face. She wears practical clothes – reinforced leather, sturdy boots – even in the office. She carries a simple wooden staff, though she no longer fights. Her hands are calloused, and her grip is still strong.',
    personality: 'Strict, fair, and no-nonsense. She has failed more adventurers than she has passed. She does not enjoy failing them, but she believes that a rank must mean something. She is not unkind – she offers detailed feedback and training advice. Adventurers who pass her exam know they earned it.',
    background: 'Serra was a Silver-rank fighter who retired after a knee injury made combat difficult. She became a rank examiner twenty years ago. She has personally tested thousands of adventurers. Her exams are notoriously difficult – and respected. The Guild Master trusts her judgment absolutely.',
    equipment: [
      { icon: '📋', name: 'The Exam Ledger', note: 'A book containing records of every promotion exam she has conducted. Failed exams are marked in red; passed in black.' },
      { icon: '🪵', name: 'Testing Staff', note: 'A simple wooden staff she uses during practical exams. She has never hit an examinee – but she has blocked plenty of strikes.' }
    ],
    abilities: {},
    signature: {
      name: 'The Examiner\'s Approval',
      desc: 'Serra\'s approval is required for all rank promotions. No adventurer has ever been promoted without her assessment – and no one has ever complained about the system.'
    },
    strengths: ['Fair assessment', 'Decades of experience', 'Knows combat capabilities', 'Respected by all ranks'],
    weaknesses: ['Strict – can be intimidating', 'No patience for excuses', 'Her exams are notoriously difficult'],
    feats: ['Has tested over 5,000 adventurers', 'Refused to promote an adventurer seven times – the adventurer finally passed on the eighth attempt and became Gold-rank', 'Her recommended training regimen is used by the Guild to prepare candidates'],
    teammates: [],
    teamRole: 'Rank Examiner',
    reputation: 'Respected and feared. Adventurers dread her exams but trust her judgment.',
    nickname: '"The Gatekeeper" (no one knows who gave her this name, but everyone uses it)',
    misc: {
      Hobbies: 'Sparring (light), studying combat techniques, mentoring young fighters',
      Likes: 'Prepared examinees, clean technique, a fair fight',
      Dislikes: 'Arrogance, unprepared adventurers, excuses',
      Trivia: 'She has never promoted an adventurer who later failed at their new rank. Her record is perfect.'
    },
    stats: {
      rank: 'Former Silver',
      values: { 'Combat Assessment': 498, 'Training': 487, 'Judgment': 476 },
      bars: { 'Combat Assessment': '#B87333', 'Training': '#4A9B7C', 'Judgment': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(serra);
    console.log('Serra Ironvein loaded.');
  }
})();