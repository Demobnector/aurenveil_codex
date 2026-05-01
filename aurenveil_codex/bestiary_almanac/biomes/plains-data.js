// biomes/plains-data.js
(function() {
  const entries = [];

  // ========================
  // PEACEFUL PLAINS CREATURES (F–E)
  // ========================

  // Meadow Rabbit
  const meadowRabbit = {
    id: 'meadow_rabbit',
    name: 'Meadow Rabbit',
    sub: 'Swift Herbivore · Prey',
    rank: 'F',
    ibg: '#d0c8b0',
    icon: '🐇',
    size: '~0.3 m, brown, fast',
    biomes: ['Plains', 'Grassland', 'Meadow'],
    intel: 12,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Meadow rabbits are common, fast breeders. They are prey for many predators and flee at the slightest movement.',
    stats: { HP: 12, Damage: 4, Defense: 6, Aggression: 0, Speed: 187, Mana: 0, 'Bound': 0, 'Hide': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bound':'#00bcd4', 'Hide':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Bound (dashes away at double speed)', 'Hide (crouches in grass, +75% stealth)'],
    loot: [{ name:'Rabbit Fur', rarity:'common', note:'Soft, used in lining' }, { name:'Rabbit Meat', rarity:'common', note:'Edible' }]
  };
  entries.push(meadowRabbit);

  // Prairie Dog
  const prairieDog = {
    id: 'prairie_dog',
    name: 'Prairie Dog',
    sub: 'Burrowing Rodent · Alarm Caller',
    rank: 'F',
    ibg: '#c0b8a0',
    icon: '🐭',
    size: '~0.3 m, brown, stands upright',
    biomes: ['Plains', 'Grassland', 'Prairie'],
    intel: 34,
    tags: { behavior: ['Passive', 'Social'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Prairie dogs live in large colonies and act as lookouts, barking alarms when predators approach. They are harmless.',
    stats: { HP: 18, Damage: 6, Defense: 8, Aggression: 0, Speed: 143, Mana: 0, 'Alarm Bark': 0, 'Burrow': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Alarm Bark':'#ffa000', 'Burrow':'#8bc34a', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Alarm bark (warns colony of danger, may alert nearby creatures)', 'Burrow (disappears into hole, safe)'],
    loot: [{ name:'Prairie Dog Fur', rarity:'common', note:'Soft, used in lining' }]
  };
  entries.push(prairieDog);

  // Songlark (Bird)
  const songlark = {
    id: 'songlark',
    name: 'Songlark',
    sub: 'Grassland Bird · Singer',
    rank: 'F',
    ibg: '#d0c8b0',
    icon: '🐦',
    size: '~0.15 m, brown, sings',
    biomes: ['Plains', 'Grassland', 'Meadow'],
    intel: 23,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Songlarks fill the plains with melody. They are harmless and flee when approached.',
    stats: { HP: 8, Damage: 2, Defense: 4, Aggression: 0, 'Fly Speed': 187, Mana: 0, 'Sing': 0, 'Flee': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Sing':'#8bc34a', 'Flee':'#00bcd4', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Sing (pleasant melody, no combat effect)', 'Flee (flies away)'],
    loot: [{ name:'Songlark Feather', rarity:'common', note:'Used in fletching' }]
  };
  entries.push(songlark);

  // ========================
  // HERD ANIMALS (D–C)
  // ========================

  // Plains Bison
  const plainsBison = {
    id: 'plains_bison',
    name: 'Plains Bison',
    sub: 'Herd Animal · Charger',
    rank: 'D',
    ibg: '#b0a080',
    icon: '🐃',
    size: '~2 m at shoulder, massive, shaggy',
    biomes: ['Plains', 'Grassland', 'Prairie'],
    intel: 23,
    tags: { behavior: ['Neutral', 'Herd'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Plains bison roam in large herds. They are generally peaceful but will charge if threatened. A stampede is deadly.',
    stats: { HP: 287, Damage: 243, Defense: 187, Aggression: 343, Speed: 287, Mana: 12, 'Charge': 387, 'Stomp': 243, 'Herd Stampede': 0, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Charge':'#d32f2f', 'Stomp':'#ffa000', 'Herd Stampede':'#800080', Threat:'#d32f2f' },
    weak: ['Traps', 'Ranged kiting', 'Fire'],
    res: ['Cold', 'Bludgeoning'],
    ab: ['Charge (line attack, 50 dmg, knocks prone)', 'Stomp (melee, high damage)', 'Herd stampede (if 10+ bison, all gain +50% damage)'],
    loot: [{ name:'Bison Hide', rarity:'common', note:'Thick, warm' }, { name:'Bison Meat', rarity:'common', note:'Hearty' }],
    variants: [
      {
        key: 'bull',
        label: '🐂 Bull Bison',
        rank: 'C',
        ibg: '#a09070',
        icon: '🐂',
        sub: 'Bull Bison · Herd Leader',
        size: '~2.2 m at shoulder, larger horns',
        desc: 'The bull leads the herd. Its charge is devastating.',
        stats: { HP: 487, Damage: 387, Defense: 287, Aggression: 543, Speed: 312, Mana: 23, 'Gore': 587, 'Stampede Call': 0, 'Protect Herd': 0, Threat: 612 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Gore':'#d32f2f', 'Stampede Call':'#800080', 'Protect Herd':'#8bc34a', Threat:'#d32f2f' },
        weak: ['Traps'],
        res: ['Cold'],
        ab: ['Gore (ignores 30% armor, causes bleed)', 'Stampede call (summons 4-8 bison to charge)', 'Protect herd (takes hits for nearby bison)'],
        loot: [{ name:'Bull Horns', rarity:'uncommon', note:'Used in decoration' }]
      }
    ]
  };
  entries.push(plainsBison);

  // Giant Stag
  const giantStag = {
    id: 'giant_stag',
    name: 'Giant Stag',
    sub: 'Majestic Herbivore · Guardian',
    rank: 'C',
    ibg: '#c0b090',
    icon: '🦌',
    size: '~2.5 m at shoulder, massive antlers',
    biomes: ['Plains', 'Forest Edge', 'Meadow'],
    intel: 87,
    tags: { behavior: ['Neutral', 'Protective'], combat: ['Burst', 'Defensive'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Giant stags are rare, majestic creatures that protect their herds. They are not aggressive unless threatened.',
    stats: { HP: 487, Damage: 387, Defense: 343, Aggression: 287, Speed: 412, Mana: 87, 'Antler Charge': 587, 'Hoof Stomp': 387, 'Alert': 0, Threat: 612 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Antler Charge':'#d32f2f', 'Hoof Stomp':'#ffa000', 'Alert':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Poaching', 'Traps', 'Fire'],
    res: ['Cold'],
    ab: ['Antler charge (line attack, impales, 70 dmg, knockback)', 'Hoof stomp (AoE, stuns)', 'Alert (warns herd of danger)'],
    loot: [{ name:'Giant Antlers', rarity:'rare', note:'Used in druidic rituals' }]
  };
  entries.push(giantStag);

  // ========================
  // PREDATORS (C–B)
  // ========================

  // Plains Lion
  const plainsLion = {
    id: 'plains_lion',
    name: 'Plains Lion',
    sub: 'Apex Predator · Pack Hunter',
    rank: 'C',
    ibg: '#d0b080',
    icon: '🦁',
    size: '~1.2 m at shoulder, golden mane',
    biomes: ['Plains', 'Grassland', 'Savanna'],
    intel: 78,
    tags: { behavior: ['Aggressive', 'Pack'], combat: ['Swarm', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Lions hunt in prides, using coordinated tactics to bring down prey. They are patient and deadly.',
    stats: { HP: 387, Damage: 487, Defense: 287, Aggression: 687, Speed: 412, Mana: 23, 'Pounce': 687, 'Coordinated Hunt': 0, 'Roar': 387, Threat: 742 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pounce':'#d32f2f', 'Coordinated Hunt':'#ffa000', 'Roar':'#800080', Threat:'#d32f2f' },
    weak: ['Area attacks', 'Breaking formation', 'Kill leader'],
    res: ['Fear'],
    ab: ['Pounce (jump, pin target, 50 dmg)', 'Coordinated hunt (+15% damage per adjacent lion)', 'Roar (fear effect, reduces accuracy)'],
    loot: [{ name:'Lion Mane', rarity:'uncommon', note:'Symbol of pride' }, { name:'Lion Claw', rarity:'uncommon', note:'Sharp' }],
    variants: [
      {
        key: 'alpha',
        label: '👑 Alpha Lion',
        rank: 'B',
        ibg: '#c0a070',
        icon: '🦁',
        sub: 'Alpha Lion · Pride Leader',
        size: '~1.4 m at shoulder, larger mane',
        desc: 'The alpha leads the pride. Its roar can summon other lions.',
        stats: { HP: 687, Damage: 687, Defense: 387, Aggression: 887, Speed: 443, Mana: 56, 'Alpha Bite': 887, 'Pride Call': 0, 'Terrifying Roar': 687, Threat: 987 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Alpha Bite':'#d32f2f', 'Pride Call':'#800080', 'Terrifying Roar':'#ffa000', Threat:'#d32f2f' },
        weak: ['Area attacks', 'Kill leader'],
        res: ['Fear'],
        ab: ['Alpha bite (bonus damage, may break bones)', 'Pride call (summons 2-4 lions)', 'Terrifying roar (fear, stuns for 3 seconds)'],
        loot: [{ name:'Alpha Mane', rarity:'rare', note:'Highly valued' }]
      }
    ]
  };
  entries.push(plainsLion);

  // Dire Hyena
  const direHyena = {
    id: 'dire_hyena',
    name: 'Dire Hyena',
    sub: 'Scavenger · Bone Crusher',
    rank: 'C',
    ibg: '#b0a080',
    icon: '🐕',
    size: '~1.2 m at shoulder, spotted, powerful jaws',
    biomes: ['Plains', 'Grassland', 'Savanna'],
    intel: 56,
    tags: { behavior: ['Aggressive', 'Pack'], combat: ['Swarm', 'Burst'], intelligence: ['Reactive'], interaction: ['Scavenger'] },
    desc: 'Dire hyenas are larger, more aggressive relatives of common hyenas. Their jaws can crush bone, and they never miss a meal.',
    stats: { HP: 343, Damage: 387, Defense: 243, Aggression: 587, Speed: 387, Mana: 12, 'Bone Crush': 587, 'Pack Hunt': 0, 'Laugh': 0, Threat: 612 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bone Crush':'#d32f2f', 'Pack Hunt':'#ffa000', 'Laugh':'#800080', Threat:'#d32f2f' },
    weak: ['Area attacks', 'Kill leader'],
    res: ['Disease'],
    ab: ['Bone crush (ignores 30% armor, causes bleed)', 'Pack hunt (+10% damage per adjacent hyena)', 'Laugh (loud noise, fear effect)'],
    loot: [{ name:'Hyena Jaw', rarity:'uncommon', note:'Strong' }]
  };
  entries.push(direHyena);

  // ========================
  // AERIAL PREDATORS (B–A)
  // ========================

  // Plains Roc (Lesser)
  const plainsRoc = {
    id: 'plains_roc',
    name: 'Plains Roc',
    sub: 'Giant Bird · Sky Terror',
    rank: 'B',
    ibg: '#b0b8a0',
    icon: '🦅',
    size: '~4 m wingspan, brown, fierce talons',
    biomes: ['Plains', 'Grassland', 'Mountain'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Plains rocs are giant birds of prey that hunt from above. They can carry off small livestock and even people.',
    stats: { HP: 687, Damage: 687, Defense: 487, Aggression: 887, 'Fly Speed': 487, Mana: 87, 'Dive': 887, 'Talons': 687, 'Snatch': 0, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Dive':'#d32f2f', 'Talons':'#ffa000', 'Snatch':'#800080', Threat:'#d32f2f' },
    weak: ['Ranged attacks', 'Grounding', 'Poison'],
    res: ['Wind'],
    ab: ['Dive (swoop attack, bonus damage from height)', 'Talons (grapple, bleed damage)', 'Snatch (grabs small target, flies away)'],
    loot: [{ name:'Roc Feather', rarity:'uncommon', note:'Used in fletching' }, { name:'Roc Talon', rarity:'rare', note:'Used in weapons' }]
  };
  entries.push(plainsRoc);

  // ========================
  // LEGENDARY PLAINS ENTITIES (S–SS)
  // ========================

  // Great Stag (Mythical)
  const greatStag = {
    id: 'great_stag',
    name: 'Great Stag',
    sub: 'Spirit of the Plains · Legend',
    rank: 'S',
    ibg: '#e0d0b0',
    icon: '🦌',
    size: '~3.5 m at shoulder, silver antlers, glowing',
    biomes: ['Plains', 'Grassland', 'Spirit Meadow'],
    intel: 478,
    tags: { behavior: ['Neutral', 'Protective'], combat: ['Support', 'Control'], intelligence: ['Sentient'], interaction: ['Guardian', 'Ruler'] },
    desc: 'The Great Stag is a mythic spirit of the plains, appearing only to those who respect nature. It can heal, command herd animals, and its antlers glow with starlight.',
    stats: { HP: 5874, Damage: 3874, Defense: 4873, Aggression: 0, Speed: 587, Mana: 5873, 'Starlight Heal': 0, 'Herd Command': 0, 'Trample': 4873, Threat: 5874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Starlight Heal':'#8bc34a', 'Herd Command':'#ffa000', 'Trample':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Corruption', 'Hatred of nature'],
    res: ['Physical', 'Nature magic', 'Poison', 'Fear'],
    ab: ['Starlight heal (restores 500 HP to all allies in 100 m)', 'Herd command (summons 20-50 bison to aid)', 'Trample (line attack, 300 dmg, knockdown)'],
    warn: 'The Great Stag is not an enemy. It is a guardian. Do not harm it.',
    loot: [{ name:'Great Stag Antler', rarity:'unique', note:'Blessed – can heal a wounded land' }]
  };
  entries.push(greatStag);

  // ========================
  // NAMED LOCATION: THE SEA OF GRASS (Anomaly)
  // ========================
  const seaOfGrass = {
    id: 'sea_of_grass',
    name: 'The Sea of Grass',
    sub: 'Anomaly · Endless Plain',
    rank: 'SS (estimated)',
    ibg: '#c0d0a0',
    icon: '🌾',
    size: 'Unknown, stretches beyond horizon',
    biomes: ['Sea of Grass', 'Endless Plain'],
    intel: 0,
    tags: { behavior: ['Passive', 'Territorial'], combat: ['Environmental'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'The Sea of Grass is a vast, endless plain where the horizon never changes. Time moves strangely, and travelers report walking for days without making progress. It is not malevolent, but it is disorienting.',
    stats: {
      'Estimated Area': 'Unknown',
      'Minimum Entry Rank': 'Silver (with guide)',
      'Spawn Pattern': 'Bison herds, prairie dogs, lions',
      'Risk Level': 'Moderate – disorientation risk',
      'Corruption Level': 'Mild (time distortion)'
    },
    bars: { 'Estimated Area':'#ffa000', 'Minimum Entry Rank':'#d32f2f', 'Spawn Pattern':'#00bcd4', 'Risk Level':'#800080', 'Corruption Level':'#e91e63' },
    weak: ['Seeking knowledge'],
    res: ['Physical traversal'],
    ab: [
      'Endless horizon (the plain seems to stretch forever)',
      'Time distortion (hours feel like days, days like hours)',
      'Shifting landmarks (the landscape changes subtly)',
      'Mirage (creates illusory water or shelter)'
    ],
    warn: 'The Sea of Grass is not dangerous – it is confusing. Bring a compass and mark your trail.',
    loot: [{ name:'Grass Seed (preserved)', rarity:'rare', note:'Said to grow instantly when planted' }]
  };
  entries.push(seaOfGrass);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('plains', entries, 'Biomes', '🌾');
    console.log('Plains data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();