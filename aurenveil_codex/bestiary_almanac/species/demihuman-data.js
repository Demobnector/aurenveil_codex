// species/demi-human-data.js
(function() {
  const entries = [];

  // ========================
  // AVIAK (Birdfolk)
  // ========================
  const aviak = {
    id: 'aviak',
    name: 'Aviak',
    sub: 'Birdfolk · Sky Scouts',
    rank: 'D',
    ibg: '#a0c0e0',
    icon: '🐦',
    size: '~1.5 m, bird features, wings',
    biomes: ['Mountains', 'Cliffs', 'Cloud Peaks'],
    intel: 87,
    tags: { behavior: ['Neutral', 'Curious'], combat: ['Burst', 'Evasive'], intelligence: ['Aware'], interaction: ['Trade'] },
    desc: 'Aviaks are birdlike demi-humans with functional wings. They live in high mountains and cliffs. They are curious about the ground dwellers but prefer to keep their distance. They can fly, which makes them excellent scouts.',
    stats: { HP: 287, Damage: 243, Defense: 187, Aggression: 243, 'Fly Speed': 587, Mana: 187, 'Dive': 387, 'Talons': 287, 'Keen Eyes': 0, Threat: 387 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Dive':'#d32f2f', 'Talons':'#ffa000', 'Keen Eyes':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Net', 'Wind spells', 'Enclosed spaces'],
    res: ['Falling damage (immune while flying)'],
    ab: ['Dive (swoop attack, bonus damage if flying high)', 'Talons (claw attack, may grapple)', 'Keen eyes (spot hidden enemies from 200 m)'],
    loot: [{ name:'Aviak Feather', rarity:'common', note:'Used in fletching arrows' }]
  };
  entries.push(aviak);

  // ========================
  // TURTLEKIN
  // ========================
  const turtlekin = {
    id: 'turtlekin',
    name: 'Turtlekin',
    sub: 'Shelled Defenders · Long-lived',
    rank: 'D',
    ibg: '#a09878',
    icon: '🐢',
    size: '~1.5 m, humanoid with large shell',
    biomes: ['Coast', 'River', 'Lake'],
    intel: 112,
    tags: { behavior: ['Passive', 'Protective'], combat: ['Defensive', 'Control'], intelligence: ['Aware'], interaction: ['Guardian', 'Trade'] },
    desc: 'Turtlekin are slow, patient demi-humans with thick shells. They live for centuries. They are not aggressive but will defend themselves fiercely. Their shells provide excellent defense.',
    stats: { HP: 487, Damage: 243, Defense: 487, Aggression: 143, Speed: 87, Mana: 187, 'Shell Shield': 0, 'Water Jet': 287, 'Bite': 243, Threat: 487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Shell Shield':'#8d6e63', 'Water Jet':'#00bcd4', 'Bite':'#ffa000', Threat:'#d32f2f' },
    weak: ['Slow', 'Flipping over'],
    res: ['Physical', 'Water'],
    ab: ['Shell shield (retreat into shell, +200% defense)', 'Water jet (ranged, pushback, low damage)', 'Bite (melee, basic)'],
    loot: [{ name:'Turtlekin Shell Fragment (shed)', rarity:'uncommon', note:'Used in shields' }]
  };
  entries.push(turtlekin);

  // ========================
  // BATKIN (Nocturnal)
  // ========================
  const batkin = {
    id: 'batkin',
    name: 'Batkin',
    sub: 'Nocturnal · Echolocation',
    rank: 'D',
    ibg: '#8e7e7e',
    icon: '🦇',
    size: '~1.5 m, bat wings, large ears',
    biomes: ['Cave', 'Underdark', 'Ruins'],
    intel: 98,
    tags: { behavior: ['Neutral', 'Nocturnal'], combat: ['Ambush', 'Evasive'], intelligence: ['Aware'], interaction: ['Trade'] },
    desc: 'Batkin are nocturnal demi-humans who live in caves. They use echolocation to navigate in darkness. They are not hostile but are reclusive.',
    stats: { HP: 287, Damage: 243, Defense: 187, Aggression: 243, 'Fly Speed': 387, Mana: 187, 'Echolocation': 0, 'Sonic Screech': 343, 'Bite': 243, Threat: 387 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Fly Speed':'#ff9800', Mana:'#9c27b0', 'Echolocation':'#00bcd4', 'Sonic Screech':'#800080', 'Bite':'#ffa000', Threat:'#d32f2f' },
    weak: ['Bright light', 'Loud noises (disorient)'],
    res: ['Darkness', 'Blindness'],
    ab: ['Echolocation (see in complete darkness, cannot be blinded)', 'Sonic screech (AoE, deafens, damages)', 'Bite (basic)'],
    loot: [{ name:'Batkin Leather', rarity:'common', note:'Light, used in stealth gear' }]
  };
  entries.push(batkin);

  // ========================
  // LIZARDFOLK (Lizardmen)
  // ========================
  const lizardfolk = {
    id: 'lizardfolk',
    name: 'Lizardfolk',
    sub: 'Scaled Hunters · Cold-blooded',
    rank: 'C',
    ibg: '#8eae6e',
    icon: '🦎',
    size: '~1.8 m, scales, tail, sharp teeth',
    biomes: ['Swamp', 'Marsh', 'Jungle'],
    intel: 78,
    tags: { behavior: ['Neutral', 'Territorial'], combat: ['Burst', 'Ambush'], intelligence: ['Aware'], interaction: ['Predatory', 'Trade'] },
    desc: 'Lizardfolk are reptilian demi-humans who live in swamps and jungles. They are pragmatic and emotionless by human standards, but not evil. They value survival and efficiency. They can be traded with, but they do not form emotional bonds easily.',
    stats: { HP: 387, Damage: 387, Defense: 387, Aggression: 387, Speed: 287, Mana: 87, 'Bite': 487, 'Tail Swipe': 387, 'Hold Breath': 0, Threat: 487 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Bite':'#d32f2f', 'Tail Swipe':'#ffa000', 'Hold Breath':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold (slows)', 'Fire (dries scales)'],
    res: ['Poison', 'Disease'],
    ab: ['Bite (piercing, may carry disease)', 'Tail swipe (knockback, AoE)', 'Hold breath (can stay underwater for 1 hour)'],
    loot: [{ name:'Lizardfolk Scale', rarity:'uncommon', note:'Natural armor – used in leatherworking' }],
    variants: [
      {
        key: 'swamp',
        label: '🌊 Swamp Lizardfolk',
        rank: 'C',
        ibg: '#7e9e5e',
        icon: '🦎',
        sub: 'Swamp Lizardfolk · Aquatic',
        size: '~1.9 m, darker scales, webbed hands',
        desc: 'Lizardfolk adapted to deep swamps. Excellent swimmers and ambush predators.',
        stats: { HP: 487, Damage: 443, Defense: 443, Aggression: 443, 'Swim Speed': 387, Mana: 87, 'Bite': 543, 'Tail Swipe': 443, 'Camouflage': 0, Threat: 587 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', 'Swim Speed':'#ff9800', Mana:'#9c27b0', 'Bite':'#d32f2f', 'Tail Swipe':'#ffa000', 'Camouflage':'#00bcd4', Threat:'#d32f2f' },
        weak: ['Cold', 'Fire'],
        res: ['Poison'],
        ab: ['Bite (as base)', 'Tail swipe (as base)', 'Camouflage (invisible in swamp water)'],
        loot: [{ name:'Swamp Lizard Scale', rarity:'uncommon', note:'Water-resistant' }]
      }
    ]
  };
  entries.push(lizardfolk);

  // ========================
  // WOLFKIN
  // ========================
  const wolfkin = {
    id: 'wolfkin',
    name: 'Wolfkin',
    sub: 'Pack Hunters · Loyal',
    rank: 'C',
    ibg: '#b0a090',
    icon: '🐺',
    size: '~1.7 m, wolf ears, tail, canine features',
    biomes: ['Forest', 'Taiga', 'Mountain'],
    intel: 112,
    tags: { behavior: ['Territorial', 'Loyal'], combat: ['Swarm', 'Burst'], intelligence: ['Aware'], interaction: ['Pack-oriented'] },
    desc: 'Wolfkin are canine demi-humans who live in tight-knit packs. They are fiercely loyal to their pack and wary of outsiders. Once trust is earned, they are steadfast allies. They have keen senses of smell and hearing.',
    stats: { HP: 387, Damage: 387, Defense: 287, Aggression: 487, Speed: 487, Mana: 87, 'Pack Flanking': 587, 'Keen Senses': 0, 'Howl': 0, Threat: 587 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Pack Flanking':'#ffa000', 'Keen Senses':'#00bcd4', 'Howl':'#800080', Threat:'#d32f2f' },
    weak: ['Silver', 'Loud noises (disorient)'],
    res: ['Cold', 'Tracking'],
    ab: ['Pack flanking (gains +10% damage per adjacent wolfkin ally)', 'Keen senses (detects hidden enemies within 50 m)', 'Howl (summons 2-4 wolves or alerts pack)'],
    loot: [{ name:'Wolfkin Fur', rarity:'uncommon', note:'Warm, used in winter clothing' }]
  };
  entries.push(wolfkin);

  // ========================
  // BULLKIN (Minotaur-like, civilized)
  // ========================
  const bullkin = {
    id: 'bullkin',
    name: 'Bullkin',
    sub: 'Bovine Warriors · Strong',
    rank: 'C',
    ibg: '#c0a080',
    icon: '🐮',
    size: '~2 m tall, horns, muscular',
    biomes: ['Grassland', 'Mountain', 'Farmland'],
    intel: 67,
    tags: { behavior: ['Neutral', 'Territorial'], combat: ['Burst', 'Siege'], intelligence: ['Aware'], interaction: ['Trade'] },
    desc: 'Bullkin are large, strong demi-humans related to minotaurs but civilized. They are not inherently evil. They value strength, honor, and hard work. They make excellent smiths and guards.',
    stats: { HP: 587, Damage: 543, Defense: 487, Aggression: 487, Speed: 187, Mana: 43, 'Charge': 687, 'Gore': 543, 'Stomp': 387, Threat: 687 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Charge':'#ffa000', 'Gore':'#d32f2f', 'Stomp':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Slow', 'Predictable'],
    res: ['Physical', 'Stun'],
    ab: ['Charge (line attack, high damage, knockback)', 'Gore (melee, piercing, may bleed)', 'Stomp (AoE, stun)'],
    loot: [{ name:'Bullkin Horn', rarity:'uncommon', note:'Used in drinking horns and decoration' }]
  };
  entries.push(bullkin);
  
  // ========================
  // CATFOLK (The Nine-Lived)
  // ========================
  const catfolk = {
    id: 'catfolk',
    name: 'Catfolk',
    sub: 'Nine-Lived · Reflex Masters',
    rank: 'B',
    ibg: '#e0c8a0',
    icon: '🐱',
    size: '~1.6 m, lean, cat ears, tail',
    biomes: ['Forest', 'Mountain', 'Village', 'Any'],
    intel: 187,
    tags: { behavior: ['Neutral', 'Territorial'], combat: ['Burst', 'Evasive'], intelligence: ['Strategic'], interaction: ['Organized', 'Diplomatic'] },
    desc: 'Catfolk are a rare and elusive demi-human race, appearing as humanoids with feline features – ears, tails, slit pupils, and retractable claws. They are not inherently hostile, but they are fiercely protective of their kind. Their most legendary trait is the "Nine Lives" – a racial ability that allows a Catfolk to survive death up to nine times, returning moments later with full health and memory of how they died. This makes them nearly impossible to exterminate, as each death teaches them how to counter the method used. The kingdom has learned not to provoke them. They have built a quiet civilization in the frontier, with schools, training grounds, and diplomatic ties to dwarves (for equipment) and elves (for magic).',
    stats: { HP: 487, Damage: 543, Defense: 387, Aggression: 243, Speed: 687, Mana: 487, 'Lives Remaining': 9, 'Reflex': 743, 'Claw Strike': 587, 'Nine Lives': 0, Threat: 587 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Lives Remaining':'#ffa000', 'Reflex':'#00bcd4', 'Claw Strike':'#d32f2f', 'Nine Lives':'#800080', Threat:'#d32f2f' },
    weak: ['Overwhelming force (kill all 9 lives quickly)', 'Anti-resurrection magic', 'Traps designed to capture (not kill)'],
    res: ['Death (once per life)', 'Surprise attacks (reflex saves)', 'Falling damage (halved)'],
    ab: [
      'Nine Lives – Catfolk have up to 9 lives. When killed, they revive after 1 minute with full HP and memory of how they died. Gaining +10% damage resistance to that damage type permanently. Each life lost reduces total remaining lives.',
      'Reflex – 70 ms reaction time. Catfolk cannot be surprised. They have advantage on all Dexterity saves and can attempt to dodge any trap even after triggering it.',
      'Claw Strike – Retractable claws deal slashing damage. Can be used as a natural weapon. May climb sheer surfaces.',
      'Catfall – Takes no damage from falls of any height. Always lands on their feet.'
    ],
    warn: 'Do not kill a Catfolk unless you are prepared to kill it eight more times. Each death makes them stronger against the method used. The kingdom has a standing order: capture, do not kill. If capture fails, retreat.',
    loot: [
      { name: 'Catfolk Whisker (voluntarily given)', rarity: 'rare', note: 'Said to grant luck and reflexes. Catfolk sometimes give them as gifts to trusted allies.' },
      { name: 'Dwarven-Crafted Catfolk Blade', rarity: 'rare', note: 'Light, curved, exceptionally sharp. Made by dwarven smiths for Catfolk warriors.' }
    ],
    variants: [
      {
        key: 'elder',
        label: '⌛ Elder Catfolk',
        rank: 'A',
        ibg: '#d0b890',
        icon: '🐱',
        sub: 'Elder Catfolk · Nine-Lived Sage',
        size: '~1.7 m, wise eyes, grey fur',
        intel: 312,
        desc: 'An elder Catfolk who has lived through centuries and used several lives already. They are teachers, diplomats, and strategists. They have died and learned from each death.',
        stats: { HP: 687, Damage: 643, Defense: 487, Aggression: 187, Speed: 743, Mana: 687, 'Lives Remaining': 7, 'Reflex': 843, 'Claw Strike': 687, 'Life Wisdom': 0, Threat: 743 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Lives Remaining':'#ffa000', 'Reflex':'#00bcd4', 'Claw Strike':'#d32f2f', 'Life Wisdom':'#800080', Threat:'#d32f2f' },
        weak: ['Overwhelming force', 'Anti-revival'],
        res: ['Death', 'Surprise'],
        ab: [
          'Nine Lives (as base, fewer remaining)',
          'Life Wisdom – The elder has died to many threats and knows how to counter them. Gains +20% resistance to all damage types they have previously died to.',
          'Teach – Can instruct younger Catfolk, passing on knowledge from past deaths.'
        ],
        loot: [{ name: 'Elder\'s Whisker', rarity: 'unique', note: 'A rare gift. Grants a single use of the Nine Lives effect to a non-Catfolk. Once.' }]
      },
      {
        key: 'shadow',
        label: '🌙 Shadow Catfolk',
        rank: 'B',
        ibg: '#b0a0a0',
        icon: '🐱',
        sub: 'Shadow Catfolk · Night Hunter',
        size: '~1.6 m, dark fur, glowing eyes',
        intel: 198,
        desc: 'A nocturnal Catfolk adapted to darkness. Nearly invisible at night. They serve as sentinels and night hunters.',
        stats: { HP: 487, Damage: 643, Defense: 387, Aggression: 387, Speed: 787, Mana: 487, 'Lives Remaining': 9, 'Shadow Blend': 0, 'Night Vision': 0, Threat: 643 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Lives Remaining':'#ffa000', 'Shadow Blend':'#455a64', 'Night Vision':'#00bcd4', Threat:'#d32f2f' },
        weak: ['Bright light', 'Flashbangs'],
        res: ['Darkness', 'Surprise'],
        ab: ['Shadow Blend (invisible in dim light)', 'Night Vision (see perfectly in darkness)', 'Nine Lives (as base)'],
        loot: [{ name: 'Shadow Cat Cloak', rarity: 'rare', note: 'Dark fur cloak that grants limited invisibility at night.' }]
      }
    ]
  };
  entries.push(catfolk);

  // ========================
  // FOXKIN (Kitsune)
  // ========================
  const foxkin = {
    id: 'foxkin',
    name: 'Foxkin',
    sub: 'Kitsune · Illusionists',
    rank: 'B',
    ibg: '#e0c0a0',
    icon: '🦊',
    size: '~1.6 m, fox ears, multiple tails',
    biomes: ['Forest', 'Plains', 'Spirit Realm'],
    intel: 243,
    tags: { behavior: ['Neutral', 'Trickster'], combat: ['Control', 'Support'], intelligence: ['Strategic'], interaction: ['Manipulative', 'Trade'] },
    desc: 'Foxkin, also known as Kitsune, are magical demi-humans with an affinity for illusions. They grow additional tails as they age and gain power. They are mischievous but not malevolent. They enjoy bargains and deals.',
    stats: { HP: 387, Damage: 287, Defense: 243, Aggression: 187, Speed: 543, Mana: 743, 'Illusion': 847, 'Foxfire': 643, 'Tail Magic': 0, Threat: 743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Illusion':'#800080', 'Foxfire':'#ffa000', 'Tail Magic':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold iron', 'Dispel magic'],
    res: ['Illusions', 'Charm'],
    ab: ['Illusion (creates realistic images, can mislead enemies)', 'Foxfire (ranged, fire damage, may ignite)', 'Tail magic (each tail grants an additional spell known)'],
    loot: [{ name:'Foxkin Tail Hair', rarity:'rare', note:'Used in illusion magic' }],
    variants: [
      {
        key: 'nine_tails',
        label: '🦊 Nine-Tails',
        rank: 'A',
        ibg: '#d0b090',
        icon: '🦊',
        sub: 'Nine-Tails · Elder Kitsune',
        size: '~1.7 m, nine magnificent tails',
        intel: 543,
        desc: 'An elder Kitsune with nine tails, representing immense magical power and wisdom. They are legends among Foxkin, often serving as advisors or guardians.',
        stats: { HP: 687, Damage: 487, Defense: 387, Aggression: 143, Speed: 643, Mana: 1243, 'Greater Illusion': 1287, 'Foxfire Barrage': 987, 'Nine Seals': 0, Threat: 1287 },
        bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Greater Illusion':'#800080', 'Foxfire Barrage':'#ffa000', 'Nine Seals':'#00bcd4', Threat:'#d32f2f' },
        weak: ['Cold iron', 'Dispel'],
        res: ['Illusions', 'Charm', 'Magic (partial)'],
        ab: ['Greater illusion (creates semi-real illusions that can deal damage)', 'Foxfire barrage (multi-target, 5 fire bolts)', 'Nine seals (can seal a target in a magical barrier)'],
        loot: [{ name:'Nine-Tails Seal', rarity:'unique', note:'A magical charm – can seal one enemy for 1 minute.' }]
      }
    ]
  };
  entries.push(foxkin);
  
  // ========================
  // SERPENTFOLK (Naga)
  // ========================
  const serpentfolk = {
    id: 'serpentfolk',
    name: 'Serpentfolk',
    sub: 'Naga · Venomous',
    rank: 'B',
    ibg: '#9eae7e',
    icon: '🐍',
    size: '~2.5 m long, snake lower body, humanoid torso',
    biomes: ['Jungle', 'Desert Ruins', 'Underdark'],
    intel: 187,
    tags: { behavior: ['Neutral', 'Territorial'], combat: ['Control', 'Burst'], intelligence: ['Strategic'], interaction: ['Manipulative'] },
    desc: 'Serpentfolk are ancient, intelligent snake-people. They are neutral but highly territorial. They can constrict prey and inject venom. Some tribes are hostile; others can be bargained with.',
    stats: { HP: 587, Damage: 543, Defense: 387, Aggression: 587, Speed: 387, Mana: 387, 'Constrict': 687, 'Venom Bite': 643, 'Hypnotic Gaze': 487, Threat: 743 },
    bars: { HP:'#4caf50', Damage:'#f44336', Defense:'#2196f3', Aggression:'#e91e63', Speed:'#ff9800', Mana:'#9c27b0', 'Constrict':'#ffa000', 'Venom Bite':'#800080', 'Hypnotic Gaze':'#00bcd4', Threat:'#d32f2f' },
    weak: ['Cold', 'Anti-venom'],
    res: ['Poison', 'Acid'],
    ab: ['Constrict (grapple, deals crushing damage per round)', 'Venom bite (paralyzes, deals 20 dmg/sec for 30 sec)', 'Hypnotic gaze (charm, target cannot act for 10 sec)'],
    loot: [{ name:'Serpentfolk Scale', rarity:'uncommon', note:'Used in poison-resistant armor' }]
  };
  entries.push(serpentfolk);

  // ========================
  // REGISTER CATEGORY
  // ========================
  if (window.BESTIARY) {
    window.BESTIARY.registerCategory('demihumans', entries, 'Species', '🐾');
    console.log('Demi-human data (complete) loaded successfully.');
  } else {
    console.error('Bestiary core not loaded.');
  }
})();