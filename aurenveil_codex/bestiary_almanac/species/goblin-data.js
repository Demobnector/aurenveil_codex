// goblin-data.js (enhanced with context, evolution, civilians, and integrated mutant)
(function() {
  const entries = [];

  // ========================
  // 15. CIVILIAN GOBLINS (non-combat, for worldbuilding)
  // ========================
  const goblinCivilian = {
    id: 'goblin_gatherer',
    name: 'Goblin Gatherer',
    sub: 'Non-combat · Forager',
    rank: 'F',
    ibg: '#cdc9b2',
    icon: '🍄',
    size: '~0.9 m, hunched',
    biomes: ['Forest','Cave','Ruins'],
    intel: 19,
    tags: { behavior: ['Cowardly','Passive'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Goblin gatherers are non-combatants that collect food, materials, and trinkets for the tribe. They flee from any threat and are worth no bounty. Their presence indicates a nearby goblin settlement. Killing them is considered dishonorable by most adventurer guilds, but they can be questioned for information.',
    stats: { HP: 24, Damage: 6, Defense: 9, Aggression: 0, Speed: 58, Mana: 8, 'Foraging': 47, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Foraging':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Flee','Hide','Carry supplies'],
    loot: [{ name:'Gatherer\'s Pouch', rarity:'common', note:'Contains random junk – sometimes a few coins or a shiny rock' }]
  };
  entries.push(goblinCivilian);

  const goblinCrafter = {
    id: 'goblin_crafter',
    name: 'Goblin Crafter',
    sub: 'Non-combat · Tinkerer',
    rank: 'F',
    ibg: '#cdc9b2',
    icon: '🔧',
    size: '~1.0 m, sooty',
    biomes: ['Cave','Ruins','Camp'],
    intel: 38,
    tags: { behavior: ['Passive','Cowardly'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Goblin crafters make the crude weapons, traps, and tools used by the tribe. They are non-aggressive but valuable assets to the goblin ecosystem. A tribe without crafters is less dangerous. Crafters can be captured and forced to reveal trap locations (with intimidation).',
    stats: { HP: 34, Damage: 11, Defense: 18, Aggression: 9, Speed: 47, Mana: 12, 'Crafting': 83, Threat: 23 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Crafting':'#ffa000', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: ['Fire (partial)'],
    ab: ['Repair weapons','Set basic traps','Flee'],
    loot: [{ name:'Crafter Tools', rarity:'common', note:'Crude but functional – can be sold for a few silver' }]
  };
  entries.push(goblinCrafter);

  const goblinBreeder = {
    id: 'goblin_breeder',
    name: 'Goblin Breeder',
    sub: 'Non-combat · Matriarch',
    rank: 'F',
    ibg: '#cdc9b2',
    icon: '🥚',
    size: '~0.9 m, pregnant or nursing',
    biomes: ['Cave','Camp'],
    intel: 24,
    tags: { behavior: ['Passive','Cowardly'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Goblin breeders are responsible for the tribe’s population growth. They are fiercely protected by warriors. Killing breeders reduces the goblin respawn rate in a territory. They are non-aggressive and will flee if their guards are killed.',
    stats: { HP: 28, Damage: 4, Defense: 7, Aggression: 0, Speed: 32, Mana: 11, 'Fertility': 97, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Fertility':'#e91e63', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Flee','Call guards','Reproduce (off-screen)'],
    loot: [{ name:'Breeder Charm', rarity:'uncommon', note:'A fertility token – used in some rituals' }]
  };
  entries.push(goblinBreeder);

  // ========================
  // 1. BASE GOBLIN
  // ========================
  const baseGoblin = {
    id: 'goblin_base',
    name: 'Goblin',
    sub: 'Common · Cowardly Scavenger',
    rank: 'D',
    ibg: '#cdc9c2',
    icon: '👺',
    size: '~1.0 m tall, wiry',
    biomes: ['Forest','Cave','Ruins','Wasteland'],
    intel: 28,
    tags: { behavior: ['Cowardly','Opportunistic'], combat: ['Swarm'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The most common goblin – weak, cowardly, and crude. Alone, it will flee from anything larger than a cat. But in groups of five or more, they gain courage and will swarm adventurers with rusty blades and thrown rocks. Their danger is purely numerical; a dozen can overwhelm an unprepared novice.',
    stats: { HP: 78, Damage: 43, Defense: 31, Aggression: 67, Speed: 112, Mana: 18, 'Pack Coordination': 98, Threat: 94 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pack Coordination':'#ffa000', Threat:'#607d8b' },
    weak: ['Any area attack','Breaking morale','Killing leader'],
    res: ['Poison (low)','Fear (in group)'],
    ab: ['Swarm tactics','Crude thrown weapons','Flee when outnumbered'],
    loot: [{ name:'Goblin Ear', rarity:'common', note:'Bounty proof – worthless except for quest turn-ins' },{ name:'Crude Knife', rarity:'common', note:'Jagged, fragile, but can be melted for scrap' }],
    variants: [
      {
        key: 'elite', label: '⬆️ Elite', rank: 'C', ibg: '#b0aa9a', icon: '👺', sub: 'Elite Goblin · Veteran Scavenger',
        size: '~1.2 m, scarred', intel: 41,
        tags: { behavior: ['Aggressive','Opportunistic'], combat: ['Swarm'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
        desc: 'An elite goblin has survived many fights. It’s slightly larger, bolder, and carries a crude but sharpened sword. Still weak alone, but inspires nearby goblins to fight longer before routing.',
        stats: { HP: 142, Damage: 87, Defense: 59, Aggression: 131, Speed: 124, Mana: 24, 'Pack Coordination': 176, Threat: 167 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pack Coordination':'#ffa000', Threat:'#607d8b' },
        weak: ['Area attack','Leader kill'],
        res: ['Poison','Fear (partial)'],
        ab: ['Swarm leader (morale boost)','Crude sword strike','Rally cry'],
        loot: [{ name:'Elite Goblin Ear', rarity:'uncommon', note:'Slightly larger – higher bounty' },{ name:'Crude Sword', rarity:'common', note:'Poor quality, can be reforged' }]
      }
    ]
  };
  entries.push(baseGoblin);

  // ========================
  // 2. HOBGOBLIN (icon changed to 🗡️)
  // ========================
  const hobgoblin = {
    id: 'hobgoblin',
    name: 'Hobgoblin',
    sub: 'Elite Soldier · Disciplined',
    rank: 'C',
    ibg: '#a1887f',
    icon: '🗡️',
    size: '~1.55 m tall, muscular',
    biomes: ['Forest','Cave','Ruins','Mountain'],
    intel: 67,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Siege'], intelligence: ['Aware'], interaction: ['Predatory','Tactical'] },
    desc: 'Hobgoblins are larger, stronger, and more disciplined than common goblins. They often serve as squad leaders or elite shock troops. They wear crude leather armor and wield real weapons – not just rusty scraps. A hobgoblin can go toe-to-toe with a novice adventurer alone. In groups, they are terrifying.',
    stats: { HP: 387, Damage: 294, Defense: 312, Aggression: 413, Speed: 158, Mana: 53, 'Pack Coordination': 387, Threat: 436 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pack Coordination':'#ffa000', Threat:'#607d8b' },
    weak: ['Precision strikes','Anti-armor','Magic'],
    res: ['Bludgeoning','Poison (partial)'],
    ab: ['Disciplined formation','Heavy strike','Command lesser goblins'],
    loot: [{ name:'Hobgoblin Armor Plate', rarity:'uncommon', note:'Crude but functional – can be repurposed' },{ name:'Hobgoblin War Blade', rarity:'uncommon', note:'Surprisingly well-balanced for a goblin weapon' }],
    variants: [
      {
        key: 'veteran', label: '⬆️ Veteran', rank: 'B', ibg: '#8d6e63', icon: '🗡️', sub: 'Veteran Hobgoblin · Warband Leader',
        size: '~1.65 m, heavily scarred', intel: 103,
        tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control'], intelligence: ['Reactive'], interaction: ['Tactical'] },
        desc: 'A veteran hobgoblin has led many raids. It wears a patchwork of metal plates and commands respect from even goblin captains. Its blows can crack shields, and it will not flee unless the entire warband is shattered.',
        stats: { HP: 874, Damage: 692, Defense: 748, Aggression: 982, Speed: 182, Mana: 97, 'Pack Coordination': 914, Threat: 1027 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pack Coordination':'#ffa000', Threat:'#607d8b' },
        weak: ['Magic','Precision piercing'],
        res: ['Physical','Poison'],
        ab: ['Warband command','Shield breaker','Morale boost aura'],
        loot: [{ name:'Veteran Hobgoblin Insignia', rarity:'rare', note:'Sign of rank – valuable to collectors' },{ name:'Heavy Hobgoblin Plate', rarity:'uncommon', note:'Good quality scrap' }]
      }
    ]
  };
  entries.push(hobgoblin);

  // ========================
  // 3-9. ROLE GOBLINS (Soldier, Guard, Archer, Rogue, Shaman, Engineer, Beast Rider)
  // Keep as before (no changes needed)
  // ... (I'll omit for brevity, but you can reuse the previous versions)
  // ========================

  // ========================
  // 10. GOBLIN CAPTAIN
  // ========================
  const goblinCaptain = {
    id: 'goblin_captain',
    name: 'Goblin Captain',
    sub: 'Squad Leader · Tactical',
    rank: 'C',
    ibg: '#b88d4a',
    icon: '🎖️',
    size: '~1.65 m, commanding presence',
    biomes: ['Forest','Cave','Ruins'],
    intel: 104,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Control'], intelligence: ['Reactive'], interaction: ['Tactical'] },
    desc: 'A goblin captain leads squads of 10–20 goblins. It issues simple commands, coordinates flanking, and knows when to retreat. Captains are often hobgoblins or elite goblins with natural leadership. Killing a captain disorganizes the squad significantly.',
    stats: { HP: 396, Damage: 279, Defense: 318, Aggression: 452, Speed: 132, Mana: 71, 'Command Aura': 473, 'Squad Tactics': 512, Threat: 489 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Command Aura':'#ffa000', 'Squad Tactics':'#4a148c', Threat:'#607d8b' },
    weak: ['Assassination','Leader kill','Disrupt command'],
    res: ['Morale checks','Fear'],
    ab: ['Command aura (coordination)','Rally','Flank order','Retreat signal'],
    loot: [{ name:'Captain\'s Horn', rarity:'uncommon', note:'Used to command warbands – valuable' },{ name:'Captain\'s Blade', rarity:'uncommon', note:'Superior goblin-made weapon' }]
  };
  entries.push(goblinCaptain);

  // ========================
  // 14. GOBLIN DEVOURER (evolution-type, levels up mid-battle)
  // ========================
  const goblinDevourer = {
    id: 'goblin_devourer',
    name: 'Goblin Devourer',
    sub: 'Evolving · Adaptive Predator',
    rank: 'C', // starts at C, can become B or A
    ibg: '#ccaa88',
    icon: '🍖',
    size: '~1.2 m, but grows as it eats',
    biomes: ['Any (battlefield)'],
    intel: 85, // increases with evolution
    tags: { behavior: ['Aggressive','Opportunistic'], combat: ['Swarm','Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'The Devourer is a rare goblin that feeds on the flesh of fallen enemies (and allies). Each kill makes it stronger, larger, and more intelligent. It can learn abilities from what it consumes – if it eats a mage, it gains a spell; if it eats a rogue, it gains stealth. Left unchecked, a Devourer can evolve into a mini-boss within a single battle. It is the ultimate example of goblin adaptability.',
    stats: { HP: 247, Damage: 198, Defense: 167, Aggression: 312, Speed: 184, Mana: 98, 'Evolve': 0, 'Devoured Count': 0, Threat: 287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Evolve':'#ffa000', 'Devoured Count':'#d32f2f', Threat:'#607d8b' },
    weak: ['Focus fire early','Prevent corpse consumption','Holy magic'],
    res: ['Fear','Morale'],
    ab: [
      'Devour (passive) – consumes a corpse, gains +10% to all stats permanently for that battle',
      'Evolve – after 3 devours, becomes Goblin Champion (B-rank); after 6 devours, becomes Goblin Aberration (A-rank)',
      'Mimic – if it devours a spellcaster, gains one random spell from that class',
      'Adaptive resilience – gains resistance to the last damage type taken',
      'Panic feed – if below 20% HP, devours nearest corpse instantly'
    ],
    loot: [{ name:'Devourer Essence', rarity:'rare', note:'A mutable core that can adapt to any enchantment' },{ name:'Evolving Flesh', rarity:'uncommon', note:'Still twitching – used in transformative alchemy' }],
    variants: [
      {
        key: 'evolved_champion', label: '⬆️ Evolved (Champion)', rank: 'B', ibg: '#ccaa88', icon: '⚔️', sub: 'Evolved Devourer · Mini-Boss',
        size: '~1.8 m, muscular', intel: 178,
        desc: 'After devouring several enemies, the Devourer has grown into a powerful champion. It is now a serious threat, capable of leading goblins and using learned abilities.',
        stats: { HP: 847, Damage: 698, Defense: 627, Aggression: 1024, Speed: 214, Mana: 298, 'Evolve': 1, 'Devoured Count': 3, Threat: 987 },
        weak: ['Sustained focus','Prevent further devours'],
        res: ['Fear','Physical'],
        ab: ['Devour (still active)','Learned abilities (spell/stealth)','War cry','Regeneration']
      },
      {
        key: 'evolved_aberration', label: '⬆️⬆️ Advanced (Aberration)', rank: 'A', ibg: '#aa8866', icon: '🍖⚔️', sub: 'Aberrant Devourer · Boss Threat',
        size: '~2.4 m, monstrous', intel: 297,
        desc: 'A Devourer that has consumed an entire party. It is now a hideous amalgamation of flesh and stolen power, with multiple abilities and a terrifying presence.',
        stats: { HP: 2187, Damage: 1894, Defense: 1647, Aggression: 2782, Speed: 187, Mana: 1187, 'Evolve': 2, 'Devoured Count': 6, Threat: 2647 },
        weak: ['Holy magic','Anti-aberration'],
        res: ['All physical','Many magics'],
        ab: ['Devour (still active)','Multiple learned abilities','Fear aura','Corpse explosion','Regeneration x3']
      }
    ]
  };
  entries.push(goblinDevourer);

  // ========================
  // 11. GOBLIN GENERAL (with scaling context)
  // ========================
  const goblinGeneral = {
    id: 'goblin_general',
    name: 'Goblin General',
    sub: 'Warband Commander · Strategic',
    rank: 'B',
    ibg: '#b87333',
    icon: '⚔️',
    size: '~2.0 m, heavily armored',
    biomes: ['Any (war camp)'],
    intel: 198,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control','Swarm'], intelligence: ['Strategic'], interaction: ['Tactical','Organized'] },
    desc: 'A goblin general commands entire warbands of 100+ goblins. It is rare and intelligent, capable of setting up ambushes, siege lines, and coordinated assaults. Under a general, goblins gain significant morale and tactical bonuses. Generals often have bodyguards and shamans.',
    stats: { HP: 987, Damage: 743, Defense: 814, Aggression: 1247, Speed: 119, Mana: 243, 'Warband Command': 1643, 'Morale Boost': 1528, Threat: 1679 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Warband Command':'#ffa000', 'Morale Boost':'#4a148c', Threat:'#607d8b' },
    weak: ['Assassination','Decapitation strike','Anti-leader'],
    res: ['Morale','Fear','Poison'],
    ab: [
      'Warband command (global) – affects all goblins within 1 km',
      'Morale boost – prevents routing, increases attack speed by 30%',
      'Strategic reserve – can call 20-50 reinforcements once per battle',
      'Reinforcement call'
    ],
    loot: [{ name:'General\'s Battle Standard', rarity:'rare', note:'Capturing it demoralizes goblins – valuable trophy' },{ name:'General\'s Armor', rarity:'rare', note:'Surprisingly well-crafted – dwarven-made (looted)' }],
    variants: [
      {
        key: 'territorial', label: '🏰 Territorial', rank: 'A', ibg: '#a0522d', icon: '⚔️', sub: 'Territorial General · Domain Ruler',
        size: '~2.1 m, ornate armor', intel: 297,
        tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Swarm'], intelligence: ['Strategic'], interaction: ['Organized'] },
        desc: 'When a general establishes a permanent territory (fortified camp or conquered ruin), its strategic awareness expands. It sets extensive traps, outposts, and patrol routes. Inside its domain, all goblin units gain +30% coordination and morale.',
        stats: { HP: 2134, Damage: 1687, Defense: 1792, Aggression: 2678, Speed: 104, Mana: 419, 'Domain Command': 3587, 'Territorial Tactics': 3429, Threat: 3691 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Domain Command':'#ffa000', 'Territorial Tactics':'#4a148c', Threat:'#607d8b' },
        ab: [
          'Domain control (territory) – traps respawn, patrols increase',
          'Reinforcement surge – new goblins spawn every 3 minutes',
          'Trap network – every 10 meters has a hidden trap',
          'Patrol coordination – no flanking possible'
        ],
        loot: [{ name:'Domain Seal', rarity:'rare', note:'Goblin territorial artifact – mystical' },{ name:'General\'s Signet', rarity:'rare', note:'Proves rank among goblin hierarchy' }]
      }
    ]
  };
  entries.push(goblinGeneral);
  
  // ========================
  // 16. GOBLIN WARLOCK (already exists, but ensure it's integrated)
  // ========================
  const goblinWarlock = {
    id: 'goblin_warlock',
    name: 'Goblin Warlock',
    sub: 'Dark Caster · Pact-bound',
    rank: 'B',
    ibg: '#4a2e2e',
    icon: '🔱',
    size: '~1.25 m, hunched, cloaked',
    biomes: ['Cave','Ruins','Dark Forest'],
    intel: 203,
    tags: { behavior: ['Aggressive','Opportunistic'], combat: ['Control','Support'], intelligence: ['Strategic'], interaction: ['Tactical'] },
    desc: 'Goblin warlocks have made pacts with dark entities – demons, evil fey, or dead gods. They possess powerful curses, summon minor demons, and can drain life. Warlocks are rare and serve as high-level casters, often advisors to kings. They are feared even by other goblins.',
    stats: { HP: 583, Damage: 312, Defense: 428, Aggression: 901, Speed: 108, Mana: 1447, 'Dark Pact': 2048, 'Summon': 1765, 'Life Drain': 1923, Threat: 1987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Dark Pact':'#800080', 'Summon':'#d32f2f', 'Life Drain':'#880e4f', Threat:'#607d8b' },
    weak: ['Holy magic','Anti-demon','Dispel'],
    res: ['Dark magic','Fear','Curses'],
    ab: [
      'Dark pact (empower) – sacrifices a goblin for a massive power boost',
      'Summon minor demon – a small demon fights for 1 minute',
      'Life drain – steals HP from a target',
      'Curse of weakness – reduces damage and defense',
      'Fear aura – affects all nearby enemies'
    ],
    loot: [{ name:'Warlock\'s Grimoire', rarity:'rare', note:'Bound in human skin – contains forbidden knowledge' },{ name:'Demon Talisman', rarity:'rare', note:'Used to summon minor demons – dangerous' }]
  };
  entries.push(goblinWarlock);

  // ========================
  // 13. GOBLIN MUTANT (reconnected as siege beast / warlock tool)
  // ========================
  const goblinMutant = {
    id: 'goblin_mutant',
    name: 'Goblin Mutant',
    sub: 'Corrupted · Siege Beast',
    rank: 'B',
    ibg: '#5e4a3a',
    icon: '🧪',
    size: '~2.2 m tall, twisted limbs',
    biomes: ['Wasteland','Magical Ruins','Goblin Camp (chained)'],
    intel: 31,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Goblin mutants are the result of dark alchemy or warlock pacts. They are chained in camps as living siege weapons, feared even by other goblins (nearby goblins suffer -20% morale). Warlocks use them as shock troops or to break enemy lines. Their mutations grant them acid spit, poison aura, or extra limbs, but they are unstable and may rampage out of control.',
    stats: { HP: 854, Damage: 743, Defense: 581, Aggression: 1024, Speed: 118, Mana: 287, 'Mutation Power': 1127, 'Acid Spit': 983, Threat: 1091 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Mutation Power':'#7b1fa2', 'Acid Spit':'#d32f2f', Threat:'#607d8b' },
    weak: ['Purification','Magic','Fire'],
    res: ['Physical','Poison','Pain'],
    ab: [
      'Acid spit (ranged, armor melting)',
      'Mutation rage (berserk mode)',
      'Poison aura (damages all nearby, friend and foe)',
      'Unnatural resilience (regenerates slowly)',
      'Feared by goblins – allied goblins within 50 m suffer -20% morale'
    ],
    loot: [{ name:'Mutant Gland', rarity:'rare', note:'Can be used in alchemical experiments – dangerous' },{ name:'Twisted Bone', rarity:'uncommon', note:'Light but strong – exotic component' }]
  };
  entries.push(goblinMutant);

  // ========================
  // 12. GOBLIN KING (with scaling context and territory)
  // ========================
  const goblinKing = {
    id: 'goblin_king',
    name: 'Goblin King',
    sub: 'Monarch of Filth · Unifier',
    rank: 'A',
    ibg: '#8b5a2b',
    icon: '👑',
    size: '~2.8 m tall, massive and powerful',
    biomes: ['Any (goblin domain)'],
    intel: 374,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Swarm'], intelligence: ['Strategic'], interaction: ['Organized','Ruler'] },
    desc: 'The Goblin King is an extremely rare entity that unifies multiple tribes into a kingdom. It has near-human intelligence, commands absolute loyalty, and can organize war campaigns that threaten entire regions. Its presence elevates all goblins within its territory to fight with discipline and ferocity.',
    stats: { HP: 3847, Damage: 3128, Defense: 2941, Aggression: 4723, Speed: 96, Mana: 974, 'Kingdom Command': 6742, 'Royal Aura': 6583, Threat: 6815 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Kingdom Command':'#ffa000', 'Royal Aura':'#4a148c', Threat:'#607d8b' },
    weak: ['Decapitation strike','Hero-level adventurers','Anti-king weapons'],
    res: ['Fear','Morale','Poison','Physical'],
    ab: [
      'Kingdom command (global) – affects all goblins within 5 km, doubles coordination speed',
      'Royal Aura – goblins within 500 m are immune to fear and morale breaks',
      'Call to arms – summons 100+ goblins from the domain within minutes',
      'Goblin domain (territory) – entire area is fortified, trapped, and patrolled',
      'Inspire – nearby goblins gain +50% damage'
    ],
    territorialSS: true,
    warn: 'Goblin King territories become fortified kingdoms. Constant attacks, ambushes, and traps make travel nearly impossible. Adventurer parties below Gold-rank are advised to avoid the domain entirely.',
    territory: 'Within its domain, all goblin units gain SS-rank coordination and morale (cap 40,000 practical effect). The domain is saturated with traps, scouts, and reinforcements. The Goblin King itself fights with a retinue of elite bodyguards.',
    loot: [{ name:'Goblin King Crown', rarity:'unique', note:'Made of looted gold and gems – worth a fortune, but cursed?' },{ name:'Royal Scepter', rarity:'unique', note:'Contains goblin essence – can control lesser goblins' },{ name:'Domain Heartstone', rarity:'unique', note:'A core that empowers goblin territory – destroying it collapses the domain' }]
  };
  entries.push(goblinKing);
  
  // ========================
  // Register category
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('goblins', entries, 'Species', '👺');
    console.log('Goblin data (enhanced) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded. Make sure bestiary-core.html is loaded first.');
  }
})();