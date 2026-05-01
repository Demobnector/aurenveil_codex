// species/elemental-data.js
(function() {
  const entries = [];

  // ========================
  // LESSER ELEMENTALS (D–C Rank)
  // ========================

  // Living Ember
  const livingEmber = {
    id: 'living_ember',
    name: 'Living Ember',
    sub: 'Lesser Fire Elemental · Spark',
    rank: 'D',
    ibg: '#ff8c4a',
    icon: '🔥',
    size: '~0.5 m, glowing red, flickering',
    biomes: ['Volcanic', 'Forest Fire', 'Campfire'],
    intel: 4,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Living embers are tiny fire elementals that leap from wildfires. They are not intelligent, only hungry. They burn anything they touch and multiply in flames.',
    stats: { HP: 87, Damage: 143, Defense: 43, Aggression: 187, 'Fly Speed': 187, Mana: 43, 'Ignite': 187, 'Spark Jump': 0, Threat: 212 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Ignite':'#ffa000', 'Spark Jump':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Water', 'Cold', 'Sand'],
    res: ['Fire', 'Heat', 'Burn'],
    ab: ['Ignite (sets target on fire, 10 dmg/sec for 30 sec)', 'Spark jump (can teleport between flames within 10 m)'],
    loot: [{ name:'Ember Core', rarity:'uncommon', note:'Faintly warm – used in minor fire enchantments' }]
  };
  entries.push(livingEmber);

  // Mud Mephit
  const mudMephit = {
    id: 'mud_mephit',
    name: 'Mud Mephit',
    sub: 'Lesser Earth/Water Elemental · Sticky',
    rank: 'D',
    ibg: '#b0a070',
    icon: '💩',
    size: '~0.6 m, lumpy, dripping mud',
    biomes: ['Swamp', 'Mudflat', 'Rainforest'],
    intel: 12,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Mud mephits are small, mischievous elementals that throw sticky mud and fly in short bursts. Their mud slows movement and can clog weapons.',
    stats: { HP: 143, Damage: 98, Defense: 98, Aggression: 187, 'Fly Speed': 143, Mana: 87, 'Mud Ball': 187, 'Sticky Goo': 0, Threat: 212 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Mud Ball':'#ffa000', 'Sticky Goo':'#800080', Threat:'#d32f2f' },
    weak: ['Fire', 'Cold', 'Wind'],
    res: ['Earth', 'Water', 'Poison'],
    ab: ['Mud ball (ranged, slows target by 50% for 10 sec)', 'Sticky goo (area, difficult terrain, may disarm weapons)'],
    loot: [{ name:'Mud Core', rarity:'common', note:'Used in low-grade earth magic' }]
  };
  entries.push(mudMephit);

  // Dust Devil (minor air)
  const dustDevilMinor = {
    id: 'dust_devil_minor',
    name: 'Dust Devil',
    sub: 'Lesser Air Elemental · Swirl',
    rank: 'D',
    ibg: '#d0c8a0',
    icon: '💨',
    size: '~1 m tall, spinning dust cloud',
    biomes: ['Desert', 'Badlands', 'Plains'],
    intel: 6,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Swarm', 'Control'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Small air elementals that whip up dust and sand. They are not very dangerous alone, but a swarm can blind and suffocate.',
    stats: { HP: 98, Damage: 87, Defense: 67, Aggression: 143, 'Fly Speed': 243, Mana: 43, 'Sand Blast': 143, 'Blinding Dust': 0, Threat: 187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Sand Blast':'#ffa000', 'Blinding Dust':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Water', 'Ice', 'Large objects'],
    res: ['Air', 'Earth (sand)'],
    ab: ['Sand blast (ranged, low damage, knocks back)', 'Blinding dust (blinds enemies in 5 m cone for 5 seconds)'],
    loot: [{ name:'Dust Core', rarity:'common', note:'Used in wind magic' }]
  };
  entries.push(dustDevilMinor);

  // Ice Shard
  const iceShard = {
    id: 'ice_shard',
    name: 'Ice Shard',
    sub: 'Lesser Ice Elemental · Crystalline',
    rank: 'C',
    ibg: '#b0e0e8',
    icon: '❄️',
    size: '~0.7 m, jagged ice crystals',
    biomes: ['Tundra', 'Glacier', 'Frozen Cave'],
    intel: 9,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Ice shards are minor ice elementals that hover and fire frozen splinters. They are brittle but sharp.',
    stats: { HP: 167, Damage: 187, Defense: 98, Aggression: 243, 'Fly Speed': 187, Mana: 187, 'Ice Splinter': 243, 'Freeze Aura': 0, Threat: 287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Ice Splinter':'#00bcd4', 'Freeze Aura':'#ffa000', Threat:'#d32f2f' },
    weak: ['Fire', 'Blunt force'],
    res: ['Ice', 'Cold'],
    ab: ['Ice splinter (ranged, piercing, may slow)', 'Freeze aura (5 dmg/sec, slows enemies within 5 m)'],
    loot: [{ name:'Frozen Shard', rarity:'uncommon', note:'Cold to touch – used in ice weapons' }]
  };
  entries.push(iceShard);

  // ========================
  // MID ELEMENTALS (B Rank)
  // ========================

  // Fire Elemental
  const fireElemental = {
    id: 'fire_elemental',
    name: 'Fire Elemental',
    sub: 'Elemental Flame · Inferno',
    rank: 'B',
    ibg: '#ff6a2a',
    icon: '🔥',
    size: '~2.5 m tall, humanoid flames',
    biomes: ['Volcanic', 'Magma Chamber', 'Wildfire'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Fire elementals are living flames that burn everything they touch. They are immune to fire and heat, and they can ignite the ground beneath them. Water harms them.',
    stats: { HP: 987, Damage: 987, Defense: 743, Aggression: 1287, 'Fly Speed': 287, Mana: 587, 'Flame Touch': 1287, 'Fireball': 987, 'Heat Aura': 0, Threat: 1487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Flame Touch':'#ff5722', 'Fireball':'#ffa000', 'Heat Aura':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Water', 'Ice', 'Cold'],
    res: ['Fire', 'Heat', 'Burn'],
    ab: ['Flame touch (melee, ignites target)', 'Fireball (ranged AoE, 20 dmg/sec for 30 sec)', 'Heat aura (10 dmg/sec within 10 m)'],
    loot: [{ name:'Fire Core', rarity:'rare', note:'Pulsing with heat – used in high-tier fire enchantments' }],
    variants: [
      {
        key: 'greater',
        label: '⬆️ Greater Fire Elemental',
        rank: 'A',
        ibg: '#ff4a0a',
        icon: '🔥',
        sub: 'Greater Fire Elemental · Inferno Lord',
        size: '~4 m tall, roaring flames',
        intel: 67,
        desc: 'A larger, more intelligent fire elemental. It can summon lesser fire elementals and its flames are hot enough to melt steel.',
        stats: { HP: 2487, Damage: 2287, Defense: 1687, Aggression: 2873, 'Fly Speed': 387, Mana: 1287, 'Inferno Touch': 2873, 'Fire Storm': 2487, 'Summin Embers': 0, Threat: 3087 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Inferno Touch':'#d32f2f', 'Fire Storm':'#ffa000', 'Summon Embers':'#8bc34a', Threat:'#d32f2f' },
        weak: ['Water', 'Ice'],
        res: ['Fire', 'Heat'],
        ab: ['Inferno touch (ignores 30% armor, ignites)', 'Fire storm (large AoE, 50 dmg/sec)', 'Summon embers (calls 2-4 living embers)'],
        loot: [{ name:'Greater Fire Core', rarity:'rare', note:'Used in legendary fire artifacts' }]
      }
    ]
  };
  entries.push(fireElemental);

  // Earth Elemental
  const earthElemental = {
    id: 'earth_elemental',
    name: 'Earth Elemental',
    sub: 'Walking Stone · Brawler',
    rank: 'B',
    ibg: '#a09878',
    icon: '🗻',
    size: '~2.8 m tall, solid rock',
    biomes: ['Mountain', 'Cave', 'Quarry'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Defensive'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Earth elementals are slow, immensely strong constructs of stone. They are nearly immune to physical damage and can cause earthquakes.',
    stats: { HP: 1873, Damage: 1487, Defense: 1873, Aggression: 1487, 'Burrow Speed': 143, Mana: 287, 'Earth Slam': 1873, 'Stone Armor': 0, 'Tremor': 1487, Threat: 2187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Earth Slam':'#ffa000', 'Stone Armor':'#8d6e63', 'Tremor':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Bludgeoning (cracks)', 'Acid', 'Water erosion'],
    res: ['Piercing', 'Slashing'],
    ab: ['Earth slam (melee, AoE knockback)', 'Stone armor (passive, reduces physical damage by 50%)', 'Tremor (ground shake, enemies in 10 m radius prone)'],
    loot: [{ name:'Earth Core', rarity:'rare', note:'Dense, used in golem construction' }],
    variants: [
      {
        key: 'greater',
        label: '⬆️ Greater Earth Elemental',
        rank: 'A',
        ibg: '#908868',
        icon: '🗻',
        sub: 'Greater Earth Elemental · Mountain',
        size: '~4.5 m tall, boulder-like',
        intel: 45,
        desc: 'A massive earth elemental that can cause localized earthquakes and hurl boulders.',
        stats: { HP: 3874, Damage: 2873, Defense: 3874, Aggression: 2873, 'Burrow Speed': 98, Mana: 587, 'Boulder Toss': 2873, 'Fissure': 3874, 'Stone Skin': 0, Threat: 4387 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Boulder Toss':'#ffa000', 'Fissure':'#d32f2f', 'Stone Skin':'#8d6e63', Threat:'#d32f2f' },
        weak: ['Acid', 'Severe bludgeoning'],
        res: ['All physical'],
        ab: ['Boulder toss (ranged, high damage, destroys structures)', 'Fissure (creates crack in ground, traps enemies)', 'Stone skin (immune to critical hits)'],
        loot: [{ name:'Greater Earth Core', rarity:'rare', note:'Heavy, used in siege golems' }]
      }
    ]
  };
  entries.push(earthElemental);

  // Water Elemental
  const waterElemental = {
    id: 'water_elemental',
    name: 'Water Elemental',
    sub: 'Living Tide · Fluid',
    rank: 'B',
    ibg: '#a0e0e8',
    icon: '💧',
    size: '~2.5 m tall, humanoid water',
    biomes: ['Ocean', 'River', 'Lake'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Water elementals are fluid bodies that drown enemies and create waves. They are fast in water, slower on land.',
    stats: { HP: 1287, Damage: 987, Defense: 987, Aggression: 1487, 'Swim Speed': 487, Mana: 687, 'Water Whip': 1487, 'Drown': 0, 'Cleanse': 0, Threat: 1687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Water Whip':'#00bcd4', 'Drown':'#800080', 'Cleanse':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Electricity', 'Freeze'],
    res: ['Water', 'Acid'],
    ab: ['Water whip (ranged, pulls target toward elemental)', 'Drown (grapple, target suffocates underwater)', 'Cleanse (removes poison and disease from touched ally)'],
    loot: [{ name:'Water Core', rarity:'rare', note:'Flowing, used in hydromancy' }],
    variants: [
      {
        key: 'greater',
        label: '⬆️ Greater Water Elemental',
        rank: 'A',
        ibg: '#80d0e0',
        icon: '💧',
        sub: 'Greater Water Elemental · Flood',
        size: '~4 m tall, torrent',
        intel: 56,
        desc: 'A massive water elemental that can create tidal waves and floods entire areas.',
        stats: { HP: 2873, Damage: 2287, Defense: 2187, Aggression: 2873, 'Swim Speed': 587, Mana: 1687, 'Tidal Wave': 2873, 'Whirlpool': 2487, 'Water Form': 0, Threat: 3287 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Tidal Wave':'#ffa000', 'Whirlpool':'#00bcd4', 'Water Form':'#8bc34a', Threat:'#d32f2f' },
        weak: ['Electricity', 'Cold'],
        res: ['Water'],
        ab: ['Tidal wave (large AoE, knocks back, deals 200 dmg)', 'Whirlpool (traps enemies, suffocation)', 'Water form (can pass through small gaps, immune to physical)'],
        loot: [{ name:'Greater Water Core', rarity:'rare', note:'Used in ship enchantments' }]
      }
    ]
  };
  entries.push(waterElemental);

  // Air Elemental
  const airElemental = {
    id: 'air_elemental',
    name: 'Air Elemental',
    sub: 'Whirlwind · Swift',
    rank: 'B',
    ibg: '#d0e0f0',
    icon: '💨',
    size: '~3 m tall, swirling wind',
    biomes: ['Sky', 'Plains', 'Mountain Peak'],
    intel: 45,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Control'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Air elementals are fast, invisible whirlwinds that strike from above. They can knock enemies prone and create wind walls.',
    stats: { HP: 987, Damage: 1087, Defense: 743, Aggression: 1587, 'Fly Speed': 587, Mana: 587, 'Wind Blast': 1487, 'Whirlwind': 1087, 'Invisible': 0, Threat: 1687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Wind Blast':'#ffa000', 'Whirlwind':'#00bcd4', 'Invisible':'#800080', Threat:'#d32f2f' },
    weak: ['Earth (solid barriers)', 'Ice', 'Magic null'],
    res: ['Air', 'Wind'],
    ab: ['Wind blast (ranged, knockback, 50 dmg)', 'Whirlwind (surrounds enemy, 20 dmg/sec, cannot act)', 'Invisible (cannot be seen when stationary)'],
    loot: [{ name:'Air Core', rarity:'rare', note:'Light, used in wind magic' }],
    variants: [
      {
        key: 'greater',
        label: '⬆️ Greater Air Elemental',
        rank: 'A',
        ibg: '#c0d8f0',
        icon: '💨',
        sub: 'Greater Air Elemental · Storm',
        size: '~6 m tall, tornado',
        intel: 78,
        desc: 'A massive air elemental that creates local storms, hurls lightning, and can lift enemies into the sky.',
        stats: { HP: 2287, Damage: 2087, Defense: 1687, Aggression: 2873, 'Fly Speed': 687, Mana: 1287, 'Lightning Strike': 2873, 'Tornado': 2487, 'Storm Aura': 0, Threat: 3287 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Lightning Strike':'#ffa000', 'Tornado':'#00bcd4', 'Storm Aura':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Earth barriers'],
        res: ['Air', 'Lightning'],
        ab: ['Lightning strike (ranged, 300 dmg, stun)', 'Tornado (lifts target, 50 dmg/sec for 10 sec)', 'Storm aura (constant lightning damage to all within 30 m)'],
        loot: [{ name:'Greater Air Core', rarity:'rare', note:'Used in storm enchantments' }]
      }
    ]
  };
  entries.push(airElemental);

  // ========================
  // GREATER ELEMENTALS (A Rank)
  // ========================

  // Magma Elemental (Fire+Earth)
  const magmaElemental = {
    id: 'magma_elemental',
    name: 'Magma Elemental',
    sub: 'Molten Rock · Eruption',
    rank: 'A',
    ibg: '#e06a3a',
    icon: '🌋',
    size: '~3 m tall, flowing magma, rocky core',
    biomes: ['Volcano', 'Magma Chamber', 'Caldera'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Magma elementals are rare hybrids of fire and earth. They leave trails of molten rock and can erupt, showering enemies with lava.',
    stats: { HP: 2873, Damage: 2487, Defense: 2187, Aggression: 2873, 'Burrow Speed': 143, Mana: 987, 'Lava Splash': 2873, 'Eruption': 2487, 'Magma Trail': 0, Threat: 3287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Lava Splash':'#ff5722', 'Eruption':'#ffa000', 'Magma Trail':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Water', 'Ice', 'Cold'],
    res: ['Fire', 'Earth', 'Heat', 'Lava'],
    ab: ['Lava splash (cone, fire damage, ignites ground)', 'Eruption (AoE, 200 dmg, creates lava pools)', 'Magma trail (leaves burning ground behind)'],
    loot: [{ name:'Magma Core', rarity:'rare', note:'Hot – used in volcanic enchantments' }]
  };
  entries.push(magmaElemental);

  // Ice Elemental (Water+Air)
  const iceElemental = {
    id: 'ice_elemental',
    name: 'Ice Elemental',
    sub: 'Frozen Force · Blizzard',
    rank: 'A',
    ibg: '#b0e8f0',
    icon: '❄️',
    size: '~2.8 m tall, jagged ice, snow aura',
    biomes: ['Glacier', 'Frozen Sea', 'Ice Cave'],
    intel: 45,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Ice elementals are frozen water–air hybrids. They freeze the air around them, create ice walls, and can freeze enemies solid.',
    stats: { HP: 2487, Damage: 2187, Defense: 2187, Aggression: 2587, 'Fly Speed': 287, Mana: 1487, 'Freezing Breath': 2873, 'Ice Wall': 0, 'Frost Aura': 2187, Threat: 3087 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Freezing Breath':'#00bcd4', 'Ice Wall':'#ffa000', 'Frost Aura':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Fire', 'Blunt force'],
    res: ['Ice', 'Cold'],
    ab: ['Freezing breath (cone, immobilizes targets for 10 sec)', 'Ice wall (summons wall of ice, blocks movement)', 'Frost aura (10 dmg/sec, slows enemies within 15 m)'],
    loot: [{ name:'Ice Core', rarity:'rare', note:'Always cold – used in ice magic' }]
  };
  entries.push(iceElemental);

  // Storm Elemental (Air+Water)
  const stormElemental = {
    id: 'storm_elemental',
    name: 'Storm Elemental',
    sub: 'Tempest · Lightning',
    rank: 'A',
    ibg: '#80b0f0',
    icon: '⛈️',
    size: '~4 m tall, dark cloud, lightning flashes',
    biomes: ['Stormy Sea', 'Mountain Peak', 'Sky'],
    intel: 67,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Storm elementals are powerful hybrids of air and water, crackling with lightning. They create rain and thunder and can call down bolts.',
    stats: { HP: 2873, Damage: 2687, Defense: 1987, Aggression: 3287, 'Fly Speed': 487, Mana: 2187, 'Lightning Bolt': 3287, 'Rain Storm': 0, 'Thunderclap': 2687, Threat: 3687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Lightning Bolt':'#ffa000', 'Rain Storm':'#00bcd4', 'Thunderclap':'#800080', Threat:'#d32f2f' },
    weak: ['Earth barriers', 'Anti-magic'],
    res: ['Lightning', 'Wind', 'Water'],
    ab: ['Lightning bolt (line, 400 dmg, stun)', 'Rain storm (creates heavy rain, reduces visibility, douses fire)', 'Thunderclap (AoE deafen, 100 dmg, stun for 2 sec)'],
    loot: [{ name:'Storm Core', rarity:'rare', note:'Crackles with energy – used in storm artifacts' }]
  };
  entries.push(stormElemental);

  // Sand Elemental (Earth+Air)
  const sandElemental = {
    id: 'sand_elemental',
    name: 'Sand Elemental',
    sub: 'Dune Walker · Blinding',
    rank: 'A',
    ibg: '#d0b878',
    icon: '🏜️',
    size: '~3 m tall, swirling sand, vague humanoid',
    biomes: ['Desert', 'Dunes', 'Badlands'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Swarm'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Sand elementals are rare in deserts, formed from earth and air. They blind enemies with sand, create quicksand, and can dissolve into the dunes.',
    stats: { HP: 2387, Damage: 1987, Defense: 2087, Aggression: 2687, 'Burrow Speed': 287, Mana: 987, 'Sand Blast': 2873, 'Quicksand': 0, 'Dissolve': 0, Threat: 3087 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Sand Blast':'#ffa000', 'Quicksand':'#800080', 'Dissolve':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Water', 'Ice', 'Solid barriers'],
    res: ['Earth', 'Air', 'Heat'],
    ab: ['Sand blast (cone, blinds for 10 sec, 50 dmg)', 'Quicksand (creates pit, enemies sink, suffocation)', 'Dissolve (merges into sand, becomes invisible, heals)'],
    loot: [{ name:'Sand Core', rarity:'rare', note:'Grainy – used in sand magic' }]
  };
  entries.push(sandElemental);

  // ========================
  // ELDER ELEMENTALS (S Rank)
  // ========================

  // Inferno (Elder Fire)
  const inferno = {
    id: 'inferno',
    name: 'Inferno',
    sub: 'Elder Fire Elemental · Living Wildfire',
    rank: 'S',
    ibg: '#ff3a0a',
    icon: '🔥',
    size: '~8 m tall, colossal flame',
    biomes: ['Volcanic', 'Wildfire Zone', 'Burning Plains'],
    intel: 134,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Inferno is an elder fire elemental, a living wildfire that can incinerate entire forests. It is intelligent and seeks only to burn. Water barely affects it.',
    stats: { HP: 8873, Damage: 8473, Defense: 6873, Aggression: 9873, 'Fly Speed': 487, Mana: 4873, 'Worldfire': 9873, 'Pyroclasm': 8873, 'Fire Immune': 0, Threat: 10873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Worldfire':'#d32f2f', 'Pyroclasm':'#ffa000', 'Fire Immune':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Divine water', 'Absolute cold'],
    res: ['All fire', 'Heat', 'Physical', 'Magic (except divine)'],
    ab: ['Worldfire (summons massive firestorm, 500 dmg/sec for 30 sec)', 'Pyroclasm (cone, 1000 dmg, destroys structures)', 'Fire immune (immune to all fire and heat)'],
    warn: 'Inferno is a regional disaster. Evacuate. Diamond-rank parties only.',
    loot: [{ name:'Inferno Core', rarity:'unique', note:'Heart of wildfire – can power a forge eternally' }]
  };
  entries.push(inferno);

  // Terra (Elder Earth)
  const terra = {
    id: 'terra',
    name: 'Terra',
    sub: 'Elder Earth Elemental · Walking Mountain',
    rank: 'S',
    ibg: '#908870',
    icon: '⛰️',
    size: '~12 m tall, living rock and soil',
    biomes: ['Mountain Range', 'Deep Crust'],
    intel: 112,
    tags: { behavior: ['Territorial', 'Passive'], combat: ['Siege', 'Control'], intelligence: ['Strategic'], interaction: ['Guardian'] },
    desc: 'Terra is an elder earth elemental, a living mountain. It rarely awakens, but when it does, it reshapes the landscape. It is not inherently hostile – only if miners dig too deep.',
    stats: { HP: 14873, Damage: 10873, Defense: 14873, Aggression: 4873, 'Burrow Speed': 87, Mana: 3873, 'Tectonic Shift': 12873, 'Rock Slide': 10873, 'Earth Embrace': 0, Threat: 15873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Tectonic Shift':'#ffa000', 'Rock Slide':'#d32f2f', 'Earth Embrace':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Divine picks', 'Corruption'],
    res: ['All physical', 'Earth magic'],
    ab: ['Tectonic shift (causes earthquake, fissures, 500 dmg)', 'Rock slide (summons avalanche, 1000 dmg, buries)', 'Earth embrace (target swallowed by ground, removed from combat)'],
    warn: 'Terra is a landscape, not a monster. Do not provoke.',
    loot: [{ name:'Terra Core', rarity:'unique', note:'Heart of a mountain – can create earthquakes' }]
  };
  entries.push(terra);

  // Tsunami (Elder Water)
  const tsunami = {
    id: 'tsunami',
    name: 'Tsunami',
    sub: 'Elder Water Elemental · Tidal Wave',
    rank: 'S',
    ibg: '#80b0e0',
    icon: '🌊',
    size: '~15 m tall, colossal wave',
    biomes: ['Deep Ocean', 'Open Sea'],
    intel: 98,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Control'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Tsunami is an elder water elemental, a sentient tidal wave. It can flood coastal cities and drag entire fleets to the depths.',
    stats: { HP: 10873, Damage: 9873, Defense: 8873, Aggression: 9873, 'Swim Speed': 687, Mana: 8873, 'Tidal Surge': 12873, 'Drown City': 10873, 'Water Form': 0, Threat: 13873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Tidal Surge':'#ffa000', 'Drown City':'#d32f2f', 'Water Form':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Freeze (divine)', 'Earth barriers'],
    res: ['Water', 'Cold', 'Physical'],
    ab: ['Tidal surge (wave, 1000 dmg, destroys structures)', 'Drown city (floods large area, 200 dmg/sec, drowning)', 'Water form (immune to physical while in water)'],
    warn: 'Tsunami is a natural disaster. Evacuate coastlines.',
    loot: [{ name:'Tsunami Core', rarity:'unique', note:'Heart of the sea – can create endless water' }]
  };
  entries.push(tsunami);

  // Tempest (Elder Air)
  const tempest = {
    id: 'tempest',
    name: 'Tempest',
    sub: 'Elder Air Elemental · Hurricane',
    rank: 'S',
    ibg: '#a0b8e8',
    icon: '🌀',
    size: '~20 m diameter, rotating storm',
    biomes: ['Sky', 'Storm Plains', 'Cyclone Zone'],
    intel: 156,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Control'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Tempest is an elder air elemental, a living hurricane. It can throw enemies miles away, summon lightning, and create tornadoes.',
    stats: { HP: 9873, Damage: 10873, Defense: 6873, Aggression: 12873, 'Fly Speed': 887, Mana: 10873, 'Hurricane Force': 12873, 'Lightning Barrage': 10873, 'Tornado': 9873, Threat: 14873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Hurricane Force':'#ffa000', 'Lightning Barrage':'#d32f2f', 'Tornado':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Calm magic', 'Earth barriers'],
    res: ['Air', 'Lightning'],
    ab: ['Hurricane force (pulls enemies, 500 dmg/sec, flings)', 'Lightning barrage (10 strikes, each 300 dmg)', 'Tornado (summons twister, lifts enemies, 200 dmg/sec)'],
    warn: 'Tempest is a flying cataclysm. Do not engage without air superiority.',
    loot: [{ name:'Tempest Core', rarity:'unique', note:'Heart of the storm – can control weather' }]
  };
  entries.push(tempest);

  // ========================
  // ELEMENTAL LORDS (SS Rank)
  // ========================

  const fireLord = {
    id: 'fire_lord',
    name: 'The Fire Lord',
    sub: 'Elemental Lord · Ruler of Flame',
    rank: 'SS',
    ibg: '#d63a0a',
    icon: '👑',
    size: '~10 m tall, humanoid, blazing crown',
    biomes: ['Elemental Plane of Fire', 'Volcanic Core'],
    intel: 567,
    tags: { behavior: ['Strategic', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Sentient'], interaction: ['Ruler'] },
    desc: 'The Fire Lord is the primordial embodiment of flame, ruler of all fire elementals. It rarely leaves its domain, but when it does, it brings a new age of ash. It is not evil – it is elemental force given will.',
    stats: { HP: 28743, Damage: 24873, Defense: 18743, Aggression: 0, 'Fly Speed': 687, Mana: 28743, 'Domain of Flame': 0, 'Ignition': 28743, 'Immortal Flame': 0, Threat: 28743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Domain of Flame':'#ffa000', 'Ignition':'#d32f2f', 'Immortal Flame':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Divine water', 'Conceptual opposite'],
    res: ['All fire', 'Heat', 'Physical', 'Magic'],
    ab: [
      'Domain of flame (any fire within 10 km obeys him, creates fire elementals)',
      'Ignition (any flammable target within 1 km bursts into flame, 2000 dmg)',
      'Immortal flame (cannot be killed while any fire exists in the world)'
    ],
    warn: 'The Fire Lord cannot be fought conventionally. Banishment or negotiation are the only options.',
    loot: [{ name:'Flame Lord Crown (theoretical)', rarity:'unique', note:'No known way to obtain' }]
  };
  entries.push(fireLord);

  const earthKing = {
    id: 'earth_king',
    name: 'The Earth King',
    sub: 'Elemental Lord · Sovereign of Stone',
    rank: 'SS',
    ibg: '#8e866e',
    icon: '👑',
    size: '~15 m tall, mountain-like, gem eyes',
    biomes: ['Elemental Plane of Earth', 'World Core'],
    intel: 534,
    tags: { behavior: ['Strategic', 'Territorial'], combat: ['Siege', 'Defensive'], intelligence: ['Sentient'], interaction: ['Ruler'] },
    desc: 'The Earth King is the lord of all earth elementals, a living continent. It does not move; it is the ground beneath you. It can cause earthquakes globally.',
    stats: { HP: 38743, Damage: 18743, Defense: 38743, Aggression: 0, 'Burrow Speed': 0, Mana: 18743, 'Quake': 0, 'Mountain Rise': 0, 'Iron Skin': 0, Threat: 38743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Quake':'#ffa000', 'Mountain Rise':'#d32f2f', 'Iron Skin':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Divine picks', 'Conceptual erosion'],
    res: ['All physical', 'Earth magic'],
    ab: [
      'Quake (causes magnitude 9 earthquake worldwide, 5000 dmg to structures)',
      'Mountain rise (creates new mountain range, buries enemies)',
      'Iron skin (immune to all non-divine attacks)'
    ],
    warn: 'The Earth King is not a fight. It is the planet.',
    loot: [{ name:'Earth King Core (theoretical)', rarity:'unique', note:'Heart of the world' }]
  };
  entries.push(earthKing);

  const deepCurrent = {
    id: 'deep_current',
    name: 'The Deep Current',
    sub: 'Elemental Lord · Ocean\'s Will',
    rank: 'SS',
    ibg: '#5090c0',
    icon: '👑',
    size: '~20 km long, whale-like, translucent',
    biomes: ['Elemental Plane of Water', 'Abyssal Plain'],
    intel: 678,
    tags: { behavior: ['Strategic', 'Passive'], combat: ['Siege', 'Control'], intelligence: ['Sentient'], interaction: ['Ruler'] },
    desc: 'The Deep Current is the lord of water elementals, the living ocean. It rarely surfaces, but when it does, it can drown continents.',
    stats: { HP: 28743, Damage: 24873, Defense: 24743, Aggression: 0, 'Swim Speed': 987, Mana: 38743, 'Tide': 0, 'Drown World': 0, 'Water Immortal': 0, Threat: 28743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Tide':'#ffa000', 'Drown World':'#d32f2f', 'Water Immortal':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Divine fire', 'Conceptual freezing'],
    res: ['Water', 'Cold', 'Physical'],
    ab: ['Tide (raises sea level by 100 m, floods all coastal areas)', 'Drown world (summons eternal rain, drowns all non-aquatic life)', 'Water immortal (cannot be killed while any water exists)'],
    warn: 'The Deep Current is not an enemy. It is the sea.',
    loot: [{ name:'Current Heart (theoretical)', rarity:'unique', note:'Heart of the ocean' }]
  };
  entries.push(deepCurrent);

  const stormfather = {
    id: 'stormfather',
    name: 'The Stormfather',
    sub: 'Elemental Lord · Sky\'s Fury',
    rank: 'SS',
    ibg: '#7090c0',
    icon: '👑',
    size: '~50 km wide, perpetual hurricane',
    biomes: ['Elemental Plane of Air', 'Upper Atmosphere'],
    intel: 723,
    tags: { behavior: ['Strategic', 'Inscrutable'], combat: ['Siege', 'Control'], intelligence: ['Sentient'], interaction: ['Ruler'] },
    desc: 'The Stormfather is the lord of air elementals, the sky itself. It can cause global storms, hurl hurricanes, and strip the atmosphere from a planet.',
    stats: { HP: 24743, Damage: 28743, Defense: 18743, Aggression: 0, 'Fly Speed': 987, Mana: 48743, 'Storm Domain': 0, 'Sky Fall': 0, 'Air Immortal': 0, Threat: 28743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Storm Domain':'#ffa000', 'Sky Fall':'#d32f2f', 'Air Immortal':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Divine earth', 'Conceptual stillness'],
    res: ['Air', 'Lightning', 'Wind'],
    ab: ['Storm domain (summons global hurricanes, 500 dmg/sec to all outdoors)', 'Sky fall (removes air from an area, suffocation)', 'Air immortal (cannot be killed while any air exists)'],
    warn: 'The Stormfather is the sky. You cannot fight the sky.',
    loot: [{ name:'Stormfather Core (theoretical)', rarity:'unique', note:'Heart of the sky' }]
  };
  entries.push(stormfather);

  // ========================
  // PRIMORDIAL ELEMENTAL (SSS Rank)
  // ========================

  const worldFlame = {
    id: 'world_flame',
    name: 'The World Flame',
    sub: 'Primordial Elemental · Cosmic Fire',
    rank: 'SSS',
    ibg: '#ff8a3a',
    icon: '✨',
    size: 'Theoretical, may be the sun itself',
    biomes: ['Cosmic', 'Sun'],
    intel: 0,
    tags: { behavior: ['Inscrutable'], combat: [], intelligence: ['Sentient'], interaction: ['Environmental'] },
    desc: 'The World Flame is a theoretical primordial elemental – the fire that started all fires, the spark of creation. No one knows if it truly exists. Some cultures worship the sun as a manifestation of it. It cannot be fought; it is a cosmological constant.',
    stats: { HP: 0, Damage: 0, Defense: 0, Aggression: 0, Speed: 0, Mana: 0, 'Creation': 0, 'Consumption': 0, 'Eternal': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Creation':'#ffa000', 'Consumption':'#d32f2f', 'Eternal':'#00bcd4', Threat:'#607d8b' },
    weak: ['None'],
    res: ['All'],
    ab: ['Creation (birthed all fire elementals, theoretical)', 'Consumption (will end all fire, theoretical)', 'Eternal (exists beyond time)'],
    warn: 'The World Flame is a myth. If it exists, it is beyond combat.',
    loot: [{ name:'None', rarity:'unique', note:'You cannot loot a concept.' }]
  };
  entries.push(worldFlame);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('elementals', entries, 'Species', '🔥');
    console.log('Elemental data (complete hierarchy) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();