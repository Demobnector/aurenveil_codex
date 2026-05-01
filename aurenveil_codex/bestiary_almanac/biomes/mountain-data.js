// biomes/mountain-data.js
(function() {
  const entries = [];

  // ========================
  // COMMON MOUNTAIN CREATURES (D–C Rank)
  // ========================

  // Mountain Goat
  const mountainGoat = {
    id: 'mountain_goat',
    name: 'Mountain Goat',
    sub: 'Sure-footed Herbivore',
    rank: 'F',
    ibg: '#c0b8a0',
    icon: '🐐',
    size: '~1 m at shoulder, white-grey fur',
    biomes: ['Mountain', 'Peak', 'Cliff'],
    intel: 12,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Mountain goats are agile herbivores that cling to sheer cliffs. They are not aggressive and will flee from threats. Their hooves are perfectly adapted for climbing.',
    stats: { HP: 43, Damage: 12, Defense: 23, Aggression: 0, Speed: 187, Mana: 0, 'Climb': 0, 'Flee': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Climb':'#00bcd4', 'Flee':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: ['Cold'],
    ab: ['Climb (can traverse vertical surfaces)', 'Flee (dashes away at double speed)'],
    loot: [{ name:'Goat Hide', rarity:'common', note:'Warm, used in winter clothing' }, { name:'Goat Horn', rarity:'common', note:'Used in drinking horns' }]
  };
  entries.push(mountainGoat);

  // Rock Piper (small bird)
  const rockPiper = {
    id: 'rock_piper',
    name: 'Rock Piper',
    sub: 'High-altitude Bird · Insectivore',
    rank: 'F',
    ibg: '#b0b0a0',
    icon: '🐦',
    size: '~0.2 m, grey-brown feathers',
    biomes: ['Mountain', 'Cliff'],
    intel: 8,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Small, hardy birds that nest on cliffs. They eat insects and are harmless. Their presence indicates clean air.',
    stats: { HP: 8, Damage: 4, Defense: 8, Aggression: 0, Speed: 187, Mana: 0, 'Sing': 0, 'Flock': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sing':'#8bc34a', 'Flock':'#00bcd4', Threat:'#607d8b' },
    weak: ['Area attacks'],
    res: ['Cold'],
    ab: ['Sing (pleasant chirping, no combat effect)', 'Flock (scatters when threatened)'],
    loot: [{ name:'Rock Piper Feather', rarity:'common', note:'Used in fletching' }]
  };
  entries.push(rockPiper);

  // Mountain Stag (Neutral)
  const mountainStag = {
    id: 'mountain_stag',
    name: 'Mountain Stag',
    sub: 'Highland Guardian · Neutral',
    rank: 'D',
    ibg: '#c8b898',
    icon: '🦌',
    size: '~1.5 m at shoulder, large antlers',
    biomes: ['Mountain', 'Highland', 'Alpine'],
    intel: 34,
    tags: { behavior: ['Neutral', 'Territorial'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Guardian'] },
    desc: 'Mountain stags are large deer adapted to high altitudes. They are not aggressive but will defend themselves with their antlers. They are symbols of the mountains.',
    stats: { HP: 187, Damage: 143, Defense: 143, Aggression: 143, Speed: 287, Mana: 23, 'Antler Charge': 243, 'Stomp': 187, 'Alert': 0, Threat: 287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Antler Charge':'#ffa000', 'Stomp':'#d32f2f', 'Alert':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Slowed', 'Traps'],
    res: ['Cold'],
    ab: ['Antler charge (line attack, 50 dmg, knockback)', 'Stomp (melee, 30 dmg, may stun)', 'Alert (warns nearby herd of danger)'],
    loot: [{ name:'Stag Antlers', rarity:'uncommon', note:'Used in decoration and druidic rituals' }]
  };
  entries.push(mountainStag);

  // ========================
  // MID MOUNTAIN CREATURES (C–B Rank)
  // ========================

  // Mountain Lion
  const mountainLion = {
    id: 'mountain_lion',
    name: 'Mountain Lion',
    sub: 'Stealth Predator · Ambusher',
    rank: 'C',
    ibg: '#c0a880',
    icon: '🐆',
    size: '~2 m long, tawny fur',
    biomes: ['Mountain', 'Forest', 'Rocky Slope'],
    intel: 43,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Mountain lions are solitary ambush predators. They stalk prey from high ground, then pounce with devastating force. They are silent and nearly invisible among rocks.',
    stats: { HP: 287, Damage: 343, Defense: 187, Aggression: 487, Speed: 487, Mana: 23, 'Pounce': 487, 'Claw Swipe': 387, 'Silent Stalk': 0, Threat: 543 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pounce':'#d32f2f', 'Claw Swipe':'#ffa000', 'Silent Stalk':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Loud noises', 'Traps', 'Pack tactics'],
    res: ['Cold', 'Falling'],
    ab: ['Pounce (leap from height, bonus damage, pins target)', 'Claw swipe (melee, bleed)', 'Silent stalk (no sound while moving)'],
    loot: [{ name:'Mountain Lion Hide', rarity:'uncommon', note:'Warm and stealthy – used in scout armor' }]
  };
  entries.push(mountainLion);

  // Stone Golem (Construct)
  const stoneGolem = {
    id: 'stone_golem',
    name: 'Stone Golem',
    sub: 'Ancient Guardian · Immovable',
    rank: 'B',
    ibg: '#a09880',
    icon: '🗿',
    size: '~3 m tall, carved stone',
    biomes: ['Mountain', 'Dungeon', 'Temple'],
    intel: 8,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Defensive'], intelligence: ['Instinctive'], interaction: ['Guardian'] },
    desc: 'Stone golems are ancient constructs carved from mountain rock. They guard ruins and paths. They are slow but nearly indestructible.',
    stats: { HP: 1247, Damage: 987, Defense: 1247, Aggression: 987, Speed: 87, Mana: 187, 'Fist Slam': 1247, 'Stone Skin': 0, 'Earth Stomp': 987, Threat: 1487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Fist Slam':'#d32f2f', 'Stone Skin':'#8d6e63', 'Earth Stomp':'#ffa000', Threat:'#d32f2f' },
    weak: ['Acid', 'Rust magic', 'Bludgeoning (cracks)'],
    res: ['Piercing', 'Slashing', 'Magic (partial)'],
    ab: ['Fist slam (melee, AoE, knockdown)', 'Stone skin (passive, reduces physical damage by 50%)', 'Earth stomp (AoE, stun, 50 dmg)'],
    loot: [{ name:'Stone Golem Core', rarity:'uncommon', note:'Heart of a construct – used in golem crafting' }]
  };
  entries.push(stoneGolem);

  // ========================
  // DANGEROUS MOUNTAIN CREATURES (B–A Rank)
  // ========================

  // Wyvern (shared with dragonkind, but specific to mountains)
  const wyvernMountain = {
    id: 'wyvern_mountain',
    name: 'Mountain Wyvern',
    sub: 'Aerial Predator · Cliff Nester',
    rank: 'B',
    ibg: '#a0a090',
    icon: '🦇',
    size: '~4 m wingspan, leathery wings',
    biomes: ['Mountain', 'Cliff', 'Peak'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Mountain wyverns are smaller cousins of dragons. They nest on high cliffs and dive on prey with their venomous tail stingers. They are aggressive and will attack anything that enters their territory.',
    stats: { HP: 987, Damage: 987, Defense: 743, Aggression: 1287, 'Fly Speed': 587, Mana: 187, 'Venom Sting': 1287, 'Dive Attack': 1187, 'Wing Buffet': 987, Threat: 1487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Venom Sting':'#800080', 'Dive Attack':'#d32f2f', 'Wing Buffet':'#ffa000', Threat:'#d32f2f' },
    weak: ['Anti-air', 'Piercing wings', 'Poison resistance'],
    res: ['Cold', 'Falling'],
    ab: ['Venom sting (paralyzes, 20 dmg/sec for 30 sec)', 'Dive attack (bonus damage from high altitude)', 'Wing buffet (knockback, 50 dmg)'],
    loot: [{ name:'Wyvern Stinger', rarity:'rare', note:'Potent venom – used in poisons' }, { name:'Wyvern Hide', rarity:'uncommon', note:'Leathery, used in light armor' }],
    variants: [
      {
        key: 'alpha',
        label: '👑 Alpha Wyvern',
        rank: 'A',
        ibg: '#909080',
        icon: '🦇',
        sub: 'Alpha Wyvern · Pack Leader',
        size: '~6 m wingspan',
        intel: 67,
        desc: 'An alpha wyvern leads a small pack. Its venom is deadlier, and its roar can summon others.',
        stats: { HP: 1873, Damage: 1687, Defense: 1287, Aggression: 2087, 'Fly Speed': 687, Mana: 387, 'Alpha Venom': 2087, 'Pack Howl': 0, 'Roar': 1487, Threat: 2287 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Alpha Venom':'#800080', 'Pack Howl':'#8bc34a', 'Roar':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Anti-air'],
        res: ['Cold'],
        ab: ['Alpha venom (paralyzes 30 sec, 30 dmg/sec)', 'Pack howl (summons 2-4 lesser wyverns)', 'Roar (fear, stuns for 3 sec)'],
        loot: [{ name:'Alpha Wyvern Stinger', rarity:'rare', note:'Extremely potent' }]
      }
    ]
  };
  entries.push(wyvernMountain);

  // Yeti
  const yeti = {
    id: 'yeti',
    name: 'Yeti',
    sub: 'Abominable Snowman · Frost Brute',
    rank: 'B',
    ibg: '#d0d8e8',
    icon: '❄️',
    size: '~2.5 m tall, white fur, massive',
    biomes: ['Mountain', 'Glacier', 'Tundra'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Yetis are massive, ape-like creatures that dwell in the highest peaks. They are covered in white fur and have freezing breath. They are aggressive and will chase intruders for miles.',
    stats: { HP: 1247, Damage: 1187, Defense: 987, Aggression: 1687, Speed: 387, Mana: 387, 'Freezing Breath': 1487, 'Ice Club': 1287, 'Snow Camouflage': 0, Threat: 1687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Freezing Breath':'#00bcd4', 'Ice Club':'#d32f2f', 'Snow Camouflage':'#ffa000', Threat:'#d32f2f' },
    weak: ['Fire', 'Heat', 'Loud noises'],
    res: ['Cold', 'Ice'],
    ab: ['Freezing breath (cone, freezes target for 10 sec)', 'Ice club (melee, bludgeoning, may stun)', 'Snow camouflage (invisible in snow while stationary)'],
    loot: [{ name:'Yeti Fur', rarity:'rare', note:'Extremely warm – used in arctic gear' }, { name:'Yeti Claw', rarity:'uncommon', note:'Used in climbing tools' }]
  };
  entries.push(yeti);

  // ========================
  // LEGENDARY MOUNTAIN CREATURES (S–SS Rank)
  // ========================

  // Griffon
  const griffon = {
    id: 'griffon',
    name: 'Griffon',
    sub: 'King of the Skies · Noble Beast',
    rank: 'S',
    ibg: '#d0c8a8',
    icon: '🦅',
    size: '~3 m tall, eagle head, lion body, wings',
    biomes: ['Mountain', 'Peak', 'Cloud Sea'],
    intel: 134,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Griffons are majestic creatures with the head and wings of an eagle and the body of a lion. They nest on the highest peaks and are fiercely territorial. They are intelligent and can be tamed by worthy riders, but they never truly obey; they choose to cooperate.',
    stats: { HP: 3874, Damage: 3487, Defense: 2987, Aggression: 4287, 'Fly Speed': 687, Mana: 1487, 'Dive': 4287, 'Claw Swipe': 3487, 'Beak Pierce': 3874, 'Aerial Dominance': 0, Threat: 4687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Dive':'#d32f2f', 'Claw Swipe':'#ffa000', 'Beak Pierce':'#800080', 'Aerial Dominance':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Grounding', 'Anti-air magic', 'Poison'],
    res: ['Physical', 'Cold', 'Fear'],
    ab: ['Dive (supersonic dive, 500 dmg, kills unprotected targets)', 'Claw swipe (melee, bleed, 100 dmg)', 'Beak pierce (ignores 50% armor)', 'Aerial dominance (cannot be attacked by grounded enemies while flying)'],
    warn: 'Griffons are noble creatures. Do not attack unless attacked first. They remember kindness – and cruelty.',
    loot: [{ name:'Griffon Feather', rarity:'rare', note:'Used in legendary flying cloaks' }, { name:'Griffon Talon', rarity:'rare', note:'Used in piercing weapons' }]
  };
  entries.push(griffon);

  // Roc (Giant bird)
  const roc = {
    id: 'roc',
    name: 'Roc',
    sub: 'Sky Titan · Elephant Hunter',
    rank: 'SS',
    ibg: '#b0b8a0',
    icon: '🦅',
    size: '~20 m wingspan, massive eagle',
    biomes: ['Mountain', 'Cloud Sea', 'Sky'],
    intel: 56,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The Roc is a legendary bird of prey large enough to carry elephants. It nests on the highest, most inaccessible peaks. Its wings can create storms. It is rarely seen and never tamed.',
    stats: { HP: 14873, Damage: 12873, Defense: 9873, Aggression: 16873, 'Fly Speed': 987, Mana: 5873, 'Storm Wings': 16873, 'Snatch': 14873, 'Dive Bomb': 14873, 'Terror': 0, Threat: 18873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Storm Wings':'#ffa000', 'Snatch':'#d32f2f', 'Dive Bomb':'#800080', 'Terror':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Grounding', 'Siege weapons', 'Harpoons'],
    res: ['Physical', 'Wind', 'Cold'],
    ab: ['Storm wings (creates hurricane, 200 dmg/sec, knocks back)', 'Snatch (grabs target, flies away, drops from height)', 'Dive bomb (supersonic dive, 1000 dmg, destroys structures)', 'Terror (fear aura, all enemies save or flee)'],
    warn: 'If you see a Roc, hide. It cannot be fought by mortals. Only legendary heroes have survived encounters.',
    loot: [{ name:'Roc Feather', rarity:'unique', note:'As tall as a person – used in legendary artifacts' }, { name:'Roc Talon', rarity:'unique', note:'Can carve through steel' }]
  };
  entries.push(roc);

  // ========================
  // NAMED MOUNTAIN: THE SPINE OF THE WORLD
  // ========================
  const spineOfTheWorld = {
    id: 'spine_of_the_world',
    name: 'The Spine of the World',
    sub: 'Mountain Range Anomaly · Continental Divide',
    rank: 'SS (estimated)',
    ibg: '#8e8e7e',
    icon: '🏔️',
    size: '~1000 km long, impassable peaks',
    biomes: ['The Spine', 'High Peaks', 'Roof of the World'],
    intel: 0,
    tags: { behavior: ['Passive', 'Territorial'], combat: ['Environmental'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'The Spine of the World is a massive mountain range that divides the continent. It is so high that the air is thin and deadly. Few have crossed it. Some say the mountains themselves are alive, watching. Ancient dragons nest in its highest peaks, and lost civilizations are said to be frozen in its glaciers. The range is not a single entity, but the cumulative weight of legend makes it feel alive.',
    stats: {
      'Length': '~1000 km',
      'Highest Peak': 'Unknown (above clouds)',
      'Minimum Rank to Traverse': 'Diamond (with magical aid)',
      'Known Inhabitants': 'Dragons, Griffons, Yetis, Rocs',
      'Crossing Success Rate': '~5%',
      'Lost Expeditions': 'Dozens'
    },
    bars: { 'Length':'#ffa000', 'Highest Peak':'#d32f2f', 'Minimum Rank to Traverse':'#e91e63', 'Known Inhabitants':'#800080', 'Crossing Success Rate':'#d32f2f', 'Lost Expeditions':'#00bcd4' },
    weak: ['Divine intervention', 'Air magic (to breathe)'],
    res: ['Physical traversal'],
    ab: [
      'Thin air (non-acclimated creatures suffer exhaustion every hour)',
      'Extreme cold (50 dmg/sec without magical protection)',
      'Avalanche (constant risk, 500 dmg, buries)',
      'Dragon territories (multiple dragon lairs, each a boss encounter)'
    ],
    warn: 'The Spine of the World is not a dungeon. It is a journey. Do not attempt without Diamond-rank support, magical cold protection, and air-breathing enchantments. Many have entered. Few have returned.',
    loot: [{ name:'Spine Crystal', rarity:'unique', note:'Found only in the highest peaks – used in legendary frost weapons' }],
    variants: [
      {
        key: 'dragon_peak',
        label: '🐉 Dragon\'s Peak',
        rank: 'SSS',
        ibg: '#7e7e6e',
        icon: '🐉',
        sub: 'Ancient Dragon Lair · Uncharted',
        size: 'Unknown',
        desc: 'The highest peak in the Spine is said to be home to an ancient dragon older than recorded history. No one has returned from an expedition to find it. Some say the peak does not exist – it is a rumour spread by the dragon itself to lure the ambitious.',
        stats: {
          'Status': 'Theoretical',
          'Elevation': 'Unknown',
          'Guardian': 'Ancient Dragon (unconfirmed)',
          'Expeditions': '0 returns'
        },
        bars: { 'Status':'#ffa000', 'Elevation':'#d32f2f', 'Guardian':'#800080', 'Expeditions':'#d32f2f' },
        weak: ['Unknown'],
        res: ['Unknown'],
        ab: ['Unknown'],
        warn: 'Do not attempt to find Dragon\'s Peak. The mountain does not want to be found.',
        loot: [{ name:'Legendary Dragon Scale (theoretical)', rarity:'unique', note:'No confirmed drops.' }]
      }
    ]
  };
  entries.push(spineOfTheWorld);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('mountain', entries, 'Biomes', '🏔️');
    console.log('Mountain data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();