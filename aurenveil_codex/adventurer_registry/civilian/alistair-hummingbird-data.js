// civilian/alistair-hummingbird-data.js
(function() {
  const alistairHummingbird = {
    id: 'alistair_hummingbird',
    name: 'Alistair Hummingbird',
    title: 'The Iron Examiner',
    avBg: '#6E4A3A',
    avColor: '#E0C8B0',
    avText: 'AH',
    accentColor: '#D4A04A',
    rankLabel: 'Former Gold',
    role: 'Promotional Examiner (Combat)',
    category: 'Civilian',
    basic: {
      Age: '58',
      Gender: 'Male',
      Height: '1.85 m',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild',
      Rank: 'Former Gold',
      Role: 'Promotional Combat Examiner'
    },
    appearance: 'A broad-shouldered man with a weathered face and close-cropped grey hair. His nose is broken from old fights. He wears functional plate armor (kept immaculate) with a hummingbird crest on the pauldron. His hands are calloused, and he moves with the economy of someone who has fought thousands of battles. Despite his intimidating size, his eyes are calm and kind.',
    personality: 'Patient, disciplined, and surprisingly gentle. He believes in teaching through experience. He never humiliates examinees – instead, he pushes them to their limits and shows them exactly where they need to improve. He speaks little during exams, preferring to let actions teach. After exams, he gives detailed feedback and recommendations for training.',
    background: 'Alistair retired from active adventuring after a hip injury made extended dungeon crawls impossible. The Guild offered him a position as a combat examiner. For the past twelve years, he has tested and promoted hundreds of adventurers from Iron to Gold ranks. He specializes in evaluating physical fighters – warriors, rogues, rangers, monks – but can test any combatant. His nickname "Hummingbird" is ironic; he is a heavy, powerful fighter, not fast. The name comes from his crest, not his style.',
    equipment: [
      { icon: '⚔️', name: 'The Examiner\'s Blade', note: 'A heavy longsword with a dulled edge for exams. It still hurts – a lot – but rarely draws blood.' },
      { icon: '🛡️', name: 'Judgment Shield', note: 'A tower shield painted with the Guild crest. He uses it to block and test an applicant\'s offensive pressure.' },
      { icon: '📜', name: 'Examiner\'s Seal', note: 'A wax seal used to stamp promotion certificates. He keeps it on a chain around his neck.' }
    ],
    abilities: {
      'Iron Grip': 'His shield work is immaculate; breaking through his defense requires genuine skill or clever tactics.',
      'Patient Observer': 'He studies his opponent during the exam, gradually increasing pressure to find their breaking point.',
      'The Final Exchange': 'A single, powerful counter-attack that ends the exam when he judges the applicant has shown enough.'
    },
    signature: {
      name: 'The Examiner\'s Judgment',
      desc: 'After assessing an applicant\'s full capabilities, Alistair delivers a single decisive blow. If the applicant blocks or dodges, they pass. If they fall, they fail – but he will explain why.'
    },
    strengths: ['Mastery of defensive combat', 'Decades of combat experience', 'Keen eye for talent and weakness', 'Patient and fair'],
    weaknesses: ['Slower due to old injury', 'Less effective vs purely magical opponents (he will still test them, but refers to mage examiners for final rank-ups)', 'Tends to overexplain after exams'],
    feats: [
      'Promoted over 800 adventurers in 12 years',
      'Only 12 applicants have ever landed a clean hit on him',
      'Trained three current Gold-rank warriors',
      'Once caught a collapsing ceiling beam with his shield – saved three junior examiners'
    ],
    teammates: [
      { name: 'Master Lyn', relation: 'Fellow Guild examiner (lore/magic). They respect each other but rarely interact.' },
      { name: 'King Aldric Valemont', relation: 'Former party member. Alistair was the Red Wings\' shield before retiring.' }
    ],
    teamRole: 'Combat Examiner (former vanguard/defender)',
    reputation: 'Well-respected among adventurers. Many Gold-ranks remember their promotion exam with him fondly – or at least respectfully. Juniors call him "Iron Hummingbird" behind his back.',
    nickname: '"Iron Hummingbird" (ironic, affectionate)',
    misc: {
      Hobbies: 'Blacksmithing (makes practice weapons for the Guild), woodcarving, fishing',
      Likes: 'A fair fight, tea, good craftsmanship',
      Dislikes: 'Cocky applicants, dishonorable tactics, paperwork',
      Trivia: 'He chose the hummingbird crest because his young daughter loved them. She is now a Copper-rank adventurer herself.'
    },
    stats: {
      rank: 'Former Gold',
      values: { 'Defense': 612, 'Combat Assessment': 598, 'Shield Mastery': 587, 'Physical Conditioning': 543 },
      bars: { 'Defense': '#D4A04A', 'Combat Assessment': '#4A9B7C', 'Shield Mastery': '#00Bcd4', 'Physical Conditioning': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(alistairHummingbird);
    console.log('Alistair Hummingbird loaded.');
  }
})();