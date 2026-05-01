// solo/meg-helsford-data.js
(function() {
  const meg = {
    id: 'meg_helsford',
    name: 'Meg Helsford',
    title: '',
    avBg: '#E6C2A5',
    avColor: '#6B3E1A',
    avText: 'MH',
    accentColor: '#B87333',
    rankLabel: 'Gold',
    role: 'Warrior / Axeman',
    category: 'Solo',
    basic: {
      Age: '22',
      Gender: 'Male',
      Height: '1.75 m',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild (Solo)',
      Rank: 'Gold',
      Role: 'Warrior / Axeman'
    },
    appearance: 'Average height with a strong, muscular build built from years of logging and heavy lifting. Brown hair kept short and practical, often slightly messy from work. He has a broad, friendly face with dark brown eyes that light up when he talks about his woodworking or the market. His hands are calloused, with a few small scars. He typically wears a beige linen shirt, leather logging suspenders over his broad shoulders, baggy beige pants, sturdy work boots, and thick leather gloves. He carries a well‑maintained single‑bladed axe on his belt – the same one he uses for felling trees, though he has a second, battle‑ready axe for adventuring. He exudes a quiet confidence that comes from physical labour, not combat training, which makes him seem unexpectedly competent.',
    personality: 'Steady, hard‑working, and surprisingly gentle for his size. He is not quick to anger, but he is fiercely protective of his little brother and their family business. He is also quietly smitten with Mary – he has never told her directly, but his attentiveness (remembering her favourite tea, noticing when she seems tired) has not gone unnoticed by her childhood friends Brehn and Coyote (who tease him mercilessly when she is not around). He is humble about his strength, never boasting, and he treats adventuring as an extension of his work ethic: show up, do the job, go home. He does not seek glory, but he is proud to have earned Gold rank through honest effort.',
    background: 'Meg and his younger brother run a successful woodworking and general goods shop near the market district. He still works as a lumberjack, felling trees and supplying lumber to the city. One afternoon while scouting a new logging spot in the forest, he came across Mary experimenting with her Earth Manipulation magic. She was turning patches of ground into mud, testing the limits of different soil types. He watched quietly for a while, then asked if she needed a hand. They talked for over an hour; he told her about logging, she explained her magic. When he casually demonstrated his strength by felling a thick tree trunk with a single, precise axe swing, Mary was genuinely impressed. She suggested, almost offhand, that he would make a fine adventurer. The idea stuck. A few weeks later, after Mary, Brehn, and Coyote became regular customers at his shop (Mary always buying small wooden items, sometimes alone), Meg decided to register at the guild. He passed the exams on his first try, largely due to his raw strength and surprising combat instinct – he had never trained formally, but logging had taught him how to read wood grain, balance, and deliver a decisive blow.',
    equipment: [
      { icon: '🪓', name: 'The Feller (Battle Axe)', note: 'A heavy, single‑bladed axe with a dark steel head and a reinforced ash haft. Meg had it forged after he decided to become an adventurer – it is modelled on his logging axe but balanced for combat. He sharpens it himself.' },
      { icon: '🪓', name: 'Timber (Logging Axe)', note: 'His original work axe, still kept on his belt. He rarely uses it in combat, but he likes having it as a backup and a reminder of where he came from.' },
      { icon: '🧤', name: 'Leather Work Gloves', note: 'Thick, reinforced gloves he wears for logging. They have saved his hands from splinters and minor cuts more times than he can count.' },
      { icon: '🎒', name: 'Market Satchel', note: 'A sturdy leather satchel he carries on supply runs. It now holds adventuring essentials: basic first aid, rope, dried rations, and a small carving knife – he likes to whittle during downtime.' }
    ],
    abilities: {
      'Offensive Arts': [
        'Lightning Cleave – a wide, horizontal axe swing that crackles with electrical energy; deals bonus lightning damage and can arc to one additional nearby enemy',
        'Impact Slice – a vertical chop that concentrates all force into a single point; ignores 30% of enemy armor and has a chance to stagger'
      ],
      'Defensive Arts': [
        'Parry – uses the flat of his axe blade to deflect an incoming melee attack; reduces damage by 75% if timed correctly',
        'Deflection – angles the axe to redirect a projectile (arrows, small bolts) away from himself or an adjacent ally'
      ],
      'Passive': [
        'Lumberjack’s Grip – cannot be disarmed; his hands are too strong and his axe feels like an extension of his arm',
        'Market Rep – shopkeepers and traders recognise him; social checks against merchants are easier'
      ]
    },
    signature: {
      name: 'The Feller’s Fall',
      desc: 'Meg channels his logging experience into a single, devastating axe stroke aimed at an enemy’s leg or structural weak point (like a golem’s ankle). The target must make a Strength save or be knocked prone and take bonus damage. Against wooden constructs or plant‑based enemies, the damage is doubled and the prone chance becomes automatic. Meg usually mutters “timber” under his breath as he swings – a habit Mary once laughed at, and he has never been able to break.'
    },
    strengths: [
      'Exceptional raw strength – highest base damage among Silver/Gold hybrids',
      'Very durable – logging has given him high stamina and pain tolerance',
      'Simple, effective fighting style – hard to predict because he has no formal training',
      'Connections in the market district – good for information and discounts'
    ],
    weaknesses: [
      'No formal combat training – his technique is rough and can be exploited by skilled duelists',
      'Slow attack speed – heavy axe wind‑ups leave him open',
      'Limited tactical knowledge – he relies on instinct rather than strategy',
      'Emotionally attached – a direct threat to Mary could make him reckless'
    ],
    strategy: 'Close the distance quickly, deliver heavy blows, and rely on Mary’s (or another party member’s) support if needed. When alone, he focuses on one enemy at a time, using Parry to buy time and Lightning Cleave to clear groups. He never retreats from a fair fight, but he is not suicidally stubborn – he will withdraw if clearly outmatched.',
    bestAgainst: [
      'Slow, heavily armoured enemies (armour means little against his raw power)',
      'Wooden constructs or plant creatures (he knows wood)',
      'Intimidated enemies – his size and calm demeanour can be unnerving'
    ],
    struggleAgainst: [
      'Fast, dodging enemies (he cannot land a solid hit)',
      'Enemies that attack from range (his projectile deflection is only for arrows and small bolts)',
      'Magical crowd control (he has no mental defence training)'
    ],
    feats: [
      'Defeated a Bronze golem in a solo C‑rank mission by targeting its knee joints with Impact Slice – the golem collapsed and he finished it with a second swing',
      'Once carried an injured fellow adventurer 6 km back to town on his shoulders, still holding his axe',
      'His shop’s reputation has grown because adventurers like buying from a fellow adventurer; his brother now handles most of the business side'
    ],
    teammates: [],
    teamRole: 'Solo adventurer, but often informally collaborates with Blue Constellation members on gathering missions. He prefers to work alone or with a small group he trusts (primarily Mary and her circle).',
    reputation: 'Well liked in the market district as a fair businessman and helpful neighbour. Among adventurers, he is known as the “lumberjack who can actually fight”. Some Gold‑rank veterans initially dismissed him, but after witnessing his raw power, they stopped joking.',
    nickname: '“The Feller” (given by a guild clerk after his first solo mission, referencing his logging background). He does not mind it.',
    misc: {
      Hobbies: 'Wood carving (small animals and figurines), heavy lifting competitions at the market, cleaning drainage ditches (it is oddly satisfying)',
      Likes: 'Morning market crowds, the smell of fresh‑cut wood, watching the sunrise from the forest, Mary’s smile (he will never admit that)',
      Dislikes: 'Scammers, people who interrupt his workout routine, anyone flirting with Mary within his earshot (he gets quiet and tense – it is unnerving)',
      Trivia: 'He once carved a small wooden bird and left it on Mary’s usual seat at the guild tavern. She still keeps it on her desk. He does not know that she knows it was him.'
    },
    stats: {
      rank: 'Gold',
      values: {
        'Phys ATK': 542,
        'Phys DEF': 478,
        'Magic ATK': 243,
        'Magic DEF': 312,
        Mana: 187,
        Speed: 387,
        'Raw Strength': 598,
        'Stamina': 512
      },
      bars: {
        'Phys ATK': '#D85A30',
        'Phys DEF': '#D85A30',
        'Magic ATK': '#534AB7',
        'Magic DEF': '#534AB7',
        Mana: '#7F77DD',
        Speed: '#1D9E75',
        'Raw Strength': '#B87333',
        'Stamina': '#BA7517'
      }
    }
  };

  if (window.REGISTRY) {
    window.REGISTRY.registerAdventurer(meg);
    console.log('Meg Helsford (The Feller) loaded successfully.');
  } else {
    console.error('Registry core not loaded. Make sure registry-core.html is loaded first.');
  }
})();