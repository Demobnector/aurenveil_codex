// demon-data.js (fully expanded with variants, evolution, conditional loot, living loot, hybrid undead)
(function() {
  const entries = [];

  // ========================
  // LESSER DEMONS (C–B Rank)
  // ========================

  // Imp
  const imp = {
    id: 'imp',
    name: 'Imp',
    sub: 'Lesser Demon · Scout',
    rank: 'C',
    ibg: '#4a3a3a',
    icon: '👿',
    size: '~0.8 m, hunched, leathery wings',
    biomes: ['Demon Realm','Cursed Land','Volcanic'],
    intel: 34,
    tags: { behavior: ['Cowardly','Opportunistic'], combat: ['Swarm','Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The smallest and most common lesser demons. Weak individually but dangerous in swarms. They harass with small firebolts and claws, fleeing when outnumbered. Main threat is distraction – while the party focuses on imps, something worse approaches.',
    stats: { HP: 147, Damage: 124, Defense: 98, Aggression: 187, Speed: 234, Mana: 187, 'Firebolt': 213, 'Swarm Coordination': 198, Threat: 221 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Firebolt':'#ff5722', 'Swarm Coordination':'#ffa000', Threat:'#d32f2f' },
    weak: ['Holy','Light','Purification','Banishment'],
    res: ['Darkness','Fire','Fear','Poison'],
    ab: ['Firebolt (ranged, low damage)', 'Swarm distraction (-15% enemy accuracy)', 'Winged escape (high mobility)'],
    loot: [{ name:'Imp Horn', rarity:'common', note:'Used in minor demon-summoning rituals' }, { name:'Cinder Dust', rarity:'common', note:'Residual demonic energy – alchemical reagent' }]
  };
  entries.push(imp);

  // Shadow Stalker (base) with Abyss-Touched variant
  const shadowStalker = {
    id: 'shadow_stalker',
    name: 'Shadow Stalker',
    sub: 'Lesser Demon · Ambusher',
    rank: 'C',
    ibg: '#3a2e3a',
    icon: '👤',
    size: '~1.2 m, faceless, shadow body',
    biomes: ['Demon Realm','Shadow Plane','Cursed Ruins'],
    intel: 58,
    tags: { behavior: ['Aggressive'], combat: ['Ambush','Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Shadow stalkers phase through shadows, striking from darkness. Invisible in dim light, they deal bonus damage from hiding. Light reveals them and reduces combat effectiveness.',
    stats: { HP: 203, Damage: 267, Defense: 142, Aggression: 298, Speed: 287, Mana: 187, 'Shadow Phase': 347, 'Backstab': 324, Threat: 341 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Shadow Phase':'#455a64', 'Backstab':'#6a1b9a', Threat:'#d32f2f' },
    weak: ['Light magic','Torchlight','True sight','Area attacks'],
    res: ['Darkness','Physical (partial)','Fear'],
    ab: ['Shadow phase (invisible in dim light)', 'Backstab (double damage from behind)', 'Fearful presence (weak morale effect)'],
    loot: [{ name:'Shadow Essence', rarity:'uncommon', note:'Used in stealth enchantments' }, { name:'Phase Fragment', rarity:'rare', note:'Allows short-distance shadow teleportation once' }],
    variants: [
      {
        key: 'abyss_touched',
        label: '🌑 Abyss-Touched',
        rank: 'B',
        ibg: '#2a1e2a',
        icon: '👤',
        sub: 'Abyss-Touched Stalker · Lifestealer',
        size: '~1.3 m, darker, red eyes',
        intel: 72,
        tags: { behavior: ['Aggressive','Territorial'], combat: ['Ambush','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
        desc: 'A shadow stalker empowered by abyssal energy. It gains a dark aura that damages nearby enemies and heals the stalker. Permanent invisibility in darkness.',
        stats: { HP: 387, Damage: 324, Defense: 198, Aggression: 413, Speed: 312, Mana: 287, 'Shadow Phase': 487, 'Dark Aura': 423, 'Life Steal': 398, Threat: 487 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Shadow Phase':'#455a64', 'Dark Aura':'#800080', 'Life Steal':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Holy','Light','True sight'],
        res: ['Darkness','Physical (partial)','Fear'],
        ab: ['Shadow phase (permanent invisibility in complete darkness)', 'Dark aura (5 dmg/sec to enemies within 3 m)', 'Life steal (attacks heal for 30% of damage)'],
        loot: [{ name:'Abyssal Shadow Core', rarity:'rare', note:'Pulsing with darkness – used in legendary stealth gear (may corrupt wearer)' }]
      }
    ]
  };
  entries.push(shadowStalker);

  // Hellhound – with evolution chain (Hellhound → Greater → Infernal Alpha) as variants
  const hellhound = {
    id: 'hellhound',
    name: 'Hellhound',
    sub: 'Lesser Demon · War Beast',
    rank: 'B',
    ibg: '#5e3a2a',
    icon: '🐺',
    size: '~1.5 m at shoulder, burning eyes',
    biomes: ['Demon Realm','Volcanic','Battlefield'],
    intel: 32,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Swarm'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Demonic canines bred for war. They hunt in packs; their bites sear with hellfire that resists healing. Fearless and relentless. Can evolve mid-fight if they feed on enough essence.',
    stats: { HP: 374, Damage: 398, Defense: 267, Aggression: 478, Speed: 387, Mana: 124, 'Hellfire Bite': 487, 'Pack Hunt': 432, Threat: 498 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Hellfire Bite':'#ff5722', 'Pack Hunt':'#ffa000', Threat:'#d32f2f' },
    weak: ['Holy','Cold','Purification water'],
    res: ['Fire','Heat','Darkness','Fear'],
    ab: ['Hellfire bite (slow-healing burn)', 'Pack hunt (+10% damage per adjacent hellhound)', 'Relentless pursuit (cannot be shaken)'],
    loot: [{ name:'Hellhound Fang', rarity:'uncommon', note:'Retains hellfire – used in fire weapons' }, { name:'Burned Collar', rarity:'common', note:'Fire-resistant leather' }],
    variants: [
      {
        key: 'greater',
        label: '🔥 Greater',
        rank: 'A',
        ibg: '#7e4a2a',
        icon: '🐺',
        sub: 'Greater Hellhound · Pack Leader',
        size: '~2.5 m at shoulder, flaming mane',
        intel: 47,
        desc: 'Pack leaders, massive and wreathed in hellfire. Their bite melts steel; they command lesser hellhounds and summon firestorms.',
        stats: { HP: 987, Damage: 892, Defense: 743, Aggression: 1087, Speed: 467, Mana: 324, 'Infernal Bite': 1123, 'Pack Command': 987, 'Firestorm': 1023, Threat: 1187 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Infernal Bite':'#ff5722', 'Pack Command':'#ffa000', 'Firestorm':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Holy','Cold','High-tier purification'],
        res: ['Fire','Heat','Darkness','Fear','Physical (partial)'],
        ab: ['Infernal bite (ignores 30% armor, unhealable burn)', 'Pack command (lesser hellhounds +25% damage)', 'Firestorm (AoE, high damage)'],
        loot: [{ name:'Greater Hellhound Core', rarity:'rare', note:'Heart of infernal fire – legendary fire weapon material' }]
      },
      {
        key: 'infernal_alpha',
        label: '👑 Infernal Alpha',
        rank: 'S',
        ibg: '#9e5a2a',
        icon: '🐺',
        sub: 'Infernal Alpha · Apocalypse Beast',
        size: '~3.5 m at shoulder, magma veins',
        intel: 78,
        desc: 'A legendary hellhound that has evolved through countless battles. It radiates an infernal aura that sets the ground ablaze and can summon lesser hellhounds continuously. Its roar causes fear and its bite consumes magic.',
        stats: { HP: 2187, Damage: 1847, Defense: 1523, Aggression: 2347, Speed: 587, Mana: 742, 'Infernal Bite': 2487, 'Magma Aura': 1987, 'Summon Pack': 1743, 'Roar': 2123, Threat: 2487 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Infernal Bite':'#ff5722', 'Magma Aura':'#ffa000', 'Summon Pack':'#d32f2f', 'Roar':'#800080', Threat:'#d32f2f' },
        weak: ['Divine holy','Extreme cold (Diamond-rank)'],
        res: ['All fire','Physical','Darkness','Fear','Poison'],
        ab: ['Infernal bite (ignores 50% armor, dispels magic on target)', 'Magma aura (10 dmg/sec to all within 10 m, ignites terrain)', 'Summon pack (every 30s, spawns 2 hellhounds)', 'Roar (large AoE fear, interrupts spells)'],
        conditionalLootNotes: 'If killed with cold damage, drops "Frozen Alpha Core" (unique) instead of standard core.',
        loot: [{ name:'Infernal Alpha Core', rarity:'unique', note:'Pulsing with magma – can forge a weapon that burns forever' }]
      }
    ]
  };
  entries.push(hellhound);

  // ========================
  // MID DEMONS (B–A Rank)
  // ========================

  // Dark Mage with Broken Caster variant (corrupted undead hybrid)
  const darkMage = {
    id: 'dark_mage',
    name: 'Dark Mage',
    sub: 'Mid Demon · Caster',
    rank: 'B',
    ibg: '#4a2a4a',
    icon: '🧙',
    size: '~1.7 m, robed, shadowed face',
    biomes: ['Demon Realm','Cursed Tower','Ancient Ruins'],
    intel: 187,
    tags: { behavior: ['Strategic','Aggressive'], combat: ['Control','Support'], intelligence: ['Strategic'], interaction: ['Organized'] },
    desc: 'Demonic or corrupted human spellcasters. They curse, summon imps, and buff demons. A force multiplier on the battlefield.',
    stats: { HP: 387, Damage: 274, Defense: 233, Aggression: 421, Speed: 187, Mana: 714, 'Curse Power': 687, 'Summoning': 743, Threat: 689 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Curse Power':'#800080', 'Summoning':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Holy','Silence','Anti-magic'],
    res: ['Dark magic','Fear','Poison'],
    ab: ['Curse of weakness (-30% damage to target)', 'Summon imp (1-3 imps)', 'Shadow bolt (ranged)', 'Corruption aura (+15% damage to nearby demons)'],
    loot: [{ name:'Dark Mage Robe', rarity:'uncommon', note:'Enhances dark magic – corrupts wearer slowly' }, { name:'Summoning Focus', rarity:'rare', note:'Increases summon limit' }],
    variants: [
      {
        key: 'broken_caster',
        label: '🧠 Broken Caster',
        rank: 'C',
        ibg: '#5e2e4e',
        icon: '🧙',
        sub: 'Corrupted Caster · Chaotic',
        size: '~1.7 m, twitching, glowing eyes',
        intel: 23,
        tags: { behavior: ['Erratic','Aggressive'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
        desc: 'A dark mage infected by undead corruption – they have lost all strategic thinking and now spam spells randomly. Unpredictable and dangerous, but no longer coordinates with allies.',
        stats: { HP: 312, Damage: 398, Defense: 174, Aggression: 587, Speed: 243, Mana: 512, 'Wild Magic': 687, 'Self-Damage Chance': 312, Threat: 589 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Wild Magic':'#800080', 'Self-Damage Chance':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Holy','Silence','Fire'],
        res: ['Darkness','Poison','Fear'],
        ab: ['Wild magic (random spell, may backfire)', 'Chaotic surge (unpredictable AoE, may hit self)', 'No coordination (cannot buff allies)'],
        loot: [{ name:'Broken Focus', rarity:'uncommon', note:'Unstable – used in risky enchantments' }]
      }
    ]
  };
  entries.push(darkMage);

  const vampireSpawn = {
    id: 'vampire_spawn',
    name: 'Vampire Spawn',
    sub: 'Mid Demon · Blood Drinker',
    rank: 'B',
    ibg: '#6e3a4a',
    icon: '🧛',
    size: '~1.7 m, pale, red eyes',
    biomes: ['Demon Realm','Graveyard','Dark Forest','Castle'],
    intel: 124,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Lesser vampires, not yet true vampires. They drain life, charm weak targets, and are vulnerable to sunlight and holy symbols.',
    stats: { HP: 523, Damage: 487, Defense: 398, Aggression: 612, Speed: 467, Mana: 287, 'Life Drain': 587, 'Charm': 498, Threat: 621 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Life Drain':'#880e4f', 'Charm':'#e91e63', Threat:'#d32f2f' },
    weak: ['Sunlight','Holy symbols','Silver','Fire','Stake to heart'],
    res: ['Darkness','Cold','Physical (non-silver)','Fear','Poison'],
    ab: ['Life drain bite (heals spawn for 50% damage)', 'Charm gaze (temporary control of weak target)', 'Mist form (escape)'],
    loot: [{ name:'Vampire Dust', rarity:'uncommon', note:'Used in immortality research – dangerous' }, { name:'Blood Crystal', rarity:'rare', note:'Congealed blood with demonic essence' }],
    conditionalLootNotes: 'If killed with fire, the Blood Crystal is destroyed; if killed with holy, drops "Purified Blood Crystal" (higher value).'
  };
  entries.push(vampireSpawn);

  const succubus = {
    id: 'succubus',
    name: 'Succubus',
    sub: 'Mid Demon · Tempter',
    rank: 'B',
    ibg: '#9e4a6e',
    icon: '💋',
    size: '~1.6 m, beautiful, wings, tail',
    biomes: ['Demon Realm','Dreamscape','Temptation Lairs'],
    intel: 201,
    tags: { behavior: ['Strategic','Manipulative'], combat: ['Control','Support'], intelligence: ['Strategic'], interaction: ['Manipulative'] },
    desc: 'Demonic tempters feeding on life energy through seduction and emotion. In combat, they charm, drain will, and turn enemies against each other.',
    stats: { HP: 387, Damage: 298, Defense: 267, Aggression: 374, Speed: 412, Mana: 587, 'Charm': 687, 'Will Drain': 623, Threat: 598 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Charm':'#e91e63', 'Will Drain':'#800080', Threat:'#d32f2f' },
    weak: ['Holy','Dispel magic','Will protection'],
    res: ['Darkness','Physical','Poison','Fear'],
    ab: ['Charm (target fights for demon for 30s)', 'Will drain (reduces target mental resistance)', 'Seductive presence (confusion aura)'],
    loot: [{ name:'Temptation Essence', rarity:'rare', note:'Used in mind-control artifacts – ethically restricted' }]
  };
  entries.push(succubus);

  const demonGate = {
    id: 'demon_gate',
    name: 'Demon Gate',
    sub: 'Structure · Spawner',
    rank: 'B',
    ibg: '#5e3a4a',
    icon: '🚪',
    size: '~5 m tall, archway of bone and shadow',
    biomes: ['Demon Realm','Cursed Land','Rift Sites'],
    intel: 0,
    tags: { behavior: ['Passive'], combat: ['Swarm'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'A stationary structure that spawns demons continuously. Not alive, but animated by abyssal energy. Destroying it stops the endless tide. Often protected by demonic guardians.',
    stats: { HP: 2847, Damage: 0, Defense: 1023, Aggression: 0, Speed: 0, Mana: 3747, 'Spawn Rate': 0, 'Corruption Radius': 1847, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Corruption Radius':'#d32f2f', Threat:'#607d8b' },
    weak: ['Holy','Purification','Destruction'],
    res: ['Physical (partial)','Darkness','Poison'],
    ab: ['Spawn demons (every 10s, 1-3 imps, hellhounds, or shadow stalkers)', 'Corruption aura (curses land, empowers demons)', 'Gate shield (50% damage reduction)'],
    loot: [{ name:'Gate Fragment', rarity:'uncommon', note:'Can create a temporary demon gate' }, { name:'Abyssal Residue', rarity:'rare', note:'Used in high-tier summoning arrays' }]
  };
  entries.push(demonGate);

  // ========================
  // GREATER DEMONS (A–S Rank)
  // ========================

  // Archdemon (Lesser base) with Greater variant and Abyss-Touched variant
  const archdemon = {
    id: 'archdemon',
    name: 'Archdemon',
    sub: 'Lesser Archdemon · Field Commander',
    rank: 'A',
    ibg: '#7e3a3a',
    icon: '😈',
    size: '~2.8 m tall, horned',
    biomes: ['Demon Realm','Abyssal Citadel','Siege Front'],
    intel: 187,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Swarm'], intelligence: ['Strategic'], interaction: ['Organized'] },
    desc: 'Lesser archdemons command legions of 100-200 demons. They possess dark magic, physical strength, and the ability to rally demonic forces.',
    stats: { HP: 1974, Damage: 1687, Defense: 1523, Aggression: 2247, Speed: 287, Mana: 1247, 'Demonic Command': 2247, 'Abyssal Strike': 2087, 'Dark Shield': 1874, Threat: 2314 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Demonic Command':'#ffa000', 'Abyssal Strike':'#d32f2f', 'Dark Shield':'#800080', Threat:'#d32f2f' },
    weak: ['Holy','Divine weapons','Exorcism','Banishment'],
    res: ['All elemental (except holy)','Physical','Darkness','Fear','Poison'],
    ab: ['Demonic command (allies +25% damage within 300 m)', 'Abyssal strike (ignores 40% armor)', 'Dark shield (50% damage reduction for 10s)', 'Summon squad (10-20 lesser demons)'],
    loot: [{ name:'Lesser Archdemon Horn', rarity:'uncommon', note:'Used in demonic pacts' }, { name:'Abyssal Fragment', rarity:'uncommon', note:'Heart of a field commander' }],
    variants: [
      {
        key: 'greater',
        label: '⬆️ Greater',
        rank: 'S',
        ibg: '#8e3a3a',
        icon: '😈',
        sub: 'Greater Archdemon · General of Legions',
        size: '~3.5 m tall, massive, ornate horns',
        intel: 231,
        desc: 'Greater archdemons are generals, ruling over legions. Platinum-rank threat alone; Diamond-rank with their army.',
        stats: { HP: 2874, Damage: 2387, Defense: 2147, Aggression: 3124, Speed: 312, Mana: 1847, 'Demonic Command': 3127, 'Abyssal Strike': 2987, 'Dark Shield': 2534, Threat: 3214 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Demonic Command':'#ffa000', 'Abyssal Strike':'#d32f2f', 'Dark Shield':'#800080', Threat:'#d32f2f' },
        weak: ['Holy','Divine weapons','High-tier banishment'],
        res: ['All elemental (except holy)','Physical','Darkness','Fear','Poison'],
        ab: ['Demonic command (allies +30% damage within 500 m)', 'Abyssal strike (ignores 50% armor)', 'Dark shield (70% reduction, 10s)', 'Summon legion (20-50 lesser demons)'],
        loot: [{ name:'Greater Archdemon Horn', rarity:'rare', note:'High-tier summoning component' }, { name:'Abyssal Core', rarity:'rare', note:'Heart of a general' }]
      },
      {
        key: 'abyss_touched',
        label: '🌑 Abyss-Touched',
        rank: 'S',
        ibg: '#5a2a3a',
        icon: '😈',
        sub: 'Abyss-Touched Archdemon · Living Cataclysm',
        size: '~3.8 m, dark aura, bleeding shadow',
        intel: 298,
        tags: { behavior: ['Territorial','Strategic'], combat: ['Siege','Control'], intelligence: ['Strategic'], interaction: ['Ruler'] },
        desc: 'An archdemon that has absorbed the energy of the abyss itself. It radiates a dark aura that damages and drains life from all nearby enemies, and its strikes heal it.',
        stats: { HP: 3874, Damage: 3127, Defense: 2748, Aggression: 4123, Speed: 387, Mana: 2874, 'Abyssal Aura': 4247, 'Life Drain Strike': 3874, 'Dark Command': 3647, Threat: 4327 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Abyssal Aura':'#800080', 'Life Drain Strike':'#d32f2f', 'Dark Command':'#ffa000', Threat:'#d32f2f' },
        weak: ['Divine holy','Legendary weapons','Purification rituals'],
        res: ['All elemental (except holy)','Physical','Darkness','Fear','Poison'],
        ab: ['Abyssal aura (15 dmg/sec to all within 15 m, heals archdemon for 20% of damage)', 'Life drain strike (heals for 50% damage dealt)', 'Dark command (all demons gain +40% damage, +30% speed)', 'Summon abyssal legion (calls 30-60 demons)'],
        conditionalLootNotes: 'Drops "Abyssal Corruption Core" – extremely unstable; can be used to craft a weapon that heals the wielder but slowly corrupts them.',
        loot: [{ name:'Abyssal Corruption Core', rarity:'unique', note:'Powers an artifact that drains life from enemies but damages the user over time.' }]
      }
    ]
  };
  entries.push(archdemon);

  // Demon Knight with Feral Knight variant (berserker)
  const demonKnight = {
    id: 'demon_knight',
    name: 'Demon Knight',
    sub: 'Greater Demon · Elite Guard',
    rank: 'A',
    ibg: '#6e3a3a',
    icon: '⚔️',
    size: '~2.2 m, black armor, red eyes',
    biomes: ['Demon Realm','Abyssal Citadel','Dark Fortress'],
    intel: 156,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Defensive'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Elite demonic warriors, often bodyguards to archdemons or the Demon Lord. Their armor regenerates slowly, and their cursed blades leave wounds that resist healing.',
    stats: { HP: 1487, Damage: 1287, Defense: 1523, Aggression: 1784, Speed: 398, Mana: 487, 'Cursed Blade': 1687, 'Armor Regeneration': 1243, 'Knightly Charge': 1823, Threat: 1897 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Cursed Blade':'#d32f2f', 'Armor Regeneration':'#00bcd4', 'Knightly Charge':'#ffa000', Threat:'#d32f2f' },
    weak: ['Holy','Blunt force','Anti-armor'],
    res: ['Darkness','Fire','Poison','Fear'],
    ab: ['Cursed blade (slow-healing wound)', 'Armor regeneration (+5% defense per second)', 'Knightly charge (gap closer, knockback)', 'Elite discipline (immune to morale effects)'],
    loot: [{ name:'Demon Knight Plate', rarity:'rare', note:'Self-repairing armor – very heavy' }, { name:'Cursed Blade Fragment', rarity:'rare', note:'Still inflicts unhealable wounds' }],
    variants: [
      {
        key: 'feral',
        label: '💢 Feral Knight',
        rank: 'A',
        ibg: '#8e3a2a',
        icon: '⚔️',
        sub: 'Feral Knight · Berserker',
        size: '~2.3 m, cracked armor, wild eyes',
        intel: 48,
        tags: { behavior: ['Aggressive','Berserker'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
        desc: 'A demon knight that has lost sanity due to corruption or battle frenzy. It ignores defense entirely, dealing massive damage but taking increased damage. It cannot retreat and grows stronger as it gets wounded.',
        stats: { HP: 1974, Damage: 2187, Defense: 847, Aggression: 2874, Speed: 512, Mana: 231, 'Berserk Strike': 2748, 'Pain Rage': 1987, Threat: 2697 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Berserk Strike':'#d32f2f', 'Pain Rage':'#ffa000', Threat:'#d32f2f' },
        weak: ['Holy','All damage increased (no defense)'],
        res: ['Darkness','Fear','Poison','Pain'],
        ab: ['Berserk strike (ignores 100% armor, deals double damage)', 'Pain rage (damage increases by 20% for every 10% HP missing)', 'Cannot retreat (immortal while enraged, but dies when HP reaches 0)', 'No armor (defense effectively 0)'],
        conditionalLootNotes: 'If killed, drops "Shattered Knight Plate" – heavy but grants berserk effect on wearer.',
        loot: [{ name:'Shattered Knight Plate', rarity:'rare', note:'Grants +50% damage when below 20% HP, but -50% defense at all times.' }]
      },
      {
        key: 'infernal',
        label: '🔥 Infernal',
        rank: 'S',
        ibg: '#9e4a2a',
        icon: '⚔️',
        sub: 'Infernal Knight · Molten Armor',
        size: '~2.4 m, armor glowing with magma veins',
        intel: 134,
        tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Defensive'], intelligence: ['Aware'], interaction: ['Predatory'] },
        desc: 'A demon knight forged in volcanic zones. Its armor is permanently on fire, burning attackers and setting the ground ablaze. Resistant to cold, but weak to water and ice.',
        stats: { HP: 2347, Damage: 1987, Defense: 1987, Aggression: 2478, Speed: 412, Mana: 587, 'Magma Armor': 2748, 'Infernal Strike': 2387, 'Heat Aura': 1987, Threat: 2787 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Magma Armor':'#ffa000', 'Infernal Strike':'#d32f2f', 'Heat Aura':'#ff5722', Threat:'#d32f2f' },
        weak: ['Cold','Ice','Water (vulnerable)'],
        res: ['Fire','Heat','Physical','Poison','Fear'],
        ab: ['Magma armor (attacking knight deals fire damage back, +50% fire resistance)', 'Infernal strike (ignores 40% armor, sets target on fire)', 'Heat aura (5 dmg/sec to enemies within 3 m, ignites terrain)', 'Lava step (leaves burning trail)'],
        loot: [{ name:'Infernal Knight Core', rarity:'rare', note:'Molten core – used in fire-enchanted heavy armor' }]
      }
    ]
  };
  entries.push(demonKnight);

  const bloodCount = {
    id: 'blood_count',
    name: 'Blood Count',
    sub: 'Greater Demon · Vampire Lord',
    rank: 'S',
    ibg: '#7e2a4a',
    icon: '🧛‍♂️',
    size: '~1.9 m, elegant, noble bearing',
    biomes: ['Demon Realm','Dark Castle','Blood Court'],
    intel: 347,
    tags: { behavior: ['Strategic','Territorial'], combat: ['Control','Burst'], intelligence: ['Strategic'], interaction: ['Ruler','Manipulative'] },
    desc: 'A vampire lord (or Blood Count) rules over vampire spawn and lesser vampires. Ancient, intelligent, and powerful. Their charm affects even strong-willed targets; their life drain can kill instantly; they can turn defeated enemies into spawn. Within their domain, night is eternal.',
    stats: { HP: 2784, Damage: 2387, Defense: 2147, Aggression: 2874, Speed: 587, Mana: 1823, 'Life Drain': 3124, 'Royal Charm': 2987, 'Mist Form': 0, 'Summon Spawn': 2432, Threat: 3217 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Life Drain':'#880e4f', 'Royal Charm':'#e91e63', 'Mist Form':'#9c27b0', 'Summon Spawn':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Sunlight','Holy symbols','Silver','Wooden stake'],
    res: ['Darkness','Cold','Physical (non-silver)','Fear','Poison'],
    ab: ['Life Drain (kills low-HP target instantly, heals count)', 'Royal charm (long-term control, hard to resist)', 'Mist form (escape, regenerate)', 'Summon spawn (5-10 vampire spawn)', 'Domain of night (within territory, no sunlight penalty)'],
    territorialSS: true,
    warn: 'Blood Count domains are eternally dark. Sunlight does not reach them. Within their territory, vampire lords are immune to their primary weaknesses.',
    loot: [{ name:'Blood Count Heart', rarity:'unique', note:'Can be used to create a true vampire or destroy one' }, { name:'Royal Blood', rarity:'rare', note:'Essence of a vampire lord – used in powerful dark rituals' }]
  };
  entries.push(bloodCount);
  
  // ========================
  // HYBRID: ABYSSAL REVENANT (Demon-Undead)
  // ========================
  const abyssalRevenant = {
    id: 'abyssal_revenant',
    name: 'Abyssal Revenant',
    sub: 'Demon-Undead Hybrid · Cursed Immortal',
    rank: 'S',
    ibg: '#6e2a3a',
    icon: '💀',
    size: '~2.5 m, skeletal with demon horns, shadow aura',
    biomes: ['Cursed Land','Demon Realm Border','Undead Battlefields'],
    intel: 147,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'A demon that died in cursed land and revived as an undead. It retains demonic abilities but gains undead immortality – can only be permanently killed by destroying its core or by divine magic. Weak to both holy and purification, but resistant to most physical and elemental attacks.',
    stats: { HP: 6874, Damage: 5123, Defense: 4874, Aggression: 7124, Speed: 312, Mana: 4874, 'Abyssal Decay': 7124, 'Immortal Core': 0, 'Life Leech': 5874, Threat: 7423 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Abyssal Decay':'#800080', 'Immortal Core':'#00bcd4', 'Life Leech':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Holy','Purification','Holy water','Core destruction'],
    res: ['All physical','Darkness','Poison','Fear','Pain','Death effects (partial)'],
    ab: [
      'Abyssal Decay (aura: 10 dmg/sec to living, prevents healing)',
      'Immortal Core (cannot be killed while core exists; core is hidden inside body)',
      'Life Leech (attacks heal revenant for 50% damage)',
      'Resurrection (if core not destroyed, revives 1 minute after death)'
    ],
    warn: 'Abyssal Revenants must be purified with holy magic or have their core destroyed while under a divine seal. Otherwise, they will return.',
    loot: [{ name:'Revenant Core', rarity:'rare', note:'Still beats with dark energy – can be used to create an undead servant or destroyed for holy experience' }, { name:'Abyssal Bone', rarity:'uncommon', note:'Used in cursed weapon forging' }]
  };
  entries.push(abyssalRevenant);

  // ========================
  // DEMON LORD'S OFFICERS (single entry with variants, all with bars)
  // ========================
  const demonOfficers = {
    id: 'demon_lord_officers',
    name: 'Demon Lord\'s Officers',
    sub: 'High Command · The Four Pillars',
    rank: 'S',
    ibg: '#5e2a2a',
    icon: '👑',
    size: 'Varies by role',
    biomes: ['Demon Lord\'s Court','Abyssal Citadel'],
    intel: 412,
    tags: { behavior: ['Strategic','Territorial'], combat: ['Control','Siege','Burst'], intelligence: ['Sentient'], interaction: ['Ruler'] },
    desc: 'The Demon Lord\'s four officers – The Hand, The Chain, The Eye, and The Maw – are the highest-ranking demons below the Demon Lord himself. Each has a unique domain and combat role. The Hand (vacant) was the right hand and executor. The Chain is jailer and binder. The Eye is seer and strategist. The Maw is siege breaker and consumer.',
    stats: { HP: 7423, Damage: 6124, Defense: 6784, Aggression: 7124, Speed: 412, Mana: 5247, 'Officer Authority': 8743, 'Domain Power': 7987, Threat: 8472 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Officer Authority':'#ffa000', 'Domain Power':'#800080', Threat:'#d32f2f' },
    weak: ['Holy','Anti-officer weapons','Division'],
    res: ['All elemental (except holy)','Physical','Darkness','Fear','Poison'],
    ab: ['Officer Authority (unique per role, see variants)', 'Domain Power (+50% stats within their domain)'],
    variants: [
      {
        key: 'hand',
        label: '✋ The Hand (Vacant)',
        rank: 'SS',
        ibg: '#6e2a2a',
        icon: '✋',
        sub: 'Right Hand · Executor (Formerly Iz\'gon)',
        size: 'Former occupant 2.11 m. Position vacant.',
        desc: 'The Hand is the Demon Lord\'s most trusted officer – the right hand, the executor of will, the blade that strikes without warning. The position has been vacant since Iz\'gon voluntarily left the demon realm. Iz\'gon now lives as a citizen in the human kingdom, classified as "~Diamond" by the guild – a comfortable fiction. His true rank is SS.',
        stats: { HP: 9847, Damage: 8743, Defense: 7423, Aggression: 9124, Speed: 687, Mana: 7427, 'Execution Authority': 11247, 'Shadow of the Lord': 9874, 'Demonic Sovereignty': 10234, Threat: 11247 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Execution Authority':'#d32f2f', 'Shadow of the Lord':'#800080', 'Demonic Sovereignty':'#ffa000', Threat:'#d32f2f' },
        weak: ['Holy (theoretical)','Betrayal','Loss of purpose'],
        res: ['All elemental (except holy)','Physical','Darkness','Fear','Poison','Curse'],
        ab: ['Execution Authority (ignores 90% defenses, kills most targets instantly)', 'Shadow of the Lord (teleport through shadows, anywhere in demon realm)', 'Demonic Sovereignty (+50% stats to all demons within 1 km)', 'Vacant (position empty – no current threat)'],
        warn: 'The position is vacant, but the Demon Lord has not officially disbanded it. If a new Hand is appointed, the threat level will return to SS.'
      },
      {
        key: 'chain',
        label: '⛓️ The Chain',
        rank: 'S',
        ibg: '#6e4a3a',
        icon: '⛓️',
        sub: 'Binder · Jailer',
        size: '~2.4 m, gaunt, wrapped in chains',
        desc: 'The Chain is the Demon Lord\'s jailer and enforcer of binding agreements. Uses enchanted chains that can restrain even greater demons. Focuses on immobilization and control.',
        stats: { HP: 7423, Damage: 6124, Defense: 6784, Aggression: 7124, Speed: 412, Mana: 5247, 'Enchanted Chains': 8743, 'Binding Pact': 7987, 'Rend': 6842, Threat: 8472 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Enchanted Chains':'#ffa000', 'Binding Pact':'#800080', 'Rend':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Holy','Anti-binding magic','Severance'],
        res: ['Physical','Darkness','Poison','Fear'],
        ab: ['Enchanted chains (immobilize target, prevents actions)', 'Binding pact (curse prevents escape or teleport)', 'Rend (triple damage to immobile targets)']
      },
      {
        key: 'eye',
        label: '👁️ The Eye',
        rank: 'S',
        ibg: '#4a3a5e',
        icon: '👁️',
        sub: 'Seer · Strategist',
        size: '~1.8 m, multiple eyes, cloaked',
        desc: 'The Eye is the Demon Lord\'s intelligence officer – sees across realms, monitors threats, and coordinates demon forces. In combat, it debuffs, reveals weaknesses, and marks targets.',
        stats: { HP: 5123, Damage: 3874, Defense: 4123, Aggression: 3241, Speed: 687, Mana: 8472, 'All-Seeing Gaze': 9874, 'Weakness Reveal': 8743, 'Coordinated Strike': 9124, Threat: 8742 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'All-Seeing Gaze':'#00bcd4', 'Weakness Reveal':'#ffa000', 'Coordinated Strike':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Blindness','Holy','Anti-magic'],
        res: ['Darkness','Fear','Poison','Mental'],
        ab: ['All-seeing gaze (reveals enemies through walls, grants true sight to allies)', 'Weakness reveal (target takes +50% damage from all sources)', 'Coordinated strike (+25% critical chance against revealed target)']
      },
      {
        key: 'maw',
        label: '👄 The Maw',
        rank: 'S',
        ibg: '#7e3a2a',
        icon: '👄',
        sub: 'Siege Breaker · Consumer',
        size: '~5 m long, massive mouth, no distinct body',
        desc: 'The Maw is the Demon Lord\'s siege weapon – a massive, predatory demon with no discernible body beyond a colossal mouth. It consumes everything – stone, steel, magic, even other demons.',
        stats: { HP: 12473, Damage: 9847, Defense: 7423, Aggression: 11247, Speed: 187, Mana: 3124, 'Devour': 14237, 'Siege Swallow': 12847, 'Consume Magic': 10984, Threat: 13247 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Devour':'#d32f2f', 'Siege Swallow':'#ffa000', 'Consume Magic':'#800080', Threat:'#d32f2f' },
        weak: ['Holy','Acid','Internal attacks (hard to reach)'],
        res: ['All physical','All elemental (except holy)','Magic'],
        ab: ['Devour (instantly kills target below 20% HP, restores Maw\'s HP)', 'Siege swallow (destroys structures and magical barriers)', 'Consume magic (absorbs spells, converts to HP)']
      }
    ]
  };
  entries.push(demonOfficers);

  // ========================
  // THE DEMON LORD (SS rank, territorial SSS)
  // ========================
  const demonLord = {
    id: 'demon_lord',
    name: 'The Demon Lord',
    sub: 'Sovereign of the Abyss · Territorial Cataclysm',
    rank: 'SS',
    ibg: '#2a1a2a',
    icon: '👑',
    size: '~4.5 m tall, shadow and flame',
    biomes: ['Demon Lord\'s Citadel','Abyssal Throne'],
    intel: 891,
    tags: { behavior: ['Territorial','Strategic'], combat: ['Siege','Control','Swarm','Burst'], intelligence: ['Sentient'], interaction: ['Ruler','Absolute'] },
    desc: 'The absolute ruler of the demon realm. Alone, SS-rank – requires multiple Diamond-rank adventurers. Within their territory, they reach SSS-rank, commanding the full power of the domain. Engaging the Demon Lord on their own ground is a death sentence.',
    stats: { HP: 18743, Damage: 16472, Defense: 14873, Aggression: 17842, Speed: 687, Mana: 18762, 'Abyssal Sovereignty': 21473, 'Lord\'s Authority': 19873, 'Domain Collapse': 18742, Threat: 21473 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Abyssal Sovereignty':'#ffa000', 'Lord\'s Authority':'#d32f2f', 'Domain Collapse':'#800080', Threat:'#d32f2f' },
    weak: ['Holy (divine-level)','Territory destruction (theoretical)','Sealing'],
    res: ['All elemental (except divine holy)','All physical','Darkness','Fear','Poison','Curse','Death'],
    ab: [
      'Abyssal Sovereignty (in territory: +200% stats to self, +100% to all demons, terrain hostile)',
      'Lord\'s Authority (command any demon instantly, any distance within realm)',
      'Domain Collapse (sacrifice territory to destroy everything within it – last resort)',
      'Summon Legion (calls 100+ demons of mixed ranks)',
      'Demonic Immortality (cannot be permanently killed in territory; reforms after 1 year unless territory purified)'
    ],
    territorialSS: true,
    warn: 'DO NOT ENGAGE WITHIN DEMON LORD TERRITORY. Ambient demonic energy is fatal to Silver-rank and below. Even Diamond-rank parties require divine blessing and extensive preparation.',
    territory: 'Within the demon realm or any claimed territory, the Demon Lord reaches SSS-rank (cap 100,000). All demons are significantly empowered. The ground, air, and magic are hostile to non-demons.',
    loot: [{ name:'Demon Lord Core (theoretical)', rarity:'unique', note:'Unknown. No demon lord has ever been permanently defeated.' }, { name:'Seal of Abyss', rarity:'unique', note:'Fragment of demonic authority – can command lesser demons if used' }]
  };
  entries.push(demonLord);

  // ========================
  // ADDITIONAL ENTRIES: Abyssal Wyrm, Demon Gate, Iz'gon (Retired)
  // ========================
  const abyssalWyrm = {
    id: 'abyssal_wyrm',
    name: 'Abyssal Wyrm',
    sub: 'Ancient Demon · Cataclysm Beast',
    rank: 'SS',
    ibg: '#4a2a1a',
    icon: '🐉',
    size: '~30 m long, leviathan of shadow',
    biomes: ['Abyssal Depths','Demon Realm Core'],
    intel: 98,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Burst','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'An ancient, serpentine demon that dwells in the deepest abyssal trenches. A living calamity, capable of causing earthquakes, tidal waves of shadow, and consuming entire fortresses. Rarely surfaces, but when it does, entire regions are evacuated.',
    stats: { HP: 28743, Damage: 19873, Defense: 16842, Aggression: 21473, Speed: 287, Mana: 12473, 'Abyssal Roar': 24783, 'Shadow Swallow': 22874, 'Terra Ruptor': 21483, Threat: 26743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Abyssal Roar':'#d32f2f', 'Shadow Swallow':'#800080', 'Terra Ruptor':'#ffa000', Threat:'#d32f2f' },
    weak: ['Divine weapons','Holy (very high tier)','Territory removal'],
    res: ['All physical','All elemental (except holy)','Darkness','Fear'],
    ab: ['Abyssal Roar (AoE fear, high damage, destroys structures)', 'Shadow Swallow (consumes a target up to Diamond rank, requires save)', 'Terra Ruptor (creates fissures, sinkholes, terrain changes)'],
    warn: 'Abyssal Wyrm sightings are kingdom-level emergencies. Diamond-rank parties required; Platinum is considered inadequate.',
    loot: [{ name:'Wyrm Scale (legendary)', rarity:'unique', note:'Each scale is shield-sized – used in legendary armor' }, { name:'Abyssal Core', rarity:'unique', note:'Beats with darkness – can power city-sized dark rituals' }]
  };
  entries.push(abyssalWyrm);

  // Special: Iz'gon (Retired Right Hand)
  const izgonBestiary = {
    id: 'izgon_bestiary',
    name: 'Iz\'gon (Retired)',
    sub: 'Former Right Hand · Citizen',
    rank: 'SS',
    ibg: '#5e2a2a',
    icon: '😈',
    size: '~2.11 m, currently relaxed',
    biomes: ['None – resides in human kingdom as citizen'],
    intel: 412,
    tags: { behavior: ['Neutral','Passive'], combat: ['Theoretical'], intelligence: ['Sentient'], interaction: ['Civilian'] },
    desc: 'Iz\'gon was the Demon Lord\'s Right Hand – the Hand. He voluntarily left the demon realm, finding dark mundanity tedious. He registered as a citizen in the human kingdom and has not demonstrated his full capabilities since. Guild assessors classify him as "~Diamond" based on minimal observation. This is a comfortable fiction. His true rank is SS, equal to the Demon Lord alone. He simply has chosen to use none of that power. He relaxes, buys food, naps on benches. He is the most dangerous entity in the kingdom, and he has no interest in proving it.',
    stats: { HP: 8743, Damage: 7842, Defense: 6743, Aggression: 124, Speed: 487, Mana: 6842, 'Retired': 0, 'True Power': 11247, 'Relaxed': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Retired':'#00bcd4', 'True Power':'#d32f2f', 'Relaxed':'#ffa000', Threat:'#607d8b' },
    weak: ['None (inactive)','If provoked: holy (divine-level)','Boredom'],
    res: ['All (when active)','Poison','Fear','Pain','Death'],
    ab: [
      'True power: SS rank combat capability when active (which is never)',
      'Retired status: will not engage in combat unless directly threatened',
      'Citizen registration: officially "~Diamond" based on minimal observation',
      'The Hand\'s authority: former position still carries weight; Demon Lord has not appointed replacement',
      'Peaceful existence: will walk away from confrontation unless absolutely necessary'
    ],
    warn: 'Do not provoke Iz\'gon. The guild\'s "~Diamond" rating is a polite fiction. He is not weaker than the Demon Lord. He simply does not care to demonstrate it. Leave him to his naps.',
    loot: [{ name:'None', rarity:'unique', note:'Iz\'gon carries nothing of value and leaves no remains. He is, by choice, unremarkable.' }]
  };
  entries.push(izgonBestiary);

  // ========================
  // ASMODEUS (Lord of the Nine Hells, Archdevil)
  // ========================
  const asmodeus = {
    id: 'asmodeus',
    name: 'Asmodeus',
    sub: 'Lord of the Nine Hells · The Prince of Darkness',
    rank: 'SSS',
    ibg: '#3a1a1a',
    icon: '👑',
    size: 'Variable (appears as a handsome, tall humanoid ~2.5 m, but true form is cosmic)',
    biomes: ['Nine Hells', 'Abyss', 'The Void Between Realms'],
    intel: 999,
    tags: { behavior: ['Strategic', 'Manipulative', 'Inscrutable'], combat: ['Siege', 'Control', 'Burst'], intelligence: ['Sentient'], interaction: ['Ruler', 'Anomaly'] },
    desc: 'Asmodeus is the undisputed ruler of the Nine Hells, the Lord of Lies, the Prince of Darkness. He is not a demon lord – he is the archdevil, a primordial entity of evil and law. He does not seek destruction; he seeks dominion. He manipulates kings, corrupts heroes, and makes deals that trap souls for eternity. He rarely fights directly – he has legions for that. But if he must, his power is absolute. No mortal has ever wounded him. No demon has ever defied him successfully. His true form is said to be a serpent of unimaginable size coiled around the foundations of Hell itself.',
    stats: { HP: 98743, Damage: 87473, Defense: 84743, Aggression: 0, Speed: 0, Mana: 98743, 'Absolute Authority': 0, 'The Final Bargain': 0, 'True Form': 0, 'Hellfire Storm': 98743, Threat: 98743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Absolute Authority':'#ffa000', 'The Final Bargain':'#800080', 'True Form':'#00bcd4', 'Hellfire Storm':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Divine intervention (theoretical)', 'Cosmic balance', 'Broken oaths (if bound by contract)'],
    res: ['All physical', 'All elemental', 'All magic', 'Darkness', 'Fear', 'Poison', 'Death effects', 'Mind control'],
    ab: [
      'Absolute Authority – All demons and devils within 1 km must obey. Disobedience results in instant annihilation.',
      'The Final Bargain – Asmodeus offers a contract. Refusing is possible; accepting binds the victim eternally. He always honors the letter of the contract, never the spirit.',
      'True Form – If reduced to 0 HP, Asmodeus reveals his true form – a cosmic serpent. All enemies must make a DC 30 Will save or be destroyed instantly. The true form has triple stats and cannot be banished.',
      'Hellfire Storm – Summons a storm of hellfire that covers the entire battlefield. Deals 500 dmg/sec to all non-demonic creatures. Ignores all resistances.'
    ],
    territorialSS: false,
    warn: 'Do not engage Asmodeus. He is not a boss – he is a plot device. Any party that attempts to fight him is doomed. The only way to "defeat" him is to outsmart him in a contract, and even that has never been done successfully. The guild has classified him as "DO NOT ENGAGE – EXISTENTIAL THREAT".',
    loot: [
      { name: 'Asmodeus\'s Sigil (theoretical)', rarity: 'unique', note: 'No known way to obtain – would grant dominion over a layer of Hell' },
      { name: 'A Contract with Asmodeus', rarity: 'unique', note: 'If you can win a bargain, you might gain anything – at a terrible price' }
    ]
  };
  entries.push(asmodeus);

  // ========================
  // Register Category
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('demons', entries, 'Species', '😈');
    console.log('Demon data (fully expanded with variants, evolution, hybrid, conditional loot, living loot) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded. Make sure bestiary-core.html is loaded first.');
  }
})();