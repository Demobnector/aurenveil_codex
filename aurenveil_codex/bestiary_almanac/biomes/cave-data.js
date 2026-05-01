// biomes/cave-data.js
(function() {
  const entries = [];

  // ========================
  // PEACEFUL / COMMON CAVE CREATURES (F–E)
  // ========================

  // Cave Cricket
  const caveCricket = {
    id: 'cave_cricket',
    name: 'Cave Cricket',
    sub: 'Insect · Scavenger',
    rank: 'F',
    ibg: '#a09880',
    icon: '🦗',
    size: '~0.05 m, pale, long antennae',
    biomes: ['Cave', 'Underdark', 'Cavern'],
    intel: 4,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Cave crickets are pale, blind insects that feed on fungus and bat guano. They are harmless and will hop away from light and movement.',
    stats: { HP: 4, Damage: 1, Defense: 2, Aggression: 0, Speed: 98, Mana: 0, 'Hop': 0, 'Chirp': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Hop':'#00bcd4', 'Chirp':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: ['Darkness'],
    ab: ['Hop (jumps away from danger)', 'Chirp (attracts cave crickets, no combat effect)'],
    loot: [{ name:'Cricket Leg', rarity:'common', note:'Used in fishing bait' }]
  };
  entries.push(caveCricket);

  // Cave Bat (Harmless)
  const caveBat = {
    id: 'cave_bat',
    name: 'Cave Bat',
    sub: 'Echolocator · Swarm',
    rank: 'F',
    ibg: '#8e7e6e',
    icon: '🦇',
    size: '~0.15 m wingspan, brown, squeaky',
    biomes: ['Cave', 'Cavern', 'Tunnel'],
    intel: 23,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Cave bats hang from ceilings in massive colonies. They are harmless, though their guano is slippery and their squeaking can be annoying. They flee from fire or loud noise.',
    stats: { HP: 6, Damage: 2, Defense: 4, Aggression: 0, Speed: 243, Mana: 0, 'Squeak': 0, 'Swarm Flight': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Squeak':'#8bc34a', 'Swarm Flight':'#00bcd4', Threat:'#607d8b' },
    weak: ['Fire', 'Loud noise', 'Bright light'],
    res: [],
    ab: ['Squeak (echolocation, no combat effect)', 'Swarm flight (distracting cloud of bats when fleeing)'],
    loot: [{ name:'Bat Guano', rarity:'common', note:'Used in alchemical reagents (saltpeter)' }]
  };
  entries.push(caveBat);

  // Glowing Fungus (Mobile)
  const glowingFungus = {
    id: 'glowing_fungus',
    name: 'Glowing Fungus',
    sub: 'Bioluminescent · Pacifist',
    rank: 'E',
    ibg: '#8ed87e',
    icon: '🍄',
    size: '~0.3 m tall, blue-green glow',
    biomes: ['Cave', 'Cavern', 'Underground Lake'],
    intel: 4,
    tags: { behavior: ['Passive', 'Stationary'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Glowing fungi illuminate caves with a soft bioluminescent glow. Some species have learned to slowly retract into the ground when threatened, but they cannot truly flee.',
    stats: { HP: 23, Damage: 0, Defense: 12, Aggression: 0, Speed: 4, Mana: 34, 'Glow': 0, 'Spore Puff': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Glow':'#ffa000', 'Spore Puff':'#8bc34a', Threat:'#607d8b' },
    weak: ['Fire', 'Trampling', 'Mycology expertise'],
    res: ['Darkness', 'Poison (minor)'],
    ab: ['Glow (provides 15 m radius light, no mana cost)', 'Spore puff (releases harmless glowing spores, marks enemy position)'],
    loot: [{ name:'Glow Cap', rarity:'common', note:'Eaten raw to gain darkvision for 1 hour' }]
  };
  entries.push(glowingFungus);

  // Rock Lizard
  const rockLizard = {
    id: 'rock_lizard',
    name: 'Rock Lizard',
    sub: 'Camouflaged · Skitterer',
    rank: 'E',
    ibg: '#a0a090',
    icon: '🦎',
    size: '~0.4 m long, grey scales, blends into stone',
    biomes: ['Cave', 'Cavern', 'Rocky Tunnel'],
    intel: 23,
    tags: { behavior: ['Neutral', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Rock lizards are small, skittish reptiles that blend into cave walls. They eat insects and are completely harmless. They will flee at any sign of danger.',
    stats: { HP: 18, Damage: 4, Defense: 23, Aggression: 0, Speed: 187, Mana: 0, 'Camouflage': 0, 'Skitter': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Camouflage':'#00bcd4', 'Skitter':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Camouflage (blends into stone, +75% stealth)', 'Skitter (runs up walls to escape)'],
    loot: [{ name:'Lizard Tail', rarity:'common', note:'Regrows – used in regeneration potions' }]
  };
  entries.push(rockLizard);

  // ========================
  // NEUTRAL / DANGEROUS CAVE CREATURES (D–C)
  // ========================

  // Cave Crawler (Insectoid) - Fixed emoji
  const caveCrawler = {
    id: 'cave_crawler',
    name: 'Cave Crawler',
    sub: 'Insectoid · Chitinous',
    rank: 'D',
    ibg: '#9e8e6e',
    icon: '🐛',
    size: '~1 m long, pale exoskeleton, many legs',
    biomes: ['Cave', 'Underdark', 'Deep Cavern'],
    intel: 12,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Cave crawlers are predatory arthropods that lurk in dark corners. They are blind but detect vibrations. Their mandibles can crush bone.',
    stats: { HP: 187, Damage: 243, Defense: 187, Aggression: 387, Speed: 243, Mana: 12, 'Mandible Crush': 387, 'Leg Spike': 243, 'Vibration Sense': 0, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Mandible Crush':'#d32f2f', 'Leg Spike':'#ffa000', 'Vibration Sense':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Bright light', 'Loud noise (disorients)', 'Fire'],
    res: ['Poison (partial)'],
    ab: ['Mandible crush (high damage, may break armor)', 'Leg spike (piercing, bleed)', 'Vibration sense (cannot be surprised, detects hidden enemies)'],
    loot: [{ name:'Crawler Chitin', rarity:'common', note:'Used in insect-themed armor' }]
  };
  entries.push(caveCrawler);

  // Giant Cave Spider (Web Weaver)
  const giantCaveSpider = {
    id: 'giant_cave_spider',
    name: 'Giant Cave Spider',
    sub: 'Web Weaver · Ambusher',
    rank: 'C',
    ibg: '#8e7e5e',
    icon: '🕷️',
    size: '~1.2 m body, 2.5 m leg span, pale',
    biomes: ['Cave', 'Cavern', 'Web Lair'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Giant cave spiders weave massive webs across tunnels. They are pale and near-invisible against cave walls. Their bite causes paralysis.',
    stats: { HP: 387, Damage: 387, Defense: 287, Aggression: 543, Speed: 343, Mana: 23, 'Web Shot': 543, 'Paralytic Bite': 487, 'Wall Cling': 0, Threat: 612 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Web Shot':'#00bcd4', 'Paralytic Bite':'#800080', 'Wall Cling':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire', 'Loud noise', 'Slashing (web cutting)'],
    res: ['Poison', 'Fear'],
    ab: ['Web shot (ranged, immobilizes target)', 'Paralytic bite (paralyzes for 10 seconds)', 'Wall cling (can move on any surface, attacks from ceiling)'],
    loot: [{ name:'Cave Spider Silk', rarity:'uncommon', note:'Stronger than regular spider silk' }, { name:'Paralytic Gland', rarity:'uncommon', note:'Used in paralysis poisons' }]
  };
  entries.push(giantCaveSpider);

  // Troglodyte (Cave Dweller Humanoid)
  const troglodyte = {
    id: 'troglodyte',
    name: 'Troglodyte',
    sub: 'Reptilian Humanoid · Stench',
    rank: 'C',
    ibg: '#b0a07e',
    icon: '🦎',
    size: '~1.5 m tall, hunched, scales, claws',
    biomes: ['Cave', 'Underdark', 'Troglodyte Warren'],
    intel: 56,
    tags: { behavior: ['Aggressive', 'Tribal'], combat: ['Swarm', 'Control'], intelligence: ['Aware'], interaction: ['Hostile'] },
    desc: 'Troglodytes are primitive reptilian humanoids that live in caves. They emit a foul stench that sickens nearby creatures. They fight with stone clubs and spears.',
    stats: { HP: 243, Damage: 243, Defense: 187, Aggression: 543, Speed: 243, Mana: 43, 'Stench': 543, 'Stone Club': 343, 'Javelin': 243, Threat: 543 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Stench':'#800080', 'Stone Club':'#ffa000', 'Javelin':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Bright light', 'Clean air spells'],
    res: ['Poison'],
    ab: ['Stench (aura, 10 dmg/sec, nausea, save to resist)', 'Stone club (melee, high damage)', 'Javelin (ranged, piercing)'],
    loot: [{ name:'Troglodyte Scale', rarity:'common', note:'Used in crude armor' }],
    variants: [
      {
        key: 'chieftain',
        label: '👑 Troglodyte Chieftain',
        rank: 'B',
        ibg: '#9e8e6e',
        icon: '🦎',
        sub: 'Troglodyte Chieftain · War Leader',
        size: '~1.8 m tall, scars, bone crown',
        desc: 'Larger and stronger, the chieftain leads the tribe. Its stench is more potent, and its club deals devastating blows.',
        stats: { HP: 587, Damage: 543, Defense: 387, Aggression: 887, Speed: 287, Mana: 87, 'Potent Stench': 887, 'Chieftain\'s Club': 687, 'War Cry': 543, Threat: 887 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Potent Stench':'#800080', 'Chieftain\'s Club':'#d32f2f', 'War Cry':'#ffa000', Threat:'#d32f2f' },
        weak: ['Bright light'],
        res: ['Poison'],
        ab: ['Potent stench (double damage, nausea)', 'Chieftain\'s club (ignores 20% armor)', 'War cry (all troglodytes gain +30% damage for 30 sec)'],
        loot: [{ name:'Chieftain Crown', rarity:'rare', note:'Bone and stone, tribal status symbol' }]
      }
    ]
  };
  entries.push(troglodyte);

  // ========================
  // ELITE CAVE PREDATORS (B–A)
  // ========================

  // Umber Hulk (Tunneler) - Fixed emoji
  const umberHulk = {
    id: 'umber_hulk',
    name: 'Umber Hulk',
    sub: 'Tunneling Horror · Confusing Gaze',
    rank: 'B',
    ibg: '#8e6e4e',
    icon: '🐞',
    size: '~2.5 m tall, beetle-like, four arms',
    biomes: ['Cave', 'Underdark', 'Deep Tunnel'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Umber hulks are massive, beetle-like horrors that burrow through rock. Their multi-faceted eyes create a confusing pattern that disorients foes. They are feared by even deep dwarves.',
    stats: { HP: 987, Damage: 887, Defense: 743, Aggression: 1187, Speed: 287, Mana: 143, 'Confusing Gaze': 1187, 'Claw Swipe': 987, 'Burrow Strike': 887, Threat: 1287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Confusing Gaze':'#800080', 'Claw Swipe':'#d32f2f', 'Burrow Strike':'#ffa000', Threat:'#d32f2f' },
    weak: ['Bright light (reduces confusion)', 'Sonic attacks', 'Slowed'],
    res: ['Physical (partial)'],
    ab: ['Confusing gaze (cone, confuses targets, may attack allies)', 'Claw swipe (area, hits 3 targets)', 'Burrow strike (burrows underground, emerges to ambush, +50% damage)'],
    loot: [{ name:'Umber Hulk Carapace', rarity:'rare', note:'Used in heavy armor' }, { name:'Umber Eye Lens', rarity:'rare', note:'Used in confusion resist gear' }]
  };
  entries.push(umberHulk);

  // Cave Dragon (Lesser Dragon, Cave variant)
  const caveDragon = {
    id: 'cave_dragon',
    name: 'Cave Dragon',
    sub: 'Deep Dragon · Acid Breath',
    rank: 'A',
    ibg: '#8e7e6e',
    icon: '🐉',
    size: '~6 m long, pale scales, blind, acid dripping',
    biomes: ['Cave', 'Deep Cavern', 'Dragon Lair'],
    intel: 187,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Cave dragons are blind but have incredible hearing and echolocation. They breathe cones of acid that melt stone and flesh. Unlike their surface cousins, cave dragons are perpetually hungry.',
    stats: { HP: 2874, Damage: 2487, Defense: 2287, Aggression: 3187, Speed: 387, Mana: 987, 'Acid Breath': 3487, 'Tail Whip': 2874, 'Echolocation': 0, Threat: 3687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Acid Breath':'#8bc34a', 'Tail Whip':'#d32f2f', 'Echolocation':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Loud noise (disorients)', 'Cold', 'Silence spells'],
    res: ['Acid', 'Darkness'],
    ab: ['Acid breath (cone, 100 dmg, melts armor, 30 dmg/sec for 10 sec)', 'Tail whip (AoE, knocks prone, 150 dmg)', 'Echolocation (cannot be surprised, detects invisible enemies)'],
    loot: [{ name:'Cave Dragon Scale', rarity:'rare', note:'Acid resistant' }, { name:'Cave Dragon Acid Gland', rarity:'rare', note:'Used in legendary acid weapons' }]
  };
  entries.push(caveDragon);

  // ========================
  // CRYSTAL CAVE SUBSECTION (B–S) - MERGED Crystal Scorpion with Golden variant
  // ========================

  // Crystal Scorpion (with Golden variant)
  const crystalScorpion = {
    id: 'crystal_scorpion',
    name: 'Crystal Scorpion',
    sub: 'Crystalline Arachnid · Gemstone Carapace',
    rank: 'B',
    ibg: '#a0d8e8',
    icon: '🦂',
    size: '~1.5 m long, translucent blue crystal carapace',
    biomes: ['Crystal Cave', 'Geode Cavern', 'Crystal Formation'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Crystal scorpions are magical arachnids that grow in geode-rich caves. Their crystalline carapace refracts light, making them shimmer. Their venom causes temporary crystallization of flesh.',
    stats: { HP: 843, Damage: 887, Defense: 743, Aggression: 987, Speed: 387, Mana: 287, 'Crystal Sting': 1087, 'Claw Snap': 887, 'Light Refraction': 0, Threat: 1187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Crystal Sting':'#800080', 'Claw Snap':'#d32f2f', 'Light Refraction':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Bludgeoning (shatters carapace)', 'Sonic attacks', 'Extreme heat'],
    res: ['Piercing (reduced)', 'Slashing (reduced)', 'Cold'],
    ab: ['Crystal sting (paralyzes, deals 50 dmg, crystallizes target for 5 sec)', 'Claw snap (grapple, deals 40 dmg per round)', 'Light refraction (blinds enemies, +50% evasion for 10 sec)'],
    loot: [{ name:'Crystal Fragment', rarity:'uncommon', note:'Glows faintly, used in light magic' }, { name:'Scorpion Venom', rarity:'uncommon', note:'Crystallizing agent' }],
    variants: [
      {
        key: 'golden',
        label: '✨ Golden Crystal Scorpion',
        rank: 'A',
        ibg: '#e0d04e',
        icon: '🦂',
        sub: 'Rare Crystalline Arachnid · Golden Carapace',
        size: '~2.5 m long, golden-orange translucent carapace, radiant',
        desc: 'Golden crystal scorpions are incredibly rare, born only in crystal caves saturated with mana. Their golden carapace is nearly unbreakable, and their sting can turn a creature entirely to crystal. Local legends speak of a "Golden Sting" that leaves statues of its victims.',
        stats: { HP: 2487, Damage: 2287, Defense: 2287, Aggression: 2874, Speed: 343, Mana: 1087, 'Golden Sting': 3187, 'Crystal Shatter': 2487, 'Mana Refraction': 0, Threat: 3287 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Golden Sting':'#800080', 'Crystal Shatter':'#d32f2f', 'Mana Refraction':'#ffa000', Threat:'#d32f2f' },
        weak: ['Bludgeoning (still, but harder)', 'Dispel magic', 'Sonic attacks'],
        res: ['Physical (50% reduction)', 'Magic (30% reduction)', 'Poison', 'Cold'],
        ab: ['Golden sting (save or turn to permanent crystal statue, 200 dmg on save)', 'Crystal shatter (AoE, 150 dmg, shrapnel, bonus vs crystalline targets)', 'Mana refraction (reflects 50% of magic damage back at caster for 20 sec)'],
        warn: 'The Golden Crystal Scorpion is a boss-level threat. Its permanent crystallization ability requires legendary-grade restoration magic to reverse. Do not engage without diamond-rank support and petrification resistance.',
        loot: [{ name:'Golden Crystal Shard', rarity:'unique', note:'Radiates pure mana – used in legendary weapons and permanent enchantments' }, { name:'Golden Stinger', rarity:'unique', note:'Still venomous – can permanently crystallize on command' }]
      }
    ]
  };
  entries.push(crystalScorpion);

  // Crystal Weaver (Spider-like, builds crystal webs)
  const crystalWeaver = {
    id: 'crystal_weaver',
    name: 'Crystal Weaver',
    sub: 'Crystalline Spider · Prismatic Webs',
    rank: 'B',
    ibg: '#b0d8e0',
    icon: '🕷️',
    size: '~1 m body, 2 m leg span, rainbow crystal',
    biomes: ['Crystal Cave', 'Geode Cavern', 'Prismatic Tunnel'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Crystal weavers spin webs from crystallized mana. Their webs shimmer and are nearly invisible, cutting like glass when touched. They feed on magic-infused insects.',
    stats: { HP: 743, Damage: 687, Defense: 643, Aggression: 887, Speed: 343, Mana: 387, 'Prismatic Web': 987, 'Crystal Bite': 843, 'Refractive Cloak': 0, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Prismatic Web':'#ffa000', 'Crystal Bite':'#d32f2f', 'Refractive Cloak':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Dispel magic (dissolves webs)', 'Bludgeoning', 'Shatter'],
    res: ['Piercing (reduced)', 'Magic (partial)'],
    ab: ['Prismatic web (traps target, 30 dmg per round, requires magic or Strength to escape)', 'Crystal bite (piercing, causes bleed, 20 dmg/sec)', 'Refractive cloak (becomes invisible while stationary, +75% stealth)'],
    loot: [{ name:'Prismatic Web Strand', rarity:'rare', note:'Still razor-sharp – used in traps' }]
  };
  entries.push(crystalWeaver);

  // ========================
  // LEGENDARY CAVE ENTITIES (S–SS)
  // ========================

  // The Crystal Monarch (Boss)
  const crystalMonarch = {
    id: 'crystal_monarch',
    name: 'The Crystal Monarch',
    sub: 'Living Geode · Avatar of Crystals',
    rank: 'S',
    ibg: '#d0e8f0',
    icon: '🦂',
    size: '~6 m long, massive crystal form, all colors',
    biomes: ['Crystal Cave (Heart)', 'Crystal Nexus'],
    intel: 287,
    tags: { behavior: ['Neutral', 'Guardian'], combat: ['Siege', 'Control'], intelligence: ['Sentient'], interaction: ['Guardian', 'Ruler'] },
    desc: 'The Crystal Monarch is a legendary entity – a massive scorpion-like being made of living crystal. It dwells in the heart of the largest crystal cave, feeding on pure mana. It does not attack unless its crystals are mined. It can command all crystal creatures.',
    stats: { HP: 8874, Damage: 6874, Defense: 8874, Aggression: 4873, Speed: 287, Mana: 6874, 'Crystal Storm': 8874, 'Prismatic Beam': 7874, 'Crystal Ward': 0, Threat: 9874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Crystal Storm':'#00bcd4', 'Prismatic Beam':'#800080', 'Crystal Ward':'#ffa000', Threat:'#d32f2f' },
    weak: ['Shatter spell', 'Dispel magic', 'Overwhelming force'],
    res: ['Physical (80% reduction)', 'Magic (50% reduction)', 'Poison', 'Cold'],
    ab: ['Crystal storm (AoE, 200 dmg, shrapnel, blinds for 10 sec)', 'Prismatic beam (line, 300 dmg, random color effect: fire, ice, lightning, or petrify)', 'Crystal ward (summons 4 crystal scorpions to fight)'],
    warn: 'The Crystal Monarch is a guardian, not a tyrant. It only attacks those who desecrate the crystal cave. Offer tribute instead of fighting.',
    loot: [{ name:'Monarch Core', rarity:'unique', note:'Pure mana crystal – can power a city for a century' }, { name:'Crystal Crown', rarity:'unique', note:'Shard from its head – legendary regalia' }]
  };
  entries.push(crystalMonarch);

  // ========================
  // NAMED CAVE: THE CRYSTAL NEXUS (Location)
  // ========================
  const crystalNexus = {
    id: 'crystal_nexus',
    name: 'The Crystal Nexus',
    sub: 'Mana Convergence · Living Cave',
    rank: 'SS (location)',
    ibg: '#d0e8f0',
    icon: '💎',
    size: 'Massive cavern, walls covered in crystals',
    biomes: ['Crystal Cave', 'Deep Cavern', 'Mana Nexus'],
    intel: 0,
    tags: { behavior: ['Territorial', 'Inscrutable'], combat: ['Environmental'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'The Crystal Nexus is a legendary location – a cavern where mana from the earth converges, causing crystals to grow as tall as trees. The air hums with power. The Nexus is home to crystal scorpions, weavers, and the Crystal Monarch itself. Miners who venture too deep often never return.',
    stats: {
      'Known Area': 'Unknown, possibly infinite',
      'Mana Density': 'Extremely high (spells are 50% stronger)',
      'Minimum Entry Rank': 'Gold (with crystal resist gear)',
      'Main Threats': 'Crystal creatures, mana overload (explosive)',
      'Risk Level': 'Extreme – mana poisoning',
      'Corruption Level': 'High (mutagenic crystals)'
    },
    bars: { 'Known Area':'#ffa000', 'Mana Density':'#9c27b0', 'Minimum Entry Rank':'#e91e63', 'Main Threats':'#d32f2f', 'Risk Level':'#d32f2f', 'Corruption Level':'#e91e63' },
    weak: ['Stabilizing the mana flow (unclear how)'],
    res: ['Physical traversal', 'Mana drain spells (ineffective)'],
    ab: [
      'Mana surge (randomly, all casters regain full mana but take 50 dmg)',
      'Crystal growth (walls shift, new passages open and close)',
      'Crystal resonance (spells echo, may double-cast or miscast)'
    ],
    warn: 'The Crystal Nexus is not a dungeon to be cleared – it is a natural wonder. Harvesting crystals is allowed, but greed angers the Crystal Monarch.',
    loot: [{ name:'Nexus Crystal', rarity:'unique', note:'Can store unlimited mana – legendary item' }]
  };
  entries.push(crystalNexus);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('cave', entries, 'Biomes', '🕳️');
    console.log('Cave data (including Crystal Cave) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();