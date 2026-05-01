// biomes/arctic-data.js
(function() {
  const entries = [];

  // ========================
  // PEACEFUL ARCTIC CREATURES (F–E)
  // ========================

  // Arctic Fox
  const arcticFox = {
    id: 'arctic_fox',
    name: 'Arctic Fox',
    sub: 'Snow Stalker · Curious',
    rank: 'F',
    ibg: '#e0e8f0',
    icon: '🦊',
    size: '~0.5 m, white fur, bushy tail',
    biomes: ['Arctic', 'Tundra', 'Ice Field'],
    intel: 43,
    tags: { behavior: ['Curious', 'Neutral'], combat: [], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Arctic foxes are small, curious creatures that follow travelers. They are not aggressive and may lead lost wanderers to shelter. Their fur is prized but killing them is considered unlucky.',
    stats: { HP: 28, Damage: 12, Defense: 18, Aggression: 0, Speed: 187, Mana: 8, 'Guide': 0, 'Hide': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Guide':'#8bc34a', 'Hide':'#00bcd4', Threat:'#607d8b' },
    weak: ['Any attack', 'Heat'],
    res: ['Cold'],
    ab: ['Guide (may lead to shelter or food source)', 'Hide (vanishes into snow, +50% stealth)'],
    loot: [{ name:'Arctic Fox Fur', rarity:'common', note:'Warm and white – used in winter clothing' }]
  };
  entries.push(arcticFox);

  // Snow Hare
  const snowHare = {
    id: 'snow_hare',
    name: 'Snow Hare',
    sub: 'Swift Herbivore · Prey',
    rank: 'F',
    ibg: '#e0e0e0',
    icon: '🐇',
    size: '~0.4 m, white fur, long ears',
    biomes: ['Arctic', 'Tundra', 'Snowfield'],
    intel: 12,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Snow hares are fast, skittish herbivores that blend into the snow. They are prey for many arctic predators. They are harmless and flee from any threat.',
    stats: { HP: 18, Damage: 6, Defense: 12, Aggression: 0, Speed: 212, Mana: 4, 'Bound': 0, 'Camouflage': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bound':'#00bcd4', 'Camouflage':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack', 'Heat'],
    res: ['Cold'],
    ab: ['Bound (dashes away at triple speed)', 'Camouflage (blends into snow, +75% stealth)'],
    loot: [{ name:'Snow Hare Fur', rarity:'common', note:'Soft, used in lining' }, { name:'Hare Meat', rarity:'common', note:'Edible, lean' }]
  };
  entries.push(snowHare);

  // Penguin Colony
  const penguin = {
    id: 'penguin',
    name: 'Penguin',
    sub: 'Flightless Bird · Waddler',
    rank: 'F',
    ibg: '#2a3a4a',
    icon: '🐧',
    size: '~0.7 m, black and white, upright',
    biomes: ['Arctic', 'Ice Shelf', 'Coast'],
    intel: 23,
    tags: { behavior: ['Passive', 'Curious'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Penguins are flightless birds that live in large colonies. They are comical and curious, often approaching travelers. They are harmless and will flee if threatened. Their eggs are edible but taking them angers the colony.',
    stats: { HP: 34, Damage: 8, Defense: 14, Aggression: 0, Speed: 87, Mana: 6, 'Waddle': 0, 'Slide': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Waddle':'#00bcd4', 'Slide':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack', 'Heat'],
    res: ['Cold'],
    ab: ['Waddle (slow movement but can slide on ice)', 'Slide (moves faster on ice, cannot be caught on frozen surfaces)'],
    loot: [{ name:'Penguin Feather', rarity:'common', note:'Used in decoration' }, { name:'Penguin Egg', rarity:'uncommon', note:'Nutritious, but taking it angers the colony' }]
  };
  entries.push(penguin);

  // ========================
  // NEUTRAL / DANGEROUS ARCTIC CREATURES (D–C)
  // ========================

  // Seal
  const seal = {
    id: 'seal',
    name: 'Seal',
    sub: 'Aquatic Mammal · Playful',
    rank: 'E',
    ibg: '#b0c0d0',
    icon: '🦦',
    size: '~1.5 m, sleek, blubbery',
    biomes: ['Arctic', 'Coast', 'Ice Floe'],
    intel: 56,
    tags: { behavior: ['Curious', 'Neutral'], combat: ['Evasive'], intelligence: ['Aware'], interaction: ['Environmental'] },
    desc: 'Seals are curious marine mammals that bask on ice floes. They are not aggressive but will defend themselves with sharp teeth if cornered. They are prey for polar bears and orcas.',
    stats: { HP: 67, Damage: 43, Defense: 34, Aggression: 56, Speed: '143 (swim)', Mana: 12, 'Bite': 67, 'Slip': 0, 'Dive': 0, Threat: 98 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Bite':'#d32f2f', 'Slip':'#00bcd4', 'Dive':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Bludgeoning', 'Harpoons', 'Heat'],
    res: ['Cold', 'Water'],
    ab: ['Bite (defensive, causes bleed)', 'Slip (escapes into water, cannot be grappled)', 'Dive (holds breath for 30 minutes)'],
    loot: [{ name:'Seal Hide', rarity:'uncommon', note:'Waterproof, used in winter gear' }, { name:'Seal Blubber', rarity:'common', note:'Used in oil lamps' }]
  };
  entries.push(seal);

  // Walrus
  const walrus = {
    id: 'walrus',
    name: 'Walrus',
    sub: 'Tusked Brawler · Territorial',
    rank: 'D',
    ibg: '#c0b8a0',
    icon: '🐗',
    size: '~3 m, massive, long tusks',
    biomes: ['Arctic', 'Coast', 'Ice Floe'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Walruses are massive, aggressive pinnipeds with long tusks. They are highly territorial and will charge anything that approaches their colony. Their tusks can pierce boat hulls.',
    stats: { HP: 387, Damage: 298, Defense: 243, Aggression: 478, Speed: '143 (swim)', Mana: 12, 'Tusk Charge': 487, 'Gore': 387, 'Bellow': 243, Threat: 512 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Tusk Charge':'#d32f2f', 'Gore':'#ffa000', 'Bellow':'#800080', Threat:'#d32f2f' },
    weak: ['Slow on land', 'Harpoons', 'Spear to neck'],
    res: ['Cold', 'Bludgeoning'],
    ab: ['Tusk charge (line attack, high damage, knocks back)', 'Gore (melee bleed, ignores 20% armor)', 'Bellow (fear effect, reduces enemy accuracy)'],
    loot: [{ name:'Walrus Tusk', rarity:'rare', note:'Used in carving and weapons' }, { name:'Walrus Hide', rarity:'uncommon', note:'Thick, used in heavy armor' }]
  };
  entries.push(walrus);

  // Snowy Owl
  const snowyOwl = {
    id: 'snowy_owl',
    name: 'Snowy Owl',
    sub: 'Silent Hunter · Keen-eyed',
    rank: 'D',
    ibg: '#d0d8e8',
    icon: '🦉',
    size: '~0.6 m tall, white feathers, yellow eyes',
    biomes: ['Arctic', 'Tundra', 'Cliff'],
    intel: 87,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Snowy owls are silent hunters that prey on lemmings and hares. They are territorial during nesting season and will dive at intruders. Their feathers are nearly silent in flight.',
    stats: { HP: 87, Damage: 143, Defense: 67, Aggression: 287, 'Fly Speed': 312, Mana: 43, 'Silent Dive': 287, 'Talons': 187, 'Keen Sight': 0, Threat: 312 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Silent Dive':'#d32f2f', 'Talons':'#ffa000', 'Keen Sight':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Projectiles', 'Nest destruction'],
    res: ['Cold'],
    ab: ['Silent dive (swoop attack, cannot be heard before impact)', 'Talons (grapple, bleed damage)', 'Keen sight (detects hidden prey from 200 m)'],
    loot: [{ name:'Snowy Owl Feather', rarity:'uncommon', note:'Silent – used in stealth cloaks' }]
  };
  entries.push(snowyOwl);

  // ========================
  // DANGEROUS ARCTIC PREDATORS (C–B)
  // ========================

  // Arctic Wolf
  const arcticWolf = {
    id: 'arctic_wolf',
    name: 'Arctic Wolf',
    sub: 'Pack Hunter · White Ghost',
    rank: 'C',
    ibg: '#d0d8e0',
    icon: '🐺',
    size: '~1.2 m at shoulder, white fur',
    biomes: ['Arctic', 'Tundra', 'Frozen Plains'],
    intel: 67,
    tags: { behavior: ['Aggressive', 'Pack'], combat: ['Swarm', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Arctic wolves hunt in packs of 6-12 across the frozen tundra. They are white as snow, nearly invisible from a distance. They are relentless and will stalk prey for days.',
    stats: { HP: 243, Damage: 287, Defense: 187, Aggression: 478, Speed: 387, Mana: 23, 'Pack Flanking': 478, 'Frost Bite': 287, 'Howl': 243, Threat: 512 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pack Flanking':'#ffa000', 'Frost Bite':'#00bcd4', 'Howl':'#800080', Threat:'#d32f2f' },
    weak: ['Fire', 'Breaking formation', 'Kill leader'],
    res: ['Cold', 'Bludgeoning'],
    ab: ['Pack flanking (+15% damage per adjacent wolf)', 'Frost bite (cold damage, slows target)', 'Howl (summons 2-4 additional wolves, potential reinforcements)'],
    loot: [{ name:'Arctic Wolf Pelt', rarity:'uncommon', note:'White, warm – used in winter cloaks' }, { name:'Wolf Fang', rarity:'common', note:'Sharp' }],
    variants: [
      {
        key: 'alpha',
        label: '👑 Alpha Arctic Wolf',
        rank: 'B',
        ibg: '#c0c8d0',
        icon: '🐺',
        sub: 'Alpha Wolf · Pack Lord',
        size: '~1.4 m at shoulder, scarred',
        desc: 'The alpha leads the pack. Its howl can rally wolves from across the tundra.',
        stats: { HP: 487, Damage: 487, Defense: 287, Aggression: 687, Speed: 412, Mana: 56, 'Alpha Bite': 687, 'Pack Rally': 0, 'Intimidate': 487, Threat: 742 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Alpha Bite':'#d32f2f', 'Pack Rally':'#ffa000', 'Intimidate':'#800080', Threat:'#d32f2f' },
        weak: ['Fire', 'Kill leader'],
        res: ['Cold'],
        ab: ['Alpha bite (bonus damage, may break bones)', 'Pack rally (all wolves gain +25% damage for 30 sec)', 'Intimidate (fear effect, reduces enemy accuracy)'],
        loot: [{ name:'Alpha Wolf Pelt', rarity:'rare', note:'Exceptional quality' }]
      }
    ]
  };
  entries.push(arcticWolf);

  // Polar Bear
  const polarBear = {
    id: 'polar_bear',
    name: 'Polar Bear',
    sub: 'Apex Predator · Ice Stalker',
    rank: 'B',
    ibg: '#e0e8f0',
    icon: '🐻‍❄️',
    size: '~2.5 m at shoulder, massive white fur',
    biomes: ['Arctic', 'Ice Floe', 'Coast'],
    intel: 56,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Polar bears are the largest land predators in the arctic. They are patient, silent stalkers that can swim for miles. They will hunt anything that moves, including humans.',
    stats: { HP: 987, Damage: 887, Defense: 743, Aggression: 987, Speed: 387, Mana: 56, 'Maul': 1087, 'Ice Swim': 0, 'Roar': 687, Threat: 1187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Maul':'#d32f2f', 'Ice Swim':'#00bcd4', 'Roar':'#800080', Threat:'#d32f2f' },
    weak: ['Fire', 'Harpoons', 'Spears', 'Traps'],
    res: ['Cold', 'Bludgeoning'],
    ab: ['Maul (claw swipe, high damage, causes bleed)', 'Ice swim (can swim in freezing water indefinitely, cannot be tracked)', 'Roar (fear, stuns for 3 seconds)'],
    loot: [{ name:'Polar Bear Hide', rarity:'rare', note:'Immensely warm, used in legendary winter gear' }, { name:'Bear Claws', rarity:'uncommon', note:'Used in climbing tools' }]
  };
  entries.push(polarBear);

  // Orca (Killer Whale)
  const orca = {
    id: 'orca',
    name: 'Orca',
    sub: 'Apex Marine Predator · Wolf of the Sea',
    rank: 'B',
    ibg: '#4a5e6e',
    icon: '🐋',
    size: '~8 m long, black and white',
    biomes: ['Arctic', 'Ocean', 'Coast'],
    intel: 143,
    tags: { behavior: ['Aggressive', 'Pack'], combat: ['Swarm', 'Burst'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Orcas are intelligent, social apex predators that hunt in pods. They coordinate attacks, target weak prey, and can breach onto ice floes to snatch seals. They are not hostile to humans in the wild, but a hungry pod is dangerous.',
    stats: { HP: 1247, Damage: 987, Defense: 743, Aggression: 1287, 'Swim Speed': 487, Mana: 187, 'Breach': 1287, 'Coordinated Hunt': 0, 'Sonar': 0, Threat: 1487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Breach':'#d32f2f', 'Coordinated Hunt':'#ffa000', 'Sonar':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Harpoons', 'Anti-swarm tactics', 'Separation'],
    res: ['Cold', 'Water'],
    ab: ['Breach (leaps onto ice or ship, deals 300 dmg, knocks prone)', 'Coordinated hunt (gains +20% damage per adjacent orca)', 'Sonar (detects prey under ice from 500 m)'],
    loot: [{ name:'Orca Tooth', rarity:'rare', note:'Used in carving and weapons' }, { name:'Orca Blubber', rarity:'uncommon', note:'Used in oil lamps and waterproofing' }]
  };
  entries.push(orca);

  // ========================
  // ELITE ARCTIC PREDATORS (A–S)
  // ========================

  // Ice Golem (Construct)
  const iceGolem = {
    id: 'ice_golem',
    name: 'Ice Golem',
    sub: 'Frozen Construct · Ancient Guardian',
    rank: 'A',
    ibg: '#b0e0f0',
    icon: '🗿',
    size: '~3.5 m tall, carved ice, glowing blue core',
    biomes: ['Glacier', 'Ancient Ruin', 'Frozen Cave'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Defensive'], intelligence: ['Instinctive'], interaction: ['Guardian'] },
    desc: 'Ice golems are ancient constructs carved from glacier ice and animated by magic. They guard lost ruins and treasures. They are slow but nearly invulnerable in freezing temperatures.',
    stats: { HP: 2873, Damage: 1987, Defense: 2487, Aggression: 2873, Speed: 87, Mana: 987, 'Ice Fist': 2873, 'Frost Aura': 0, 'Reform': 0, Threat: 3187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Ice Fist':'#d32f2f', 'Frost Aura':'#00bcd4', 'Reform':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire', 'Bludgeoning', 'Heat magic'],
    res: ['Physical', 'Cold', 'Ice'],
    ab: ['Ice fist (melee, high damage, may freeze target)', 'Frost aura (10 dmg/sec, slows enemies within 10 m)', 'Reform (regenerates 50 HP/sec while in freezing environment)'],
    warn: 'Ice golems are nearly indestructible in their native glacier. Lure them onto warmer ground or use sustained fire magic.',
    loot: [{ name:'Ice Golem Core', rarity:'rare', note:'Pulsing with cold energy – used in ice magic' }, { name:'Frozen Heart', rarity:'rare', note:'Still beats with ancient magic' }]
  };
  entries.push(iceGolem);

  // Frost Wyrm
  const frostWyrm = {
    id: 'frost_wyrm',
    name: 'Frost Wyrm',
    sub: 'Ice Dragon · Blizzard Bringer',
    rank: 'S',
    ibg: '#b0d8f0',
    icon: '🐉',
    size: '~12 m long, ice-blue scales, freezing breath',
    biomes: ['Glacier', 'Frozen Peak', 'Blizzard'],
    intel: 187,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Frost wyrms are ancient ice dragons that nest in the highest glaciers. They breathe cones of freezing mist that can flash-freeze enemies. Their scales are immune to cold, and they can summon blizzards.',
    stats: { HP: 8873, Damage: 7487, Defense: 7487, Aggression: 9873, 'Fly Speed': 487, Mana: 5874, 'Freezing Breath': 10873, 'Blizzard Call': 8873, 'Ice Scales': 0, Threat: 10873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Freezing Breath':'#00bcd4', 'Blizzard Call':'#ffa000', 'Ice Scales':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire (high level)', 'Anti-dragon weapons', 'Breaking wings'],
    res: ['Cold', 'Ice', 'Physical (partial)'],
    ab: ['Freezing breath (cone, 500 dmg, freezes targets solid for 10 seconds)', 'Blizzard call (summons blizzard, 100 dmg/sec, visibility 5 m)', 'Ice scales (immune to cold, 50% physical resistance)'],
    warn: 'Frost wyrms are regional threats. Do not engage without Diamond-rank fire support. Their blizzard makes ranged attacks nearly impossible.',
    loot: [{ name:'Frost Wyrm Scale', rarity:'rare', note:'Immune to cold – used in legendary armor' }, { name:'Wyrm Core', rarity:'unique', note:'Heart of the blizzard – can control weather' }]
  };
  entries.push(frostWyrm);

  // ========================
  // LEGENDARY ARCTIC ENTITIES (SS)
  // ========================

  // Ymir (Ice Giant Lord)
  const ymir = {
    id: 'ymir',
    name: 'Ymir',
    sub: 'Primordial Ice Giant · Frost Father',
    rank: 'SS',
    ibg: '#c0e0f0',
    icon: '❄️',
    size: '~15 m tall, living ice, ancient',
    biomes: ['Primordial Glacier', 'Heart of Winter'],
    intel: 312,
    tags: { behavior: ['Territorial', 'Strategic'], combat: ['Siege', 'Control'], intelligence: ['Strategic'], interaction: ['Ruler'] },
    desc: 'Ymir is the legendary first ice giant, said to be the source of all winter. It sleeps beneath the largest glacier, and if it wakes, the world freezes. It is not evil, but its awakening is an apocalypse event.',
    stats: { HP: 24873, Damage: 18743, Defense: 19873, Aggression: 14873, Speed: 287, Mana: 14873, 'Permafrost': 24873, 'Glacial Shift': 20873, 'Winter\'s Wrath': 20873, Threat: 26873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Permafrost':'#00bcd4', 'Glacial Shift':'#d32f2f', 'Winter\'s Wrath':'#ffa000', Threat:'#d32f2f' },
    weak: ['Divine fire', 'World flame (theoretical)', 'Sealing'],
    res: ['All physical', 'All elemental (except divine fire)', 'Cold', 'Ice'],
    ab: ['Permafrost (freezes entire region, 500 dmg/sec to all non-arctic creatures)', 'Glacial shift (moves glaciers, reshapes landscape, buries enemies)', 'Winter\'s wrath (summons eternal winter, reduces global temperature)'],
    warn: 'Ymir is not a combat encounter. It is a world event. Do not wake it.',
    loot: [{ name:'Ymir\'s Tear', rarity:'unique', note:'A frozen crystal that can create a new glacier' }]
  };
  entries.push(ymir);

  // ========================
  // NAMED LOCATION: THE FROZEN DEEP (Anomaly)
  // ========================
  const frozenDeep = {
    id: 'frozen_deep',
    name: 'The Frozen Deep',
    sub: 'Anomaly · Caved Glacier',
    rank: 'SS (estimated)',
    ibg: '#b0d0e8',
    icon: '🧊',
    size: 'Unknown, beneath the largest glacier',
    biomes: ['Frozen Deep', 'Glacial Cave', 'Heart of Ice'],
    intel: 0,
    tags: { behavior: ['Passive', 'Territorial'], combat: ['Environmental'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'The Frozen Deep is a massive cave system beneath the largest glacier. It is so cold that even fire magic barely functions. Legend says Ymir sleeps at its heart. Few have entered; fewer have returned. The ice itself seems alive, shifting to confuse and trap explorers.',
    stats: {
      'Estimated Depth': 'Unknown',
      'Minimum Entry Rank': 'Diamond (with magical cold protection)',
      'Spawn Pattern': 'Frozen undead, ice elementals',
      'Risk Level': 'Extreme – do not enter alone',
      'Corruption Level': 'Time distortion reported'
    },
    bars: { 'Estimated Depth':'#ffa000', 'Minimum Entry Rank':'#d32f2f', 'Spawn Pattern':'#00bcd4', 'Risk Level':'#800080', 'Corruption Level':'#e91e63' },
    weak: ['Divine fire', 'Sealing'],
    res: ['Physical traversal'],
    ab: [
      'Extreme cold (100 dmg/sec without magical cold protection)',
      'Shifting ice (maps become useless, corridors change)',
      'Frozen undead (inhabitants are ancient, powerful)',
      'Ymir\'s presence (if awakened, global apocalypse)'
    ],
    warn: 'The Frozen Deep is not a dungeon to be cleared. It is a place to be respected. Do not enter without a party of Diamond-rank adventurers and divine cold protection.',
    loot: [{ name:'Frozen Deep Crystal', rarity:'unique', note:'Found only in the deepest caves – used in legendary ice weapons' }]
  };
  entries.push(frozenDeep);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('arctic', entries, 'Biomes', '❄️');
    console.log('Arctic data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();