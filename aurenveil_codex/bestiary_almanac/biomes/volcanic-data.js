// biomes/volcanic-data.js
(function() {
  const entries = [];

  // ========================
  // PEACEFUL / AMBIENT VOLCANIC CREATURES (F–E)
  // ========================

  // Ember Moth
  const emberMoth = {
    id: 'ember_moth',
    name: 'Ember Moth',
    sub: 'Glowing Insect · Ash Feeder',
    rank: 'F',
    ibg: '#e0a070',
    icon: '🦋',
    size: '~0.1 m, glowing orange, ash wings',
    biomes: ['Volcanic', 'Ash Field', 'Caldera'],
    intel: 2,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Ember moths are small insects that feed on ash and glow with residual heat. They are harmless and flutter away when approached.',
    stats: { HP: 6, Damage: 2, Defense: 4, Aggression: 0, 'Fly Speed': 87, Mana: 8, 'Glow': 0, 'Ash Camouflage': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Glow':'#ffa000', 'Ash Camouflage':'#8d6e63', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: ['Heat', 'Fire'],
    ab: ['Glow (provides 5 m radius light)', 'Ash camouflage (blends into ash, +50% stealth)'],
    loot: [{ name:'Ember Moth Wing', rarity:'common', note:'Glows faintly – used in light enchantments' }]
  };
  entries.push(emberMoth);

  // Ash Hopper
  const ashHopper = {
    id: 'ash_hopper',
    name: 'Ash Hopper',
    sub: 'Small Reptile · Ash Dweller',
    rank: 'E',
    ibg: '#b0a080',
    icon: '🦎',
    size: '~0.2 m, grey, hops on ash',
    biomes: ['Volcanic', 'Ash Field'],
    intel: 8,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Ash hoppers are small lizards that live in volcanic ash, hopping to avoid the heat. They are harmless and feed on insects.',
    stats: { HP: 12, Damage: 4, Defense: 8, Aggression: 0, Speed: 143, Mana: 4, 'Hop': 0, 'Burrow': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Hop':'#00bcd4', 'Burrow':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: ['Heat'],
    ab: ['Hop (jumps away, escapes)', 'Burrow (digs into ash, becomes invisible)'],
    loot: [{ name:'Ash Hopper Scale', rarity:'common', note:'Heat-resistant' }]
  };
  entries.push(ashHopper);

  // Obsidian Beetle
  const obsidianBeetle = {
    id: 'obsidian_beetle',
    name: 'Obsidian Beetle',
    sub: 'Shiny Insect · Scavenger',
    rank: 'E',
    ibg: '#5e5e6e',
    icon: '🐞',
    size: '~0.15 m, black, shiny shell',
    biomes: ['Volcanic', 'Lava Tube', 'Obsidian Field'],
    intel: 4,
    tags: { behavior: ['Passive', 'Scavenger'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Obsidian beetles have shells as hard as glass. They scavenge dead creatures and are prized for their shiny shells.',
    stats: { HP: 23, Damage: 6, Defense: 34, Aggression: 0, Speed: 67, Mana: 0, 'Shell Defense': 0, 'Scavenge': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Shell Defense':'#8d6e63', 'Scavenge':'#8bc34a', Threat:'#607d8b' },
    weak: ['Bludgeoning', 'Cold'],
    res: ['Fire', 'Heat'],
    ab: ['Shell defense (retreats into shell, +100% defense)', 'Scavenge (finds useful items on corpses)'],
    loot: [{ name:'Obsidian Shell', rarity:'uncommon', note:'Hard, shiny – used in jewelry and armor' }]
  };
  entries.push(obsidianBeetle);

  // ========================
  // NEUTRAL / DANGEROUS VOLCANIC CREATURES (D–C)
  // ========================

  // Ash Scorpion
  const ashScorpion = {
    id: 'ash_scorpion',
    name: 'Ash Scorpion',
    sub: 'Desert-Volcanic Hybrid · Venomous',
    rank: 'D',
    ibg: '#8e7e6e',
    icon: '🦂',
    size: '~0.8 m, grey, camouflaged in ash',
    biomes: ['Volcanic', 'Ash Field', 'Caldera'],
    intel: 12,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Ash scorpions are venomous arachnids that blend into volcanic ash. Their sting causes burning pain and necrosis.',
    stats: { HP: 143, Damage: 187, Defense: 143, Aggression: 287, Speed: 243, Mana: 12, 'Fire Sting': 287, 'Claw Grab': 187, 'Ash Camouflage': 0, Threat: 312 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Fire Sting':'#800080', 'Claw Grab':'#ffa000', 'Ash Camouflage':'#8d6e63', Threat:'#d32f2f' },
    weak: ['Cold', 'Water', 'Flipping over'],
    res: ['Heat', 'Fire'],
    ab: ['Fire sting (paralyzes, 15 dmg/sec for 30 sec, burn)', 'Claw grab (grapple, deals 20 dmg per round)', 'Ash camouflage (invisible in ash while stationary)'],
    loot: [{ name:'Ash Scorpion Stinger', rarity:'uncommon', note:'Heat venom – used in fire poisons' }]
  };
  entries.push(ashScorpion);

  // Fire Salamander
  const fireSalamander = {
    id: 'fire_salamander',
    name: 'Fire Salamander',
    sub: 'Elemental Amphibian · Flame Spitter',
    rank: 'C',
    ibg: '#e08a4a',
    icon: '🦎',
    size: '~1.2 m long, orange-black, glowing',
    biomes: ['Volcanic', 'Lava Tube', 'Magma Chamber'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Fire salamanders are elemental creatures that live near lava. They can spit fire and are immune to heat. Their skin is always warm to the touch.',
    stats: { HP: 287, Damage: 343, Defense: 243, Aggression: 487, Speed: 287, Mana: 187, 'Flame Spit': 487, 'Heat Aura': 0, 'Salamander Stride': 0, Threat: 512 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Flame Spit':'#ff5722', 'Heat Aura':'#ffa000', 'Salamander Stride':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold', 'Water', 'Ice magic'],
    res: ['Fire', 'Heat', 'Lava'],
    ab: ['Flame spit (ranged, fire damage, ignites ground)', 'Heat aura (5 dmg/sec within 5 m)', 'Salamander stride (can walk on lava)'],
    loot: [{ name:'Salamander Scale', rarity:'uncommon', note:'Always warm – used in fire resistance gear' }]
  };
  entries.push(fireSalamander);

  // Magma Snail
  const magmaSnail = {
    id: 'magma_snail',
    name: 'Magma Snail',
    sub: 'Slow · Lava Trailer',
    rank: 'C',
    ibg: '#e08a4a',
    icon: '🐌',
    size: '~0.8 m shell, glowing orange',
    biomes: ['Volcanic', 'Lava Tube', 'Magma Chamber'],
    intel: 2,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Magma snails leave trails of molten slime that burn for minutes. They are slow but leave a hazardous path.',
    stats: { HP: 243, Damage: 143, Defense: 287, Aggression: 0, Speed: 23, Mana: 87, 'Magma Trail': 287, 'Heat Shell': 0, 'Slow Burn': 0, Threat: 287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Magma Trail':'#ff5722', 'Heat Shell':'#ffa000', 'Slow Burn':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Cold', 'Water', 'Ice magic'],
    res: ['Fire', 'Heat', 'Physical'],
    ab: ['Magma trail (leaves burning trail, 20 dmg/sec for 1 minute)', 'Heat shell (melee attackers take 10 fire damage)', 'Slow burn (ignites ground around it)'],
    loot: [{ name:'Magma Snail Shell', rarity:'uncommon', note:'Still warm – used in heat-resistant shields' }]
  };
  entries.push(magmaSnail);

  // ========================
  // DANGEROUS VOLCANIC PREDATORS (B–A)
  // ========================

  // Lava Worm
  const lavaWorm = {
    id: 'lava_worm',
    name: 'Lava Worm',
    sub: 'Magma Burrower · Ambusher',
    rank: 'B',
    ibg: '#d07a4a',
    icon: '🐛',
    size: '~4 m long, glowing red, burrows through lava',
    biomes: ['Volcanic', 'Lava Tube', 'Magma Chamber'],
    intel: 4,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Lava worms burrow through molten rock, emerging to grab prey. They are blind but sense heat. Their bite causes severe burns.',
    stats: { HP: 687, Damage: 743, Defense: 543, Aggression: 987, 'Burrow Speed': 187, Mana: 87, 'Lava Burst': 987, 'Burning Bite': 843, 'Heat Sense': 0, Threat: 1087 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Lava Burst':'#d32f2f', 'Burning Bite':'#ff5722', 'Heat Sense':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold', 'Ice magic', 'Water'],
    res: ['Fire', 'Heat', 'Lava'],
    ab: ['Lava burst (emerges from lava, AoE fire damage, knocks back)', 'Burning bite (ignores 30% armor, causes burn, 20 dmg/sec)', 'Heat sense (detects warm-blooded prey through lava)'],
    loot: [{ name:'Lava Worm Tooth', rarity:'rare', note:'Still hot – used in fire weapons' }]
  };
  entries.push(lavaWorm);

  // Magma Elemental (Greater)
  const magmaElemental = {
    id: 'magma_elemental_volcanic',
    name: 'Magma Elemental',
    sub: 'Living Lava · Siege Breaker',
    rank: 'A',
    ibg: '#e06a2a',
    icon: '🔥',
    size: '~3 m tall, flowing magma, rocky core',
    biomes: ['Volcanic', 'Magma Chamber', 'Caldera'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Magma elementals are living lava, summoned from volcanic cores. They leave molten trails and can erupt, showering enemies with fire.',
    stats: { HP: 1487, Damage: 1287, Defense: 1087, Aggression: 1687, Speed: 187, Mana: 687, 'Lava Splash': 1687, 'Eruption': 1487, 'Heat Aura': 0, 'Magma Trail': 0, Threat: 1887 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Lava Splash':'#ff5722', 'Eruption':'#d32f2f', 'Heat Aura':'#ffa000', 'Magma Trail':'#8d6e63', Threat:'#d32f2f' },
    weak: ['Cold', 'Water', 'Ice magic'],
    res: ['Fire', 'Heat', 'Lava', 'Physical'],
    ab: ['Lava splash (cone, fire damage, ignites ground)', 'Eruption (AoE, 200 dmg, creates lava pools)', 'Heat aura (15 dmg/sec within 10 m)', 'Magma trail (leaves burning ground behind)'],
    loot: [{ name:'Magma Core', rarity:'rare', note:'Hot – used in volcanic enchantments' }]
  };
  entries.push(magmaElemental);

  // Ash Wraith (Undead Volcanic)
  const ashWraith = {
    id: 'ash_wraith',
    name: 'Ash Wraith',
    sub: 'Undead Spirit · Burning Wrath',
    rank: 'A',
    ibg: '#6e5e5e',
    icon: '👻',
    size: '~2 m tall, ash cloud, glowing embers',
    biomes: ['Volcanic', 'Pyre', 'Ash Field'],
    intel: 78,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Ash wraiths are the restless spirits of those who died in volcanic eruptions. They are made of ash and embers, and their touch burns the soul.',
    stats: { HP: 987, Damage: 987, Defense: 743, Aggression: 1287, 'Fly Speed': 387, Mana: 587, 'Ash Storm': 1287, 'Burning Touch': 1087, 'Suffocate': 0, Threat: 1487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Ash Storm':'#d32f2f', 'Burning Touch':'#ff5722', 'Suffocate':'#800080', Threat:'#d32f2f' },
    weak: ['Holy', 'Water', 'Ice magic'],
    res: ['Fire', 'Physical (partial)', 'Fear'],
    ab: ['Ash storm (AoE, 50 dmg/sec, blinds for 5 sec)', 'Burning touch (fire damage, inflicts burn, 20 dmg/sec)', 'Suffocate (target cannot breathe, 30 dmg/sec)'],
    loot: [{ name:'Ash Wraith Core', rarity:'rare', note:'Still burning – used in fire undead summoning' }]
  };
  entries.push(ashWraith);

  // ========================
  // LEGENDARY VOLCANIC ENTITIES (S–SS)
  // ========================

  // Volcanic Drake
  const volcanicDrake = {
    id: 'volcanic_drake',
    name: 'Volcanic Drake',
    sub: 'Lesser Dragon · Magma Breath',
    rank: 'S',
    ibg: '#d07a3a',
    icon: '🐉',
    size: '~6 m long, deep red scales, bat wings',
    biomes: ['Volcanic', 'Caldera', 'Lava Lake'],
    intel: 134,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Volcanic drakes are lesser dragons that nest in calderas. They breathe streams of magma and can fly through ash clouds. Their scales are immune to fire.',
    stats: { HP: 6874, Damage: 5874, Defense: 5487, Aggression: 7874, 'Fly Speed': 487, Mana: 3874, 'Magma Breath': 8874, 'Volcanic Dive': 6874, 'Ash Cloak': 0, 'Heat Scales': 0, Threat: 8874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Magma Breath':'#ff5722', 'Volcanic Dive':'#d32f2f', 'Ash Cloak':'#8d6e63', 'Heat Scales':'#ffa000', Threat:'#d32f2f' },
    weak: ['Cold', 'Ice magic', 'Anti-dragon weapons'],
    res: ['Fire', 'Heat', 'Lava', 'Physical'],
    ab: ['Magma breath (cone, 500 dmg, creates lava pools)', 'Volcanic dive (swoop, 600 dmg, knocks prone)', 'Ash cloak (creates thick ash cloud, 50% evasion, cannot be targeted)', 'Heat scales (immune to fire, melee attackers take 20 fire damage)'],
    warn: 'Volcanic drakes are apex predators of calderas. Do not engage without cold magic and anti-dragon gear.',
    loot: [{ name:'Volcanic Drake Scale', rarity:'rare', note:'Fire-proof, used in legendary armor' }, { name:'Drake Heart', rarity:'rare', note:'Powers fire artifacts' }]
  };
  entries.push(volcanicDrake);

  // Inferno Titan
  const infernoTitan = {
    id: 'inferno_titan',
    name: 'Inferno Titan',
    sub: 'Primordial Fire Giant · Living Eruption',
    rank: 'SS',
    ibg: '#d04a1a',
    icon: '🗿',
    size: '~12 m tall, living magma, crowned with fire',
    biomes: ['Volcanic Core', 'Primordial Caldera', 'World\'s Heart'],
    intel: 187,
    tags: { behavior: ['Territorial', 'Strategic'], combat: ['Siege', 'Control'], intelligence: ['Strategic'], interaction: ['Ruler'] },
    desc: 'The Inferno Titan is a primordial fire giant that sleeps within the world\'s core. Its awakening causes volcanic eruptions across continents. It is not evil, but its presence is apocalyptic.',
    stats: { HP: 28743, Damage: 24873, Defense: 19873, Aggression: 0, Speed: 287, Mana: 18743, 'Worldfire': 28743, 'Magma Tide': 24873, 'Volcanic Awakening': 0, Threat: 30873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Worldfire':'#d32f2f', 'Magma Tide':'#ff5722', 'Volcanic Awakening':'#ffa000', Threat:'#d32f2f' },
    weak: ['Divine ice', 'World water', 'Sealing'],
    res: ['All physical', 'All elemental (except divine ice)', 'Fire', 'Heat', 'Lava'],
    ab: ['Worldfire (causes global volcanic eruptions, 1000 dmg to all outdoors)', 'Magma tide (summons tidal wave of lava, 1000 dmg, destroys structures)', 'Volcanic awakening (raises new volcano, buries enemies)'],
    warn: 'The Inferno Titan is not a combat encounter. It is a world event. Do not wake it.',
    loot: [{ name:'Titan\'s Ember', rarity:'unique', note:'A shard of primordial fire – can create a volcano' }]
  };
  entries.push(infernoTitan);

  // ========================
  // NAMED LOCATION: THE CALDERA'S HEART (Anomaly)
  // ========================
  const calderaHeart = {
    id: 'caldera_heart',
    name: 'The Caldera\'s Heart',
    sub: 'Anomaly · Volcanic Core',
    rank: 'SS (estimated)',
    ibg: '#d06a3a',
    icon: '🌋',
    size: 'Unknown, within the largest volcano',
    biomes: ['Caldera\'s Heart', 'Volcanic Core', 'World\'s Heart'],
    intel: 0,
    tags: { behavior: ['Passive', 'Territorial'], combat: ['Environmental'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'The Caldera\'s Heart is the core of the largest volcano, a place where magma flows like water and the air is deadly. It is said the Inferno Titan sleeps here. Few have entered; none have returned unchanged.',
    stats: {
      'Estimated Depth': 'Unknown',
      'Minimum Entry Rank': 'Diamond (with divine fire protection)',
      'Spawn Pattern': 'Magma elementals, fire salamanders, volcanic drakes',
      'Risk Level': 'Extreme – do not enter',
      'Corruption Level': 'Severe (reality distortion reported)'
    },
    bars: { 'Estimated Depth':'#ffa000', 'Minimum Entry Rank':'#d32f2f', 'Spawn Pattern':'#00bcd4', 'Risk Level':'#800080', 'Corruption Level':'#e91e63' },
    weak: ['Divine ice', 'Sealing'],
    res: ['Physical traversal'],
    ab: [
      'Extreme heat (200 dmg/sec without divine fire protection)',
      'Lava flows (constantly shifting terrain, 100 dmg/sec on contact)',
      'Titan\'s breath (toxic gases, 50 dmg/sec, suffocation)',
      'Manifest elementals (the Heart spawns fire elementals constantly)'
    ],
    warn: 'The Caldera\'s Heart is a death sentence. Do not enter without divine protection and a party of Diamond-rank adventurers. Even then, do not expect to return.',
    loot: [{ name:'Heartstone', rarity:'unique', note:'Found only in the Caldera\'s Heart – can power a volcano or stop one' }]
  };
  entries.push(calderaHeart);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('volcanic', entries, 'Biomes', '🌋');
    console.log('Volcanic data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();