// dungeon-data.js (Sorted by Rank: Lowest to Highest)
(function() {
  const entries = [];

  // ========================
  // 1. TRAP FLOOR (Rank: D)
  // ========================
  const trapFloor = {
    id: 'trap_floor',
    name: 'Trap Floor',
    sub: 'Dungeon Hazard · Pit Trap',
    rank: 'D',
    ibg: '#8e8e7e',
    icon: '⬇️',
    size: 'Variable, typically 2x2 m',
    biomes: ['Any dungeon corridor'],
    intel: 1,
    tags: { behavior: ['Passive'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'A trap floor is a section of ground that gives way when stepped on, dropping victims into a pit below. May be spiked, contain monsters, or lead to a lower level.',
    stats: { HP: 50, Damage: 0, Defense: 0, Aggression: 0, Speed: 0, Mana: 0, 'Fall Damage': 200, 'Pit Depth': 10, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Fall Damage':'#d32f2f', 'Pit Depth':'#00bcd4', Threat:'#607d8b' },
    weak: ['Detection (disable)', 'Bypass', 'Rope'],
    res: ['Physical (once triggered)'],
    ab: ['Trigger on weight (when stepped on, collapses)', 'Fall damage (deals 10d6 fall damage)', 'Pit (separates party, may lead to another encounter)'],
    loot: [{ name:'None', rarity:'common', note:'Just a pit.' }]
  };
  entries.push(trapFloor);

  // ========================
  // 2. ANIMATED ARMOR (Rank: D)
  // ========================
  const animatedArmor = {
    id: 'animated_armor',
    name: 'Animated Armor',
    sub: 'Dungeon Construct · Sentry',
    rank: 'D',
    ibg: '#9e9e8e',
    icon: '🛡️',
    size: '~1.8 m, empty plate armor with glowing eyes',
    biomes: ['Castle Dungeon', 'Aurenveil Dungeon', 'Magical Ruins', 'Guardian Chamber'],
    intel: 14,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Defensive'], intelligence: ['Instinctive'], interaction: ['Guardian'] },
    desc: 'Animated armor is a construct that moves and fights as if worn by an invisible soldier. They are immune to critical hits and resistant to physical damage.',
    stats: { HP: 187, Damage: 168, Defense: 247, Aggression: 187, Speed: 87, Mana: 43, 'Sword Slash': 187, 'Shield Bash': 168, 'Construct Resilience': 0, Threat: 247 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sword Slash':'#ffa000', 'Shield Bash':'#d32f2f', 'Construct Resilience':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Bludgeoning', 'Rust magic', 'Disable magic'],
    res: ['Piercing', 'Slashing', 'Poison', 'Fear', 'Critical hits'],
    ab: ['Sword slash (basic attack)', 'Shield bash (stun 1 sec)', 'Construct resilience (immune to bleed, poison, fear, critical hits)'],
    loot: [{ name:'Animated Plate', rarity:'common', note:'Can be re-enchanted as a stationary guardian' }]
  };
  entries.push(animatedArmor);

  // ========================
  // 3. THE GRAY GASP CELLAR (Named Dungeon - special rank)
  // ========================
  const grayGaspCellar = {
    id: 'gray_gasp_cellar',
    name: 'The Gray Gasp Cellar',
    sub: 'Abandoned Village · Mist-shrouded Cellar',
    rank: 'E to A',
    ibg: '#6e6e7e',
    icon: '🏚️',
    size: '35 floors, entrance in abandoned village cellar',
    biomes: ['Abandoned Village', 'Mistwood', 'Forest Edge'],
    intel: 0,
    tags: { behavior: ['Passive', 'Territorial'], combat: ['Swarm', 'Control'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'The Gray Gasp Cellar is a mid-tier dungeon discovered by Maxwell Anthor. Located 3 km from the kingdom, it has 35 floors ranging from E to A rank difficulty. Despite the ominous atmosphere, it is one of the least threatening dungeons relative to its size.',
    stats: { 'Floors': 35, 'Difficulty Range': 'E to A', 'Minimum Recommended Rank': 'Iron', 'Maximum Recommended Rank': 'Gold', 'Known Bosses': 1, 'Discovery': 'Maxwell Anthor' },
    bars: { 'Floors':'#ffa000', 'Difficulty Range':'#d32f2f', 'Minimum Recommended Rank':'#00bcd4', 'Maximum Recommended Rank':'#800080', 'Known Bosses':'#e91e63', 'Discovery':'#8bc34a' },
    weak: ['Standard dungeon tactics', 'Persistent exploration'],
    res: ['Misdirection', 'Mist veil'],
    ab: ['Mist veil (perpetual mist reduces visibility)', 'Resigned guardian (final boss on floor 35)', 'Consistent difficulty curve (floors scale gradually)'],
    warn: 'The Gray Gasp Cellar is not the most dangerous dungeon, but do not underestimate it. Floor 25 and below require Gold-rank preparedness.',
    loot: [{ name:'Mist-touched Relic', rarity:'uncommon', note:'Found on deeper floors – used in fog-based enchantments' }],
    variants: [
      {
        key: 'maxwell_note',
        label: '📜 Maxwell\'s Note',
        rank: '?',
        ibg: '#5e6e5e',
        icon: '📜',
        sub: 'Expedition Log · First Survey',
        size: 'Document',
        desc: 'Maxwell\'s personal notes on the Gray Gasp Cellar. He describes the dungeon as "oddly calm, like a held breath."',
        stats: { 'Entry Date': 'Unknown', 'Expedition Duration': '~3 days', 'Floors Explored': 'All 35', 'Maxwell\'s Verdict': 'Safe for Iron and Gold ranks' },
        bars: { 'Entry Date':'#ffa000', 'Expedition Duration':'#00bcd4', 'Floors Explored':'#d32f2f', 'Maxwell\'s Verdict':'#8bc34a' },
        weak: ['N/A'],
        res: ['N/A'],
        ab: ['First-hand account', 'Recommended training dungeon'],
        warn: 'Maxwell\'s notes are archived at the guild.',
        loot: [{ name:'Maxwell\'s Field Notes (copy)', rarity:'uncommon', note:'A transcribed copy – contains maps and observations.' }]
      }
    ]
  };
  entries.push(grayGaspCellar);

  // ========================
  // 4. MIMIC (Rank: C)
  // ========================
  const mimic = {
    id: 'mimic',
    name: 'Mimic',
    sub: 'Dungeon Lurer · Ambush Predator',
    rank: 'C',
    ibg: '#8e7a5e',
    icon: '🎁',
    size: '~1 m wide, can reshape, typically chest-sized',
    biomes: ['Any dungeon', 'Aurenveil Dungeon', 'Abandoned Treasury', 'Hidden Rooms'],
    intel: 78,
    tags: { behavior: ['Aggressive', 'Opportunistic'], combat: ['Ambush', 'Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Mimics are shapeshifters that appear as treasure chests, doors, or other dungeon features. They attack when prey touches them, using adhesive tongues to pull victims in and crushing them.',
    stats: { HP: 487, Damage: 398, Defense: 312, Aggression: 587, Speed: 143, Mana: 87, 'Adhesive Tongue': 587, 'Crushing Bite': 478, 'Mimic Shape': 0, Threat: 587 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Adhesive Tongue':'#ffa000', 'Crushing Bite':'#d32f2f', 'Mimic Shape':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Cold', 'True sight'],
    res: ['Physical', 'Poison', 'Fear'],
    ab: ['Adhesive tongue (pull target into melee range, immobilize 2 sec)', 'Crushing bite (high damage, ignores 30% armor)', 'Mimic shape (indistinguishable from real object)'],
    loot: [{ name:'Mimic Glue', rarity:'uncommon', note:'Adhesive used in traps' }, { name:'Mimic Tooth', rarity:'common', note:'Sharp, used in daggers' }]
  };
  entries.push(mimic);

  // ========================
  // 5. DUNGEON SPIDER (Rank: C)
  // ========================
  const dungeonSpider = {
    id: 'dungeon_spider',
    name: 'Dungeon Spider',
    sub: 'Dungeon Vermin · Ambusher',
    rank: 'C',
    ibg: '#6e6e5e',
    icon: '🕷️',
    size: '~1.5 m legspan, hairy, venomous',
    biomes: ['Web-filled Chambers', 'Aurenveil Dungeon', 'Caverns', 'Ruins'],
    intel: 38,
    tags: { behavior: ['Aggressive', 'Opportunistic'], combat: ['Ambush', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Dungeon spiders weave sticky webs that trap prey. They descend from ceilings to bite with paralytic venom.',
    stats: { HP: 387, Damage: 298, Defense: 247, Aggression: 478, Speed: 387, Mana: 47, 'Web Shot': 587, 'Venom Bite': 478, 'Ceiling Drop': 0, Threat: 587 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Web Shot':'#ffa000', 'Venom Bite':'#d32f2f', 'Ceiling Drop':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Cutting webs', 'Anti-venom'],
    res: ['Poison', 'Fear'],
    ab: ['Web shot (ensnares target, immobilizes 5 sec)', 'Venom bite (paralyzes for 10 sec if save failed)', 'Ceiling drop (ambush from above, free attack)'],
    loot: [{ name:'Spider Silk', rarity:'common', note:'Very strong, used in ropes' }, { name:'Venom Gland', rarity:'uncommon', note:'Weak paralytic' }]
  };
  entries.push(dungeonSpider);

  // ========================
  // 6. LIVING WALL (Rank: C)
  // ========================
  const livingWall = {
    id: 'living_wall',
    name: 'Living Wall',
    sub: 'Dungeon Hazard · Trapping Entity',
    rank: 'C',
    ibg: '#7e7e6e',
    icon: '🧱',
    size: '~3 m wide, 3 m tall, stone face',
    biomes: ['Narrow Corridors', 'Secret Passages', 'Aurenveil Dungeon'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'A living wall appears as a normal stone wall until adventurers pass. It then extends pseudopods to grapple and pull victims into its surface, absorbing them.',
    stats: { HP: 587, Damage: 387, Defense: 487, Aggression: 687, Speed: 47, Mana: 87, 'Grapple': 687, 'Crush': 587, 'Absorb': 487, Threat: 687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Grapple':'#ffa000', 'Crush':'#d32f2f', 'Absorb':'#800080', Threat:'#d32f2f' },
    weak: ['Bludgeoning', 'Earth magic', 'Destroy structural support'],
    res: ['Piercing', 'Slashing', 'Fire', 'Cold'],
    ab: ['Grapple (immobilizes target, pulls toward wall)', 'Crush (deals heavy damage to grappled target)', 'Absorb (target disappears into wall, removed from combat)'],
    loot: [{ name:'Living Stone', rarity:'rare', note:'Still twitches, can create minor animated constructs' }]
  };
  entries.push(livingWall);

  // ========================
  // 7. GELATINOUS CUBE (Rank: B)
  // ========================
  const gelatinousCube = {
    id: 'gelatinous_cube',
    name: 'Gelatinous Cube',
    sub: 'Dungeon Ooze · Hazard Entity',
    rank: 'B',
    ibg: '#7eaa6e',
    icon: '🧊',
    size: '~3 m cube, transparent, slowly moving',
    biomes: ['Deep Dungeon', 'Aurenveil Dungeon', 'Corridor Trap', 'Ancient Sewers'],
    intel: 2,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Siege'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'A Gelatinous Cube is a near-invisible ooze that fills corridors from floor to ceiling. It slowly advances, engulfing anything in its path.',
    stats: { HP: 1247, Damage: 587, Defense: 987, Aggression: 0, Speed: 47, Mana: 87, 'Engulf': 1247, 'Acid Dissolve': 987, 'Transparent': 0, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Engulf':'#ffa000', 'Acid Dissolve':'#d32f2f', 'Transparent':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold', 'Fire', 'Lightning'],
    res: ['Physical (immune to slashing/piercing)', 'Poison', 'Acid', 'Fear'],
    ab: ['Engulf (target inside cube takes 50 dmg/sec, cannot act unless freed)', 'Acid dissolve (damages armor and weapons over time)', 'Transparent (DC 15 Perception to notice)'],
    loot: [{ name:'Gelatinous Core', rarity:'uncommon', note:'Can be used as a slow-dissolving acid trap' }]
  };
  entries.push(gelatinousCube);

  // ========================
  // 8. MINOTAUR (Rank: A)
  // ========================
  const minotaur = {
    id: 'minotaur',
    name: 'Minotaur',
    sub: 'Dungeon Guardian · Labyrinth Warden',
    rank: 'A',
    ibg: '#8e6e3e',
    icon: '🐂',
    size: '~2.8 m tall, bull head, humanoid body, massive axe',
    biomes: ['Labyrinth', 'Aurenveil Dungeon', 'Maze Dungeon', 'Underground Complex'],
    intel: 87,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Minotaurs are powerful guardians of labyrinthine dungeons. They know every twist and turn of their maze and can charge through walls.',
    stats: { HP: 4873, Damage: 3987, Defense: 3473, Aggression: 5874, Speed: 387, Mana: 487, 'Gore Charge': 5874, 'Labyrinth Sense': 0, 'Roar': 3247, Threat: 5874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Gore Charge':'#ffa000', 'Labyrinth Sense':'#00bcd4', 'Roar':'#800080', Threat:'#d32f2f' },
    weak: ['Puzzles', 'Ranged kiting', 'Holy weapons'],
    res: ['Physical', 'Darkness', 'Fear', 'Poison'],
    ab: ['Gore charge (line attack, knocks back, ignores 50% armor)', 'Labyrinth sense (cannot be lost in maze)', 'Roar (AoE fear, disorients for 5 seconds)'],
    loot: [{ name:'Minotaur Horn', rarity:'rare', note:'Used in horned helmets and strength potions' }, { name:'Labyrinth Key', rarity:'rare', note:'Opens maze shortcuts' }]
  };
  entries.push(minotaur);

  // ========================
  // 9. IRON GOLEM (Rank: A)
  // ========================
  const ironGolem = {
    id: 'iron_golem',
    name: 'Iron Golem',
    sub: 'Dungeon Siege Construct',
    rank: 'A',
    ibg: '#8e8e9e',
    icon: '🤖',
    size: '~4.5 m tall, massive iron body',
    biomes: ['Forge Dungeon', 'Aurenveil Dungeon', 'Guardian Chamber', 'Treasure Vault'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Defensive'], intelligence: ['Instinctive'], interaction: ['Guardian'] },
    desc: 'Iron golems are enormous constructs made of pure iron. They are nearly immune to magic and physical attacks.',
    stats: { HP: 4873, Damage: 3987, Defense: 4873, Aggression: 5874, Speed: 87, Mana: 0, 'Slam': 5874, 'Poison Breath': 3247, 'Shockwave': 4873, Threat: 5874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Slam':'#ffa000', 'Poison Breath':'#d32f2f', 'Shockwave':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Rust magic', 'Corrosive acid', 'Overload (electricity)'],
    res: ['Magic (90% resistance)', 'Physical (non-bludgeoning)', 'Poison', 'Fear'],
    ab: ['Slam (AoE, knocks back)', 'Poison breath (cone, 30 dmg/sec for 10 sec)', 'Shockwave (stuns all within 10 m, 3 sec)'],
    loot: [{ name:'Iron Golem Core', rarity:'rare', note:'Heart of a construct – used in high-tier golem crafting' }, { name:'Golem Plate', rarity:'rare', note:'Heavy armor plating' }]
  };
  entries.push(ironGolem);

  // ========================
  // 10. SPIDER QUEEN (Rank: A)
  // ========================
  const spiderQueen = {
    id: 'spider_queen',
    name: 'Spider Queen',
    sub: 'Dungeon Boss · Arachnid Matriarch',
    rank: 'A',
    ibg: '#6e5e4e',
    icon: '🕷️',
    size: '~3 m legspan, bloated abdomen',
    biomes: ['Web Chamber', 'Aurenveil Dungeon', 'Deep Nest'],
    intel: 87,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Swarm'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'The Spider Queen rules over a nest of dungeon spiders. She lays eggs that hatch into young spiders during combat.',
    stats: { HP: 3874, Damage: 2874, Defense: 2473, Aggression: 4874, Speed: 287, Mana: 587, 'Web Spray': 4874, 'Egg Sac': 0, 'Venom Bite': 3874, Threat: 4874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Web Spray':'#ffa000', 'Egg Sac':'#d32f2f', 'Venom Bite':'#800080', Threat:'#d32f2f' },
    weak: ['Fire', 'Severing egg sacs', 'Anti-venom'],
    res: ['Poison', 'Web'],
    ab: ['Web spray (large area, immobilizes, can block passage)', 'Egg sac (spawns 1-3 dungeon spiders every 30 seconds)', 'Venom bite (paralyzes, high damage)'],
    loot: [{ name:'Spider Queen Venom', rarity:'rare', note:'Potent paralytic' }, { name:'Queen Web', rarity:'rare', note:'Extremely strong, used in magical ropes' }]
  };
  entries.push(spiderQueen);

  // ========================
  // 11. OOZE KING (Rank: S)
  // ========================
  const oozeKing = {
    id: 'ooze_king',
    name: 'Ooze King',
    sub: 'Dungeon Ooze Boss · Gelatinous Monstrosity',
    rank: 'S',
    ibg: '#7eaa6e',
    icon: '🟢',
    size: '~6 m diameter, acidic, slowly moves',
    biomes: ['Deep Dungeon', 'Aurenveil Dungeon', 'Sewer Complex', 'Ooze Garden'],
    intel: 14,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The Ooze King is a massive gelatinous creature that rules over lesser oozes. It can split into multiple smaller oozes when damaged, regenerate, and absorb equipment.',
    stats: { HP: 7847, Damage: 5874, Defense: 4873, Aggression: 6874, Speed: 67, Mana: 487, 'Split': 0, 'Absorb Equipment': 0, 'Regenerate': 0, Threat: 6874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Split':'#ffa000', 'Absorb Equipment':'#d32f2f', 'Regenerate':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold', 'Fire', 'Lightning'],
    res: ['Acid', 'Poison', 'Physical (immune to slashing/piercing)'],
    ab: ['Split (when reduced to 50% HP, splits into 2 large oozes, each 50% HP)', 'Absorb equipment (contact destruction of armor/weapons, item save possible)', 'Regenerate (heals 100 HP/sec unless fire or cold damage applied)'],
    loot: [{ name:'Ooze King Core', rarity:'unique', note:'Can be used to create an indestructible but slow moving acid trap' }]
  };
  entries.push(oozeKing);

  // ========================
  // 12. FORGOTTEN KING (Rank: S)
  // ========================
  const forgottenKing = {
    id: 'forgotten_king',
    name: 'Forgotten King',
    sub: 'Dungeon Boss · Undead Monarch',
    rank: 'S',
    ibg: '#5e4a4a',
    icon: '👑',
    size: '~2.2 m, skeletal, wearing rusted crown',
    biomes: ['Royal Crypt', 'Aurenveil Dungeon', 'Throne Room'],
    intel: 187,
    tags: { behavior: ['Territorial', 'Aggressive'], combat: ['Siege', 'Control'], intelligence: ['Strategic'], interaction: ['Ruler'] },
    desc: 'The Forgotten King is an ancient undead ruler whose dungeon is his former castle. He commands the undead within and wields a cursed sword.',
    stats: { HP: 7847, Damage: 6874, Defense: 5874, Aggression: 8743, Speed: 287, Mana: 4873, 'Cursed Blade': 8743, 'Summon Knights': 0, 'Life Drain': 6874, Threat: 8743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Cursed Blade':'#d32f2f', 'Summon Knights':'#800080', 'Life Drain':'#880e4f', Threat:'#d32f2f' },
    weak: ['Holy', 'Crown removal (weakens)', 'Sunlight (inaccessible in dungeon)'],
    res: ['Darkness', 'Fear', 'Poison', 'Physical'],
    ab: ['Cursed blade (inflicts slow-healing wound, dispels buffs)', 'Summon knights (calls 4 spectral knights for 1 minute)', 'Life drain (steals 200 HP from target, heals King)'],
    loot: [{ name:'Forgotten Crown', rarity:'unique', note:'Cursed, but can control undead if purified' }, { name:'Royal Greatsword', rarity:'rare', note:'Well-forged, may be haunted' }]
  };
  entries.push(forgottenKing);
  
  // ========================
  // NAMED DUNGEON: AURENVEIL DUNGEON (Formerly City Dungeon)
  // ========================
  const aurenveilDungeon = {
    id: 'aurenveil_dungeon',
    name: 'Aurenveil Dungeon',
    sub: 'Dungeon Ecosystem · Kingdom Resource',
    rank: 'S (estimated)',
    ibg: '#8e8e7e',
    icon: '🏛️',
    size: '40 known floors, entrance beneath the city',
    biomes: ['Kingdom of Aurenveil', 'Under-City'],
    intel: 87,
    tags: { behavior: ['Passive', 'Territorial'], combat: ['Swarm', 'Control'], intelligence: ['Aware'], interaction: ['Environmental'] },
    desc: 'The Aurenveil Dungeon (formerly called the City Dungeon) is a unique phenomenon: a dungeon that the kingdom of Aurenveil was built around, either intentionally to control its monster population or organically as the city expanded. It is a living ecosystem that spawns monsters at a manageable rate, providing a steady source of resources and quests for adventurers. The guild regulates access, and the dungeon is considered a civic asset – dangerous, but profitable. Its core is deep beneath the city, and if it were destroyed, the city would lose its primary resource economy.',
    stats: {
      'Floors Mapped': 40,
      'Boss Floors': '10, 20, 30, 40',
      'Difficulty Tier': 'B to S',
      'Spawn Rate': 'Moderate (regulated)',
      'Treasure Value': 'High',
      'Confirmed Bosses': 4,
      'Core Integrity': 18743,
      'Corruption Level': 'Low'
    },
    bars: { 'Floors Mapped':'#ffa000', 'Boss Floors':'#d32f2f', 'Difficulty Tier':'#e91e63', 'Spawn Rate':'#00bcd4', 'Treasure Value':'#8bc34a', 'Confirmed Bosses':'#800080', 'Core Integrity':'#4caf50', 'Corruption Level':'#e91e63' },
    weak: ['Core destruction (catastrophic)', 'Over-mining', 'Neglect'],
    res: ['Physical', 'Magical'],
    ab: [
      'Monster spawn (generates creatures appropriate to depth: slimes, goblins, undead, orcs, etc.)',
      'Resource yield (produces rare materials, ores, and magical items over time)',
      'Civic control (guild-regulated expeditions keep population from overrunning city)',
      'Core stability (if core intact, dungeon regenerates slowly)',
      'Boss chambers (every 10 floors contains a powerful guardian; defeating it unlocks the next tier)'
    ],
    warn: 'The Aurenveil Dungeon is not a single creature – it is a living institution. Adventurers are encouraged to explore it, but harming the core would devastate the kingdom\'s economy.',
    loot: [{ name:'Dungeon Tax', rarity:'unique', note:'The guild collects a portion of all resources found. Killing the dungeon would cause riots.' }],
    variants: [
      {
        key: 'deep_core',
        label: '🌋 Deep Core (Theoretical)',
        rank: '? Unknown',
        ibg: '#7e4e4e',
        icon: '💠',
        sub: 'Ancient Core · Primordial Dungeon (Unconfirmed)',
        size: 'Unknown, believed to extend far into the abyss',
        desc: 'Deep beneath Aurenveil, beyond floor 40, the ancient core is vastly more powerful. It has never been fully explored, and monsters from deeper levels occasionally surface, requiring Platinum-rank responses. The guild has NO confirmed data on its actual threat level.',
        stats: {
          'Estimated Floors': '40+ (unconfirmed)',
          'Theoretical Difficulty': 'S to ???',
          'Spawn Rate': 'Extreme (unregulated, theoretical)',
          'Treasure Value': 'Legendary (speculative)',
          'Confirmed Bosses': 'None',
          'Core Integrity': 'Unknown',
          'Corruption Level': 'Critical (estimated)'
        },
        bars: { 'Estimated Floors':'#ffa000', 'Theoretical Difficulty':'#d32f2f', 'Spawn Rate':'#00bcd4', 'Treasure Value':'#8bc34a', 'Confirmed Bosses':'#800080', 'Core Integrity':'#4caf50', 'Corruption Level':'#e91e63' },
        weak: ['Sealed magic', 'Divine intervention (theoretical)'],
        res: ['All (estimated)'],
        ab: ['Deep spawn (generates high-tier monsters, up to unconfirmed rank)', 'Corruption risk (if seals weaken, deep monsters emerge)', 'Sealed levels (locked by ancient magic, unbreached)'],
        warn: 'No confirmed data. All information is speculative. Do not attempt to breach the seals – the result could be catastrophic.',
        loot: [{ name:'Deep Core Fragment (theoretical)', rarity:'unique', note:'No confirmed drops. Purely speculative.' }]
      }
    ]
  };
  entries.push(aurenveilDungeon);

  // ========================
  // 14. CORRUPTED GUARDIAN (Rank: SS)
  // ========================
  const corruptedGuardian = {
    id: 'corrupted_guardian',
    name: 'Corrupted Guardian',
    sub: 'Dungeon Boss · Abyss-Tainted',
    rank: 'SS',
    ibg: '#5e4a4a',
    icon: '👁️',
    size: '~5 m tall, twisted flesh and shadow armor',
    biomes: ['Cursed Dungeon', 'Corrupted Core Chamber'],
    intel: 187,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Control'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'A former guardian of a dungeon that has been corrupted by abyssal or demonic energy. It gains decay aura, fear effects, and insanity-causing whispers.',
    stats: { HP: 9847, Damage: 8743, Defense: 7423, Aggression: 11247, Speed: 387, Mana: 8743, 'Decaying Strike': 11247, 'Fear Aura': 0, 'Whispers': 7423, Threat: 11247 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Decaying Strike':'#d32f2f', 'Fear Aura':'#800080', 'Whispers':'#ffa000', Threat:'#d32f2f' },
    weak: ['Purification', 'Holy', 'Exorcism'],
    res: ['Physical', 'Darkness', 'Fear', 'Poison', 'Curse'],
    ab: ['Decaying strike (inflicts rot, 100 dmg/sec for 10 sec, cannot be healed)', 'Fear aura (constant fear effect, reduces accuracy by 30%)', 'Whispers (confusion, may target allies)'],
    loot: [{ name:'Corrupted Core', rarity:'unique', note:'Can be purified into a powerful artifact or used for dark rituals' }]
  };
  entries.push(corruptedGuardian);

  // ========================
  // 15. BEHOLDER (Rank: SS)
  // ========================
  const beholder = {
    id: 'beholder',
    name: 'Beholder',
    sub: 'Dungeon Tyrant · Aberration',
    rank: 'SS',
    ibg: '#7e4e8e',
    icon: '👁️',
    size: '~2 m diameter, floating, central eye, many eyestalks',
    biomes: ['Deep Dungeon', 'Abysmal Dungeon', 'Aberrant Lair', 'Obsidian Chamber'],
    intel: 412,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Burst'], intelligence: ['Strategic'], interaction: ['Ruler'] },
    desc: 'A beholder is a floating orb of death with a central anti-magic eye and ten eyestalks that each fire different magical rays.',
    stats: { HP: 9847, Damage: 8743, Defense: 7423, Aggression: 11247, Speed: 187, Mana: 12473, 'Central Eye': 0, 'Eyestalk Rays': 11247, 'Levitation': 0, Threat: 11247 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Central Eye':'#00bcd4', 'Eyestalk Rays':'#d32f2f', 'Levitation':'#ffa000', Threat:'#d32f2f' },
    weak: ['Anti-magic', 'Dispel', 'Cover (blocks ray line of sight)'],
    res: ['Magic (partial evasion)', 'Fear', 'Poison'],
    ab: ['Central Eye (anti-magic cone)', 'Eyestalk rays (3 random rays: paralyze, petrify, fear, charm, slow, telekinesis, disintegrate, death)', 'Levitation (permanent flight)'],
    warn: 'Beholders are paranoid geniuses with lairs full of traps and minions. Do not engage without protection from death magic.',
    loot: [{ name:'Beholder Eyestalk', rarity:'unique', note:'Can be used to craft a wand of a specific ray' }, { name:'Beholder Core', rarity:'unique', note:'Pulsing with raw magic' }]
  };
  entries.push(beholder);

  // ========================
  // 16. ABYSMAL DUNGEON (Named Dungeon - Rank: SSS estimated)
  // ========================
  const abysmalDungeon = {
    id: 'abysmal_dungeon',
    name: 'Abysmal Dungeon',
    sub: 'Distant Dungeon · Uncharted Cataclysm',
    rank: 'SSS (estimated)',
    ibg: '#3a2a2a',
    icon: '🌋',
    size: 'Unknown, entrance deep within a ravine',
    biomes: ['Distant Ravine'],
    intel: 0,
    tags: { behavior: ['Territorial', 'Unknown'], combat: ['Siege', 'Control'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'Located hundreds of kilometers from the kingdom, deep within a ravine so remote that almost no one has seen it. Discovered by Maxwell Anthor. The entrance alone emits intense pressure that Gold-rank adventurers cannot withstand.',
    stats: { 'Floors Mapped': '1 (partial)', 'Minimum Entry Requirement': 'Diamond', 'First Floor Difficulty': 'S', 'Spawn Rate': 'Extreme', 'Confirmed Bosses': 'None', 'Corruption Level': 'Critical' },
    bars: { 'Floors Mapped':'#ffa000', 'Minimum Entry Requirement':'#e91e63', 'First Floor Difficulty':'#d32f2f', 'Spawn Rate':'#00bcd4', 'Confirmed Bosses':'#800080', 'Corruption Level':'#e91e63' },
    weak: ['Unknown'],
    res: ['Unknown'],
    ab: ['Pressure aura (entrance alone is lethal to Gold-rank and below)', 'Uncharted territory (no maps, no data)', 'Unknown spawn mechanics'],
    warn: 'DO NOT ATTEMPT ENTRY. Only one Diamond-rank adventurer has entered and returned.',
    loot: [{ name:'No loot data', rarity:'unique', note:'Maxwell returned with nothing but injuries and information.' }],
    variants: [
      {
        key: 'maxwell_report',
        label: '📜 Maxwell\'s Report',
        rank: '? Unknown',
        ibg: '#5e4a3a',
        icon: '📜',
        sub: 'Expedition Log · First Contact',
        size: 'Document',
        desc: 'The only known information about the Abysmal Dungeon comes from Maxwell\'s expedition report.',
        stats: { 'Expedition Duration': '~8 hours', 'Floors Explored': '1 (partial)', 'Creatures Encountered': 2, 'Injuries Sustained': 'Severe' },
        bars: { 'Expedition Duration':'#00bcd4', 'Floors Explored':'#d32f2f', 'Creatures Encountered':'#800080', 'Injuries Sustained':'#e91e63' },
        weak: ['N/A'],
        res: ['N/A'],
        ab: ['First-hand account', 'Guild classification (SSS estimated)', 'Quarantine zone'],
        warn: 'The guild has banned further expeditions.',
        loot: [{ name:'Maxwell\'s Expedition Notes', rarity:'unique', note:'Contained in the guild archives.' }]
      }
    ]
  };
  entries.push(abysmalDungeon);

  // ========================
  // 17. SONIC RABBIT (Abysmal Creature - Rank: S)
  // ========================
  const sonicRabbit = {
    id: 'sonic_rabbit',
    name: 'Sonic Rabbit',
    sub: 'Abysmal Dungeon · Cataclysm Hopper',
    rank: 'S',
    ibg: '#5e4a7e',
    icon: '🐇',
    size: '~0.5 m, cat-sized, purple fur, ruby forehead',
    biomes: ['Abysmal Dungeon', 'Uncharted Ravine'],
    intel: 78,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Swarm'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'The Sonic Rabbit is an S-rank creature native to the Abysmal Dungeon. Despite its small size, it is unbelievably strong and fast. It can jump across extreme distances, landing with enough force to create craters.',
    stats: { HP: 4873, Damage: 7847, Defense: 2473, Aggression: 8743, Speed: 12473, Mana: 4873, 'Crater Jump': 11247, 'Horn Ram': 9874, 'Self-Buff': 0, 'Pack Coordination': 8473, Threat: 11247 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Crater Jump':'#ffa000', 'Horn Ram':'#d32f2f', 'Self-Buff':'#00bcd4', 'Pack Coordination':'#800080', Threat:'#d32f2f' },
    weak: ['Area attacks', 'Slow effects', 'Breaking horns'],
    res: ['Physical (partial)', 'Speed debuffs (resistant)', 'Fear'],
    ab: ['Crater jump (leaps extreme distance, landing deals 500 damage in 5 m radius)', 'Horn ram (charges with horns, ignores 50% armor)', 'Self-buff (+50% damage, +50% speed for 30 seconds)', 'Pack coordination (when 3+ together, all gain +30% damage, +20% speed)'],
    warn: 'Sonic Rabbits are never alone. Do not engage a pack without Diamond-rank support.',
    loot: [{ name:'Ruby Forehead Gem', rarity:'rare', note:'Used in high-tier strength enchantments' }, { name:'Golden Claws', rarity:'rare', note:'Used in legendary weapons' }, { name:'Magic-Buffing Fur', rarity:'rare', note:'Can be woven into a cloak that grants self-buff abilities' }]
  };
  entries.push(sonicRabbit);

  // ========================
  // 18. GOLDEN DARK KNIGHT (Abysmal Creature - Rank: S)
  // ========================
  const goldenDarkKnight = {
    id: 'golden_dark_knight',
    name: 'Golden Dark Knight',
    sub: 'Abysmal Dungeon · Magic-Immortal Guardian',
    rank: 'S',
    ibg: '#8e7e3e',
    icon: '🏆',
    size: '~2.5 m tall, large shield and axe, golden-black armor',
    biomes: ['Abysmal Dungeon', 'Uncharted Ravine'],
    intel: 43,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The Golden Dark Knight is completely immune to ALL magic – debuffs, offensive spells, blinding light, purification, everything. It swings its massive axe with impossible speed and can teleport behind its target.',
    stats: { HP: 13847, Damage: 11247, Defense: 9874, Aggression: 12473, Speed: 684, Mana: 0, 'Axe Rush': 12473, 'Shield Bash': 9874, 'Teleport Behind': 0, 'Core Surge': 0, Threat: 13847 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Axe Rush':'#d32f2f', 'Shield Bash':'#ffa000', 'Teleport Behind':'#00bcd4', 'Core Surge':'#800080', Threat:'#d32f2f' },
    weak: ['Chest plate destruction (reveals core)', 'Core extraction', 'Extreme blunt force'],
    res: ['All magic (IMMUNE)', 'Physical (partial)', 'Fear', 'Poison', 'Debuffs'],
    ab: ['Axe rush (closes distance rapidly, heavy slash ignores 40% armor)', 'Shield bash (knockback, stun for 2 seconds)', 'Teleport behind (instant repositioning behind target)', 'Core surge (if core exposed, +100% damage for 10 seconds before collapsing)'],
    warn: 'Magic is completely useless against the Golden Dark Knight. Do not bring mages. Focus on breaking the chest plate with repeated heavy blows.',
    loot: [{ name:'Golden Dark Knight Core', rarity:'rare', note:'Boosts magic output 20x without exhausting the caster' }, { name:'Golden Dark Knight Axe', rarity:'rare', note:'Surprisingly light for its size' }, { name:'Golden Dark Knight Shield', rarity:'rare', note:'Nearly indestructible, resists all magic' }]
  };
  entries.push(goldenDarkKnight);

  // ========================
  // 19. DUNGEON CORE (ANOMALY)
  // ========================
  const dungeonCore = {
    id: 'dungeon_core_anomaly',
    name: 'Dungeon Core',
    sub: 'Anomaly · Living Ecosystem · Reality Anchor',
    rank: 'ANOMALY',
    ibg: '#7e4e7e',
    icon: '💠',
    size: '~1 m diameter, glowing crystal, often hidden',
    biomes: ['Dungeon Core Chamber', 'Heart of Dungeon'],
    intel: 312,
    tags: { behavior: ['Anomaly', 'Territorial', 'Passive'], combat: ['Environmental', 'Control'], intelligence: ['Strategic'], interaction: ['Environmental'] },
    desc: 'The Dungeon Core is not a monster – it is an anomaly. A sentient, self-sustaining reality anchor that generates monsters, reshapes corridors, and controls the environment of an entire dungeon.',
    stats: { 'Core Integrity': 'N/A', 'Mana Pool': 'Effectively infinite', 'Spawn Rate': 'Variable', 'Territory Control': 'Absolute', 'Trap Network': 'Adaptive' },
    bars: { 'Core Integrity':'#4caf50', 'Mana Pool':'#9c27b0', 'Spawn Rate':'#ffa000', 'Territory Control':'#800080', 'Trap Network':'#d32f2f' },
    weak: ['Mana starvation', 'Sealing rituals', 'Pacification offerings'],
    res: ['Direct damage (95% reduction unless starved)', 'Magic', 'Physical'],
    ab: ['Core Storm (on damage, 50 dmg/sec to all in dungeon)', 'Desperation Protocol (all remaining monsters become elite)', 'Territory control (reshapes corridors)', 'Mana starvation vulnerability', 'Sealing vulnerability'],
    warn: 'The Dungeon Core is not an enemy. It is a location with a grudge. Do not fight it. Starve it. Seal it.',
    loot: [{ name:'Dungeon Core Shard (sealed)', rarity:'unique', note:'Only obtainable if core is sealed, not destroyed.' }]
  };
  entries.push(dungeonCore);

  // ========================
  // Register Category
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('dungeons', entries, 'Biomes', '🏛️');
    console.log('Dungeon data (sorted, complete) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();