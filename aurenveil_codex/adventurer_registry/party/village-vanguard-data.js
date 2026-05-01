// party/village-vanguard-data.js
(function() {
  const members = [
    // ========== SILAS VANE (Tactical Lead, Spearman) ==========
    {
      id: 'silas_vane',
      name: 'Silas Vane',
      title: 'The Sharpened Spear',
      avBg: '#C3B89C',
      avColor: '#4A3B2C',
      avText: 'SV',
      accentColor: '#8B7A5C',
      rankLabel: 'Iron',
      role: 'Spearman / Mid-range Control',
      category: 'Parties',
      basic: {
        Age: '17',
        Gender: 'Male',
        Height: '1.72 m',
        Race: 'Human',
        Affiliation: 'The Village Vanguard',
        Rank: 'Iron',
        Role: 'Spearman / Tactical Lead'
      },
      appearance: 'Lean and wiry with messy chestnut hair tied back with a leather cord. His eyes are a sharp hazel, often scanning the horizon for threats. He wears well‑fitted reinforced leather armor, scuffed but meticulously maintained. His ash‑wood spear is always close at hand, the steel tip polished to a dull gleam. A small leather pouch on his belt holds his whittling knife and a few half‑finished wooden charms.',
      personality: 'Thoughtful and observant, Silas carries the weight of leadership with quiet determination. He feels a heavy responsibility to ensure his friends make enough coin to send back to their families. He speaks little but listens carefully. He is not naturally charismatic, but his plans are sound, and his team trusts him. Under stress, he becomes quieter, focusing entirely on the problem at hand.',
      background: 'Son of the village carpenter, Silas learned precision and patience from watching his father work. He was the one who convinced Bram and Ren that their village was too small for their ambitions – that there was more to life than milling grain and sewing clothes. He studied monster anatomy from an old, tattered book a travelling merchant left behind. He feels the pressure of his decision every day, but he hides it well.',
      equipment: [
        { icon: '🏹', name: 'Ash-wood Spear', note: 'A well‑maintained spear with a steel tip and leather grip. The shaft is straight and true, balanced for thrusting. Silas carved his name into the base – a tradition from his village.' },
        { icon: '🧥', name: 'Reinforced Leather Armor', note: 'Dark brown leather with steel studs over vital areas. Light enough not to restrict movement, tough enough to stop a glancing blow.' },
        { icon: '🪚', name: 'Whittling Knife', note: 'A small, sharp knife used for carving wooden charms. Silas gives them to friends as gifts. He believes they bring luck.' }
      ],
      abilities: {
        'Offensive Arts': [
          'Viper’s Thrust – A high‑speed sequence of stabs targeting joints and gaps in armor. Three rapid strikes, each finding a weak point.',
          'Low Sweep – A long arc aimed at the ankles, trips charging enemies.'
        ],
        'Defensive Arts': [
          'Vaulting Pivot – Uses his spear to pole‑vault out of the way of low sweeps or ground‑based attacks, landing several meters away.',
          'Point Guard – Holds the spear horizontally, deflecting arrows and projectiles aimed at his allies behind him.'
        ],
        'Passive': [
          'Tactical Eye – After two rounds of observation, Silas identifies an enemy’s defensive weakness, granting his party +10% accuracy against that target.'
        ]
      },
      signature: {
        name: 'Heart-Seeker Thrust',
        desc: 'After studying an enemy’s movements, Silas delivers a single, perfectly aimed thrust at a vital point – throat, heart, or eye. This attack ignores all armor and has a 20% chance to instantly kill a non‑boss enemy. Against bosses, it deals triple damage. Requires a full round of concentration; if Silas is hit before executing, the attempt fails.'
      },
      strengths: [
        'Excellent battlefield awareness',
        'Can control enemy positioning with spear reach',
        'Light on his feet – hard to pin down',
        'Loyal – will not abandon his teammates'
      ],
      weaknesses: [
        'Low physical defense – vulnerable if flanked',
        'No magic – completely mundane',
        'Overthinks – can hesitate in split‑second decisions',
        'Feels responsible for everything – heavy mental burden'
      ],
      strategy: 'Stay behind Bram’s shield, use spear to keep enemies at range, call targets for Ren. If an enemy breaks through, reposition with Vaulting Pivot and reset.',
      bestAgainst: ['Armored humanoids (joint strikes)', 'Slower enemies he can outrange', 'Single tough opponents'],
      struggleAgainst: ['Fast swarms that bypass his reach', 'Enemies with projectile attacks', 'Magical area attacks'],
      feats: [
        'Killed a C‑rank bandit leader by driving his spear through the man’s gorget – a perfect joint strike',
        'Trained Bram and Ren in basic combat formations using wooden sticks',
        'Carved a charm for each of the four families in his village. No one has lost a loved one since (coincidence, he says)'
      ],
      teammates: [
        { id: 'ren_koda', name: 'Ren Koda', role: 'Dual Daggers / Scout', rel: 'Childhood friend. Silas worries about his recklessness but trusts his instincts.', avBg: '#B8A99A', avColor: '#2C2E3E', avText: 'RK' },
        { id: 'bram_miller', name: 'Bram Miller', role: 'Shield-bearer / Mace', rel: 'The anchor. Silas knows Bram will never break.', avBg: '#A89E8A', avColor: '#4B3D2C', avText: 'BM' }
      ],
      teamRole: 'Tactical lead and mid‑range control. He calls the shots and keeps enemies at a distance.',
      reputation: 'Unknown outside his village. Among local adventurers, he is seen as "that kid with the spear who actually knows where to put it."',
      nickname: '"Spear" (Ren’s nickname, used teasingly)',
      misc: {
        Hobbies: 'Whittling wooden charms, studying monster anatomy sketches, walking perimeter at night',
        Likes: 'Clean equipment, herbal tea, maps',
        Dislikes: 'Overconfident "Gold Ranks", rainy weather (slippery shafts), debt',
        Trivia: 'He has never lost a bet with Ren – because he never bets.'
      },
      stats: {
        rank: 'Iron',
        values: { 'Phys ATK': 278, 'Phys DEF': 243, 'Magic ATK': 0, 'Magic DEF': 143, Mana: 0, Speed: 298, Precision: 312, 'Reach Control': 287 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', Precision: '#8B7A5C', 'Reach Control': '#BA7517' }
      }
    },
    // ========== RENZO "REN" KODA (High-Speed Specialist) ==========
    {
      id: 'ren_koda',
      name: 'Ren Koda',
      title: 'The Blur',
      avBg: '#B8A99A',
      avColor: '#2C2E3E',
      avText: 'RK',
      accentColor: '#5D6D7E',
      rankLabel: 'Iron',
      role: 'Dual Daggers / Scout',
      category: 'Parties',
      basic: {
        Age: '16',
        Gender: 'Male',
        Height: '1.60 m',
        Race: 'Human',
        Affiliation: 'The Village Vanguard',
        Rank: 'Iron',
        Role: 'Dual Daggers / Scout'
      },
      appearance: 'Shorter than the others but incredibly athletic, with lean, corded muscles. He has sharp, dark eyes that seem to notice everything – and a restless energy that makes him constantly shift from foot to foot. His black hair is cropped short and messy. He wears dark, form‑fitting clothes with many hidden pockets for tools, whetstones, and a deck of worn playing cards. His twin daggers are sheathed at the small of his back, crosswise, for a quick draw.',
      personality: 'Impulsive, competitive, and relentlessly energetic. Ren cannot sit still; he fidgets, tosses coins, or practices knot‑tying during downtime. He is fiercely loyal to Silas and Bram, though he mocks them constantly. He has a sharp, sarcastic sense of humour. Under pressure, his jokes become more frequent – a tell that he is scared.',
      background: 'Ren grew up helping his mother with her tailoring business. His incredible hand‑eye coordination and finger dexterity came from years of threading needles and tying knots. He joined the party because Silas convinced him there was more to life than sewing. He handles the "finer" tasks – disarming basic traps, skinning monsters, and picking locks on old chests. He has never been formally trained, but he is a natural.',
      equipment: [
        { icon: '🗡️', name: 'Twin Daggers (Unnamed)', note: 'Two matching short blades, each with a leather‑wrapped grip and a simple cross‑guard. He sharpens them obsessively – they are never dull.' },
        { icon: '🧥', name: 'Dark Stalker’s Garb', note: 'Dark grey and black clothing with reinforced leather at the shoulders and knees. Multiple hidden pockets hold lockpicks, whetstones, dried rations, and a deck of cards.' },
        { icon: '🃏', name: 'Worn Deck of Cards', note: 'A battered deck he uses to gamble and practice sleight of hand. He has never been caught cheating – because he is that good.' }
      ],
      abilities: {
        'Offensive Arts': [
          'Flicker‑Strike – A flurry of slashes so fast they blur, designed to overwhelm an opponent’s guard. Hits 4–6 times, each dealing low damage.',
          'Twin Fangs – Two simultaneous stabs, one aimed high, one low. Difficult to block both.'
        ],
        'Defensive Arts': [
          'Instinctive Parry – Uses the cross‑guards of his daggers to catch and redirect incoming blades away from his vital organs.',
          'Sidestep – A quick lateral dodge that avoids a single attack and repositions him for a counter‑attack.'
        ],
        'Passive': [
          'Keen Senses – Ren notices hidden traps and ambushes before they trigger (advantage on perception).'
        ]
      },
      signature: {
        name: 'Final Deal',
        desc: 'Ren throws his deck of cards into the air, creating a momentary distraction, then delivers a series of rapid, pinpoint stabs to vital areas. The card throw blinds enemies for 2 seconds, giving him advantage on all attacks during that round. If any card actually hits an eye, the enemy is blinded for 1 minute (rare, but hilarious).'
      },
      strengths: [
        'Fastest member by far',
        'Excellent at scouting and trap detection',
        'High critical chance',
        'Difficult to hit – small target, quick reflexes'
      ],
      weaknesses: [
        'Frail – cannot take many hits',
        'Low damage per hit (relies on volume)',
        'No magic – mundane',
        'Impulsive – sometimes acts before Silas finishes planning'
      ],
      strategy: 'Scout ahead, report traps and enemy positions. During combat, flank enemies, target casters and archers. Use Flicker‑Strike to overwhelm guards. Never stand still.',
      bestAgainst: ['Lightly armored enemies', 'Archers (close the distance)', 'Single distracted targets'],
      struggleAgainst: ['Heavily armored enemies (daggers cannot penetrate)', 'Area attacks', 'Enemies that can match his speed'],
      feats: [
        'Disarmed a D‑rank bandit trap using only a bent nail and a piece of string',
        'Once threw a coin so accurately it hit a spider’s eye, causing it to flee – Ren calls it "luck"',
        'Has never lost a coin‑toss bet (he does not mention the times he used slight of hand)'
      ],
      teammates: [
        { id: 'silas_vane', name: 'Silas Vane', role: 'Spearman', rel: 'Follows his lead. Silas is the only one whose plans Ren trusts completely.', avBg: '#C3B89C', avColor: '#4A3B2C', avText: 'SV' },
        { id: 'bram_miller', name: 'Bram Miller', role: 'Shield-bearer', rel: 'Looks up to his strength. He calls Bram "the Wall".', avBg: '#A89E8A', avColor: '#4B3D2C', avText: 'BM' }
      ],
      teamRole: 'Scout, flanker, and trap specialist.',
      reputation: 'Unknown outside his village. Within the guild, he is "that fast kid" – clerks dislike his constant coin‑tossing.',
      nickname: '"Ren" (everyone), or "Blur" (rarely)',
      misc: {
        Hobbies: 'Competitive coin‑tossing, practicing high‑speed knot tying, card sleight‑of‑hand',
        Likes: 'Spicy street food, high‑stakes bets, shiny trinkets',
        Dislikes: 'Waiting in lines, heavy armor, long speeches',
        Trivia: 'He can tie a noose knot in under three seconds. He learned "just in case".'
      },
      stats: {
        rank: 'Iron',
        values: { 'Phys ATK': 243, 'Phys DEF': 187, 'Magic ATK': 0, 'Magic DEF': 143, Mana: 0, Speed: 387, Dexterity: 423, 'Critical Chance': 312 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', Dexterity: '#5D6D7E', 'Critical Chance': '#BA7517' }
      }
    },
    // ========== BRAM MILLER (Unshakable Wall) ==========
    {
      id: 'bram_miller',
      name: 'Bram Miller',
      title: 'The Iron Wall',
      avBg: '#A89E8A',
      avColor: '#4B3D2C',
      avText: 'BM',
      accentColor: '#7B6B4A',
      rankLabel: 'Iron',
      role: 'Shield-bearer / Mace',
      category: 'Parties',
      basic: {
        Age: '17',
        Gender: 'Male',
        Height: '1.83 m',
        Race: 'Human',
        Affiliation: 'The Village Vanguard',
        Rank: 'Iron',
        Role: 'Shield-bearer / Mace'
      },
      appearance: 'Broad‑shouldered and solid, with a barrel chest and thick arms. His face is round and friendly, with a perpetual hint of a smile. He carries a heavy rectangular iron shield – dented from a year of service – and a stout mace that looks like it could break stone. He wears chainmail over padded leather, with a simple iron helm. He looks older than seventeen, and his grip is strong enough to crush wood.',
      personality: 'Calm, patient, and quietly protective. Bram does not speak often, but when he does, people listen. He serves as the emotional anchor of the group, defusing arguments and steadying nerves when missions go wrong. He is not unintelligent, but he thinks slowly and methodically. He loves to cook campfire stews for the party. He is also surprisingly gentle, often picking up injured animals.',
      background: 'Son of the village miller, Bram spent his childhood hauling heavy sacks of grain, which gave him his natural physical power. He never expected to leave the village, but when Silas made his case, Bram agreed – not for ambition, but because he felt his friends would need someone to keep them safe. He has never regretted it, though he misses the smell of fresh bread.',
      equipment: [
        { icon: '🛡️', name: 'Iron Wall Shield', note: 'A heavy rectangular shield, dented and scratched from use. The leather straps are worn and comfortable. Bram never goes anywhere without it.' },
        { icon: '🔨', name: 'Miller’s Mace', note: 'A stout iron mace with a flanged head. Heavy, but Bram swings it like a stick. The grip is wrapped in worn leather from his father’s mill.' },
        { icon: '🍲', name: 'Campfire Stew Kit', note: 'A small iron pot, spoons, and dried herbs. He cooks for the party after every successful mission – his stew is legendary among the few who have tasted it.' }
      ],
      abilities: {
        'Offensive Arts': [
          'Shield Bash – A heavy forward lunge that uses the entire weight of his body to stun enemies for 2 seconds and knock them back 3 meters.',
          'Mace Swing – A powerful overhead strike that ignores 20% of armor and has a chance to stagger.'
        ],
        'Defensive Arts': [
          'Iron Bastion – Braces his shield into the ground and locks his joints, creating a nearly immovable cover for his teammates to hide behind. Blocks all frontal attacks for one round.',
          'Intercept – Steps into an attack aimed at an adjacent ally, taking the hit in their place.'
        ],
        'Passive': [
          'Immovable – Cannot be knocked prone or moved against his will while his feet are planted.'
        ]
      },
      signature: {
        name: 'The Village Anvil',
        desc: 'Bram locks his shield into the ground and plants his feet. For 10 seconds, he becomes an immovable object – any enemy that charges him is stopped dead and takes 50 damage from the collision. Allies behind him are completely protected from frontal attacks. He cannot move during this time, and he is vulnerable to flanking.'
      },
      strengths: [
        'Highest defense – can tank multiple hits',
        'Protects allies effectively',
        'High stamina – can fight for extended periods',
        'Emotional anchor – keeps morale high'
      ],
      weaknesses: [
        'Slow – cannot chase fast enemies',
        'Low damage output – relies on Silas and Ren to kill',
        'No magic – mundane',
        'Vulnerable from behind and flanks'
      ],
      strategy: 'Plant the shield, protect Silas and Ren. Let them deal damage. Use Shield Bash to create space. Avoid being surrounded.',
      bestAgainst: ['Heavy hitters he can block', 'Enemies that charge head‑on', 'Protecting chokepoints'],
      struggleAgainst: ['Fast flankers', 'Enemies that ignore armor (magic, poison)', 'Ranged attackers from multiple angles'],
      feats: [
        'Bram held a collapsing mine tunnel for 30 seconds while Silas and Ren escaped – a support beam fell on his shield, and he refused to drop it',
        'Stopped a charging boar with a Shield Bash – the boar died instantly from a broken neck',
        'Has never lost an arm‑wrestling match. He does not compete; people just challenge him and lose.'
      ],
      teammates: [
        { id: 'silas_vane', name: 'Silas Vane', role: 'Spearman', rel: 'Trusts him completely. Silas is the brains; Bram is the heart.', avBg: '#C3B89C', avColor: '#4A3B2C', avText: 'SV' },
        { id: 'ren_koda', name: 'Ren Koda', role: 'Dual Daggers', rel: 'Protective older‑brother energy. He worries about Ren’s impulsiveness.', avBg: '#B8A99A', avColor: '#2C2E3E', avText: 'RK' }
      ],
      teamRole: 'Frontline defender and team anchor. He keeps enemies off Silas and Ren.',
      reputation: 'Unknown outside his village. Those who have seen him fight call him "the immovable wall".',
      nickname: '"Bram the Wall" (given by a grateful merchant he saved)',
      misc: {
        Hobbies: 'Arm wrestling (he never challenges, only accepts), cooking campfire stews, grip‑strength training',
        Likes: 'Heavy blankets, fresh bread, a good laugh after a fight',
        Dislikes: 'Cruelty to animals, height‑based puzzles, losing his shield',
        Trivia: 'He once cooked a stew using only mushrooms and a rock. It was terrible. Silas ate it anyway to be polite.'
      },
      stats: {
        rank: 'Iron',
        values: { 'Phys ATK': 243, 'Phys DEF': 387, 'Magic ATK': 0, 'Magic DEF': 187, Mana: 0, Speed: 187, Endurance: 423, 'Shield Block': 456 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', Endurance: '#7B6B4A', 'Shield Block': '#BA7517' }
      }
    }
  ];

  if (window.REGISTRY) {
    window.REGISTRY.registerParty('village_vanguard', 'The Village Vanguard', members);
    console.log('The Village Vanguard party loaded successfully.');
  } else {
    console.error('Registry core not loaded');
  }
})();