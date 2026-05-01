// species/giants-data.js
(function() {
  const entries = [];

  // ========================
  // 1. HILL GIANT (Brute)
  // ========================
  const hillGiant = {
    id: 'hill_giant',
    name: 'Hill Giant',
    sub: 'Brutish Giant · Brawler',
    rank: 'C',
    ibg: '#a0896a',
    icon: '🗿',
    size: '~4.5 m tall, muscular, crude leather',
    biomes: ['Hills', 'Mountains', 'Badlands'],
    intel: 12,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Hill giants are the smallest and least intelligent of true giants. They live in caves, raid livestock, and throw boulders. They are gluttonous and lazy, but dangerous in melee.',
    stats: { HP: 1873, Damage: 1437, Defense: 1243, Aggression: 1873, Speed: 187, Mana: 43, 'Boulder Toss': 1687, 'Greatclub Smash': 1873, 'Crushing Hug': 1437, Threat: 1987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Boulder Toss':'#ffa000', 'Greatclub Smash':'#d32f2f', 'Crushing Hug':'#800080', Threat:'#d32f2f' },
    weak: ['Fire', 'Magic', 'Kiting'],
    res: ['Physical (bludgeoning)', 'Cold'],
    ab: ['Boulder toss (ranged, high damage, knocks prone)', 'Greatclub smash (melee, area attack, 5 m radius)', 'Crushing hug (grapple, deals 50 dmg per round)'],
    loot: [{ name:'Giant Bone Club', rarity:'common', note:'Crude but heavy' }, { name:'Giant Hide', rarity:'common', note:'Tough leather' }]
  };
  entries.push(hillGiant);

  // ========================
  // 2. FOREST GIANT (Nature-aligned)
  // ========================
  const forestGiant = {
    id: 'forest_giant',
    name: 'Forest Giant',
    sub: 'Gentle Giant · Guardian',
    rank: 'C',
    ibg: '#8eae6e',
    icon: '🌳',
    size: '~5 m tall, mossy skin, antler crown',
    biomes: ['Forest', 'Deep Woods', 'Ancient Grove'],
    intel: 67,
    tags: { behavior: ['Neutral', 'Protective'], combat: ['Control', 'Support'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Forest giants are shy, reclusive giants that protect ancient groves. They are not hostile unless their trees are harmed. They can command plants and animals.',
    stats: { HP: 1687, Damage: 1243, Defense: 1437, Aggression: 087, Speed: 187, Mana: 687, 'Root Command': 1243, 'Animal Summon': 0, 'Healing Sap': 0, Threat: 1437 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Root Command':'#ffa000', 'Animal Summon':'#8bc34a', 'Healing Sap':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Axes', 'Clearing forest'],
    res: ['Nature magic', 'Poison'],
    ab: ['Root command (entangles enemies, roots sprout from ground)', 'Animal summon (calls 2-4 wolves or bears)', 'Healing sap (heals 100 HP, can be used on allies)'],
    loot: [{ name:'Giant Antler', rarity:'uncommon', note:'Used in druidic rituals' }]
  };
  entries.push(forestGiant);

  // ========================
  // 3. FROST GIANT (Ice warrior)
  // ========================
  const frostGiant = {
    id: 'frost_giant',
    name: 'Frost Giant',
    sub: 'Ice Jarl · Raider',
    rank: 'B',
    ibg: '#b0d8e8',
    icon: '❄️',
    size: '~5.5 m tall, pale blue skin, white hair',
    biomes: ['Tundra', 'Glacier', 'Frozen Mountain'],
    intel: 56,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Frost giants are fierce raiders from the frozen north. They wield massive ice axes and hurl jagged icicles. They are immune to cold.',
    stats: { HP: 2374, Damage: 1873, Defense: 1687, Aggression: 2374, Speed: 187, Mana: 387, 'Icicle Spear': 2187, 'Ice Axe': 2374, 'Cold Aura': 0, Threat: 2587 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Icicle Spear':'#00bcd4', 'Ice Axe':'#d32f2f', 'Cold Aura':'#ffa000', Threat:'#d32f2f' },
    weak: ['Fire', 'Heat', 'Blunt force'],
    res: ['Cold', 'Ice'],
    ab: ['Icicle spear (ranged, piercing, may freeze target)', 'Ice axe (melee, high damage, causes bleed)', 'Cold aura (10 dmg/sec to enemies within 10 m)'],
    loot: [{ name:'Frost Giant Ice Axe', rarity:'rare', note:'Always cold – frost damage' }, { name:'Fur of the Jarl', rarity:'rare', note:'Cold resistance cloak' }]
  };
  entries.push(frostGiant);

  // ========================
  // 4. FIRE GIANT (Magma smith)
  // ========================
  const fireGiant = {
    id: 'fire_giant',
    name: 'Fire Giant',
    sub: 'Smith · Forgemaster',
    rank: 'B',
    ibg: '#e0a070',
    icon: '🔥',
    size: '~6 m tall, dark red skin, glowing veins',
    biomes: ['Volcano', 'Magma Chamber', 'Ash Desert'],
    intel: 78,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Fire giants are master smiths who live near volcanoes. They forge magical weapons and wear plate armor. Their swords are red-hot and sear on contact.',
    stats: { HP: 2873, Damage: 2374, Defense: 2187, Aggression: 2873, Speed: 187, Mana: 587, 'Red-Hot Sword': 2873, 'Lava Splash': 2187, 'Heat Aura': 0, Threat: 3087 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Red-Hot Sword':'#ff5722', 'Lava Splash':'#ffa000', 'Heat Aura':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Water', 'Ice', 'Cold'],
    res: ['Fire', 'Heat', 'Lava'],
    ab: ['Red-Hot sword (ignites target, 20 dmg/sec for 30 sec)', 'Lava splash (cone, fire damage, may stick)', 'Heat aura (15 dmg/sec within 15 m)'],
    loot: [{ name:'Fire Giant Forged Blade', rarity:'rare', note:'+1 fire damage' }, { name:'Molten Core', rarity:'rare', note:'Used in fire artifacts' }]
  };
  entries.push(fireGiant);

  // ========================
  // 5. STONE GIANT (Rock thrower)
  // ========================
  const stoneGiant = {
    id: 'stone_giant',
    name: 'Stone Giant',
    sub: 'Rock Hurler · Caves',
    rank: 'B',
    ibg: '#b0a888',
    icon: '🗻',
    size: '~5 m tall, grey skin, rocky texture',
    biomes: ['Mountains', 'Caves', 'Underdark'],
    intel: 67,
    tags: { behavior: ['Reclusive', 'Territorial'], combat: ['Ranged', 'Burst'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Stone giants live deep in caves and mountains. They are reclusive, hurling rocks at intruders from afar. They can meld into stone walls.',
    stats: { HP: 2187, Damage: 1873, Defense: 1987, Aggression: 2187, Speed: 187, Mana: 287, 'Rock Toss': 2187, 'Stone Meld': 0, 'Avalanche': 1873, Threat: 2487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Rock Toss':'#ffa000', 'Stone Meld':'#00bcd4', 'Avalanche':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Bludgeoning', 'Earth magic', 'Acid'],
    res: ['Physical', 'Poison'],
    ab: ['Rock toss (ranged, high damage, stun)', 'Stone meld (merge into rock, become invisible, heal while merged)', 'Avalanche (summons falling rocks, large AoE)'],
    loot: [{ name:'Stone Giant Pebble', rarity:'uncommon', note:'Heavy, used in siege' }]
  };
  entries.push(stoneGiant);

  // ========================
  // 6. CLOUD GIANT (Airborne)
  // ========================
  const cloudGiant = {
    id: 'cloud_giant',
    name: 'Cloud Giant',
    sub: 'Sky Lord · Diplomat',
    rank: 'A',
    ibg: '#d0d8e8',
    icon: '☁️',
    size: '~7 m tall, pale skin, fine clothing',
    biomes: ['Mountain Peaks', 'Sky', 'Cloud Palace'],
    intel: 187,
    tags: { behavior: ['Neutral', 'Strategic'], combat: ['Control', 'Support'], intelligence: ['Strategic'], interaction: ['Organized', 'Ruler'] },
    desc: 'Cloud giants live in floating castles among the clouds. They are intelligent, wealthy, and often act as rulers of lesser giants. They can control weather.',
    stats: { HP: 3873, Damage: 2874, Defense: 2874, Aggression: 1873, Speed: 287, Mana: 2874, 'Lightning Bolt': 3873, 'Fog Cloud': 0, 'Levitate': 0, Threat: 3873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Lightning Bolt':'#ffa000', 'Fog Cloud':'#00bcd4', 'Levitate':'#800080', Threat:'#d32f2f' },
    weak: ['Anti-magic', 'Dispel'],
    res: ['Lightning', 'Cold'],
    ab: ['Lightning bolt (line, electricity, high damage)', 'Fog cloud (creates dense fog, reduces visibility, blocks ranged attacks)', 'Levitate (can fly, cannot be knocked prone)'],
    loot: [{ name:'Cloud Giant Scepter', rarity:'rare', note:'Command cloud' }]
  };
  entries.push(cloudGiant);

  // ========================
  // 7. STORM GIANT (Thunder)
  // ========================
  const stormGiant = {
    id: 'storm_giant',
    name: 'Storm Giant',
    sub: 'Tempest Lord · Seer',
    rank: 'S',
    ibg: '#b0c0e8',
    icon: '⛈️',
    size: '~8 m tall, purple-blue skin, white hair',
    biomes: ['Coastal Cliffs', 'Storm Islands', 'Deep Ocean'],
    intel: 287,
    tags: { behavior: ['Neutral', 'Mysterious'], combat: ['Control', 'Burst'], intelligence: ['Strategic'], interaction: ['Ruler', 'Seer'] },
    desc: 'Storm giants are the most powerful of the elemental giants. They live on remote islands or under the sea. They can create storms and see the future. They are wise and rarely hostile.',
    stats: { HP: 5874, Damage: 4873, Defense: 4873, Aggression: 2874, Speed: 287, Mana: 5874, 'Thunderbolt': 6874, 'Call Lightning': 5874, 'Storm Shield': 0, Threat: 6874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Thunderbolt':'#ffa000', 'Call Lightning':'#00bcd4', 'Storm Shield':'#800080', Threat:'#d32f2f' },
    weak: ['Anti-magic', 'Sealed areas'],
    res: ['Lightning', 'Thunder', 'Water'],
    ab: ['Thunderbolt (target, high lightning damage, deafens)', 'Call lightning (summons lightning strike, large AoE)', 'Storm shield (reflects projectiles, immune to lightning)'],
    loot: [{ name:'Storm Giant Pearl', rarity:'unique', note:'Can see future once' }]
  };
  entries.push(stormGiant);

  // ========================
  // 8. MOUNTAIN TITAN (Legendary)
  // ========================
  const mountainTitan = {
    id: 'mountain_titan',
    name: 'Mountain Titan',
    sub: 'Primordial Giant · Landscape Shaper',
    rank: 'SS',
    ibg: '#8e8e7e',
    icon: '🏔️',
    size: '~30 m tall, stone and earth, mossy',
    biomes: ['Mountain Range', 'World Spine', 'Primordial Peaks'],
    intel: 187,
    tags: { behavior: ['Passive', 'Territorial'], combat: ['Siege', 'Control'], intelligence: ['Aware'], interaction: ['Environmental'] },
    desc: 'Mountain titans are ancient giants that are indistinguishable from mountains. They sleep for millennia. When they move, earthquakes reshape the land. They are not evil, simply geological.',
    stats: { HP: 28743, Damage: 18743, Defense: 24873, Aggression: 0, Speed: 47, Mana: 8743, 'Earthquake': 24873, 'Avalanche': 18743, 'Mountain Stride': 0, Threat: 24873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Earthquake':'#ffa000', 'Avalanche':'#d32f2f', 'Mountain Stride':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Divine intervention', 'World Turtle (neutral)'],
    res: ['All physical', 'Earth magic', 'Poison', 'Fear'],
    ab: ['Earthquake (large AoE, structures collapse, creatures prone)', 'Avalanche (snow/rockslide, 500 dmg, buries)', 'Mountain stride (can walk through solid rock)'],
    warn: 'Mountain titans are not enemies. They are natural disasters that occasionally awaken.',
    loot: [{ name:'Titan Stone', rarity:'unique', note:'Powers earth magic', warn:'May cause earthquakes' }]
  };
  entries.push(mountainTitan);

  // ========================
  // 9. WORLD GIANT (Cosmic)
  // ========================
  const worldGiant = {
	  id: 'world_giant',
	  name: 'World Giant',
	  sub: 'Cosmic Entity · Sky Bearer',
	  rank: 'SSS',
	  ibg: '#6e6eae',
	  icon: '🌎',
	  size: '~100 km tall (mythical), holds up the sky',
	  biomes: ['Cosmic', 'Edge of World'],
	  intel: 0,
	  tags: { behavior: ['Passive'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
	  desc: 'The World Giant is a mythic being said to hold up the sky. It is not a combat encounter – it is a cosmological constant. Some cultures believe the world rests on its shoulders. Unlike the World Turtle (which carries the land), the World Giant supports the heavens. Both are unfightable, but the Turtle is far older. Possibly petrified, possibly sleeping, or just a geographical feature that resembles a giant.',
	  stats: { HP: 0, Damage: 0, Defense: 0, Aggression: 0, Speed: 0, Mana: 0, 'Hold Sky': 0, 'World Bearer': 0, 'Sleep': 0, Threat: 0 },
	  bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Hold Sky':'#00bcd4', 'World Bearer':'#800080', 'Sleep':'#ffa000', Threat:'#607d8b' },
	  weak: ['None'],
	  res: ['All (invulnerable)'],
	  ab: ['Hold sky (keeps the sky from falling, no combat use)', 'World bearer (carries the world on its shoulders)', 'Sleep (has been asleep for millennia)'],
	  warn: 'The World Giant cannot be fought. It is a setting element. Do not confuse it with the World Turtle – they serve different cosmic functions.',
	  loot: [{ name:'None', rarity:'unique', note:'You cannot loot a world.' }]
	};
  entries.push(worldGiant);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('giants', entries, 'Species', '🏔️');
    console.log('Giants data loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();