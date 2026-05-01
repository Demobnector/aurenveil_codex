// solo/delsaran-data.js
(function() {
  const delsaran = {
    id: 'delsaran',
    name: 'Delsaran Dorjeon',
    title: 'The Professor of the Deep Dungeon',
    avBg: '#EEEDFE',
    avColor: '#26215C',
    avText: 'DE',
    accentColor: '#534AB7',
    rankLabel: 'Gold ~ Diamond',
    role: 'Mage / Scholar',
    category: 'Solo',
    basic: {
      Age: '163',
      Gender: 'Male',
      Height: '1.82 m',
      Race: 'Elf',
      Affiliation: 'Noble Academy (Professor) / Adventurer\'s Guild',
      Rank: 'Gold ~ Diamond',
      Role: 'Mage / Dungeon Scholar'
    },
    appearance: 'Tall and lean with the particular economy of motion that comes from centuries of not wasting energy. Silver-white hair, kept long and bound at the nape of his neck with a simple leather cord – the same style he has worn for over a hundred years, though no one has asked him why he never changed it. Deep indigo eyes that hold the weight of accumulated decades, carrying a perpetual glint of mild amusement at the impatience of shorter-lived races. His skin is pale but not fragile – elves age differently, and he looks perhaps forty by human reckoning. He wears layered academic robes of deep charcoal blue with silver trim, identical to his teaching attire because he sees no reason for a distinction between lecture hall and dungeon corridor. A staff of clearly non-human origin rests in his left hand – the wood is dark, almost black, and seems to drink in torchlight rather than reflect it. His posture is impeccable, his movements unhurried, and he has the particular stillness of someone who has outlived several generations of arguments about whether he is past his prime. A small glass lens on a chain hangs across his chest, occasionally catching light with a faint violet shimmer.',
    personality: 'Dry, precise, and quietly delighted by things that other people find either mundane or terrifying. He has been doing this long enough that very little surprises him and almost nothing frightens him. He is an excellent teacher because he genuinely enjoys watching people understand things – that moment of comprehension, across the faces of young adventurers, has not grown old in over a century. In the dungeon he works with the same methodical care he brings to a lecture: cataloguing, assessing, and acting with the minimum force required. He is not ruthless, but he is extremely efficient. He finds younger adventurers endearing in a way he is careful not to make condescending – they remind him of himself, several decades ago, before he learned patience. He drinks tea slowly, reads everything he can find, and has been known to correct dungeon spawn patterns out loud when they deviate from his documentation. The students at the academy have learned not to challenge his fieldwork notes.',
    background: 'One hundred and sixty-three years is a long time to specialize. Delsaran spent his first several decades as a conventional adventuring mage, reaching what would now be classified as Diamond-range capability through raw talent, accumulated experience, and the natural mana depth of elven physiology. He cleared dungeons, fought creatures that have since become legends, and accumulated enough wealth that he stopped counting. At some point – accounts vary on exactly when – he found a dungeon that he decided to understand completely rather than just clear. Not defeat it. Understand it. He has spent the last several decades teaching at the noble academy and descending into that same dungeon with his students as a controlled field environment. He knows every corridor, every spawn pattern, every ambient mana fluctuation. The dungeon is, effectively, his classroom with higher stakes. Guild examiners classified him Gold on paper because that is what his registered missions reflect – he has not submitted a formal rank reassessment in forty years, and no examiner has pressed the issue. Anyone who has seen him work knows the classification is a formality. He has outlived four guild directors. He has politely declined to attend the memorial services for two of them because he was mid-dungeon.',
    equipment: [
      { icon: '🪄', name: 'Ancient Staff (Name Unknown)', note: 'A staff of clearly non-human manufacture that predates the current kingdom\'s founding. The material has no identified match in the royal archives. It amplifies magical output significantly and appears to self-repair minor damage – cracks that should compromise its integrity vanish within hours. Delsaran has never explained where it came from, and no one has pressed the question twice. The first person who did reportedly received a look that ended the conversation permanently.' },
      { icon: '📚', name: 'Dungeon Codex (Personal)', note: 'A hand-annotated tome containing 140 years of personal dungeon research. Spawn tables, mana mapping, environmental magic fluctuation records, 22 years of student field notes, and approximately one hundred and seventy pages of corrections to official guild documentation. The guild archivists have requested a copy repeatedly. He has not provided one. He has, however, sent them a single-page list of errors in their current catalogs, written in precise, unforgiving script. They framed it.' },
      { icon: '🔮', name: 'Resonance Lens', note: 'A small glass lens worn on a silver chain. When he looks through it, he perceives mana density, flow patterns, and magical signatures as visible light – currents become colors, concentrations become brightness, disturbances become shadows. Essential to his dungeon research methodology, it has not left his person in over eighty years.' },
      { icon: '🖋️', name: 'Scribe\'s Quill (Self-Inking, Magical)', note: 'A custom-enchanted quill that never runs out of ink and records his dictation in his own handwriting. He uses it constantly during expeditions, muttering observations that the quill transcribes directly into his codex. Students have learned not to eavesdrop; his field notes are dense, and he does not pause for questions.' }
    ],
    abilities: {
      'Offensive Magic': [
        'Cascade Bolt – chained lightning that jumps between multiple targets in sequence; can hit up to twelve enemies if positioned correctly',
        'Gravity Collapse – local gravity spike that crushes targets or immobilizes large creatures; effectively a magical root that cannot be broken by physical strength',
        'Void Lance – high-penetration magic spear that ignores standard magical resistance; designed for armored dungeon guardians'
      ],
      'Defensive Magic': [
        'Absolute Field – a near-impenetrable magic barrier sized for a small group; can withstand sustained assault from A-rank creatures for up to two minutes',
        'Counter Seal – reverses incoming magic back toward its origin; requires precise timing but has returned spells to casters with interest',
        'Null Zone – cancels all magical activity within a defined radius, including hostile enchantments and his own; a last resort that resets the magical environment'
      ],
      'Research Magic': [
        'Mana Mapping – reads the entire mana environment of a space in seconds; he can describe a dungeon\'s magical "shape" before entering',
        'Dungeon Reading – identifies dungeon type, age, spawning logic, and trap placement from ambient signatures alone',
        'Spawn Prediction – based on mana density readings, predicts enemy type and quantity before they manifest; his accuracy is approximately 94% in his home dungeon'
      ],
      'Passive': [
        'Elven Mana Depth – base mana pool several times larger than any human at equivalent rank; sustained casting over hours does not fatigue him',
        'Age Accumulation – 163 years of magical technique refinement; no wasted motion, no inefficient channeling, no unnecessary expenditure',
        'Student Ward – passive spell that monitors and protects registered students within range; he knows the moment one of his students enters a dangerous area, even if he is not accompanying them'
      ]
    },
    signature: {
      name: 'Dungeon Authority',
      desc: 'In a dungeon he has previously mapped – and he has mapped his home dungeon exhaustively – Delsaran can manipulate the dungeon\'s ambient mana field itself: redirecting spawns, sealing corridors, accelerating or suppressing trap triggers, and adjusting local mana density. He is not fighting the dungeon. He is operating the dungeon. Outside his home dungeon, this ability is significantly limited, but the underlying mana-reading that makes it possible is always active. The dungeon, he has said on record, "is a machine. You do not fight a machine. You learn its levers."'
    },
    strengths: [
      'Mana pool and magic ceiling approach Diamond-tier regardless of registered rank – guild records indicate he has not cast at full capacity in over thirty years',
      'Dungeon knowledge is encyclopedic – he is never surprised in an environment he has mapped, and he has mapped more dungeons than any living adventurer',
      'Teaching experience means he coordinates with less-experienced partners with exceptional efficiency; he can manage a party without saying a word',
      'Ancient staff amplifies output to a degree that makes peer comparison difficult; its exact limits are unknown because he has not needed to reach them'
    ],
    weaknesses: [
      'Physical stats are minimal – direct physical combat is not merely inadvisable, it is nearly impossible; he has not thrown a punch in living memory',
      'Speed is limited – his approach is methodical, not reactive; in a race against a fast opponent, he loses',
      'His home dungeon is his peak environment; unfamiliar territory reduces his effectiveness significantly, though he still exceeds most Gold-rank mages'
    ],
    strategy: 'Map first. Understand the environment. Identify the most efficient path to resolution. Use exactly as much force as is necessary and no more. If students are present, ensure they observe safely; if alone, treat the dungeon as a research opportunity first and a combat encounter second.',
    bestAgainst: [
      'Any enemy type he has prior documentation on – which is most of them',
      'Magic-type creatures where his magical ceiling is categorical; he can out-cast almost anything',
      'Environmental dungeon hazards that yield to mana manipulation; traps are not threats to him, they are features'
    ],
    struggleAgainst: [
      'Fast close-range physical attackers in open terrain – his casting time, while short, is not instant',
      'Situations requiring immediate reactive decisions over methodical planning; he prefers to prepare',
      'Unknown dungeon environments without prior mapping – though he maps faster than anyone'
    ],
    feats: [
      'Solo-cleared a dungeon that a 6-person Gold-rank party had failed to complete – three times, on different days, to verify the route. The guild asked him to stop. He has not stopped.',
      'Conducted a 22-year continuous longitudinal study of a single dungeon\'s spawn behavior – the findings have not been published; he is still compiling. The report, he estimates, will be ready in another decade.',
      'Stopped a dungeon mana surge that would have collapsed a noble district by single-handedly redirecting the flow into a contained field. The event is recorded in guild archives as "the Dorjeon Containment." He considers it routine maintenance.',
      'Has outlived four guild directors. Has politely declined to attend the memorial services for two of them because he was mid-dungeon. The remaining two received handwritten condolences in his precise script. He meant them.'
    ],
    teammates: [],
    teamRole: 'Independent researcher and occasional supervisor. He does not seek parties; parties sometimes seek him for his expertise. He accepts on a case-by-case basis, and he does not lower his standards.',
    reputation: 'Universally regarded as the kingdom\'s most powerful registered mage by those who understand magic. His Gold rank is treated as an administrative anomaly – the guild directors have informally agreed not to reassess him because his response to any request would be a politely worded refusal. The Diamond-rank adventurers who have observed his work tend not to dispute comparisons with their own capabilities. Junior adventurers sometimes ask if he is "actually that good." Senior adventurers do not answer; they just nod.',
    nickname: '"The Professor." Used by students, guild staff, and eventually everyone else. He has never objected to it. He has also never acknowledged it.',
    misc: {
      Hobbies: 'Dungeon cartography, enchantment theory, teaching, long-form correspondence with other elven scholars (his handwriting is legendary for its precision)',
      Likes: 'Methodical students, accurate records, a dungeon that behaves consistently, tea without interruption, the particular silence of a research dungeon after the spawns have been suppressed',
      Dislikes: 'Wasted magical potential, adventurers who skip documentation, being rushed, incorrect citations of his own work, anyone who says "we didn\'t need to document that"',
      Trivia: 'He has never lost a student in a dungeon. Not once. Over forty-three years of teaching practical fieldwork. The academy does not acknowledge this statistic publicly because it sounds implausible. He does not correct them; he simply continues.'
    },
    stats: {
      rank: 'GoldDiamond',
      values: {
        'Phys ATK': 510,
        'Phys DEF': 518,
        'Magic ATK': 662,
        'Magic DEF': 644,
        Mana: 690,
        Speed: 525,
        'Dungeon Mastery': 699,
        Intellect: 668
      },
      bars: {
        'Phys ATK': '#D85A30',
        'Phys DEF': '#D85A30',
        'Magic ATK': '#534AB7',
        'Magic DEF': '#534AB7',
        Mana: '#7F77DD',
        Speed: '#1D9E75',
        'Dungeon Mastery': '#639922',
        Intellect: '#BA7517'
      }
    }
  };

  if (window.REGISTRY) {
    window.REGISTRY.registerAdventurer(delsaran);
    console.log('Delsaran Dorjeon (Professor of the Deep Dungeon) loaded successfully.');
  } else {
    console.error('Registry core not loaded. Make sure registry-core.html is loaded first.');
  }
})();