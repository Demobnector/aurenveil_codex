// solo/kaelen-mori-data.js
(function() {
  const kaelen = {
    id: 'kaelen_mori',
    name: 'Kaelen Mori',
    title: 'The Outlier',
    avBg: '#2C3E4E',
    avColor: '#D5E8F0',
    avText: 'KM',
    accentColor: '#5D8AA8',
    rankLabel: 'Iron',
    role: 'Spell-Fencer',
    category: 'Solo',
    basic: {
      Age: '19',
      Gender: 'Male',
      Height: '1.68 m',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild (Solo)',
      Rank: 'Iron',
      Role: 'Spell-Fencer'
    },
    appearance: 'Standing at 1.68 m with a compact, wiry build – deceptively strong for his size. Dark, slightly tousled hair falls across his forehead, and his eyes are a sharp, observant grey, always scanning for details others miss. He wears a mix of local leather armor over a high‑collared dark coat that looks slightly too modern for the setting – straight seams, asymmetric zipper, no visible laces. His shortsword is unadorned, but its blade glows with faint, rhythmic pulses of light, like a heartbeat. He moves with economical precision, never wasting motion.',
    personality: 'Quietly analytical and intensely private. He speaks only when necessary, and his words are chosen with care. He does not seek attention, downplays his abilities, and has deliberately stayed Iron rank for a year despite being capable of higher. He observes everything – combat patterns, social dynamics, even the way people take their tea. He finds flashy heroes exhausting and inefficient chanting tedious. Beneath the reserved exterior, he has a dry, almost deadpan sense of humour that surfaces rarely but memorably.',
    background: 'Kaelen was a college student in another world – one with technology, the internet, and late‑night study sessions. He spent his time between the gym and the library, training his body and his mind. During a late‑night studying, he was transported. No summoning circle, no prophecy – just a sudden shift. He adapted by treating this new world as a system to be understood, not conquered. His magic manifested differently than anyone expected – no fireballs, no lightning bolts – so the Guild struggled to rank him. He accepted Iron and has remained there because higher ranks bring attention, and attention brings questions he does not want to answer. He works alone, takes low‑profile jobs, and quietly analyses the laws of this world, looking for "exploits".',
    equipment: [
      { icon: '⚔️', name: 'Pulse-Edge (Shortsword)', note: 'A plain steel shortsword that glows with rhythmic pulses – a side effect of his kinetic magic coursing through it constantly. The light is faint, visible only in darkness, and quickens when he is threatened.' },
      { icon: '🧥', name: 'High‑Collar Dark Coat', note: 'A sturdy, dark coat with straight seams and an asymmetric closure. It looks slightly out of place, like something from a different era – because it is. He made it himself to replicate modern outerwear.' },
      { icon: '📓', name: 'Observation Journal', note: 'A small, nondescript notebook filled with tiny, precise handwriting. Contains notes on mana patterns, creature behaviour, and the occasional sketch of local flora. Also has a few pages of what looks like programming code – but no one here recognises it.' }
    ],
    abilities: {
      'Kinetic Magic': [
        'Vector Thrust – Touches an object (or his sword) and multiplies its forward momentum instantly. Turns a simple swing into a supersonic strike. Exhausting if used repeatedly.',
        'Chain Burst – Marks multiple points on an enemy with invisible kinetic anchors. When triggered, the air molecules at those points compress and explode outward simultaneously. Limited range.'
      ],
      'Defensive Magic': [
        'Refraction Field – A thin, shimmering coat over his skin that doesn’t block hits but slides them off at a 45° angle. Direct hits become glancing blows. Cannot stop area effects.',
        'Gravity Anchor – Increases his personal weight tenfold for a split second. Used to prevent being knocked back by heavy blows or wind magic.'
      ],
      'Passive Magic': [
        'System Overclock – His brain processes information at double speed, allowing him to perceive the world in slow motion during high‑stress combat. Causes headaches if maintained too long.',
        'Mana Sense (Low‑Noise) – Detects mana signatures like radar, but filtered to see only "threat intent". Prevents sensory overload in crowded areas.'
      ],
      'Healing Magic': [
        'Cellular Re‑Sync – Forces his body into a high‑speed recovery state, closing minor cuts and stopping internal bleeding within minutes. Cannot heal deep wounds instantly.'
      ],
      'Martial Arts': [
        'Point‑Blank Flash – A sword technique based on the "zero‑inch punch" principle. Delivers maximum force with almost no wind‑up or movement.',
        'Flicker Step – Uses explosive calf strength to vanish from an opponent’s line of sight. Short burst, covers only a few metres.',
        'Flowing Palm – A defensive martial art that uses the opponent’s own momentum to throw them, requiring very little physical strength.'
      ],
      'Passive Physical': [
        'Endurance Engine – Through specialised breathing techniques, maintains a sprint heart rate for hours without lactic acid build‑up.',
        'Precision Grip – Abnormally high grip strength for his size. Nearly impossible to disarm him once his hand is on a hilt.'
      ]
    },
    signature: {
      name: 'Momentum Collapse',
      desc: 'Kaelen touches a solid object (a wall, the ground, an enemy’s shield) and reverses its kinetic inertia completely. A charging enemy stops dead, taking full damage from their own momentum. An incoming projectile freezes mid‑air and drops. It cannot be used on living tissue directly. Extremely exhausting – one use per fight, max.'
    },
    strengths: [
      'Excellent tactical assessment – sees patterns and weak points instantly',
      'High burst damage with Vector Thrust',
      'Difficult to hit (Refraction Field + Flicker Step)',
      'Low profile – no one expects much from an Iron‑rank solo'
    ],
    weaknesses: [
      'Low endurance for sustained combat – exhaustion builds quickly',
      'No traditional offensive magic – cannot damage fire‑immune or ghost‑type enemies',
      'Physically small – reach disadvantage against larger opponents',
      'Deliberately hides his capabilities – sometimes to his own detriment'
    ],
    strategy: 'Observe first. Identify enemy attack patterns. Use Mana Sense to gauge threat level. If engagement is unavoidable: close distance with Flicker Step, strike with Point‑Blank Flash, disengage with Refraction Field. Never prolong a fight. Retreat is always an option.',
    bestAgainst: ['Single, predictable enemies', 'Physical attackers he can read', 'Slow, heavy hitters (outmanoeuvre)'],
    struggleAgainst: ['Unpredictable chaotic enemies', 'Area magic that ignores Refraction Field', 'Fights that require sustained output'],
    feats: [
      'Solo‑cleared a D‑rank monster nest that had been assessed as C‑rank – used tactical analysis to separate and eliminate them one by one',
      'Discovered a "mana resonance exploit" that allows two small spells to be cast simultaneously – has not shared it with the Guild',
      'Has never been hit by the same attack pattern twice – his System Overclock logs combat data instantly'
    ],
    teammates: [],
    teamRole: 'Solo operative. Occasionally takes low‑profile requests from the Guild that require discretion rather than power.',
    reputation: 'Barely known. The Guild files list him as "Iron, Spell‑Fencer (unorthodox), no fixed address, payment always in cash". Senior adventurers note that his job completion rate is unusually high for his rank.',
    nickname: '"The Outlier" (given by a Guild clerk who noticed his file stats didn’t match his rank)',
    misc: {
      Hobbies: 'Translating ancient runes into symbolic logic, trying to recreate "junk food" with local ingredients, speed‑reading through the Guild archive',
      Likes: 'Efficiency, cold drinks, finding "exploits" in the world’s rules',
      Dislikes: 'Flashy heroes, inefficient chanting, being underestimated because of his height',
      Trivia: 'He once tried to make a hamburger. The bread was wrong, the meat was gamey, and there was no cheese. He considered it a "work in progress".'
    },
    stats: {
      rank: 'Iron',
      values: {
        'Phys ATK': 287,
        'Phys DEF': 243,
        'Magic ATK': 378,
        'Magic DEF': 312,
        Mana: 423,
        Speed: 389,
        'Kinetic Control': 456,
        'Analysis': 489
      },
      bars: {
        'Phys ATK': '#D85A30',
        'Phys DEF': '#D85A30',
        'Magic ATK': '#534AB7',
        'Magic DEF': '#534AB7',
        Mana: '#7F77DD',
        Speed: '#1D9E75',
        'Kinetic Control': '#5D8AA8',
        'Analysis': '#BA7517'
      }
    }
  };

  if (window.REGISTRY) {
    window.REGISTRY.registerAdventurer(kaelen);
    console.log('Kaelen Mori (The Outlier) loaded successfully.');
  } else {
    console.error('Registry core not loaded.');
  }
})();