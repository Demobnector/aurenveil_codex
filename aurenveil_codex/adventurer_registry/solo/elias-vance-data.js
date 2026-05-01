// solo/elias-vance-data.js
(function() {
  const elias = {
    id: 'elias_vance',
    name: 'Elias Vance',
    title: 'The Whisperer of Beasts',
    avBg: '#C8E6DF',
    avColor: '#2C5F4A',
    avText: 'EV',
    accentColor: '#4A9B7C',
    rankLabel: 'Iron',
    role: 'Summoner / Tamer',
    category: 'Solo',
    basic: {
      Age: '19',
      Gender: 'Male',
      Height: '1.73 m',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild (Solo)',
      Rank: 'Iron',
      Role: 'Summoner / Tamer'
    },
    appearance: 'A young man with thick, slightly messy brown hair that often falls across his forehead. His eyes are a warm amber-brown, always scanning his surroundings for animals in need – or danger. He wears a simple blue linen shirt under a well-worn brown leather vest, practical pants, and sturdy leather shoes. On his right hand is a silver-ringed magical ring that glows faintly when he channels mana. A worn leather body bag hangs across his shoulder, containing dried rations, basic medical supplies, a journal filled with animal sketches, and a small pocket knife. He walks with an easy, unhurried gait, and animals seem to gravitate toward him without fear.',
    personality: 'Gentle, observant, and genuinely kind. Elias speaks softly, not from shyness but because loud noises startle animals. He has a calming presence that puts both beasts and people at ease. He is deeply empathetic, sometimes to a fault – he will go out of his way to help an injured creature, even during a mission. He is not naive; he understands that nature is brutal, but he believes cruelty is a choice. He is fiercely protective of those who cannot defend themselves. He can be quiet in crowds but animated when discussing animals or nature. He has a dry, subtle sense of humor that surfaces when least expected.',
    background: 'Elias was raised in an ordinary family within Aurenveil. His father worked at the market, his mother sewed clothes. As a child, he played in the streets, parks, and fields with the other kids, but he always felt a special connection to animals. When he was ten, he found an injured kitten in an alley. To anyone else, the kitten mewed piteously – but Elias understood it. He heard words: "Help me, please." He treated its wounds and brought it home. His parents heard only meows, but Elias knew the truth. Over the following weeks, he experimented, speaking with lizards, birds, frogs, stray dogs. Every animal responded. He had a gift. His father, remembering an old grimoire given by a traveler friend, retrieved it from storage. The book contained summoning spells – incantations that called creatures from elsewhere. To everyone\'s surprise, Elias could cast them. He became not just a Tamer, but a Summoner. His parents, initially bewildered, grew proud. He registered at the guild at seventeen, taking only Iron rank because he prefers low-profile work that lets him help animals, not just fight.',
    equipment: [
      { icon: '📿', name: 'Mana Ring', note: 'A silver ring set with a small blue gem. Increases mana capacity by approximately 15%. A gift from his mother after he successfully summoned his first creature – a sparrow. He never takes it off.' },
      { icon: '🎒', name: 'Explorer\'s Satchel', note: 'A well-worn leather bag containing: dried rations, basic medical kit, a small journal filled with animal sketches and behavioral notes, a pocket knife, and several creature treats (dried meat for wolves, seeds for birds).' },
      { icon: '📖', name: 'Grimoire of Summoning (Family Heirloom)', note: 'A old, leather-bound grimoire with a faded cover. The spells inside are written in an archaic script that Elias learned to read through years of practice. Contains summoning circles for a variety of creatures. He protects it fiercely, sleeping with it under his pillow.' }
    ],
    abilities: {
      'Summoning Magic': [
        'Falcon – summons a falcon for aerial scouting; can report what it sees back to Elias',
        'Eagle – summons an eagle with exceptional visual precision; can spot hidden enemies from 500 m',
        'Owl – summons an owl for nighttime exploration; can see in complete darkness',
        'Bear – summons a black bear; high health, high damage, used as frontline defender',
        'Lion – summons a lion; pack coordination, roar can fear enemies',
        'Large Orb Weaver Spider – summons a giant spider; can create web traps and climb walls',
        'Butterfly Swarm – summons butterflies that scatter sleeping powder; large AoE sleep effect'
      ],
      'Passive Magic': [
        'Taming – can calm wild animals, making them non-hostile for a short duration',
        'Speak with Animals – can understand and communicate with any non-magical beast'
      ],
      'Offensive Arts': [
        'Stabbing – quick knife thrust, used only in emergencies',
        'Slicing – defensive slash, meant to deter rather than kill',
        'Kicking – basic unarmed strike, pushes enemies back'
      ],
      'Defensive Arts': [
        'Divert – uses his satchel or cloak to redirect incoming attacks away from vital areas',
        'Dodge – relies on agility and distance to avoid damage; does not wear heavy armor'
      ]
    },
    signature: {
      name: 'Pack Alpha',
      desc: 'Elias channels his entire remaining mana into a simultaneous summon of all his available creatures – falcon, eagle, owl, bear, lion, spider, and butterfly swarm – at once. The battlefield becomes chaotic, with each creature acting independently but instinctively protecting Elias. The spell drains him completely; he cannot summon again for 24 hours. Used only as a last resort when outnumbered or protecting someone.'
    },
    strengths: [
      'Excellent at information gathering (animal scouts)',
      'Can avoid many fights through Taming and animal communication',
      'Versatile summoning options for different situations',
      'Genuinely kind – animals trust him immediately, people warm to him'
    ],
    weaknesses: [
      'Physically fragile – lowest defense among Iron ranks',
      'Summons require mana and concentration; cannot summon endlessly',
      'Reluctant to kill – prefers to deter or escape, which sometimes prolongs fights',
      'Carries no real weapon – pocket knife is for utility, not combat'
    ],
    strategy: 'Send falcon or eagle to scout first. If danger is avoidable, avoid it. If not, summon appropriate creatures (bear for defense, lion for offense, spider for area control). Speak with animals to negotiate if possible. Never hurt an animal unless absolutely necessary.',
    bestAgainst: ['Humanoid enemies who can be distracted by summons', 'Enemies with poor area defense', 'Wild animals (he can talk to them)'],
    struggleAgainst: ['Constructs (cannot communicate, no animals to summon)', 'Enemies that bypass summons to reach him directly', 'Magic-resistant foes'],
    feats: [
      'Calmed a rampaging bear in the forest by speaking to it – the bear walked away peacefully',
      'Used a falcon to scout an Abysmal Dungeon expedition route – the falcon returned unharmed',
      'Discovered a hidden poaching ring by talking to caged birds; the guild shut it down',
      'Has never lost a summon. Creatures return to their plane unharmed, even if "defeated".'
    ],
    teammates: [],
    teamRole: 'Solo operative, but often works informally with animal-rescue groups. Occasionally hired by higher-rank parties for scouting or support in wild areas.',
    reputation: 'Barely known in the guild as a fighter, but well-liked by the stable hands and animal handlers. Known as "the kid who talks to animals" – some think it\'s a joke, until they see it work.',
    nickname: '"The Whisperer" (given by a stable master after he calmed a panicked horse)',
    misc: {
      Hobbies: 'Sketching animals, reading about ecosystems, visiting the city zoo, feeding stray cats',
      Likes: 'Animals of any kind, quiet forests, the smell after rain, successful rescues',
      Dislikes: 'Cruelty to animals, poachers, loud sudden noises, anyone who dismisses his gift as "just magic"',
      Trivia: 'He named his summoned creatures, but refuses to tell anyone the names – "They are not pets; they are partners. The names are between us."'
    },
    stats: {
      rank: 'Iron',
      values: {
        'Phys ATK': 187,
        'Phys DEF': 143,
        'Magic ATK': 278,
        'Magic DEF': 243,
        Mana: 387,
        Speed: 267,
        'Summon Power': 423,
        'Taming': 456
      },
      bars: {
        'Phys ATK': '#D85A30',
        'Phys DEF': '#D85A30',
        'Magic ATK': '#534AB7',
        'Magic DEF': '#534AB7',
        Mana: '#7F77DD',
        Speed: '#1D9E75',
        'Summon Power': '#4A9B7C',
        'Taming': '#BA7517'
      }
    }
  };

  if (window.REGISTRY) {
    window.REGISTRY.registerAdventurer(elias);
    console.log('Elias Vance (The Whisperer of Beasts) loaded successfully.');
  } else {
    console.error('Registry core not loaded. Make sure registry-core.html is loaded first.');
  }
})();