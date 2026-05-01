// ocean-data.js (corrected – no parentheses in stats)
(function() {
  const entries = [];

  // ========================
  // 1. REEF SHARK
  // ========================
  const reefShark = {
    id: 'reef_shark',
    name: 'Reef Shark',
    sub: 'Ocean Predator · Pack Hunter',
    rank: 'C',
    ibg: '#9ecfdf',
    icon: '🦈',
    size: '~2 m long, sleek grey body',
    biomes: ['Sea','Ocean','Coral Reef'],
    intel: 18,
    tags: { behavior: ['Aggressive','Opportunistic'], combat: ['Swarm','Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Reef sharks are common predators in shallow waters. They hunt in small packs, using hit-and-run bites to bleed prey. Not particularly dangerous alone, but a pack can overwhelm careless swimmers.',
    stats: { HP: 247, Damage: 298, Defense: 187, Aggression: 342, 'Swim Speed': 487, Mana: 23, 'Blood Frenzy': 387, 'Pack Hunt': 324, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Blood Frenzy':'#d32f2f', 'Pack Hunt':'#ffa000', Threat:'#d32f2f' },
    weak: ['Electric attacks','Spear fishing'],
    res: ['Poison (low)','Cold water'],
    ab: ['Blood frenzy (bonus damage when target bleeding)', 'Pack hunt (adjacent sharks gain +15% damage)'],
    loot: [{ name:'Shark Fin', rarity:'common', note:'Used in soups and alchemy' }, { name:'Shark Tooth', rarity:'common', note:'Sharp – used in tribal weapons' }]
  };
  entries.push(reefShark);

  // ========================
  // 2. GIANT CRAB
  // ========================
  const giantCrab = {
    id: 'giant_crab',
    name: 'Giant Crab',
    sub: 'Coastal Tank · Ambusher',
    rank: 'C',
    ibg: '#d4b87a',
    icon: '🦀',
    size: '~1.5 m wide, thick shell, massive claws',
    biomes: ['Beach','Sea','Tidal Pool'],
    intel: 9,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Defensive','Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Giant crabs lurk in shallow waters and tide pools, camouflaged against rocks. Their claws can crush bone, and their shells resist most blades. They are slow but extremely durable.',
    stats: { HP: 423, Damage: 312, Defense: 387, Aggression: 298, 'Swim Speed': 87, Mana: 12, 'Crushing Claw': 478, 'Shell Defense': 423, Threat: 478 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Crushing Claw':'#ffa000', 'Shell Defense':'#8d6e63', Threat:'#d32f2f' },
    weak: ['Bludgeoning','Electricity','Flipping over'],
    res: ['Piercing','Slashing','Cold'],
    ab: ['Crushing claw (ignores 30% armor, can break shields)', 'Shell defense (+50% defense when stationary)'],
    loot: [{ name:'Crab Shell', rarity:'common', note:'Used in light armor' }, { name:'Crab Meat', rarity:'common', note:'Delicious' }],
    variants: [
      {
        key: 'king_crab',
        label: '🦞 King Crab',
        rank: 'B',
        ibg: '#d4b87a',
        icon: '🦞',
        sub: 'King Crab · Coastal Lord',
        size: '~2.5 m wide, ornate shell, larger claws',
        intel: 21,
        desc: 'An ancient giant crab with a thicker shell and powerful claws. It can summon smaller crabs to aid it.',
        stats: { HP: 897, Damage: 612, Defense: 687, Aggression: 512, 'Swim Speed': 67, Mana: 34, 'King\'s Claw': 842, 'Summon Crabs': 0, Threat: 897 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'King\'s Claw':'#ffa000', 'Summon Crabs':'#8bc34a', Threat:'#d32f2f' },
        weak: ['Bludgeoning','Electric'],
        res: ['Piercing','Slashing'],
        ab: ['King\'s claw (higher armor pen)', 'Summon crabs (calls 2-4 small crabs)'],
        loot: [{ name:'King Crab Shell', rarity:'uncommon', note:'High-quality light armor' }]
      }
    ]
  };
  entries.push(giantCrab);

  // ========================
  // 3. POISON JELLYFISH
  // ========================
  const poisonJellyfish = {
    id: 'poison_jellyfish',
    name: 'Poison Jellyfish',
    sub: 'Drifting Hazard · Venomous',
    rank: 'C',
    ibg: '#a0e0d0',
    icon: '🔵',
    size: '~1 m diameter, translucent, trailing tentacles',
    biomes: ['Sea','Ocean','Deep Trench'],
    intel: 2,
    tags: { behavior: ['Passive','Aggressive'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Jellyfish drift with currents, trailing stinging tentacles that paralyze small prey. Their venom is painful but rarely lethal to humans, though multiple stings can be dangerous. They do not actively hunt – they are hazards to be avoided.',
    stats: { HP: 78, Damage: 87, Defense: 43, Aggression: 0, 'Swim Speed': 12, Mana: 34, 'Stinging Tentacles': 187, 'Paralyzing Venom': 0, Threat: 143 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Stinging Tentacles':'#d32f2f', 'Paralyzing Venom':'#800080', Threat:'#d32f2f' },
    weak: ['Fire','Electricity','Bright light'],
    res: ['Physical (non-bludgeoning)','Poison'],
    ab: ['Stinging tentacles (on contact, deals poison damage, slows movement)', 'Paralyzing venom (save or be paralyzed for 5 seconds)'],
    loot: [{ name:'Jellyfish Venom', rarity:'uncommon', note:'Used in paralytic poisons' }]
  };
  entries.push(poisonJellyfish);

  // ========================
  // 4. MERROW
  // ========================
  const merrow = {
    id: 'merrow',
    name: 'Merrow',
    sub: 'Aquatic Marauder · Tribal Hunter',
    rank: 'C',
    ibg: '#7e9e6e',
    icon: '🧜‍♂️',
    size: '~1.8 m tall, greenish scales, fish tail',
    biomes: ['Sea','Ocean','Coral Reef','Underwater Cave'],
    intel: 48,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Swarm','Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Merrow are the orcs of the sea – brutish, tribal, and aggressive. They hunt in groups, using spears and nets to drag prey underwater. They can breathe both air and water, often raiding coastal villages.',
    stats: { HP: 387, Damage: 343, Defense: 287, Aggression: 478, 'Swim Speed': 278, Mana: 67, 'Net Throw': 423, 'Spear Thrust': 398, Threat: 498 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Net Throw':'#ffa000', 'Spear Thrust':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Lightning','Fire (above water)','Harpoons'],
    res: ['Cold','Poison'],
    ab: ['Net throw (immobilizes target, can drag into water)', 'Spear thrust (armor-piercing)', 'Water breathing (unlimited)'],
    loot: [{ name:'Merrow Scale', rarity:'common', note:'Water-resistant leather' }, { name:'Coral Spear', rarity:'uncommon', note:'Crude but effective' }]
  };
  entries.push(merrow);

  // ========================
  // 5. SIREN
  // ========================
  const siren = {
    id: 'siren',
    name: 'Siren',
    sub: 'Sea Tempter · Mind Controller',
    rank: 'A',
    ibg: '#c0b0d0',
    icon: '🧜‍♀️',
    size: '~1.7 m, beautiful, fish tail',
    biomes: ['Sea','Ocean','Rocky Coast'],
    intel: 187,
    tags: { behavior: ['Strategic','Manipulative'], combat: ['Control','Support'], intelligence: ['Strategic'], interaction: ['Manipulative'] },
    desc: 'Sirens lure sailors with enchanting songs, then drown them or charm them into servitude. Their voices can charm entire crews, causing ships to crash. They are intelligent and cruel, often keeping charmed thralls.',
    stats: { HP: 587, Damage: 343, Defense: 287, Aggression: 478, 'Swim Speed': 412, Mana: 743, 'Enchanting Song': 987, 'Charm Person': 837, 'Drowning Grasp': 567, Threat: 842 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Enchanting Song':'#e91e63', 'Charm Person':'#800080', 'Drowning Grasp':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Wax in ears (silence)','Wind spells (disrupt voice)','Silver'],
    res: ['Charm','Fear','Water'],
    ab: ['Enchanting song (AoE charm, saves each round)', 'Charm person (single target, long duration)', 'Drowning grasp (drags target underwater, suffocation)'],
    loot: [{ name:'Siren Voice Box', rarity:'rare', note:'Enchants items with charm effects – restricted' }]
  };
  entries.push(siren);

  // ========================
  // 6. LESSER SEA SERPENT
  // ========================
  const lesserSeaSerpent = {
    id: 'lesser_sea_serpent',
    name: 'Lesser Sea Serpent',
    sub: 'Mid-Tier Sea Monster',
    rank: 'B',
    ibg: '#6e9eae',
    icon: '🐍',
    size: '~10 m long, serpentine, scales',
    biomes: ['Ocean','Deep Sea'],
    intel: 34,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Burst'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Lesser sea serpents are common deep-water predators. They attack ships by constricting hulls or ramming. Their scales resist mundane weapons.',
    stats: { HP: 987, Damage: 843, Defense: 687, Aggression: 1123, 'Swim Speed': 412, Mana: 187, 'Constrict': 1187, 'Ram': 987, Threat: 1323 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Constrict':'#ffa000', 'Ram':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Harpoons','Lightning','Cold (slows)'],
    res: ['Physical (non-piercing)','Water'],
    ab: ['Constrict (grapples, crushing damage)', 'Ram (charge attack, damages ships)'],
    loot: [{ name:'Serpent Scale', rarity:'uncommon', note:'Waterproof scale armor' }, { name:'Serpent Tooth', rarity:'uncommon', note:'Large, used in spears' }]
  };
  entries.push(lesserSeaSerpent);

  // ========================
  // 7. GREAT WHITE SHARK
  // ========================
  const greatWhite = {
    id: 'great_white_shark',
    name: 'Great White Shark',
    sub: 'Apex Predator · Solitary Hunter',
    rank: 'A',
    ibg: '#9ecfdf',
    icon: '🦈',
    size: '~6 m long, massive, powerful jaws',
    biomes: ['Ocean','Open Sea'],
    intel: 18,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Siege'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'The great white shark is the ocean\'s ultimate solo predator. It detects blood from miles away and attacks with devastating bite force. It can breach onto ships.',
    stats: { HP: 1843, Damage: 1673, Defense: 1243, Aggression: 1873, 'Swim Speed': 587, Mana: 43, 'Breach': 2047, 'Bleeding Bite': 1873, 'Blood Hunt': 0, Threat: 2187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Breach':'#ffa000', 'Bleeding Bite':'#d32f2f', 'Blood Hunt':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Harpoon nets','Electricity','Spear to gills'],
    res: ['Cold','Poison'],
    ab: ['Breach (leaps onto ship, deals AoE damage)', 'Bleeding bite (inflicts bleed, 50 dmg/sec)', 'Blood hunt (detects wounded prey from 2 km)'],
    loot: [{ name:'Shark Jaw', rarity:'rare', note:'Used in ceremonial weapons' }, { name:'Shark Fin (large)', rarity:'rare', note:'Highly valuable in alchemy' }]
  };
  entries.push(greatWhite);

  // ========================
  // 8. ABYSSAL ANGLER
  // ========================
  const abyssalAngler = {
    id: 'abyssal_angler',
    name: 'Abyssal Angler',
    sub: 'Deep Sea Horror · Lure Predator',
    rank: 'A',
    ibg: '#3e4a5e',
    icon: '🎣',
    size: '~3 m long, bioluminescent lure, massive jaws',
    biomes: ['Abyssal Trench','Deep Ocean'],
    intel: 42,
    tags: { behavior: ['Aggressive','Ambush'], combat: ['Control','Burst'], intelligence: ['Reactive'], interaction: ['Predatory'] },
    desc: 'The abyssal angler dwells in the darkest depths, using a glowing lure to attract prey. Its jaws can swallow creatures half its size. Its light can hypnotize.',
    stats: { HP: 1247, Damage: 1437, Defense: 987, Aggression: 1473, 'Swim Speed': 287, Mana: 543, 'Hypnotic Lure': 1783, 'Jaw Snap': 1647, 'Abyssal Glow': 0, Threat: 1897 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Hypnotic Lure':'#00bcd4', 'Jaw Snap':'#d32f2f', 'Abyssal Glow':'#ffa000', Threat:'#d32f2f' },
    weak: ['Bright light (counters lure)','Piercing'],
    res: ['Darkness','Cold','Physical'],
    ab: ['Hypnotic lure (charm gaze, draws prey in)', 'Jaw snap (high damage, swallows small targets)', 'Abyssal glow (illuminates area, can blind)'],
    loot: [{ name:'Angler Lure', rarity:'rare', note:'Bioluminescent – used in underwater lanterns' }, { name:'Angler Jaw', rarity:'rare', note:'Can be crafted into a grappling hook' }]
  };
  entries.push(abyssalAngler);

  // ========================
  // 9. MERFOLK (Neutral)
  // ========================
  const merfolk = {
    id: 'merfolk',
    name: 'Merfolk',
    sub: 'Aquatic Civilization · Neutral',
    rank: 'C',
    ibg: '#a0d0e0',
    icon: '🧜',
    size: '~1.6 m, humanoid torso, fish tail',
    biomes: ['Sea','Ocean','Coral Reef'],
    intel: 112,
    tags: { behavior: ['Neutral','Territorial'], combat: ['Support'], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Merfolk are intelligent, humanoid sea-dwellers. They are generally neutral toward surface dwellers, trading pearls and coral for metal tools. They defend their territory fiercely but can be befriended.',
    stats: { HP: 287, Damage: 243, Defense: 187, Aggression: 187, 'Swim Speed': 412, Mana: 387, 'Trade': 0, 'Coral Spear': 287, Threat: 312 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Trade':'#8bc34a', 'Coral Spear':'#ffa000', Threat:'#d32f2f' },
    weak: ['Pollution','Overfishing (takes side)'],
    res: ['Water','Cold'],
    ab: ['Trade (can exchange goods)', 'Coral spear (defensive only)', 'Water breathing (unlimited)'],
    loot: [{ name:'Merfolk Pearl', rarity:'uncommon', note:'Used in jewelry and enchantments' }, { name:'Coral Craft', rarity:'common', note:'Decorative' }]
  };
  entries.push(merfolk);

  // ========================
  // 10. KAPPA
  // ========================
  const kappa = {
    id: 'kappa',
    name: 'Kappa',
    sub: 'River Goblin · Trickster',
    rank: 'D',
    ibg: '#8ab0a0',
    icon: '🐢',
    size: '~1 m, turtle-shell back, beak',
    biomes: ['River','Pond','Lake'],
    intel: 87,
    tags: { behavior: ['Opportunistic','Territorial'], combat: ['Control'], intelligence: ['Aware'], interaction: ['Trickster'] },
    desc: 'Kappa are mischievous river creatures. They challenge passersby to sumo wrestling and drown those who lose. Their head-dish contains water – if spilled, they weaken. They are honorable if defeated.',
    stats: { HP: 187, Damage: 143, Defense: 187, Aggression: 243, 'Swim Speed': 187, Mana: 87, 'Sumo Push': 243, 'Water Drain': 0, 'Honor Duel': 0, Threat: 267 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Sumo Push':'#ffa000', 'Water Drain':'#00bcd4', 'Honor Duel':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Spill head-dish (disables magic)','Cucumbers (bribe)'],
    res: ['Water','Cold'],
    ab: ['Sumo push (knockback, stun)', 'Water drain (sucks water from target, dehydrates)', 'Honor duel (if defeated, may grant a wish)'],
    loot: [{ name:'Kappa Shell', rarity:'uncommon', note:'Water-resistant shield' }, { name:'Kappa Dish', rarity:'uncommon', note:'Holds enchanted water' }]
  };
  entries.push(kappa);

  // ========================
  // 11. CORAL GOLEM
  // ========================
  const coralGolem = {
    id: 'coral_golem',
    name: 'Coral Golem',
    sub: 'Construct · Reef Guardian',
    rank: 'A',
    ibg: '#d04e70',
    icon: '💎',
    size: '~3 m tall, made of coral and stone',
    biomes: ['Coral Reef','Underwater Ruin'],
    intel: 23,
    tags: { behavior: ['Territorial','Passive'], combat: ['Defensive','Control'], intelligence: ['Instinctive'], interaction: ['Guardian'] },
    desc: 'Coral golems are ancient guardians of coral reefs. They are not hostile unless the reef is damaged. They can heal from the reef and create barriers.',
    stats: { HP: 2873, Damage: 1873, Defense: 2473, Aggression: 1873, 'Swim Speed': 87, Mana: 743, 'Reef Healing': 0, 'Coral Barrier': 2437, 'Spike Shot': 1873, Threat: 2873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Reef Healing':'#8bc34a', 'Coral Barrier':'#ffa000', 'Spike Shot':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Pollution','Acid','Overwhelming force'],
    res: ['Physical','Water','Poison'],
    ab: ['Reef healing (heals 100 HP/sec while in coral reef)', 'Coral barrier (summons wall of coral, blocks passage)', 'Spike shot (ranged coral spike, high damage)'],
    loot: [{ name:'Coral Core', rarity:'rare', note:'Used in water-based golems' }, { name:'Living Coral', rarity:'uncommon', note:'Still grows' }]
  };
  entries.push(coralGolem);

  // ========================
  // 12. GHOST SHIP
  // ========================
  const ghostShip = {
    id: 'ghost_ship',
    name: 'Ghost Ship',
    sub: 'Cursed Vessel · Undead Crew',
    rank: 'A',
    ibg: '#6e6e8e',
    icon: '⛵',
    size: '~30 m long, ethereal, tattered sails',
    biomes: ['Open Ocean','Fog Bank'],
    intel: 78,
    tags: { behavior: ['Territorial','Aggressive'], combat: ['Siege','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'A ghost ship is a cursed vessel crewed by undead sailors. It appears in fog, firing spectral cannonballs and boarding with skeleton pirates. It can teleport short distances.',
    stats: { HP: 4873, Damage: 3874, Defense: 3874, Aggression: 4873, 'Sailing Speed': 187, Mana: 2874, 'Spectral Cannons': 5874, 'Board': 0, 'Fog Teleport': 0, Threat: 5874 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Sailing Speed':'#ff9800', Mana:'#9c27b0', 'Spectral Cannons':'#d32f2f', 'Board':'#800080', 'Fog Teleport':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Holy water','Exorcism','Sunlight dispels fog'],
    res: ['Physical (non-magical)','Darkness','Fear','Poison'],
    ab: ['Spectral cannons (AoE, hits multiple ship sections)', 'Board (summons 10-20 skeleton pirates)', 'Fog teleport (vanishes in fog, reappears elsewhere)'],
    loot: [{ name:'Ghost Ship Wheel', rarity:'rare', note:'Can control lesser cursed vessels' }, { name:'Undead Crew Skull', rarity:'uncommon', note:'Used in necromancy' }]
  };
  entries.push(ghostShip);

  // ========================
  // 13. CHARYBDIS
  // ========================
  const charybdis = {
    id: 'charybdis',
    name: 'Charybdis',
    sub: 'Maelstrom Entity · Sea Devourer',
    rank: 'SS',
    ibg: '#4e7e9e',
    icon: '🌀',
    size: '~50 m wide maw, creates whirlpools',
    biomes: ['Ocean','Strait','Deep Trench'],
    intel: 0,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Control','Siege'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Charybdis is a massive sea monster that creates whirlpools by swallowing immense amounts of water. It lies beneath the surface, and its whirlpool can sink entire fleets. It has no discernible intelligence – it simply consumes.',
    stats: { HP: 28743, Damage: 24873, Defense: 18743, Aggression: 0, 'Water Flow': 0, Mana: 18743, 'Whirlpool': 32473, 'Swallow': 28743, 'Water Jet': 24873, Threat: 32473 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Water Flow':'#ff9800', Mana:'#9c27b0', 'Whirlpool':'#00bcd4', 'Swallow':'#d32f2f', 'Water Jet':'#ffa000', Threat:'#d32f2f' },
    weak: ['Gravity magic','Stopping water flow'],
    res: ['All physical','Water','Cold'],
    ab: ['Whirlpool (creates a 200 m radius vortex, pulls ships in, 100 dmg/sec)', 'Swallow (consumes a ship or creature, can spit out later)', 'Water jet (high-pressure blast, deals 5000 damage to a single target)'],
    warn: 'Charybdis is a natural disaster, not a typical combat encounter. Avoid its territory.',
    loot: [{ name:'Charybdis Tooth (theoretical)', rarity:'unique', note:'No confirmed loot' }]
  };
  entries.push(charybdis);

  // ========================
  // 14. CETUS
  // ========================
  const cetus = {
    id: 'cetus',
    name: 'Cetus',
    sub: 'Primordial Leviathan · World Serpent',
    rank: 'SSS',
    ibg: '#2e5e6e',
    icon: '🐋',
    size: '~300 m long, whale-like, armored plates',
    biomes: ['World Ocean','Abyssal Plain'],
    intel: 287,
    tags: { behavior: ['Territorial','Passive'], combat: ['Siege','Control'], intelligence: ['Sentient'], interaction: ['Guardian'] },
    desc: 'Cetus is an ancient, whale-like leviathan that swims the deepest oceans. It is not hostile unless provoked, but its passage creates tidal waves. It is said to be a guardian of the deep, and its death would imbalance the seas. Only mythic heroes have ever wounded it.',
    stats: { HP: 58743, Damage: 48743, Defense: 48743, Aggression: 12473, 'Swim Speed': 247, Mana: 48743, 'Tidal Wave': 68743, 'Deep Call': 0, 'Leviathan Armor': 0, Threat: 68743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Tidal Wave':'#ffa000', 'Deep Call':'#00bcd4', 'Leviathan Armor':'#8d6e63', Threat:'#d32f2f' },
    weak: ['Divine weapons','World-shaking magic'],
    res: ['All physical','All elemental','Water','Cold','Fear','Poison'],
    ab: ['Tidal wave (summons a 50 m wave, destroys ships and coastal structures)', 'Deep call (summons sea creatures to aid it)', 'Leviathan armor (takes 90% reduced damage from non-divine sources)'],
    warn: 'Cetus is an ecological cornerstone. Do not engage unless absolutely necessary.',
    loot: [{ name:'Cetus Scale (theoretical)', rarity:'unique', note:'Legends say it can be forged into armor that grants water breathing' }]
  };
  entries.push(cetus);

  // ========================
  // 15. DOLPHIN (Friendly)
  // ========================
  const dolphin = {
    id: 'dolphin',
    name: 'Dolphin',
    sub: 'Marine Mammal · Helpful',
    rank: 'F',
    ibg: '#b0e0e0',
    icon: '🐬',
    size: '~2.5 m long, sleek, intelligent',
    biomes: ['Sea','Ocean','Coast'],
    intel: 187,
    tags: { behavior: ['Neutral','Helpful'], combat: [], intelligence: ['Aware'], interaction: ['Symbiotic'] },
    desc: 'Dolphins are intelligent marine mammals. They are curious and often approach ships. They have been known to guide lost sailors to shore and protect swimmers from sharks. They do not fight but may playfully nudge.',
    stats: { HP: 87, Damage: 23, Defense: 47, Aggression: 0, 'Swim Speed': 387, Mana: 0, 'Guidance': 0, 'Playfulness': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Guidance':'#8bc34a', 'Playfulness':'#ffa000', Threat:'#607d8b' },
    weak: ['Pollution','Fishing nets'],
    res: ['Water','Cold'],
    ab: ['Guidance (can lead ships through dangerous waters)', 'Playfulness (may interact with sailors, never hostile)'],
    loot: [{ name:'Dolphin Fin (rare, not recommended)', rarity:'common', note:'Killing dolphins is considered bad luck.' }]
  };
  entries.push(dolphin);

  // ========================
  // 16. SEA TURTLE
  // ========================
  const seaTurtle = {
    id: 'sea_turtle',
    name: 'Sea Turtle',
    sub: 'Ancient Mariner · Peaceful',
    rank: 'F',
    ibg: '#6e8e6e',
    icon: '🐢',
    size: '~1.5 m shell length',
    biomes: ['Sea','Ocean','Beach'],
    intel: 23,
    tags: { behavior: ['Passive','Neutral'], combat: [], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Sea turtles are gentle, long-lived reptiles. They are not aggressive and will retreat if threatened. Some sailors believe they bring good luck. Their shells are valuable but killing them is illegal in many ports.',
    stats: { HP: 143, Damage: 12, Defense: 187, Aggression: 0, 'Swim Speed': 47, Mana: 0, 'Retreat': 0, 'Shell Defense': 0, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Retreat':'#00bcd4', 'Shell Defense':'#8d6e63', Threat:'#607d8b' },
    weak: ['Poaching','Plastic'],
    res: ['Water','Cold'],
    ab: ['Retreat (withdraws into shell, +200% defense)', 'Shell defense (immune to non-bludgeoning)'],
    loot: [{ name:'Turtle Shell', rarity:'uncommon', note:'Illegal to harvest in many kingdoms' }]
  };
  entries.push(seaTurtle);

  // ========================
  // 17. ELECTRIC EEL
  // ========================
  const electricEel = {
    id: 'electric_eel',
    name: 'Electric Eel',
    sub: 'River Predator · Shocking',
    rank: 'C',
    ibg: '#8eae7e',
    icon: '⚡',
    size: '~2 m long, dark green',
    biomes: ['River','Pond','Swamp'],
    intel: 12,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Burst','Control'], intelligence: ['Instinctive'], interaction: ['Predatory'] },
    desc: 'Electric eels generate powerful shocks to stun prey. They are not true eels but knifefish. Their discharge can paralyze a human. They hunt in murky waters.',
    stats: { HP: 187, Damage: 143, Defense: 87, Aggression: 287, 'Swim Speed': 143, Mana: 187, 'Electric Discharge': 487, 'Paralytic Shock': 387, Threat: 412 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Electric Discharge':'#ffa000', 'Paralytic Shock':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Grounding','Bright light'],
    res: ['Water','Electric (immune)'],
    ab: ['Electric discharge (AoE, 50 dmg, stun 2 sec)', 'Paralytic shock (single target, paralysis 10 sec)'],
    loot: [{ name:'Electric Eel Organ', rarity:'uncommon', note:'Used in shock traps' }]
  };
  entries.push(electricEel);

  // ========================
  // 18. HYDROS (Greater Sea Serpent)
  // ========================
  const hydros = {
    id: 'hydros',
    name: 'Hydros',
    sub: 'Storm Serpent · Ocean Sovereign',
    rank: 'S',
    ibg: '#3e7eae',
    icon: '🐉',
    size: '~25 m long, lightning scales',
    biomes: ['Ocean','Storm Sea'],
    intel: 134,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control'], intelligence: ['Strategic'], interaction: ['Predatory'] },
    desc: 'Hydros is a greater sea serpent that commands storms. It can summon lightning, create waves, and capsize ships. Its roar is like thunder, and its scales crackle with electricity.',
    stats: { HP: 12473, Damage: 9874, Defense: 8473, Aggression: 14873, 'Swim Speed': 587, Mana: 14873, 'Lightning Call': 17873, 'Storm Surge': 14873, 'Thunder Roar': 12473, Threat: 17873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Lightning Call':'#ffa000', 'Storm Surge':'#00bcd4', 'Thunder Roar':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Grounding','Anti-storm magic'],
    res: ['Electric','Water','Cold','Physical'],
    ab: ['Lightning call (summons 5-10 lightning strikes on random targets)', 'Storm surge (creates massive wave, knocks back ships, deals 2000 damage)', 'Thunder roar (AoE fear, deafens)'],
    loot: [{ name:'Hydros Scale', rarity:'rare', note:'Crackles with electricity – used in storm enchantments' }, { name:'Storm Core', rarity:'rare', note:'Powers weather control' }]
  };
  entries.push(hydros);

  // ========================
  // 19. SEA HAG
  // ========================
  const seaHag = {
    id: 'sea_hag',
    name: 'Sea Hag',
    sub: 'Sea Witch · Cursed',
    rank: 'B',
    ibg: '#6e6e6e',
    icon: '🧙',
    size: '~1.6 m, wizened, seaweed hair',
    biomes: ['Rocky Coast','Sea Cave','Shipwreck'],
    intel: 179,
    tags: { behavior: ['Aggressive','Strategic'], combat: ['Control','Support'], intelligence: ['Strategic'], interaction: ['Manipulative'] },
    desc: 'Sea hags are malevolent witches who dwell in coastal caves. They curse ships, drown crews, and transform sailors into sea spawn. They are masters of illusion and poison.',
    stats: { HP: 643, Damage: 487, Defense: 387, Aggression: 743, 'Swim Speed': 187, Mana: 943, 'Curse of Drowning': 1243, 'Illusion Fog': 0, 'Sea Spawn': 0, Threat: 1187 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Curse of Drowning':'#800080', 'Illusion Fog':'#00bcd4', 'Sea Spawn':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Holy','Mirrors','Fresh water'],
    res: ['Darkness','Poison','Fear'],
    ab: ['Curse of drowning (target drowns in air, 50 dmg/sec until save)', 'Illusion fog (creates misleading magical fog)', 'Sea spawn (turns a corpse into a loyal aquatic servant)'],
    loot: [{ name:'Hag\'s Eye', rarity:'rare', note:'Used in scrying and curses' }]
  };
  entries.push(seaHag);

  // ========================
  // 20. WHIRLPOOL (Hazard)
  // ========================
  const whirlpool = {
    id: 'whirlpool_hazard',
    name: 'Whirlpool',
    sub: 'Environmental Hazard · Natural Phenomenon',
    rank: 'D',
    ibg: '#9eaece',
    icon: '🌀',
    size: 'Variable, 10-100 m diameter',
    biomes: ['Ocean','Strait','Reef'],
    intel: 0,
    tags: { behavior: ['Passive'], combat: ['Control'], intelligence: ['Instinctive'], interaction: ['Environmental'] },
    desc: 'Whirlpools are natural or magically created vortexes that suck in ships and swimmers. They are not alive but can be triggered by magic or tidal forces.',
    stats: { HP: 500, Damage: 0, Defense: 0, Aggression: 0, Speed: 0, Mana: 0, 'Pull': 500, 'Suck Under': 300, Threat: 0 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pull':'#00bcd4', 'Suck Under':'#d32f2f', Threat:'#607d8b' },
    weak: ['Dispel magic (if magical)','Avoid'],
    res: ['Physical','Water'],
    ab: ['Pull (pulls creatures toward center, 10 m per round)', 'Suck under (if center reached, target drowns)'],
    loot: [{ name:'None', rarity:'common', note:'Just water.' }]
  };
  entries.push(whirlpool);

  // ========================
  // 21. TRITON
  // ========================
  const triton = {
    id: 'triton',
    name: 'Triton',
    sub: 'Noble Sea Lord · Protector',
    rank: 'B',
    ibg: '#a0c0e0',
    icon: '🧜‍♂️',
    size: '~1.9 m, blue skin, webbed hands',
    biomes: ['Ocean','Coral Capital','Sea Throne'],
    intel: 243,
    tags: { behavior: ['Neutral','Protective'], combat: ['Support','Control'], intelligence: ['Strategic'], interaction: ['Organized'] },
    desc: 'Tritons are the noble lords of the sea, ruling over merfolk and defending oceans from threats. They possess powerful magic and martial skill. They are not hostile to surface dwellers unless their realm is threatened.',
    stats: { HP: 897, Damage: 743, Defense: 743, Aggression: 543, 'Swim Speed': 487, Mana: 943, 'Trident Strike': 987, 'Water Wall': 843, 'Call Ally': 0, Threat: 1043 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Trident Strike':'#ffa000', 'Water Wall':'#00bcd4', 'Call Ally':'#8bc34a', Threat:'#d32f2f' },
    weak: ['Pollution','Draining water from area'],
    res: ['Water','Cold','Electric'],
    ab: ['Trident strike (ignores 30% armor)', 'Water wall (creates barrier, blocks projectiles)', 'Call ally (summons 2-4 merfolk or sea creatures)'],
    loot: [{ name:'Triton Trident', rarity:'rare', note:'Enchanted, requires attunement' }, { name:'Pearl of the Deep', rarity:'rare', note:'Allows water breathing for 1 hour' }]
  };
  entries.push(triton);

  // ========================
  // 22. SCYLLA
  // ========================
  const scylla = {
    id: 'scylla',
    name: 'Scylla',
    sub: 'Cliff Terror · Multi-headed Devourer',
    rank: 'SS',
    ibg: '#6e6e9e',
    icon: '🐙',
    size: '~30 m tall, six long necks with dog heads',
    biomes: ['Strait','Cliff Face','Narrow Passage'],
    intel: 187,
    tags: { behavior: ['Aggressive','Territorial'], combat: ['Siege','Control'], intelligence: ['Aware'], interaction: ['Predatory'] },
    desc: 'Scylla dwells in a narrow strait, grabbing sailors from passing ships with her six long necks. Each head has a different bite: poison, fire, ice, lightning, acid, and plain crushing. She cannot be bypassed – only fought or appeased.',
    stats: { HP: 28743, Damage: 24873, Defense: 18743, Aggression: 29873, 'Strike Speed': 287, Mana: 18743, 'Multi-Bite': 34873, 'Neck Lunge': 28743, 'Elemental Bites': 32473, Threat: 34873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Strike Speed':'#ff9800', Mana:'#9c27b0', 'Multi-Bite':'#d32f2f', 'Neck Lunge':'#ffa000', 'Elemental Bites':'#800080', Threat:'#d32f2f' },
    weak: ['Cutting necks','Fire (on land)','Ranged siege'],
    res: ['Physical','Poison','Cold'],
    ab: ['Multi-bite (attacks 6 times per round, each head has its own damage type)', 'Neck lunge (grabs target from ship, pulls to cliff)', 'Elemental bites (fire, ice, lightning, acid, poison, crushing)'],
    warn: 'Scylla is a classic passage guardian. It cannot be avoided – you must pass through her strait. Sacrifices or bribes may reduce hostility.',
    loot: [{ name:'Scylla Head', rarity:'unique', note:'Each head has different properties; can be used in legendary weapons' }]
  };
  entries.push(scylla);

  // ========================
  // 23. CORAL DRAGON
  // ========================
  const coralDragon = {
    id: 'coral_dragon',
    name: 'Coral Dragon',
    sub: 'Reef Dragon · Coral Guardian',
    rank: 'S',
    ibg: '#e07e8e',
    icon: '🐉',
    size: '~8 m long, coral-colored scales, fin wings',
    biomes: ['Coral Reef','Underwater Cave'],
    intel: 267,
    tags: { behavior: ['Territorial','Protective'], combat: ['Control','Siege'], intelligence: ['Strategic'], interaction: ['Guardian'] },
    desc: 'Coral dragons are rare, reef-dwelling dragons. They are not evil – they protect coral ecosystems from destruction. Their breath weapon is a cone of razor-sharp coral shards, and they can blend into reefs.',
    stats: { HP: 12473, Damage: 9874, Defense: 9874, Aggression: 8733, 'Swim Speed': 587, Mana: 8733, 'Coral Breath': 14873, 'Reef Camouflage': 0, 'Spike Barrage': 12473, Threat: 14873 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Coral Breath':'#ffa000', 'Reef Camouflage':'#00bcd4', 'Spike Barrage':'#d32f2f', Threat:'#d32f2f' },
    weak: ['Pollution','Acid','Bludgeoning'],
    res: ['Piercing','Water','Poison'],
    ab: ['Coral breath (cone of shards, 50 dmg, bleed)', 'Reef camouflage (blends into coral, becomes invisible)', 'Spike barrage (ranged shard attack, multiple targets)'],
    loot: [{ name:'Coral Dragon Scale', rarity:'rare', note:'Colorful, used in ornate armor' }]
  };
  entries.push(coralDragon);

  // ========================
  // Register Category
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('ocean', entries, 'Biomes', '🌊');
    console.log('Ocean data (23 entries) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded. Make sure bestiary-core.html is loaded first.');
  }
})();