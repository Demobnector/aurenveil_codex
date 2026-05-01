// biomes/swamp-data.js
(function() {
  const entries = [];

  // ========================
  // PEACEFUL SWAMP CREATURES (F–E)
  // ========================

  // Swamp Frog
  const swampFrog = {
    id: 'swamp_frog',
    name: 'Swamp Frog',
    sub: 'Amphibian · Harmless',
    rank: 'F',
    ibg: '#8eae7e',
    icon: '🐸',
    size: '~0.2 m, green-brown, croaking',
    biomes: ['Swamp', 'Marsh', 'Wetland'],
    intel: 4,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Swamp frogs are common amphibians that eat insects. They are harmless and will leap into the water if approached. Their croaking is a constant background sound in the swamp.',
    stats: { HP: 8, Damage: 4, Defense: 6, Aggression: 0, Speed: 87, Mana: 0, 'Leap': 0, 'Croak': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Leap':'#00bcd4', 'Croak':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Leap (jumps into water, escapes)', 'Croak (loud noise, no combat effect)'],
    loot: [{ name:'Frog Legs', rarity:'common', note:'Edible' }]
  };
  entries.push(swampFrog);

  // Firefly Swarm
  const fireflySwarm = {
    id: 'firefly_swarm',
    name: 'Firefly Swarm',
    sub: 'Bioluminescent · Ambient',
    rank: 'F',
    ibg: '#d0e8a0',
    icon: '✨',
    size: '~0.02 m each, swarm of 50-200',
    biomes: ['Swamp', 'Forest', 'Marsh'],
    intel: 2,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Fireflies fill the swamp with flickering lights at night. They are harmless and will drift away if disturbed. Their light can be harvested for glow potions.',
    stats: { HP: 28, Damage: 4, Defense: 8, Aggression: 0, Speed: 87, Mana: 23, 'Glow': 0, 'Scatter': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Glow':'#ffa000', 'Scatter':'#00bcd4', Threat:'#607d8b' },
    weak: ['Area attacks'],
    res: [],
    ab: ['Glow (provides 10 m radius light, no mana cost)', 'Scatter (swarm disperses when threatened)'],
    loot: [{ name:'Firefly Gland', rarity:'common', note:'Glows faintly – used in glow potions' }]
  };
  entries.push(fireflySwarm);

  // Water Strider
  const waterStrider = {
    id: 'water_strider',
    name: 'Water Strider',
    sub: 'Surface Skater · Insect',
    rank: 'F',
    ibg: '#8eae8e',
    icon: '🕷️',
    size: '~0.1 m, long legs, skates on water',
    biomes: ['Swamp', 'Pond', 'Marsh'],
    intel: 2,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Water striders skate on the surface of still water, eating small insects. They are harmless and will flee if disturbed.',
    stats: { HP: 6, Damage: 2, Defense: 4, Aggression: 0, Speed: 143, Mana: 0, 'Skate': 0, 'Flee': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Skate':'#00bcd4', 'Flee':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Skate (moves on water surface, cannot be tracked)', 'Flee (skates away quickly)'],
    loot: [{ name:'Strider Leg', rarity:'common', note:'Used in fishing lures' }]
  };
  entries.push(waterStrider);

  // Marsh Heron
  const marshHeron = {
    id: 'marsh_heron',
    name: 'Marsh Heron',
    sub: 'Wading Bird · Fisher',
    rank: 'E',
    ibg: '#b0c8d0',
    icon: '🦩',
    size: '~0.9 m tall, long legs, spear beak',
    biomes: ['Swamp', 'Marsh', 'Wetland'],
    intel: 34,
    tags: { behavior: ['Neutral', 'Territorial'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Marsh herons wade through shallow water, spearing fish with their sharp beaks. They are not aggressive to humans but will defend their nests.',
    stats: { HP: 43, Damage: 67, Defense: 34, Aggression: 87, Speed: 187, Mana: 12, 'Spear Beak': 143, 'Wing Flap': 67, 'Patient Stalk': 0, Threat: 143 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Spear Beak':'#d32f2f', 'Wing Flap':'#ffa000', 'Patient Stalk':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Nest destruction', 'Projectiles'],
    res: ['Water'],
    ab: ['Spear beak (high damage, ignores 20% armor)', 'Wing flap (knockback, disengage)', 'Patient stalk (can stand perfectly still, +50% stealth)'],
    loot: [{ name:'Heron Feather', rarity:'common', note:'Used in fletching' }]
  };
  entries.push(marshHeron);

  // ========================
  // NEUTRAL / DANGEROUS SWAMP CREATURES (D–C)
  // ========================

  // Giant Leech
  const giantLeech = {
    id: 'giant_leech',
    name: 'Giant Leech',
    sub: 'Bloodsucker · Parasite',
    rank: 'D',
    ibg: '#6e5e4e',
    icon: '🐛',
    size: '~0.8 m long, dark brown, segmented',
    biomes: ['Swamp', 'Marsh', 'Murky Water'],
    intel: 2,
    tags: { behavior: ['Aggressive', 'Opportunistic'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Parasitic'] },
    desc: 'Giant leeches lurk in murky water, attaching to prey and draining blood. They are slow but persistent, and can swell to twice their size after feeding.',
    stats: { HP: 87, Damage: 67, Defense: 43, Aggression: 143, Speed: 87, Mana: 0, 'Attach': 187, 'Blood Drain': 143, 'Swim': 0, Threat: 212 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Attach':'#ffa000', 'Blood Drain':'#800080', 'Swim':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Salt', 'Cutting'],
    res: ['Bludgeoning'],
    ab: ['Attach (grapples target, cannot be removed easily)', 'Blood drain (50 dmg per round, heals leech for 50 HP)', 'Swim (moves silently through water)'],
    loot: [{ name:'Leech Saliva', rarity:'uncommon', note:'Used in anticoagulant potions' }]
  };
  entries.push(giantLeech);

  // Swamp Turtle
  const swampTurtle = {
    id: 'swamp_turtle',
    name: 'Swamp Turtle',
    sub: 'Armored Reptile · Slow',
    rank: 'D',
    ibg: '#8eae7e',
    icon: '🐢',
    size: '~0.8 m shell, green-brown, mossy',
    biomes: ['Swamp', 'Marsh', 'Pond'],
    intel: 23,
    tags: { behavior: ['Passive', 'Defensive'], combat: ['Defensive'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Swamp turtles are slow, armored reptiles that eat plants and small fish. They are not aggressive but will retreat into their shells when threatened.',
    stats: { HP: 187, Damage: 43, Defense: 287, Aggression: 0, Speed: 47, Mana: 12, 'Shell Retreat': 0, 'Bite': 67, 'Moss Camouflage': 0, Threat: 143 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Shell Retreat':'#8d6e63', 'Bite':'#ffa000', 'Moss Camouflage':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Flipping over', 'Fire'],
    res: ['Physical', 'Poison'],
    ab: ['Shell retreat (withdraws into shell, +200% defense)', 'Bite (weak, defensive)', 'Moss camouflage (blends into swamp floor, +50% stealth)'],
    loot: [{ name:'Turtle Shell', rarity:'uncommon', note:'Used in shields' }, { name:'Turtle Meat', rarity:'common', note:'Edible' }]
  };
  entries.push(swampTurtle);

  // Bog Spider
  const bogSpider = {
    id: 'bog_spider',
    name: 'Bog Spider',
    sub: 'Web Weaver · Ambusher',
    rank: 'C',
    ibg: '#8e7e6e',
    icon: '🕷️',
    size: '~1.2 m legspan, brown, hairy',
    biomes: ['Swamp', 'Bog', 'Marsh'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Bog spiders build webs across swamp paths, waiting for prey to get stuck. Their venom causes paralysis and hallucinations.',
    stats: { HP: 287, Damage: 243, Defense: 187, Aggression: 387, Speed: 287, Mana: 43, 'Web Shot': 387, 'Hallucinogenic Bite': 343, 'Camouflage': 0, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Web Shot':'#ffa000', 'Hallucinogenic Bite':'#800080', 'Camouflage':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Cutting webs', 'Anti-venom'],
    res: ['Poison', 'Fear'],
    ab: ['Web shot (ensnares target, immobilizes 5 sec)', 'Hallucinogenic bite (confusion, 20 dmg/sec for 30 sec)', 'Camouflage (invisible in swamp vegetation)'],
    loot: [{ name:'Bog Spider Silk', rarity:'uncommon', note:'Sticky, used in nets' }, { name:'Spider Venom', rarity:'uncommon', note:'Hallucinogenic' }]
  };
  entries.push(bogSpider);

  // Swamp Wyrm (Lesser)
  const swampWyrm = {
    id: 'swamp_wyrm',
    name: 'Swamp Wyrm',
    sub: 'Serpent · Mud Burrower',
    rank: 'C',
    ibg: '#9eae7e',
    icon: '🐍',
    size: '~3 m long, dark green, no eyes',
    biomes: ['Swamp', 'Marsh', 'Mudflat'],
    intel: 12,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Swamp wyrms are serpentine creatures that burrow through mud. They attack from below, grabbing prey and dragging it underwater to drown.',
    stats: { HP: 487, Damage: 543, Defense: 387, Aggression: 687, 'Burrow Speed': 287, Mana: 43, 'Burrow Strike': 687, 'Constrict': 543, 'Mud Spray': 387, Threat: 742 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Burrow Speed':'#ff9800', Mana:'#9c27b0', 'Burrow Strike':'#d32f2f', 'Constrict':'#ffa000', 'Mud Spray':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Draining water', 'Cutting'],
    res: ['Poison', 'Acid'],
    ab: ['Burrow strike (emerges from mud, deals high damage, knocks prone)', 'Constrict (grapples, crushing damage, drowns)', 'Mud spray (blinds enemies in cone, 5 seconds)'],
    loot: [{ name:'Wyrm Scale', rarity:'uncommon', note:'Mud-resistant' }, { name:'Wyrm Tooth', rarity:'uncommon', note:'Used in spears' }]
  };
  entries.push(swampWyrm);

  // ========================
  // DANGEROUS SWAMP PREDATORS (B–A)
  // ========================

  // Giant Mosquito
  const giantMosquito = {
    id: 'giant_mosquito',
    name: 'Giant Mosquito',
    sub: 'Blood Drinker · Swarm',
    rank: 'B',
    ibg: '#8e7e5e',
    icon: '🦟',
    size: '~0.5 m long, proboscis like a spear',
    biomes: ['Swamp', 'Marsh', 'Stagnant Water'],
    intel: 6,
    tags: { behavior: ['Aggressive', 'Swarm'], combat: ['Swarm', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Giant mosquitoes are blood-sucking insects with a proboscis that can pierce armor. They are silent in flight and can drain a person dry in minutes. Swarms are deadly.',
    stats: { HP: 287, Damage: 387, Defense: 143, Aggression: 687, 'Fly Speed': 387, Mana: 12, 'Blood Drain': 543, 'Silent Flight': 0, 'Swarm': 0, Threat: 687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Blood Drain':'#800080', 'Silent Flight':'#00bcd4', 'Swarm':'#ffa000', Threat:'#d32f2f' },
    weak: ['Smoke', 'Fire', 'Swatting'],
    res: ['Poison'],
    ab: ['Blood drain (pierces armor, 50 dmg/sec, heals mosquito)', 'Silent flight (cannot be heard, +50% stealth)', 'Swarm (when 3+ together, all gain +30% damage)'],
    loot: [{ name:'Mosquito Proboscis', rarity:'uncommon', note:'Sharp, used in piercing weapons' }]
  };
  entries.push(giantMosquito);

  // Will-o'-Wisp
  const willOWisp = {
    id: 'will_o_wisp_swamp',
    name: 'Will-o\'-Wisp',
    sub: 'Swamp Light · Luring Entity',
    rank: 'B',
    ibg: '#d0e8f0',
    icon: '✨',
    size: '~0.5 m diameter, floating orb of light',
    biomes: ['Swamp', 'Marsh', 'Graveyard'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Opportunistic'], combat: ['Control', 'Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Will-o\'-wisps are strange, floating lights that lure travelers off paths and into dangerous waters. They are not truly evil, but their mischief causes death.',
    stats: { HP: 287, Damage: 187, Defense: 187, Aggression: 487, 'Fly Speed': 312, Mana: 387, 'Lure': 0, 'Shock': 387, 'Fade': 0, Threat: 512 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Lure':'#00bcd4', 'Shock':'#ffa000', 'Fade':'#800080', Threat:'#d32f2f' },
    weak: ['Cold iron', 'True sight', 'Dispel magic'],
    res: ['Physical (50%)', 'Poison', 'Fear'],
    ab: ['Lure (creates attractive light, draws prey toward danger)', 'Shock (touch, deals lightning damage, stuns for 2 sec)', 'Fade (becomes invisible, moves quickly)'],
    loot: [{ name:'Wisp Essence', rarity:'rare', note:'Used in illusion magic' }]
  };
  entries.push(willOWisp);

  // Bog Hag
  const bogHag = {
    id: 'bog_hag',
    name: 'Bog Hag',
    sub: 'Swamp Witch · Curse Weaver',
    rank: 'A',
    ibg: '#8e6e5e',
    icon: '🧙',
    size: '~1.6 m, wizened, warty, seaweed hair',
    biomes: ['Swamp', 'Bog', 'Hut in the Mire'],
    intel: 187,
    tags: { behavior: ['Aggressive', 'Strategic'], combat: ['Control', 'Support'], intelligence: ['Strategic'], interaction: ['Manipulative'] },
    desc: 'Bog hags are malevolent swamp witches who curse travelers and brew poisons. They can transform into animals and are masters of illusion. They are intelligent and cruel.',
    stats: { HP: 987, Damage: 743, Defense: 643, Aggression: 987, Speed: 243, Mana: 987, 'Curse': 1287, 'Swamp Walk': 0, 'Polymorph': 0, 'Poison Cloud': 887, Threat: 1287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Curse':'#800080', 'Swamp Walk':'#00bcd4', 'Polymorph':'#ffa000', 'Poison Cloud':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Cold iron', 'Holy', 'Mirrors'],
    res: ['Poison', 'Fear', 'Curse'],
    ab: ['Curse (target suffers -50% stats for 1 hour)', 'Swamp walk (teleports between swamp plants)', 'Polymorph (turns into a swamp creature for 1 minute)', 'Poison cloud (AoE, 50 dmg/sec for 30 sec)'],
    loot: [{ name:'Hag\'s Eye', rarity:'rare', note:'Used in scrying and curses' }, { name:'Hag\'s Brew', rarity:'rare', note:'Poison or potion, depends on the hag' }]
  };
  entries.push(bogHag);

  // Swamp Troll
  const swampTroll = {
    id: 'swamp_troll',
    name: 'Swamp Troll',
    sub: 'Regenerating Brute · Stench',
    rank: 'A',
    ibg: '#9eae8e',
    icon: '👹',
    size: '~2.8 m tall, green, warty, massive',
    biomes: ['Swamp', 'Marsh', 'Under Bridge'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Swamp trolls are massive, stupid, and nearly unkillable. They regenerate from almost any wound and must be burned or dissolved in acid to be permanently killed. They smell terrible.',
    stats: { HP: 1873, Damage: 1487, Defense: 1287, Aggression: 1873, Speed: 187, Mana: 87, 'Club Smash': 1873, 'Regeneration': 0, 'Stench': 0, 'Grab': 1487, Threat: 2187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Club Smash':'#d32f2f', 'Regeneration':'#8bc34a', 'Stench':'#800080', 'Grab':'#ffa000', Threat:'#d32f2f' },
    weak: ['Fire (stops regeneration)', 'Acid (stops regeneration)', 'Decapitation'],
    res: ['Physical', 'Poison'],
    ab: ['Club smash (AoE, 100 dmg, knocks back)', 'Regeneration (heals 50 HP/sec unless fire or acid applied)', 'Stench (poison aura, 10 dmg/sec within 10 m)', 'Grab (grapples, deals 50 dmg per round)'],
    warn: 'Swamp trolls regenerate. Use fire or acid to finish them permanently.',
    loot: [{ name:'Troll Hide', rarity:'rare', note:'Tough, regenerates slowly – used in legendary armor' }, { name:'Troll Blood', rarity:'rare', note:'Powers regeneration potions' }]
  };
  entries.push(swampTroll);

  // ========================
  // LEGENDARY SWAMP ENTITIES (S–SS)
  // ========================

  // Swamp Dragon
  const swampDragon = {
    id: 'swamp_dragon',
    name: 'Swamp Dragon',
    sub: 'Mire Lord · Acid Spitter',
    rank: 'S',
    ibg: '#8eae7e',
    icon: '🐉',
    size: '~10 m long, green-brown scales, mossy',
    biomes: ['Swamp', 'Marsh', 'Deep Bog'],
    intel: 187,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Control'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Swamp dragons are ancient, cunning dragons that rule over the deepest bogs. They breathe cones of acid that melt flesh and armor. Their scales are covered in moss, making them nearly invisible in the swamp.',
    stats: { HP: 9873, Damage: 8473, Defense: 7487, Aggression: 10873, 'Fly Speed': 387, Mana: 5874, 'Acid Breath': 12873, 'Mist Cloak': 0, 'Swamp Command': 0, Threat: 12873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Acid Breath':'#d32f2f', 'Mist Cloak':'#00bcd4', 'Swamp Command':'#800080', Threat:'#d32f2f' },
    weak: ['Ice', 'Anti-dragon weapons', 'Draining swamp'],
    res: ['Poison', 'Acid', 'Physical'],
    ab: ['Acid breath (cone, 500 dmg, destroys armor, melts weapons)', 'Mist cloak (creates thick mist, 50% evasion, cannot be targeted)', 'Swamp command (summons 4-8 swamp creatures to aid)'],
    warn: 'Swamp dragons are ambush predators. They will attack from mist. Bring cold magic to slow them.',
    loot: [{ name:'Swamp Dragon Scale', rarity:'rare', note:'Acid-resistant, used in legendary armor' }, { name:'Acid Gland', rarity:'rare', note:'Used in acid weapons' }]
  };
  entries.push(swampDragon);

  // The Black Lagoon Creature
  const blackLagoon = {
    id: 'black_lagoon',
    name: 'Black Lagoon Creature',
    sub: 'Ancient Amphibian · Legend',
    rank: 'SS',
    ibg: '#4e6e5e',
    icon: '🐊',
    size: '~15 m long, amphibious, primeval',
    biomes: ['Black Lagoon', 'Deep Swamp', 'Sunken Ruin'],
    intel: 98,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Ambush'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'The Black Lagoon Creature is a legendary amphibian that lurks in the deepest, darkest swamp. It is ancient, perhaps the first of its kind. It surfaces only at night, and its roar echoes for miles.',
    stats: { HP: 18743, Damage: 14873, Defense: 12873, Aggression: 16873, 'Swim Speed': 587, Mana: 4873, 'Tidal Surge': 18873, 'Underwater Ambush': 16873, 'Ancient Roar': 14873, Threat: 20873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Tidal Surge':'#ffa000', 'Underwater Ambush':'#d32f2f', 'Ancient Roar':'#800080', Threat:'#d32f2f' },
    weak: ['Holy', 'Draining water', 'Divine weapons'],
    res: ['Physical', 'Water', 'Poison', 'Acid'],
    ab: ['Tidal surge (creates wave, 500 dmg, knocks back)', 'Underwater ambush (attacks from below, cannot be detected)', 'Ancient roar (fear, stuns for 5 seconds, reveals location)'],
    warn: 'The Black Lagoon Creature is a legend. Few have seen it and lived. Do not go near the lagoon at night.',
    loot: [{ name:'Ancient Scale', rarity:'unique', note:'Primordial – used in legendary artifacts' }, { name:'Primal Heart', rarity:'unique', note:'Beats with primeval energy' }]
  };
  entries.push(blackLagoon);

  // ========================
  // NAMED LOCATION: THE SINKING MIRE (Anomaly)
  // ========================
  const sinkingMire = {
    id: 'sinking_mire',
    name: 'The Sinking Mire',
    sub: 'Anomaly · Living Bog',
    rank: 'SS (estimated)',
    ibg: '#6e8e6e',
    icon: '🌿',
    size: 'Unknown, bog that swallows travelers',
    biomes: ['Sinking Mire', 'Deep Bog', 'Lost Swamp'],
    intel: 0,
    tags: { behavior: ['Territorial', 'Inscrutable'], combat: ['Environmental'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'The Sinking Mire is a vast, seemingly alive bog that swallows travelers. Paths shift, the ground gives way, and strange lights lead wanderers deeper. It is not malevolent, but it is hungry. Few enter; fewer leave.',
    stats: {
      'Estimated Area': 'Hundreds of sq km',
      'Minimum Entry Rank': 'Gold (with guide)',
      'Spawn Pattern': 'Bog hags, will-o\'-wisps, swamp wyrms',
      'Risk Level': 'High – do not go alone',
      'Corruption Level': 'Moderate (time distortion reported)'
    },
    bars: { 'Estimated Area':'#ffa000', 'Minimum Entry Rank':'#d32f2f', 'Spawn Pattern':'#00bcd4', 'Risk Level':'#800080', 'Corruption Level':'#e91e63' },
    weak: ['Drainage', 'Sealing'],
    res: ['Physical traversal'],
    ab: [
      'Shifting paths (maps become useless, the bog changes layout)',
      'Swallowing ground (quicksand, 50 dmg/sec, drowning)',
      'Mist (reduces visibility to 10 m, causes disorientation)',
      'Manifest creatures (the bog can spawn any swamp creature at will)'
    ],
    warn: 'The Sinking Mire is not a dungeon. It is a location. Do not treat it as a combat encounter. Respect it, or it will swallow you.',
    loot: [{ name:'Mire Crystal', rarity:'rare', note:'Found only in the deep bog – used in earth magic' }]
  };
  entries.push(sinkingMire);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('swamp', entries, 'Biomes', '🌿');
    console.log('Swamp data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();