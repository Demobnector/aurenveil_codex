// biomes/desert-data.js
(function() {
  const entries = [];

  // ========================
  // SPECIAL / NON-HOSTILE DESERT CREATURES
  // ========================

  // Sand Fox (Friendly Guide)
  const sandFox = {
    id: 'sand_fox',
    name: 'Sand Fox',
    sub: 'Desert Guide · Friendly',
    rank: 'F',
    ibg: '#e0c0a0',
    icon: '🦊',
    size: '~0.6 m, sandy fur, large ears',
    biomes: ['Desert','Dunes'],
    intel: 56,
    tags: { behavior: ['Neutral','Helpful'], combat: [], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Sand foxes are intelligent, curious foxes that often approach travelers. They are not hostile and may lead lost people to water or shelter. Killing one is considered bad luck. They can dig small holes to find water.',
    stats: { HP: 23, Damage: 12, Defense: 12, Aggression: 0, Speed: 187, Mana: 0, 'Lead': 0, 'Dig': 0, 'Howl': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Lead':'#8bc34a', 'Dig':'#ffa000', 'Howl':'#00bcd4', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: ['Heat'],
    ab: ['Lead (may guide travelers to water or oasis)', 'Dig (uncovers small water source)', 'Howl (alerts other foxes)'],
    loot: [{ name:'Fox Fur', rarity:'common', note:'Light, warm, but killing foxes is frowned upon' }]
  };
  entries.push(sandFox);

  // ========================
  // COMMON DESERT CREATURES (D–C Rank)
  // ========================

  // Dune Stalker (Lizard)
  const duneStalker = {
    id: 'dune_stalker',
    name: 'Dune Stalker',
    sub: 'Desert Lizard · Hit-and-Run',
    rank: 'D',
    ibg: '#b0a870',
    icon: '🦎',
    size: '~1.2 m long, sandy scales, large eyes',
    biomes: ['Desert','Dunes','Rocky Desert'],
    intel: 23,
    tags: { behavior: ['Aggressive','Opportunistic'], combat: ['Burst','Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Dune stalkers are fast, skittish lizards that strike quickly and retreat. Their bite carries a mild venom, and they can change color to blend into sand. They hunt in pairs.',
    stats: { HP: 143, Damage: 187, Defense: 87, Aggression: 243, Speed: 387, Mana: 12, 'Venom Bite': 287, 'Camouflage': 0, 'Quick Retreat': 0, Threat: 312 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Venom Bite':'#800080', 'Camouflage':'#00bcd4', 'Quick Retreat':'#ffa000', Threat:'#d32f2f' },
    weak: ['Cold','Fire','Large AoE'],
    res: ['Heat','Poison (low)'],
    ab: ['Venom bite (weak poison, 5 dmg/sec for 30 sec)', 'Camouflage (blends into sand, +50% stealth)', 'Quick retreat (disengage without opportunity attack)'],
    loot: [{ name:'Stalker Scale', rarity:'common', note:'Camouflage clothing' }, { name:'Stalker Claw', rarity:'common', note:'Light dagger material' }]
  };
  entries.push(duneStalker);

  // Carrion Beetle
  const carrionBeetle = {
    id: 'carrion_beetle',
    name: 'Carrion Beetle',
    sub: 'Scavenger · Swarm Insect',
    rank: 'D',
    ibg: '#6e6e5e',
    icon: '🐞',
    size: '~0.8 m long, shiny black shell, mandibles',
    biomes: ['Desert','Badlands','Carrion Fields'],
    intel: 4,
    tags: { behavior: ['Aggressive','Opportunistic'], combat: ['Swarm'], intelligence: ['Instinctive'], interaction: ['Scavenger'] },
    desc: 'Carrion beetles are scavengers that swarm fallen creatures. They are not dangerous alone, but a swarm can strip flesh from bone in minutes. They are attracted to the scent of blood.',
    stats: { HP: 87, Damage: 143, Defense: 87, Aggression: 187, Speed: 243, Mana: 0, 'Mandible Bite': 243, 'Swarm Aura': 0, 'Blood Scent': 0, Threat: 287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Mandible Bite':'#ffa000', 'Swarm Aura':'#d32f2f', 'Blood Scent':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire','Cold','Large AoE'],
    res: ['Poison','Disease'],
    ab: ['Mandible bite (basic attack)', 'Swarm aura (adjacent beetles grant +10% damage)', 'Blood scent (attracted to bleeding enemies from 100 m)'],
    loot: [{ name:'Beetle Shell', rarity:'common', note:'Used in shiny armor' }],
    variants: [
      {
        key: 'giant_carrion',
        label: '🪲 Giant Carrion Beetle',
        rank: 'C',
        ibg: '#6e6e5e',
        icon: '🐞',
        sub: 'Giant Carrion Beetle · Flesh Eater',
        size: '~2 m long, massive mandibles',
        intel: 6,
        desc: 'A larger, more aggressive carrion beetle that leads swarms. Its mandibles can crush bones. It emits a pheromone that attracts more beetles.',
        stats: { HP: 387, Damage: 343, Defense: 243, Aggression: 487, Speed: 287, Mana: 23, 'Crushing Mandibles': 587, 'Pheromone Call': 0, 'Berserk Feed': 0, Threat: 587 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Crushing Mandibles':'#d32f2f', 'Pheromone Call':'#ffa000', 'Berserk Feed':'#800080', Threat:'#d32f2f' },
        weak: ['Fire','Cold'],
        res: ['Poison'],
        ab: ['Crushing mandibles (ignores 30% armor)', 'Pheromone call (summons 2-4 normal carrion beetles)', 'Berserk feed (when below 30% HP, gains +50% damage)'],
        loot: [{ name:'Giant Beetle Shell', rarity:'uncommon', note:'Heavy armor material' }]
      }
    ]
  };
  entries.push(carrionBeetle);

  // Mirage Sprite (Trickster)
  const mirageSprite = {
    id: 'mirage_sprite',
    name: 'Mirage Sprite',
    sub: 'Illusionist · Trickster',
    rank: 'D',
    ibg: '#f0e0d0',
    icon: '✨',
    size: '~0.4 m, shimmering, almost invisible',
    biomes: ['Desert','Dunes'],
    intel: 78,
    tags: { behavior: ['Neutral','Trickster'], combat: ['Control'], intelligence: ['Aware'], interaction: ['Misleading'] },
    desc: 'Mirage sprites are mischievous fey that create illusory oases, fake water, or phantom travelers to lead people off course. They are not evil – they find confusion amusing. They flee if attacked.',
    stats: { HP: 43, Damage: 12, Defense: 23, Aggression: 0, Speed: 312, Mana: 187, 'Illusory Oasis': 0, 'Phantom Traveler': 0, 'Mirage Walk': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Illusory Oasis':'#00bcd4', 'Phantom Traveler':'#800080', 'Mirage Walk':'#ffa000', Threat:'#607d8b' },
    weak: ['True sight','Dispel magic','Cold iron'],
    res: ['Illusions','Charm'],
    ab: ['Illusory oasis (creates false water source, may lead to dehydration)', 'Phantom traveler (illusory guide leads wrong direction)', 'Mirage walk (becomes invisible, moves quickly)'],
    loot: [{ name:'Mirage Dust', rarity:'uncommon', note:'Used in illusion magic' }]
  };
  entries.push(mirageSprite);

  // Oasis Keeper (Neutral Spirit)
  const oasisKeeper = {
    id: 'oasis_keeper',
    name: 'Oasis Keeper',
    sub: 'Spirit Guardian · Neutral',
    rank: 'C',
    ibg: '#a0d0e0',
    icon: '🏝️',
    size: '~2 m tall, translucent, water-like form',
    biomes: ['Oasis'],
    intel: 187,
    tags: { behavior: ['Neutral','Protective'], combat: ['Support'], intelligence: ['Strategic'], interaction: ['Guardian','Symbiotic'] },
    desc: 'Oasis keepers are water spirits that protect desert oases. They are not hostile unless the oasis is threatened. They can heal travelers, offer water, and may guide lost wanderers. Killing a keeper curses the oasis, causing it to dry up.',
    stats: { HP: 387, Damage: 143, Defense: 243, Aggression: 0, Speed: 243, Mana: 587, 'Healing Water': 0, 'Purify': 0, 'Oasis Blessing': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Healing Water':'#8bc34a', 'Purify':'#00bcd4', 'Oasis Blessing':'#ffa000', Threat:'#607d8b' },
    weak: ['Pollution','Fire','Salt'],
    res: ['Water','Poison'],
    ab: ['Healing water (restores 100 HP, cures disease)', 'Purify (cleanses water sources)', 'Oasis blessing (grants water breathing and heat resistance for 1 hour)'],
    loot: [{ name:'Water Drop (essence)', rarity:'rare', note:'Heals and purifies – cannot be obtained if killed' }]
  };
  entries.push(oasisKeeper);

  // ========================
  // ADDITIONAL DESERT ENEMIES
  // ========================

  // Giant Desert Centipede
  const giantCentipede = {
    id: 'giant_centipede',
    name: 'Giant Desert Centipede',
    sub: 'Burrowing Menace · Venomous',
    rank: 'C',
    ibg: '#b0a070',
    icon: '🐛',
    size: '~3 m long, segmented, many legs',
    biomes: ['Desert','Cave','Ruins'],
    intel: 4,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Ambush','Swarm'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Giant desert centipedes are fast, venomous arthropods that burrow and ambush prey. Their bite causes paralysis and their multiple legs make them difficult to flank.',
    stats: { HP: 387, Damage: 343, Defense: 243, Aggression: 487, Speed: 387, Mana: 12, 'Venomous Bite': 587, 'Rapid Legs': 0, 'Burrow': 0, Threat: 587 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Venomous Bite':'#800080', 'Rapid Legs':'#ffa000', 'Burrow':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire','Cold','Severing segments'],
    res: ['Poison','Heat'],
    ab: ['Venomous bite (paralyzes 5 seconds, poison DoT)', 'Rapid legs (can attack multiple adjacent enemies)', 'Burrow (burrows underground, emerges elsewhere)'],
    loot: [{ name:'Centipede Segment', rarity:'common', note:'Tough chitin' }]
  };
  entries.push(giantCentipede);

  // Sand Scorpion
  const sandScorpion = {
    id: 'sand_scorpion',
    name: 'Sand Scorpion',
    sub: 'Desert Ambusher · Venomous',
    rank: 'C',
    ibg: '#d4b87a',
    icon: '🦂',
    size: '~1 m long, sandy exoskeleton, curved stinger',
    biomes: ['Desert','Dunes','Rocky Desert'],
    intel: 8,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Ambush','Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Sand scorpions are common desert predators, burying themselves just below the surface to ambush prey. Their sting delivers a paralytic venom, and their claws can crush small bones. They are active at night, avoiding the scorching sun.',
    stats: { HP: 187, Damage: 243, Defense: 187, Aggression: 312, Speed: 243, Mana: 23, 'Venom Sting': 387, 'Crushing Claws': 287, Threat: 387 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Venom Sting':'#800080', 'Crushing Claws':'#ffa000', Threat:'#d32f2f' },
    weak: ['Cold','Fire','Flipping over'],
    res: ['Poison','Heat'],
    ab: ['Venom sting (paralyzes for 5 seconds)', 'Crushing claws (grapple, deals damage over time)', 'Sand burial (becomes invisible while buried)'],
    loot: [{ name:'Scorpion Stinger', rarity:'common', note:'Used in paralytic poisons' }, { name:'Scorpion Chitin', rarity:'common', note:'Light armor material' }],
    variants: [
      {
        key: 'king',
        label: '👑 King Scorpion',
        rank: 'B',
        ibg: '#d4b87a',
        icon: '🦂',
        sub: 'King Scorpion · Desert Monarch',
        size: '~2 m long, thicker shell, larger claws',
        intel: 16,
        desc: 'A massive, ancient sand scorpion with a thicker shell and more potent venom. It can summon lesser scorpions to aid it.',
        stats: { HP: 687, Damage: 587, Defense: 587, Aggression: 687, Speed: 243, Mana: 67, 'King\'s Sting': 842, 'Summon Swarm': 0, 'Crushing Grip': 587, Threat: 842 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'King\'s Sting':'#800080', 'Summon Swarm':'#ffa000', 'Crushing Grip':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Cold','Fire'],
        res: ['Poison','Heat'],
        ab: ['King\'s sting (paralyzes 10 seconds, higher damage)', 'Summon swarm (calls 2-4 normal scorpions)', 'Crushing grip (grapple, high damage)'],
        loot: [{ name:'King Scorpion Stinger', rarity:'uncommon', note:'Potent paralytic' }, { name:'King Chitin', rarity:'rare', note:'Very durable armor' }]
      },
      {
        key: 'sun',
        label: '☀️ Sun Scorpion',
        rank: 'B',
        ibg: '#e0a878',
        icon: '🦂',
        sub: 'Sun Scorpion · Heat-Infused',
        size: '~1.2 m, reddish shell, glowing stinger',
        intel: 12,
        desc: 'A scorpion adapted to extreme heat. Its stinger burns with fire, and its body radiates heat, damaging nearby enemies. It is resistant to fire and thrives in volcanic sands.',
        stats: { HP: 587, Damage: 487, Defense: 487, Aggression: 587, Speed: 287, Mana: 187, 'Heat Aura': 0, 'Fire Sting': 687, 'Flame Burst': 487, Threat: 742 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Heat Aura':'#ff5722', 'Fire Sting':'#d32f2f', 'Flame Burst':'#ffa000', Threat:'#d32f2f' },
        weak: ['Cold','Water'],
        res: ['Fire','Heat','Poison'],
        ab: ['Heat aura (10 dmg/sec to enemies within 3 m)', 'Fire sting (deals bonus fire damage, may ignite)', 'Flame burst (AoE fire damage, 15 m radius)'],
        loot: [{ name:'Sun Stinger', rarity:'uncommon', note:'Glows with heat – used in fire weapons' }]
      }
    ]
  };
  entries.push(sandScorpion);

  // Dust Devil
  const dustDevil = {
    id: 'dust_devil',
    name: 'Dust Devil',
    sub: 'Elemental Swarm · Blinding',
    rank: 'C',
    ibg: '#d0c8a0',
    icon: '🌪️',
    size: '~2 m tall, miniature whirlwind, sandy',
    biomes: ['Desert','Dunes','Badlands'],
    intel: 2,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Control'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Dust devils are minor elementals formed from hot desert winds. They spin rapidly, flinging sand and blinding enemies. They often travel in groups, creating a localized sandstorm.',
    stats: { HP: 143, Damage: 187, Defense: 87, Aggression: 287, Speed: 387, Mana: 87, 'Sand Blast': 287, 'Blinding Dust': 0, 'Whirlwind': 187, Threat: 312 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sand Blast':'#ffa000', 'Blinding Dust':'#d32f2f', 'Whirlwind':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Water','Ice'],
    res: ['Fire','Physical (50%)'],
    ab: ['Sand blast (ranged, low damage, knocks back)', 'Blinding dust (target blinded for 5 seconds)', 'Whirlwind (surrounds enemy, deals damage over time)'],
    loot: [{ name:'Dust Core', rarity:'common', note:'Used in wind magic' }],
    variants: [
      {
        key: 'sandstorm',
        label: '🌪️ Sandstorm',
        rank: 'B',
        ibg: '#c0b880',
        icon: '🌪️',
        sub: 'Greater Dust Devil · Sandstorm Bringer',
        size: '~5 m tall, massive whirlwind, debris',
        intel: 6,
        desc: 'A massive dust devil that creates a sustained sandstorm around itself. Visibility drops dramatically, and all creatures within take constant sand damage.',
        stats: { HP: 587, Damage: 387, Defense: 187, Aggression: 587, Speed: 487, Mana: 287, 'Sandstorm Aura': 0, 'Debris Blast': 587, 'Tornado Pull': 387, Threat: 742 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sandstorm Aura':'#ffa000', 'Debris Blast':'#d32f2f', 'Tornado Pull':'#00bcd4', Threat:'#d32f2f' },
        weak: ['Water','Ice'],
        res: ['Fire','Physical'],
        ab: ['Sandstorm aura (15 dmg/sec to all within 20 m, reduces visibility)', 'Debris blast (ranged, high damage, may stun)', 'Tornado pull (pulls enemies toward center)'],
        loot: [{ name:'Sandstorm Core', rarity:'uncommon', note:'Powers wind enchantments' }]
      }
    ]
  };
  entries.push(dustDevil);

  // ========================
  // MID-TIER DESERT CREATURES (B Rank)
  // ========================

  // Mummy
  const mummy = {
    id: 'mummy',
    name: 'Mummy',
    sub: 'Cursed Undead · Rotting Guardian',
    rank: 'B',
    ibg: '#c0a878',
    icon: '⚰️',
    size: '~1.8 m, wrapped in linen, desiccated',
    biomes: ['Desert Ruins','Tomb','Cursed Desert'],
    intel: 23,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Control','Burst'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Mummies are preserved corpses animated by curses. Their touch inflicts a rotting disease that resists healing. They can summon sandstorms and are vulnerable to fire.',
    stats: { HP: 743, Damage: 643, Defense: 543, Aggression: 843, Speed: 187, Mana: 343, 'Rotting Touch': 987, 'Sandstorm': 0, 'Desiccating Gaze': 643, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Rotting Touch':'#800080', 'Sandstorm':'#ffa000', 'Desiccating Gaze':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Fire (vulnerable)','Holy'],
    res: ['Physical (non-fire)','Poison','Fear'],
    ab: ['Rotting touch (inflicts disease: -50% healing, 20 dmg/sec)', 'Sandstorm (summons blinding sandstorm, reduces visibility)', 'Desiccating gaze (target suffers dehydration, exhaustion)'],
    loot: [{ name:'Mummy Linen', rarity:'uncommon', note:'Cursed cloth' }, { name:'Canopic Jar', rarity:'rare', note:'Contains organs – used in rituals' }],
    variants: [
      {
        key: 'pharaoh',
        label: '👑 Pharaoh Mummy',
        rank: 'A',
        ibg: '#c0a878',
        icon: '👑',
        sub: 'Pharaoh Mummy · Cursed King',
        size: '~2 m, wrapped in gold-threaded linen',
        intel: 67,
        desc: 'A mummified pharaoh with powerful curses. It can summon undead and has a fear aura.',
        stats: { HP: 1487, Damage: 1287, Defense: 987, Aggression: 1487, Speed: 187, Mana: 843, 'Royal Curse': 1873, 'Summon Undead': 0, 'Fear Aura': 0, Threat: 1987 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Royal Curse':'#800080', 'Summon Undead':'#d32f2f', 'Fear Aura':'#ffa000', Threat:'#d32f2f' },
        weak: ['Fire','Holy','Breaking sarcophagus'],
        res: ['Physical','Darkness'],
        ab: ['Royal curse (all enemies save or be cursed: -50% stats)', 'Summon undead (calls 2-4 mummies or skeleton warriors)', 'Fear aura (constant fear, reduces accuracy)'],
        loot: [{ name:'Pharaoh Crown', rarity:'unique', note:'Still cursed – can control undead' }]
      }
    ]
  };
  entries.push(mummy);

  // Cactus Golem
  const cactusGolem = {
    id: 'cactus_golem',
    name: 'Cactus Golem',
    sub: 'Construct · Spiked Guardian',
    rank: 'B',
    ibg: '#7ea05e',
    icon: '🌵',
    size: '~2.5 m tall, covered in spines',
    biomes: ['Desert','Oasis','Cactus Grove'],
    intel: 9,
    tags: { behavior: ['Territorial','Passive'], combat: ['Defensive','Control'], intelligence: ['Instinctive'], interaction: ['Guardian'] },
    desc: 'Cactus golems are animated plant constructs, often guardians of hidden groves or treasure. Their spines reflect melee attacks, and they can shoot needle volleys.',
    stats: { HP: 987, Damage: 743, Defense: 687, Aggression: 487, Speed: 143, Mana: 187, 'Needle Volley': 987, 'Spike Shield': 0, 'Regrowth': 0, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Needle Volley':'#ffa000', 'Spike Shield':'#d32f2f', 'Regrowth':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire','Cold','Bludgeoning (spines break)'],
    res: ['Piercing','Slashing','Poison'],
    ab: ['Needle volley (ranged, 5 needles, each 50 damage)', 'Spike shield (retaliates when hit in melee, 20 dmg returned)', 'Regrowth (heals 50 HP/sec in desert sunlight)'],
    loot: [{ name:'Cactus Needle', rarity:'uncommon', note:'Used in darts' }, { name:'Golem Core', rarity:'rare', note:'Animated plant core' }]
  };
  entries.push(cactusGolem);
  
  // Sand Wyrm (Lesser) - CORRECTED
  const sandWyrm = {
    id: 'sand_wyrm',
    name: 'Sand Wyrm',
    sub: 'Burrowing Ambusher · Lesser Worm',
    rank: 'B',
    ibg: '#c0a878',
    icon: '🐉',
    size: '~5 m long, huge mouth, no eyes, burrows',
    biomes: ['Desert','Dunes','Sand Sea'],
    intel: 6,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Ambush','Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Sand wyrms are smaller relatives of the death worm. They burrow beneath the sand, detecting vibrations. They burst up to swallow small prey, then retreat. They are blind but sensitive to movement.',
    stats: { HP: 687, Damage: 743, Defense: 487, Aggression: 843, 'Burrow Speed': 343, Mana: 43, 'Burrow Strike': 987, 'Swallow': 743, 'Sand Spray': 487, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Burrow Strike':'#ffa000', 'Swallow':'#d32f2f', 'Sand Spray':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Heavy vibrations (disorient)','Cold','Fire (on surface)'],
    res: ['Physical (partial)','Heat','Blindness'],
    ab: ['Burrow strike (emerges from sand, deals high damage, knocks prone)', 'Swallow (swallows a Small or smaller creature, takes damage each round)', 'Sand spray (blinds enemies in cone)'],
    loot: [{ name:'Wyrm Tooth', rarity:'uncommon', note:'Used in spears' }, { name:'Wyrm Hide', rarity:'uncommon', note:'Tough leather' }]
  };
  entries.push(sandWyrm);

  // ========================
  // ELITE DESERT CREATURES (A Rank)
  // ========================
  
  // Death Worm (Purple Worm) - CORRECTED
  const deathWorm = {
    id: 'death_worm',
    name: 'Death Worm',
    sub: 'Gargantuan Desert Worm · Cataclysm Predator',
    rank: 'A',
    ibg: '#8e6e4e',
    icon: '🐛',
    size: '~15 m long, ringed body, massive toothy maw',
    biomes: ['Deep Desert','Sand Sea','Desert Trench'],
    intel: 2,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The death worm is a gargantuan desert worm that swallows entire caravans. It detects vibrations from miles away. Its maw is lined with rows of teeth that grind rock and bone. It can burrow at incredible speed and may erupt beneath settlements.',
    stats: { HP: 2873, Damage: 2487, Defense: 1873, Aggression: 3873, 'Burrow Speed': 187, Mana: 187, 'Devour': 3487, 'Tremor': 2873, 'Acid Spit': 2487, Threat: 3873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Devour':'#d32f2f', 'Tremor':'#ffa000', 'Acid Spit':'#800080', Threat:'#d32f2f' },
    weak: ['Cold','Heavy ground vibrations (confuse direction)','Massive blunt force'],
    res: ['Physical (partial)','Heat','Poison','Acid'],
    ab: ['Devour (swallows a Large or smaller target, takes 100 dmg/sec inside)', 'Tremor (creates seismic shockwave, knocks down all within 30 m)', 'Acid spit (ranged, deals acid damage, destroys armor)'],
    warn: 'Death worms are drawn to vibrations. Heavy footsteps, combat, and especially explosions will attract them. Travel in silence.',
    loot: [{ name:'Death Worm Tooth', rarity:'rare', note:'Used in legendary weapons' }, { name:'Worm Hide', rarity:'rare', note:'Extremely tough, acid-resistant' }],
    variants: [
      {
        key: 'elder',
        label: '⌛ Elder Death Worm',
        rank: 'S',
        ibg: '#7e5e3e',
        icon: '🐛',
        sub: 'Elder Death Worm · World Serpent',
        size: '~30 m long, thicker hide, scars',
        intel: 8,
        desc: 'An ancient death worm that has survived for centuries. Its hide is nearly impenetrable, and its stomach acid can dissolve magical items. It can cause localized earthquakes.',
        stats: { HP: 5873, Damage: 4873, Defense: 3873, Aggression: 6873, 'Burrow Speed': 143, Mana: 387, 'Cataclysm Devour': 6873, 'Earthquake': 5873, 'Acid Wave': 4873, Threat: 7873 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Cataclysm Devour':'#d32f2f', 'Earthquake':'#ffa000', 'Acid Wave':'#800080', Threat:'#d32f2f' },
        weak: ['Rare cold-based siege magic'],
        res: ['All physical','Heat','Acid','Poison'],
        ab: ['Cataclysm devour (swallows Huge or smaller, 200 dmg/sec)', 'Earthquake (creates fissure, 100 dmg, structures collapse)', 'Acid wave (cone, destroys equipment, DoT)'],
        loot: [{ name:'Elder Worm Core', rarity:'unique', note:'Powers a region or catastrophe' }]
      }
    ]
  };
  entries.push(deathWorm);
  
  // Sand Kraken (Tentacle Worm) - CORRECTED
  const sandKraken = {
    id: 'sand_kraken',
    name: 'Sand Kraken',
    sub: 'Multi-Tentacle Horror · Dune Lurker',
    rank: 'A',
    ibg: '#a0805e',
    icon: '🐙',
    size: '~20 m tentacle span, central bulbous body',
    biomes: ['Deep Desert','Sand Sea'],
    intel: 23,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Control','Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The sand kraken is a worm-like horror with multiple tentacles that emerge from the sand. It grabs prey and drags it under to be consumed. Its body remains hidden beneath the dunes, making it hard to kill.',
    stats: { HP: 3873, Damage: 2873, Defense: 2873, Aggression: 4873, 'Burrow Speed': 187, Mana: 387, 'Tentacle Grab': 4873, 'Sand Drag': 0, 'Undertow': 2873, Threat: 5873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Tentacle Grab':'#ffa000', 'Sand Drag':'#00bcd4', 'Undertow':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Severing tentacles (stalks retreat)','Earth magic','Massive explosions'],
    res: ['Physical (body hidden)','Heat','Poison'],
    ab: ['Tentacle grab (grapples, pulls toward center)', 'Sand drag (drags grappled target under sand, suffocation)', 'Undertow (creates sinking sand, difficult terrain)'],
    loot: [{ name:'Sand Kraken Tentacle', rarity:'rare', note:'Still twitching – used in whips' }, { name:'Kraken Heart', rarity:'rare', note:'Beats with sand magic' }]
  };
  entries.push(sandKraken);

  // ========================
  // LEGENDARY DESERT CREATURES (S Rank)
  // ========================

  // Sand Serpent (Great Wyrm)
  const sandSerpent = {
    id: 'sand_serpent',
    name: 'Sand Serpent',
    sub: 'Great Wyrm · Sandstorm Sovereign',
    rank: 'S',
    ibg: '#c0b080',
    icon: '🐉',
    size: '~25 m long, golden scales, hooded cobra-like head',
    biomes: ['Desert','Sand Sea','Dune Kingdom'],
    intel: 134,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'The sand serpent is a legendary draconic serpent that rules the deepest deserts. It controls sandstorms, creates dunes at will, and can bury cities. Its scales are nearly immune to heat, and its gaze can petrify.',
    stats: { HP: 9874, Damage: 8743, Defense: 8473, Aggression: 12873, Speed: 587, Mana: 4873, 'Sandstorm Call': 14873, 'Petrifying Gaze': 9874, 'Dune Burial': 12873, Threat: 14873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sandstorm Call':'#ffa000', 'Petrifying Gaze':'#800080', 'Dune Burial':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Cold','Water','Anti-dragon weapons'],
    res: ['Fire','Heat','Physical','Sand'],
    ab: ['Sandstorm call (summons massive sandstorm, 50 dmg/sec, visibility 5 m)', 'Petrifying gaze (target turns to stone unless save)', 'Dune burial (creates a wave of sand, buries enemies, 200 dmg)'],
    warn: 'The sand serpent creates its own arena – a sandstorm that makes ranged attacks nearly impossible. Fight only with proper wind protection.',
    loot: [{ name:'Sand Serpent Scale', rarity:'rare', note:'Grants sandstorm immunity' }, { name:'Petrified Eye', rarity:'unique', note:'Can petrify once per day' }]
  };
  entries.push(sandSerpent);

  // Desert Tyrant (Tyrannosaurus-like)
  const desertTyrant = {
    id: 'desert_tyrant',
    name: 'Desert Tyrant',
    sub: 'Apex Predator · Sun King',
    rank: 'S',
    ibg: '#d0a060',
    icon: '🦖',
    size: '~6 m tall, 12 m long, thick dark scales, heat shimmer',
    biomes: ['Desert','Badlands','Canyon'],
    intel: 67,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'The desert tyrant is a massive theropod dinosaur that dominates desert food chains. It has thick, heat-resistant scales and can breathe a cone of superheated air. It is aggressive and will chase prey for miles.',
    stats: { HP: 11873, Damage: 10873, Defense: 9874, Aggression: 13873, Speed: 487, Mana: 1873, 'Superheated Breath': 14873, 'Tyrant Roar': 11873, 'Charging Bite': 12873, Threat: 14873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Superheated Breath':'#ff5722', 'Tyrant Roar':'#800080', 'Charging Bite':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Cold','Poison','Ranged kiting'],
    res: ['Fire','Heat','Physical'],
    ab: ['Superheated breath (cone, fire damage, ignites targets)', 'Tyrant roar (fear, stuns enemies for 3 seconds)', 'Charging bite (charges, high damage, knockdown)'],
    loot: [{ name:'Tyrant Fang', rarity:'rare', note:'Used in legendary weapons' }, { name:'Tyrant Hide', rarity:'rare', note:'Fire-resistant armor' }]
  };
  entries.push(desertTyrant);

  // ========================
  // Register Category
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('desert', entries, 'Biomes', '🏜️');
    console.log('Desert data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded. Make sure bestiary-core.html is loaded first.');
  }
})();