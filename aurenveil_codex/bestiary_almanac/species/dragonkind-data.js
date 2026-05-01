// dragonkind-data.js (revised)
(function() {
  const entries = [];

  // ========================
  // 1. EARTH DRAGON
  // ========================
  const earthDragon = {
    id: 'earth_dragon',
    name: 'Earth Dragon',
    sub: 'Terrestrial · Siege Breaker',
    rank: 'A',
    ibg: '#d7ccc8',
    icon: '⛰️',  // changed from 🪨
    size: 'Young: ~8 m long; Mature: ~20 m; Ancient: ~50 m',
    biomes: ['Mountain','Cave','Badlands','Deep Earth'],
    intel: 120,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Defensive'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Earth dragons are living mountains – slow, deliberate, and nearly indestructible. They reshape terrain at will, raising stone walls, spikes, and creating localized earthquakes. Their scales are as hard as granite, and their jaws can crush boulders. Young earth dragons are already dangerous to Gold-rank parties; mature ones require coordinated Platinum efforts.',
    stats: { HP: 6183, Damage: 4127, Defense: 8923, Aggression: 4712, Speed: 902, 'Flight Speed': 0, Mana: 2310, 'Terrain Control': 7812, Durability: 9537, Threat: 8124 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#795548', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Terrain Control':'#8d6e63', Durability:'#5d4037', Threat:'#607d8b' },
    weak: ['Piercing (wing membranes)','Lightning (stuns briefly)','Precision magic (core)'],
    res: ['Bludgeoning','Fire','Earth magic','Physical crush'],
    ab: ['Terrain reshape (active)','Earthquake stomp','Stone armor (passive)','Burrowing'],
    loot: [{ name:'Earth Dragon Scale', rarity:'rare', note:'Extremely durable – used in fortress-grade armor and golem construction' },{ name:'Core of Terra', rarity:'rare', note:'Dense earth-mana core – can empower golems or create seismic wards' }],
    variants: [
      {
        key: 'mature', label: '📈 Mature', rank: 'S', ibg: '#8d6e63', icon: '⛰️', sub: 'Mature Earth Dragon · Regional Threat',
        size: '~20 m long', intel: 210,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Defensive','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
        desc: 'A mature earth dragon has lived for centuries, its hide now thicker than castle walls. It can raise entire sections of a mountain range, creating sinkholes and avalanches at will. Its presence alone destabilizes the terrain for kilometers. Gold-rank adventurers cannot harm it; Platinum-ranked siege magic is required.',
        stats: { HP: 14823, Damage: 8721, Defense: 18247, Aggression: 10284, Speed: 603, 'Flight Speed': 0, Mana: 5418, 'Terrain Control': 16932, Durability: 19471, Threat: 17263 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#795548', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Terrain Control':'#8d6e63', Durability:'#5d4037', Threat:'#607d8b' },
        weak: ['Precision piercing (heart/core)','Magic nullification','Sustained lightning'],
        res: ['All physical','Fire','Earth','Lava'],
        ab: ['Regional terrain shift','Mountain rend','Unstoppable advance','Core deep burial'],
        loot: [{ name:'Mature Earth Dragon Heartstone', rarity:'rare', note:'Pulses with seismic energy – used in legendary earth-element artifacts' },{ name:'Mountain Plate', rarity:'rare', note:'A section of unbreakable scale – ideal for siege equipment or capital walls' }]
      },
      {
        key: 'ancient', label: '⌛ Ancient', rank: 'S', ibg: '#5d4037', icon: '🏔️', sub: 'Ancient Earth Dragon · Continental Hazard', territorialSS: true,
        size: '~50 m long', intel: 380,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Defensive'], intelligence: ['Strategic'], interaction: ['Predatory','Environmental'] },
        desc: 'An ancient earth dragon is indistinguishable from a mountain range. It sleeps for millennia, and when it shifts, earthquakes reshape borders. Its hide is infused with metals and gems, making it nearly impervious to any attack. Within its territory, it achieves SS-rank defensive capabilities, and its terrain control can bury entire armies.',
        stats: { HP: 34872, Damage: 21036, Defense: 39821, Aggression: 24157, Speed: 312, 'Flight Speed': 0, Mana: 12849, 'Terrain Control': 37284, Durability: 41293, Threat: 36358 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#795548', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Terrain Control':'#8d6e63', Durability:'#5d4037', Threat:'#607d8b' },
        warn: 'Do not engage. Evacuate the region and notify the capital. Only Diamond-ranked earth mages in conjunction with multiple Platinum combatants have a theoretical chance – not recommended.',
        territory: 'Within its own mountain territory, all defensive stats scale to SS rank (cap: 40,000). Terrain control effects become irreversible without Diamond-rank magic.',
        weak: ['Mountain-splitting precision strikes','Legendary anti-dragon weapons','Sustained magic nullification'],
        res: ['All physical','All elemental except precision','Siege weapons'],
        ab: ['Continental shift (active)','Golem army summon','Core buried in bedrock','Indestructible hide'],
        loot: [{ name:'Ancient Earth Core', rarity:'unique', note:'The size of a house – contains enough earth mana to terraform a kingdom. Legendary material.' },{ name:'Living Mountain Plate', rarity:'unique', note:'Self-repairing scale fragments – used in SSS-grade divine armor.' }]
      }
    ]
  };
  entries.push(earthDragon);
  
  // ========================
  // MOUNTAIN DRAGON (Rock/Sky Hybrid)
  // ========================
  const mountainDragon = {
    id: 'mountain_dragon',
    name: 'Mountain Dragon',
    sub: 'Peak Lord · Stone Skimmer',
    rank: 'A',
    ibg: '#b0a888',
    icon: '🏔️',
    size: 'Young: ~9 m long, Mature: ~22 m, Ancient: ~55 m',
    biomes: ['Mountain','Peak','Highland','Cliff'],
    intel: 143,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Burst'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Mountain dragons are masters of high peaks and rocky crags. They have stone-grey scales that blend into cliffs, and their wings are broad for soaring on thermal updrafts. They are ambush predators, dropping from above or kicking avalanches onto prey. Their breath weapon is a cone of razor-sharp stone shards mixed with blinding dust. They are fiercely territorial and will attack any intruder on their mountain.',
    stats: { HP: 5874, Damage: 5123, Defense: 5487, Aggression: 6124, 'Fly Speed': 487, Mana: 3874, 'Stone Breath': 6874, 'Avalanche Kick': 5874, 'Cliff Camouflage': 0, 'Terrain Control': 5123, Threat: 7124 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Stone Breath':'#ffa000', 'Avalanche Kick':'#d32f2f', 'Cliff Camouflage':'#8d6e63', 'Terrain Control':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Earthquake magic','Piercing (wing joints)','Acid'],
    res: ['Bludgeoning','Piercing','Cold','Falling damage'],
    ab: [
      'Stone Breath (cone of stone shards, 50 dmg, bleed, blinds for 5 seconds)',
      'Avalanche Kick (kicks loose rock, creates avalanche dealing 100 dmg, knocks prone)',
      'Cliff Camouflage (blends into rocky surfaces, +50% stealth while stationary)',
      'Terrain Control (can reshape stone, creating walls, pits, or bridges)'
    ],
    loot: [{ name:'Mountain Dragon Scale', rarity:'rare', note:'Stone-grey and tough – used in heavy armor' }, { name:'Peak Core', rarity:'rare', note:'Humming with earth energy – used in seismic enchantments' }],
    variants: [
      {
        key: 'mature',
        label: '📈 Mature',
        rank: 'S',
        ibg: '#a09878',
        icon: '🏔️',
        sub: 'Mature Mountain Dragon · Peak Lord',
        size: '~22 m long', intel: 287,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control'], intelligence: ['Strategic'], interaction: ['Predatory'] },
        desc: 'A mature mountain dragon has claimed an entire mountain peak. Its scales are thick as cliff faces, and its stone breath can level a fortress. It can cause localized earthquakes and summon rock elementals to aid it.',
        stats: { HP: 13847, Damage: 12473, Defense: 13847, Aggression: 14873, 'Fly Speed': 587, Mana: 8743, 'Stone Breath': 15873, 'Earthquake Stomp': 13847, 'Summon Elementals': 0, 'Mountain Ward': 0, Threat: 16873 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Stone Breath':'#ffa000', 'Earthquake Stomp':'#d32f2f', 'Summon Elementals':'#8bc34a', 'Mountain Ward':'#00bcd4', Threat:'#d32f2f' },
        weak: ['Earthquake magic','Anti-dragon weapons','Piercing'],
        res: ['Physical','Cold','Fire'],
        ab: ['Stone Breath (as base, higher damage)', 'Earthquake Stomp (AoE, 200 dmg, structures collapse)', 'Summon Elementals (calls 2-4 earth elementals)', 'Mountain Ward (immune to knockback while grounded)'],
        loot: [{ name:'Mature Mountain Dragon Scale', rarity:'rare', note:'Nearly unbreakable' }, { name:'Peak Lord Core', rarity:'rare', note:'Controls earth energy' }]
      },
      {
        key: 'ancient',
        label: '⌛ Ancient',
        rank: 'S',
        ibg: '#8e8676',
        icon: '🏔️',
        sub: 'Ancient Mountain Dragon · Continental Divide',
        size: '~55 m long', intel: 512,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Swarm'], intelligence: ['Strategic'], interaction: ['Predatory','Environmental'] },
        desc: 'An ancient mountain dragon is indistinguishable from the mountain range itself. It sleeps for centuries, and when it stirs, entire peaks shift. Its stone breath can carve canyons. It can raise mountain walls and cause continent-wide tremors. Within its territory, it achieves SS-rank defensive capabilities.',
        stats: { HP: 32873, Damage: 28743, Defense: 34873, Aggression: 30873, 'Fly Speed': 487, Mana: 18743, 'Stone Breath': 34873, 'Continental Shift': 32873, 'Mountain Rise': 30873, 'Territory Dominion': 0, Threat: 37873 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Stone Breath':'#ffa000', 'Continental Shift':'#d32f2f', 'Mountain Rise':'#00bcd4', 'Territory Dominion':'#800080', Threat:'#d32f2f' },
        weak: ['Divine picks','Mountain-splitting magic','Core destruction'],
        res: ['All physical','All elemental','Earth magic'],
        ab: [
          'Stone Breath (as base, massive damage)',
          'Continental Shift (causes mountain range to shift, earthquakes, 500 dmg to structures)',
          'Mountain Rise (creates new mountain peak, buries enemies)',
          'Territory Dominion (within its mountain range, all stats scale to SS rank cap: 40,000)'
        ],
        territorialSS: true,
        warn: 'An ancient mountain dragon is a walking continent. Do not engage without divine assistance. Evacuate the entire mountain range.',
        territory: 'Within its mountain territory, all defensive stats scale to SS rank (cap: 40,000). Stone breath becomes unavoidable, and the terrain constantly shifts to its advantage.',
        loot: [{ name:'Ancient Mountain Dragon Core', rarity:'unique', note:'Heart of a mountain range – can create or destroy peaks' }, { name:'Worldsplit Scale', rarity:'unique', note:'A scale said to be unbreakable – used in divine armor' }]
      }
    ]
  };
  entries.push(mountainDragon);
  
  // ========================
  // 2. ICE DRAGON
  // ========================
  const iceDragon = {
    id: 'ice_dragon',
    name: 'Ice Dragon',
    sub: 'Glacial · Controller',
    rank: 'A',
    ibg: '#b3e5fc',
    icon: '❄️',
    size: 'Young: ~7 m; Mature: ~18 m; Ancient: ~45 m',
    biomes: ['Glacier','Frozen Sea','High Mountain','Permafrost'],
    intel: 170,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Control','Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Ice dragons command absolute cold. Their breath freezes entire lakes, and their presence drops ambient temperatures to lethal levels. They do not kill quickly – they immobilize, then shatter. Even young ice dragons can freeze a party of Gold-rank adventurers solid in seconds.',
    stats: { HP: 5427, Damage: 4912, Defense: 6238, Aggression: 5934, Speed: 1112, 'Flight Speed': 1480, Mana: 7145, 'Freeze Aura': 8843, 'Crystal Prison': 7732, Threat: 7918 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Freeze Aura':'#80deea', 'Crystal Prison':'#0288d1', Threat:'#607d8b' },
    weak: ['Fire (high level)','Heat generation','Blunt impact (shatters frozen scales)'],
    res: ['Ice','Freeze','Water','Cold','Physical slash'],
    ab: ['Permafrost aura (passive)','Absolute zero breath','Ice crystal prison','Flash freeze zone'],
    loot: [{ name:'Dragon Ice Shard', rarity:'rare', note:'Cold so intense it never melts – used in eternal freeze enchantments and cryo-mana batteries' },{ name:'Frozen Core Fragment', rarity:'rare', note:'Contains ley-line cold energy – used in high-grade cooling arrays' }],
    variants: [
      {
        key: 'mature', label: '📈 Mature', rank: 'S', ibg: '#4fc3f7', icon: '❄️', sub: 'Mature Ice Dragon · Permafrost Lord',
        size: '~18 m long', intel: 310,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Control','Siege'], intelligence: ['Strategic'], interaction: ['Predatory'] },
        desc: 'A mature ice dragon freezes everything within a kilometer – air, ground, even mana flows. Its presence creates a permanent blizzard. It can flash-freeze an entire castle and then shatter it with a single tail swipe. Only multiple Platinum-rank fire mages can create a safe zone.',
        stats: { HP: 13248, Damage: 11923, Defense: 15182, Aggression: 14379, Speed: 812, 'Flight Speed': 1060, Mana: 16843, 'Freeze Aura': 19768, 'Crystal Prison': 18421, Threat: 18937 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Freeze Aura':'#80deea', 'Crystal Prison':'#0288d1', Threat:'#607d8b' },
        weak: ['Diamond-rank fire magic','Heat source destruction','Anti-magic zone'],
        res: ['All ice','Ice magic','Physical','Water'],
        ab: ['Permafrost kingdom (regional)','Absolute zero storm','Glacial prison','Cold mana absorption'],
        loot: [{ name:'Mature Ice Core', rarity:'rare', note:'Solidified cold – used in climate-control artifacts and cryo-weapons' },{ name:'Permafrost Scale', rarity:'rare', note:'Heavy plate that radiates cold – used in frost-resistant armor' }]
      },
      {
        key: 'ancient', label: '⌛ Ancient', rank: 'S', ibg: '#0277bd', icon: '🧊', sub: 'Ancient Ice Dragon · Ice Age Incarnate', territorialSS: true,
        size: '~45 m long', intel: 570,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Control','Siege','Burst'], intelligence: ['Strategic'], interaction: ['Predatory','Environmental'] },
        desc: 'An ancient ice dragon is a walking ice age. Its territory is a frozen wasteland where no life can survive. It can freeze the ocean solid for hundreds of kilometers. At this stage, it treats fire dragons as prey. Inside its frozen domain, its stats rise to SS-rank, and its freeze aura cannot be countered by anything below Diamond-rank fire.',
        stats: { HP: 31287, Damage: 28463, Defense: 35831, Aggression: 33974, Speed: 514, 'Flight Speed': 620, Mana: 39782, 'Freeze Aura': 45293, 'Crystal Prison': 42815, Threat: 43867 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Freeze Aura':'#80deea', 'Crystal Prison':'#0288d1', Threat:'#607d8b' },
        warn: 'Immediate global warning. The region becomes uninhabitable. Only Legendary-rank intervention can stop an ancient ice dragon.',
        territory: 'Within its frozen territory, all cold-based stats scale to SS rank (cap: 40,000). Freeze aura becomes absolute – only divine fire can counteract.',
        weak: ['Divine fire','Mountain-shattering impact','Anti-magic field (temporary)'],
        res: ['All physical','All magic except divine fire','Extreme cold'],
        ab: ['Ice age aura','Glacier breath','Absolute zero prison','Mana freeze','Cryo-regeneration'],
        loot: [{ name:'Ancient Ice Core', rarity:'unique', note:'Cold enough to freeze time itself – used in legendary cryo-artifacts' },{ name:'Permafrost Heart', rarity:'unique', note:'Beats with glacial energy – can power a city\'s climate or create unmelting ice' }]
      }
    ]
  };
  entries.push(iceDragon);

  // ========================
  // 3. FIRE / RED DRAGON
  // ========================
  const fireDragon = {
    id: 'fire_dragon',
    name: 'Fire Dragon',
    sub: 'Volcanic · Annihilator',
    rank: 'A',
    ibg: '#ffccbc',
    icon: '🐉',
    size: 'Young: ~9 m; Mature: ~22 m; Ancient: ~55 m',
    biomes: ['Volcanic','Desert','Magma Chamber','Caldera'],
    intel: 140,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Siege'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Fire dragons are living furnaces. Their breath melts steel, and their body heat can ignite forests. They are aggressive and relentless, often destroying everything in sight for the sheer joy of it. Young fire dragons are already a threat to Gold-rank parties; mature ones require Platinum water/ice mages.',
    stats: { HP: 5812, Damage: 7234, Defense: 5128, Aggression: 8146, Speed: 1315, 'Flight Speed': 1870, Mana: 6843, 'Fire Breath': 9237, Heat: 8924, Threat: 8812 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Fire Breath':'#ff5722', Heat:'#e64a19', Threat:'#607d8b' },
    weak: ['Ice magic (high level)','Water immersion','Anti-heat field'],
    res: ['Fire','Heat','Lava','Burn','Physical slash'],
    ab: ['Heat aura (passive)','Fire breath (cone)','Volcanic eruption','Flame cloak'],
    loot: [{ name:'Dragon Fire Scale', rarity:'rare', note:'Retains intense heat – used in fire-resistant alloys and high-grade flame weapons' },{ name:'Ember Core', rarity:'rare', note:'Permanent heat source – powers forge enchantments and fire golems' }],
    variants: [
      {
        key: 'mature', label: '📈 Mature', rank: 'S', ibg: '#ffab91', icon: '🐉', sub: 'Mature Fire Dragon · Inferno Lord',
        size: '~22 m long', intel: 290,
        tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Siege','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
        desc: 'A mature fire dragon can melt stone into lava and fly through volcanoes. Its fire breath can level a city district in seconds. Its body temperature is so high that standing within 100 meters causes third-degree burns. Only multiple Platinum-rank ice mages can survive an encounter.',
        stats: { HP: 14637, Damage: 17948, Defense: 12821, Aggression: 20156, Speed: 1012, 'Flight Speed': 1440, Mana: 16873, 'Fire Breath': 22894, Heat: 22137, Threat: 21968 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Fire Breath':'#ff5722', Heat:'#e64a19', Threat:'#607d8b' },
        weak: ['Diamond-rank ice magic','Magma isolation','Core exposure'],
        res: ['All fire','Lava','Physical'],
        ab: ['Inferno breath','Meltdown aura','Lava surfing','Volcanic call'],
        loot: [{ name:'Mature Fire Core', rarity:'rare', note:'Unstable inferno – used in high-grade siege weapons and power cores' },{ name:'Magma Plate', rarity:'rare', note:'Lava-proof scale – used in extreme heat environments' }]
      },
      {
        key: 'ancient', label: '⌛ Ancient', rank: 'S', ibg: '#e64a19', icon: '🔥', sub: 'Ancient Fire Dragon · Sunbringer', territorialSS: true,
        size: '~55 m long', intel: 540,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Burst'], intelligence: ['Strategic'], interaction: ['Predatory','Environmental'] },
        desc: 'An ancient fire dragon is a moving apocalypse. Its body glows like a second sun, and its breath can melt mountains. Its territory is a volcanic hellscape. It can summon pyroclastic flows and cause volcanic eruptions on command. Within its volcanic domain, its stats reach SS-rank, and its heat aura alone kills anything below Platinum-rank instantly.',
        stats: { HP: 35821, Damage: 42983, Defense: 31245, Aggression: 47891, Speed: 718, 'Flight Speed': 960, Mana: 39872, 'Fire Breath': 53948, Heat: 52176, Threat: 51839 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Fire Breath':'#ff5722', Heat:'#e64a19', Threat:'#607d8b' },
        warn: 'Do not approach. Evacuate entire region. The heat alone is lethal. Only Legendary-rank heroes have slain ancient fire dragons – and only with divine assistance.',
        territory: 'Within volcanic territory, all heat and fire stats scale to SS rank (cap: 40,000). Ambient temperature is unsurvivable without divine protection.',
        weak: ['Divine ice','Anti-dragon legendary weapons','Core extraction (requires Diamond-rank)'],
        res: ['All fire','Lava','Physical','Magic','Burn'],
        ab: ['Supernova breath','Continental meltdown','Summon lava elementals','Core in magma','Heat absorption'],
        loot: [{ name:'Ancient Fire Core', rarity:'unique', note:'A shard of a dying star – used in the most powerful fire artifacts ever known' },{ name:'Sunscale', rarity:'unique', note:'Radiates permanent warmth – can heat entire cities or forge legendary weapons' }]
      }
    ]
  };
  entries.push(fireDragon);

  // ========================
  // 4. BLACK DRAGON (Corruption / Fear)
  // ========================
  const blackDragon = {
    id: 'black_dragon',
    name: 'Black Dragon',
    sub: 'Corruptor · Sadistic',
    rank: 'A',
    ibg: '#cfd8dc',
    icon: '⚫',
    size: 'Young: ~10 m; Mature: ~24 m; Ancient: ~60 m',
    biomes: ['Swamp','Ruins','Shadow Plane','Corrupted Land'],
    intel: 290,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Control','Siege','Ambush'], intelligence: ['Strategic'], interaction: ['Predatory','Sadistic'] },
    desc: 'Black dragons are not just physically dangerous – they are intelligent, cruel, and corrupting. They breathe acid or shadow energy that decays flesh, armor, and even magic. Their presence sows despair and fear, weakening willpower. Young black dragons are already Gold-rank nightmares; mature ones are Platinum-level threats that revel in psychological torment.',
    stats: { HP: 5634, Damage: 6128, Defense: 5329, Aggression: 7821, Speed: 1412, 'Flight Speed': 1980, Mana: 8736, Corruption: 9243, Fear: 8137, Threat: 8442 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', Corruption:'#616161', Fear:'#424242', Threat:'#607d8b' },
    weak: ['Holy light','Purification magic','Courage enchantments','Light-based attacks'],
    res: ['Darkness','Shadow magic','Fear effects','Acid','Poison'],
    ab: ['Corruption breath','Fear aura','Shadow meld','Mind corrosion','Sadistic cruelty'],
    loot: [{ name:'Black Scale', rarity:'rare', note:'Corrupted scale – used in shadow magic, but dangerous to handle without purification' },{ name:'Void Essence', rarity:'rare', note:'Concentrated despair – used in cursed weapons or high-grade shadow artifacts' }],
    variants: [
      {
        key: 'mature', label: '📈 Mature', rank: 'S', ibg: '#90a4ae', icon: '⚫', sub: 'Mature Black Dragon · Despair Incarnate',
        size: '~24 m long', intel: 480,
        tags: { behavior: ['Aggressive','Territorial'], combat: ['Control','Siege','Ambush'], intelligence: ['Strategic'], interaction: ['Predatory','Sadistic'] },
        desc: 'A mature black dragon corrupts the land around its lair – trees wither, water turns black, and wildlife becomes monstrous. Its breath can dissolve a castle gate in seconds, and its fear aura makes even veteran soldiers flee. It toys with its prey, breaking their spirits before killing them.',
        stats: { HP: 14427, Damage: 15734, Defense: 13586, Aggression: 19147, Speed: 1113, 'Flight Speed': 1570, Mana: 21382, Corruption: 22974, Fear: 20359, Threat: 20891 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', Corruption:'#616161', Fear:'#424242', Threat:'#607d8b' },
        weak: ['Divine holy magic','Pure light artifacts','Despair-resistance enchantments'],
        res: ['Darkness','Shadow','Corruption','Fear'],
        ab: ['Corruption field','Fear domination','Shadow storm','Will drain'],
        loot: [{ name:'Mature Black Core', rarity:'rare', note:'Pulsing with shadow – used in legendary dark artifacts' },{ name:'Scale of Despair', rarity:'rare', note:'Inflicts fear on touch – used in psychological warfare' }]
      },
      {
        key: 'ancient', label: '⌛ Ancient', rank: 'S', ibg: '#607d8b', icon: '🌑', sub: 'Ancient Black Dragon · World Ender', territorialSS: true,
        size: '~60 m long', intel: 890,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Ambush'], intelligence: ['Sentient'], interaction: ['Predatory','Sadistic'] },
        desc: 'An ancient black dragon is a walking apocalypse of despair. Its territory becomes a lifeless wasteland where even hope dies. It can corrupt entire nations through its mere presence, turning people into mindless thralls. Within its corrupted domain, its stats reach SS-rank, and its fear aura can affect even Platinum-rank adventurers.',
        stats: { HP: 35764, Damage: 38891, Defense: 33927, Aggression: 45288, Speed: 847, 'Flight Speed': 1130, Mana: 49756, Corruption: 54932, Fear: 48973, Threat: 49815 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', Corruption:'#616161', Fear:'#424242', Threat:'#607d8b' },
        warn: 'Catastrophic threat. The region must be isolated and purified using divine means. Only Legendary-rank holy knights and exorcists can even approach.',
        territory: 'Within its corrupted territory, all stats scale to SS rank (cap: 40,000). Fear aura becomes absolute – only divine courage can resist.',
        weak: ['Divine light','Legendary purification rituals','Core destruction with holy weapon'],
        res: ['All darkness','Corruption','Fear','Physical','Magic'],
        ab: ['World corruption field','Despair breath','Shadow army summon','Will annihilation','Immortal shadow form'],
        loot: [{ name:'Ancient Black Core', rarity:'unique', note:'A concentrated seed of nothingness – can destroy or corrupt entire regions if mishandled' },{ name:'Ender Scale', rarity:'unique', note:'Radiates despair – used in the darkest legendary artifacts' }]
      }
    ]
  };
  entries.push(blackDragon);

  // ========================
  // 5. UNDEAD DRAGON
  // ========================
  const undeadDragon = {
    id: 'undead_dragon',
    name: 'Undead Dragon',
    sub: 'Revenant · Inevitable',
    rank: 'A',
    ibg: '#bdbdbd',
    icon: '💀',
    size: 'Young: ~9 m; Mature: ~23 m; Ancient: ~58 m',
    biomes: ['Graveyard','Necropolis','Cursed Land','Shadowfell'],
    intel: 90,
    tags: { behavior: ['Aggressive'], combat: ['Siege','Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Undead dragons are corpses reanimated by dark magic. They feel no pain, tire, or fear. They keep fighting until every bone is shattered – and sometimes even then, they reassemble. Their breath is a cloud of necrotic energy that decays living tissue and drains life force. Young undead dragons are already Gold-rank menaces; mature ones require Platinum-level holy magic to permanently destroy.',
    stats: { HP: 5931, Damage: 5734, Defense: 6228, Aggression: 6835, Speed: 814, 'Flight Speed': 1050, Mana: 7347, Necrosis: 8453, 'Life Drain': 7932, Threat: 8014 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', Necrosis:'#455a64', 'Life Drain':'#880e4f', Threat:'#607d8b' },
    weak: ['Holy magic','Fire (purification)','Complete bodily destruction','Negative energy reversal'],
    res: ['Physical (non-lethal)','Darkness','Poison','Fear','Pain'],
    ab: ['Necrotic breath','Life drain aura','Reassembly (post-defeat)','Inexorable advance'],
    loot: [{ name:'Bone of the Revenant', rarity:'rare', note:'Still twitches – used in necromancy or as a cursed material' },{ name:'Necrotic Core', rarity:'rare', note:'Drains life from surroundings – dangerous to handle without holy wards' }],
    variants: [
      {
        key: 'mature', label: '📈 Mature', rank: 'S', ibg: '#9e9e9e', icon: '💀', sub: 'Mature Undead Dragon · Death Lord',
        size: '~23 m long', intel: 190,
        tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control'], intelligence: ['Reactive'], interaction: ['Predatory'] },
        desc: 'A mature undead dragon has been reanimated by a lich or similar high-level necromancer. It commands lesser undead and its necrotic aura can raise corpses within a kilometer. Killing it once is not enough; its soul is bound to a phylactery elsewhere. Only destroying the phylactery and then disintegrating the dragon stops it permanently.',
        stats: { HP: 15187, Damage: 14856, Defense: 15934, Aggression: 16892, Speed: 614, 'Flight Speed': 780, Mana: 18793, Necrosis: 20987, 'Life Drain': 19934, Threat: 20478 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', Necrosis:'#455a64', 'Life Drain':'#880e4f', Threat:'#607d8b' },
        weak: ['Holy nuke','Phylactery destruction','Overwhelming radiant damage'],
        res: ['Physical','Darkness','Necrotic','Fear','Pain'],
        ab: ['Undead army command','Necrotic storm','Life leech','Phylactery resurrection'],
        loot: [{ name:'Mature Necrotic Core', rarity:'rare', note:'Heart of a death lord – used in high-level necromancy' },{ name:'Soulbound Bone', rarity:'rare', note:'Connected to phylactery – can track the lich' }]
      },
      {
        key: 'ancient', label: '⌛ Ancient', rank: 'S', ibg: '#757575', icon: '👑💀', sub: 'Ancient Undead Dragon · World Reaper', territorialSS: true,
        size: '~58 m long', intel: 410,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Burst'], intelligence: ['Strategic'], interaction: ['Predatory','Environmental'] },
        desc: 'An ancient undead dragon is a cataclysm. It was once an ancient dragon, now raised by a demilich or god of death. Its territory becomes a dead zone where nothing lives – not even bacteria. It can raise an army of the dead from entire kingdoms. Within its death territory, its stats reach SS-rank, and its necrotic breath cannot be healed by any magic below divine level.',
        stats: { HP: 36978, Damage: 35867, Defense: 38491, Aggression: 40146, Speed: 418, 'Flight Speed': 510, Mana: 44283, Necrosis: 49387, 'Life Drain': 47193, Threat: 48164 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', Necrosis:'#455a64', 'Life Drain':'#880e4f', Threat:'#607d8b' },
        warn: 'Apocalyptic. The region must be sealed and purified by divine intervention. Only legendary heroes with god-blessed weapons stand a chance.',
        territory: 'Within its death territory, all stats scale to SS rank (cap: 40,000). No healing or resurrection magic works. Only divine intervention can restore life.',
        weak: ['Divine nuke','God-slaying weapons','Core destruction + phylactery annihilation'],
        res: ['All physical','All dark magic','All necrotic','Fear','Pain','Death effects'],
        ab: ['Death field','Necrotic apocalypse','Endless resurrection','Soul harvest','Territory of the dead'],
        loot: [{ name:'Ancient Necrotic Core', rarity:'unique', note:'A seed of oblivion – can annihilate a kingdom or create a god of death' },{ name:'Ender of Worlds Scale', rarity:'unique', note:'Absorbs life energy – used in the most cursed artifacts' }]
      }
    ]
  };
  entries.push(undeadDragon);

  // ========================
  // 6. WYVERNS
  // ========================
  // Lesser Wyvern
  const lesserWyvern = {
    id: 'lesser_wyvern',
    name: 'Lesser Wyvern',
    sub: 'Pack Hunter · Aerial',
    rank: 'B',
    ibg: '#d9e3f0',
    icon: '🦇',   // single emoji
    size: '~3 m wingspan, ~2 m long',
    biomes: ['Mountain','Forest','Coastal Cliffs','Ruins'],
    intel: 65,
    tags: { behavior: ['Aggressive'], combat: ['Swarm','Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Lesser wyverns are not true dragons but distant cousins. They hunt in packs of 5–20, using hit-and-run tactics. Their venomous tail stinger can paralyze a horse. While individually only B-rank, a swarm can overwhelm even A-rank adventurers through coordinated attacks. They are cowardly alone but fearless in numbers.',
    stats: { HP: 983, Damage: 1247, Defense: 784, Aggression: 1438, Speed: 2315, 'Flight Speed': 3120, Mana: 342, 'Stinger Venom': 1827, 'Pack Coordination': 1573, Threat: 1648 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Stinger Venom':'#6a1b9a', 'Pack Coordination':'#ffa000', Threat:'#607d8b' },
    weak: ['Anti-air magic','Large AoE','Poison resistance','Breaking formation'],
    res: ['Ground melee','Single-target ranged','Poison (partial)'],
    ab: ['Tail sting (paralytic)','Pack dive','Hit-and-run','Aerial agility'],
    loot: [{ name:'Wyvern Stinger', rarity:'uncommon', note:'Paralytic toxin – used in top-grade sleep poisons' },{ name:'Wyvern Hide', rarity:'common', note:'Lightweight and durable – used in leather armor for scouts' }]
  };
  entries.push(lesserWyvern);

  // Greater Wyvern
  const greaterWyvern = {
    id: 'greater_wyvern',
    name: 'Greater Wyvern',
    sub: 'Territorial Predator · Aerial Apex',
    rank: 'A',
    ibg: '#b0bec5',
    icon: '🦇',
    size: '~6 m wingspan, ~5 m long',
    biomes: ['Mountain','Cavern','Ruins','Desert'],
    intel: 110,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Siege'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Greater wyverns are solitary apex predators. They claim large territories and attack anything that enters. Their venom can kill an elephant, and their dive speed can pierce steel plate. They are smarter than lesser wyverns and will use hit-and-run tactics, retreating if wounded. A single greater wyvern can depopulate a village over time.',
    stats: { HP: 3427, Damage: 4189, Defense: 2876, Aggression: 4918, Speed: 3246, 'Flight Speed': 4380, Mana: 1128, 'Stinger Venom': 5389, 'Dive Impact': 4678, Threat: 4815 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Stinger Venom':'#6a1b9a', 'Dive Impact':'#ffa000', Threat:'#607d8b' },
    weak: ['Ground-based siege weapons','Anti-air magic','Dragon-slaying arrows','Breaking wings'],
    res: ['Physical (non-piercing)','Poison','Fear'],
    ab: ['Devastating dive','Venomous sting (lethal)','Aerial dominance','Territorial patrol'],
    loot: [{ name:'Greater Wyvern Stinger', rarity:'rare', note:'Potent lethal venom – used in high-grade assassins\' tools' },{ name:'Wyvern Bone Armor Plates', rarity:'rare', note:'Extremely tough – used in advanced aerial cavalry armor' }]
  };
  entries.push(greaterWyvern);

  // Alpha Wyvern (single emoji: crown)
  const alphaWyvern = {
    id: 'alpha_wyvern',
    name: 'Alpha Wyvern',
    sub: 'Alpha · Pack Leader',
    rank: 'A',
    ibg: '#78909c',
    icon: '👑',
    size: '~8 m wingspan, ~7 m long',
    biomes: ['Mountain','Cavern','Ancient Ruins'],
    intel: 210,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Burst','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Alpha wyverns lead large packs of lesser wyverns (20–50). They are themselves nearly as dangerous as a young dragon, with enhanced intelligence and command abilities. They coordinate pack tactics, set ambushes, and target the weakest party member first. Killing the alpha causes the pack to flee or become disorganized. An alpha wyvern can evolve into a true dragon if it lives long enough.',
    stats: { HP: 7648, Damage: 8129, Defense: 6437, Aggression: 9128, Speed: 3918, 'Flight Speed': 5270, Mana: 2879, 'Pack Command': 8797, 'Alpha Sting': 8928, Threat: 8476 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Pack Command':'#ffa000', 'Alpha Sting':'#6a1b9a', Threat:'#607d8b' },
    weak: ['Anti-dragon weapons','Breaking pack morale','Precision strikes on alpha'],
    res: ['Physical','Poison','Fear'],
    ab: ['Pack coordination aura','Alpha stinger (paralytic + lethal)','Command lesser wyverns','Ambush tactics'],
    loot: [{ name:'Alpha Wyvern Crown (stinger)', rarity:'rare', note:'Highly toxic and potent – used in legendary-grade poisons' },{ name:'Alpha Hide', rarity:'rare', note:'Superior leather – used in top-tier scout or ranger armor' }],
    variants: [
      {
        key: 'evolved', label: '⬆️ Evolved', rank: 'S', ibg: '#546e7a', icon: '👑', sub: 'Evolved Alpha Wyvern · Near-Dragon',
        size: '~10 m wingspan, ~9 m long', intel: 360,
        tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Burst','Control'], intelligence: ['Strategic'], interaction: ['Predatory'] },
        desc: 'An alpha wyvern that has grown exceptionally old and powerful, approaching true dragon status. It breathes a weak form of elemental breath (depending on its lineage – fire, ice, or acid). It can command both lesser wyverns and greater wyverns. Only a few steps away from becoming a young dragon.',
        stats: { HP: 15873, Damage: 16942, Defense: 13289, Aggression: 18973, Speed: 4812, 'Flight Speed': 6480, Mana: 6107, 'Pack Command': 18394, 'Alpha Stinger': 18768, 'Elemental Breath': 16783, Threat: 18192 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', 'Flight Speed':'#90a4ae', Mana:'#9c27b0', 'Pack Command':'#ffa000', 'Alpha Stinger':'#6a1b9a', 'Elemental Breath':'#00bcd4', Threat:'#607d8b' },
        weak: ['True dragon slaying weapons','Coordinated high-rank attacks'],
        res: ['Physical','Poison','Fear','Elemental (breath type)'],
        ab: ['Elemental breath','Greater pack command','Evolved stinger (mega-paralysis)','Near-dragon resilience'],
        loot: [{ name:'Evolved Alpha Core', rarity:'rare', note:'Partially draconic – used in dragon-related enchantments' },{ name:'Dragon-kin Scale', rarity:'rare', note:'A scale that has begun to harden like a true dragon – valuable in high-end armors' }]
      }
    ]
  };
  entries.push(alphaWyvern);

  // ========================
  // 7. LEVIATHAN (Aquatic Apex)
  // ========================
  const leviathan = {
    id: 'leviathan',
    name: 'Leviathan',
    sub: 'Aquatic Apex · Abyss Lord',
    rank: 'SSS',
    ibg: '#0d47a1',
    icon: '🐋',
    size: '~300–500 m long (estimated)',
    biomes: ['Deep Ocean','Abyssal Trench','Open Sea'],
    intel: 420,
    tags: { behavior: ['Territorial','Neutral'], combat: ['Siege','Control','Environmental'], intelligence: ['Strategic'], interaction: ['Environmental','Reactive'] },
    desc: 'The Leviathan is a creature of legend, a sea serpent or whale-like monstrosity so enormous that it is mistaken for a moving island. It rarely surfaces. Its temperament is unpredictable – sometimes it ignores ships entirely, other times it annihilates them without warning. In the water, its speed is unmatched – it can cross oceans in hours. On land, it cannot move, so you are safe as long as you stay ashore. However, any ship that enters its territory is potentially doomed. Its size alone creates tidal waves, and its roar can shatter stone. No navy, no matter how powerful, has ever survived a confirmed engagement.',
    stats: { HP: 98247, Damage: 74382, Defense: 65419, Aggression: 51203, 'Swim Speed': 89172, Mana: 104381, 'Tidal Force': 115274, 'Abyssal Pressure': 108653, Threat: 112847 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Tidal Force':'#00bcd4', 'Abyssal Pressure':'#1a237e', Threat:'#607d8b' },
    weak: ['Land (cannot pursue)','Divine intervention','Anti-sea magic (rare)'],
    res: ['All physical','All elemental (except divine)','Magic','Drowning','Pressure'],
    ab: ['Tidal wave generation','Abyssal pressure crush','Leviathan roar (sonic blast)','Infinite stamina','Unstoppable charge','Ocean sovereignty'],
    warn: 'Do not enter the ocean in territory marked as Leviathan’s domain. The creature is not always aggressive, but when provoked or territorial, it defends its home with absolute force. No known naval vessel can survive an encounter. The only safe response is to avoid deep waters where it resides.',
    loot: [
      { name:'Leviathan Scale (theoretical)', rarity:'unique', note:'No confirmed drop. Legends say each scale is the size of a ship’s sail and could be forged into armor that resists any physical attack.' },
      { name:'Leviathan Core (theoretical)', rarity:'unique', note:'Rumored to be so vast it powers ocean currents. If it existed, it could provide infinite water magic or sink a continent.' },
      { name:'Leviathan Tear (theoretical)', rarity:'unique', note:'A crystallized drop of Leviathan essence – said to grant control over the seas. Never seen, only dreamed of.' }
    ]
  };
  entries.push(leviathan);

  // ========================
  // Register the category
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('dragons', entries, 'Species', '🐉');
    console.log('Dragonkind data (revised) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded. Make sure bestiary-core.html is loaded first.');
  }
})();