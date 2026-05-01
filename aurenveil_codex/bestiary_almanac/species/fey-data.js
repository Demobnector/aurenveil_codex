// species/fey-data.js
(function() {
  const entries = [];

  // ========================
  // 1. PIXIE (Friendly, helpful)
  // ========================
  const pixie = {
    id: 'pixie',
    name: 'Pixie',
    sub: 'Lesser Fey · Helpful Sprite',
    rank: 'F',
    ibg: '#f0e0d0',
    icon: '🧚',
    size: '~0.3 m, tiny, shimmering wings',
    biomes: ['Forest','Meadow','Garden'],
    intel: 78,
    tags: { behavior: ['Neutral','Helpful'], combat: [], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Pixies are tiny, friendly fey that help lost travelers find their way. They can heal minor wounds and create small illusions. They avoid combat and will flee if threatened. Killing a pixie is considered bad luck.',
    stats: { HP: 23, Damage: 8, Defense: 12, Aggression: 0, Speed: 187, Mana: 87, 'Healing Glow': 0, 'Illusion': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Healing Glow':'#8bc34a', 'Illusion':'#00bcd4', Threat:'#607d8b' },
    weak: ['Cold iron','Dispel magic'],
    res: ['Physical (non-cold iron)','Charm'],
    ab: ['Healing glow (heals 10 HP, cures minor poison)', 'Illusion (creates false light or sound)', 'Flee (automatically escapes if attacked)'],
    loot: [{ name:'Pixie Dust', rarity:'common', note:'Glows faintly – used in light enchantments' }]
  };
  entries.push(pixie);

  // ========================
  // 2. SPRITE (Trickster)
  // ========================
  const sprite = {
    id: 'sprite',
    name: 'Sprite',
    sub: 'Lesser Fey · Trickster',
    rank: 'E',
    ibg: '#d0e8c0',
    icon: '🧚',
    size: '~0.4 m, colorful wings, mischievous grin',
    biomes: ['Forest','Meadow','Swamp'],
    intel: 112,
    tags: { behavior: ['Trickster','Opportunistic'], combat: ['Control'], intelligence: ['Aware'], interaction: ['Misleading'] },
    desc: 'Sprites are mischievous fey that enjoy leading travelers off course, tying shoelaces, and stealing small items. They are not malicious, just playful. They can shoot sleep arrows from a tiny bow.',
    stats: { HP: 34, Damage: 23, Defense: 18, Aggression: 43, Speed: 212, Mana: 67, 'Sleep Arrow': 87, 'Dazzle': 0, 'Hide': 0, Threat: 67 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sleep Arrow':'#800080', 'Dazzle':'#ffa000', 'Hide':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold iron','True sight'],
    res: ['Charm','Illusions'],
    ab: ['Sleep arrow (target falls asleep for 1 minute, save ends)', 'Dazzle (blinds target for 3 seconds)', 'Hide (invisible in foliage)'],
    loot: [{ name:'Sprite Bow', rarity:'uncommon', note:'Tiny bow, useless for humans but valuable to collectors' }]
  };
  entries.push(sprite);

  // ========================
  // 3. NIXIE (Water Fey)
  // ========================
  const nixie = {
    id: 'nixie',
    name: 'Nixie',
    sub: 'Water Fey · Drown Maiden',
    rank: 'E',
    ibg: '#b0d8e8',
    icon: '🧜‍♀️',
    size: '~0.8 m, aquatic, fish-like tail',
    biomes: ['River','Lake','Pond'],
    intel: 67,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Nixies are water-dwelling fey that lure swimmers into deep water and drown them. They are beautiful from a distance but their eyes are empty. They are vulnerable to cold iron.',
    stats: { HP: 87, Damage: 67, Defense: 43, Aggression: 167, Speed: 143, Mana: 87, 'Drown': 187, 'Water Pull': 143, Threat: 187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Drown':'#d32f2f', 'Water Pull':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold iron','Fire','Drain water'],
    res: ['Water','Cold'],
    ab: ['Drown (grapples, target suffocates underwater)', 'Water pull (drags target into deep water)', 'Aquatic (cannot drown, high swim speed)'],
    loot: [{ name:'Nixie Scale', rarity:'uncommon', note:'Water-resistant' }]
  };
  entries.push(nixie);

  // ========================
  // 4. WILL-O'-WISP (Luring Light)
  // ========================
  const willOWisp = {
    id: 'will_o_wisp',
    name: 'Will-o\'-Wisp',
    sub: 'Ghostly Light · Misleader',
    rank: 'D',
    ibg: '#d0e8f0',
    icon: '✨',
    size: '~0.3 m diameter, floating orb of light',
    biomes: ['Swamp','Graveyard','Marsh'],
    intel: 34,
    tags: { behavior: ['Aggressive','Opportunistic'], combat: ['Control','Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'A strange fey that appears as a faint light in dark places. It leads travelers off cliffs into swamps or towards dangerous creatures. It can shock those who touch it.',
    stats: { HP: 67, Damage: 87, Defense: 43, Aggression: 187, Speed: 212, Mana: 187, 'Shock': 187, 'Lure': 0, 'Fading': 0, Threat: 212 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Shock':'#ffa000', 'Lure':'#00bcd4', 'Fading':'#800080', Threat:'#d32f2f' },
    weak: ['Cold iron','True sight','Dispel magic'],
    res: ['Physical (partially)','Poison','Fear'],
    ab: ['Shock (touch, deals lightning damage, may stun)', 'Lure (creates attractive light, draws prey towards danger)', 'Fading (becomes invisible, moves quickly)'],
    loot: [{ name:'Wisp Essence', rarity:'uncommon', note:'Used in illusion magic' }]
  };
  entries.push(willOWisp);

  // ========================
  // 5. BROWNIE (House Spirit)
  // ========================
  const brownie = {
    id: 'brownie',
    name: 'Brownie',
    sub: 'House Fey · Helpful',
    rank: 'D',
    ibg: '#c0a880',
    icon: '🏠',
    size: '~0.6 m, wrinkled, wears rags',
    biomes: ['Farmhouse','Inn','Home'],
    intel: 143,
    tags: { behavior: ['Neutral','Helpful'], combat: [], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Brownies are household fey that clean, cook, and repair items if treated well. If offended, they become mischievous – hiding tools, souring milk, and creating minor chaos. They never fight, but will leave if mistreated.',
    stats: { HP: 43, Damage: 12, Defense: 23, Aggression: 0, Speed: 143, Mana: 43, 'Chore': 0, 'Hide': 0, 'Trick': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Chore':'#8bc34a', 'Hide':'#00bcd4', 'Trick':'#ffa000', Threat:'#607d8b' },
    weak: ['Offending owner','Cold iron'],
    res: ['Physical'],
    ab: ['Chore (magically cleans or repairs small items)', 'Hide (vanishes when observed)', 'Trick (causes minor misfortune: lost keys, spilled drink)'],
    loot: [{ name:'Brownie Offering', rarity:'uncommon', note:'A small gift of milk and honey – may attract helpful brownies' }]
  };
  entries.push(brownie);

  // ========================
  // 6. DRYAD (Tree Guardian)
  // ========================
  const dryad = {
    id: 'dryad',
    name: 'Dryad',
    sub: 'Tree Spirit · Nature Guardian',
    rank: 'C',
    ibg: '#a0c080',
    icon: '🌳',
    size: '~1.6 m, humanoid, bark-like skin',
    biomes: ['Forest','Grove','Sacred Tree'],
    intel: 187,
    tags: { behavior: ['Neutral','Protective'], combat: ['Control','Support'], intelligence: ['Strategic'], interaction: ['Guardian','Symbiotic'] },
    desc: 'Dryads are spirits bound to a specific tree. They are gentle and will guide travelers who respect the forest. If their tree is threatened, they become fierce – commanding roots to entangle and summoning forest creatures.',
    stats: { HP: 387, Damage: 243, Defense: 312, Aggression: 287, Speed: 187, Mana: 387, 'Root Bind': 487, 'Tree Stride': 0, 'Summon Animals': 0, Threat: 487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Root Bind':'#ffa000', 'Tree Stride':'#00bcd4', 'Summon Animals':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire','Axes','Separation from tree'],
    res: ['Nature magic','Poison','Charm'],
    ab: ['Root bind (immobilizes target, deals damage over time)', 'Tree stride (teleports between trees within 100 m)', 'Summon animals (calls 2-4 forest creatures)'],
    loot: [{ name:'Dryad Bark', rarity:'rare', note:'Bark from her tree – used in nature magic' }]
  };
  entries.push(dryad);

  // ========================
  // 7. SATYR (Party Animal)
  // ========================
  const satyr = {
    id: 'satyr',
    name: 'Satyr',
    sub: 'Fey Reveler · Charmer',
    rank: 'C',
    ibg: '#d0b080',
    icon: '🐐',
    size: '~1.7 m, goat legs, small horns',
    biomes: ['Forest','Meadow','Party Clearing'],
    intel: 143,
    tags: { behavior: ['Neutral','Trickster'], combat: ['Control'], intelligence: ['Aware'], interaction: ['Manipulative'] },
    desc: 'Satyrs love wine, music, and revelry. They are not malicious, but their magical pipes can charm listeners, leading them to dance for hours or follow into the woods. They avoid combat but will use charm if cornered.',
    stats: { HP: 243, Damage: 187, Defense: 187, Aggression: 187, Speed: 312, Mana: 287, 'Pipes of Charm': 487, 'Headbutt': 243, 'Fleet': 0, Threat: 487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pipes of Charm':'#e91e63', 'Headbutt':'#ffa000', 'Fleet':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold iron','Silence','Wax in ears'],
    res: ['Charm','Music'],
    ab: ['Pipes of charm (AoE charm, victims dance for 1 minute)', 'Headbutt (stun, knockback)', 'Fleet (disengage as bonus action)'],
    loot: [{ name:'Satyr Pipes', rarity:'rare', note:'Enchanted to charm listeners' }]
  };
  entries.push(satyr);

  // ========================
  // 8. LEPRECHAUN (Wish Granter)
  // ========================
  const leprechaun = {
    id: 'leprechaun',
    name: 'Leprechaun',
    sub: 'Trickster · Wish Granter',
    rank: 'C',
    ibg: '#8eae5e',
    icon: '🍀',
    size: '~0.8 m, green coat, bearded',
    biomes: ['Forest','Meadow','Roadside'],
    intel: 243,
    tags: { behavior: ['Trickster','Opportunistic'], combat: ['Control'], intelligence: ['Strategic'], interaction: ['Manipulative'] },
    desc: 'Leprechauns are cunning fey that grant wishes – but always twisted. They hide a pot of gold and will bargain. If caught, they may offer three wishes. Wishes are literal and often backfire.',
    stats: { HP: 187, Damage: 143, Defense: 187, Aggression: 143, Speed: 343, Mana: 387, 'Wish': 0, 'Blinding Flash': 287, 'Fade': 0, Threat: 387 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Wish':'#800080', 'Blinding Flash':'#ffa000', 'Fade':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold iron','Promise breaking'],
    res: ['Physical','Charm'],
    ab: ['Wish (grants a wish, but literally interpreted – DM discretion)', 'Blinding flash (AoE blind for 10 seconds)', 'Fade (becomes invisible, teleports 30 m)'],
    loot: [{ name:'Leprechaun Gold', rarity:'rare', note:'May be cursed or illusory' }]
  };
  entries.push(leprechaun);

  // ========================
  // 9. REDCAP (Violent)
  // ========================
  const redcap = {
    id: 'redcap',
    name: 'Redcap',
    sub: 'Greater Fey · Murderous',
    rank: 'B',
    ibg: '#8e3a3a',
    icon: '🧢',
    size: '~1.2 m, wiry, red pointed hat, iron boots',
    biomes: ['Cursed Forest','Battlefield','Ruins'],
    intel: 67,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Swarm'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Redcaps are vicious, murderous fey that soak their hats in the blood of victims. They are fast, cruel, and relentless. They wield rusty scythes and wear iron boots that are heavy but silent.',
    stats: { HP: 587, Damage: 687, Defense: 387, Aggression: 843, Speed: 387, Mana: 87, 'Bloody Scythe': 843, 'Iron Stomp': 487, 'Hatred': 0, Threat: 843 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bloody Scythe':'#d32f2f', 'Iron Stomp':'#ffa000', 'Hatred':'#800080', Threat:'#d32f2f' },
    weak: ['Holy','Cold iron','Exorcism'],
    res: ['Physical','Fear','Poison'],
    ab: ['Bloody scythe (high damage, may cause bleed)', 'Iron stomp (AoE, knocks prone)', 'Hatred (gains +20% damage for each enemy killed in last 10 minutes)'],
    loot: [{ name:'Redcap Hat', rarity:'rare', note:'Still bloody – cursed', warn:'Wearing it may drive you mad' }]
  };
  entries.push(redcap);

  // ========================
  // 10. BANSHEE (Death Scream)
  // ========================
  const banshee = {
    id: 'banshee',
    name: 'Banshee',
    sub: 'Greater Fey · Omen of Death',
    rank: 'A',
    ibg: '#b0b0c0',
    icon: '👻',
    size: '~1.7 m, pale, flowing white dress',
    biomes: ['Graveyard','Battlefield','Cursed Manor'],
    intel: 187,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'A banshee is a fey spirit that foretells death. Her scream can kill or paralyze. She appears near places of great tragedy. She is not evil, but anyone who hears her wail is marked for death within a year.',
    stats: { HP: 743, Damage: 687, Defense: 543, Aggression: 987, Speed: 387, Mana: 743, 'Wail of the Banshee': 1187, 'Paralyzing Shriek': 987, 'Ethereal': 0, Threat: 1187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Wail of the Banshee':'#800080', 'Paralyzing Shriek':'#d32f2f', 'Ethereal':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Holy','Cold iron','Silence'],
    res: ['Physical','Fear','Poison'],
    ab: ['Wail of the banshee (death magic, save or die, affects all enemies in 30 m cone)', 'Paralyzing shriek (stun 10 seconds, save negates)', 'Ethereal (can pass through walls, immune to non-magical weapons)'],
    warn: 'If you hear the wail, pray. The banshee has marked you.',
    loot: [{ name:'Banshee Tear', rarity:'unique', note:'A single tear – can reverse death once' }]
  };
  entries.push(banshee);

  // ========================
  // 11. FROST FAERIE (Winter Fey)
  // ========================
  const frostFaerie = {
    id: 'frost_faerie',
    name: 'Frost Faerie',
    sub: 'Winter Fey · Ice Caster',
    rank: 'A',
    ibg: '#b0d8f0',
    icon: '❄️',
    size: '~0.5 m, pale blue, icy wings',
    biomes: ['Tundra','Frozen Forest','Glacier'],
    intel: 143,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Frost faeries are embodiments of winter cruelty. They freeze water, create ice storms, and enjoy watching travelers freeze to death. Their touch leaves frostbite.',
    stats: { HP: 543, Damage: 587, Defense: 487, Aggression: 743, Speed: 387, Mana: 743, 'Ice Shard': 743, 'Freeze Ray': 687, 'Frost Aura': 487, Threat: 843 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Ice Shard':'#00bcd4', 'Freeze Ray':'#d32f2f', 'Frost Aura':'#ffa000', Threat:'#d32f2f' },
    weak: ['Fire','Heat','Cold iron'],
    res: ['Cold','Ice'],
    ab: ['Ice shard (ranged, high damage)', 'Freeze ray (immobilizes target for 10 seconds)', 'Frost aura (5 dmg/sec to enemies within 10 m)'],
    loot: [{ name:'Frozen Heart', rarity:'rare', note:'Cold to the touch – used in ice enchantments' }]
  };
  entries.push(frostFaerie);

  // ========================
  // 12. FEY LORD (Noble)
  // ========================
  const feyLord = {
    id: 'fey_lord',
    name: 'Fey Lord',
    sub: 'Noble Fey · Domain Ruler',
    rank: 'S',
    ibg: '#c0a0e0',
    icon: '👑',
    size: '~2 m, elegant, otherworldly beauty',
    biomes: ['Feywild','Enchanted Forest','Dream'],
    intel: 487,
    tags: { behavior: ['Strategic','Territorial'], combat: ['Control','Support'], intelligence: ['Sentient'], interaction: ['Ruler','Manipulative'] },
    desc: 'Fey lords rule over courts of lesser fey. They are ancient, powerful, and bound by strange laws. They rarely fight directly, preferring to trick or bargain. If forced to fight, they command nature and illusion.',
    stats: { HP: 3873, Damage: 2874, Defense: 2874, Aggression: 4873, Speed: 487, Mana: 5874, 'Glamour': 5874, 'Command Fey': 0, 'Nature’s Wrath': 4873, Threat: 5874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Glamour':'#800080', 'Command Fey':'#00bcd4', 'Nature’s Wrath':'#ffa000', Threat:'#d32f2f' },
    weak: ['Cold iron','Broken oath (if applicable)','Anti-fey wards'],
    res: ['Physical','Magic','Charm','Fear'],
    ab: ['Glamour (creates powerful illusions that feel real)', 'Command fey (any lesser fey within 1 km must obey)', 'Nature’s wrath (summons trees, roots, and animals to attack)'],
    loot: [{ name:'Fey Lord Seal', rarity:'unique', note:'Can be used to bargain with fey courts' }],
    variants: [
	  {
		key: 'unseelie',
		label: '🌑 Unseelie',
		rank: 'S',
		ibg: '#8e6eae',
		icon: '👑',
		sub: 'Unseelie Fey Lord · Dark Court',
		size: '~2 m, dark apparel, shadow aura',
		desc: 'The Unseelie Court rules winter, darkness, and cruelty. Their lord is no less powerful, but more malicious.',
		stats: { HP: 3873, Damage: 3873, Defense: 2874, Aggression: 5874, Speed: 487, Mana: 5874, 'Curse': 6874, 'Fear Aura': 0, 'Winter\'s Grasp': 4873, Threat: 6874 },
		bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Curse':'#800080', 'Fear Aura':'#ffa000', 'Winter\'s Grasp':'#00bcd4', Threat:'#d32f2f' },
		weak: ['Cold iron', 'Sunlight', 'Seelie artifacts'],
		res: ['Darkness', 'Cold', 'Fear'],
		ab: ['Curse (target suffers -50% stats for 1 hour)', 'Fear aura (constant fear effect, save each round)', 'Winter\'s grasp (freezes target solid, 100 dmg)'],
		loot: [{ name:'Unseelie Signet', rarity:'unique', note:'Allows passage through dark fey domains' }]
	  }
	]
  };
  entries.push(feyLord);

  // ========================
  // 13. ARCHFEY (Legendary)
  // ========================
  const archfey = {
    id: 'archfey',
    name: 'Archfey',
    sub: 'Primordial Fey · Living Concept',
    rank: 'SS',
    ibg: '#e0c0e0',
    icon: '✨',
    size: 'Variable, can appear as anything',
    biomes: ['Feywild','Deep Dream','Conceptual Plane'],
    intel: 867,
    tags: { behavior: ['Strategic','Inscrutable'], combat: ['Control','Siege'], intelligence: ['Sentient'], interaction: ['Ruler','Anomaly'] },
    desc: 'An archfey is a primordial embodiment of a concept – summer, love, fear, or trickery. They are nearly gods within the Feywild. They do not "fight" so much as rewrite reality around them. Engaging an archfey is madness.',
    stats: { HP: 14873, Damage: 12873, Defense: 12873, Aggression: 9874, Speed: 687, Mana: 18743, 'Reality Shift': 0, 'Domain Control': 0, 'Immortal': 0, Threat: 18743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Reality Shift':'#800080', 'Domain Control':'#00bcd4', 'Immortal':'#ffa000', Threat:'#d32f2f' },
    weak: ['Conceptual paradox','Cold iron (theoretical)','Sealing'],
    res: ['All physical','All magic','Fear','Death'],
    ab: ['Reality shift (rewrites local terrain, spawns creatures, alters physics)', 'Domain control (within Feywild, archfey is effectively invincible)', 'Immortal (cannot be permanently killed outside specific conditions)'],
    warn: 'Do not engage. Archfey are not enemies; they are forces of nature with a sense of humor. Bargain, do not fight.',
    loot: [{ name:'Archfey Boon (theoretical)', rarity:'unique', note:'If an archfey favors you, they may grant a wish – without twisting it. Rare.' }]
  };
  entries.push(archfey);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('fey', entries, 'Species', '🧚');
    console.log('Fey data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded. Make sure bestiary-core.html is loaded first.');
  }
})();