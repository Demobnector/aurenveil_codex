// biomes/jungle-data.js
(function() {
  const entries = [];

  // ========================
  // PEACEFUL / COMMON JUNGLE CREATURES (F–E)
  // ========================

  // Jungle Toucan
  const jungleToucan = {
    id: 'jungle_toucan',
    name: 'Jungle Toucan',
    sub: 'Colorful Bird · Fruit Eater',
    rank: 'F',
    ibg: '#d0c8a0',
    icon: '🐧',
    size: '~0.6 m, black body, bright orange/yellow beak',
    biomes: ['Jungle', 'Rainforest', 'Canopy'],
    intel: 34,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Toucans are colorful, loud birds that flit through the jungle canopy. They eat fruit and are completely harmless. Their bright beaks are prized by collectors.',
    stats: { HP: 8, Damage: 3, Defense: 5, Aggression: 0, Speed: 187, Mana: 0, 'Croak': 0, 'Flee': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Croak':'#8bc34a', 'Flee':'#00bcd4', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Croak (loud call, attracts attention)', 'Flee (flies up into canopy)'],
    loot: [{ name:'Toucan Feather', rarity:'common', note:'Brightly colored, used in ceremonial headdresses' }]
  };
  entries.push(jungleToucan);

  // Capybara
  const capybara = {
    id: 'capybara',
    name: 'Capybara',
    sub: 'Gentle Giant · Semi-Aquatic',
    rank: 'F',
    ibg: '#c0b090',
    icon: '🐭',
    size: '~1.2 m long, brown, webbed feet',
    biomes: ['Jungle', 'Riverbank', 'Swamp'],
    intel: 67,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Capybaras are the world\'s largest rodents, but they are incredibly peaceful. They are often seen lounging near water with birds on their backs. They will flee if threatened.',
    stats: { HP: 67, Damage: 8, Defense: 34, Aggression: 0, Speed: 143, Mana: 0, 'Float': 0, 'Bathe': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Float':'#00bcd4', 'Bathe':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: ['Water'],
    ab: ['Float (drifts on water, hard to spot)', 'Bathe (cleans itself, no combat effect)'],
    loot: [{ name:'Capybara Hide', rarity:'common', note:'Tough but not valuable' }]
  };
  entries.push(capybara);

  // Tree Frog (Venomous but not hostile)
  const treeFrog = {
    id: 'tree_frog',
    name: 'Tree Frog',
    sub: 'Poisonous Amphibian · Brightly Colored',
    rank: 'E',
    ibg: '#8ed87e',
    icon: '🐸',
    size: '~0.05 m, bright blue/red/yellow',
    biomes: ['Jungle', 'Canopy', 'Riverbank'],
    intel: 12,
    tags: { behavior: ['Passive', 'Camouflage'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Tree frogs are small, beautiful, and extremely poisonous to touch. Natives use their toxins for blowdart poison. They are not aggressive but will poison anything that eats them.',
    stats: { HP: 4, Damage: 0, Defense: 12, Aggression: 0, Speed: 98, Mana: 0, 'Poison Skin': 87, 'Camouflage': 0, 'Croak': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Poison Skin':'#800080', 'Camouflage':'#00bcd4', 'Croak':'#8bc34a', Threat:'#607d8b' },
    weak: ['Fire', 'Predators immune to poison'],
    res: ['Poison'],
    ab: ['Poison skin (contact poison, 20 dmg/sec, paralysis)', 'Camouflage (near-invisible in foliage)', 'Croak (mating call, no combat effect)'],
    loot: [{ name:'Tree Frog Toxin', rarity:'uncommon', note:'Used in potent poisons and paralysis darts' }]
  };
  entries.push(treeFrog);

  // Sloth (Dozing)
  const sloth = {
    id: 'sloth',
    name: 'Sloth',
    sub: 'Slow · Sleepy',
    rank: 'F',
    ibg: '#a0a880',
    icon: '🦥',
    size: '~0.6 m, brown, slow',
    biomes: ['Jungle', 'Canopy'],
    intel: 23,
    tags: { behavior: ['Passive', 'Dozing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Sloths move so slowly that moss grows on their fur. They pose no threat and will simply ignore most creatures. They are surprisingly strong when provoked, but it takes a lot to provoke a sloth.',
    stats: { HP: 34, Damage: 23, Defense: 23, Aggression: 0, Speed: 23, Mana: 0, 'Sleep': 0, 'Slow Claw': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sleep':'#9c27b0', 'Slow Claw':'#d32f2f', Threat:'#607d8b' },
    weak: ['Any attack (if you can catch it)'],
    res: [],
    ab: ['Sleep (dozes off, cannot be woken easily)', 'Slow claw (weak, slow, rarely used)'],
    loot: [{ name:'Sloth Fur', rarity:'common', note:'Surprisingly durable, used in eco-friendly armor' }]
  };
  entries.push(sloth);

  // Monkey Troop
  const monkeyTroop = {
    id: 'monkey_troop',
    name: 'Monkey Troop',
    sub: 'Mischievous · Troop',
    rank: 'E',
    ibg: '#c0a86e',
    icon: '🐒',
    size: '~0.5 m, various colors, highly social',
    biomes: ['Jungle', 'Canopy', 'Ruins'],
    intel: 87,
    tags: { behavior: ['Neutral', 'Mischievous'], combat: [], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Monkeys are intelligent, curious, and mischievous. They may steal food or shiny objects. They are not aggressive but can become hostile if provoked or if their troop is threatened.',
    stats: { HP: 23, Damage: 12, Defense: 18, Aggression: 34, Speed: 243, Mana: 0, 'Steal': 0, 'Throw Fruit': 12, 'Screech': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Steal':'#ffa000', 'Throw Fruit':'#8bc34a', 'Screech':'#00bcd4', Threat:'#607d8b' },
    weak: ['Area attacks', 'Bribes (bananas)'],
    res: [],
    ab: ['Steal (attempts to take a non-weapon item)', 'Throw fruit (weak ranged attack, 5 dmg, may distract)', 'Screech (alerts the troop, may cause monkeys to flee or attack)'],
    loot: [{ name:'Monkey Fur', rarity:'common', note:'Not valuable' }]
  };
  entries.push(monkeyTroop);

  // ========================
  // NEUTRAL / DANGEROUS JUNGLE CREATURES (D–C)
  // ========================

  // Giant Snake (Constrictor)
  const giantSnake = {
    id: 'giant_snake',
    name: 'Giant Snake',
    sub: 'Constrictor · Ambush Predator',
    rank: 'D',
    ibg: '#8eae7e',
    icon: '🐍',
    size: '~5-8 m long, thick body, patterned scales',
    biomes: ['Jungle', 'Ruins', 'Riverbank'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Giant snakes are ambush predators that hide in trees or undergrowth. They constrict prey, crushing bones and suffocating. They are slow but deadly once they grab hold.',
    stats: { HP: 287, Damage: 243, Defense: 187, Aggression: 387, Speed: 187, Mana: 12, 'Constrict': 387, 'Bite': 243, 'Ambush': 0, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Constrict':'#d32f2f', 'Bite':'#ffa000', 'Ambush':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Slashing (to break grapple)', 'Cold'],
    res: [],
    ab: ['Constrict (grapple, 30 dmg per round, prevents breathing)', 'Bite (piercing, holds target)', 'Ambush (+50% damage on first attack from hiding)'],
    loot: [{ name:'Snake Skin', rarity:'common', note:'Used in leather armor and boots' }, { name:'Snake Venom', rarity:'uncommon', note:'Weak venom' }],
    variants: [
      {
        key: 'anaconda',
        label: '🐍 Anaconda',
        rank: 'C',
        ibg: '#7e9e6e',
        icon: '🐍',
        sub: 'Giant Anaconda · River Serpent',
        size: '~10-12 m, massive, aquatic',
        desc: 'Anacondas are semi-aquatic constrictors found in jungle rivers. They can hold their breath for 30 minutes and drag prey underwater to drown them.',
        stats: { HP: 543, Damage: 487, Defense: 387, Aggression: 587, Speed: 243, Mana: 12, 'Drown': 587, 'Mass Constrict': 543, 'Water Strike': 387, Threat: 712 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Drown':'#00bcd4', 'Mass Constrict':'#d32f2f', 'Water Strike':'#ffa000', Threat:'#d32f2f' },
        weak: ['Fire', 'Slashing'],
        res: ['Water'],
        ab: ['Drown (grapple, pulls underwater, 50 dmg per round)', 'Mass constrict (can grapple 2 targets at once)', 'Water strike (attack from underwater, target has disadvantage)'],
        loot: [{ name:'Anaconda Hide', rarity:'uncommon', note:'Waterproof, used in aquatic armor' }]
      }
    ]
  };
  entries.push(giantSnake);

  // Jaguar (Stealth Predator)
  const jaguar = {
    id: 'jaguar',
    name: 'Jaguar',
    sub: 'Apex Predator · Stealth',
    rank: 'C',
    ibg: '#d0a03e',
    icon: '🐆',
    size: '~1.5 m at shoulder, spotted rosettes, muscular',
    biomes: ['Jungle', 'Ruins', 'Riverbank'],
    intel: 87,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Jaguars are apex predators of the jungle. They are solitary, stealthy, and incredibly strong. Their bite is strong enough to pierce skulls.',
    stats: { HP: 387, Damage: 487, Defense: 287, Aggression: 587, Speed: 387, Mana: 23, 'Skull Bite': 587, 'Pounce': 487, 'Camouflage': 0, Threat: 612 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Skull Bite':'#d32f2f', 'Pounce':'#ffa000', 'Camouflage':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Large groups', 'Loud noises', 'Fire'],
    res: [],
    ab: ['Skull bite (high damage, may instantly kill small targets)', 'Pounce (charge from stealth, knocks prone, +50% damage)', 'Camouflage (invisible while stationary in jungle)'],
    loot: [{ name:'Jaguar Pelt', rarity:'uncommon', note:'Beautiful spotted fur, highly valued' }, { name:'Jaguar Fang', rarity:'uncommon', note:'Used in ceremonial daggers' }]
  };
  entries.push(jaguar);

  // Giant Wasp (Swarm)
  const giantWasp = {
    id: 'giant_wasp',
    name: 'Giant Wasp',
    sub: 'Insect · Stinger',
    rank: 'C',
    ibg: '#e0d84e',
    icon: '🐝',
    size: '~0.6 m long, yellow and black, wings',
    biomes: ['Jungle', 'Canopy', 'Hive'],
    intel: 8,
    tags: { behavior: ['Aggressive', 'Swarm'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Giant wasps build massive paper nests in jungle trees. They are fiercely territorial and attack anyone who comes near their hive. Their sting is excruciating and venomous.',
    stats: { HP: 143, Damage: 187, Defense: 143, Aggression: 487, Speed: 387, Mana: 12, 'Sting': 387, 'Inject Eggs': 0, 'Fly': 0, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sting':'#d32f2f', 'Inject Eggs':'#800080', 'Fly':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Smoke', 'Area attacks'],
    res: [],
    ab: ['Sting (piercing, poison, 20 dmg/sec for 10 sec)', 'Inject eggs (if target dies, larvae hatch from corpse in 24 hours)', 'Fly (fast aerial movement)'],
    loot: [{ name:'Wasp Stinger', rarity:'common', note:'Used in poison arrows' }],
    variants: [
      {
        key: 'queen',
        label: '👑 Queen Wasp',
        rank: 'B',
        ibg: '#d0c03e',
        icon: '🐝',
        sub: 'Queen Wasp · Hive Mother',
        size: '~1.2 m long, massive abdomen',
        desc: 'The queen wasp rarely leaves the hive. She lays eggs constantly and is protected by dozens of worker wasps. Killing her destroys the hive.',
        stats: { HP: 987, Damage: 287, Defense: 543, Aggression: 187, Speed: 98, Mana: 87, 'Lay Eggs': 0, 'Call Swarm': 0, 'Queen Sting': 543, Threat: 987 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Lay Eggs':'#8bc34a', 'Call Swarm':'#00bcd4', 'Queen Sting':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Fire'],
        res: [],
        ab: ['Lay eggs (spawns 1-3 worker wasps per round)', 'Call swarm (summons 6-12 giant wasps from the hive)', 'Queen sting (powerful venom, paralysis for 10 seconds)'],
        loot: [{ name:'Royal Jelly', rarity:'rare', note:'Heals 200 HP, cures poison' }]
      }
    ]
  };
  entries.push(giantWasp);

  // ========================
  // ELITE JUNGLE PREDATORS (B–A)
  // ========================

  // Jungle Spider (Hunter)
  const jungleSpider = {
    id: 'jungle_spider',
    name: 'Jungle Spider',
    sub: 'Web Weaver · Large',
    rank: 'B',
    ibg: '#8e7e5e',
    icon: '🕷️',
    size: '~1.5 m body, 3 m leg span, patterned',
    biomes: ['Jungle', 'Canopy', 'Ruins'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Jungle spiders are massive web-weavers that build traps across jungle paths. Their webs are sticky enough to trap a horse. They hunt by sensing vibrations.',
    stats: { HP: 743, Damage: 687, Defense: 543, Aggression: 887, Speed: 387, Mana: 87, 'Web Trap': 887, 'Venom Bite': 843, 'Spider Climb': 0, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Web Trap':'#00bcd4', 'Venom Bite':'#800080', 'Spider Climb':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire', 'Slashing (web cutting)', 'Smoke'],
    res: ['Poison', 'Fear'],
    ab: ['Web trap (ranged, immobilizes target, requires Strength check to break)', 'Venom bite (high damage, paralyzes for 5 sec)', 'Spider climb (can move on any surface)'],
    loot: [{ name:'Spider Silk', rarity:'uncommon', note:'Extremely strong, used in rope and light armor' }, { name:'Spider Venom Gland', rarity:'uncommon', note:'Paralytic poison' }]
  };
  entries.push(jungleSpider);

  // Basilisk (Lesser)
  const basilisk = {
    id: 'basilisk_jungle',
    name: 'Basilisk',
    sub: 'King of Serpents · Petrifying Gaze',
    rank: 'A',
    ibg: '#7eae5e',
    icon: '🐍',
    size: '~3 m long, green scales, eight legs, crest',
    biomes: ['Jungle', 'Ruins', 'Temple'],
    intel: 43,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Basilisks are legendary serpents whose gaze turns flesh to stone. They are rare, found only in the deepest jungle ruins. A basilisk\'s crest flares when it is about to use its gaze.',
    stats: { HP: 1487, Damage: 1287, Defense: 987, Aggression: 1487, Speed: 287, Mana: 543, 'Petrifying Gaze': 1687, 'Venom Bite': 1487, 'Rush': 1287, Threat: 1787 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Petrifying Gaze':'#800080', 'Venom Bite':'#d32f2f', 'Rush':'#ffa000', Threat:'#d32f2f' },
    weak: ['Mirrors', 'Cock\'s crow (lore)', 'Bright light'],
    res: ['Poison', 'Petrification'],
    ab: ['Petrifying gaze (cone, save or turn to stone for 1 minute)', 'Venom bite (poison, 50 dmg/sec for 15 sec)', 'Rush (charge attack, high damage)'],
    warn: 'Do not look directly at a basilisk. Use mirrors or fight blind.',
    loot: [{ name:'Basilisk Eye', rarity:'rare', note:'Still petrifies – used in high-level anti-petrification meds' }, { name:'Basilisk Hide', rarity:'rare', note:'Resistant to petrification' }]
  };
  entries.push(basilisk);

  // ========================
  // FLORA / PLANT-BASED THREATS
  // ========================

  // Strangler Vine (Animated Plant)
  const stranglerVine = {
    id: 'strangler_vine',
    name: 'Strangler Vine',
    sub: 'Animated Plant · Constrictor',
    rank: 'B',
    ibg: '#6eae5e',
    icon: '🌿',
    size: 'Variable, vines up to 30 m long',
    biomes: ['Jungle', 'Ruins', 'Temple'],
    intel: 8,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Strangler vines are carnivorous plants that animate to capture prey. They constrict victims and slowly digest them. They are often found near jungle ruins.',
    stats: { HP: 843, Damage: 743, Defense: 643, Aggression: 887, Speed: 143, Mana: 187, 'Constrict': 987, 'Thorn Whip': 843, 'Root': 0, Threat: 1087 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Constrict':'#d32f2f', 'Thorn Whip':'#ffa000', 'Root':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire', 'Acid', 'Slashing'],
    res: ['Poison', 'Bludgeoning (reduced)'],
    ab: ['Constrict (grapple, 40 dmg per round)', 'Thorn whip (ranged, piercing, pulls target 5 m)', 'Root (can attack from underground, ambush)'],
    loot: [{ name:'Strangler Vine Sap', rarity:'uncommon', note:'Sticky, used in adhesives' }]
  };
  entries.push(stranglerVine);

  // ========================
  // LEGENDARY JUNGLE ENTITIES (S–SS)
  // ========================

  // Feathered Serpent (Quetzalcoatl-type)
  const featheredSerpent = {
    id: 'feathered_serpent',
    name: 'Feathered Serpent',
    sub: 'Sky Serpent · Wind Bringer',
    rank: 'S',
    ibg: '#8eb87e',
    icon: '🐉',
    size: '~15 m long, emerald feathers, rainbow wings',
    biomes: ['Jungle', 'Sky', 'Temple'],
    intel: 478,
    tags: { behavior: ['Neutral', 'Protective'], combat: ['Control', 'Siege'], intelligence: ['Sentient'], interaction: ['Guardian', 'Godly'] },
    desc: 'The feathered serpent is a legendary creature worshipped by jungle tribes. It brings storms and wind, and guards ancient temples. It rarely attacks without reason.',
    stats: { HP: 7874, Damage: 5873, Defense: 6874, Aggression: 3874, Speed: 687, Mana: 6874, 'Wind Storm': 7874, 'Feather Rain': 6874, 'Blessing of Rain': 0, Threat: 8874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Wind Storm':'#00bcd4', 'Feather Rain':'#ffa000', 'Blessing of Rain':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Corruption', 'Pollution'],
    res: ['Wind', 'Lightning', 'Poison'],
    ab: ['Wind storm (AoE, knocks back, 200 dmg)', 'Feather rain (ranged, 100 dmg per feather, multiple targets)', 'Blessing of rain (heals 500 HP to all allies in 100 m)'],
    warn: 'The feathered serpent is a protector, not a villain. Do not attack it unless you wish to be cursed.',
    loot: [{ name:'Feather of the Serpent', rarity:'unique', note:'Glows with prismatic light – used in legendary wind magic' }]
  };
  entries.push(featheredSerpent);

  // Jungle Titan (Gorilla-like Giant)
  const jungleTitan = {
    id: 'jungle_titan',
    name: 'Jungle Titan',
    sub: 'Primal Ape · Mountain Breaker',
    rank: 'SS',
    ibg: '#8e7e5e',
    icon: '🦍',
    size: '~10 m tall, black fur, silver back, red eyes',
    biomes: ['Jungle', 'Heart of Jungle'],
    intel: 187,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Deep in the jungle\'s heart lives a titanic ape, the size of a castle. Legends say it is the father of all jungle creatures. It is fiercely territorial and will attack anything that threatens the jungle. Its fists can shatter stone.',
    stats: { HP: 14873, Damage: 12873, Defense: 10873, Aggression: 14873, Speed: 287, Mana: 1873, 'Ground Slam': 14873, 'Boulder Throw': 12873, 'Roar of the Jungle': 0, Threat: 16873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Ground Slam':'#d32f2f', 'Boulder Throw':'#ffa000', 'Roar of the Jungle':'#800080', Threat:'#d32f2f' },
    weak: ['Unknown'],
    res: ['Physical (almost total)', 'Fear', 'Poison'],
    ab: ['Ground slam (AoE, 200 dmg, knocks prone, damages structures)', 'Boulder throw (ranged, 300 dmg, stuns)', 'Roar of the jungle (fears all enemies within 200 m for 10 sec)'],
    warn: 'The jungle titan is the king of this land. Do not challenge it unless you are an S-rank party or higher.',
    loot: [{ name:'Titan Fur', rarity:'unique', note:'Impervious to most damage' }, { name:'Titan Tooth', rarity:'unique', note:'Can pierce any armor' }]
  };
  entries.push(jungleTitan);

  // ========================
  // NAMED JUNGLE: THE SUNKEN TEMPLE (Location / Dungeon)
  // ========================
  const sunkenTemple = {
    id: 'sunken_temple',
    name: 'The Sunken Temple',
    sub: 'Ancient Ruins · Submerged Pyramid',
    rank: 'A (danger level)',
    ibg: '#8eae7e',
    icon: '🏛️',
    size: 'Pyramid complex, partially submerged, ~500 m wide',
    biomes: ['Jungle', 'Temple', 'Submerged'],
    intel: 0,
    tags: { behavior: ['Territorial', 'Trapped'], combat: ['Ambush', 'Environmental'], intelligence: ['Unknown'], interaction: ['Dungeon'] },
    desc: 'The Sunken Temple is an ancient structure half-swallowed by the jungle and partially flooded. It is said to contain treasures of a lost civilization, but also guardians: basilisks, giant snakes, and animated statues. The lower levels are completely underwater, home to aquatic monsters.',
    stats: {
      'Known Area': '~500 m pyramid base',
      'Estimated Depth': '5 floors (2 submerged)',
      'Minimum Entry Rank': 'Silver (with water breathing)',
      'Main Threats': 'Basilisk, Strangler Vines, Water elementals',
      'Treasure': 'Golden idols, ancient relics, basilisk eggs',
      'Risk Level': 'High – time pressure (drowning)'
    },
    bars: { 'Known Area':'#ffa000', 'Estimated Depth':'#d32f2f', 'Minimum Entry Rank':'#e91e63', 'Main Threats':'#800080', 'Treasure':'#8bc34a', 'Risk Level':'#d32f2f' },
    weak: ['Drain water (would flood area)'],
    res: ['Physical traps', 'Monster guardians'],
    ab: [
      'Flooded chambers (requires water breathing or air spells)',
      'Pressure plates (trigger darts, arrows, or collapse)',
      'Basilisk guardians (statues that animate at night)',
      'Temple curse (non-believers take 1 dmg per minute inside)'
    ],
    warn: 'The Sunken Temple is actively dangerous. Do not enter without proper water breathing preparations, and never touch the golden idols without checking for curses.',
    loot: [{ name:'Sunken Idol', rarity:'rare', note:'400-year-old gold, valued at 10,000 gp' }, { name:'Basilisk Egg', rarity:'rare', note:'Can be sold or hatched' }]
  };
  entries.push(sunkenTemple);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('jungle', entries, 'Biomes', '🌴');
    console.log('Jungle data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();