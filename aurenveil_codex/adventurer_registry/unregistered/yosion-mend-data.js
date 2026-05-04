// unregistered/yosion-mend-data.js
(function() {
  const yosion = {
    id: 'yosion_mend',
    name: 'Yosion Mend',
    title: 'The Strongest Rumored Legend',
    avBg: '#1A1A1A',
    avColor: '#E0E0E0',
    avText: 'YM',
    accentColor: '#8E8E8E',
    rankLabel: 'Unspecified (Beyond Mythril)',
    role: 'Swordsman',
    category: 'Unregistered',
    basic: {
      Age: 'Unknown',
      Gender: 'Male',
      Height: '1.75 m',
      Race: 'Human',
      Affiliation: 'None (unaligned)',
      Rank: 'Unspecified — beyond guild measurement',
      Role: 'Swordsman'
    },
    appearance: 'An average-height man in a long black robe with an ankle-length cape — no hood. Black pants. He carries a black katana, both sheath and handle wrapped in black cord. A small, unassuming body magic bag hangs at his side. Nothing about him stands out in a crowd — which may be the point.',
    personality: 'Detached and pragmatic. He is not cruel, but he is not eager to help. He made a single deal with the Guildmaster: he will appear only when the kingdom is at the verge of despair, in exchange for a salary to live quietly elsewhere. He does not seek company, but he does not reject brief conversation. He simply exists, apart from the world. Those who have observed him from a distance note he seems... content. Unbothered. Like someone who has already seen everything and chose peace.',
    background: 'He appeared once — unannounced, teleporting directly into the Guildmaster\'s private office. No wards triggered. No guards noticed. He asked, calmly, if he could register a profile. To prove his strength, he teleported the Guildmaster to a distant mountain, picked up a rock, and threw it at a cliff with what he described as "barely any strength." The resulting crater was massive. He then teleported them back. He told the Guildmaster he lives somewhere private, refuses to specify where, and wants nothing to do with daily affairs. When asked about the Abysmal Dungeon, he simply said he has encountered many species there — but refused to elaborate. "Discover it yourselves," he said. He has not been seen since, though the Guildmaster keeps the profile on file. Just in case.',
    equipment: [
      { icon: '⚔️', name: 'Black Katana', note: 'Jet-black blade, black sheath, black handle. No visible markings. Its origin and properties are unknown.' },
      { icon: '🎒', name: 'Body Magic Bag', note: 'A small pouch that stores his equipment and items. Observers have noted it clinks like dishware.' },
      { icon: '🍴', name: 'Mythril Utensil Set', note: 'A mug, spoon, plate, glass cup, and fork — all made of Mythril. He eats and drinks from legendary material like it\'s nothing. The Guildmaster still cannot process this information.' }
    ],
    abilities: {
      'Unknown': ['Details unspecified — rumored to include teleportation, immense strength, and dungeon adaptation'],
      'Observed Feats': [
        'Teleported himself and another without incantation',
        'Created a massive crater with a thrown rock using "barely any strength"',
        'Entered and exited the Abysmal Dungeon solo',
        'Owns Mythril tableware — uses it daily'
      ]
    },
    signature: {
      name: 'Unwitnessed',
      desc: 'No living witness has seen him draw his katana in earnest and lived to describe it. The Guildmaster suspects the crater was a warning, not an attack.'
    },
    strengths: ['Immense, unspecified power', 'Teleportation ability', 'Complete self-sufficiency', 'Calm under any circumstance'],
    weaknesses: ['Will not act unless kingdom faces despair', 'Uninterested in teamwork', 'Unknown limits (even to himself)'],
    feats: [
      'Teleported into the sealed Guildmaster\'s office undetected',
      'Created a massive crater in a cliff face with a casually thrown rock',
      'Has explored the Abysmal Dungeon — refuses to share details',
      'Rumored to have encountered and survived against species no one else has seen',
      'Uses Mythril utensils like common tin — a flex so subtle only master smiths would notice'
    ],
    teammates: [],
    teamRole: 'Last resort — the kingdom\'s hidden ace.',
    reputation: 'Known only to the Guildmaster and perhaps a handful of high-rank adventurers. No public record exists. Those who know speak in whispers, never in writing.',
    nickname: '"The Strongest Rumored Legend" (self-given? no one knows)',
    misc: {
      Hobbies: 'Eating quietly with expensive utensils, apparently',
      Likes: 'Living a normal life, his Mythril mug',
      Dislikes: 'Unspecified (but probably people asking about his Mythril mug)',
      Trivia: 'The Guildmaster once asked where he got the Mythril for his utensils. Yosion replied: "The dungeon has layers you haven\'t reached yet." Then he took a sip from his Mythril mug.'
    },
    stats: {
      rank: 'Unspecified',
      values: {
        'Strength': '???',
        'Speed': '???',
        'Dungeon Adaptation': '???',
        'Teleportation': 'Confirmed',
        'Mythril Utensil Flex': 'Incalculable'
      },
      bars: {
        'Strength': '#555555',
        'Speed': '#555555',
        'Dungeon Adaptation': '#555555',
        'Teleportation': '#8E8E8E',
        'Mythril Utensil Flex': '#C0C0C0'
      }
    },
    warn: 'This profile is incomplete by design. Yosion Mend does not want to be understood — only remembered as the last resort. Also, do not ask about his utensils. He will not answer, and you will feel poorer for having asked.'
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerAdventurer(yosion);
    console.log('Yosion Mend loaded (the strongest rumored legend, eater from Mythril).');
  } else {
    console.error('Registry core not loaded.');
  }
})();