// solo/greg-data.js
(function() {
  const greg = {
    id: 'greg',
    name: 'Greg',
    title: 'The Silent Paladin',
    avBg: '#2A2A2A',
    avColor: '#D4D4D4',
    avText: 'GR',
    accentColor: '#C0392B',
    rankLabel: 'Diamond',
    role: 'Paladin / Tank',
    category: 'Solo',
    basic: {
      Age: '24',
      Gender: 'Male',
      Height: '1.96 m (6\'5")',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild (Solo)',
      Rank: 'Diamond',
      Role: 'Paladin / Tank'
    },
    appearance: 'A towering figure standing at 1.96 m, built like a fortress. He wears thick, black plate armor crafted from Mythril and dragon-forged materials – the armor alone weighs over 100 kg, yet he moves in it like it\'s cloth. His greatsword is equally massive, weighing 75 kg, with bandages wrapped around the hilt and the blade itself. The sword is black with faint silver veins – the melted treasures of a dragon\'s lair. His helmet conceals most of his face, revealing only his dark eyes. He never removes his armor in public. Beneath it, he has scars from years of brutal training and monster hunting. He is terrifying to behold.',
    personality: 'Silent, stoic, and deeply kind. He cannot speak – he was born mute – and communicates through gestures, hand signs, and writing on a small slate he carries. He does not smile often, but when he does, it is genuine. He is intensely private, not from arrogance, but because he has never known another way. He is gentle with animals, especially cats. He will stop to pet stray cats when no one is watching. He does not seek fame or recognition; he simply does what needs to be done.',
    background: 'Greg was born mute in a distant village, a three-week carriage ride from Kreon. His father, Gregory, was a high-ranked knight and captain of the city guard in the nearby city of Yonor. Gregory trained Greg relentlessly from age five – a painful, difficult regimen of swinging a wooden sword against hanging sticks, over and over. Greg never complained. When Gregory realized his son had magical essence – able to heal himself during training – he enrolled Greg in a commoner\'s magic academy. Greg learned no offensive spells; instead, he mastered passive magic: buffs, healing, barriers, and defense. He could not cast without his sword, so he made the sword his focus. He graduated at sixteen, having survived bullying, duels, and even a monster attack that he helped repel. He is known as "Quiet Greg" – a name given by those who learned not to underestimate the silent ones.',
    equipment: [
      { icon: '⚔️', name: 'Dragonwrought (Greatsword)', note: 'A massive black greatsword forged by a legendary dwarf from Mythril and melted dragon treasure. Weighs 75 kg – Greg carries it like a stick. The bandages on the hilt are from his father\'s old uniform. The sword glows faintly when Greg channels magic through it.' },
      { icon: '🛡️', name: 'Void Plate Armor', note: 'Full black plate armor, crafted from the same materials as his sword. Weighs over 100 kg. Impossibly durable. Greg has never removed it in public; no one knows what he looks like beneath.' },
      { icon: '📋', name: 'Writing Slate', note: 'A small slate and chalk he carries to communicate. He writes in short, direct sentences. His handwriting is surprisingly neat.' },
      { icon: '🐱', name: 'Small Cat Figurine', note: 'A small wooden cat figurine, carved by his father. He keeps it in a pouch on his belt. No one knows why he carries it – he has never explained.' }
    ],
    abilities: {
      'Passive Magic': [
        'Self-Healing (constant – passively heals minor wounds during combat)',
        'Reinforcement (enhances his physical strength and durability)',
        'Magic Resistance (aura reduces incoming magic damage)',
        'Sword Focus (cannot cast spells without his sword; all spells are channeled through it)'
      ],
      'Defensive Magic': [
        'Barrier (creates a magic shield around himself or an ally)',
        'Protective Ward (reduces damage to nearby allies)',
        'Iron Will (immune to fear and mind-altering effects)'
      ],
      'Offensive Combat': [
        'Cleaving Swing (wide arc, hits multiple enemies)',
        'Executioner Strike (massive damage to a single target, ignores armor)',
        'Parry Reflection (can deflect spells back at casters – limited to projectiles)'
      ],
      'Buffs': [
        'Strength Surge (temporary boost to physical damage)',
        'Vitality Boost (increases HP regeneration for self and allies)'
      ]
    },
    signature: {
      name: 'The Silent Judgment',
      desc: 'Greg channels all his remaining mana into his sword, then delivers a single, devastating overhead strike. The blade glows with white-hot energy. The strike can cleave through dragon scales, stone walls, and magical barriers. He cannot move for several seconds afterward – but by then, the enemy is already dead. He has never used this technique in front of witnesses.'
    },
    strengths: [
      'Superhuman strength and durability',
      'Nearly indestructible armor and weapon',
      'Silent – enemies cannot read his intentions',
      'Can deflect spells back at casters',
      'Incredible endurance – can fight for hours'
    ],
    weaknesses: [
      'Cannot speak – communication is slow (must write)',
      'Very slow movement speed (armor and sword are heavy)',
      'Weak to sustained magic attacks (his magic resistance is good, not absolute)',
      'No ranged options (he must close distance)',
      'Lonely – he has no close friends, only admirers'
    ],
    strategy: 'Walk forward slowly. Do not stop. Take hits that would kill others. When in range, swing. Enemies who flee are not pursued – they are not worth the effort. He never chases; he never retreats.',
    bestAgainst: ['Large, slow enemies (dragons, golems, giants)', 'Hordes (his wide swings clear groups)', 'Enemies who rely on fear or mind control (he is immune)'],
    struggleAgainst: ['Fast enemies who kite him', 'Enemies that attack from range (he cannot retaliate)', 'Fights that require mobility'],
    feats: [
      'Solo-killed a dragon – the guild did not believe it until they saw the body',
      'Cleared a horde of undead that had claimed three Gold-rank parties',
      'Parried a B-rank pyromancer\'s fireball back at the caster – the mage surrendered immediately',
      'Has never lost a duel, though he has refused many challenges'
    ],
    teammates: [],
    teamRole: 'Solo operative. Occasionally hired for monster extermination when brute force is required. He does not join parties.',
    reputation: 'A legend barely seen. Most adventurers have never met him; those who have describe him as "terrifying" and "gentle" in the same breath. The guild clerks are afraid of him, though he has never been rude.',
    nickname: '"Quiet Greg" (given by classmates, never used to his face by adults)',
    misc: {
      Hobbies: 'Whittling (his father taught him), feeding stray cats, training alone in remote areas',
      Likes: 'Cats, rain, silence, his father\'s memory',
      Dislikes: 'Loud people, bullies, being touched without permission',
      Trivia: 'He has a small cat figurine in his pouch, carved by his father. He touches it before every fight. No one knows this.'
    },
    stats: {
      rank: 'Diamond',
      values: {
        'Phys ATK': 748,
        'Phys DEF': 823,
        'Magic ATK': 512,
        'Magic DEF': 687,
        Mana: 643,
        Speed: 387,
        Strength: 798,
        Endurance: 834
      },
      bars: {
        'Phys ATK': '#D85A30',
        'Phys DEF': '#D85A30',
        'Magic ATK': '#534AB7',
        'Magic DEF': '#534AB7',
        Mana: '#7F77DD',
        Speed: '#1D9E75',
        Strength: '#C0392B',
        Endurance: '#BA7517'
      }
    }
  };

  if (window.REGISTRY) {
    window.REGISTRY.registerAdventurer(greg);
    console.log('Greg (The Silent Paladin) loaded successfully.');
  } else {
    console.error('Registry core not loaded.');
  }
})();