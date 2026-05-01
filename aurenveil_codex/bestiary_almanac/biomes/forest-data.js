// biomes/forest-data.js
(function() {
  const entries = [];

  // ========================
  // PEACEFUL CREATURES (F–E)
  // ========================

  // Forest Deer
  const forestDeer = {
    id: 'forest_deer',
    name: 'Forest Deer',
    sub: 'Herbivore · Fleeing',
    rank: 'F',
    ibg: '#c0b0a0',
    icon: '🦌',
    size: '~1.2 m at shoulder, brown coat',
    biomes: ['Forest', 'Grassland', 'Meadow'],
    intel: 23,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Forest deer are common, gentle herbivores. They will flee from any threat and are hunted for their meat and hides. They are not aggressive.',
    stats: { HP: 43, Damage: 12, Defense: 23, Aggression: 0, Speed: 187, Mana: 0, 'Flee': 0, 'Alert': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Flee':'#00bcd4', 'Alert':'#ffa000', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Flee (dashes away, cannot be caught)', 'Alert (warns nearby deer of danger)'],
    loot: [{ name:'Deer Hide', rarity:'common', note:'Used in leather armor' }, { name:'Venison', rarity:'common', note:'Edible meat' }]
  };
  entries.push(forestDeer);

  // Songbird Swarm
  const songbirdSwarm = {
    id: 'songbird_swarm',
    name: 'Songbird Swarm',
    sub: 'Ambient · Flock',
    rank: 'F',
    ibg: '#b0c0a0',
    icon: '🐦',
    size: 'Small birds, flock of 20-50',
    biomes: ['Forest', 'Woodland', 'Village'],
    intel: 8,
    tags: { behavior: ['Passive', 'Fleeing'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Songbirds fill the forest with melody. They are harmless and will flee if approached. Their feathers are sometimes used for decoration.',
    stats: { HP: 12, Damage: 4, Defense: 8, Aggression: 0, Speed: 187, Mana: 0, 'Sing': 0, 'Flock': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Sing':'#8bc34a', 'Flock':'#00bcd4', Threat:'#607d8b' },
    weak: ['Area attacks'],
    res: [],
    ab: ['Sing (pleasant melody, no combat effect)', 'Flock (the flock scatters when threatened)'],
    loot: [{ name:'Colorful Feather', rarity:'common', note:'Used in crafting and decoration' }]
  };
  entries.push(songbirdSwarm);

  // Woodland Fox
  const woodlandFox = {
    id: 'woodland_fox',
    name: 'Woodland Fox',
    sub: 'Clever Guide · Neutral',
    rank: 'F',
    ibg: '#d0b080',
    icon: '🦊',
    size: '~0.6 m, orange fur, bushy tail',
    biomes: ['Forest', 'Woodland', 'Meadow'],
    intel: 67,
    tags: { behavior: ['Curious', 'Neutral'], combat: [], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Foxes are clever, curious animals. They sometimes lead lost travelers to safety or to water. They are not hostile and will flee if attacked.',
    stats: { HP: 34, Damage: 8, Defense: 18, Aggression: 0, Speed: 212, Mana: 0, 'Guide': 0, 'Hide': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Guide':'#8bc34a', 'Hide':'#00bcd4', Threat:'#607d8b' },
    weak: ['Any attack'],
    res: [],
    ab: ['Guide (may lead the way to nearby water or exit)', 'Hide (vanishes into underbrush)'],
    loot: [{ name:'Fox Fur', rarity:'common', note:'Soft, warm, but killing foxes is considered unlucky' }]
  };
  entries.push(woodlandFox);

  // Herb-Spirit (Useful)
  const herbSpirit = {
    id: 'herb_spirit',
    name: 'Herb-Spirit',
    sub: 'Nature Spirit · Healer',
    rank: 'E',
    ibg: '#a0d8a0',
    icon: '🌿',
    size: '~0.4 m, glowing green, translucent',
    biomes: ['Forest', 'Glade', 'Herb Garden'],
    intel: 143,
    tags: { behavior: ['Neutral', 'Helpful'], combat: ['Support'], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Herb-spirits are small nature elementals that protect rare herbs. They can heal wounds and provide medicinal plants. They are shy but may reward those who respect nature.',
    stats: { HP: 67, Damage: 12, Defense: 34, Aggression: 0, Speed: 143, Mana: 187, 'Healing Touch': 87, 'Herb Gift': 0, 'Fade': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Healing Touch':'#8bc34a', 'Herb Gift':'#ffa000', 'Fade':'#00bcd4', Threat:'#607d8b' },
    weak: ['Pollution', 'Fire'],
    res: ['Nature magic', 'Poison'],
    ab: ['Healing touch (restores 50 HP to one target)', 'Herb gift (offers a rare medicinal herb, once per encounter)', 'Fade (becomes invisible, escapes)'],
    loot: [{ name:'Spirit Herb', rarity:'uncommon', note:'Cures any poison and heals 20 HP' }]
  };
  entries.push(herbSpirit);

  // Glowmoth (Light source)
  const glowmoth = {
    id: 'glowmoth',
    name: 'Glowmoth',
    sub: 'Bioluminescent | Night Guide',
    rank: 'E',
    ibg: '#d0e8a0',
    icon: '🦋',
    size: '~0.3 m wingspan, glowing yellow',
    biomes: ['Forest', 'Cave', 'Night Wood'],
    intel: 23,
    tags: { behavior: ['Passive', 'Helpful'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Glowmoths emit a soft, warm light. They are attracted to lost travelers and flutter ahead, providing illumination. They are harmless and will flee if threatened.',
    stats: { HP: 18, Damage: 4, Defense: 12, Aggression: 0, Speed: 143, Mana: 23, 'Glow': 0, 'Guide Light': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Glow':'#ffa000', 'Guide Light':'#00bcd4', Threat:'#607d8b' },
    weak: ['Bright light', 'Wind'],
    res: [],
    ab: ['Glow (provides 10 m radius light, no mana cost)', 'Guide light (floats ahead, showing the way)'],
    loot: [{ name:'Glowmoth Wing', rarity:'uncommon', note:'Still glows faintly – used in light enchantments' }]
  };
  entries.push(glowmoth);

  // ========================
  // NEUTRAL / DANGEROUS (D–C)
  // ========================

  // Giant Boar
  const giantBoar = {
    id: 'giant_boar',
    name: 'Giant Boar',
    sub: 'Aggressive Herbivore · Charger',
    rank: 'D',
    ibg: '#8e7e5e',
    icon: '🐗',
    size: '~1.8 m at shoulder, tusks',
    biomes: ['Forest', 'Swamp', 'Woodland'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Giant boars are ill-tempered and will charge anything that enters their territory. Their tusks can gut a horse.',
    stats: { HP: 287, Damage: 243, Defense: 187, Aggression: 387, Speed: 287, Mana: 12, 'Tusk Charge': 387, 'Gore': 287, 'Berserk': 0, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Tusk Charge':'#ffa000', 'Gore':'#d32f2f', 'Berserk':'#800080', Threat:'#d32f2f' },
    weak: ['Slowed', 'Traps', 'Magic'],
    res: ['Physical (partial)'],
    ab: ['Tusk charge (charge attack, knocks prone, high damage)', 'Gore (melee, bleed damage)', 'Berserk (when below 30% HP, gains +50% damage)'],
    loot: [{ name:'Boar Tusk', rarity:'uncommon', note:'Used in tribal weapons' }, { name:'Boar Hide', rarity:'common', note:'Tough leather' }]
  };
  entries.push(giantBoar);

  // Forest Wolf
  const forestWolf = {
    id: 'forest_wolf',
    name: 'Forest Wolf',
    sub: 'Pack Hunter · Pack',
    rank: 'D',
    ibg: '#a0a0a0',
    icon: '🐺',
    size: '~1.1 m at shoulder, grey fur',
    biomes: ['Forest', 'Taiga', 'Mountain'],
    intel: 56,
    tags: { behavior: ['Aggressive', 'Pack'], combat: ['Swarm', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Wolves hunt in packs of 5-12. They are intelligent, using flanking and hit-and-run tactics. Alone, they are cowardly; in numbers, deadly.',
    stats: { HP: 143, Damage: 187, Defense: 98, Aggression: 287, Speed: 312, Mana: 12, 'Bite': 243, 'Pack Flanking': 0, 'Howl': 0, Threat: 312 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bite':'#d32f2f', 'Pack Flanking':'#ffa000', 'Howl':'#800080', Threat:'#d32f2f' },
    weak: ['Area attacks', 'Breaking formation', 'Kill leader'],
    res: ['Cold'],
    ab: ['Bite (basic attack, causes bleed)', 'Pack flanking (gains +10% damage per adjacent wolf)', 'Howl (summons 2-4 additional wolves, potential reinforcements)'],
    loot: [{ name:'Wolf Fur', rarity:'common', note:'Warm, used in winter clothing' }, { name:'Wolf Fang', rarity:'common', note:'Sharp' }],
    variants: [
      {
        key: 'alpha',
        label: '👑 Alpha Wolf',
        rank: 'C',
        ibg: '#b0b0b0',
        icon: '🐺',
        sub: 'Alpha Wolf · Pack Leader',
        size: '~1.3 m at shoulder, scarred',
        desc: 'Larger and smarter, leads the pack. Its howl can rally wolves from a distance.',
        stats: { HP: 287, Damage: 287, Defense: 187, Aggression: 487, Speed: 343, Mana: 23, 'Alpha Bite': 387, 'Pack Rally': 0, 'Intimidate': 287, Threat: 512 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Alpha Bite':'#d32f2f', 'Pack Rally':'#ffa000', 'Intimidate':'#800080', Threat:'#d32f2f' },
        weak: ['Area attacks', 'Kill leader'],
        res: ['Cold'],
        ab: ['Alpha bite (bonus damage to bleeding targets)', 'Pack rally (all wolves gain +20% damage for 30 seconds)', 'Intimidate (fear effect on enemies, reduce accuracy)'],
        loot: [{ name:'Alpha Wolf Fur', rarity:'uncommon', note:'High-quality pelt' }]
      }
    ]
  };
  entries.push(forestWolf);

  // Woodland Stag (Guardian)
  const woodlandStag = {
    id: 'woodland_stag',
    name: 'Woodland Stag',
    sub: 'Guardian of the Grove',
    rank: 'C',
    ibg: '#c0b090',
    icon: '🦌',
    size: '~2 m at shoulder, massive antlers',
    biomes: ['Ancient Forest', 'Sacred Grove'],
    intel: 87,
    tags: { behavior: ['Neutral', 'Protective'], combat: ['Burst', 'Defensive'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Woodland stags are rare, majestic creatures that protect ancient groves. They are not aggressive unless attacked or their forest is harmed.',
    stats: { HP: 387, Damage: 343, Defense: 287, Aggression: 243, Speed: 387, Mana: 87, 'Antler Charge': 487, 'Nature’s Call': 0, 'Hoof Stomp': 287, Threat: 512 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Antler Charge':'#ffa000', 'Nature\'s Call':'#8bc34a', 'Hoof Stomp':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Fire', 'Axes', 'Poaching'],
    res: ['Nature magic', 'Charm'],
    ab: ['Antler charge (line attack, impales, high damage)', 'Nature’s call (summons 2-4 forest creatures to aid)', 'Hoof stomp (AoE, stuns enemies)'],
    loot: [{ name:'Stag Antlers', rarity:'rare', note:'Used in druidic rituals' }]
  };
  entries.push(woodlandStag);

  // ========================
  // DANGEROUS PREDATORS (C–B)
  // ========================

  // Dire Wolf
  const direWolf = {
    id: 'dire_wolf',
    name: 'Dire Wolf',
    sub: 'Primal Predator · Magic-Resistant',
    rank: 'C',
    ibg: '#8e8e8e',
    icon: '🐺',
    size: '~1.5 m at shoulder, thick fur, red eyes',
    biomes: ['Deep Forest', 'Tundra', 'Highland'],
    intel: 34,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Dire wolves are ancient, larger, and more ferocious than common wolves. Their fur resists magic. They hunt alone or in pairs.',
    stats: { HP: 487, Damage: 543, Defense: 387, Aggression: 687, Speed: 387, Mana: 43, 'Crushing Bite': 687, 'Magic Resistance': 0, 'Howl': 487, Threat: 742 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Crushing Bite':'#d32f2f', 'Magic Resistance':'#00bcd4', 'Howl':'#800080', Threat:'#d32f2f' },
    weak: ['Silver', 'Fire', 'Heavy blunt'],
    res: ['Magic (50% resistance)', 'Cold'],
    ab: ['Crushing bite (ignores 30% armor, may break bone)', 'Magic resistance (takes half damage from spells)', 'Howl (fear effect, reduces enemy accuracy)'],
    loot: [{ name:'Dire Wolf Pelt', rarity:'uncommon', note:'Provides magic resistance' }, { name:'Dire Fang', rarity:'uncommon', note:'Used in enchanted weapons' }]
  };
  entries.push(direWolf);

  // Great Bear
  const greatBear = {
    id: 'great_bear',
    name: 'Great Bear',
    sub: 'Massive · Territorial',
    rank: 'C',
    ibg: '#b0a080',
    icon: '🐻',
    size: '~2.5 m at shoulder, brown fur',
    biomes: ['Forest', 'Mountain', 'Taiga'],
    intel: 23,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Great bears are massive omnivores that claim large territories. They are slow but hit incredibly hard. Their roar can stun.',
    stats: { HP: 743, Damage: 687, Defense: 543, Aggression: 843, Speed: 287, Mana: 23, 'Roar': 843, 'Bear Hug': 743, 'Claw Swipe': 687, Threat: 887 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Roar':'#800080', 'Bear Hug':'#d32f2f', 'Claw Swipe':'#ffa000', Threat:'#d32f2f' },
    weak: ['Slow', 'Ranged kiting', 'Fire'],
    res: ['Physical', 'Cold'],
    ab: ['Roar (AoE fear, stuns for 2 seconds)', 'Bear hug (grapple, deals 50 dmg per round)', 'Claw swipe (area attack, hits up to 3 targets)'],
    loot: [{ name:'Bear Hide', rarity:'uncommon', note:'Thick, warm, used in heavy armor' }, { name:'Bear Claws', rarity:'uncommon', note:'Used in climbing gear' }]
  };
  entries.push(greatBear);

  // Forest Viper
  const forestViper = {
    id: 'forest_viper',
    name: 'Forest Viper',
    sub: 'Venomous · Ambush',
    rank: 'C',
    ibg: '#7eae6e',
    icon: '🐍',
    size: '~2 m long, green scales',
    biomes: ['Forest', 'Swamp', 'Jungle'],
    intel: 12,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Ambush', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Forest vipers are ambush predators that hide in trees or undergrowth. Their venom causes paralysis.',
    stats: { HP: 187, Damage: 243, Defense: 143, Aggression: 387, Speed: 243, Mana: 23, 'Venom Bite': 387, 'Constrict': 243, 'Camouflage': 0, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Venom Bite':'#800080', 'Constrict':'#ffa000', 'Camouflage':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Fire', 'Cold', 'Swords (cut)'],
    res: ['Poison'],
    ab: ['Venom bite (paralyzes target for 5 seconds, poison DoT)', 'Constrict (grapples, deals crushing damage)', 'Camouflage (invisible while stationary in foliage)'],
    loot: [{ name:'Viper Venom Gland', rarity:'uncommon', note:'Used in paralytic poisons' }, { name:'Viper Scales', rarity:'common', note:'Green, used in light armor' }]
  };
  entries.push(forestViper);

  // ========================
  // ELITE PREDATORS (B–A)
  // ========================

  // Werewolf (Lycanthrope)
  const werewolf = {
    id: 'werewolf',
    name: 'Werewolf',
    sub: 'Cursed Lycanthrope · Hybrid Form',
    rank: 'B',
    ibg: '#8e6e5e',
    icon: '🐺',
    size: '~2.2 m tall, wolf-like humanoid',
    biomes: ['Forest', 'Curse Wood', 'Full Moon Areas'],
    intel: 56,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Werewolves are humans cursed to transform into wolf-beasts during the full moon. They are immune to non-silver weapons. Their bite can curse others.',
    stats: { HP: 987, Damage: 987, Defense: 743, Aggression: 1287, Speed: 487, Mana: 187, 'Rend': 1287, 'Blood Curse': 0, 'Silver Weakness': 0, Threat: 1387 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Rend':'#d32f2f', 'Blood Curse':'#800080', 'Silver Weakness':'#ffa000', Threat:'#d32f2f' },
    weak: ['Silver', 'Fire', 'Holy'],
    res: ['Physical (non-silver)', 'Fear', 'Poison'],
    ab: ['Rend (claw attack, high damage, causes bleed)', 'Blood curse (bite may curse target, turning them into a werewolf on next full moon)', 'Silver weakness (takes double damage from silver weapons)'],
    loot: [{ name:'Werewolf Pelt', rarity:'rare', note:'Cursed – may cause lycanthropy' }, { name:'Silvered Claw', rarity:'rare', note:'Only obtainable if killed with silver' }],
    variants: [
      {
        key: 'human',
        label: '🧑 Human Form',
        rank: 'D',
        ibg: '#d0c0a0',
        icon: '🧑',
        sub: 'Werewolf (Human Form)',
        size: '~1.8 m, normal human',
        desc: 'During non-full moon nights, the werewolf appears human. Relatively harmless, but still cursed.',
        stats: { HP: 243, Damage: 143, Defense: 143, Aggression: 187, Speed: 243, Mana: 43, 'Hide': 0, 'Bite': 0, 'Curse': 0, Threat: 287 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Hide':'#00bcd4', 'Bite':'#d32f2f', 'Curse':'#800080', Threat:'#d32f2f' },
        weak: ['Silver'],
        res: [],
        ab: ['Hide (blends in as normal person)', 'Bite (very weak, may still carry curse)', 'Curse (if killed, curse may transfer)'],
        loot: [{ name:'Same as werewolf form', rarity:'rare', note:'Loot only obtainable in werewolf form' }]
      },
      {
        key: 'alpha',
        label: '👑 Alpha Werewolf',
        rank: 'A',
        ibg: '#6e4e3e',
        icon: '🐺',
        sub: 'Alpha Werewolf · Pack Lord',
        size: '~2.5 m tall, larger, scarred',
        desc: 'An alpha werewolf leads a pack. Its howl can command other werewolves and wolves.',
        stats: { HP: 1873, Damage: 1687, Defense: 1243, Aggression: 2187, Speed: 587, Mana: 387, 'Alpha Howl': 2187, 'Pack Command': 0, 'Rend Flesh': 1873, Threat: 2387 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Alpha Howl':'#800080', 'Pack Command':'#ffa000', 'Rend Flesh':'#d32f2f', Threat:'#d32f2f' },
        weak: ['Silver', 'Holy'],
        res: ['Physical', 'Fear'],
        ab: ['Alpha howl (summons 2-4 wolves or werewolves)', 'Pack command (all werewolves within 500 m gain +30% damage)', 'Rend flesh (ignores 30% armor)'],
        loot: [{ name:'Alpha Pelt', rarity:'rare', note:'Highly valued' }]
      }
    ]
  };
  entries.push(werewolf);

  // Wood Woad (Treant)
  const woodWoad = {
    id: 'wood_woad',
    name: 'Wood Woad',
    sub: 'Animated Tree · Guardian',
    rank: 'B',
    ibg: '#7eae6e',
    icon: '🌳',
    size: '~4 m tall, walking tree, bark skin',
    biomes: ['Ancient Forest', 'Sacred Grove'],
    intel: 43,
    tags: { behavior: ['Neutral', 'Protective'], combat: ['Defensive', 'Siege'], intelligence: ['Reactive'], interaction: ['Guardian'] },
    desc: 'Wood woads are trees animated by nature magic. They protect sacred groves and ancient forests. They are slow but nearly indestructible.',
    stats: { HP: 1243, Damage: 987, Defense: 987, Aggression: 743, Speed: 143, Mana: 543, 'Branch Sweep': 1243, 'Root Hold': 0, 'Regenerate': 0, Threat: 1387 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Branch Sweep':'#ffa000', 'Root Hold':'#00bcd4', 'Regenerate':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire', 'Axes', 'Bludgeoning'],
    res: ['Piercing', 'Slashing (reduced)', 'Poison'],
    ab: ['Branch sweep (area attack, knocks back)', 'Root hold (immobilizes target, deals damage over time)', 'Regenerate (heals 50 HP/sec while in forest)'],
    loot: [{ name:'Wood Woad Bark', rarity:'rare', note:'Living bark, used in nature magic' }]
  };
  entries.push(woodWoad);

  // Corpse Flower (Plant predator)
  const corpseFlower = {
    id: 'corpse_flower',
    name: 'Corpse Flower',
    sub: 'Carnivorous Plant · Ambush',
    rank: 'B',
    ibg: '#be7e7e',
    icon: '🌺',
    size: '~3 m tall, giant flower, foul odor',
    biomes: ['Dark Forest', 'Swamp', 'Rotting Glade'],
    intel: 8,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Ambush'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Corpse flowers are enormous, carnivorous plants that lure prey with a sweet, rotting smell. They snap shut around victims and digest them slowly.',
    stats: { HP: 987, Damage: 843, Defense: 743, Aggression: 987, Speed: 47, Mana: 187, 'Snap Trap': 1187, 'Digest': 843, 'Stench': 0, Threat: 1287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Snap Trap':'#d32f2f', 'Digest':'#800080', 'Stench':'#ffa000', Threat:'#d32f2f' },
    weak: ['Fire', 'Acid', 'Cutting vines'],
    res: ['Poison'],
    ab: ['Snap trap (grab, immobilizes, 50 dmg per round)', 'Digest (if target remains trapped for 3 rounds, takes 200 dmg)', 'Stench (poison aura, 10 dmg/sec within 10 m)'],
    loot: [{ name:'Corpse Flower Petal', rarity:'uncommon', note:'Used in necrotic poisons' }]
  };
  entries.push(corpseFlower);  // ========================
  // TREANT (Walking Tree) with Elder Variant, plus Ancient Treant
  // ========================
  const treant = {
    id: 'treant',
    name: 'Treant',
    sub: 'Walking Tree · Forest Guardian',
    rank: 'B',
    ibg: '#7eae6e',
    icon: '🌳',
    size: '~4.5 m tall, ancient oak, mossy bark',
    biomes: ['Ancient Forest', 'Sacred Grove', 'Deep Woods'],
    intel: 87,
    tags: { behavior: ['Neutral', 'Protective'], combat: ['Defensive', 'Siege'], intelligence: ['Aware'], interaction: ['Guardian'] },
    desc: 'Treants are ancient, sentient trees that defend the forest. They are slow but immensely strong, able to uproot themselves and walk. They can animate lesser trees to aid them. They are not hostile unless the forest is threatened – but woe to the lumberjack who cuts down their grove.',
    stats: { HP: 1873, Damage: 1437, Defense: 1687, Aggression: 1243, Speed: 143, Mana: 743, 'Branch Sweep': 1873, 'Root Hold': 1437, 'Animate Trees': 0, Threat: 2087 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Branch Sweep':'#ffa000', 'Root Hold':'#00bcd4', 'Animate Trees':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire', 'Axes', 'Bludgeoning'],
    res: ['Piercing', 'Slashing (reduced)', 'Poison', 'Cold'],
    ab: ['Branch sweep (area attack, knocks back)', 'Root hold (immobilizes target, deals damage over time)', 'Animate trees (turns 2-4 normal trees into minor treants for 1 minute)'],
    loot: [{ name:'Treant Bark', rarity:'rare', note:'Living bark – used in nature magic and regeneration potions' }],
    variants: [
      {
        key: 'elder',
        label: '⌛ Elder Treant',
        rank: 'A',
        ibg: '#6e9e5e',
        icon: '🌳',
        sub: 'Elder Treant · Grove Ancient',
        size: '~7 m tall, massive, covered in moss and vines',
        intel: 187,
        desc: 'An elder treant has stood for millennia. Its bark is like iron, and its roots extend for miles. It can summon creatures of the forest and cause localized earthquakes.',
        stats: { HP: 3874, Damage: 2873, Defense: 2873, Aggression: 1873, Speed: 98, Mana: 1487, 'Ironwood Smash': 3874, 'Earth Tremor': 2873, 'Call of the Wild': 0, Threat: 4087 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Ironwood Smash':'#d32f2f', 'Earth Tremor':'#ffa000', 'Call of the Wild':'#8bc34a', Threat:'#d32f2f' },
        weak: ['Fire', 'Siege weapons'],
        res: ['Physical (non-fire)', 'Poison', 'Cold'],
        ab: ['Ironwood smash (massive damage, ignores 30% armor)', 'Earth tremor (AoE, knocks prone, damages structures)', 'Call of the wild (summons 4-8 forest creatures: wolves, bears, or minor treants)'],
        warn: 'Elder treants are walking landmarks. Do not threaten their grove. If you must fight, fire is your only hope.',
        loot: [{ name:'Elder Heartwood', rarity:'unique', note:'Still beats with life – can grow an entire grove' }]
      }
    ]
  };
  entries.push(treant);

  // Ancient Treant (Boss - separate entry, not a variant of Treant)
  const ancientTreant = {
    id: 'ancient_treant',
    name: 'Ancient Treant',
    sub: 'Elder Tree · Walking Grove',
    rank: 'S',
    ibg: '#6e8e5e',
    icon: '🌳',
    size: '~12 m tall, moves entire grove',
    biomes: ['Ancient Forest', 'Lost Grove'],
    intel: 287,
    tags: { behavior: ['Neutral', 'Protective'], combat: ['Siege', 'Control'], intelligence: ['Strategic'], interaction: ['Guardian'] },
    desc: 'An ancient treant is an entire grove of trees that have awakened. It is a walking ecosystem, home to birds, squirrels, and lesser treants. It is a forest given will.',
    stats: { HP: 14873, Damage: 9874, Defense: 12873, Aggression: 4873, Speed: 87, Mana: 8743, 'Root Quake': 12873, 'Acorn Barrage': 9874, 'Regenerate Grove': 0, Threat: 14873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Root Quake':'#ffa000', 'Acorn Barrage':'#d32f2f', 'Regenerate Grove':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Fire', 'Siege weapons', 'Corruption'],
    res: ['Physical', 'Poison'],
    ab: ['Root quake (large AoE, knocks down, damages structures)', 'Acorn barrage (ranged, high damage, multiple targets)', 'Regenerate grove (heals 500 HP/sec while in forest)'],
    warn: 'An ancient treant is a forest itself. Fighting it is akin to fighting the land. It does not seek battle – but it will end one.',
    loot: [{ name:'Ancient Heartwood', rarity:'unique', note:'Can grow a new forest' }]
  };
  entries.push(ancientTreant);

  // Forest Drake (Small dragon)
  const forestDrake = {
    id: 'forest_drake',
    name: 'Forest Drake',
    sub: 'Aerial Predator · Emerald Scale',
    rank: 'A',
    ibg: '#8eae6e',
    icon: '🐉',
    size: '~4 m long, green scales, wings',
    biomes: ['Dense Forest', 'Mountain', 'Wildwood'],
    intel: 134,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Forest drakes are smaller cousins of true dragons. They breathe cones of poisonous spores. They are fiercely territorial and hunt from the air.',
    stats: { HP: 1873, Damage: 1687, Defense: 1487, Aggression: 2187, Speed: 487, Mana: 987, 'Spore Breath': 2187, 'Claw Swipe': 1873, 'Flyby': 0, Threat: 2387 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Spore Breath':'#800080', 'Claw Swipe':'#d32f2f', 'Flyby':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Ice', 'Anti-dragon', 'Ranged'],
    res: ['Poison', 'Magic (partial)'],
    ab: ['Spore breath (cone, poison, 50 dmg/sec for 30 sec)', 'Claw swipe (melee, high damage, bleed)', 'Flyby (swoops, attacks, can’t be retaliated)'],
    loot: [{ name:'Drake Scale', rarity:'rare', note:'Used in poison-resistance armor' }, { name:'Drake Spore Gland', rarity:'rare', note:'Used in poison weapons' }]
  };
  entries.push(forestDrake);

  // ========================
  // LEGENDARY (S–SS)
  // ========================

  // Forest Lord (Guardian)
  const forestLord = {
    id: 'forest_lord',
    name: 'Forest Lord',
    sub: 'Nature Avatar · Ancient Stag',
    rank: 'S',
    ibg: '#c0c0a0',
    icon: '🦌',
    size: '~4 m at shoulder, golden antlers',
    biomes: ['Wildwood', 'Heart of Forest'],
    intel: 478,
    tags: { behavior: ['Neutral', 'Protective'], combat: ['Control', 'Support'], intelligence: ['Sentient'], interaction: ['Guardian', 'Ruler'] },
    desc: 'The Forest Lord is a mythic stag that embodies the spirit of the woods. It rarely appears, and only to those who respect nature. It can command all forest creatures.',
    stats: { HP: 6874, Damage: 4873, Defense: 5874, Aggression: 2874, Speed: 587, Mana: 5874, 'Nature’s Command': 0, 'Healing Light': 0, 'Wild Growth': 5874, Threat: 6874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Nature\'s Command':'#ffa000', 'Healing Light':'#8bc34a', 'Wild Growth':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Corruption', 'Fire', 'Hatred of nature'],
    res: ['Nature magic', 'Poison', 'Fear'],
    ab: ['Nature’s command (control any forest creature, can stop combat)', 'Healing light (restores 500 HP to all allies in 100 m)', 'Wild growth (entire area becomes difficult terrain, vines attack enemies)'],
    warn: 'The Forest Lord is not an enemy. Do not provoke it. It judges those who harm the forest.',
    loot: [{ name:'Forest Lord Antler', rarity:'unique', note:'Blessed – can heal a forest' }]
  };
  entries.push(forestLord);
  
  // ========================
  // NAMED FOREST: THE WHISPERWOOD (Anomaly / Location)
  // ========================
  const whisperwood = {
    id: 'whisperwood',
    name: 'The Whisperwood',
    sub: 'Anomaly · Living Forest',
    rank: 'SS (estimated)',
    ibg: '#5e6e5e',
    icon: '🌲',
    size: 'Unknown, stretches for hundreds of km',
    biomes: ['Whisperwood', 'Cursed Forest'],
    intel: 0,
    tags: { behavior: ['Territorial', 'Inscrutable'], combat: ['Control', 'Swarm'], intelligence: ['Unknown'], interaction: ['Environmental'] },
    desc: 'The Whisperwood is a vast, named forest far to the east. It is said the trees whisper to each other, and paths move when you aren’t looking. Adventurers who enter often emerge days later with no memory of where they’ve been. The forest does not seem hostile, but it is definitely sentient. Some believe it is a sleeping entity, others a fey domain that has merged with the material plane.',
    stats: {
      'Known Area': 'Hundreds of sq km',
      'Estimated Depth': 'Unknown',
      'Minimum Entry Rank': 'Gold (for survival)',
      'Spawn Pattern': 'Unpredictable (creatures appear from mist)',
      'Confirmed Entities': 'Whisper Fox, Shadow Stalker (forest variant), Corpse Flower',
      'Risk Level': 'High – do not enter alone',
      'Corruption Level': 'Moderate (time distortion)'
    },
    bars: { 'Known Area':'#ffa000', 'Estimated Depth':'#d32f2f', 'Minimum Entry Rank':'#e91e63', 'Spawn Pattern':'#00bcd4', 'Confirmed Entities':'#800080', 'Risk Level':'#d32f2f', 'Corruption Level':'#e91e63' },
    weak: ['Unknown'],
    res: ['Unknown'],
    ab: [
      'Whispering trees (the forest communicates with itself, can guide or mislead)',
      'Shifting paths (maps become useless, the forest changes layout)',
      'Memory fog (exiting the forest may erase recent memories)',
      'Manifest creatures (the forest can spawn any forest creature at will)'
    ],
    warn: 'The Whisperwood is not a dungeon. It is a location. Do not treat it as a combat encounter. Respect it, or it may never let you leave.',
    loot: [{ name:'Whisperwood Leaf (preserve)', rarity:'rare', note:'A leaf that rustles even in still air – used in teleportation magic' }],
    variants: [
      {
        key: 'heart',
        label: '🌲 Heart of Whisperwood',
        rank: '? Anomaly',
        ibg: '#4e5e4e',
        icon: '🌳',
        sub: 'Theoretical · Forest Core',
        size: 'Unknown',
        desc: 'Legend says the Whisperwood has a heart – a massive tree where the forest’s consciousness resides. No one has ever found it, but occasional expeditions seek it.',
        stats: {
          'Status': 'Theoretical',
          'Estimated Location': 'Center of Whisperwood',
          'Guardians': 'Unknown',
          'Purpose': 'Unknown'
        },
        bars: { 'Status':'#ffa000', 'Estimated Location':'#d32f2f', 'Guardians':'#800080', 'Purpose':'#00bcd4' },
        weak: ['Unknown'],
        res: ['Speculated: all'],
        ab: ['Unknown'],
        warn: 'If the Heart exists, it is likely the source of the Whisperwood’s sentience. Disturbing it may have catastrophic consequences.',
        loot: [{ name:'Heartwood Seed (theoretical)', rarity:'unique', note:'Could create a new Whisperwood' }]
      }
    ]
  };
  entries.push(whisperwood);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('forest', entries, 'Biomes', '🌲');
    console.log('Forest data (complete ecosystem) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();