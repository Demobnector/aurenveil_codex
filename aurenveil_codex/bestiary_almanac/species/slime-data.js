// species/slime-data.js
(function() {
  const entries = [];

  // ========================
  // F-RANK SLIMES
  // ========================

  // Base Slime
  const baseSlime = {
    id: 'base',
    name: 'Base Slime',
    sub: 'Common · Passive',
    rank: 'F',
    ibg: '#e8f5e9',
    icon: '🟢',
    size: 'Cat-sized (~25–35 cm)',
    biomes: ['Forest', 'Cave', 'Ruins', 'Dungeon'],
    intel: 12,
    tags: { behavior: ['Passive'], combat: [], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The most common slime found across beginner zones. Passive unless cornered. Dangerous in large numbers to inexperienced adventurers. Green and cyan variants share identical stats. Destroying the core is the only confirmed kill method.',
    stats: { HP: 42, Damage: 17, Defense: 11, Aggression: 9, Speed: 13, Mana: 4, Durability: 19, Threat: 14 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Durability:'#795548', Threat:'#607d8b' },
    weak: ['Piercing (core)', 'Blunt (core)'],
    res: ['Crush (body)'],
    ab: ['Core dependency (passive)'],
    loot: [
      { name: 'Slime Core Fragment', rarity: 'common', note: 'Basic crafting material, used in beginner adhesive compounds' },
      { name: 'Slime Gel', rarity: 'common', note: 'General-purpose lubricant or alchemical solvent base' }
    ],
    variants: [
      {
        key: 'king',
        label: '👑 King',
        rank: 'D',
        ibg: '#ede7f6',
        icon: '🟢',
        sub: 'King Variant · Commanding',
        size: 'Boulder-sized (~2.5–3.5 m)',
        intel: 38,
        tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Swarm'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
        desc: 'Swells to boulder proportions and commands nearby base slimes into coordinated group aggression. Core is embedded deeper in a thickened outer layer — sustained blunt force is required before the core becomes accessible.',
        stats: { HP: 374, Damage: 148, Defense: 213, Aggression: 317, Speed: 83, Mana: 31, Durability: 428, 'Command Range': 461 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Durability:'#795548', 'Command Range':'#7b1fa2' },
        weak: ['Heavy blunt (core)', 'Piercing burst'],
        res: ['Light crush', 'Single strikes'],
        ab: ['Swarm command (active)', 'Core hardening (passive)', 'Group aggression aura'],
        loot: [
          { name: 'King Slime Core', rarity: 'rare', note: 'Larger and more stable core — valuable in golem construction' },
          { name: 'Dense Slime Gel', rarity: 'uncommon', note: 'High-viscosity adhesive used in trap-making and sealing compounds' }
        ]
      }
    ]
  };
  entries.push(baseSlime);

  // Glowing Slime
  const glowingSlime = {
    id: 'glowing',
    name: 'Glowing Slime',
    sub: 'Passive · Scavenger',
    rank: 'F',
    ibg: '#fffde7',
    icon: '🌕',
    size: 'Kitten-sized (~12–20 cm)',
    biomes: ['Cave'],
    intel: 8,
    tags: { behavior: ['Passive'], combat: [], intelligence: ['Instinctive'], interaction: ['Symbiotic', 'Environmental'] },
    desc: 'A bioluminescent, entirely passive slime found in deep caves near glowing mushroom clusters. Feeds exclusively on dead organic matter and will not engage living creatures under any circumstance. A natural light source for cave explorers.',
    stats: { HP: 28, Damage: 4, Defense: 9, Aggression: 0, Speed: 7, Mana: 21, Bioluminescence: 87, Threat: 4 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Bioluminescence:'#fbc02d', Threat:'#607d8b' },
    weak: ['Any physical strike'],
    res: ['None of note'],
    ab: ['Passive bioluminescence', 'Organic decomposition (non-combat)'],
    loot: [
      { name: 'Glow Gel', rarity: 'common', note: 'Bioluminescent slime — used as a long-lasting natural light source in lanterns and cave exploration gear' },
      { name: 'Luminous Core Dust', rarity: 'uncommon', note: 'Finely ground core residue that glows for weeks — used in glow-enchanted ink, paints, and light-based wards' }
    ]
  };
  entries.push(glowingSlime);

  // Pollen Slime
  const pollenSlime = {
    id: 'pollen',
    name: 'Pollen Slime',
    sub: 'Passive · Symbiotic',
    rank: 'F',
    ibg: '#f1f8e9',
    icon: '🌸',
    size: 'Sparrow-sized (~8–15 cm)',
    biomes: ['Forest', 'Wetlands'],
    intel: 19,
    tags: { behavior: ['Passive'], combat: [], intelligence: ['Instinctive'], interaction: ['Symbiotic', 'Environmental'] },
    desc: 'A tiny, gentle slime found exclusively in gardens, meadows and flower fields. Feeds on aphids and garden pests. While moving between flowers it inadvertently carries pollen on its surface, acting as a slow but effective pollinator. Emits a faint sweet-smelling dust with mild calming properties. Completely harmless — will flee from anything larger than itself without hesitation.',
    stats: { HP: 17, Damage: 3, Defense: 6, Aggression: 0, Speed: 11, Mana: 14, Pollination: 78, 'Pest Control': 71, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Pollination:'#8bc34a', 'Pest Control':'#cddc39', Threat:'#607d8b' },
    weak: ['Any physical strike', 'Cold temperatures'],
    res: ['Pollen (immune)', 'Mild toxins (pest-derived)'],
    ab: ['Pollen dispersal (passive)', 'Pest feeding (non-combat)', 'Calming dust emission (passive)', 'Threat flee response'],
    loot: [
      { name: 'Pollen Dust', rarity: 'common', note: 'Sweet-smelling powder with mild sedative properties — used in calming potions and sleep-aid alchemy' },
      { name: 'Pest-Control Gel', rarity: 'common', note: 'Mildly toxic slime that repels insects — used in garden protection and pest-deterrent coatings' }
    ],
    variants: [
      {
        key: 'fertilizer',
        label: '🌿 Fertilizer',
        rank: 'F',
        ibg: '#f1f8e9',
        icon: '🌿',
        sub: 'Fertilizer Variant · Passive · Symbiotic',
        size: 'Sparrow to small-bird-sized (~10–18 cm)',
        biomes: ['Forest', 'Wetlands', 'Farmland'],
        intel: 22,
        tags: { behavior: ['Passive'], combat: [], intelligence: ['Instinctive'], interaction: ['Symbiotic', 'Environmental'] },
        desc: 'A slightly larger, more robust cousin of the Pollen Slime found near farmland and fertile soil. Instead of carrying pollen, it emits a nutrient-rich powder as it moves that accelerates plant growth and improves soil quality. Also feeds on aphids and small parasitic insects. Farmers who discover a colony of these on their land consider it extremely good fortune — they are welcomed, never hunted.',
        stats: { HP: 21, Damage: 3, Defense: 8, Aggression: 0, Speed: 9, Mana: 17, 'Fertil. Output': 84, 'Pest Control': 79, Threat: 0 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Fertil. Output':'#33691e', 'Pest Control':'#cddc39', Threat:'#607d8b' },
        weak: ['Any physical strike', 'Drought', 'Chemical pesticides'],
        res: ['Soil toxins (partial)', 'Mild pest venoms'],
        ab: ['Nutrient powder emission (passive)', 'Soil enrichment (passive)', 'Pest feeding (non-combat)', 'Growth acceleration (passive)', 'Threat flee response'],
        loot: [
          { name: 'Fertilizer Powder', rarity: 'common', note: 'Nutrient-rich dust that dramatically accelerates plant growth — highly valued in farming and botanical alchemy' },
          { name: 'Growth Gel', rarity: 'uncommon', note: 'Concentrated growth-stimulant slime — used in potion-making for plant-based healing and regeneration magic' }
        ]
      }
    ]
  };
  entries.push(pollenSlime);

  // ========================
  // E-RANK SLIMES
  // ========================

  // Mana Disruption Slime
  const manaSlime = {
    id: 'mana',
    name: 'Mana Disruption Slime',
    sub: 'Interferer · Semi-aggressive',
    rank: 'E',
    ibg: '#e3f2fd',
    icon: '🔵',
    size: 'Slightly above cat-sized (~35–45 cm)',
    biomes: ['Ruins', 'Dungeon', 'Cave'],
    intel: 87,
    tags: { behavior: ['Aggressive'], combat: ['Control', 'Swarm'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Emits a passive mana disruption zone that weakens or cancels low-tier spells within proximity. Zones stack across individuals — large gatherings can silence mid-tier casters without any active effort.',
    stats: { HP: 143, Damage: 77, Defense: 88, Aggression: 103, Speed: 61, Mana: 218, 'Disrupt Zone': 192, Threat: 157 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Disrupt Zone':'#3f51b5', Threat:'#607d8b' },
    weak: ['Physical strikes', 'Non-magic attacks'],
    res: ['Magic projectiles', 'Spell AoE'],
    ab: ['Mana disruption zone (passive)', 'Zone stacking (group)', 'Low-tier spell cancel'],
    loot: [
      { name: 'Anti-Magic Fragment', rarity: 'uncommon', note: 'Residual core material that retains disruptive properties — used in anti-magic wards and null-zones' },
      { name: 'Disruption Residue', rarity: 'common', note: 'Raw alchemical ingredient for mana-dampening potions' }
    ],
    variants: [
      {
        key: 'king',
        label: '👑 King',
        rank: 'B',
        ibg: '#fce4ec',
        icon: '🔵',
        sub: 'King Variant · Commanding',
        size: 'Horse-sized (~1.8–2.2 m tall)',
        intel: 143,
        tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Swarm'], intelligence: ['Reactive'], interaction: ['Predatory'] },
        desc: 'Projects a vastly wider disruption zone capable of suppressing mid-tier magic on its own. Combined with kin stacking nearby, high-tier spell preparation becomes dangerously unreliable.',
        stats: { HP: 1823, Damage: 887, Defense: 1241, Aggression: 1583, Speed: 412, Mana: 2387, 'Disrupt Zone': 2231, 'Zone Radius': 2144 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Disrupt Zone':'#3f51b5', 'Zone Radius':'#880e4f' },
        weak: ['Close-range physical burst', 'Non-magical siege'],
        res: ['Spell-based AoE', 'Magic bombardment'],
        ab: ['Wide disruption zone (passive)', 'Mid-tier spell suppression', 'Zone stacking (kin)', 'Command aura'],
        loot: [
          { name: 'King Anti-Magic Core', rarity: 'rare', note: 'Potent crafting material for high-grade null-magic artifacts and anti-spell barriers' },
          { name: 'Amplified Disruption Shard', rarity: 'rare', note: 'Shard that continuously emits low-level disruption — used in defensive installations' }
        ]
      }
    ]
  };
  entries.push(manaSlime);

  // Sonic Slime
  const sonicSlime = {
    id: 'sonic',
    name: 'Sonic Slime',
    sub: 'Speed-type · Shy',
    rank: 'E',
    ibg: '#e3f2fd',
    icon: '🔘',
    size: 'Slightly smaller than common (~18–25 cm)',
    biomes: ['Forest', 'Ravine', 'Cave'],
    intel: 163,
    tags: { behavior: ['Passive'], combat: ['Evasive', 'Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'A small, semi-transparent slime. Passive and avoidant — rarely initiates. Extraordinarily fast with elite reaction speed, making it nearly impossible to track or hit. Deals all damage through high-velocity momentum impact.',
    stats: { HP: 137, Damage: 203, Defense: 79, Aggression: 41, Speed: 243, Mana: 88, Evasion: 238, Threat: 162 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Evasion:'#0277bd', Threat:'#607d8b' },
    weak: ['AoE traps', 'Area denial', 'Sticky terrain'],
    res: ['Single-target melee', 'Slow projectiles'],
    ab: ['High-reaction dash', 'Momentum impact', 'Evasive repositioning'],
    loot: [
      { name: 'Speed Core', rarity: 'uncommon', note: 'Vibrating core that retains kinetic energy — used in speed enchantments and lightweight projectile enhancements' },
      { name: 'Kinetic Gel', rarity: 'common', note: 'Elastic slime residue — used as base material for impact-absorption and rebound enchantments' }
    ],
    variants: [
      {
        key: 'evo',
        label: '↑ Phantom',
        rank: 'B',
        ibg: '#e8eaf6',
        icon: '👻',
        sub: 'Evolution · Phantom Sonic Slime',
        size: 'Unchanged — still smaller than common (~18–25 cm)',
        biomes: ['Forest', 'Ravine'],
        intel: 247,
        tags: { behavior: ['Passive'], combat: ['Evasive', 'Burst', 'Ambush'], intelligence: ['Aware'], interaction: ['Predatory'] },
        desc: 'Not larger — dramatically faster. Near-invisible while in motion, leaving only flickering after-images. Can reverse direction mid-dash at full speed, making interception practically impossible. The phantom form does not hunt; it simply cannot be caught when it decides to strike.',
        stats: { HP: 1187, Damage: 2213, Defense: 614, Aggression: 388, Speed: 2443, Mana: 712, Evasion: 2418, 'After-image Decoys': 1823 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Evasion:'#0277bd', 'After-image Decoys':'#7b1fa2' },
        weak: ['Wide AoE with no gaps', 'Spatial lock traps'],
        res: ['All single-target', 'Slow projectiles'],
        ab: ['Near-invisibility (in motion)', 'Mid-dash direction reversal', 'After-image generation', 'Momentum critical strike'],
        loot: [
          { name: 'Phantom Core', rarity: 'rare', note: 'Near-weightless core that bends light faintly — used in invisibility and after-image enchantments' },
          { name: 'Phantom Gel', rarity: 'rare', note: 'Semi-translucent residue — ingredient in high-grade concealment potions and evasion-boost artifacts' }
        ]
      }
    ]
  };
  entries.push(sonicSlime);

  // Camo Slime
  const camoSlime = {
    id: 'camo',
    name: 'Camo Slime',
    sub: 'Ambush · Evasive',
    rank: 'E',
    ibg: '#efebe9',
    icon: '🟤',
    size: 'Cat-sized (~25–35 cm)',
    biomes: ['Forest', 'Cave', 'Ruins'],
    intel: 142,
    tags: { behavior: ['Aggressive'], combat: ['Ambush'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Dynamically matches the color and texture of its surroundings. Hunts small creatures through ambush and plays completely still when larger threats are detected nearby. A survival-oriented predator that knows when not to fight.',
    stats: { HP: 177, Damage: 168, Defense: 123, Aggression: 147, Speed: 203, Mana: 131, Camouflage: 243, Threat: 163 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Camouflage:'#795548', Threat:'#607d8b' },
    weak: ['Heat detection', 'Tremor-sense', 'Sudden AoE'],
    res: ['Visual detection', 'Ranged (stationary)'],
    ab: ['Color mimicry (passive)', 'Ambush strike', 'Threat evasion (passive)'],
    loot: [
      { name: 'Camo Gel', rarity: 'common', note: 'Color-shifting slime — used in stealth coatings and camouflage enchantments for gear' },
      { name: 'Mimicry Core', rarity: 'uncommon', note: 'Core that reacts to ambient color — used in disguise artifacts and adaptive-camouflage equipment' }
    ]
  };
  entries.push(camoSlime);

  // ========================
  // D-RANK SLIMES
  // ========================

  // Aqua Slime
  const aquaSlime = {
    id: 'aqua',
    name: 'Aqua Slime',
    sub: 'Environmental · Semi-aggressive',
    rank: 'D',
    ibg: '#e1f5fe',
    icon: '💧',
    size: 'Cat-sized (~28–38 cm)',
    biomes: ['Waterfall', 'Wetlands', 'Coastal', 'Cave'],
    intel: 34,
    tags: { behavior: ['Aggressive'], combat: ['Environmental', 'Control'], intelligence: ['Instinctive'], interaction: ['Environmental', 'Predatory'] },
    desc: 'Found near water sources and waterfalls. Saturates terrain to create slippery ground and drown small creatures. A stronger variant can project concentrated waterballs. Dissolves into water upon death — no physical remains.',
    stats: { HP: 304, Damage: 223, Defense: 187, Aggression: 214, Speed: 168, Mana: 243, 'Env Control': 317, Threat: 246 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Env Control':'#0288d1', Threat:'#607d8b' },
    weak: ['Lightning', 'Freeze', 'Piercing (core)'],
    res: ['Fire', 'Physical crush'],
    ab: ['Terrain slip (passive)', 'Small creature drowning', 'Waterball (variant)'],
    loot: [],
    lootNote: 'Dissolves entirely into ambient water on death. No recoverable materials from standard variants.',
    variants: [
      {
        key: 'ice',
        label: '❄️ Ice',
        rank: 'C',
        ibg: '#e8eaf6',
        icon: '❄️',
        sub: 'Ice Variant · Aggressive',
        size: 'Cat-sized (~28–40 cm)',
        biomes: ['Cave', 'Ravine', 'Deep Mountain'],
        intel: 41,
        tags: { behavior: ['Aggressive'], combat: ['Burst', 'Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
        desc: 'Found in cold biomes — deep mountain caves, frost ravines, and glacial chambers. Can fire icicle lances at range or flash-freeze a patch of ground to immobilize enemies.',
        stats: { HP: 712, Damage: 847, Defense: 631, Aggression: 683, Speed: 284, Mana: 598, 'Freeze Field': 771, 'Icicle Force': 803 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Freeze Field':'#80deea', 'Icicle Force':'#0097a7' },
        weak: ['Fire', 'Heat', 'Blunt (shatters shell)'],
        res: ['Ice', 'Freeze', 'Water', 'Physical slash'],
        ab: ['Icicle lance (ranged)', 'Area freeze (active)', 'Semi-crystal shell (passive)', 'Cold aura (passive)'],
        loot: [
          { name: 'Frost Core Shard', rarity: 'uncommon', note: 'Retains cold properties after extraction — used in cooling enchantments and ice-magic catalysts' },
          { name: 'Glacial Gel', rarity: 'common', note: 'Solidified slime body — alchemical base for freeze potions and cold-resist coatings' }
        ]
      },
      {
        key: 'king',
        label: '👑 King',
        rank: 'A',
        ibg: '#fbe9e7',
        icon: '💧',
        sub: 'King Variant · Commanding',
        size: 'Elephant-sized (~4–5 m)',
        intel: 67,
        tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Environmental', 'Swarm'], intelligence: ['Reactive'], interaction: ['Predatory', 'Environmental'] },
        desc: 'Can flood contained areas and redirect water flow to trap and restrict movement across a wide zone. Nearby aqua slimes stack terrain effects into a near-impassable drowning field.',
        stats: { HP: 4218, Damage: 2834, Defense: 2387, Aggression: 3143, Speed: 1821, Mana: 3571, 'Env Control': 5512, 'Flood Range': 5247 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Env Control':'#0288d1', 'Flood Range':'#bf360c' },
        weak: ['Lightning burst', 'Freeze (core)'],
        res: ['Fire', 'Crush', 'Terrain denial'],
        ab: ['Area flood (active)', 'Water redirection', 'Kin terrain stacking', 'Command aura'],
        loot: [
          { name: 'King Water Core', rarity: 'rare', note: 'Dense liquid-magic core — used in water-manipulation artifacts and hydromancy tools' },
          { name: 'Current Crystal', rarity: 'uncommon', note: 'Crystallized flow of compressed mana from the king core — valuable in enchanting' }
        ]
      }
    ]
  };
  entries.push(aquaSlime);

  // Radiant Slime
  const radiantSlime = {
    id: 'radiant',
    name: 'Radiant Slime',
    sub: 'Light Slime · Holy-aligned',
    rank: 'D',
    ibg: '#fff0d0',
    icon: '⭐',
    size: 'Cat-sized (~30 cm), glowing golden',
    biomes: ['Temple', 'Sacred Ground', 'Light Dungeon'],
    intel: 23,
    tags: { behavior: ['Passive'], combat: ['Support'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Radiant slimes are infused with holy light. They are passive and will not attack, but can blind enemies with a flash. Their presence purifies minor curses.',
    stats: { HP: 87, Damage: 23, Defense: 43, Aggression: 0, Speed: 98, Mana: 87, 'Flash': 143, 'Purify': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Flash':'#ffa000', 'Purify':'#8bc34a', Threat:'#607d8b' },
    weak: ['Darkness magic', 'Physical attacks'],
    res: ['Light', 'Holy'],
    ab: ['Flash (blinds enemies in 10 m cone, 5 seconds)', 'Purify (removes minor curses and poisons from touched ally)'],
    loot: [{ name: 'Radiant Gel', rarity: 'uncommon', note: 'Glows faintly – used in holy water' }]
  };
  entries.push(radiantSlime);

  // ========================
  // C-RANK SLIMES
  // ========================

  // Acid Slime
  const acidSlime = {
    id: 'acid',
    name: 'Acid Slime',
    sub: 'Corrosive · Aggressive',
    rank: 'C',
    ibg: '#fffde7',
    icon: '🟡',
    size: 'Cat-sized (~25–40 cm)',
    biomes: ['Dungeon', 'Cave', 'Ruins'],
    intel: 29,
    tags: { behavior: ['Aggressive'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Secretes acid that degrades armor and weapon integrity over time. Stronger variants can fully dissolve equipment on contact and deal direct damage to organic tissue.',
    stats: { HP: 647, Damage: 814, Defense: 403, Aggression: 693, Speed: 298, Mana: 181, Corrosion: 913, Threat: 748 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Corrosion:'#f57f17', Threat:'#607d8b' },
    weak: ['Water dilution', 'Alkaline substances'],
    res: ['Blade', 'Fire', 'Heat'],
    ab: ['Armor corrosion (passive)', 'Equipment melt (variant)', 'Organic damage over time'],
    loot: [
      { name: 'Acid Core', rarity: 'uncommon', note: 'Volatile core that retains corrosive properties — used in chemical weapons, trap fluids, and industrial dissolvers' },
      { name: 'Corrosive Gel Sample', rarity: 'common', note: 'Diluted acid extract useful in alchemy for breaking down tough organic compounds' }
    ],
    variants: [
      {
        key: 'king',
        label: '👑 King',
        rank: 'A',
        ibg: '#fbe9e7',
        icon: '🟡',
        sub: 'King Variant · Commanding',
        size: 'Rhino-sized (~3.5–4.5 m)',
        intel: 54,
        tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Control'], intelligence: ['Reactive'], interaction: ['Predatory'] },
        desc: 'Radiates a corrosive mist passively across a wide radius. Equipment begins degrading within seconds of proximity without any direct contact.',
        stats: { HP: 4783, Damage: 5214, Defense: 2841, Aggression: 4423, Speed: 1618, Mana: 1187, Corrosion: 5831, 'Mist Radius': 5413 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Corrosion:'#f57f17', 'Mist Radius':'#bf360c' },
        weak: ['Alkaline flood', 'Water bombardment'],
        res: ['All blade types', 'Fire', 'Heat', 'Standard armor'],
        ab: ['Corrosive mist aura (passive)', 'Equipment melt (proximity)', 'Kin mist stacking', 'Organic dissolution'],
        loot: [
          { name: 'Hyper-Corrosive Core', rarity: 'rare', note: 'Extreme-grade dissolving agent — restricted material used only in specialized industrial or military applications' },
          { name: 'Mist Gland Extract', rarity: 'rare', note: 'Enables crafting of aerosolized acid traps and delayed-corrosion enchantments' }
        ]
      }
    ]
  };
  entries.push(acidSlime);

  // Shadow Slime
  const shadowSlime = {
    id: 'shadow',
    name: 'Shadow Slime',
    sub: 'Assassin · Ambush predator',
    rank: 'C',
    ibg: '#eceff1',
    icon: '⚫',
    size: 'Cat-sized (~25–35 cm)',
    biomes: ['Cave', 'Ruins', 'Dungeon', 'Ravine'],
    intel: 178,
    tags: { behavior: ['Aggressive'], combat: ['Ambush'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'Operates exclusively in darkness, merging with shadows to become nearly undetectable. An ambush predator that strikes fast and retreats immediately. Critically weak to any form of light — even torchlight disrupts its concealment.',
    stats: { HP: 553, Damage: 817, Defense: 304, Aggression: 748, Speed: 903, Mana: 597, Stealth: 963, Threat: 774 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Stealth:'#455a64', Threat:'#607d8b' },
    weak: ['Light magic', 'Torch/flame', 'Holy-type'],
    res: ['Darkness', 'Shadow magic'],
    ab: ['Shadow merge (passive)', 'Ambush strike', 'Shadow veil movement'],
    loot: [
      { name: 'Shadow Core', rarity: 'uncommon', note: 'Retains darkness affinity — used in stealth enchantments and shadow-magic catalysts' },
      { name: 'Void Gel', rarity: 'rare', note: 'Light-absorbing slime residue — rare ingredient for invisibility and concealment artifacts' }
    ]
  };
  entries.push(shadowSlime);

  // Void Slime
  const voidSlime = {
    id: 'void',
    name: 'Void Slime',
    sub: 'Dark Slime · Abyss-touched',
    rank: 'C',
    ibg: '#3a3a4a',
    icon: '🌑',
    size: '~40 cm, black, absorbs light',
    biomes: ['Abyss', 'Cursed Land', 'Void Rift'],
    intel: 12,
    tags: { behavior: ['Aggressive'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Void slimes are infused with dark energy. They absorb light and drain warmth from their surroundings.',
    stats: { HP: 187, Damage: 143, Defense: 187, Aggression: 243, Speed: 87, Mana: 143, 'Darkness Pulse': 243, 'Life Drain': 187, Threat: 287 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Darkness Pulse':'#800080', 'Life Drain':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Holy', 'Light magic', 'Fire'],
    res: ['Darkness', 'Cold', 'Poison'],
    ab: ['Darkness pulse (ranged, deals darkness damage, may blind)', 'Life drain (touch, heals void slime for 50% of damage)'],
    loot: [{ name: 'Void Gel', rarity: 'uncommon', note: 'Absorbs light – used in shadow magic' }]
  };
  entries.push(voidSlime);
  
  // Crystal Slime
  const crystalSlime = {
    id: 'crystal',
    name: 'Crystal Slime',
    sub: 'Armored · Passive-aggressive',
    rank: 'C',
    ibg: '#e8eaf6',
    icon: '💎',
    size: 'Slightly to noticeably larger than common (~40–70 cm)',
    biomes: ['Cave', 'Dungeon', 'Ravine', 'Ruins'],
    intel: 21,
    tags: { behavior: ['Passive', 'Territorial'], combat: ['Defensive', 'Siege'], intelligence: ['Instinctive'], interaction: ['Defensive'] },
    desc: 'A crystallized slime with a deeply buried core. Immune to water and extreme heat including volcanic temperatures. Only concentrated blunt or piercing force can crack the outer shell to expose the core.',
    stats: { HP: 983, Damage: 604, Defense: 992, Aggression: 376, Speed: 197, Mana: 98, Durability: 997, Threat: 703 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Durability:'#1a237e', Threat:'#607d8b' },
    weak: ['Heavy blunt', 'Concentrated piercing'],
    res: ['Water', 'Fire', 'Heat', 'Lava', 'Magic projectiles'],
    ab: ['Crystal shell (passive)', 'Core burial (passive)', 'Heat immunity', 'Water immunity'],
    loot: [
      { name: 'Crystal Slime Shard', rarity: 'common', note: 'High-purity magic-conductive crystal — used to enhance and stabilize magic tools and enchanted equipment' },
      { name: 'Core Crystal', rarity: 'uncommon', note: 'Dense crystallized mana — valuable in crafting staffs, wands, and magic amplifiers' }
    ],
    variants: [
      {
        key: 'diamond',
        label: '💠 Diamond',
        rank: 'B',
        ibg: '#e3f2fd',
        icon: '💠',
        sub: 'Diamond Variant · Passive · Incredibly Rare',
        size: 'Noticeably larger than crystal variant (~80 cm – 1.2 m)',
        biomes: ['Deep Cave', 'Ancient Dungeon'],
        intel: 16,
        tags: { behavior: ['Passive'], combat: ['Defensive'], intelligence: ['Instinctive'], interaction: ['Defensive'] },
        desc: 'An exceptionally rare passive variant of the crystal slime. Its outer shell has hardened far beyond standard crystal into a near-diamond-grade lattice — translucent, faintly luminous, and almost completely impervious to conventional damage. It does not attack. It simply cannot be meaningfully harmed.',
        stats: { HP: 2183, Damage: 214, Defense: 2487, Aggression: 47, Speed: 93, Mana: 124, Durability: 2498, 'Shell Hardness': 2499 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Durability:'#0d47a1', 'Shell Hardness':'#1a237e' },
        weak: ['Diamond-grade blunt (sustained)', 'Targeted mana spike (core only)'],
        res: ['All physical', 'All elemental', 'Standard magic', 'Fire', 'Ice', 'Lightning', 'Water', 'Lava'],
        ab: ['Diamond-lattice shell (passive)', 'Near-total elemental immunity', 'Core deep burial', 'Passive luminescence'],
        loot: [
          { name: 'Diamond Slime Shell Fragment', rarity: 'rare', note: 'Exceptionally hard crystalline material — used in top-grade armor plating and anti-magic shields' },
          { name: 'Prismatic Core', rarity: 'unique', note: 'Ultra-rare core that refracts and amplifies magical energy — invaluable in legendary weapon and artifact construction' }
        ]
      },
      {
        key: 'king',
        label: '👑 King',
        rank: 'S',
        ibg: '#f3e5f5',
        icon: '💎',
        sub: 'King Variant · Commanding',
        size: 'House-sized (~8–12 m)',
        intel: 44,
        tags: { behavior: ['Territorial', 'Aggressive'], combat: ['Siege', 'Defensive'], intelligence: ['Instinctive'], interaction: ['Defensive', 'Predatory'] },
        desc: 'Encases its core in multiple concentric crystal layers, each requiring a separate sustained assault to breach. Virtually immune to all elemental damage.',
        stats: { HP: 14237, Damage: 8463, Defense: 14831, Aggression: 4987, Speed: 1183, Mana: 812, Durability: 14923, 'Shell Layers': 13541 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Durability:'#1a237e', 'Shell Layers':'#4a148c' },
        weak: ['Sustained heavy blunt (Gold-rank+)', 'Consecutive piercing bursts'],
        res: ['All elemental', 'Magic', 'Standard physical', 'Water', 'Lava'],
        ab: ['Multi-layer crystal shell', 'Deep core burial', 'Elemental immunity (all)', 'Kin hardening aura'],
        loot: [
          { name: 'King Crystal Core', rarity: 'rare', note: 'Massive stabilized mana crystal — used in artifact-grade magic tools and large-scale enchantment arrays' },
          { name: 'Layered Shell Plate', rarity: 'rare', note: 'Near-indestructible crystal plate — used in high-grade armor and magical barrier construction' },
          { name: 'Resonance Shard', rarity: 'unique', note: 'Emits a continuous low-frequency mana resonance — extremely rare component for legendary-grade equipment' }
        ]
      }
    ]
  };
  entries.push(crystalSlime);

  // Voltaic Slime
  const voltaicSlime = {
    id: 'voltaic',
    name: 'Voltaic Slime',
    sub: 'Electric · Dangerous in groups',
    rank: 'C',
    ibg: '#fffde7',
    icon: '⚡',
    size: 'Cat-sized (~28–38 cm)',
    biomes: ['Cave', 'Dungeon', 'Ruins', 'Ravine'],
    intel: 47,
    tags: { behavior: ['Aggressive'], combat: ['Swarm', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'A yellow, visibly sparking slime storing electrical charge that discharges on contact. Electricity travels through conductive materials and stacks across individuals. Ten or more discharging into shared water simultaneously qualifies as a mass-casualty event.',
    stats: { HP: 573, Damage: 746, Defense: 347, Aggression: 604, Speed: 423, Mana: 663, 'Volt Stack': 877, Threat: 803 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Volt Stack':'#f9a825', Threat:'#607d8b' },
    weak: ['Non-conductors', 'Grounding', 'Water isolation'],
    res: ['Lightning', 'Electrical magic'],
    ab: ['Contact discharge (passive)', 'Conduction travel', 'Volt stacking (group)', 'Water chain detonation'],
    loot: [
      { name: 'Volt Core', rarity: 'uncommon', note: 'Self-charging electrical core — used as a long-lasting power source in magic devices and constructs' },
      { name: 'Charge Gel', rarity: 'common', note: 'Electrically active slime residue — used in lightning enchantments and shock-trap construction' },
      { name: 'Tesla Filament', rarity: 'rare', note: 'Hair-thin conducting strand from inside the core — exceptional component for precision electrical artifacts' }
    ]
  };
  entries.push(voltaicSlime);

  // Fire Slime
  const fireSlime = {
    id: 'fire',
    name: 'Fire Slime',
    sub: 'Volcanic · Aggressive',
    rank: 'C',
    ibg: '#fbe9e7',
    icon: '🔴',
    size: 'Variable — small to medium (~20–60 cm)',
    biomes: ['Volcanic', 'Dungeon', 'Desert'],
    intel: 33,
    tags: { behavior: ['Aggressive'], combat: ['Burst', 'Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Radiates intense heat passively while moving. Rare in temperate regions — primarily found in volcanic biomes. Variants range from fireball casters to lava-magic users.',
    stats: { HP: 703, Damage: 848, Defense: 517, Aggression: 824, Speed: 382, Mana: 697, Heat: 921, Threat: 816 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Heat:'#e64a19', Threat:'#607d8b' },
    weak: ['Water (base only)', 'Ice magic'],
    res: ['Fire', 'Heat', 'Lava', 'Burn status'],
    ab: ['Passive heat aura', 'Fireball (variant)', 'Lava magic (lava variant)', 'Core concealment (lava variant)'],
    loot: [
      { name: 'Ember Core', rarity: 'uncommon', note: 'Perpetually warm core — used as a long-lasting heat source in crafting fire-enchanted equipment' },
      { name: 'Magma Gel', rarity: 'common', note: 'Viscous heated slime — used in fire-resistance coatings and combustion alchemy' }
    ],
    variants: [
      {
        key: 'lava',
        label: '🌋 Lava',
        rank: 'A',
        ibg: '#fbe9e7',
        icon: '🌋',
        sub: 'Lava Variant · Rare',
        size: 'Variable — medium to large (~60 cm – 2 m)',
        biomes: ['Volcanic'],
        intel: 41,
        tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Siege', 'Burst'], intelligence: ['Instinctive'], interaction: ['Predatory', 'Environmental'] },
        desc: 'Submerges itself in lava, rendering its core completely invisible and inaccessible without draining the surrounding pool. Moves by surfing molten rock and can reshape lava terrain around it.',
        stats: { HP: 4487, Damage: 5523, Defense: 3814, Aggression: 4793, Speed: 2218, Mana: 4187, Heat: 5913, 'Lava Control': 5634 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Heat:'#e64a19', 'Lava Control':'#bf360c' },
        weak: ['Ice magic (extreme)', 'Core detection (specialized)'],
        res: ['Fire', 'Heat', 'Lava', 'All physical', 'Burn', 'Standard magic'],
        ab: ['Lava submersion (passive)', 'Core invisibility', 'Terrain reshaping', 'Lava eruption', 'Molten surfing'],
        loot: [
          { name: 'Magma Core', rarity: 'rare', note: 'Superheated core that stays molten — used in high-grade fire enchantments and volcanic-material crafting' },
          { name: 'Lava Gel', rarity: 'uncommon', note: 'Slow-cooling molten slime — ingredient in fire-resistance gear and volcanic-terrain tools' }
        ]
      },
      {
        key: 'king',
        label: '👑 King',
        rank: 'S',
        ibg: '#f3e5f5',
        icon: '🔥',
        sub: 'King Variant · Territorial — SS within its region',
        size: 'Colossal — moving volcano (~40–80 m diameter)',
        biomes: ['Volcanic'],
        intel: 58,
        territorialSS: true,
        tags: { behavior: ['Territorial', 'Aggressive'], combat: ['Siege', 'Control', 'Swarm'], intelligence: ['Reactive'], interaction: ['Predatory', 'Environmental'] },
        desc: 'A colossus of solidified lava and molten slime mass so large it resembles an active volcanic formation in motion. At rest, it is indistinguishable from a natural lava pool.',
        stats: { HP: 13841, Damage: 12973, Defense: 11284, Aggression: 13102, Speed: 4217, Mana: 12843, Heat: 14763, 'Command Range': 13987, 'Core Depth': 14211, 'Region Temp': 14584 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Heat:'#e64a19', 'Command Range':'#880e4f', 'Core Depth':'#1a237e', 'Region Temp':'#b71c1c' },
        warn: 'Ambient heat alone is lethal to Silver-rank and below within 200 m. Evacuate the region. Request Diamond-rank emergency response. Do not engage within its territory.',
        territory: 'Within its own lava territory all stats scale to SS rank (cap: 40,000). Ambient temperature is maximized, lava flow is entirely under its command, and kin density is at peak.',
        weak: ['Diamond-rank ice magic (sustained)', 'Core detection + piercing (specialized, outside territory)'],
        res: ['All fire and heat', 'Physical attacks', 'Standard magic', 'Lava', 'Burn', 'Non-ice elemental'],
        ab: ['Lava pool sovereignty', 'Core deep burial + invisibility', 'Regional heat escalation', 'Kin heat feeding', 'Lava eruption barrage', 'Fire slime command (regional)', 'Terrain incineration', 'Volcanic disguise (passive)'],
        loot: [
          { name: 'Volcanic King Core', rarity: 'unique', note: 'Unimaginably dense heat-mana core — legendary crafting material for SSS-grade fire artifacts and volcanic golems' },
          { name: 'Lava Sovereign Gel', rarity: 'rare', note: 'Superconductive volcanic slime — used in Diamond-grade fire-resistance gear and enchanted volcanic tools' },
          { name: 'Eruption Shard', rarity: 'rare', note: 'Crystallized lava-mana fragment — component in high-grade explosive enchantments and siege weapons' }
        ]
      }
    ]
  };
  entries.push(fireSlime);

  // Magma Slime
  const magmaSlime = {
    id: 'magma',
    name: 'Magma Slime',
    sub: 'Fire Slime · Volcanic',
    rank: 'C',
    ibg: '#e08a4a',
    icon: '🌋',
    size: '~50 cm, glowing orange, hot',
    biomes: ['Volcano', 'Magma Chamber', 'Ash Field'],
    intel: 8,
    tags: { behavior: ['Aggressive'], combat: ['Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Magma slimes are fire slimes that have absorbed volcanic energy. They are hot to the touch and can spit globs of molten rock.',
    stats: { HP: 243, Damage: 287, Defense: 187, Aggression: 387, Speed: 143, Mana: 87, 'Magma Spit': 387, 'Heat Aura': 0, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Magma Spit':'#ff5722', 'Heat Aura':'#ffa000', Threat:'#d32f2f' },
    weak: ['Cold', 'Water', 'Ice magic'],
    res: ['Fire', 'Heat', 'Lava'],
    ab: ['Magma spit (ranged, fire damage, ignites ground)', 'Heat aura (5 dmg/sec to enemies within 3 m)'],
    loot: [{ name: 'Magma Core', rarity: 'uncommon', note: 'Always warm – used in fire enchantments' }]
  };
  entries.push(magmaSlime);
  
  // ========================
  // PLASMA SLIME (Rare, Magic Mirror)
  // ========================
  const plasmaSlime = {
    id: 'plasma',
    name: 'Plasma Slime',
    sub: 'Energy Slime · Magic Mirror',
    rank: 'B',
    ibg: '#e8a0e8',
    icon: '🟣',
    size: '~50 cm, magenta, shimmering, translucent',
    biomes: ['Mana Well', 'Ley Line Junction', 'Magical Catastrophe Site'],
    intel: 67,
    tags: { behavior: ['Aggressive', 'Territorial'], combat: ['Control', 'Burst'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'One of the rarest slimes in existence, the Plasma Slime is a living mana battery that feeds on magical energy. Its body shimmers with magenta light, and its surface ripples like liquid glass. It is nearly invisible in dim light, revealing itself only when it attacks. Its primary weapon is a concentrated mana laser that it fires from its core – inaccurate but devastating. Its most terrifying ability is mana reflection: any spell cast at it is absorbed and then fired back at the caster. Fireballs, lightning bolts, curses – all become its ammunition. It cannot be harmed by magic, only by physical force or by overwhelming it with more mana than it can absorb.',
    stats: { HP: 847, Damage: 743, Defense: 687, Aggression: 743, Speed: 287, Mana: 984, 'Plasma Laser': 987, 'Mana Reflection': 0, 'Energy Drain': 743, Threat: 987 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Plasma Laser':'#ff5722', 'Mana Reflection':'#00bcd4', 'Energy Drain':'#800080', Threat:'#d32f2f' },
    weak: ['Physical strikes (blunt)', 'Overloading (feeding too much mana)', 'Cold'],
    res: ['All magic (reflected)', 'Lightning', 'Fire', 'Ice', 'Darkness', 'Holy'],
    ab: [
      'Plasma laser – fires a concentrated beam of mana from its core. Deals high damage, ignores 30% magic resistance. Inaccurate: -20% chance to hit moving targets.',
      'Mana reflection – any spell cast at the plasma slime is absorbed. The slime then fires a copy of that spell back at the caster or nearest enemy. Applies to single-target spells only. Area spells still affect the slime but deal half damage.',
      'Energy drain – touching the slime drains mana from the target (50 MP per second) and heals the slime for 10 HP per 10 mana drained.'
    ],
    warn: 'DO NOT CAST SPELLS AT THIS SLIME. Mages are a liability. Send fighters with blunt weapons. If you must use magic, use area spells – they are only half as effective, but they do not get reflected.',
    loot: [
      { name: 'Plasma Core', rarity: 'unique', note: 'A pulsing magenta crystal that absorbs and stores magical energy. Can be used to create a mana battery or a reflection enchantment – or worn as a dangerous curiosity.' },
      { name: 'Prismatic Gel', rarity: 'rare', note: 'Shimmering residue that shifts colors when exposed to mana. Used in high-grade magical research and experimental enchantments.' }
    ]
  };
  entries.push(plasmaSlime);
  
  // ========================
  // UNKNOWN RANK
  // ========================

  // Sage Slime (NOW EASY TO MOVE!)
  const sageSlime = {
    id: 'sage',
    name: 'Sage Slime',
    sub: 'Sentient · Neutral',
    rank: 'UNKNOWN',
    ibg: '#f3e5f5',
    icon: '🔮',
    size: 'Cat-sized (~28–38 cm) — appears to adjust subtly',
    biomes: ['Unknown'],
    intel: 983,
    tags: { behavior: ['Neutral'], combat: ['Defensive', 'Evasive'], intelligence: ['Sentient'], interaction: ['Symbiotic', 'Defensive'] },
    desc: 'An extraordinarily rare slime of unknown origin demonstrating genuine intelligence. It observes, learns, communicates through mimicry and gesture, and actively avoids conflict. Known to assist lost travelers, warn of nearby dangers, and remember individuals it has encountered before. Its rank is formally unclassified — not because it is weak, but because it has never been provoked enough to measure its limits.',
    stats: { HP: 487, Damage: 77, Defense: 423, Aggression: 14, Speed: 476, Mana: 913, Intelligence: 983, Adaptability: 967, Threat: 197 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', Intelligence:'#7b1fa2', Adaptability:'#4a148c', Threat:'#607d8b' },
    weak: ['Sustained hostility (retreats)', 'Unknown'],
    res: ['Low-tier magic (absorbed)', 'Physical strikes (adaptive shell)'],
    ab: ['Behavioral learning (passive)', 'Mana absorption (passive)', 'Communication mimicry', 'Danger sensing', 'Memory retention', 'Ally recognition'],
    loot: [{ name: 'Sage Core', rarity: 'unique', note: 'Only theoretically documented. No confirmed collection exists — the Sage Slime has never been observed dying under any recorded circumstance.' }]
  };
  entries.push(sageSlime);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('slimes', entries, 'Species', '🟢');
    console.log('Slime data (refactored, easy to reorder) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();