// civilian/lucian-vale-data.js
(function() {
  const lucian = {
    id: 'lucian_vale',
    name: 'Lucian Vale',
    title: 'The Arcane Gunsmith',
    avBg: '#4A4A5A',
    avColor: '#E0E0E8',
    avText: 'LV',
    accentColor: '#7D6E4A',
    rankLabel: 'N/A',
    role: 'Master Inventor · Arcane Gunsmith',
    category: 'Civilian',
    basic: {
      Age: '29',
      Gender: 'Male',
      Height: '1.78 m',
      Race: 'Human',
      Affiliation: 'Vale Workshop',
      Rank: 'N/A',
      Role: 'Master Inventor'
    },
    appearance: 'Lean and wiry, with short, messy black hair and sharp green eyes that seem to analyze everything. His hands are calloused and stained with gunpowder residue and oil. He wears a dark leather apron over a simple linen shirt, with reinforced leather bracers on his forearms. Several small tools hang from his belt – screwdrivers, pliers, and a strange metal cylinder that emits a faint blue glow. He smells of oil, ozone, and burnt metal.',
    personality: 'Intense, focused, and slightly paranoid. He speaks quickly, often jumping between thoughts. He is passionate about his work and can talk for hours about rifling, mana compression, and firing mechanisms – if you let him. He is not antisocial, but he is guarded; he never fully explains where his ideas come from. He has a dry, ironic sense of humor that surfaces when he is relaxed, which is rare.',
    background: 'Lucian Vale remembers another world – one with technology, guns, and engines. He was a gunsmith there, specializing in precision rifles. When he awoke in this world as a child, he immediately recognized the lack of firearms. For years, he experimented with mana crystals, alchemical propellants, and metallurgy, trying to replicate what he knew. His first "magic rifle" exploded, nearly killing him. His second worked – barely. His current designs are crude by his previous world\'s standards, but revolutionary here. He keeps his origins secret, claiming his ideas come from "unusual dreams." He is the sole inventor of magic rifles in the kingdom, and he guards his designs fiercely.',
    equipment: [
      { icon: '🔫', name: 'The Thunderer (Prototype Mk. IV)', note: 'His latest magic rifle. Uses compressed mana crystals as propellant. Fires small lead balls at lethal velocity. Unreliable – jams frequently – but devastating when it works. He carries it everywhere, even to bed.' },
      { icon: '🔧', name: 'Gunsmith\'s Toolkit', note: 'A leather roll containing screwdrivers, files, wire, and a small mana compass. He designed every tool himself.' },
      { icon: '📜', name: 'Vale Notebooks', note: 'Several battered notebooks filled with schematics, calculations, and formulas. Written in a cipher only he understands. He has never let anyone read them.' }
    ],
    abilities: {},
    signature: {
      name: 'The Vale Shot',
      desc: 'Lucian can fire his magic rifle with devastating accuracy – when it doesn\'t misfire. He claims the secret is in his rifling technique, which spins the projectile for stability. He has never shared the design.'
    },
    strengths: ['Unique inventions (magic rifles)', 'Can create weapons no one else can', 'Understands advanced physics and metallurgy', 'Connected to the black market (for rare components)'],
    weaknesses: ['Perceived as dangerous or mad', 'His inventions are unreliable (misfire rate ~20%)', 'Guarded – trusts almost no one', 'No combat training – relies entirely on his rifle'],
    feats: ['Successfully fired a magic rifle without it exploding – the first person in the kingdom to do so', 'Killed an A-rank monster with a single shot (the rifle jammed immediately afterward)', 'His designs have been requested by the City Guard – he has refused to share them, fearing misuse'],
    teammates: [],
    teamRole: 'Inventor / Weapons Designer',
    reputation: 'Known as "The Mad Gunsmith" – feared by nobles, avoided by traditional blacksmiths. Adventurers are curious; the Guild has officially classified his rifles as "unverified experimental equipment."',
    nickname: '"The Thunderer" (after his first functional prototype)',
    misc: {
      Hobbies: 'Tinkering, testing new alloys, sketching weapon designs',
      Likes: 'A clean shot, a successful prototype, quiet evenings in his workshop',
      Dislikes: 'Explaining his inventions, traditional blacksmiths who mock him, anyone who touches his tools',
      Trivia: 'He has a scar on his left arm from the first explosion. He kept the metal fragment that caused it as a reminder.'
    },
    stats: {
      rank: 'N/A',
      values: { 'Gunsmithing': 523, 'Metallurgy': 498, 'Alchemical Propellants': 487 },
      bars: { 'Gunsmithing': '#7D6E4A', 'Metallurgy': '#4A9B7C', 'Alchemical Propellants': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(lucian);
    console.log('Lucian Vale (Arcane Gunsmith) loaded.');
  }
})();