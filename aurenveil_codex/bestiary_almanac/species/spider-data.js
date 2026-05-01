// species/spider-data.js
(function() {
  const entries = [];

  // ========================
  // 1. SPIDERLING (Tiny, swarm)
  // ========================
  const spiderling = {
    id: 'spiderling',
    name: 'Spiderling',
    sub: 'Tiny Spider · Swarm',
    rank: 'F',
    ibg: '#6e5e4e',
    icon: '🕷️',
    size: '~5 cm, hairless, fast',
    biomes: ['Cave', 'Forest', 'Dungeon'],
    intel: 2,
    tags: { behavior: ['Aggressive', 'Swarm'], combat: ['Swarm'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Spiderlings are newly hatched spiders, often found in clusters. Individually harmless, but a swarm can overwhelm small prey.',
    stats: { HP: 8, Damage: 12, Defense: 4, Aggression: 34, Speed: 87, Mana: 0, 'Venom Bite': 23, 'Swarm': 0, Threat: 34 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Venom Bite':'#800080', 'Swarm':'#ffa000', Threat:'#d32f2f' },
    weak: ['Area attack', 'Fire', 'Cold'],
    res: ['Poison'],
    ab: ['Venom bite (weak poison, 2 dmg/sec for 10 sec)', 'Swarm (10+ spiderlings deal 5x damage)'],
    loot: [{ name:'Spinneret', rarity:'common', note:'Gland used in low-grade silk' }]
  };
  entries.push(spiderling);

  // ========================
  // 4. JUMPING SPIDER (Friendly pet)
  // ========================
  const jumpingSpider = {
    id: 'jumping_spider',
    name: 'Jumping Spider',
    sub: 'Curious Companion · Intelligent Arachnid',
    rank: 'F',
    ibg: '#c0b09a',
    icon: '🕷️',
    size: '~0.5 m (cat-sized), fluffy, large eyes',
    biomes: ['Forest', 'Grassland', 'Near Human Settlements'],
    intel: 78,
    tags: { behavior: ['Curious', 'Friendly'], combat: [], intelligence: ['Aware'], interaction: ['Symbiotic', 'Pet'] },
    desc: 'Jumping spiders are a rare, intelligent breed of spider about the size of a house cat. They are curious, playful, and form bonds with humans.',
    stats: { HP: 67, Damage: 23, Defense: 34, Aggression: 12, Speed: 212, Mana: 0, 'Pounce': 67, 'Nip': 12, 'Fetch': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pounce':'#ffa000', 'Nip':'#d32f2f', 'Fetch':'#8bc34a', Threat:'#607d8b' },
    weak: ['Large predators', 'Neglect', 'Loud sudden noises'],
    res: ['Poison', 'Falling'],
    ab: ['Pounce (playful tackle, harmless)', 'Nip (defensive bite, causes numbness)', 'Fetch (retrieves small items)'],
    loot: [{ name:'Jumping Spider Silk', rarity:'uncommon', note:'Soft, elastic – used in bandages' }],
    variants: [
	  {
		key: 'giant',
		label: '🐕 Giant Jumping Spider',
		rank: 'D',
		ibg: '#b0a090',
		icon: '🕷️',
		sub: 'Giant Jumping Spider · Mount',
		size: '~2 m tall, dog-like',
		desc: 'A massive jumping spider, large enough to serve as a mount. Still friendly.',
		stats: { HP: 287, Damage: 187, Defense: 143, Aggression: 143, Speed: 312, Mana: 0, 'Pounce': 287, 'Numbing Bite': 143, 'Jump': 0, Threat: 287 },
		bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pounce':'#ffa000', 'Numbing Bite':'#800080', 'Jump':'#00bcd4', Threat:'#d32f2f' },
		weak: ['Large predators', 'Heavy armor'],
		res: ['Poison'],
		ab: ['Pounce (tackle, stuns for 2 seconds)', 'Numbing bite (paralyzes limb for 5 minutes)', 'Jump (can leap 15 m)'],
		loot: [{ name:'Giant Spider Fur', rarity:'rare', note:'Warm and light' }]
	  }
	]
  };
  entries.push(jumpingSpider);

  // ========================
  // 2. CAVE SPIDER
  // ========================
  const caveSpider = {
    id: 'cave_spider',
    name: 'Cave Spider',
    sub: 'Web Weaver · Trap Setter',
    rank: 'E',
    ibg: '#8e7e6e',
    icon: '🕷️',
    size: '~0.5 m, pale, eight eyes',
    biomes: ['Cave', 'Dungeon', 'Ruins'],
    intel: 12,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Cave spiders build sticky webs across passages. They are blind but sensitive to vibrations.',
    stats: { HP: 67, Damage: 87, Defense: 43, Aggression: 123, Speed: 143, Mana: 12, 'Web Shot': 143, 'Venom Bite': 123, 'Vibration Sense': 0, Threat: 167 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Web Shot':'#ffa000', 'Venom Bite':'#800080', 'Vibration Sense':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Light', 'Loud noise'],
    res: ['Poison', 'Web'],
    ab: ['Web shot (immobilizes target for 5 seconds)', 'Venom bite (weakens target: -20% damage for 1 minute)', 'Vibration sense (detects movement within 20 m)'],
    loot: [{ name:'Cave Spider Silk', rarity:'common', note:'Sticky – used in ropes and nets' }]
  };
  entries.push(caveSpider);

  // ========================
  // 3. WEB WEAVER
  // ========================
  const webWeaver = {
    id: 'web_weaver',
    name: 'Web Weaver',
    sub: 'Greater Web Builder · Trap Master',
    rank: 'D',
    ibg: '#9e8e7e',
    icon: '🕷️',
    size: '~1.2 m, thick legs, spinnerets visible',
    biomes: ['Forest', 'Dungeon', 'Ruins'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Web weavers create massive webs that cover entire rooms. Their webs are flammable.',
    stats: { HP: 187, Damage: 143, Defense: 98, Aggression: 243, Speed: 187, Mana: 23, 'Web Spray': 243, 'Paralytic Bite': 187, 'Web Sense': 0, Threat: 287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Web Spray':'#ffa000', 'Paralytic Bite':'#800080', 'Web Sense':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Swords', 'Smoke'],
    res: ['Poison', 'Web'],
    ab: ['Web spray (covers large area, difficult terrain)', 'Paralytic bite (paralyzes for 1 minute, save each round)', 'Web sense (knows location of all creatures touching web)'],
    loot: [{ name:'Web Weaver Spinneret', rarity:'uncommon', note:'Used to create sticky traps' }]
  };
  entries.push(webWeaver);
  
  // ========================
  // 5. HUNTING SPIDER
  // ========================
  const huntingSpider = {
    id: 'hunting_spider',
    name: 'Hunting Spider',
    sub: 'Aggressive Jumper · Pursuer',
    rank: 'C',
    ibg: '#ae9e8e',
    icon: '🕷️',
    size: '~1.5 m, long legs, patterned body',
    biomes: ['Forest', 'Grassland', 'Plains'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Opportunistic'], combat: ['Burst', 'Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Hunting spiders are aggressive, fast predators that stalk prey across open ground.',
    stats: { HP: 287, Damage: 387, Defense: 243, Aggression: 543, Speed: 387, Mana: 23, 'Leaping Bite': 543, 'Necrotic Venom': 487, 'Grapple': 387, Threat: 587 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Leaping Bite':'#d32f2f', 'Necrotic Venom':'#800080', 'Grapple':'#ffa000', Threat:'#d32f2f' },
    weak: ['Fire', 'Cold', 'Large shields'],
    res: ['Poison', 'Fear'],
    ab: ['Leaping bite (jumps 10 m, high damage, knocks prone)', 'Necrotic venom (20 dmg/sec for 30 sec)', 'Grapple (restrains target, crushing damage)'],
    loot: [{ name:'Hunting Spider Fangs', rarity:'uncommon', note:'Used in necrotic poison weapons' }]
  };
  entries.push(huntingSpider);

  // ========================
  // 6. TRAPDOOR SPIDER
  // ========================
  const trapdoorSpider = {
    id: 'trapdoor_spider',
    name: 'Trapdoor Spider',
    sub: 'Burrower · Ambush',
    rank: 'C',
    ibg: '#9e8e6e',
    icon: '🕷️',
    size: '~1.2 m, thick legs, sandy color',
    biomes: ['Desert', 'Badlands', 'Scrub'],
    intel: 21,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Trapdoor spiders dig burrows with camouflaged lids. They burst out to grab prey.',
    stats: { HP: 312, Damage: 343, Defense: 287, Aggression: 487, Speed: 243, Mana: 12, 'Ambush Strike': 543, 'Drag Under': 0, 'Sand Camouflage': 0, Threat: 543 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Ambush Strike':'#d32f2f', 'Drag Under':'#800080', 'Sand Camouflage':'#ffa000', Threat:'#d32f2f' },
    weak: ['Detection', 'Flooding', 'Smoke'],
    res: ['Poison', 'Heat'],
    ab: ['Ambush strike (double damage on first round)', 'Drag under (pulls target into burrow, suffocation)', 'Sand camouflage (invisible while stationary in sand)'],
    loot: [{ name:'Trapdoor Silk', rarity:'uncommon', note:'Tough, used in desert gear' }]
  };
  entries.push(trapdoorSpider);

  // ========================
  // 7. PHASE SPIDER
  // ========================
  const phaseSpider = {
    id: 'phase_spider',
    name: 'Phase Spider',
    sub: 'Ethereal Hunter · Dimensional',
    rank: 'B',
    ibg: '#a0a0c0',
    icon: '🕷️',
    size: '~2 m, translucent body, glowing eyes',
    biomes: ['Ethereal Plane', 'Deep Dungeon', 'Phase Rift'],
    intel: 67,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Phase spiders shift between the material and ethereal planes, appearing suddenly to strike.',
    stats: { HP: 743, Damage: 687, Defense: 543, Aggression: 987, Speed: 487, Mana: 387, 'Phase Bite': 987, 'Ethereal Shift': 0, 'Confusion Venom': 0, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Phase Bite':'#d32f2f', 'Ethereal Shift':'#00bcd4', 'Confusion Venom':'#800080', Threat:'#d32f2f' },
    weak: ['Force damage', 'True sight', 'Dispel magic'],
    res: ['Physical', 'Poison'],
    ab: ['Phase bite (attacks from ethereal, ignores armor)', 'Ethereal shift (cannot be targeted for 1 round)', 'Confusion venom (confused for 1 minute)'],
    loot: [{ name:'Phase Spider Silk', rarity:'rare', note:'Semi-ethereal – used in planar cloaks' }]
  };
  entries.push(phaseSpider);

  // ========================
  // 8. SHADOW SPIDER
  // ========================
  const shadowSpider = {
    id: 'shadow_spider',
    name: 'Shadow Spider',
    sub: 'Shadow Weaver · Darkness',
    rank: 'B',
    ibg: '#5e5e7e',
    icon: '🕷️',
    size: '~2.5 m, black, blends into shadows',
    biomes: ['Shadow Plane', 'Cursed Dungeon', 'Underdark'],
    intel: 56,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Shadow spiders are native to the shadow plane. They are nearly invisible in darkness.',
    stats: { HP: 843, Damage: 743, Defense: 643, Aggression: 1087, Speed: 487, Mana: 543, 'Shadow Bite': 1087, 'Darkness Smother': 0, 'Shadow Step': 0, Threat: 1187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Shadow Bite':'#d32f2f', 'Darkness Smother':'#800080', 'Shadow Step':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Light', 'Holy', 'Daylight spells'],
    res: ['Darkness', 'Cold', 'Poison'],
    ab: ['Shadow bite (necrotic damage, blinds target)', 'Darkness smother (creates 10 m darkness)', 'Shadow step (teleport between shadows)'],
    loot: [{ name:'Shadow Silk', rarity:'rare', note:'Absorbs light – used in stealth gear' }]
  };
  entries.push(shadowSpider);

  // ========================
  // 9. FROST SPIDER
  // ========================
  const frostSpider = {
    id: 'frost_spider',
    name: 'Frost Spider',
    sub: 'Ice Weaver · Cold',
    rank: 'A',
    ibg: '#b0d8e8',
    icon: '🕷️',
    size: '~2.5 m, pale blue, icy bristles',
    biomes: ['Tundra', 'Glacier', 'Frozen Cavern'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Frost spiders spin webs of ice that freeze prey solid. Their venom causes hypothermia.',
    stats: { HP: 987, Damage: 843, Defense: 743, Aggression: 1287, Speed: 387, Mana: 743, 'Ice Web': 1287, 'Freezing Bite': 987, 'Cold Aura': 0, Threat: 1387 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Ice Web':'#00bcd4', 'Freezing Bite':'#d32f2f', 'Cold Aura':'#ffa000', Threat:'#d32f2f' },
    weak: ['Fire', 'Heat', 'Salt'],
    res: ['Cold', 'Ice'],
    ab: ['Ice web (freezes target solid, immobilized)', 'Freezing bite (slows target by 50%)', 'Cold aura (10 dmg/sec to enemies within 10 m)'],
    loot: [{ name:'Frost Silk', rarity:'rare', note:'Never thaws – used in ice magic' }]
  };
  entries.push(frostSpider);

  // ========================
  // 10. FIRE SPIDER
  // ========================
  const fireSpider = {
    id: 'fire_spider',
    name: 'Fire Spider',
    sub: 'Magma Weaver · Heat',
    rank: 'A',
    ibg: '#e0a070',
    icon: '🕷️',
    size: '~2 m, red-orange, glowing',
    biomes: ['Volcano', 'Magma Tube', 'Ash Field'],
    intel: 28,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Fire spiders dwell in volcanoes. Their webs burn with intense heat.',
    stats: { HP: 1087, Damage: 987, Defense: 843, Aggression: 1487, Speed: 387, Mana: 543, 'Flame Web': 1487, 'Combustion Bite': 1187, 'Heat Aura': 0, Threat: 1587 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Flame Web':'#ff5722', 'Combustion Bite':'#d32f2f', 'Heat Aura':'#ffa000', Threat:'#d32f2f' },
    weak: ['Water', 'Ice', 'Cold'],
    res: ['Fire', 'Heat', 'Lava'],
    ab: ['Flame web (creates fire wall, 20 dmg/sec)', 'Combustion bite (target catches fire)', 'Heat aura (10 dmg/sec within 5 m)'],
    loot: [{ name:'Fire Silk', rarity:'rare', note:'Always warm – used in flame resistance' }]
  };
  entries.push(fireSpider);

  // ========================
  // 11. QUEEN SPIDER
  // ========================
  const queenSpider = {
    id: 'queen_spider',
    name: 'Queen Spider',
    sub: 'Matriarch · Colony Ruler',
    rank: 'S',
    ibg: '#8e6e5e',
    icon: '👑',
    size: '~4 m long, bloated abdomen, many legs',
    biomes: ['Deep Nest', 'Spider Colony', 'Underdark'],
    intel: 98,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Control', 'Swarm'], intelligence: ['Strategic'], interaction: ['Ruler'] },
    desc: 'The queen spider rules a colony of thousands. She lays eggs constantly.',
    stats: { HP: 5874, Damage: 4873, Defense: 3874, Aggression: 6874, Speed: 147, Mana: 1873, 'Command Spiders': 0, 'Egg Burst': 3874, 'Toxic Spray': 5874, Threat: 6874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Command Spiders':'#ffa000', 'Egg Burst':'#800080', 'Toxic Spray':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Fire', 'Smoke', 'Kill eggs'],
    res: ['Poison', 'Physical'],
    ab: ['Command spiders (all spiders gain +50% damage, +50% speed)', 'Egg burst (spawns 10-20 spiderlings)', 'Toxic spray (cone, poison, 50 dmg/sec)'],
    warn: 'Do not fight the queen in her lair. Kill the eggs first.',
    loot: [{ name:'Queen Spider Silk', rarity:'unique', note:'Extremely tough' }, { name:'Royal Venom Gland', rarity:'unique', note:'Can poison a dragon' }]
  };
  entries.push(queenSpider);

  // ========================
  // 12. MOTHER OF SPIDERS
  // ========================
  const motherOfSpiders = {
    id: 'mother_of_spiders',
    name: 'Mother of Spiders',
    sub: 'Primordial Spider · God Entity',
    rank: 'SS',
    ibg: '#5e3e3e',
    icon: '🕸️',
    size: 'Variable, can be as large as a mountain',
    biomes: ['Web of Worlds', 'Conceptual Plane'],
    intel: 789,
    tags: { behavior: ['Inscrutable', 'Territorial'], combat: ['Siege', 'Control', 'Swarm'], intelligence: ['Sentient'], interaction: ['Ruler', 'Anomaly'] },
    desc: 'The Mother of Spiders is a primordial entity, mother of all arachnids. She exists beyond mortal comprehension.',
    stats: { HP: 48743, Damage: 38743, Defense: 38743, Aggression: 0, Speed: 0, Mana: 48743, 'World Web': 0, 'Birth of Spiders': 0, 'Web of Fate': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'World Web':'#ffa000', 'Birth of Spiders':'#800080', 'Web of Fate':'#00bcd4', Threat:'#607d8b' },
    weak: ['Divine fire', 'Sealing', 'Conceptual destruction'],
    res: ['All physical', 'All magic', 'Poison', 'Fear', 'Death'],
    ab: ['World web (covers entire map in webs)', 'Birth of spiders (spawns 100 spiders every minute)', 'Web of fate (target cannot act for 1 day)'],
    warn: 'Do not engage. This is not a combat encounter. The Mother of Spiders is a world event.',
    loot: [{ name:'Arachne\'s Blessing', rarity:'unique', note:'Grants immunity to poison and spider empathy' }]
  };
  entries.push(motherOfSpiders);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('spiders', entries, 'Species', '🕷️');
    console.log('Spider data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();