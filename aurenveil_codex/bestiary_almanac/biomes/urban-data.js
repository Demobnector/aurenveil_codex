// biomes/urban-data.js
(function() {
  const entries = [];

  // ========================
  // PEACEFUL / COMMON URBAN CREATURES (F–E)
  // ========================

  // City Sparrow
  const citySparrow = {
    id: 'city_sparrow',
    name: 'City Sparrow',
    sub: 'Common Bird · Street Singer',
    rank: 'F',
    ibg: '#d0c8b0',
    icon: '🐦',
    size: '~0.15 m, brown, common',
    biomes: ['Aurenveil', 'City', 'Town'],
    intel: 12,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'City sparrows are everywhere in Aurenveil, hopping for crumbs. They are harmless and flee when approached.',
    stats: { HP: 6, Damage: 2, Defense: 4, Aggression: 0, Speed: 143, Mana: 0, 'Chirp': 0, 'Flee': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Chirp':'#8bc34a', 'Flee':'#00bcd4', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Chirp (pleasant sound, no combat effect)', 'Flee (flies away)'],
    loot: [{ name:'Sparrow Feather', rarity:'common', note:'Used in fletching' }]
  };
  entries.push(citySparrow);

  // Alley Cat
  const alleyCat = {
    id: 'alley_cat',
    name: 'Alley Cat',
    sub: 'Feral Feline · Rat Catcher',
    rank: 'F',
    ibg: '#c0b8a0',
    icon: '🐱',
    size: '~0.4 m, various colors, quick',
    biomes: ['Aurenveil', 'City', 'Alley'],
    intel: 56,
    tags: { behavior: ['Neutral', 'Territorial'], combat: ['Evasive'], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Feral alley cats keep the rat population in check. They are not aggressive unless cornered, but they will scratch.',
    stats: { HP: 23, Damage: 18, Defense: 14, Aggression: 34, Speed: 212, Mana: 0, 'Scratch': 34, 'Climb': 0, 'Hide': 0, Threat: 43 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Scratch':'#d32f2f', 'Climb':'#00bcd4', 'Hide':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Large creatures', 'Dogs'],
    res: [],
    ab: ['Scratch (weak, defensive)', 'Climb (escapes to rooftops)', 'Hide (vanishes into shadows)'],
    loot: [{ name:'Cat Whisker', rarity:'common', note:'Said to bring luck' }]
  };
  entries.push(alleyCat);

  // Market Rat
  const marketRat = {
    id: 'market_rat',
    name: 'Market Rat',
    sub: 'Rodent · Scavenger',
    rank: 'E',
    ibg: '#a09880',
    icon: '🐀',
    size: '~0.3 m, brown, fast',
    biomes: ['Aurenveil', 'City', 'Sewer', 'Market'],
    intel: 23,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Scavenger'] },
    desc: 'Rats are common in markets and sewers. They carry disease but are not aggressive unless in large numbers.',
    stats: { HP: 18, Damage: 12, Defense: 8, Aggression: 34, Speed: 187, Mana: 0, 'Bite': 23, 'Disease': 0, 'Scamper': 0, Threat: 34 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bite':'#d32f2f', 'Disease':'#800080', 'Scamper':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cats', 'Traps', 'Poison'],
    res: ['Disease'],
    ab: ['Bite (weak, may carry disease)', 'Disease (5% chance to infect)', 'Scamper (flees quickly)'],
    loot: [{ name:'Rat Tail', rarity:'common', note:'Bounty proof' }]
  };
  entries.push(marketRat);

  // ========================
  // SEWER DWELLERS (D–C)
  // ========================

  // Sewer Crocodile
  const sewerCrocodile = {
    id: 'sewer_crocodile',
    name: 'Sewer Crocodile',
    sub: 'Ambush Predator · Sewer Lurker',
    rank: 'D',
    ibg: '#8eae6e',
    icon: '🐊',
    size: '~2.5 m long, dark green, quiet',
    biomes: ['Aurenveil Sewer', 'Sewer', 'Aqueduct'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Sewer crocodiles are escaped or released pets that thrive in the dark waters below Aurenveil. They ambush from murky water.',
    stats: { HP: 287, Damage: 298, Defense: 243, Aggression: 487, Speed: 287, Mana: 12, 'Death Roll': 487, 'Bite': 387, 'Submerge': 0, Threat: 543 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Death Roll':'#d32f2f', 'Bite':'#ffa000', 'Submerge':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Bright light', 'Harpoons', 'Ranged'],
    res: ['Water', 'Disease'],
    ab: ['Death roll (grapple, 50 dmg per round, may drown)', 'Bite (piercing, bleed)', 'Submerge (hides underwater, +75% stealth)'],
    loot: [{ name:'Crocodile Hide', rarity:'uncommon', note:'Waterproof' }, { name:'Crocodile Teeth', rarity:'common', note:'Used in jewelry' }]
  };
  entries.push(sewerCrocodile);

  // Giant Sewer Rat
  const giantSewerRat = {
    id: 'giant_sewer_rat',
    name: 'Giant Sewer Rat',
    sub: 'Rodent · Swarm',
    rank: 'C',
    ibg: '#a09880',
    icon: '🐀',
    size: '~0.8 m long, brown, scarred',
    biomes: ['Aurenveil Sewer', 'Sewer', 'Catacomb'],
    intel: 12,
    tags: { behavior: ['Aggressive', 'Swarm'], combat: ['Swarm', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Giant sewer rats are aggressive and travel in packs. Their bites carry filth fever.',
    stats: { HP: 143, Damage: 187, Defense: 98, Aggression: 387, Speed: 312, Mana: 12, 'Filth Bite': 387, 'Swarm': 0, 'Disease': 0, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Filth Bite':'#d32f2f', 'Swarm':'#ffa000', 'Disease':'#800080', Threat:'#d32f2f' },
    weak: ['Fire', 'Area attacks', 'Cats'],
    res: ['Disease'],
    ab: ['Filth bite (poison, 10 dmg/sec, may infect)', 'Swarm (when 3+ together, gains +30% damage)', 'Disease (carries filth fever)'],
    loot: [{ name:'Giant Rat Hide', rarity:'common', note:'Tough leather' }]
  };
  entries.push(giantSewerRat);

  // ========================
  // ABANDONED BUILDING DWELLERS (C–B)
  // ========================

  // Gargoyle (Statue Guardian)
  const gargoyle = {
    id: 'gargoyle',
    name: 'Gargoyle',
    sub: 'Stone Guardian · Perch',
    rank: 'C',
    ibg: '#9e9e8e',
    icon: '🗿',
    size: '~1.5 m tall, stone wings, sits on ledges',
    biomes: ['Aurenveil', 'Cathedral', 'Old Tower', 'Abandoned Building'],
    intel: 43,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Siege'], intelligence: ['Reactive'], interaction: ['Guardian'] },
    desc: 'Gargoyles are stone constructs that perch on buildings, appearing as statues until prey passes. They drop from above and clamp onto targets.',
    stats: { HP: 387, Damage: 343, Defense: 387, Aggression: 543, 'Fly Speed': 287, Mana: 87, 'Stone Drop': 543, 'Clamp': 387, 'Petrify': 0, Threat: 612 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Stone Drop':'#d32f2f', 'Clamp':'#ffa000', 'Petrify':'#800080', Threat:'#d32f2f' },
    weak: ['Bludgeoning', 'Dispel magic'],
    res: ['Piercing', 'Slashing', 'Poison', 'Fear'],
    ab: ['Stone drop (drops from above, 100 dmg, knocks prone)', 'Clamp (grapples, 30 dmg per round)', 'Petrify (turns target to stone for 1 minute, save ends)'],
    loot: [{ name:'Gargoyle Stone', rarity:'uncommon', note:'Still animate – used in construct crafting' }]
  };
  entries.push(gargoyle);

  // Animated Armor (Urban variant)
  const urbanAnimatedArmor = {
    id: 'urban_animated_armor',
    name: 'Animated Armor',
    sub: 'Construct · Guard',
    rank: 'D',
    ibg: '#a0a090',
    icon: '🛡️',
    size: '~1.8 m, empty plate armor',
    biomes: ['Aurenveil', 'Castle', 'Manor', 'Guardian Chamber'],
    intel: 14,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Defensive'], intelligence: ['Instinctive'], interaction: ['Guardian'] },
    desc: 'Animated armors guard noble houses and old buildings. They attack intruders on sight.',
    stats: { HP: 187, Damage: 168, Defense: 247, Aggression: 187, Speed: 87, Mana: 43, 'Sword Slash': 187, 'Shield Bash': 168, 'Construct Resilience': 0, Threat: 247 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sword Slash':'#ffa000', 'Shield Bash':'#d32f2f', 'Construct Resilience':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Bludgeoning', 'Rust magic', 'Disable magic'],
    res: ['Piercing', 'Slashing', 'Poison', 'Fear', 'Critical hits'],
    ab: ['Sword slash (basic attack)', 'Shield bash (stun 1 sec)', 'Construct resilience (immune to bleed, poison, fear, critical hits)'],
    loot: [{ name:'Animated Plate', rarity:'common', note:'Can be re-enchanted' }]
  };
  entries.push(urbanAnimatedArmor);

  // Specter (Haunting Spirit)
  const specter = {
    id: 'specter_urban',
    name: 'Specter',
    sub: 'Haunting Spirit · Wailer',
    rank: 'B',
    ibg: '#b0b0c0',
    icon: '👻',
    size: '~1.8 m, translucent, cold mist',
    biomes: ['Aurenveil', 'Haunted House', 'Old Graveyard', 'Catacomb'],
    intel: 67,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Specters are restless spirits of those who died violently. They wail, drain life, and can pass through walls.',
    stats: { HP: 743, Damage: 687, Defense: 543, Aggression: 887, 'Fly Speed': 387, Mana: 587, 'Wail': 987, 'Life Drain': 787, 'Intangible': 0, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Wail':'#800080', 'Life Drain':'#d32f2f', 'Intangible':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Holy', 'Ghost touch', 'Purification'],
    res: ['Physical (immune)', 'Poison', 'Fear'],
    ab: ['Wail (AoE fear, 50 dmg, stuns for 3 sec)', 'Life drain (touch, 100 dmg, heals specter)', 'Intangible (immune to non-magical attacks, passes through walls)'],
    loot: [{ name:'Ectoplasm', rarity:'rare', note:'Ghostly residue – used in spirit-binding' }]
  };
  entries.push(specter);

  // ========================
  // CATACOMB / GRAVEYARD DWELLERS (B–A)
  // ========================

  // Crypt Creeper
  const cryptCreeper = {
    id: 'crypt_creeper',
    name: 'Crypt Creeper',
    sub: 'Undead · Crawler',
    rank: 'B',
    ibg: '#8e7e6e',
    icon: '🕷️',
    size: '~1.5 m, emaciated, crawling',
    biomes: ['Aurenveil Catacomb', 'Catacomb', 'Old Graveyard'],
    intel: 8,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Crypt creepers are emaciated undead that crawl on walls and ceilings. They drop onto prey and drain warmth.',
    stats: { HP: 543, Damage: 487, Defense: 387, Aggression: 743, Speed: 343, Mana: 87, 'Drop Attack': 743, 'Cold Touch': 543, 'Wall Crawl': 0, Threat: 787 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Drop Attack':'#d32f2f', 'Cold Touch':'#00bcd4', 'Wall Crawl':'#ffa000', Threat:'#d32f2f' },
    weak: ['Holy', 'Fire', 'Light'],
    res: ['Darkness', 'Cold'],
    ab: ['Drop attack (drops from ceiling, high damage, pins target)', 'Cold touch (slows target, 20 dmg/sec)', 'Wall crawl (can move on any surface)'],
    loot: [{ name:'Crypt Dust', rarity:'uncommon', note:'Used in necromancy' }]
  };
  entries.push(cryptCreeper);

  // ========================
  // LEGENDARY URBAN ENTITIES (S–SS)
  // ========================

  // The King's Guard (Elite Constructs)
  const kingsGuard = {
    id: 'kings_guard',
    name: 'The King\'s Guard',
    sub: 'Elite Construct · Royal Protectors',
    rank: 'S',
    ibg: '#c0c0d0',
    icon: '⚔️',
    size: '~2.2 m tall, ornate armor, glowing eyes',
    biomes: ['Aurenveil Castle', 'Royal Palace', 'Throne Room'],
    intel: 67,
    tags: { behavior: ['Protective', 'Territorial'], combat: ['Defensive', 'Siege'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'The King\'s Guard are elite animated armors that protect the royal family. They move with precision and are nearly indestructible.',
    stats: { HP: 3873, Damage: 2874, Defense: 3873, Aggression: 2874, Speed: 187, Mana: 587, 'Royal Strike': 3873, 'Shield Wall': 0, 'Indomitable': 0, Threat: 4873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Royal Strike':'#d32f2f', 'Shield Wall':'#ffa000', 'Indomitable':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Royal command', 'Disable magic', 'Overwhelming force'],
    res: ['All physical', 'Magic (partial)', 'Poison', 'Fear'],
    ab: ['Royal strike (ignores 50% armor, high damage)', 'Shield wall (adjacent guards gain +50% defense)', 'Indomitable (cannot be knocked prone or stunned)'],
    warn: 'The King\'s Guard are not hostile unless you threaten the royal family. Do not engage.',
    loot: [{ name:'Royal Guard Plate', rarity:'rare', note:'Ornate, used in ceremonial armor' }]
  };
  entries.push(kingsGuard);

  // ========================
  // NAMED LOCATION: KINGDOM OF AURENVEIL
  // ========================
  const kingdomAurenveil = {
    id: 'kingdom_aurenveil',
    name: 'Kingdom of Aurenveil',
    sub: 'Capital City · Dungeon Hub',
    rank: 'A (city) to SS (dungeon below)',
    ibg: '#c0c8d0',
    icon: '🏰',
    size: 'Large city, pop. ~50,000, with dungeon beneath',
    biomes: ['Aurenveil', 'Capital', 'City Dungeon Above'],
    intel: 187,
    tags: { behavior: ['Organized', 'Territorial'], combat: ['Urban'], intelligence: ['Strategic'], interaction: ['Civilization'] },
    desc: 'The Kingdom of Aurenveil is the capital of the region, a bustling city built above the Aurenveil Dungeon. The dungeon provides resources and jobs for adventurers, but also occasional danger. The city is walled, with a castle, markets, guilds, and a population of humans, demi-humans, and the occasional retired adventurer.',
    stats: {
      'Population': '~50,000',
      'Founded': '~400 years ago',
      'Ruler': 'King Aldric Valemont (of Red Wings fame)',
      'Guild Rank': 'All ranks present, guild headquarters',
      'Dungeon Below': 'Aurenveil Dungeon (40 floors, B to S)',
      'Known Threats': 'Sewer monsters, dungeon outbreaks, political intrigue'
    },
    bars: { 'Population':'#ffa000', 'Founded':'#00bcd4', 'Ruler':'#800080', 'Guild Rank':'#8bc34a', 'Dungeon Below':'#d32f2f', 'Known Threats':'#e91e63' },
    weak: ['Dungeon core destruction (would collapse city economy)'],
    res: ['Military (City Guard)', 'Adventurers (Guild)'],
    ab: [
      'Dungeon economy (the city thrives on dungeon resources)',
      'Guild headquarters (central hub for adventurers across the kingdom)',
      'City Guard (trained soldiers patrol streets, keep monster outbreaks contained)',
      'Walled defenses (high stone walls, gates, watchtowers)'
    ],
    warn: 'Aurenveil is a functional city, not a dungeon. Adventurers are welcome, but violence in the streets is punished severely. The City Guard is competent.',
    loot: [{ name:'Aurenveil Trade Goods', rarity:'common', note:'The city is a hub for trade. Weapons, potions, and gear are available.' }]
  };
  entries.push(kingdomAurenveil);

  // The Empty Cathedral (Haunted location)
  const emptyCathedral = {
    id: 'empty_cathedral',
    name: 'The Empty Cathedral',
    sub: 'Anomaly · Haunted Church',
    rank: 'A (estimated)',
    ibg: '#b0b0c0',
    icon: '⛪',
    size: 'Large cathedral, abandoned for decades',
    biomes: ['Aurenveil', 'Empty Cathedral', 'Haunted Site'],
    intel: 0,
    tags: { behavior: ['Territorial', 'Inscrutable'], combat: ['Environmental'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'The Empty Cathedral was abandoned after a massacre. It is said the ghosts of the slain still roam, and the bells ring at midnight by themselves. No one has successfully cleansed it. The Guild has marked it as "Avoid" for new adventurers.',
    stats: {
      'Abandoned Since': '~80 years',
      'Minimum Entry Rank': 'Gold (with holy protection)',
      'Spawn Pattern': 'Specters, crypt creepers, undead',
      'Risk Level': 'High – psychological torment',
      'Corruption Level': 'Severe'
    },
    bars: { 'Abandoned Since':'#ffa000', 'Minimum Entry Rank':'#d32f2f', 'Spawn Pattern':'#00bcd4', 'Risk Level':'#800080', 'Corruption Level':'#e91e63' },
    weak: ['Holy purification', 'Mass exorcism'],
    res: ['Physical traversal'],
    ab: [
      'Midnight bells (rings at midnight, attracts undead)',
      'Haunted halls (ghosts appear, deal psychic damage)',
      'No exit (the cathedral seems to have no doors after entering)',
      'Manifest undead (spawns specters and crypt creepers)'
    ],
    warn: 'Do not enter the Empty Cathedral. The Guild has declared it off-limits. Those who enter rarely return sane.',
    loot: [{ name:'Cathedral Relic', rarity:'rare', note:'A holy relic recovered by a Gold-rank party – valuable' }]
  };
  entries.push(emptyCathedral);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('urban', entries, 'Biomes', '🏙️');
    console.log('Urban data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();