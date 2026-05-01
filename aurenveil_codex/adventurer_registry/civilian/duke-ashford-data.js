// civilian/duke-ashford-data.js
(function() {
  const dukeAshford = {
    id: 'duke_ashford',
    name: 'Duke Ashford',
    title: 'Royal Advisor · Crown Representative',
    avBg: '#5A4A3A',
    avColor: '#E0D0C0',
    avText: 'DA',
    accentColor: '#8B4513',
    rankLabel: 'N/A',
    role: 'Royal Advisor',
    category: 'Civilian',
    basic: {
      Age: '56',
      Gender: 'Male',
      Height: '1.78 m',
      Race: 'Human',
      Affiliation: 'Crown / Aurenveil Council',
      Rank: 'N/A',
      Role: 'Royal Advisor'
    },
    appearance: 'Lean and sharp-featured, with greying red hair and keen blue eyes. He wears expensive but understated clothing – dark velvet, silver cufflinks, no ostentation. He carries no weapons – his are words and influence. His hands are clean, but his reputation is not. He has a thin mustache and a smile that rarely reaches his eyes.',
    personality: 'Calculating, diplomatic, and ambitious. He speaks in circles, never quite committing to a position until he knows which way the wind blows. He is not evil, but he is pragmatic – he serves the Crown first, the kingdom second, and himself third. He loves his daughter (Serena) but disapproves of her adventuring career, though he has never said so directly.',
    background: 'Duke Ashford was born into minor nobility and climbed the social ladder through marriages and political maneuvering. He secured his position as Royal Advisor fifteen years ago and has held it through three monarchs. He pushes his daughter Serena toward a political marriage, but Serena\'s stubbornness (and her fire magic) have made that difficult. He is not a fighter; he is a player of the great game.',
    equipment: [
      { icon: '💍', name: 'Signet of the Crown', note: 'A silver ring bearing the royal crest. Authorized to speak on behalf of the Crown in council matters.' },
      { icon: '📜', name: 'The Royal Ledger', note: 'A coded book containing notes on every noble family in the kingdom. He updates it obsessively.' }
    ],
    abilities: {},
    signature: {
      name: 'The Royal Decree (by proxy)',
      desc: 'Duke Ashford can issue decrees on behalf of the Crown, though they require later ratification. He has used this authority sparingly, always correctly.'
    },
    strengths: ['Political network', 'Knows every noble\'s secrets', 'Excellent negotiator', 'Well-funded'],
    weaknesses: ['No physical ability', 'His ambition is obvious to those paying attention', 'His relationship with Serena is strained'],
    feats: ['Negotiated the trade agreement with the neighboring kingdom – favorable terms for Aurenveil', 'Identified a plot against the Crown – the conspirators were arrested quietly', 'Has never lost a political debate on the council floor'],
    teammates: [],
    teamRole: 'Political Operator',
    reputation: 'Respected and feared. Nobles trust him with their secrets; commoners find him aloof.',
    nickname: '"The Fox" (used behind his back, referencing his red hair and cunning)',
    misc: {
      Hobbies: 'Political theory, chess, collecting rare wines',
      Likes: 'Elegant solutions, loyal allies, his daughter\'s success (if it aligns with his goals)',
      Dislikes: 'Surprises, losing arguments, anyone who underestimates him',
      Trivia: 'He still keeps a portrait of Serena as a child on his desk. He looks at it before every difficult decision.'
    },
    stats: {
      rank: 'N/A',
      values: { 'Politics': 512, 'Intrigue': 498, 'Negotiation': 487 },
      bars: { 'Politics': '#8B4513', 'Intrigue': '#4A4A5A', 'Negotiation': '#BA7517' }
    }
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerCivilian(dukeAshford);
    console.log('Duke Ashford loaded.');
  }
})();