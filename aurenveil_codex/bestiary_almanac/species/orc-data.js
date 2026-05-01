// orc-data.js
(function() {
  const entries = [];

  // ========================
  // BASE ORC WARRIOR
  // ========================
  const orcWarrior = {
    id: 'orc_warrior',
    name: 'Orc Warrior',
    sub: 'Orc · Frontline Brute',
    rank: 'C',
    ibg: '#7e6e5e',
    icon: '👹',
    size: '~2.2 m tall, muscular, green-gray skin',
    biomes: ['Badlands','Mountain','Steppe','Ruins'],
    intel: 42,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The standard orc warrior is a hulking brute wielding a crude axe or club. They fight in loose packs, relying on overwhelming strength rather than tactics. Alone they are dangerous; in a warband they are a slaughter. Orc warriors are fearless in melee but vulnerable to magic and ranged attacks.',
    stats: { HP: 487, Damage: 398, Defense: 312, Aggression: 587, Speed: 178, Mana: 47, 'Crude Cleave': 523, 'Bloodrage': 467, Threat: 587 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Crude Cleave':'#ffa000', 'Bloodrage':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Magic','Ranged attacks','Disarm','Ice (slows)'],
    res: ['Physical (bludgeoning)','Fear','Poison'],
    ab: ['Crude cleave (wide swing, hits up to 3 enemies)', 'Bloodrage (when below 30% HP, +50% damage, +30% speed)', 'Savage strike (ignores 20% armor)'],
    loot: [{ name:'Orc Axe (crude)', rarity:'common', note:'Heavy and unbalanced – can be melted for scrap' }, { name:'Orc Tooth Necklace', rarity:'common', note:'Bounty proof or intimidation item' }],
    variants: [
      {
        key: 'berserker',
        label: '💢 Berserker',
        rank: 'B',
        ibg: '#9e5e3a',
        icon: '👹',
        sub: 'Orc Berserker · Frenzied Killer',
        size: '~2.4 m, scarred, foam at mouth',
        intel: 28,
        tags: { behavior: ['Aggressive','Berserker'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
        desc: 'Berserkers are orcs who enter a frenzy, feeling no pain and ignoring defense entirely. They attack with reckless abandon, dealing massive damage but taking increased damage. They cannot retreat.',
        stats: { HP: 687, Damage: 647, Defense: 187, Aggression: 847, Speed: 247, Mana: 23, 'Frenzied Swings': 847, 'Pain Ignore': 0, Threat: 847 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Frenzied Swings':'#d32f2f', 'Pain Ignore':'#00bcd4', Threat:'#d32f2f' },
        weak: ['All damage increased (no defense)','Crowd control','Ranged'],
        res: ['Fear','Pain','Morale'],
        ab: ['Frenzied swings (attacks twice per round, each hit high damage)', 'Pain ignore (immune to stun, slow, and knockback while below 50% HP)', 'Berserk demise (on death, deals 200 damage to all nearby)'],
        loot: [{ name:'Berserker Totem', rarity:'uncommon', note:'Empowers rage – used in barbarian gear' }]
      },
      {
        key: 'veteran',
        label: '🪖 Veteran',
        rank: 'B',
        ibg: '#7e6e5e',
        icon: '👹',
        sub: 'Veteran Orc · Scarred Fighter',
        size: '~2.3 m, multiple scars, better armor',
        intel: 67,
        tags: { behavior: ['Aggressive','Tactical'], combat: ['Swarm','Defensive'], intelligence: ['Reactive'], interaction: ['Predatory'] },
        desc: 'Veteran orcs have survived many battles. They wear patchwork metal armor and fight with more discipline, using shield bashes and coordinated strikes.',
        stats: { HP: 712, Damage: 543, Defense: 498, Aggression: 678, Speed: 198, Mana: 43, 'Shield Bash': 612, 'Coordinated Strike': 587, Threat: 723 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Shield Bash':'#ffa000', 'Coordinated Strike':'#8bc34a', Threat:'#d32f2f' },
        weak: ['Magic','Armor break'],
        res: ['Physical','Fear'],
        ab: ['Shield bash (stun, knockback)', 'Coordinated strike (bonus damage if ally adjacent)', 'Battle-hardened (reduced critical damage)'],
        loot: [{ name:'Veteran Orc Armor', rarity:'uncommon', note:'Patchwork but functional – used in orcish war gear' }]
      }
    ]
  };
  entries.push(orcWarrior);

  // ========================
  // ORC SHAMAN
  // ========================
  const orcShaman = {
    id: 'orc_shaman',
    name: 'Orc Shaman',
    sub: 'Orc · Spirit Caller',
    rank: 'C',
    ibg: '#6e5e4e',
    icon: '🔮',
    size: '~2.1 m, adorned with bones and feathers',
    biomes: ['Badlands','Mountain','Steppe'],
    intel: 98,
    tags: { behavior: ['Aggressive','Strategic'], combat: ['Support','Control'], intelligence: ['Aware'], interaction: ['Tactical'] },
    desc: 'Orc shamans channel ancestral spirits and nature magic. They buff orc warriors with bloodlust, curse enemies, and summon spirit wolves. A warband with a shaman is significantly more dangerous.',
    stats: { HP: 387, Damage: 274, Defense: 243, Aggression: 478, Speed: 187, Mana: 587, 'Bloodlust': 687, 'Ancestral Curse': 543, 'Spirit Wolf': 487, Threat: 598 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bloodlust':'#ffa000', 'Ancestral Curse':'#800080', 'Spirit Wolf':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Silence','Anti-magic','Melee rush'],
    res: ['Darkness','Fear','Poison'],
    ab: ['Bloodlust (target orc gains +30% damage, +20% speed for 30 seconds)', 'Ancestral curse (target takes +25% damage from all sources)', 'Summon spirit wolf (calls a spectral wolf that fights for 60 seconds)'],
    loot: [{ name:'Shaman Totem', rarity:'uncommon', note:'Used in orcish rituals and low-level enchantments' }, { name:'Spirit Stone', rarity:'rare', note:'Contains ancestral essence – used in summoning' }]
  };
  entries.push(orcShaman);

  // ========================
  // ORC BEAST RIDER (Wolf or Boar)
  // ========================
  const orcBeastRider = {
    id: 'orc_beast_rider',
    name: 'Orc Beast Rider',
    sub: 'Orc · Mounted Shock Troop',
    rank: 'C',
    ibg: '#8e6e4e',
    icon: '🐗',
    size: '~2.3 m rider + 2 m mount (dire wolf or giant boar)',
    biomes: ['Steppe','Badlands','Mountain'],
    intel: 54,
    tags: { behavior: ['Aggressive','Opportunistic'], combat: ['Burst','Swarm'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Orc beast riders ride dire wolves or giant boars into battle. They gain mobility and a powerful charge attack. The mount is as dangerous as the rider. They are used to flank and break enemy lines.',
    stats: { HP: 587, Damage: 498, Defense: 378, Aggression: 687, Speed: 387, Mana: 34, 'Mount Charge': 687, 'Javelin': 487, 'Bestial Roar': 423, Threat: 687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Mount Charge':'#ffa000', 'Javelin':'#d32f2f', 'Bestial Roar':'#800080', Threat:'#d32f2f' },
    weak: ['Anti-cavalry','Kill mount','Trip'],
    res: ['Melee (while mounted)','Fear'],
    ab: ['Mount charge (knockdown, high damage, gap closer)', 'Javelin throw (ranged, medium damage)', 'Bestial roar (fear effect on enemies in a cone)'],
    loot: [{ name:'Orc Rider Spear', rarity:'uncommon', note:'Crude but effective' }, { name:'Dire Wolf Fang', rarity:'uncommon', note:'Sharp and durable' }]
  };
  entries.push(orcBeastRider);

  // ========================
  // ORC CAPTAIN (Squad Leader)
  // ========================
  const orcCaptain = {
    id: 'orc_captain',
    name: 'Orc Captain',
    sub: 'Orc · Squad Commander',
    rank: 'B',
    ibg: '#8e6e5e',
    icon: '🎖️',
    size: '~2.4 m, commanding presence, bone helmet',
    biomes: ['Badlands','Mountain','Fortress'],
    intel: 98,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Control'], intelligence: ['Reactive'], interaction: ['Tactical'] },
    desc: 'Orc captains lead squads of 10–20 orcs. They are stronger and more intelligent than normal orcs, issuing simple commands and coordinating flanking. Killing a captain disorganizes the warband.',
    stats: { HP: 987, Damage: 798, Defense: 687, Aggression: 987, Speed: 198, Mana: 87, 'War Cry': 987, 'Command Aura': 847, 'Cleaving Smash': 912, Threat: 1023 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'War Cry':'#ffa000', 'Command Aura':'#00bcd4', 'Cleaving Smash':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Assassination','Anti-leader weapons','Magic'],
    res: ['Physical','Fear (reduced)','Poison'],
    ab: ['War cry (allies gain +20% damage for 15 seconds)', 'Command aura (nearby orcs gain +30% coordination, +15% damage)', 'Cleaving smash (area attack, hits up to 5 enemies)'],
    loot: [{ name:'Captain\'s Horn', rarity:'uncommon', note:'Used to rally orc troops' }, { name:'Bone Captain Helm', rarity:'rare', note:'Symbol of authority – valuable trophy' }]
  };
  entries.push(orcCaptain);

  // ========================
  // ORC BLOOD AXE (Elite Warrior Variant)
  // ========================
  const orcBloodAxe = {
    id: 'orc_blood_axe',
    name: 'Orc Blood Axe',
    sub: 'Orc · Elite Executioner',
    rank: 'B',
    ibg: '#9e5e3e',
    icon: '🪓',
    size: '~2.4 m, massive double-bladed axe',
    biomes: ['Badlands','Fortress','Siege Camp'],
    intel: 67,
    tags: { behavior: ['Aggressive','Berserker'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Blood axes are orc elite warriors who wield massive two-handed axes. They specialize in breaking enemy lines and executing wounded foes. Their attacks deal bonus damage to enemies below 50% HP.',
    stats: { HP: 987, Damage: 987, Defense: 674, Aggression: 1287, Speed: 187, Mana: 43, 'Executioner Swing': 1287, 'Bleeding Wound': 987, 'Momentum': 0, Threat: 1287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Executioner Swing':'#d32f2f', 'Bleeding Wound':'#ffa000', 'Momentum':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Magic','Ranged','Slow'],
    res: ['Physical','Fear'],
    ab: ['Executioner swing (double damage to targets below 50% HP)', 'Bleeding wound (inflicts bleed, 20 dmg/sec for 10 seconds)', 'Momentum (each kill increases damage by 10% for 30 seconds, stacks up to 5 times)'],
    loot: [{ name:'Blood Axe Blade', rarity:'uncommon', note:'Heavy and sharp – used in high-tier orcish weapons' }]
  };
  entries.push(orcBloodAxe);

  // ========================
  // ORC WARLOCK (Rare spellcaster)
  // ========================
  const orcWarlock = {
    id: 'orc_warlock',
    name: 'Orc Warlock',
    sub: 'Orc · Dark Caster',
    rank: 'B',
    ibg: '#6e4e5e',
    icon: '🔱',
    size: '~2.2 m, hooded, glowing eyes',
    biomes: ['Badlands','Ruins','Cursed Land'],
    intel: 198,
    tags: { behavior: ['Strategic','Aggressive'], combat: ['Control','Support'], intelligence: ['Strategic'], interaction: ['Tactical'] },
    desc: 'Orc warlocks have made pacts with dark entities for power. They wield curses, summon minor demons, and drain life. They are rare and often serve as advisors to chieftains or overlords.',
    stats: { HP: 587, Damage: 438, Defense: 387, Aggression: 687, Speed: 187, Mana: 847, 'Dark Pact': 987, 'Summon Imp': 787, 'Life Drain': 847, Threat: 887 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Dark Pact':'#800080', 'Summon Imp':'#d32f2f', 'Life Drain':'#880e4f', Threat:'#d32f2f' },
    weak: ['Holy','Silence','Anti-magic'],
    res: ['Darkness','Fear','Poison'],
    ab: ['Dark pact (sacrifices HP to empower spells)', 'Summon imp (calls 1-3 imps)', 'Life drain (ranged, heals warlock)', 'Curse of corruption (target takes increased damage)'],
    loot: [{ name:'Warlock Skull', rarity:'rare', note:'Used in dark rituals' }, { name:'Demon Bone', rarity:'rare', note:'Component for summoning' }]
  };
  entries.push(orcWarlock);

  // ========================
  // ORC SLAYER (Anti-magic specialist)
  // ========================
  const orcSlayer = {
    id: 'orc_slayer',
    name: 'Orc Slayer',
    sub: 'Orc · Mage Hunter',
    rank: 'B',
    ibg: '#8e6e5e',
    icon: '🗡️',
    size: '~2.2 m, leaner, covered in anti-magic tattoos',
    biomes: ['Badlands','Fortress','Mage Tower Ruins'],
    intel: 89,
    tags: { behavior: ['Aggressive','Opportunistic'], combat: ['Burst','Ambush'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Orc slayers are trained to hunt spellcasters. Their tattoos grant magic resistance, and their weapons are coated with a substance that disrupts mana. They prioritize mages and healers in combat.',
    stats: { HP: 887, Damage: 787, Defense: 587, Aggression: 987, Speed: 287, Mana: 0, 'Magebane Strike': 987, 'Anti-Magic Aura': 0, 'Silencing Blade': 787, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Magebane Strike':'#d32f2f', 'Anti-Magic Aura':'#00bcd4', 'Silencing Blade':'#ffa000', Threat:'#d32f2f' },
    weak: ['Physical (non-magic)','Holy','Heavy armor'],
    res: ['Magic (50% resistance)','Poison','Fear'],
    ab: ['Magebane strike (silences target for 5 seconds, bonus damage to spellcasters)', 'Anti-magic aura (all magic damage reduced by 30% for nearby orcs)', 'Silencing blade (target cannot cast spells for 10 seconds)'],
    loot: [{ name:'Magebane Tattoo Ink', rarity:'uncommon', note:'Used to create anti-magic tattoos' }, { name:'Slayer\'s Blade', rarity:'rare', note:'Silences on hit – valuable for assassins' }]
  };
  entries.push(orcSlayer);

  // ========================
  // ORC GENERAL (Warband Leader)
  // ========================
  const orcGeneral = {
    id: 'orc_general',
    name: 'Orc General',
    sub: 'Orc · Warband Commander',
    rank: 'A',
    ibg: '#9e6e4e',
    icon: '⚔️',
    size: '~2.6 m, heavy armor, massive axe',
    biomes: ['Badlands','Fortress','Siege Camp'],
    intel: 156,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control','Swarm'], intelligence: ['Strategic'], interaction: ['Organized'] },
    desc: 'An orc general commands entire warbands of 100+ orcs. They are rare, intelligent, and capable of siege tactics, ambushes, and coordinated assaults. Under a general, orcs fight with remarkable discipline.',
    stats: { HP: 2487, Damage: 1987, Defense: 1743, Aggression: 2487, Speed: 187, Mana: 187, 'Warband Command': 2874, 'Rally Cry': 2487, 'Executioner Strike': 2687, Threat: 2874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Warband Command':'#ffa000', 'Rally Cry':'#00bcd4', 'Executioner Strike':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Assassination','Decapitation strike','Anti-leader'],
    res: ['Fear','Poison','Physical'],
    ab: ['Warband command (all orcs within 500 m gain +30% damage, +20% speed)', 'Rally cry (removes fear and morale penalties from allies)', 'Executioner strike (ignores 50% armor, critical if target below 40% HP)'],
    loot: [{ name:'General\'s War Axe', rarity:'rare', note:'Massive, well-balanced – used in high-tier orcish weapons' }, { name:'Warband Standard', rarity:'rare', note:'Capturing it demoralizes orc forces' }],
    variants: [
      {
        key: 'siege_breaker',
        label: '🏰 Siege Breaker',
        rank: 'S',
        ibg: '#ae6e4e',
        icon: '⚔️',
        sub: 'Siege General · Fortress Crusher',
        size: '~2.8 m, carries a massive battering ram as weapon',
        intel: 187,
        desc: 'A siege breaker general specializes in destroying fortifications. Their attacks deal bonus damage to structures, and they can break through walls. They command siege engines and are nearly unstoppable in a siege.',
        stats: { HP: 3874, Damage: 2874, Defense: 2487, Aggression: 3874, Speed: 147, Mana: 143, 'Wall Breaker': 3874, 'Siege Command': 3247, 'Trample': 2874, Threat: 3987 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Wall Breaker':'#ffa000', 'Siege Command':'#d32f2f', 'Trample':'#800080', Threat:'#d32f2f' },
        weak: ['Anti-siege weapons','Mobility','Magic'],
        res: ['Physical','Fear','Poison'],
        ab: ['Wall breaker (ignores 75% of structure defense, deals bonus damage to buildings)', 'Siege command (siege weapons gain +50% damage and reload speed)', 'Trample (massive knockback, deals damage in a line)'],
        loot: [{ name:'Siege Breaker Hammer', rarity:'rare', note:'Enchanted to damage structures – used in siege weapons' }]
      }
    ]
  };
  entries.push(orcGeneral);

  // ========================
  // ADDITIONAL: ORC CHIEFTAIN (Tribe Leader, below Overlord)
  // ========================
  const orcChieftain = {
    id: 'orc_chieftain',
    name: 'Orc Chieftain',
    sub: 'Orc · Tribe Leader',
    rank: 'A',
    ibg: '#9e6e5e',
    icon: '🏹',
    size: '~2.5 m, tribal tattoos, bone armor',
    biomes: ['Badlands','Mountain','Steppe'],
    intel: 134,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control'], intelligence: ['Aware'], interaction: ['Ruler'] },
    desc: 'An orc chieftain leads a single tribe (50-200 orcs). They are powerful warriors but lack the strategic genius of an Overlord. They rely on brute force and shaman support.',
    stats: { HP: 3874, Damage: 3247, Defense: 2874, Aggression: 4784, Speed: 198, Mana: 187, 'Tribal Command': 4784, 'Totemic Strike': 3874, 'Battle Roar': 3247, Threat: 4874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Tribal Command':'#ffa000', 'Totemic Strike':'#800080', 'Battle Roar':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Assassination','Magic','Anti-leader'],
    res: ['Fear','Poison'],
    ab: ['Tribal command (tribe orcs gain +25% damage, +15% speed)', 'Totemic strike (attack empowered by ancestral spirits, ignores 30% armor)', 'Battle roar (fear effect on all enemies within 20 m)'],
    loot: [{ name:'Chieftain\'s Totem', rarity:'rare', note:'Used to contest tribe leadership' }, { name:'Bone Armor Set', rarity:'rare', note:'Light but strong orcish armor' }]
  };
  entries.push(orcChieftain);
  
  // ========================
  // ORC OVERLORD (Supreme Leader)
  // ========================
  const orcOverlord = {
    id: 'orc_overlord',
    name: 'Orc Overlord',
    sub: 'Orc · Supreme Warlord',
    rank: 'S',
    ibg: '#ae5e3e',
    icon: '👑',
    size: '~3 m tall, immense, covered in scars and trophies',
    biomes: ['Fortress','Capital','Orc Kingdom'],
    intel: 287,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Swarm'], intelligence: ['Strategic'], interaction: ['Ruler'] },
    desc: 'The Orc Overlord is the supreme ruler of a horde, uniting multiple tribes under a single banner. They are massive, cunning, and possess near-human strategic intellect. Their presence elevates all orcs in the region to fight with fanatical loyalty. An Overlord is a Gold-rank threat alone, Diamond-rank with their horde.',
    stats: { HP: 6874, Damage: 5874, Defense: 4784, Aggression: 6874, Speed: 247, Mana: 487, 'Horde Command': 7847, 'Overlord\'s Wrath': 6874, 'Iron Will': 0, Threat: 7847 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Horde Command':'#ffa000', 'Overlord\'s Wrath':'#d32f2f', 'Iron Will':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Heroic duel','Decapitation strike','Divine weapons'],
    res: ['Fear','Poison','Morale','Physical'],
    ab: [
      'Horde command (all orcs within 1 km gain +50% damage, +30% speed, immune to fear)',
      'Overlord\'s wrath (massive AoE ground slam, stuns all enemies for 3 seconds)',
      'Iron will (cannot be stunned, slowed, or knocked back)',
      'Call to arms (summons 20-50 orc reinforcements from off-screen)'
    ],
    territorialSS: true,
    warn: 'An Orc Overlord has unified the horde. Do not engage without a party of Gold-rank or higher, and eliminate the Overlord first – the horde breaks when the leader falls.',
    territory: 'Within orc-controlled territory (fortified camps or conquered settlements), the Overlord\'s stats increase by +50% effective. Orc spawn rates triple.',
    loot: [{ name:'Overlord Crown', rarity:'unique', note:'Made of gold and bone – worth a fortune and a political tool' }, { name:'Warlord\'s Greataxe', rarity:'unique', note:'Massive, can cleave through multiple enemies; requires 30 Strength to wield' }]
  };
  entries.push(orcOverlord);

  // ========================
  // Register Category
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('orcs', entries, 'Species', '👹');
    console.log('Orc data (complete hierarchy) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded. Make sure bestiary-core.html is loaded first.');
  }
})();