// party/iron-reckoning-data.js
(function() {
  const members = [
    // ========== VIKTOR CROSS (Leader, Greatsword) ==========
    {
      id: 'viktor_cross',
      name: 'Viktor Cross',
      title: 'The Iron Blade',
      avBg: '#4A4A4A',
      avColor: '#E8E8E8',
      avText: 'VC',
      accentColor: '#C0392B',
      rankLabel: 'Gold',
      role: 'Leader / Greatsword DPS',
      category: 'Parties',
      basic: {
        Age: '24',
        Gender: 'Male',
        Height: '1.85 m',
        Race: 'Human',
        Affiliation: 'The Iron Reckoning',
        Rank: 'Gold',
        Role: 'Leader / Greatsword DPS'
      },
      appearance: 'Tall and muscular, with a fighter’s build and a confident swagger. Short-cropped dark hair, a strong jaw, and grey eyes that narrow when challenged. He wears fitted black leather over chainmail, with a steel greatsword strapped across his back. The blade is notched from countless duels – he refuses to replace it because "each mark is a lesson." A thin scar runs along his left forearm from an early encounter with a monster he refuses to name.',
      personality: 'Brash, confident, and slightly arrogant. He talks like every challenge is an opportunity to prove himself. He is not cruel, but he is deeply competitive – he hates losing more than he loves winning. He respects strength above all, but he also respects cleverness, even if he mocks it. He considers Brehn his rival, though Brehn barely acknowledges the rivalry, which frustrates Viktor endlessly. He laughs loudly, drinks heartily, and never backs down from a fight.',
      background: 'Viktor grew up in a family of mercenaries. He was trained to swing a sword before he could read. He registered at the guild at sixteen and climbed to Gold rank through sheer persistence. He formed Iron Reckoning after a series of near-wins against Blue Constellation – he realized he needed a team to compete. He still sees Brehn as the benchmark. He has never beaten Brehn in a fair duel. He has never stopped trying.',
      equipment: [
        { icon: '⚔️', name: 'The Notched Blade (Greatsword)', note: 'A massive steel greatsword with a leather-wrapped hilt. The blade is notched from years of use. Viktor maintains it personally, but refuses to have the notches filed – "They remind me of what I\'ve survived."' },
        { icon: '🧥', name: 'Fitted Black Leather', note: 'Dark leather over chainmail. Light enough to move, tough enough to stop a blade. The left sleeve is singed from a pyromancer’s fireball – a souvenir from Serena.' },
        { icon: '💍', name: 'Iron Signet', note: 'A plain iron ring on his right thumb. No magic. He just likes the weight.' }
      ],
      abilities: {
        'Greatsword Arts': ['Cleaving Swing (wide arc, hits multiple enemies)', 'Overhead Smash (vertical strike, ignores 30% armor)', 'Taunt (challenges an enemy, forcing them to target him)'],
        'Battle Focus': ['Second Wind (once per fight, regains 20% HP)', 'Furious Charge (closes distance, knockback)'],
        'Passive': ['Rivalry (gains +10% damage when fighting alongside or against a rival)', 'Unshaken (cannot be feared)']
      },
      signature: {
        name: 'Cross Slash',
        desc: 'Viktor swings his greatsword in two diagonal slashes, forming an X. The technique is simple but devastating – it covers both high and low guards simultaneously. He learned it from a mercenary captain. He has never told anyone the captain\'s name, but he etched the X into his blade afterward.'
      },
      strengths: ['Highest raw damage output', 'Excellent dueling skills', 'High morale – never retreats', 'Surprisingly agile for his size'],
      weaknesses: ['Predictable patterns', 'Reckless – overcommits', 'Vulnerable to magic', 'Obsessed with beating Brehn'],
      strategy: 'Charge in, break their strongest fighter, then clean up. Use taunt to protect teammates. Never show weakness.',
      bestAgainst: ['Melee fighters', 'Single bosses', 'Enemies with predictable patterns'],
      struggleAgainst: ['Swift ranged enemies', 'Tactical foes', 'Magic users (unless he reaches them)'],
      feats: ['Defeated a B-rank mercenary captain in a duel, claiming his greatsword', 'Has challenged Brehn to 12 duels – won none, but never stopped', 'Survived a cave-in by bracing a collapsed tunnel with his sword'],
      teammates: [
        { id: 'serena_ashford', name: 'Serena Ashford', role: 'Mage', rel: 'Respects her power. She keeps him grounded when he gets too reckless.', avBg: '#2E2E4A', avColor: '#D4D4F0', avText: 'SA' },
        { id: 'duncan_tank', name: 'Duncan', role: 'Tank', rel: 'His wall. Viktor trusts Duncan to take hits he cannot.', avBg: '#5A5A4A', avColor: '#E0E0D0', avText: 'DT' },
        { id: 'lira_swift', name: 'Lira Swift', role: 'Scout', rel: 'Finds her sarcasm amusing. She calls him "Big Guy."', avBg: '#3A6E4A', avColor: '#D0F0D0', avText: 'LS' }
      ],
      teamRole: 'Primary damage dealer and frontline charger. He sets the pace, and the team follows.',
      reputation: 'Known as "the Iron Blade" – feared by some, respected by others. The guild clerks have learned to duck when he storms in.',
      nickname: '"Iron Blade" (self-given, but it stuck)',
      misc: {
        Hobbies: 'Sparring, arm wrestling, boasting about fictional victories',
        Likes: 'A good fight, proving people wrong, cold ale',
        Dislikes: 'Losing, being ignored, anyone who says Brehn is better',
        Trivia: 'He keeps a tally of his losses to Brehn on his sword handle. It has 12 marks. He has not added a 13th yet.'
      },
      stats: {
        rank: 'Gold',
        values: { 'Phys ATK': 523, 'Phys DEF': 423, 'Magic ATK': 354, 'Magic DEF': 287, Mana: 312, Speed: 387, Strength: 498, 'Battle Focus': 467 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', Strength: '#C0392B', 'Battle Focus': '#BA7517' }
      }
    },
    // ========== SERENA ASHFORD (Mage, Pyromancer) ==========
    {
      id: 'serena_ashford',
      name: 'Serena Ashford',
      title: 'The Crimson Flame',
      avBg: '#2E2E4A',
      avColor: '#D4D4F0',
      avText: 'SA',
      accentColor: '#C0392B',
      rankLabel: 'Gold',
      role: 'Mage / Pyromancer',
      category: 'Parties',
      basic: {
        Age: '23',
        Gender: 'Female',
        Height: '1.68 m',
        Race: 'Human',
        Affiliation: 'The Iron Reckoning',
        Rank: 'Gold',
        Role: 'Mage / Pyromancer'
      },
      appearance: 'Slender and poised, with long dark hair often tied in a high ponytail. Her eyes are a striking amber, and they narrow when she calculates a fireball trajectory. She wears deep crimson robes with gold trim, enchanted for fire resistance. Her hands are always clean, but faint burn scars peek from her sleeves. She carries a polished obsidian wand, its tip permanently warm to the touch.',
      personality: 'Cold, calculating, and proud of her magic. She believes that offense is the best defense – a sentiment that puts her at odds with Mary\'s support-focused approach. She respects power, even in enemies. She is not cruel, but she is dismissive of those she considers weak. She rarely laughs, but when she does, it is sharp and genuine.',
      background: 'Serena was apprenticed to a court mage as a child. She learned control before power, then amassed both. She joined Iron Reckoning after Viktor impressed her in a duel – she values strength, and he had it. She views Mary as a rival, though she secretly envies Mary\'s versatility. She has never admitted that Mary\'s healing saved Serena\'s life once during a joint mission. She pretends it didn\'t happen.',
      equipment: [
        { icon: '🪄', name: 'Obsidian Wand', note: 'Polished obsidian, warm to the touch. Focuses fire magic. Serena carved her name into the base.' },
        { icon: '🧥', name: 'Crimson Fire Robe', note: 'Deep red with gold trim. Enchanted for fire resistance. The left sleeve is slightly discolored from an early overcast.' },
        { icon: '🔥', name: 'Firestarter Pendant', note: 'A small ruby on a silver chain. Glows when she channels mana. A gift from her mentor.' }
      ],
      abilities: {
        'Fire Magic': ['Fireball (AoE, high damage, ignites ground)', 'Flame Lance (line attack, pierces multiple enemies)', 'Flare (single target, high damage, blinds for 3 seconds)'],
        'Utility Magic': ['Heat Sense (detects warm-blooded creatures through walls)', 'Smoke Screen (creates obscuring smoke, reduces visibility)'],
        'Passive': ['Fire Absorption (heals 10% of fire damage taken)', 'Pyromancer\'s Focus (fire spells cost 20% less mana)']
      },
      signature: {
        name: 'Inferno Burst',
        desc: 'Serena channels all her remaining mana into a massive fireball that explodes on impact, creating a 20 m radius inferno that lasts for 30 seconds. Enemies inside take 100 dmg/sec. She cannot cast again for 1 minute afterward. Used as a battle-ender or when surrounded.'
      },
      strengths: ['Highest magical damage output', 'Excellent area control with fire', 'Fire absorption makes enemy fire mages useless'],
      weaknesses: ['Vulnerable to water and ice magic', 'Low physical defense', 'Struggles against fire-immune enemies'],
      strategy: 'Stay behind Viktor, bombard enemies from range. Use Flame Lance for lines of enemies, Fireball for clusters. Save Inferno Burst for emergencies.',
      bestAgainst: ['Groups of enemies', 'Enemies weak to fire', 'Ice-based enemies'],
      struggleAgainst: ['Water elementals', 'Fire-immune dragons', 'Close-range rushers'],
      feats: ['Incinerated a D-rank goblin warband with a single Fireball', 'Discovered a natural gas pocket in a cave – used it to fuel a massive explosion', 'Has never been out-cast by another pyromancer'],
      teammates: [
        { id: 'viktor_cross', name: 'Viktor Cross', role: 'Leader', rel: 'Respects his strength. She is the only one who can calm him down.', avBg: '#4A4A4A', avColor: '#E8E8E8', avText: 'VC' },
        { id: 'duncan_tank', name: 'Duncan', role: 'Tank', rel: 'Appreciates his silence. He never interrupts her calculations.', avBg: '#5A5A4A', avColor: '#E0E0D0', avText: 'DT' },
        { id: 'lira_swift', name: 'Lira Swift', role: 'Scout', rel: 'Finds her amusing. Lira is the only one who can make Serena smile.', avBg: '#3A6E4A', avColor: '#D0F0D0', avText: 'LS' }
      ],
      teamRole: 'Primary ranged damage and area control. She softens enemies before Viktor closes.',
      reputation: 'Known as the "Crimson Flame" – feared by the guild, respected by senior mages.',
      nickname: '"Firebug" (Lira only – Serena pretends to hate it)',
      misc: {
        Hobbies: 'Practicing fire manipulation, reading magical theory, sharpening her focus',
        Likes: 'Precision, efficiency, the smell of smoke after a clean cast',
        Dislikes: 'Water mages, interruptions, being called "cold"',
        Trivia: 'She once melted a training dummy so thoroughly that the guild charged her for a new one.'
      },
      stats: {
        rank: 'Gold',
        values: { 'Phys ATK': 243, 'Phys DEF': 287, 'Magic ATK': 512, 'Magic DEF': 423, Mana: 498, Speed: 312, 'Fire Power': 534, 'Focus': 487 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Fire Power': '#C0392B', 'Focus': '#BA7517' }
      }
    },
    // ========== DUNCAN "THE WALL" (Tank) ==========
    {
      id: 'duncan_tank',
      name: 'Duncan',
      title: 'The Iron Wall',
      avBg: '#5A5A4A',
      avColor: '#E0E0D0',
      avText: 'DT',
      accentColor: '#7D6E4A',
      rankLabel: 'Silver',
      role: 'Tank / Shield-bearer',
      category: 'Parties',
      basic: {
        Age: '26',
        Gender: 'Male',
        Height: '1.91 m',
        Race: 'Human',
        Affiliation: 'The Iron Reckoning',
        Rank: 'Silver',
        Role: 'Tank / Shield-bearer'
      },
      appearance: 'Broad and solid, with a calm, weathered face. He has short brown hair and eyes that rarely show emotion. He wears full plate armor, polished but dented. His tower shield is massive – painted black with a silver skull. He carries a one-handed mace, but rarely uses it; he prefers to block and let others attack.',
      personality: 'Silent, loyal, and unshakable. He speaks rarely, but when he does, it is direct and final. He is not unintelligent – he simply sees no value in words when actions suffice. He follows Viktor without question, trusts Serena completely, and is quietly protective of Lira. He respects Coyote\'s strength, though he has never said so aloud.',
      background: 'Duncan was a city guard before joining the guild. He quit after his partner was killed by a monster that the guard wasn\'t equipped to handle. He carries his partner\'s shield as a reminder. He joined Viktor\'s party because Viktor never asked him to talk about it. He has not mentioned his partner\'s name in years. He does not need to.',
      equipment: [
        { icon: '🛡️', name: 'Memorial Shield', note: 'A massive tower shield painted black with a silver skull. It belonged to his former partner. Duncan never leaves it behind.' },
        { icon: '🔨', name: 'Simple Mace', note: 'An unadorned iron mace. He uses it only when necessary. He maintains it, but it is not special.' },
        { icon: '🛡️', name: 'Full Plate Armor', note: 'Polished but dented steel plate. The left pauldron is cracked from an orc chieftain’s axe. He left the crack as a reminder.' }
      ],
      abilities: {
        'Defensive Arts': ['Shield Wall (blocks all frontal attacks for 5 seconds)', 'Intercept (takes a hit meant for an ally)', 'Steadfast (cannot be knocked prone or moved)'],
        'Offensive Arts': ['Shield Bash (stun, knockback, low damage)', 'Mace Strike (basic, used only when necessary)'],
        'Passive': ['Memorial (gains +10% defense when protecting an ally)', 'Unmoving (immune to fear and morale effects)']
      },
      signature: {
        name: 'The Unbreakable Line',
        desc: 'Duncan plants his shield and locks his stance. For 15 seconds, he and any ally directly behind him take 75% reduced damage from frontal attacks. He cannot move during this time, and he is vulnerable from the sides and rear. Used to protect the party from a devastating assault.'
      },
      strengths: ['Highest defense', 'Can protect allies effectively', 'Immune to fear and knockback', 'Never retreats'],
      weaknesses: ['Slow', 'Low damage output', 'Vulnerable from flanking', 'Silent – sometimes misses opportunities to call out dangers'],
      strategy: 'Plant shield, protect Viktor and Serena. Use Intercept to absorb hits. Never break formation.',
      bestAgainst: ['Heavy hitters', 'Enemies that charge', 'Chokepoint fights'],
      struggleAgainst: ['Fast flankers', 'Enemies that ignore armor', 'Ranged attackers from multiple angles'],
      feats: ['Blocked a charging B-rank bull, stopping it completely', 'Took a fireball to the shield to protect Serena – the shield is still blackened', 'Has never lost his footing in combat'],
      teammates: [
        { id: 'viktor_cross', name: 'Viktor Cross', role: 'Leader', rel: 'Follows him without question. Viktor never asks him to talk.', avBg: '#4A4A4A', avColor: '#E8E8E8', avText: 'VC' },
        { id: 'serena_ashford', name: 'Serena Ashford', role: 'Mage', rel: 'Respects his strength. He is the only one she trusts to block for her.', avBg: '#2E2E4A', avColor: '#D4D4F0', avText: 'SA' },
        { id: 'lira_swift', name: 'Lira Swift', role: 'Scout', rel: 'Protects her like a younger sister. She calls him "The Wall."', avBg: '#3A6E4A', avColor: '#D0F0D0', avText: 'LS' }
      ],
      teamRole: 'Frontline defender and damage absorber. He keeps enemies off Viktor and Serena.',
      reputation: 'Known as "the Wall" – the man you want between you and danger.',
      nickname: '"The Wall" (given by Lira, adopted by everyone)',
      misc: {
        Hobbies: 'Polishing his armor, maintaining the shield, silent contemplation',
        Likes: 'Quiet, order, a clean block',
        Dislikes: 'Loud arguments, surprises, failing to protect someone',
        Trivia: 'He has not spoken his partner\'s name in three years. The shield says enough.'
      },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 243, 'Phys DEF': 498, 'Magic ATK': 187, 'Magic DEF': 387, Mana: 143, Speed: 187, 'Shield Block': 523, Endurance: 467 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Shield Block': '#7D6E4A', Endurance: '#BA7517' }
      }
    },
    // ========== LIRA SWIFT (Scout / Archer) ==========
    {
      id: 'lira_swift',
      name: 'Lira Swift',
      title: 'The Quiet Arrow',
      avBg: '#3A6E4A',
      avColor: '#D0F0D0',
      avText: 'LS',
      accentColor: '#4A9B7C',
      rankLabel: 'Silver',
      role: 'Scout / Archer',
      category: 'Parties',
      basic: {
        Age: '21',
        Gender: 'Female',
        Height: '1.62 m',
        Race: 'Human',
        Affiliation: 'The Iron Reckoning',
        Rank: 'Silver',
        Role: 'Scout / Archer'
      },
      appearance: 'Lean and quick, with short auburn hair and sharp green eyes that miss nothing. She wears dark green leather armor, practical and quiet. A shortbow and quiver are always on her back, and a belt knife hangs on her hip. She moves with a feline grace, often appearing where no one expected her.',
      personality: 'Quick-witted, sarcastic, and fiercely independent. She is the party\'s humor – she makes jokes when Viktor boasts, rolls her eyes at Serena, and teases Duncan (who never reacts). She is loyal to her team, though she would never admit it aloud. She respects Anderson’s utility but thinks he tries too hard. She competes with him for "most useful non-combatant," though neither would acknowledge the rivalry.',
      background: 'Lira grew up in the forest, raised by a retired ranger who taught her to shoot and track. She registered at the guild at eighteen and joined Iron Reckoning after Viktor impressed her in a spar (she nearly won). She is the party\'s scout and long-range support. She enjoys the rivalry with Blue Constellation’s Anderson – she thinks his gadgets are "over-engineered" and her arrows are "elegant."',
      equipment: [
        { icon: '🏹', name: 'Whisperwind (Shortbow)', note: 'A well-maintained shortbow, with a draw weight tuned for speed. The string is replaced every month. Lira carved a small feather into the grip.' },
        { icon: '🗡️', name: 'Belt Knife', note: 'A simple iron knife. Used for utility, not combat.' },
        { icon: '🧥', name: 'Green Scout Leather', note: 'Dark green, quiet, with many pockets for arrows and supplies.' }
      ],
      abilities: {
        'Archery': ['Precision Shot (single arrow, high accuracy, high damage)', 'Rapid Shot (three arrows in quick succession, lower accuracy)', 'Piercing Arrow (ignores 30% armor)'],
        'Scouting': ['Trackless Step (leaves no tracks)', 'Keen Eye (spots hidden enemies from 100 m)'],
        'Passive': ['Silent Movement (no sound while moving)']
      },
      signature: {
        name: 'The Disappearing Shot',
        desc: 'Lira fires an arrow, then immediately repositions while the enemy is distracted. The arrow is standard; the repositioning is the technique. She can fire from an unexpected angle within 3 seconds. Used to confuse and harass enemies.'
      },
      strengths: ['Excellent scout', 'High mobility', 'Can harass enemies from range', 'Difficult to pin down'],
      weaknesses: ['Low physical defense', 'Low damage output per arrow', 'Limited against heavily armored enemies'],
      strategy: 'Scout ahead, report enemy positions. During combat, stay at range, harass priority targets (mages, archers). Use Precision Shot for high-value targets.',
      bestAgainst: ['Archers', 'Mages', 'Lightly armored enemies'],
      struggleAgainst: ['Heavy armor', 'Shield walls', 'Enemies with projectile resistance'],
      feats: ['Shot an arrow through a keyhole to unlock a door from the outside', 'Never been caught while scouting', 'Won a shooting competition against a veteran Gold-rank archer'],
      teammates: [
        { id: 'viktor_cross', name: 'Viktor Cross', role: 'Leader', rel: 'Finds his bravado amusing. She calls him "Big Guy."', avBg: '#4A4A4A', avColor: '#E8E8E8', avText: 'VC' },
        { id: 'serena_ashford', name: 'Serena Ashford', role: 'Mage', rel: 'Makes her laugh. Serena is the only one who gets Lira\'s jokes.', avBg: '#2E2E4A', avColor: '#D4D4F0', avText: 'SA' },
        { id: 'duncan_tank', name: 'Duncan', role: 'Tank', rel: 'Protective older-brother energy. She calls him "The Wall."', avBg: '#5A5A4A', avColor: '#E0E0D0', avText: 'DT' }
      ],
      teamRole: 'Scout and ranged support. She provides intel and harasses priority targets.',
      reputation: 'Known as "the Quiet Arrow" – few have seen her shoot; many have felt it.',
      nickname: '"Swift" (given by Viktor, though everyone uses it)',
      misc: {
        Hobbies: 'Archery practice, tracking, watching birds',
        Likes: 'Silence, a clean shot, proving people wrong',
        Dislikes: 'Loud noises, heavy armor, losing arrows',
        Trivia: 'She once hit a moving target at 200 meters – then claimed it was "luck." No one believed her.'
      },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 387, 'Phys DEF': 243, 'Magic ATK': 187, 'Magic DEF': 243, Mana: 143, Speed: 443, Accuracy: 478, Stealth: 456 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', Accuracy: '#4A9B7C', Stealth: '#BA7517' }
      }
    }
  ];

  if (window.REGISTRY) {
    window.REGISTRY.registerParty('iron_reckoning', 'The Iron Reckoning', members);
    console.log('The Iron Reckoning party loaded successfully.');
  } else {
    console.error('Registry core not loaded');
  }
})();