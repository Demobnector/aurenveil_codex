// party/the-rhyming-reapers-data.js
(function() {
  const members = [
    // ========== MIKE (Leader) ==========
    {
      id: 'mike',
      name: 'Mike',
      title: 'The First Blade · Style Incarnate',
      avBg: '#F0E6D2',
      avColor: '#8B5A2B',
      avText: 'MK',
      accentColor: '#C9A87C',
      rankLabel: 'Gold',
      role: 'DPS / Leader',
      category: 'Parties',
      basic: {
        Age: '27',
        Gender: 'Male',
        Height: '1.82 m',
        Race: 'Human',
        Affiliation: 'The Rhyming Reapers',
        Rank: 'Gold',
        Role: 'DPS / Leader'
      },
      appearance: 'Clean-shaven with sharp, confident features. Short dark hair styled deliberately messy. Wears fitted leather over chainmail – practical but with a silver clasp shaped like a wolf’s head. His longsword is polished to a mirror finish, the pommel inlaid with a small ruby. He stands straight, shoulders back, exuding the certainty of someone who has never doubted his own skill.',
      personality: 'Confident, straightforward, slightly dramatic. He calls out attack names in combat not for effect but because he genuinely believes naming a technique gives it weight. He is the party’s moral center – not the loudest, but the one everyone looks at when a decision needs to be made. He never backs down from a fair fight, and never admits when he’s outmatched. His team knows this and covers for him.',
      background: 'Mike grew up in a family of guild merchants and took up the sword as a teenager after watching a Gold-rank adventurer duel a bandit captain. He trained under a retired knight who taught him fundamentals and, more importantly, showmanship. He formed the party himself, recruiting Pike and Dike first, then Sike, and finally his younger brother Mike Jr. He insists the rhyming names were coincidental. No one believes him.',
      equipment: [
        { icon: '⚔️', name: 'Wolf’s Fang (Longsword)', note: 'A perfectly balanced, unenchanted longsword. Mike refuses magical weapons – he says they “write cheques his technique has to cash”. The ruby pommel is a family heirloom.' },
        { icon: '🧥', name: 'Silver-Clasped Leather', note: 'Lightweight and stylish, with hidden chainmail lining. The wolf-head clasp is silver, but he admits it’s for looks.' },
        { icon: '💍', name: 'Iron Signet Ring', note: 'A plain iron ring stamped with a rudimentary blade. It belonged to his first trainer. No magic, just memory.' }
      ],
      abilities: {
        'Sword Arts': ['Lion’s Roar (named overhead slash, high damage, breaks guard)', 'Silver Step (quick sidestep + counter)', 'Cross Slash (two rapid strikes, left then right)'],
        'Leadership': ['Battle Cry (party gains +15% damage for 15 seconds)', 'Hold the Line (party immune to fear while Mike is above 50% HP)'],
        'Passive': ['Duelist’s Focus (when fighting one enemy, attack speed increases over time)', 'Named Strike (first attack in combat has +30% critical chance)']
      },
      signature: {
        name: 'Final Verse',
        desc: 'Mike sheathes his sword, steps forward, and delivers a single, perfectly timed draw cut. He always whispers a name before doing it – usually something like “Silver Dawn” or “End of Discourse”. It hits for massive damage and stuns the target. Misses completely if the target moves unexpectedly.'
      },
      strengths: ['Excellent fundamentals', 'Boosts party morale', 'High single-target burst', 'Never hesitates'],
      weaknesses: ['Predictable once pattern is read', 'Over-relies on named techniques', 'Won’t retreat – even when he should'],
      strategy: 'Engage the strongest enemy directly, call attacks to draw aggro, let Pike control spacing and Sike land heavy hits. Use battle cry early.',
      bestAgainst: ['Single bosses', 'Humanoid enemies with readable patterns', 'Duels'],
      struggleAgainst: ['Fast swarms', 'Unpredictable magic casters', 'Enemies that exploit overconfidence'],
      feats: ['Dueled a Gold-rank monster and won without magical aid', 'Named his techniques after a tavern challenge – all five landed', 'Talked a district guard captain into waiving a fine by reciting his own adventuring code'],
      teammates: [
        { id: 'pike', name: 'Pike', role: 'Midline Control', rel: 'Oldest friend. They communicate mid-fight with glances.', avBg: '#D6E0F0', avColor: '#2A4B7C', avText: 'PK' },
        { id: 'dike', name: 'Dike', role: 'Brawler', rel: 'Respects his strength; Mike is the only one who can make Dike laugh.', avBg: '#F5D0A9', avColor: '#A55D2A', avText: 'DK' },
        { id: 'sike', name: 'Sike', role: 'Heavy DPS', rel: 'Mike trusts Sike’s instincts, even if Sike doesn’t.', avBg: '#C0D0C0', avColor: '#2D5A2D', avText: 'SK' },
        { id: 'mike_jr', name: 'Mike Jr', role: 'Rookie', rel: 'Protective older brother. Tries not to coddle, fails.', avBg: '#E8D8A0', avColor: '#6B4E1E', avText: 'MJ' }
      ],
      teamRole: 'Primary damage dealer and battlefield leader. Sets the pace and calls targets.',
      reputation: 'Known at the guild as “The Dramatic One”. Respected for his consistency. Some senior adventurers find his attack names endearing.',
      nickname: '"The First Blade" (self-given, but it stuck)',
      misc: { Hobbies: 'Writing poetry (keeps it secret)', Likes: 'Polished steel, early mornings, winning arguments smoothly', Dislikes: 'Cowardice, unkempt gear, being interrupted mid-sentence', Trivia: 'Has named over forty techniques. Uses maybe twelve.' },
      stats: {
        rank: 'Gold',
        values: { 'Phys ATK': 498, 'Phys DEF': 387, 'Magic ATK': 312, 'Magic DEF': 301, Mana: 278, Speed: 412, 'Technique': 498, 'Leadership': 456 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Technique': '#C9A87C', 'Leadership': '#BA7517' }
      }
    },
    // ========== PIKE (Midline Control) ==========
    {
      id: 'pike',
      name: 'Pike',
      title: 'The Impaler · Range Keeper',
      avBg: '#D6E0F0',
      avColor: '#2A4B7C',
      avText: 'PK',
      accentColor: '#5A7D9E',
      rankLabel: 'Silver',
      role: 'Midline Control',
      category: 'Parties',
      basic: {
        Age: '26',
        Gender: 'Male',
        Height: '1.79 m',
        Race: 'Human',
        Affiliation: 'The Rhyming Reapers',
        Rank: 'Silver',
        Role: 'Midline Control'
      },
      appearance: 'Lean and quiet, with close-cropped black hair and pale grey eyes that rarely blink. Wears a dark gambeson over leather, no metal – he values silence and reach over protection. His spear is nearly 2.5 meters long, steel-tipped with a leather grip worn smooth. He moves like he’s always measuring distance.',
      personality: 'Calm, precise, and unnervingly patient. He speaks in short sentences. He does not joke in combat. Outside of it, he has a dry wit that surfaces without warning. He believes that the best fight is one the enemy never enters. His control of space is almost compulsive – he will rearrange furniture in a tavern to have clear lines.',
      background: 'Pike was a fisherman’s son who used a gaff hook before he ever held a spear. He apprenticed to a city watch captain who taught him how to hold a line. He joined Mike’s party because “you needed someone who wouldn’t run into the middle”. He is the oldest member by temperament, if not age. He has never been touched in melee by an enemy he saw coming.',
      equipment: [
        { icon: '🔱', name: 'Long Spear (Unnamed)', note: 'Simple steel head, ash shaft. No ornamentation. Pike oils it weekly and removes every scratch. He says names are for things that get lost.' },
        { icon: '🧤', name: 'Gripped Gloves', note: 'Leather with small studs for better hold. Worn on both hands.' },
        { icon: '🥾', name: 'Soft Boots', note: 'Thin soles allow him to feel floor vibrations. Excellent for spacing.' }
      ],
      abilities: {
        'Spear Arts': ['Holding Thrust (lunges, keeps enemy at max range, low damage but high stagger)', 'Sweeping Arc (wide horizontal strike, knocks back adjacent enemies)', 'Impale (target pinned to ground or wall, immobilized 5 seconds)'],
        'Control': ['Zone Denial (enemies entering Pike’s reach trigger an automatic guard break)', 'Mark Target (party gets +10% damage against enemy Pike has hit this round)'],
        'Passive': ['Never Touched (Pike has +25% evasion while stationary)', 'Reach Advantage (melee attackers without reach weapons have -20% accuracy against Pike)']
      },
      signature: {
        name: 'The Invisible Line',
        desc: 'Pike plants his spear, uses a two-handed brace, and creates an area 5 meters in front of him that enemies physically cannot cross – they find themselves sidestepping, hesitating, or redirected. It is not magical; it is pure intimidation and presence. Breaks if an enemy charges with reckless abandon.'
      },
      strengths: ['Best zone control in the party', 'Never surprised at close range', 'Accurate and consistent', 'Enemies cannot ignore him'],
      weaknesses: ['Vulnerable to ranged attacks', 'Low damage ceiling', 'Cannot reposition quickly', 'Does not handle unexpected events well'],
      strategy: 'Hold the midline, keep enemies off Mike’s flanks, feed targets to Sike. Use Impale to lock dangerous enemies.',
      bestAgainst: ['Enemies that rely on closing distance', 'Multiple melee opponents', 'Predictable chargers'],
      struggleAgainst: ['Archers and mages', 'Terrain with no clear lines', 'Invisible or teleporting enemies'],
      feats: ['Held a narrow corridor alone against 12 goblins – none reached the party', 'Impaled a charging B-rank boar through its shoulder, pinned it to a tree', 'Has never been hit by an enemy he was facing'],
      teammates: [
        { id: 'mike', name: 'Mike', role: 'Leader', rel: 'Longest partner. Trusts Mike’s calls absolutely.', avBg: '#F0E6D2', avColor: '#8B5A2B', avText: 'MK' },
        { id: 'dike', name: 'Dike', role: 'Brawler', rel: 'Respects his control; Dike listens to him more than anyone.', avBg: '#F5D0A9', avColor: '#A55D2A', avText: 'DK' },
        { id: 'sike', name: 'Sike', role: 'Heavy DPS', rel: 'Does not understand him, but follows his target calls.', avBg: '#C0D0C0', avColor: '#2D5A2D', avText: 'SK' },
        { id: 'mike_jr', name: 'Mike Jr', role: 'Rookie', rel: 'Patient mentor. Teaches him footwork.', avBg: '#E8D8A0', avColor: '#6B4E1E', avText: 'MJ' }
      ],
      teamRole: 'Midline anchor and zone controller. The party’s fights are limited to his preferred range.',
      reputation: 'Known as “The Quiet Wall” – not famous, but respected by those who understand positioning.',
      nickname: '"Spear" (obvious, but he answers to it)',
      misc: { Hobbies: 'Fishing, stone skipping, measuring distances', Likes: 'Open spaces, calm mornings, a clean spear tip', Dislikes: 'Surprises, enclosed rooms, loud noises', Trivia: 'Can estimate distances to within 0.5 meters by eye.' },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 387, 'Phys DEF': 423, 'Magic ATK': 234, 'Magic DEF': 287, Mana: 198, Speed: 398, 'Reach Control': 498, 'Evasion': 456 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Reach Control': '#5A7D9E', 'Evasion': '#1D9E75' }
      }
    },
    // ========== DIKE (Brawler) ==========
    {
      id: 'dike',
      name: 'Dike',
      title: 'The Gauntlet · Stance Breaker',
      avBg: '#F5D0A9',
      avColor: '#A55D2A',
      avText: 'DK',
      accentColor: '#C58A4A',
      rankLabel: 'Silver',
      role: 'Brawler / Close Combat',
      category: 'Parties',
      basic: {
        Age: '25',
        Gender: 'Male',
        Height: '1.88 m',
        Race: 'Human',
        Affiliation: 'The Rhyming Reapers',
        Rank: 'Silver',
        Role: 'Brawler / Close Combat'
      },
      appearance: 'Stocky and powerful, with thick arms and a scarred bald head. He wears reinforced leather vest with metal knuckles on both hands – no shirt underneath. His fists are wrapped in cloth stained with his own blood and others’. He smiles too much during fights, which unnerves his allies more than his enemies.',
      personality: 'Loud, aggressive, and genuinely enjoys fighting. He laughs when hit. He is not cruel – he simply loves the physicality of combat. He will help an enemy up after knocking them down. He has no concept of “holding back”. The party uses him as an intentional aggro magnet.',
      background: 'Dike grew up in a fighting pit, not as a gladiator but as a bouncer’s son. He learned to break stances before he could read. He joined Mike after a bar fight where Mike refused to draw his sword and instead argued with a drunkard. Dike respected the principle. He has never used a weapon and refuses to learn – “my hands are already two weapons”.',
      equipment: [
        { icon: '👊', name: 'Reinforced Knuckles', note: 'Leather and steel bands across the knuckles. Adds impact, protects bones. He maintains them daily.' },
        { icon: '🧥', name: 'Vest of Scars', note: 'Thick leather vest with brass studs. Several holes from near-misses. He refuses to replace it.' },
        { icon: '🧴', name: 'Fighting Salve', note: 'A simple balm for his hands. He makes it himself from herbs and animal fat.' }
      ],
      abilities: {
        'Brawling': ['Jaw Breaker (uppercut, high chance to stun)', 'Grapple Slam (throws target to ground, deals damage, leaves prone)', 'Torso Crush (bear hug, deals heavy damage, can break ribs)'],
        'Stance Break': ['Shield Splitter (two-handed punch that ignores 30% armor)', 'Foot Hook (trips, leads to free follow-up attack)'],
        'Passive': ['Adrenaline Rush (each time Dike takes damage, next attack deals +20% damage)', 'Iron Chin (resistant to stun and knockdown)']
      },
      signature: {
        name: 'Bonecracker',
        desc: 'Dike grabs an enemy’s arm or leg, braces it against his shoulder, and applies sudden, brutal pressure. The limb breaks. Target is crippled (reduced speed and accuracy) for the rest of the fight. Does not work on enemies without bones or with unnatural durability.'
      },
      strengths: ['Highest single-target disruption', 'Can tank hits without a shield', 'Breaks enemy formations', 'Cripples limbs'],
      weaknesses: ['No ranged option', 'Predictable – charges straight in', 'Overextends often', 'Vulnerable to magic'],
      strategy: 'Run forward, grab the biggest threat, break its stance. Let Mike follow up. Don’t think. That’s Sike’s job.',
      bestAgainst: ['Shield users', 'Heavily armored enemies', 'Large creatures he can grapple'],
      struggleAgainst: ['Fast, dodging enemies', 'Ranged kiting', 'Magical area attacks'],
      feats: ['Broke a stone golem’s arm joint with a single punch', 'Grappled a rampaging bull and held it for 15 seconds', 'Once punched a pickpocket so hard the victim got their purse back'],
      teammates: [
        { id: 'mike', name: 'Mike', role: 'Leader', rel: 'Follows him without question. Mike is the only person he’d take orders from.', avBg: '#F0E6D2', avColor: '#8B5A2B', avText: 'MK' },
        { id: 'pike', name: 'Pike', role: 'Control', rel: 'Respects his space; listens to Pike’s positioning calls.', avBg: '#D6E0F0', avColor: '#2A4B7C', avText: 'PK' },
        { id: 'sike', name: 'Sike', role: 'Heavy DPS', rel: 'Chaotic bonding – they laugh together.', avBg: '#C0D0C0', avColor: '#2D5A2D', avText: 'SK' },
        { id: 'mike_jr', name: 'Mike Jr', role: 'Rookie', rel: 'Protective. Does not let him overcommit too badly.', avBg: '#E8D8A0', avColor: '#6B4E1E', avText: 'MJ' }
      ],
      teamRole: 'Frontline brawler and stance breaker. Creates openings for everyone else.',
      reputation: 'Known as “The Brawler” – feared in bar fights, respected in dungeons.',
      nickname: '"Knuckles" (he hates it, so it stuck)',
      misc: { Hobbies: 'Arm wrestling, eating, sharpening his knuckles', Likes: 'A good punch, loud cheers, meat pies', Dislikes: 'Cowards, archers, silence', Trivia: 'Has never lost an arm-wrestling match in the guild – 67 wins, 0 losses.' },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 478, 'Phys DEF': 398, 'Magic ATK': 187, 'Magic DEF': 243, Mana: 123, Speed: 387, 'Grapple': 512, 'Toughness': 456 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Grapple': '#C58A4A', 'Toughness': '#BA7517' }
      }
    },
    // ========== SIKE (Heavy DPS) ==========
    {
      id: 'sike',
      name: 'Sike',
      title: 'The Axe That Swings Wild',
      avBg: '#C0D0C0',
      avColor: '#2D5A2D',
      avText: 'SK',
      accentColor: '#6E8F5E',
      rankLabel: 'Silver',
      role: 'Heavy DPS',
      category: 'Parties',
      basic: {
        Age: '26',
        Gender: 'Male',
        Height: '1.83 m',
        Race: 'Human',
        Affiliation: 'The Rhyming Reapers',
        Rank: 'Silver',
        Role: 'Heavy DPS'
      },
      appearance: 'Lean and wiry, with unkempt brown hair and a perpetual half-smile. He wears a simple padded tunic and no armor – “can’t swing heavy if you’re bogged down”. His two-handed axe is huge, its head scarred and its handle wrapped in frayed rope. He often rests it on his shoulder, looking bored.',
      personality: 'Chill but unpredictable. He seems disinterested in everything, then suddenly laughs and chops a monster in half. He does not plan; he reacts. He misses more often than he hits, but his hits are catastrophic. He does not get angry, does not get scared, and does not explain himself.',
      background: 'Sike was a lumberjack who cleared forests alone. He wandered into a dungeon by accident, killed a B-rank creature with a single swing, and then wandered out. Mike found him sitting on a log, eating a sandwich. He joined because “you guys have better snacks”. He does not remember his own rank. He does not care.',
      equipment: [
        { icon: '🪓', name: 'The Broadfall (Great Axe)', note: 'Massive, unbalanced, and heavier than it looks. Sike swings it with surprising speed, but accuracy is a suggestion. The haft is wrapped in frayed rope to keep it from slipping.' },
        { icon: '🥾', name: 'Scuffed Boots', note: 'Several years old. He has never replaced them.' },
        { icon: '🍞', name: 'Trail Rations', note: 'He always carries extra food. Will share with anyone.' }
      ],
      abilities: {
        'Axe Arts': ['Collateral Swing (huge arc, hits multiple enemies, may hit friends if they are too close)', 'Cleaving Chop (vertical strike, ignores 50% armor, has chance to embed in target)', 'Desperate Hack (swings twice quickly, low accuracy, high total damage)'],
        'Berserk': ['Reckless Momentum (each miss increases next hit’s critical chance by 15%)', 'Second Wind (when below 30% HP, gains +50% damage)'],
        'Passive': ['Wild Style (enemies cannot predict his attack pattern – -15% chance to dodge)', 'No Armor (immune to movement penalties from armor – not that he wears any)']
      },
      signature: {
        name: 'The Unintentional Decapitation',
        desc: 'Sike swings at an enemy’s torso but misses high. The axe keeps going and, purely by accident, takes the target’s head off. It works 10% of the time. When it does, it kills any non-boss creature instantly.'
      },
      strengths: ['Highest potential burst damage', 'Unpredictable', 'Cannot be debuffed by fear or charm (too simple)', 'Friendly – keeps morale high'],
      weaknesses: ['Misses often (about 40% of attacks)', 'No defense – dies quickly if focused', 'No teamwork – he just hits things', 'Loud – alerts distant enemies'],
      strategy: 'Let Mike and Dike hold attention. Swing at the biggest clump. Hope. Eat a sandwich after.',
      bestAgainst: ['Clustered enemies', 'Enemies with low evasion', 'Bosses after they have been staggered'],
      struggleAgainst: ['Small, fast enemies', 'Magical shields', 'Enemies with reflection damage'],
      feats: ['Killed a B-rank mimic by sitting on it – he thought it was a bench', 'One-shot a Gold-rank skeleton knight with a missed swing that hit its phylactery', 'Has never had to buy his own drink – people buy them for him, hoping to see the axe swing'],
      teammates: [
        { id: 'mike', name: 'Mike', role: 'Leader', rel: 'Mike gives targets; Sike swings at them eventually.', avBg: '#F0E6D2', avColor: '#8B5A2B', avText: 'MK' },
        { id: 'pike', name: 'Pike', role: 'Control', rel: 'Pike marks enemies; Sike hits them – eventually.', avBg: '#D6E0F0', avColor: '#2A4B7C', avText: 'PK' },
        { id: 'dike', name: 'Dike', role: 'Brawler', rel: 'Both love fighting. They bond over carnage.', avBg: '#F5D0A9', avColor: '#A55D2A', avText: 'DK' },
        { id: 'mike_jr', name: 'Mike Jr', role: 'Rookie', rel: 'Mike Jr tries to learn from him. No one knows what he learns.', avBg: '#E8D8A0', avColor: '#6B4E1E', avText: 'MJ' }
      ],
      teamRole: 'Chaos engine and heavy finisher. Not reliable, but when he connects, the fight ends.',
      reputation: 'Known as “The Wild Card” – guild receptionists warn parties not to stand near him.',
      nickname: '"Axe Guy" (he introduces himself that way)',
      misc: { Hobbies: 'Eating, sleeping, wandering', Likes: 'Sandwiches, big swings, unexpected outcomes', Dislikes: 'Planning, accuracy drills, telling time', Trivia: 'He has never sharpened his axe. It keeps getting sharper anyway.' },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 523, 'Phys DEF': 287, 'Magic ATK': 189, 'Magic DEF': 234, Mana: 143, Speed: 356, 'Wild Swing': 498, 'Luck': 512 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Wild Swing': '#6E8F5E', 'Luck': '#F9A825' }
      }
    },
    // ========== MIKE JR (Rookie) ==========
    {
      id: 'mike_jr',
      name: 'Mike Jr',
      title: 'The Young Wolf · Overeager',
      avBg: '#E8D8A0',
      avColor: '#6B4E1E',
      avText: 'MJ',
      accentColor: '#B6914A',
      rankLabel: 'Iron',
      role: 'Rookie / Support DPS',
      category: 'Parties',
      basic: {
        Age: '18',
        Gender: 'Male',
        Height: '1.76 m',
        Race: 'Human',
        Affiliation: 'The Rhyming Reapers',
        Rank: 'Iron',
        Role: 'Rookie / Support DPS'
      },
      appearance: 'Young, with a hopeful face and a short ponytail. He wears a refurbished set of leather armor – too big for him, taken from a senior adventurer. His katana is a family blade, slightly too long for his frame. He carries it in a bright red scabbard, and he has polished it so much that the lacquer is worn.',
      personality: 'Try-hard and earnest. He idolizes his older brother Mike and mimics his mannerisms – including naming attacks, but his names are awkward and too long. He is desperate to prove himself and overcommits constantly. He apologizes after making mistakes, then immediately makes the same mistake again. But he never gives up.',
      background: 'Mike Jr is Mike’s younger brother. He watched Mike train for years and begged to join the party as soon as he turned 16. Mike resisted for two years, then relented on condition that he follow every order. He has been on six missions and has been knocked unconscious on four of them. He keeps going.',
      equipment: [
        { icon: '🗡️', name: 'Kodachi (Family Katana)', note: 'A family blade, older than him. His father’s. It is a good sword, but Mike Jr’s technique does not do it justice. He polishes it every night.' },
        { icon: '🧥', name: 'Hand-Me-Down Leather', note: 'Taken from a retired adventurer. It has several patches. He has added his own crude stitching.' },
        { icon: '📖', name: 'Beginner’s Journal', note: 'He writes down everything Mike says. The entries are filled with underlines and exclamation marks.' }
      ],
      abilities: {
        'Katana Arts': ['Desperate Lunge (long thrust, high speed, leaves him open)', 'Flailing Slash (multiple weak cuts, hits 3-5 times, low individual damage)', 'Copycat Strike (mimics Mike’s last named attack – at half effectiveness)'],
        'Support': ['Cheer (shouts encouragement – +5% morale to party, no mechanical bonus but it makes them smile)'],
        'Passive': ['Determined (Mike Jr does not flee, even when at 1 HP)', 'Overeager (his first attack each combat has +15% speed, but -20% accuracy)']
      },
      signature: {
        name: 'Brother’s Shadow',
        desc: 'Mike Jr leaps in front of Mike to take a hit meant for him. He takes double damage, but Mike takes none. It does not require technique – just bravery and poor self-preservation.'
      },
      strengths: ['Absolute loyalty', 'Never retreats', 'Fast – his lunge is genuinely quick', 'High potential (future Gold-rank)'],
      weaknesses: ['Inexperienced – makes tactical errors', 'Overcommits – often leaves himself vulnerable', 'Low endurance', 'Inconsistent damage'],
      strategy: 'Stay behind Mike, wait for an opening, then lunge. If someone targets Mike, jump in the way. Do not die.',
      bestAgainst: ['Weakened enemies', 'Distracted foes', 'Enemies he can surprise'],
      struggleAgainst: ['Anyone who fights tactically', 'Area attacks', 'Enemies that read his tells'],
      feats: ['Survived a B-rank creature’s attack that should have killed him – by fainting and falling out of the way', 'Scored the killing blow on an A-rank monster after Mike had wounded it – jumped in with a lucky thrust', 'Has never missed a training session, even when injured'],
      teammates: [
        { id: 'mike', name: 'Mike', role: 'Leader', rel: 'Idolizes him. Mike is simultaneously proud and terrified.', avBg: '#F0E6D2', avColor: '#8B5A2B', avText: 'MK' },
        { id: 'pike', name: 'Pike', role: 'Control', rel: 'Patient teacher. Pike is the only one he doesn’t annoy.', avBg: '#D6E0F0', avColor: '#2A4B7C', avText: 'PK' },
        { id: 'dike', name: 'Dike', role: 'Brawler', rel: 'Looks up to his strength; Dike calls him “little brother”.', avBg: '#F5D0A9', avColor: '#A55D2A', avText: 'DK' },
        { id: 'sike', name: 'Sike', role: 'Heavy DPS', rel: 'Thinks Sike is cool but dangerous. Avoids his axe.', avBg: '#C0D0C0', avColor: '#2D5A2D', avText: 'SK' }
      ],
      teamRole: 'Situational support and emergency backup. Not relied upon, but welcome.',
      reputation: 'Known as “The Kid”. Older adventurers pity him. Younger ones root for him.',
      nickname: '"Junior" (he dislikes it, but everyone uses it)',
      misc: { Hobbies: 'Training, journaling, following Mike around', Likes: 'Mike’s praise, practice dummies, sunny days', Dislikes: 'Being told to stay back, healing potions (they taste bad), downtime', Trivia: 'Has a notebook with 150 pages of battle strategies. He has used exactly three.' },
      stats: {
        rank: 'Iron',
        values: { 'Phys ATK': 287, 'Phys DEF': 243, 'Magic ATK': 143, 'Magic DEF': 187, Mana: 98, Speed: 387, 'Determination': 423, 'Potential': 512 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Determination': '#B6914A', 'Potential': '#F9A825' }
      }
    }
  ];

  if (window.REGISTRY) {
    window.REGISTRY.registerParty('rhyming_reapers', 'The Rhyming Reapers', members);
    console.log('The Rhyming Reapers party loaded successfully.');
  } else {
    console.error('Registry core not loaded');
  }
})();