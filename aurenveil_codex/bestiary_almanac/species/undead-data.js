// undead-data.js (sorted by rank: E → SSS)
(function() {
  const entries = [];

  // ========================
  // E-RANK UNDEAD
  // ========================

  // Basic Zombie (E) with variants (Rotting E, Runner D, Armored D, Mutant C)
  const basicZombie = {
    id: 'zombie_basic',
    name: 'Zombie',
    sub: 'Slow Shambler · Swarm Unit',
    rank: 'E',
    ibg: '#5e5b4c',
    icon: '🧟',
    size: '~1.7 m, rotting flesh',
    biomes: ['Graveyard','Swamp','Ruins','Battlefield'],
    intel: 4,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The most common undead – a reanimated corpse with no will or fear. It shambles toward the living, clawing and biting. Slow but relentless. Alone it’s trivial, but in hordes they overwhelm with sheer numbers. Standard holy magic burns them, and healing spells damage them.',
    stats: { HP: 87, Damage: 64, Defense: 52, Aggression: 128, Speed: 48, Mana: 12, Decay: 143, 'Horde Strength': 98, Threat: 132 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Decay:'#795548', 'Horde Strength':'#607d8b', Threat:'#d32f2f' },
    weak: ['Holy magic','Light magic','Healing spells','Fire'],
    res: ['Poison','Fear','Pain','Morale'],
    ab: ['Claw + bite (basic attack)', 'Horde stacking (every extra zombie within 10 m increases damage by 5%)', 'Endless march (cannot be stunned or knocked back)'],
    loot: [{ name:'Rotten Flesh', rarity:'common', note:'Smelly, but used in some dark alchemy' }, { name:'Broken Bone', rarity:'common', note:'Can be ground into bonemeal' }],
    variants: [
      {
        key: 'rotting', label: '☠️ Rotting', rank: 'E', ibg: '#5e5b4c', icon: '🧟',
        sub: 'Rotting Zombie · Poison Aura', size: '~1.7 m, dripping pus', intel: 4,
        desc: 'A zombie so decayed it emits a cloud of noxious gas. Melee attackers risk poisoning, and the aura slowly damages nearby living creatures.',
        stats: { HP: 112, Damage: 71, Defense: 48, Aggression: 146, Speed: 42, Mana: 18, Decay: 219, 'Poison Aura': 187, Threat: 178 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Decay:'#795548', 'Poison Aura':'#8bc34a', Threat:'#d32f2f' },
        weak: ['Holy','Fire','Cleansing'], res: ['Poison (immune)','Fear'],
        ab: ['Poison aura (2 dmg/sec, radius 3 m)', 'Rotting bite (inflicts Decay status, -10% healing)'],
        loot: [{ name:'Putrid Gland', rarity:'uncommon', note:'Extremely foul – used in disease bombs' }]
      },
      {
        key: 'runner', label: '🏃 Runner', rank: 'D', ibg: '#5e5b4c', icon: '🧟',
        sub: 'Runner Zombie · Fast Terror', size: '~1.7 m, lean, torn flesh', intel: 8,
        desc: 'A zombie with unnaturally fast reflexes – it sprints toward targets, grappling them. Frail but terrifying in ambushes.',
        stats: { HP: 58, Damage: 87, Defense: 36, Aggression: 189, Speed: 182, Mana: 9, 'Sprint': 217, Threat: 191 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sprint':'#ffa000', Threat:'#d32f2f' },
        weak: ['Holy','Piercing'], res: ['Fear','Poison'],
        ab: ['Charge (gap closer)', 'Tackle (knockdown)', 'Fast regeneration (only outside combat)'],
        loot: [{ name:'Torn Tendon', rarity:'uncommon', note:'Still elastic – used in fast zombie creation' }]
      },
      {
        key: 'armored', label: '🛡️ Armored', rank: 'D', ibg: '#5e5b4c', icon: '🧟',
        sub: 'Armored Zombie · Walking Wall', size: '~1.8 m, wearing rusted plate armor', intel: 6,
        desc: 'A zombie clad in scavenged armor. It moves slower but shrugs off many physical attacks. Often used as a frontline bulwark.',
        stats: { HP: 223, Damage: 68, Defense: 289, Aggression: 157, Speed: 29, Mana: 7, 'Armor Plating': 317, Threat: 259 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#795548', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Armor Plating':'#8d6e63', Threat:'#d32f2f' },
        weak: ['Holy','Blunt force','Rust magic'], res: ['Piercing','Slashing','Poison'],
        ab: ['Shield bash (stun)', 'Slow advance (reduced knockback)', 'Armor break (after heavy damage, defense drops)'],
        loot: [{ name:'Rusted Armor Plate', rarity:'common', note:'Can be melted for scrap iron' }]
      },
      {
        key: 'mutant', label: '💪 Mutant', rank: 'C', ibg: '#5e5b4c', icon: '🧟',
        sub: 'Mutant Zombie · Gargantuar-like', size: '~2.5 m, bloated, massive arms', intel: 6,
        desc: 'A huge, powerful zombie – akin to a gargantuar. It smashes enemies and can throw smaller zombies as projectiles. A priority target.',
        stats: { HP: 847, Damage: 413, Defense: 294, Aggression: 683, Speed: 37, Mana: 21, 'Smash': 762, 'Throw': 584, Threat: 791 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Smash':'#ffa000', 'Throw':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Holy','Fire','Concentrated attacks'], res: ['Physical','Poison','Fear'],
        ab: ['Ground smash (AoE knockdown)', 'Hurl zombie (ranged, throws nearby zombie)', 'Berserk (when below 30% HP, +50% damage)'],
        loot: [{ name:'Mutant Core', rarity:'rare', note:'Dense necrotic energy – used in siege golem crafting' }]
      }
    ]
  };
  entries.push(basicZombie);

  // Skeleton (E) with variants (Warrior D, Archer D, Bone Knight C, Exploding D)
  const skeleton = {
    id: 'skeleton_basic',
    name: 'Skeleton',
    sub: 'Swift Bone Soldier',
    rank: 'E',
    ibg: '#c0c0c0',
    icon: '💀',
    size: '~1.6 m, bony frame',
    biomes: ['Graveyard','Dungeon','Battlefield','Ruins'],
    intel: 14,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Ranged'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Skeletons are reanimated bones, faster than zombies and capable of using weapons. They are fragile but numerous, often armed with rusted swords or bows. They feel no pain and must be shattered to stop.',
    stats: { HP: 48, Damage: 78, Defense: 37, Aggression: 142, Speed: 124, Mana: 9, 'Bone Armor': 63, 'Horde Strength': 124, Threat: 147 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bone Armor':'#e0e0e0', 'Horde Strength':'#607d8b', Threat:'#d32f2f' },
    weak: ['Blunt weapons','Holy magic','Fire','Smashing'],
    res: ['Piercing','Slashing','Poison','Fear'],
    ab: ['Sword slash / bow shot', 'Reassemble (if not shattered, can revive after 10 seconds unless source destroyed)'],
    loot: [{ name:'Bone Fragment', rarity:'common', note:'Used in necromancy and cheap crafting' }],
    variants: [
      {
        key: 'warrior', label: '⚔️ Warrior', rank: 'D', ibg: '#c0c0c0', icon: '💀',
        sub: 'Skeleton Warrior · Shield Bearer', size: '~1.65 m, rusty sword and shield', intel: 18,
        desc: 'A skeleton equipped with a shield and short sword. More durable and can block attacks.',
        stats: { HP: 127, Damage: 103, Defense: 147, Aggression: 183, Speed: 108, Mana: 11, 'Block': 189, Threat: 192 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Block':'#ffa000', Threat:'#d32f2f' },
        weak: ['Blunt','Holy'], res: ['Piercing','Slashing'],
        ab: ['Shield block (reduces physical damage by 50%)', 'Riposte', 'Formation fighting (adjacent skeletons gain +10% defense)'],
        loot: [{ name:'Rusted Sword', rarity:'common' }, { name:'Broken Shield', rarity:'common' }]
      },
      {
        key: 'archer', label: '🏹 Archer', rank: 'D', ibg: '#c0c0c0', icon: '💀',
        sub: 'Skeleton Archer · Ranged Support', size: '~1.6 m, bow and quiver', intel: 16,
        desc: 'Skeleton archers fire volleys from a distance. They are fragile but can inflict serious damage if ignored.',
        stats: { HP: 42, Damage: 119, Defense: 28, Aggression: 157, Speed: 113, Mana: 13, 'Volley': 188, Threat: 163 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Volley':'#ffa000', Threat:'#d32f2f' },
        weak: ['Blunt','Holy','Melee rush'], res: ['Piercing','Poison'],
        ab: ['Arrow shot (ranged)', 'Volley fire (shoots 3 arrows in quick succession)', 'Fall back (retreat while shooting)'],
        loot: [{ name:'Bone Bow', rarity:'uncommon', note:'Poor range, but can be restrung' }]
      },
      {
        key: 'exploding', label: '💥 Exploding', rank: 'D', ibg: '#c0c0c0', icon: '💀',
        sub: 'Exploding Skeleton · Suicide Unit', size: '~1.6 m, glowing cracks', intel: 2,
        desc: 'A skeleton infused with unstable necrotic energy. It rushes at enemies and detonates, dealing massive area damage.',
        stats: { HP: 1, Damage: 247, Defense: 0, Aggression: 312, Speed: 187, Mana: 43, 'Explosion': 498, Threat: 412 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Explosion':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Any hit kills it'], res: ['Physical (doesn’t matter)'],
        ab: ['Suicide detonation (10 m radius, high damage, inflicts Decay)', 'Charge (moves faster toward target)'],
        loot: [{ name:'Explosive Bone Dust', rarity:'uncommon', note:'Volatile – used in bombs' }]
      },
      {
        key: 'bone_knight', label: '🛡️ Bone Knight', rank: 'C', ibg: '#a0a0a0', icon: '💀',
        sub: 'Bone Knight · Armored Elite', size: '~1.75 m, full bone plate armor', intel: 38,
        desc: 'A skeleton clad in magically hardened bone armor. It commands lesser skeletons and is much tougher. Often serves as a squad leader.',
        stats: { HP: 473, Damage: 298, Defense: 412, Aggression: 413, Speed: 89, Mana: 57, 'Bone Armor': 487, 'Command Aura': 421, Threat: 509 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bone Armor':'#e0e0e0', 'Command Aura':'#ffa000', Threat:'#d32f2f' },
        weak: ['Holy','Blunt','Fire'], res: ['Piercing','Slashing','Poison'],
        ab: ['Bone armor (damage reduction 40%)', 'Command lesser skeletons (morale boost)', 'Bone spike (ranged, medium damage)'],
        loot: [{ name:'Knight’s Bone Plate', rarity:'rare', note:'Light and strong – used in necromantic armor' }]
      }
    ]
  };
  entries.push(skeleton);

  // Wraith (D) with variants (Shadow C, Screaming C, Possessor B)
  const wraith = {
    id: 'wraith_basic',
    name: 'Wraith',
    sub: 'Intangible · Life Drain',
    rank: 'D',
    ibg: '#3b2e4a',
    icon: '👻',
    size: '~1.8 m tall, translucent',
    biomes: ['Graveyard','Cursed Land','Dungeon','Shadow Plane'],
    intel: 64,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Control','Ambush'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Wraiths are malevolent spirits bound to places of death. They are intangible – physical attacks pass through them. They drain life force by touch and can pass through walls. Only magic, holy weapons, or enchanted gear can harm them.',
    stats: { HP: 183, Damage: 174, Defense: 87, Aggression: 278, Speed: 213, Mana: 347, 'Life Drain': 422, 'Intangibility': 511, Threat: 468 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Life Drain':'#880e4f', 'Intangibility':'#9c27b0', Threat:'#d32f2f' },
    weak: ['Holy magic','Magic weapons','Ghost touch','Purification'],
    res: ['Physical (immune)','Poison','Fear','Pain'],
    ab: ['Life drain touch (heals wraith for 50% of damage dealt)', 'Intangible (immune to non-magical physical attacks, can pass through walls)', 'Terrifying visage (fear effect on sight)'],
    loot: [{ name:'Ectoplasm', rarity:'uncommon', note:'Ghostly residue – used in spirit-binding enchantments' }],
    variants: [
      {
        key: 'shadow', label: '🌑 Shadow', rank: 'C', ibg: '#2a1e3a', icon: '👻',
        sub: 'Shadow Wraith · Stealth Assassin', size: '~1.8 m, barely visible', intel: 97,
        desc: 'A wraith that lurks in darkness, almost invisible. It strikes from behind, dealing bonus damage and inflicting fear.',
        stats: { HP: 198, Damage: 271, Defense: 74, Aggression: 343, Speed: 247, Mana: 413, 'Stealth': 527, 'Backstab': 498, Threat: 531 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Stealth':'#455a64', 'Backstab':'#6a1b9a', Threat:'#d32f2f' },
        weak: ['Light magic','Area holy','Detection'], res: ['Physical','Darkness'],
        ab: ['Shadow meld (invisible in dim light)', 'Backstab (double damage from behind)', 'Silent movement'],
        loot: [{ name:'Shadow Essence', rarity:'rare', note:'Used in high-grade stealth enchantments' }]
      },
      {
        key: 'screaming', label: '📢 Screaming', rank: 'C', ibg: '#3b2e4a', icon: '👻',
        sub: 'Screaming Wraith · Fear Focus', size: '~1.8 m, mouth agape', intel: 58,
        desc: 'A wraith that emits a piercing scream, terrifying all who hear it. The scream can paralyze weak-willed enemies.',
        stats: { HP: 167, Damage: 128, Defense: 63, Aggression: 489, Speed: 194, Mana: 478, 'Scream': 667, 'Fear Aura': 532, Threat: 576 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Scream':'#ffa000', 'Fear Aura':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Silence','Holy','Sound dampening'], res: ['Physical','Fear (immune)'],
        ab: ['Piercing scream (AoE fear, moderate damage)', 'Fear aura (constant, reduces enemy accuracy)', 'Wail (stuns low-rank enemies)'],
        loot: [{ name:'Scream Essence', rarity:'uncommon', note:'Used in fear-based traps' }]
      },
      {
        key: 'possessor', label: '🧠 Possessor', rank: 'B', ibg: '#3b2e4a', icon: '👻',
        sub: 'Possessor Wraith · Body Snatcher', size: '~1.8 m, shimmering', intel: 201,
        desc: 'A rare and dangerous wraith that can possess living creatures. The possessed body fights for the wraith; the victim is trapped inside.',
        stats: { HP: 247, Damage: 103, Defense: 94, Aggression: 412, Speed: 183, Mana: 779, 'Possession': 898, 'Control Duration': 743, Threat: 801 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Possession':'#800080', 'Control Duration':'#ffa000', Threat:'#d32f2f' },
        weak: ['Holy','Exorcism','Mind protection'], res: ['Physical','Fear','Mental (partial)'],
        ab: ['Possess (takes control of a target for 30 seconds, target cannot act)', 'Mentally drain (damages target’s mana)', 'Eject (if host killed, wraith emerges again)'],
        loot: [{ name:'Possession Core', rarity:'rare', note:'Banned artifact – can enchant items to trap souls' }]
      }
    ]
  };
  entries.push(wraith);

  // Plague Zombie (D) - infection type
  const plagueZombie = {
    id: 'plague_zombie', name: 'Plague Zombie', sub: 'Infection Spreader · Contagion', rank: 'D', ibg: '#5e5b4c', icon: '🦠',
    size: '~1.7 m, swollen, weeping sores', biomes: ['Swamp','Plague Village','Graveyard'], intel: 5,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'A zombie infected with a supernatural plague. Its attacks apply "Infection" – a status that reduces healing, deals continuous damage, and reanimates the victim as a zombie upon death. Killing it releases a cloud of infectious miasma.',
    stats: { HP: 143, Damage: 97, Defense: 72, Aggression: 189, Speed: 53, Mana: 18, 'Infection': 327, 'Miasma': 284, Threat: 312 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Infection':'#d32f2f', 'Miasma':'#880e4f', Threat:'#d32f2f' },
    weak: ['Holy','Fire','Purification'], res: ['Poison','Fear'],
    ab: ['Infectious bite (applies Infection: -30% healing, 5 dmg/sec, lasts 60 sec)', 'Miasma burst (on death, releases a cloud that infects all nearby living)', 'Disease aura (passive, nearby enemies have -10% healing)'],
    loot: [{ name:'Infected Tissue', rarity:'uncommon', note:'Used in dark alchemy – dangerous' }, { name:'Plague Core', rarity:'rare', note:'Can craft disease-based weapons' }]
  };
  entries.push(plagueZombie);

  // Night Stalker Zombie (D)
  const nightStalker = {
    id: 'night_stalker_zombie', name: 'Night Stalker Zombie', sub: 'Nocturnal Predator', rank: 'D', ibg: '#5e5b4c', icon: '🧟',
    size: '~1.7 m, hunched, glowing eyes', biomes: ['Forest','Graveyard','Cursed Land'], intel: 23,
    tags: { behavior: ['Aggressive'], combat: ['Burst','Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'A zombie that becomes incredibly fast and aggressive at night. During day it is sluggish; at night its speed doubles, it can climb walls, and its senses are enhanced.',
    stats: { HP: 112, Damage: 143, Defense: 51, Aggression: 278, Speed: 87, Mana: 14, 'Night Frenzy': 0, Threat: 264 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Night Frenzy':'#3f51b5', Threat:'#d32f2f' },
    weak: ['Daylight','Holy','Fire'], res: ['Darkness','Fear','Poison'],
    ab: ['Night Enhancement (after sunset: +150% speed, +100% damage, +50% aggression; speed becomes ~218)', 'Day Weakening (during day: -50% speed, -30% damage)', 'Wall climb (night only)', 'Ambush pounce (night only)'],
    loot: [{ name:'Night Essence', rarity:'uncommon', note:'Used in night-vision enchantments' }]
  };
  entries.push(nightStalker);

  // Moonlit Skeleton (D)
  const moonlitSkeleton = {
    id: 'moonlit_skeleton', name: 'Moonlit Skeleton', sub: 'Lunar Archer', rank: 'D', ibg: '#c0c0c0', icon: '💀',
    size: '~1.6 m, faintly glowing', biomes: ['Graveyard','Forest','Ruins'], intel: 26,
    tags: { behavior: ['Aggressive'], combat: ['Ranged','Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'A skeleton empowered by moonlight. Under a visible moon, its attack speed and accuracy increase dramatically. In complete darkness, it gains stealth.',
    stats: { HP: 64, Damage: 168, Defense: 39, Aggression: 197, Speed: 134, Mana: 23, 'Moonlight Boost': 284, Threat: 246 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Moonlight Boost':'#3f51b5', Threat:'#d32f2f' },
    weak: ['Blunt','Holy','Cloudy nights'], res: ['Piercing','Darkness'],
    ab: ['Moonlight arrows (double damage rate under moonlight)', 'Shadow cloak (invisible in darkness)', 'Lunar regeneration (heals 2 HP/s under moonlight)'],
    loot: [{ name:'Moon Essence', rarity:'uncommon', note:'Used in night-based enchantments' }]
  };
  entries.push(moonlitSkeleton);

  // Devourer Zombie (D) - evolution type
  const devourerZombie = {
    id: 'devourer_zombie', name: 'Devourer Zombie', sub: 'Consuming Horror', rank: 'D', ibg: '#5e5b4c', icon: '🧟',
    size: '~1.8 m, grows as it eats', biomes: ['Any battlefield'], intel: 19,
    tags: { behavior: ['Aggressive'], combat: ['Swarm','Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'A zombie that grows stronger by devouring corpses. Each corpse consumed permanently increases its HP, damage, and size. If left unchecked, it can become a mini-boss.',
    stats: { HP: 187, Damage: 143, Defense: 98, Aggression: 312, Speed: 67, Mana: 23, 'Devoured': 0, 'Evolution Stage': 0, Threat: 289 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Devoured':'#d32f2f', 'Evolution Stage':'#ffa000', Threat:'#d32f2f' },
    weak: ['Focus fire','Holy','Early destruction'], res: ['Physical','Poison'],
    ab: ['Devour corpse (consumes a corpse, gains +10% HP, +5% damage, and grows in size)', 'Evolution (after 5 devours, evolves into Devourer Brute – rank C; after 10, becomes Devourer Aberration – rank B)', 'Hunger frenzy (below 30% HP, moves 50% faster, seeks corpses)'],
    loot: [{ name:'Devourer Core', rarity:'uncommon', note:'Can be used to create adaptive weapons' }]
  };
  entries.push(devourerZombie);

  // Adaptive Skeleton (D)
  const adaptiveSkeleton = {
    id: 'adaptive_skeleton', name: 'Adaptive Skeleton', sub: 'Resistance Mimic', rank: 'D', ibg: '#c0c0c0', icon: '💀',
    size: '~1.6 m, faintly shimmering', biomes: ['Dungeon','Ruin'], intel: 41,
    tags: { behavior: ['Aggressive'], combat: ['Defensive','Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'A skeleton that gains resistance to the last damage type it suffered. It evolves over the course of a fight, becoming harder to kill if not burst down quickly.',
    stats: { HP: 97, Damage: 128, Defense: 63, Aggression: 194, Speed: 157, Mana: 34, 'Resistance Gained': 0, 'Adaptive Armor': 0, Threat: 221 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Resistance Gained':'#00bcd4', 'Adaptive Armor':'#ffa000', Threat:'#d32f2f' },
    weak: ['Mixed damage','Holy','Blunt (no adaptation)'], res: ['Elemental (adapts)','Physical (partial)'],
    ab: ['Adaptive resistance (after taking damage from a type, gains 50% resistance to that type permanently for this battle)', 'Evolution (after 5 adaptations, becomes Adaptive Knight – rank C)', 'Resonance shield (adapts to magic quickly)'],
    loot: [{ name:'Adaptive Core', rarity:'rare', note:'Can transfer resistances to armor' }]
  };
  entries.push(adaptiveSkeleton);

  // Carrier Wraith (C)
  const carrierWraith = {
    id: 'carrier_wraith', name: 'Carrier Wraith', sub: 'Intangible Plaguebearer', rank: 'C', ibg: '#3b2e4a', icon: '👻',
    size: '~1.8 m, translucent, sickly glow', biomes: ['Cursed Swamp','Plague Ruins'], intel: 53,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Control','Ambush'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'A wraith that spreads infection through contact. It passes through walls, leaving a trail of miasma. It is intangible, so only magic can harm it.',
    stats: { HP: 198, Damage: 142, Defense: 64, Aggression: 312, Speed: 217, Mana: 491, 'Infection Aura': 612, 'Intangible': 0, Threat: 543 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Infection Aura':'#d32f2f', 'Intangible':'#9c27b0', Threat:'#d32f2f' },
    weak: ['Holy','Magic weapons','Purification'], res: ['Physical (immune)','Poison','Fear'],
    ab: ['Infection aura (passive, infects all within 5 m)', 'Miasma trail (leaves a cloud that lasts 30 seconds)', 'Ghostly possession (can infect enemies directly)'],
    loot: [{ name:'Infected Essence', rarity:'rare', note:'Condensed plague – used in bioweapon crafting' }]
  };
  entries.push(carrierWraith);

  // Ascended Wraith (C)
  const ascendedWraith = {
    id: 'ascended_wraith', name: 'Ascended Wraith', sub: 'Ethereal Reaper', rank: 'C', ibg: '#3b2e4a', icon: '👻',
    size: '~1.8 m, more solid, crown of light', biomes: ['Ancient Ruins','Shadowfell'], intel: 142,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Control','Burst'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'A wraith that has fed on many souls, becoming more powerful and more intangible. It can phase through solid objects and becomes nearly invisible after each kill.',
    stats: { HP: 587, Damage: 443, Defense: 212, Aggression: 784, Speed: 267, Mana: 1123, 'Intangibility': 723, 'Soul Feast': 892, Threat: 967 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Intangibility':'#9c27b0', 'Soul Feast':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Holy','Ghost touch','Purification'], res: ['Physical (95% resistant)','Fear','Poison'],
    ab: ['Soul Feast (each kill permanently increases max HP by 10% and damage by 5%)', 'Phase shift (can pass through walls, takes 50% less damage from non-holy sources)', 'Ethereal blast (ranged, ignores armor)'],
    loot: [{ name:'Ascended Essence', rarity:'rare', note:'Used in ghostly enchantments' }]
  };
  entries.push(ascendedWraith);

  // Necromancer (C) with Lich-bound variant (B)
  const necromancer = {
    id: 'necromancer',
    name: 'Necromancer',
    sub: 'Undead Summoner · Battlefield Scaler',
    rank: 'C',
    ibg: '#4a2a4a',
    icon: '🧙',
    size: '~1.7 m, robed, pale',
    biomes: ['Graveyard','Cursed Land','Dungeon','Tower'],
    intel: 187,
    tags: { behavior: ['Strategic','Opportunistic'], combat: ['Support','Control'], intelligence: ['Strategic'], interaction: ['Organized'] },
    desc: 'Necromancers are dark casters who raise the dead. They are usually living humans corrupted by necromancy, but some become undead themselves. A necromancer can summon skeletons or zombies, and while alive, undead in the area respawn endlessly.',
    stats: { HP: 243, Damage: 187, Defense: 132, Aggression: 273, Speed: 91, Mana: 847, 'Summon Capacity': 742, 'Horde Control': 813, Threat: 724 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Summon Capacity':'#800080', 'Horde Control':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Holy magic','Assassination','Anti-magic'],
    res: ['Poison','Fear','Dark magic (partial)'],
    ab: ['Raise dead (summons a zombie or skeleton from a corpse)', 'Reinforce (infinite respawn for basic undead as long as necromancer lives)', 'Necrotic bolt (ranged, moderate damage)', 'Death ward (self-shield)'],
    loot: [{ name:'Necromancer Robe', rarity:'uncommon', note:'Slightly magical – enhances dark mana' }, { name:'Summoning Focus', rarity:'rare', note:'Used to increase undead summoning limit' }],
    variants: [
      {
        key: 'lich_necro', label: '💀 Lich-bound', rank: 'B', ibg: '#4a2a4a', icon: '🧙',
        sub: 'Necromancer of the Lich · Greater Summoner', size: '~1.7 m, gaunt, glowing eyes', intel: 271,
        desc: 'A necromancer who has pledged to a lich, gaining additional power. They can summon bone knights and cast stronger curses.',
        stats: { HP: 387, Damage: 312, Defense: 189, Aggression: 412, Speed: 78, Mana: 1432, 'Summon Capacity': 1284, 'Curse Power': 1398, Threat: 1375 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Summon Capacity':'#800080', 'Curse Power':'#4a148c', Threat:'#d32f2f' },
        weak: ['Holy','Anti-lich weapons'], res: ['Dark magic','Fear'],
        ab: ['Summon bone knight', 'Greater curse (weakness to all damage)', 'Drain life', 'Phylactery link (can respawn at lich’s phylactery)'],
        loot: [{ name:'Lich Sigil', rarity:'rare', note:'Enhances necromancy – coveted by dark mages' }]
      }
    ]
  };
  entries.push(necromancer);

  // ========================
  // B-RANK UNDEAD
  // ========================

  // Gargantuar (B) with variants (Flesh Amalgam A, Bone Colossus A)
  const gargantuar = {
    id: 'gargantuar',
    name: 'Gargantuar',
    sub: 'Siege Giant · Wall Breaker',
    rank: 'B',
    ibg: '#5e4a3a',
    icon: '🗿',
    size: '~4.5 m tall, rotting flesh and bone',
    biomes: ['Battlefield','Ruined City','Graveyard'],
    intel: 12,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Gargantuars are massive undead created from multiple corpses fused together. They are slow but incredibly strong, capable of smashing walls, throwing boulders, and crushing entire squads. They serve as siege engines in undead armies.',
    stats: { HP: 3874, Damage: 2917, Defense: 2213, Aggression: 3987, Speed: 42, Mana: 87, 'Siege Power': 5842, 'Crush': 4721, Threat: 5893 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Siege Power':'#ffa000', 'Crush':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Holy','Fire','Concentrated attacks on weak points'],
    res: ['Physical (partial)','Poison','Fear','Pain'],
    ab: ['Smash (area damage, destroys structures)', 'Throw boulder (ranged, high damage)', 'Trample (knockdown in a line)', 'Corpse explosion (on death, deals AoE damage)'],
    loot: [{ name:'Giant Bone', rarity:'rare', note:'Used in heavy weapons and siege equipment' }, { name:'Corrupted Heart', rarity:'rare', note:'Pulsing with necrotic power – used in dark rituals' }],
    variants: [
      {
        key: 'flesh_amalgam', label: '🧩 Flesh Amalgam', rank: 'A', ibg: '#5e4a3a', icon: '🧟',
        sub: 'Flesh Amalgam · Multi-Limbed Horror', size: '~4 m, many arms and heads', intel: 7,
        desc: 'A chaotic fusion of many corpses, with multiple arms attacking in all directions. It can grab multiple enemies and has unpredictable attack patterns.',
        stats: { HP: 5742, Damage: 3876, Defense: 2947, Aggression: 6214, Speed: 54, Mana: 124, 'Multi-Strike': 6743, 'Grasp': 5328, Threat: 6942 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Multi-Strike':'#ffa000', 'Grasp':'#6a1b9a', Threat:'#d32f2f' },
        weak: ['AoE','Holy','Fire'], res: ['Physical','Poison'],
        ab: ['Six-armed flurry (hits all adjacent enemies)', 'Grasp (grabs up to 3 targets)', 'Absorb (heals by consuming nearby corpses)'],
        loot: [{ name:'Amalgam Flesh', rarity:'rare', note:'Highly unstable – used in flesh golem creation' }]
      },
      {
        key: 'bone_colossus', label: '🦴 Bone Colossus', rank: 'A', ibg: '#c0c0c0', icon: '💀',
        sub: 'Bone Colossus · Indestructible Wall', size: '~6 m, made of thousands of bones', intel: 9,
        desc: 'A colossus formed entirely from bones, nearly indestructible. It moves slowly but shrugs off most attacks. It can fire bone spikes from its body.',
        stats: { HP: 9843, Damage: 3124, Defense: 9847, Aggression: 4231, Speed: 21, Mana: 43, 'Bone Spikes': 7421, 'Shield': 0, Threat: 9842 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bone Spikes':'#ffa000', 'Shield':'#00bcd4', Threat:'#d32f2f' },
        weak: ['Blunt','Holy','Disintegrate'], res: ['Piercing','Slashing','Fire','Cold'],
        ab: ['Bone spike volley (ranged, medium damage)', 'Slow march (immune to knockback)', 'Reassemble (regains 5% HP per second)'],
        loot: [{ name:'Colossus Core', rarity:'unique', note:'Heart of the bone colossus – can animate bone constructs' }]
      }
    ]
  };
  entries.push(gargantuar);

  // Necrotic Source Core (B)
  const necroticSource = {
    id: 'necrotic_source', name: 'Necrotic Source Core', sub: 'Undead Spawner · Cursed Artifact', rank: 'B', ibg: '#4a2a2a', icon: '🔮',
    size: '~1 m diameter, pulsating heart-like', biomes: ['Cursed Land','Necromancer Tower','Graveyard'], intel: 0,
    tags: { behavior: ['Passive'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'A necrotic heart or cursed artifact that spawns undead endlessly. It is not a creature but a source. Destroying it stops the endless tide. It can be protected by undead minions.',
    stats: { HP: 1847, Damage: 0, Defense: 312, Aggression: 0, Speed: 0, Mana: 2347, 'Spawn Rate': 0, 'Corruption Radius': 847, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Corruption Radius':'#d32f2f', Threat:'#607d8b' },
    weak: ['Holy','Purification','Destruction'], res: ['Physical (partial)','Poison','Dark magic'],
    ab: ['Spawn zombies (every 10 seconds, spawns 1-3 zombies nearby)', 'Corruption aura (makes zone cursed, undead regenerate +20% HP/sec)', 'Reinforce (if allied necromancer present, spawn rate doubles)'],
    loot: [{ name:'Necrotic Core Shard', rarity:'rare', note:'Used to make a portable undead spawner' }]
  };
  entries.push(necroticSource);

  // ========================
  // A-RANK UNDEAD
  // ========================

  // Corpse Giant (A)
  const corpseGiant = {
    id: 'corpse_giant', name: 'Corpse Giant', sub: 'Walking Graveyard', rank: 'A', ibg: '#5e4a3a', icon: '🧟‍♂️',
    size: '~7 m tall, many corpses fused', biomes: ['Battlefield','Ruined City','Graveyard'], intel: 8,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'A colossal undead formed from hundreds of corpses. It lumbers across battlefields, destroying buildings and spawning smaller undead from its body. Its very presence creates a cursed zone.',
    stats: { HP: 11847, Damage: 5743, Defense: 6842, Aggression: 7843, Speed: 28, Mana: 312, 'Siege Strength': 11473, 'Spawn Rate': 8742, Threat: 11287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Siege Strength':'#ffa000', 'Spawn Rate':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Holy siege weapons','Fire','Core destruction'], res: ['Physical','Poison','Fear','Pain'],
    ab: ['Ground slam (large AoE, knockdown)', 'Spawn zombies (every 30 seconds, creates 10 zombies around it)', 'Corpse rain (throws zombies as projectiles)', 'Curse of the fallen (all enemies within 100 m suffer -30% healing)'],
    loot: [{ name:'Giant Corpse Core', rarity:'rare', note:'Heart of the corpse giant – used in legendary siege golems' }]
  };
  entries.push(corpseGiant);

  // Grave Sentinel (A)
  const graveSentinel = {
    id: 'grave_sentinel', name: 'Grave Sentinel', sub: 'Immortal Guardian', rank: 'A', ibg: '#4a4a4a', icon: '🛡️',
    size: '~2.5 m, stone-like armor', biomes: ['Graveyard','Crypt','Sacred Tomb'], intel: 87,
    tags: { behavior: ['Territorial','Protective'], combat: ['Defensive','Siege'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'A colossal undead guardian bound to a specific location (a grave, a tomb, a treasure). It cannot leave its assigned zone, but within that zone it is nearly invincible. It will not chase beyond its boundary, but within, it regenerates rapidly and deals devastating blows.',
    stats: { HP: 8743, Damage: 6842, Defense: 9247, Aggression: 4213, Speed: 47, Mana: 847, 'Zone Power': 11874, 'Immortal': 1, Threat: 11246 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Zone Power':'#ffa000', 'Immortal':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Remove from zone','Anti-bound magic','Banishment'], res: ['All physical','All elemental (except holy)','Poison','Fear'],
    ab: ['Zone bound (cannot leave its assigned area, but inside area: +200% HP regen, +50% damage, cannot be knocked back)', 'Grave smite (melee, high holy damage – ironic for undead)', 'Guardian’s roar (fears all within 30 m)', 'Indomitable (cannot be stunned or slowed)'],
    loot: [{ name:'Sentinel Core', rarity:'rare', note:'Used to bind guardians to locations' }]
  };
  entries.push(graveSentinel);

  // ========================
  // S-RANK UNDEAD
  // ========================

  // Lich (S)
  const lich = {
    id: 'lich',
    name: 'Lich',
    sub: 'Immortal Archmage · Undying Ruler',
    rank: 'S',
    ibg: '#2a2a4a',
    icon: '🧙‍♂️',
    size: '~1.8 m, skeletal, ornate robes',
    biomes: ['Ancient Dungeon','Cursed Tower','Underground Vault'],
    intel: 891,
    tags: { behavior: ['Strategic','Territorial'], combat: ['Siege','Control','Swarm'], intelligence: ['Sentient'], interaction: ['Organized','Ruler'] },
    desc: 'Liches are powerful undead mages who achieved immortality by binding their soul to a phylactery. As long as the phylactery exists, the lich cannot be permanently killed – it will reform near it. Liches control vast undead armies and wield powerful magic, including curses, summoning, and necrotic storms.',
    stats: { HP: 4871, Damage: 3872, Defense: 3243, Aggression: 4798, Speed: 124, Mana: 9847, 'Phylactery Power': 10984, 'Soul Harvest': 9721, 'Domain Control': 11542, Threat: 11234 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Phylactery Power':'#800080', 'Soul Harvest':'#d32f2f', 'Domain Control':'#4a148c', Threat:'#d32f2f' },
    weak: ['Phylactery destruction','Holy nuke','Anti-magic field'],
    res: ['All physical','All elemental (except holy)','Poison','Fear','Pain','Death effects'],
    ab: [
      'Phylactery resurrection (reforms in 1 day unless phylactery destroyed)',
      'Summon undead army (calls 50+ undead)',
      'Necrotic storm (large AoE, life drain)',
      'Soul harvest (kills low-HP targets instantly, restores mana)',
      'Domain control (within territory, undead regen +100%, spawn rate x3)',
      'Fear aura (radius 100 m, terrifies living)'
    ],
    territorialSS: true,
    warn: 'A lich’s domain is a death zone. Approach only with a holy army and a way to destroy its phylactery. Without destroying the phylactery, all efforts are temporary.',
    territory: 'Within its domain (usually its tower or dungeon), liches gain SS-rank magic and control. Undead respawn endlessly, and the environment itself becomes hostile (poisonous air, darkness).',
    loot: [
      { name:'Phylactery Shard (legendary)', rarity:'unique', note:'Only obtainable if phylactery destroyed – contains immense power' },
      { name:'Lich’s Grimoire', rarity:'unique', note:'Contains forbidden spells – priceless' },
      { name:'Soul Stone', rarity:'rare', note:'Trapped soul – used in dark rituals' }
    ]
  };
  entries.push(lich);

  // Dullahan (S)
  const dullahan = {
    id: 'dullahan',
    name: 'Dullahan',
    sub: 'Headless Knight · Executioner',
    rank: 'S',
    ibg: '#3e2a2a',
    icon: '🏇',
    size: '~2.2 m, armor, no head, carries head under arm',
    biomes: ['Ancient Battlefield','Cursed Road','Dark Fortress'],
    intel: 412,
    tags: { behavior: ['Territorial','Honorable'], combat: ['Burst','Siege'], intelligence: ['Strategic'], interaction: ['Ruler'] },
    desc: 'The Dullahan is a headless knight of legend, often seen riding a black horse. It is not weak to holy or light – it is beyond such simple curses. It hunts those who have committed great sins or trespass on its territory. Its gaze (from the severed head) can kill, and its executioner’s sword ignores armor.',
    stats: { HP: 7843, Damage: 6912, Defense: 6234, Aggression: 6783, Speed: 387, Mana: 3487, 'Execution': 11873, 'Death Gaze': 9724, 'Cursed Aura': 8472, Threat: 10584 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Execution':'#880e4f', 'Death Gaze':'#d32f2f', 'Cursed Aura':'#4a148c', Threat:'#d32f2f' },
    weak: ['Anti-curse weapons','Dismemberment','Legendary-tier attacks'],
    res: ['Holy','Light','Fire','Ice','Poison','Fear','Pain','Magic (partial)'],
    ab: [
      'Executioner Strike (ignores 90% of armor, critical if target below 50% HP)',
      'Death Gaze (once per battle, kill a single target with less than 200 HP)',
      'Cursed Aura (radius 30 m, reduces healing by 75%, deals constant dark damage)',
      'Summon Steed (mount, increases speed to 480)',
      'Headless Resilience (no holy weakness, regenerates 5% HP per second)'
    ],
    territorialSS: false,
    warn: 'Do not engage a Dullahan alone. Holy protection is useless. The Death Gaze is instant kill for the unprepared.',
    loot: [
      { name:'Dullahan’s Head (cursed)', rarity:'unique', note:'Extremely dangerous – can be used to craft a weapon of instant death' },
      { name:'Executioner Sword', rarity:'unique', note:'Legendary blade, ignores armor' },
      { name:'Black Steed Hoof', rarity:'rare', note:'Used to summon a nightmare mount' }
    ]
  };
  entries.push(dullahan);

  // Skull Knight (S)
  const skullKnight = {
    id: 'skull_knight',
    name: 'Skull Knight',
    sub: 'Honorable Guardian · Neutral Entity',
    rank: 'S',
    ibg: '#4a4a4a',
    icon: '⚔️',
    size: '~2.0 m, ornate black armor, skull helmet',
    biomes: ['Ancient Tomb','Sacred Ruins','Grave of Heroes'],
    intel: 647,
    tags: { behavior: ['Neutral','Territorial'], combat: ['Defensive','Burst'], intelligence: ['Sentient'], interaction: ['Guardian'] },
    desc: 'The Skull Knight is a unique undead – it retains its honor and will not attack unless provoked or if its charge (a tomb, artifact, or person) is threatened. It is immune to holy damage and can even wield holy magic. It speaks and may offer guidance or warnings to adventurers. To fight it is to invite death, but it can also be an ally.',
    stats: { HP: 10843, Damage: 9824, Defense: 11247, Aggression: 3421, Speed: 511, Mana: 6743, 'Honor Bound': 1, 'Spirit Shield': 11582, 'Judgment': 12347, Threat: 11834 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Honor Bound':'#ffa000', 'Spirit Shield':'#00bcd4', 'Judgment':'#d32f2f', Threat:'#607d8b' },
    weak: ['Betrayal (honor broken)','Overwhelming divine force'],
    res: ['Holy','Light','Dark','All physical','Magic','Poison','Fear','Pain'],
    ab: [
      'Spirit Shield (blocks all damage for 5 seconds every 30 seconds)',
      'Judgment (deals holy damage, increases based on target’s sins)',
      'Honorable Duel (cannot be attacked by others during duel)',
      'Neutral state (will not attack unless threatened)',
      'Blessing (can heal allies or remove curses)'
    ],
    loot: [{ name:'Skull Knight’s Oath (legendary)', rarity:'unique', note:'A fragment of honor – can be used to create a holy/neutral undead ally' }]
  };
  entries.push(skullKnight);

  // Grave Titan (S) with territorial scaling
  const graveTitan = {
    id: 'grave_titan', name: 'Grave Titan', sub: 'Territorial Boss · Walking Graveyard', rank: 'S', ibg: '#4a4a2a', icon: '🏔️',
    size: '~12 m tall, made of earth and corpses', biomes: ['Battlefield','Cursed Land'], intel: 47,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Swarm'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'A colossal undead formed from an entire battlefield. It is the land itself risen. It controls its territory, causing the ground to erupt with undead. It only appears in deeply cursed zones and is the final boss of that area.',
    stats: { HP: 24873, Damage: 14784, Defense: 19873, Aggression: 18763, Speed: 31, Mana: 8741, 'Territory Control': 24781, 'Spawn Tide': 21873, Threat: 24782 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Territory Control':'#ffa000', 'Spawn Tide':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Territory purification','Holy siege weapons','Divine intervention'], res: ['All physical','All elemental','Poison','Fear','Pain'],
    ab: ['Territory control (within its zone, all undead have +200% regen, +50% damage)', 'Spawn tide (every 60 seconds, summons 50 zombies and 20 skeletons)', 'Grave stomp (AoE knockdown, high damage)', 'Immortal core (must destroy core within its chest to kill)'],
    territorialSS: true,
    warn: 'Grave Titan is a zone-defining boss. Do not engage without an army and a way to purify the land.',
    loot: [{ name:'Titan Core', rarity:'unique', note:'Heart of the cursed land – can create or purify a territory' }]
  };
  entries.push(graveTitan);

  // ========================
  // Register category
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('undead', entries, 'Species', '💀');
    console.log('Undead data (sorted by rank) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();