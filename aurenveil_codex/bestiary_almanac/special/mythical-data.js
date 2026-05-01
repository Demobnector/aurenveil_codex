// mythical-data.js (syntax error fixed)
(function() {
  const entries = [];

  // ========================
  // 12. PEGASUS
  // ========================
  const pegasus = {
    id: 'pegasus',
    name: 'Pegasus',
    sub: 'Noble Mythical · Sky Steed',
    rank: 'A',
    ibg: '#f0f0f0',
    icon: '🐴',
    size: '~1.8 m at shoulder, wingspan 4 m',
    biomes: ['Cloud Peaks','Sacred Springs','Heavenly Fields'],
    intel: 247,
    tags: { behavior: ['Neutral','Evasion'], combat: ['Burst','Evasive'], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Pegasus is a pure-white winged horse that appears only to those with pure intentions. It can be tamed temporarily, but never truly owned. It fights only in self-defense, using its hooves and wing gusts. Its tears have healing properties.',
    stats: { HP: 3874, Damage: 2873, Defense: 2473, Aggression: 1874, Speed: 987, Mana: 4873, 'Hoof Strike': 3874, 'Wing Gust': 3247, 'Healing Tear': 0, Threat: 3473 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Hoof Strike':'#ffa000', 'Wing Gust':'#00bcd4', 'Healing Tear':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Corruption','Darkness','Poison'],
    res: ['Light','Holy','Wind'],
    ab: ['Hoof strike (knockback, high damage)', 'Wing gust (AoE knockdown, clears weather effects)', 'Healing tear (can heal wounds, but pegasus must be calm)'],
    loot: [{ name:'Pegasus Feather', rarity:'rare', note:'Used in flying mounts and high-speed enchantments' }, { name:'Pegasus Tear (bottled)', rarity:'rare', note:'Cures any poison and heals 500 HP' }]
  };
  entries.push(pegasus);

  // ========================
  // 6. GRIFFIN
  // ========================
  const griffin = {
    id: 'griffin',
    name: 'Griffin',
    sub: 'Mythical Beast · Sky Guardian',
    rank: 'A',
    ibg: '#d4b87a',
    icon: '🦅',
    size: '~3 m tall, eagle head, lion body, wings',
    biomes: ['Mountain','Cloud Peaks','Ancient Ruins'],
    intel: 187,
    tags: { behavior: ['Territorial'], combat: ['Burst','Siege'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Griffins are noble creatures that guard mountain passes and treasure hoards. They are fiercely territorial but can be reasoned with if you are not after their treasure. They hunt in pairs and dive with incredible speed, their beaks capable of piercing armor.',
    stats: { HP: 5874, Damage: 6247, Defense: 4872, Aggression: 6873, Speed: 847, Mana: 2847, 'Dive Attack': 7847, 'Pinning Claws': 6247, Threat: 7123 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Dive Attack':'#ffa000', 'Pinning Claws':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Ranged attacks while diving','Breaking wings','Poison'],
    res: ['Physical','Cold','Fear'],
    ab: ['Dive attack (massive damage from above, can one-shot low-HP targets)', 'Pinning claws (immobilizes target beneath griffin, deals damage each turn)', 'Treasure sense (can detect valuable objects from miles away)'],
    loot: [{ name:'Griffin Feather', rarity:'uncommon', note:'Used in high-quality flying brooms and cloaks' }, { name:'Griffin Talon', rarity:'rare', note:'Can be forged into a piercing dagger' }]
  };
  entries.push(griffin);

  // ========================
  // 5. SYLVAN GUARDIAN (FIXED)
  // ========================
  const sylvanGuardian = {
    id: 'sylvan_guardian',
    name: 'Sylvan Guardian',
    sub: 'Mythical Spirit Beast · Nature Warden',
    rank: 'S',
    ibg: '#6e8a5e',
    icon: '🦌',
    size: '~3.5 m tall, elk-like, glowing antlers',
    biomes: ['Ancient Forest','Sacred Grove','Druid Circle'],
    intel: 387,
    tags: { behavior: ['Neutral','Territorial'], combat: ['Control','Defensive'], intelligence: ['Sentient'], interaction: ['Guardian','Symbiotic'] },
    desc: 'The Sylvan Guardian is not inherently hostile. It appears in ancient forests and will only attack if its territory is threatened – by logging, fire, or corruption. It controls the terrain, heals itself using the environment, and can summon forest creatures to its aid. Druids consider it sacred. Killing it brings a curse upon the land.',
    stats: { HP: 14873, Damage: 8723, Defense: 12473, Aggression: 3874, Speed: 647, Mana: 10873, 'Root Bind': 14873, 'Nature Regrowth': 12873, 'Beast Call': 11247, Threat: 12873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Root Bind':'#ffa000', 'Nature Regrowth':'#8bc34a', 'Beast Call':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire (damages forest)','Corruption magic','Anti-nature weapons'],
    res: ['Physical','Poison','Darkness (partial)','Fear','Root/Entangle'],
    ab: [
      'Root Bind (immobilizes enemies in roots, cannot be dispelled by normal means)',
      'Nature Regrowth (heals Guardian for 500 HP per second while standing in forest terrain)',
      'Beast Call (summons 4-8 forest creatures – wolves, bears, giant owls – to fight for it)',
      'Territorial Purity (if not provoked, will not attack; will warn first with visible signs)'
    ],
    territorialSS: false,
    warn: 'Do not attack the Sylvan Guardian unless absolutely necessary. Its death curses the entire forest for a generation.',
    loot: [
      { name:'Guardian Antler', rarity:'rare', note:'Glows with nature magic – used in druidic artifacts' },
      { name:'Heartwood Core', rarity:'unique', note:'Contains the essence of the forest – can be used to regrow a dead forest or curse it' }
    ]
  };
  entries.push(sylvanGuardian);

  // ========================
  // 7. HYDRA
  // ========================
  const hydra = {
    id: 'hydra',
    name: 'Hydra',
    sub: 'Mythical Beast · Regenerating Terror',
    rank: 'S',
    ibg: '#6e8a5e',
    icon: '🐍',
    size: '~12 m long, 5-9 heads',
    biomes: ['Swamp','Poison Lake','Ancient Cavern'],
    intel: 134,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'The Hydra is a serpentine monster with multiple heads. When one head is cut off, two more grow in its place unless the stump is cauterized with fire. Its blood is highly toxic. Fighting a Hydra without fire is a losing battle.',
    stats: { HP: 12847, Damage: 10874, Defense: 9743, Aggression: 14873, Speed: 387, Mana: 4873, 'Head Regrowth': 0, 'Toxic Blood': 12847, 'Multi-Bite': 14873, Threat: 14873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Head Regrowth':'#00bcd4', 'Toxic Blood':'#d32f2f', 'Multi-Bite':'#800080', Threat:'#d32f2f' },
    weak: ['Fire (cauterizes stumps)','Severing all heads simultaneously','Anti-regeneration magic'],
    res: ['Poison','Physical (non-cauterized)','Darkness','Fear'],
    ab: ['Head regrowth (when a head is severed, two grow back in 10 seconds unless fire is applied)', 'Toxic blood (any melee attacker takes poison damage, and area becomes poisonous)', 'Multi-bite (attacks with 1d6 heads, each independent)'],
    loot: [{ name:'Hydra Tooth', rarity:'rare', note:'Still venomous – used in poison weapons' }, { name:'Hydra Blood Vial', rarity:'rare', note:'Extremely toxic; can be diluted into a powerful poison or antidote component' }]
  };
  entries.push(hydra);

  // ========================
  // 9. THUNDERBIRD
  // ========================
  const thunderbird = {
    id: 'thunderbird',
    name: 'Thunderbird',
    sub: 'Mythical Beast · Storm Sovereign',
    rank: 'S',
    ibg: '#7e9ece',
    icon: '🦩',
    size: '~6 m wingspan, blue-white feathers',
    biomes: ['Storm Peak','Cloud Sea','Hurricane Plains'],
    intel: 278,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'The Thunderbird controls storms, summoning lightning and hurricane winds. Its feathers crackle with electricity. It is said to be an omen of great change. Killing it may cause a permanent storm over the region.',
    stats: { HP: 9874, Damage: 10873, Defense: 7423, Aggression: 12873, Speed: 947, Mana: 12873, 'Lightning Call': 14873, 'Hurricane Wings': 12873, 'Storm Aura': 10873, Threat: 13873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Lightning Call':'#ffa000', 'Hurricane Wings':'#00bcd4', 'Storm Aura':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Grounding','Anti-air weapons','Severing wings'],
    res: ['Lightning','Wind','Thunder','Fear'],
    ab: ['Lightning call (summons 3-5 lightning strikes on random enemies)', 'Hurricane wings (creates a gust that knocks back and debuffs accuracy)', 'Storm aura (constant lightning damage to all within 20 m)'],
    loot: [{ name:'Thunderbird Feather', rarity:'rare', note:'Crackles with static – used in lightning-enchanted gear' }, { name:'Storm Core', rarity:'rare', note:'Can summon a small storm when broken' }]
  };
  entries.push(thunderbird);

  // ========================
  // 8. CERBERUS
  // ========================
  const cerberus = {
    id: 'cerberus',
    name: 'Cerberus',
    sub: 'Mythical Beast · Gatekeeper of the Dead',
    rank: 'SS',
    ibg: '#5e4a3a',
    icon: '🐕',
    size: '~5 m tall, three heads, black fur',
    biomes: ['Underworld','Necropolis','Grave of Heroes'],
    intel: 243,
    tags: { behavior: ['Territorial'], combat: ['Control','Burst'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Cerberus guards the gates of the underworld, preventing the dead from leaving and the living from entering without permission. Each head has a different ability: one breathes fire, one breathes ice, and the middle head delivers a psychic howl that paralyzes. It is immune to most forms of death magic.',
    stats: { HP: 16842, Damage: 14873, Defense: 12843, Aggression: 18742, Speed: 587, Mana: 8743, 'Fire Head': 16873, 'Ice Head': 16873, 'Howl of the Dead': 14873, Threat: 18742 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Fire Head':'#ff5722', 'Ice Head':'#00bcd4', 'Howl of the Dead':'#800080', Threat:'#d32f2f' },
    weak: ['Holy','Music (lullabies)','Three heads must be synchronized'],
    res: ['Fire','Ice','Darkness','Fear','Poison','Death effects'],
    ab: ['Tri-elemental heads (fire cone, ice cone, and paralysis howl each round)', 'Gatekeeper (cannot be bypassed; forces engagement if you approach the gate)', 'Immortal sentinel (reforms at gate after 1 day if killed outside underworld)'],
    loot: [{ name:'Cerberus Fang', rarity:'rare', note:'Carries elemental energy – used in multi-element weapons' }, { name:'Gate Key', rarity:'unique', note:'Allows passage to the underworld without Cerberus interference once' }]
  };
  entries.push(cerberus);

  // ========================
  // 11. NIDHOGG
  // ========================
  const nidhogg = {
    id: 'nidhogg',
    name: 'Nidhogg',
    sub: 'Corrupted Serpent · Root Gnawer',
    rank: 'SS',
    ibg: '#4a3a2a',
    icon: '🐉',
    size: '~40 m long, black scales, dripping decay',
    biomes: ['Underworld','World Roots','Corrupted Earth'],
    intel: 213,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Nidhogg gnaws at the roots of the world tree, slowly corrupting the land above. It breathes decay instead of fire, and its scales are hardened by malice. Killing it may slow the world’s decay but is nearly impossible without divine aid.',
    stats: { HP: 24873, Damage: 19873, Defense: 18742, Aggression: 24873, Speed: 387, Mana: 12873, 'Decaying Breath': 24873, 'Root Bind': 18742, 'Malice Aura': 16842, Threat: 26873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Decaying Breath':'#800080', 'Root Bind':'#ffa000', 'Malice Aura':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Holy','Purified roots','Blessed weapons'],
    res: ['Physical','Darkness','Poison','Fear','Corruption'],
    ab: ['Decaying breath (area decay damage, destroys structures, prevents healing)', 'Root bind (immobilizes enemies using world roots)', 'Malice aura (constant fear and corruption damage)'],
    loot: [{ name:'Nidhogg Scale', rarity:'rare', note:'Radiates malice – used in cursed weapons' }, { name:'Decayed Root', rarity:'unique', note:'Can be used to corrupt a forest or purify it' }]
  };
  entries.push(nidhogg);

  // ========================
  // 1. FENRIR
  // ========================
  const fenrir = {
    id: 'fenrir',
    name: 'Fenrir',
    sub: 'Mythical Beast · Cataclysm Predator',
    rank: 'SS',
    ibg: '#4a3a2a',
    icon: '🐺',
    size: '~8 m at shoulder, massive wolf, glowing eyes',
    biomes: ['Ancient Forest','Tundra','Cursed Land','Ragnarok Fields'],
    intel: 287,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Burst','Siege'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Fenrir is the world-devouring wolf of legend, growing stronger the longer a fight lasts. It breaks bindings over time and adapts to repeated attacks. Its maw can sever magic itself. Engaging Fenrir without overwhelming force is suicide – it escalates endlessly.',
    stats: { HP: 18743, Damage: 16472, Defense: 12843, Aggression: 19872, Speed: 847, Mana: 8743, 'Devour Strength': 18743, 'Chain Breaker': 0, 'Lunar Frenzy': 0, Threat: 19872 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Devour Strength':'#d32f2f', 'Chain Breaker':'#00bcd4', 'Lunar Frenzy':'#ffa000', Threat:'#d32f2f' },
    weak: ['Divine chains (temporary)','Holy weapons','Overwhelming burst damage'],
    res: ['Physical','Fire','Ice','Darkness','Fear','Poison','Binding (after first)'],
    ab: [
      'Devour Strength (gains +5% to all stats permanently each time it kills a target)',
      'Chain Breaker (after first immobilization, becomes immune to bind/stun/root for the rest of the fight)',
      'Lunar Frenzy (at night: +100% speed, +50% damage, +50% aggression)',
      'Maw of Oblivion (bite ignores 75% armor and dispels magical buffs)'
    ],
    territorialSS: false,
    warn: 'Fenrir escalates. If you cannot kill it quickly, it will outscale you. Do not bring summoners or pet classes; they feed it.',
    loot: [{ name:'Fenrir Fang', rarity:'rare', note:'Can sever enchantments – used in anti-magic weapons' }, { name:'Devoured Core', rarity:'unique', note:'Pulsing with stolen strength – can grant a permanent stat boost to a wielder (but may corrupt)' }],
    variants: [
      {
        key: 'abyssal',
        label: '🌑 Abyssal Fenrir',
        rank: 'SSS',
        ibg: '#3a2a2a',
        icon: '🐺',
        sub: 'Corrupted Fenrir · Demon Wolf',
        size: '~12 m, shadow aura, red eyes',
        intel: 378,
        desc: 'A Fenrir corrupted by demonic energy. It gains lifesteal and a fear aura, and its devour strength also applies to demonic allies. Extremely rare – a sign of demon incursion.',
        stats: { HP: 24873, Damage: 21473, Defense: 16842, Aggression: 24873, Speed: 987, Mana: 12473, 'Devour Strength': 24873, 'Fear Aura': 18743, 'Lifesteal': 19872, Threat: 26473 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Devour Strength':'#d32f2f', 'Fear Aura':'#800080', 'Lifesteal':'#880e4f', Threat:'#d32f2f' },
        weak: ['Divine holy','Purification','Anti-demon weapons'],
        res: ['Physical','Darkness','Fear','Poison'],
        ab: ['Devour Strength (as base)', 'Fear Aura (constant fear effect)', 'Lifesteal (attacks heal for 30% damage)', 'Demonic synergy (nearby demons gain +25% stats)'],
        loot: [{ name:'Abyssal Fenrir Core', rarity:'unique', note:'Corrupted essence – can be purified or used for dark pacts' }]
      }
    ]
  };
  entries.push(fenrir);

  // ========================
  // 2. KRAKEN
  // ========================
  const kraken = {
    id: 'kraken',
    name: 'Kraken',
    sub: 'Mythical Beast · Ocean Sovereign',
    rank: 'SS',
    ibg: '#2a4a5e',
    icon: '🐙',
    size: '~50 m tentacle span, body hidden in depths',
    biomes: ['Deep Ocean','Abyssal Trench','Open Sea'],
    intel: 312,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Control','Siege'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'The Kraken is the lord of the deep, controlling water pressure, currents, and dragging ships into the abyss. Its body is too large to fully reveal – only its tentacles are ever visible. In the ocean, it is nearly invincible; on land, it cannot move, but its reach can extend onto shores.',
    stats: { HP: 28743, Damage: 19873, Defense: 16842, Aggression: 21473, Speed: 487, Mana: 12473, 'Tentacle Dominion': 24783, 'Abyss Pull': 21473, 'Ink Catastrophe': 19873, Threat: 26743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Tentacle Dominion':'#ffa000', 'Abyss Pull':'#00bcd4', 'Ink Catastrophe':'#455a64', Threat:'#d32f2f' },
    weak: ['Lightning (shocks tentacles)','Divine fire','Sea dragon slaying weapons'],
    res: ['Physical (non-piercing)','Cold','Water','Darkness','Fear'],
    ab: [
      'Tentacle Dominion (attacks up to 8 targets independently, each tentacle has its own HP)',
      'Abyss Pull (drags enemies into water zones, drowning mechanic)',
      'Ink Catastrophe (blinds all enemies within 200 m, disables detection abilities)',
      'Ocean Sovereignty (in deep water: +100% HP regen, +50% damage, cannot be knocked back)'
    ],
    territorialSS: true,
    warn: 'Do not engage the Kraken in open ocean. It is near-invincible there. Lure it to shallows or coastal areas to reduce its advantages.',
    territory: 'In deep ocean (more than 50 m depth), Kraken reaches SSS-rank (cap 100,000) and its tentacles regenerate rapidly.',
    loot: [{ name:'Kraken Tentacle', rarity:'rare', note:'Still twitching – can be crafted into a whipping weapon' }, { name:'Kraken Ink', rarity:'rare', note:'Used in high-grade invisibility potions and darkness bombs' }, { name:'Abyssal Eye', rarity:'unique', note:'The Kraken\'s central eye – can see through any darkness' }]
  };
  entries.push(kraken);

  // ========================
  // 3. PHOENIX
  // ========================
  const phoenix = {
    id: 'phoenix',
    name: 'Phoenix',
    sub: 'Mythical Entity · Eternal Flame',
    rank: 'SSS',
    ibg: '#d65c1a',
    icon: '🔥',
    size: '~4 m wingspan, brilliant red-gold feathers',
    biomes: ['Volcanic','Sun Temple','Ashen Fields'],
    intel: 478,
    tags: { behavior: ['Territorial','Neutral'], combat: ['Burst','Control'], intelligence: ['Sentient'], interaction: ['Guardian'] },
    desc: 'The Phoenix is a creature of immortal flame. It cannot truly die – upon death, it explodes into ash and is reborn within minutes, stronger than before. Fire heals it. Fighting a Phoenix is an exercise in futility unless you can suppress its rebirth through divine means or complete ash destruction.',
    stats: { HP: 24873, Damage: 22473, Defense: 16842, Aggression: 18742, Speed: 987, Mana: 21473, 'Rebirth Flame': 0, 'Blazing Domain': 24783, 'Ash Resurrection': 0, Threat: 26873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Rebirth Flame':'#ffa000', 'Blazing Domain':'#ff5722', 'Ash Resurrection':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Ice (divine level)','Complete ash scattering','Anti-rebirth seals'],
    res: ['Fire','Heat','Lava','Burn','Physical (non-divine)','Poison','Fear'],
    ab: [
      'Rebirth Flame (upon death, revives after 30 seconds with +50% stats; can revive up to 3 times)',
      'Blazing Domain (converts battlefield into fire zone; fire heals Phoenix for 10% of damage dealt)',
      'Ash Resurrection (when damaged, creates 1-3 fire spirits that attack enemies)',
      'Solar Flare (large AoE, high damage, blinds enemies)'
    ],
    territorialSS: false,
    warn: 'To permanently kill a Phoenix, you must destroy its ash completely using divine ice or scatter it across sacred ground where rebirth is impossible.',
    loot: [{ name:'Phoenix Feather', rarity:'rare', note:'Can be used to craft a one-time resurrection item' }, { name:'Sacred Ash', rarity:'unique', note:'Still warm – can reforge a Phoenix or create a powerful fire artifact' }],
    variants: [
      {
        key: 'ash_wraith',
        label: '💀 Ash Wraith (Fallen Phoenix)',
        rank: 'S',
        ibg: '#5e4a3a',
        icon: '💀',
        sub: 'Undead Phoenix · Fallen Mythical',
        size: '~3 m, skeletal wings, smoke body',
        intel: 243,
        desc: 'A Phoenix that was killed without proper rebirth – its soul trapped in ash, now a vengeful undead spirit. It cannot revive, but its fire becomes necrotic, dealing decay damage. A tragic creature.',
        stats: { HP: 16842, Damage: 14873, Defense: 10842, Aggression: 21473, Speed: 687, Mana: 12473, 'Necrotic Flame': 19873, 'Ash Storm': 16873, 'Final Sorrow': 0, Threat: 19873 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Necrotic Flame':'#800080', 'Ash Storm':'#455a64', 'Final Sorrow':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Holy','Purification','Fire (now damages)'],
        res: ['Physical','Darkness','Poison','Fear'],
        ab: ['Necrotic flame (decay damage, prevents healing)', 'Ash storm (AoE blind + damage)', 'Final sorrow (on death, deals massive AoE necrotic damage)'],
        loot: [{ name:'Ash Wraith Core', rarity:'rare', note:'Used in undead summoning and decay enchantments' }]
      }
    ]
  };
  entries.push(phoenix);

  // ========================
  // 4. JORMUNGANDR
  // ========================
  const jormungandr = {
    id: 'jormungandr',
    name: 'Jormungandr',
    sub: 'Mythical Titan · World Serpent',
    rank: 'SSS',
    ibg: '#4a6e3a',
    icon: '🐍',
    size: '~200 m long, wraps around mountains',
    biomes: ['Ocean','Deep Trench','World Coil (anywhere)'],
    intel: 412,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control','Swarm'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'The World Serpent is a titan so vast it coils around the world. Its body cannot be targeted at once – you fight a section of it. Its poison is a lethal environmental hazard that spreads through water. Its tail sweeps entire armies. Killing it is the stuff of apocalypse myths.',
    stats: { HP: 38743, Damage: 28473, Defense: 24873, Aggression: 31473, Speed: 287, Mana: 18743, 'World Coil': 38743, 'Toxic Flood': 32473, 'Tail Cataclysm': 34783, Threat: 38743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'World Coil':'#ffa000', 'Toxic Flood':'#d32f2f', 'Tail Cataclysm':'#800080', Threat:'#d32f2f' },
    weak: ['Divine thunder','Thor’s hammer replica','World severance weapons'],
    res: ['Physical','Poison (immune)','Darkness','Fear','Water'],
    ab: [
      'World Coil (traps entire area in constricting coils; players cannot leave zone)',
      'Toxic Flood (spreads lethal poison across ground; deals 50 dmg/sec for 60 seconds)',
      'Tail Cataclysm (massive AoE sweep that destroys structures and knocks back all enemies)',
      'Segment Regeneration (each body segment has its own HP; killing one segment does not kill the serpent)'
    ],
    territorialSS: true,
    warn: 'Jormungandr is a world-ending threat. Do not engage without divine blessings and multi-party coordination. Its poison is fatal within 30 seconds without immunity.',
    territory: 'In any large body of water, Jormungandr gains +100% HP regen and its poison spreads twice as fast.',
    loot: [{ name:'World Serpent Scale', rarity:'unique', note:'Impervious to most damage – used in legendary armor' }, { name:'Venom Gland', rarity:'unique', note:'Can produce lethal poison or an antidote for itself' }]
  };
  entries.push(jormungandr);

  // ========================
  // 10. WORLD TURTLE
  // ========================
  const worldTurtle = {
    id: 'world_turtle',
    name: 'World Turtle',
    sub: 'Ancient Mythical · Living Continent',
    rank: 'SSS',
    ibg: '#7e8e6e',
    icon: '🐢',
    size: '~10 km across, island-sized',
    biomes: ['Ocean','Sky (floating)','Legend'],
    intel: 678,
    tags: { behavior: ['Passive','Neutral'], combat: [], intelligence: ['Sentient'], interaction: ['Environmental'] },
    desc: 'The World Turtle is a creature of myth so enormous that entire civilizations live on its back. It moves slowly through the cosmos, carries ecosystems, and rarely interacts with smaller beings. It does not attack – cannot be attacked meaningfully. It is a force of nature, not an enemy.',
    stats: { HP: 1000000, Damage: 0, Defense: 100000, Aggression: 0, Speed: 1, Mana: 100000, 'Carries Worlds': 0, 'Eternal Sleep': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Carries Worlds':'#00bcd4', 'Eternal Sleep':'#ffa000', Threat:'#607d8b' },
    weak: ['None (cannot be harmed)'],
    res: ['All (invulnerable)'],
    ab: ['Carries Worlds (supports ecosystems on its back)', 'Eternal Sleep (sleeps for millennia, rarely wakes)', 'Turtle Stance (invulnerable to all attacks)'],
    warn: 'Do not attempt to fight the World Turtle. It is not a combat encounter. It is a setting.',
    loot: [{ name:'Turtle Shell Fragment (fallen)', rarity:'unique', note:'A piece of ancient shell that fell off naturally – can be used to build an indestructible shield.' }]
  };
  entries.push(worldTurtle);

  // ========================
  // Register Category
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('mythicals', entries, 'Special', '✨');
    console.log('Mythical data (complete) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded. Make sure bestiary-core.html is loaded first.');
  }
})();