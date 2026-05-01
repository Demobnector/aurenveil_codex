// party/red-wings-data.js
(function() {
  const members = [
    // ========== ALISTAIR VALEMONT (Leader, Tank) ==========
    {
      id: 'alistair_valemont',
      name: 'Alistair Valemont',
      title: 'The Shield of House Valemont',
      avBg: '#2C3E50',
      avColor: '#E8E8E8',
      avText: 'AV',
      accentColor: '#C0392B',
      rankLabel: 'Gold',
      role: 'Tank / Commander',
      category: 'Parties',
      basic: {
        Age: '24',
        Gender: 'Male',
        Height: '1.83 m',
        Race: 'Human',
        Affiliation: 'Red Wings',
        Rank: 'Gold',
        Role: 'Tank / Commander'
      },
      appearance: 'Tall and broad-shouldered, with a clean-shaven jaw and dark hair combed back with precision. His grey eyes are steady, never hurried. He wears a polished silver breastplate over a deep crimson undercoat, the Valemont crest – a red wing on a black field – embossed on his left pauldron. His tower shield is immaculate, not a single scratch left unpolished. He moves with deliberate economy, each step measured, as if he is always aware of being watched.',
      personality: 'Calm, authoritative, and disciplined to a fault. He speaks like every word is being judged – because it often is. He prioritises duty over emotion, formation over aggression. He rarely raises his voice; his commands are quiet and obeyed instantly. Beneath the composure, he carries the weight of expectation: his siblings’ lives depend on his decisions. He fears failure more than death.',
      background: 'Alistair is the eldest of four, raised from childhood to lead the family’s adventuring legacy. He trained under a retired knight commander and passed the Gold rank exam at twenty-two. He formed Red Wings to give his siblings a controlled environment to gain experience – and to keep them close. He has never admitted that he sometimes lies awake replaying every decision from a mission, searching for faults.',
      equipment: [
        { icon: '⚔️', name: 'Dawnbreaker (Longsword)', note: 'A well-balanced, unenchanted longsword with a leather-wrapped hilt. His father’s blade, passed down. He maintains it personally after every mission.' },
        { icon: '🛡️', name: 'Valemont Tower Shield', note: 'A massive steel shield painted with the family crest. Its weight is substantial, but Alistair has trained to move with it fluidly. Bears a few dents from missions – he does not polish those out, as a reminder.' },
        { icon: '💍', name: 'Signet Ring of the Elder', note: 'A plain gold ring worn on his left thumb. It has no magic; it symbolises his authority as the family head. He touches it when making difficult decisions.' }
      ],
      abilities: {
        'Command': ['Tactical Shift (party moves as a unit, no penalty to formation)', 'Hold the Line (party gains +20% defense while stationary)', 'Rally (removes fear from one ally, restores 10% HP)'],
        'Defensive Arts': ['Shield Wall (reduces damage to adjacent allies by 25%)', 'Repositioning Strike (pushes enemy back, creates space)', 'Steadfast (Alistair cannot be knocked prone or moved against his will)'],
        'Passive': ['Noble Bearing (enemies are less likely to target allies when Alistair is above 50% HP)', 'Tactical Mind (identifies enemy weaknesses after 2 rounds of combat)']
      },
      signature: {
        name: 'The Unyielding Line',
        desc: 'Alistair plants his shield and braces. For 10 seconds, he and any ally within 5 meters behind him take 50% reduced damage from frontal attacks. He cannot move while maintaining it. Used to protect Elizabeth or Lucien during heavy bombardment.'
      },
      strengths: ['Excellent formation control', 'High survivability', 'Keeps party disciplined', 'Never panics'],
      weaknesses: ['Slow – cannot reposition quickly', 'Vulnerable from flanking', 'Overly cautious – sometimes misses opportunities'],
      strategy: 'Establish a defensive line, let Cecilia flank, Elizabeth bombard, Lucien scout. Hold position and trust the formation. Retreat only if absolutely necessary.',
      bestAgainst: ['Enemies that attack head-on', 'Big single threats', 'Organised combatants'],
      struggleAgainst: ['Fast, numerous flankers', 'Dexterity-based enemies', 'Combat that requires rapid mobility'],
      feats: ['Held a collapsing corridor alone for 45 seconds while the party evacuated a trapped mine', 'Recognised an ambush from subtle enemy spacing – only survivor of a near-TPK? No, he called the retreat early', 'Trained three separate rookies who later reached Silver rank'],
      teammates: [
        { id: 'cecilia_valemont', name: 'Cecilia Valemont', role: 'Duelist DPS', rel: 'Competitive; she tests his authority. He respects her skill.', avBg: '#922B21', avColor: '#F9E79F', avText: 'CV' },
        { id: 'elizabeth_valemont', name: 'Elizabeth Valemont', role: 'Mage', rel: 'Protective older brother – sometimes too much. He worries about her constantly.', avBg: '#512E5F', avColor: '#D2B4DE', avText: 'EV' },
        { id: 'lucien_valemont', name: 'Lucien Valemont', role: 'Scout', rel: 'Trusts him completely; Lucien is his eyes on the battlefield.', avBg: '#1E8449', avColor: '#D5F5E3', avText: 'LV' }
      ],
      teamRole: 'Frontline anchor and tactical commander. The party moves when he moves, stands when he stands.',
      reputation: 'Regarded as a future Diamond candidate by guild strategists. Some older adventurers find him too stiff, but none question his effectiveness.',
      nickname: '"The Shield" (used by guild clerks, not to his face)',
      misc: { Hobbies: 'Chess, military history, polishing armor', Likes: 'Order, early mornings, quiet evenings', Dislikes: 'Gambling, unplanned detours, anyone who calls him "Ali"', Trivia: 'He has never lost a game of chess to any sibling – but Lucien has come close twice.' },
      stats: {
        rank: 'Gold',
        values: { 'Phys ATK': 423, 'Phys DEF': 548, 'Magic ATK': 287, 'Magic DEF': 412, Mana: 312, Speed: 298, 'Command': 523, 'Endurance': 498 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Command': '#C0392B', 'Endurance': '#BA7517' }
      }
    },
    // ========== CECILIA VALEMONT (Duelist DPS) ==========
    {
      id: 'cecilia_valemont',
      name: 'Cecilia Valemont',
      title: 'The Scarlet Thorn',
      avBg: '#922B21',
      avColor: '#F9E79F',
      avText: 'CV',
      accentColor: '#D35400',
      rankLabel: 'Gold',
      role: 'Duelist DPS',
      category: 'Parties',
      basic: {
        Age: '20',
        Gender: 'Female',
        Height: '1.68 m',
        Race: 'Human',
        Affiliation: 'Red Wings',
        Rank: 'Gold',
        Role: 'Duelist DPS'
      },
      appearance: 'Slim and graceful, with auburn hair kept in a tight braid down her back. Her eyes are a sharp green, quick to narrow in concentration or flash with competitiveness. She wears a fitted leather jerkin over a steel mesh undershirt, with a rapier at her hip and a main‑gauche dagger on the opposite side. No shield – she relies on footwork and precision. Her movements are fluid, almost dance‑like, and she rarely blinks during a duel.',
      personality: 'Sharp‑tongued, confident, and slightly prideful. She challenges Alistair’s authority in subtle ways – not because she wants to lead, but because she believes her combat insights are undervalued. She is fiercely protective of Elizabeth and has a soft spot for Lucien, whom she considers the most sensible sibling. Under stress, her composure cracks; she becomes quieter, more intense, and prone to rash decisions if she feels a sibling is in danger.',
      background: 'Cecilia trained under a master fencer who served a foreign ambassador. She passed the Gold rank exam at nineteen, a year earlier than Alistair, and has never let him forget it. She joined Red Wings partly to support the family and partly to prove that she is more than "Alistair’s sister". She has a complicated relationship with noble expectations – she loathes balls and social events, preferring the clarity of a duel. Her greatest fear is that she might hesitate at a critical moment, costing someone’s life.',
      equipment: [
        { icon: '⚔️', name: 'Windfang (Rapier)', note: 'A slender, high‑carbon blade with an ornate swept hilt. Perfectly balanced for thrusting. Cecilia sharpens it herself every morning.' },
        { icon: '🗡️', name: 'Main‑Gauche (Parrying Dagger)', note: 'A matching dagger with a serrated edge. Used for trapping enemy blades and close‑quarter defense.' },
        { icon: '🧥', name: 'Crimson Jerkin', note: 'Dark red leather with steel rings sewn into the lining. Light enough not to restrict movement, tough enough to deflect glancing blows.' }
      ],
      abilities: {
        'Fencing Arts': ['Puncturing Thrust (high damage, ignores 30% armor)', 'Feint and Lunge (deceptive attack, enemy penalty to dodge)', 'Riposte (after dodging, free counter‑attack with bonus damage)'],
        'Precision': ['Vital Strike (targets weak points, may cause bleed)', 'Disarm (attempt to knock weapon from enemy hand, reduces threat)'],
        'Passive': ['Duelist’s Focus (when only one enemy remains, critical chance +20%)', 'Quick Reflexes (can intercept attacks meant for adjacent allies)']
      },
      signature: {
        name: 'The Unseen Cut',
        desc: 'Cecilia performs a blindingly fast thrust aimed at an enemy’s throat or joint gap. It has a 30% chance to instantly kill non‑boss humanoids. Even on bosses, it deals massive damage and inflicts an accuracy penalty from shock. The attack requires a full round of focus – if she is hit before executing, the attempt fails.'
      },
      strengths: ['Highest single‑target damage in the party', 'Excellent at duelling elites', 'Can protect allies with intercept', 'Very difficult to hit'],
      weaknesses: ['Weak against multiple enemies', 'Low physical defense – vulnerable to area attacks', 'Pride can lead to overconfidence'],
      strategy: 'Flank the enemy’s strongest melee fighter, duel them one‑on‑one, and eliminate quickly. Use Lucien’s scouting to identify isolated targets.',
      bestAgainst: ['Elite humanoids', 'Single bosses', 'Heavily armored enemies (via thrust)'],
      struggleAgainst: ['Swarm fights', 'Enemies with high evasion', 'Magical shields'],
      feats: ['Defeated a Gold‑rank mercenary captain in a formal duel – no magic, no interference', 'Disarmed a B‑rank orc chieftain mid‑swing, then killed it with its own axe', 'Has never lost a spar against Alistair (he claims he was "holding back")'],
      teammates: [
        { id: 'alistair_valemont', name: 'Alistair Valemont', role: 'Tank', rel: 'Competitive. She respects him but chafes under his authority.', avBg: '#2C3E50', avColor: '#E8E8E8', avText: 'AV' },
        { id: 'elizabeth_valemont', name: 'Elizabeth Valemont', role: 'Mage', rel: 'Protective. She thinks Elizabeth is too sheltered and pushes her to be bolder.', avBg: '#512E5F', avColor: '#D2B4DE', avText: 'EV' },
        { id: 'lucien_valemont', name: 'Lucien Valemont', role: 'Scout', rel: 'Genuinely fond of him; she trusts his judgment more than Alistair’s.', avBg: '#1E8449', avColor: '#D5F5E3', avText: 'LV' }
      ],
      teamRole: 'Elite eliminator and secondary guardian.',
      reputation: 'Known as "the graceful killer" – nobles whisper about her duels, adventurers respect her blade.',
      nickname: '"Cecilia the Thorn" (she tolerates it, but prefers her name)',
      misc: { Hobbies: 'Fencing practice, reading poetry (secretly), sharpening her blade', Likes: 'A clean fight, honest opponents, the smell of rain', Dislikes: 'Archers, crowded ballrooms, losing', Trivia: 'She once challenged a visiting knight to a duel and won in three moves – he refused to speak of it.' },
      stats: {
        rank: 'Gold',
        values: { 'Phys ATK': 498, 'Phys DEF': 387, 'Magic ATK': 243, 'Magic DEF': 298, Mana: 267, Speed: 523, 'Precision': 534, 'Evasion': 512 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Precision': '#D35400', 'Evasion': '#1D9E75' }
      }
    },
    // ========== ELIZABETH VALEMONT (Mage, your character) ==========
    {
      id: 'elizabeth_valemont',
      name: 'Elizabeth Valemont',
      title: 'The Rising Star',
      avBg: '#512E5F',
      avColor: '#D2B4DE',
      avText: 'EV',
      accentColor: '#8E44AD',
      rankLabel: 'Silver',
      role: 'Mage / Artillery',
      category: 'Parties',
      basic: {
        Age: '17',
        Gender: 'Female',
        Height: '1.49 m',
        Race: 'Human',
        Affiliation: 'Red Wings',
        Rank: 'Silver',
        Role: 'Mage / Artillery'
      },
      appearance: 'Small and slight, with long dark hair usually tied back with a velvet ribbon. Her eyes are a striking violet, often wide with curiosity or concentration. She wears a tailored mage’s robe in deep blue with silver trim – the family colours – and a silver hairpin shaped like a quill. Her hands are always clean, with short nails; she hates the smell of burnt hair after a miscast. She carries a compact spellbook in an embossed leather satchel, its pages filled with her precise, tiny handwriting.',
      personality: 'Polite, soft‑spoken, and composed in public – the perfect noble daughter. But beneath that is a quietly stubborn young woman who resents being treated as "the protected one". She is deeply curious about magic and spends hours in the guild library. She overthinks under pressure, analysing instead of acting, which sometimes costs precious seconds. She idolises Cecilia’s confidence and appreciates Lucien’s grounding presence. Her greatest wish is to cast a spell that changes the course of a battle, all on her own.',
      background: 'Elizabeth showed magical talent at age seven and was tutored by a succession of academics. She passed the Silver rank exam at sixteen – the minimum age allowed – and was immediately assigned to Red Wings under Alistair’s command. She has completed eleven missions, but in each she has been kept in the back line, well protected. She has never been seriously injured, which both frustrates and secretly relieves her. She believes she is capable of more. She is probably right.',
      equipment: [
        { icon: '🪄', name: 'Frostwhisper (Staff)', note: 'A pale birch staff capped with a sapphire crystal. Enhances ice and lightning magic. The crystal was a gift from her grandmother, who was also a mage.' },
        { icon: '📖', name: 'Silver Codex', note: 'Her personal spellbook, transcribed in her own elegant script. Contains over thirty spells, half of which she has not yet mastered. She adds notes after every mission.' },
        { icon: '🧣', name: 'Velvet Ribbon', note: 'A simple dark ribbon she ties in her hair. It has no magical properties, but she says it helps her focus – a habit from childhood.' }
      ],
      abilities: {
        'Elemental Magic': ['Frostbolt (single target, slows enemy)', 'Chain Lightning (jumps to additional foes, moderate damage)', 'Flare (small AoE, blinds enemies for 3 seconds)'],
        'Utility': ['Mage Armor (self‑buff, increases defense)', 'Arcane Barrier (creates a shield that blocks one attack for an ally)'],
        'Passive': ['Theoretical Foundation (Elizabeth can analyze a spell after seeing it cast once, learning its pattern)', 'Overthink (if she hesitates, the next spell costs 20% less mana)']
      },
      signature: {
        name: 'Prodigy’s Judgement',
        desc: 'Elizabeth pours all her remaining mana into a single, perfectly formed spell – a lance of pure energy that pierces through defenses. It takes 5 seconds to cast; during that time, she is vulnerable and cannot move. If she is hit, the spell fails. When it lands, it deals damage based on the square of her remaining mana – potentially catastrophic.'
      },
      strengths: ['High magical output', 'Versatile spell selection', 'Quick learner – adapts to enemy resistances', 'Composed under observation'],
      weaknesses: ['Physically fragile – lowest defense in party', 'Slower casting speed', 'Overthinks – can miss opportunities', 'Inexperienced with real danger'],
      strategy: 'Stay behind Alistair’s shield, cast from distance. Use Frostbolt to slow approaching enemies, Chain Lightning for groups, save Flare for emergencies. Let Lucien call out targets.',
      bestAgainst: ['Groups of weaker enemies', 'Slow, heavy foes', 'Enemies vulnerable to elemental magic'],
      struggleAgainst: ['Fast melee rushers', 'Anti‑magic zones', 'Fights that require instant reactions'],
      feats: ['Identified and dispelled a magical trap that had stumped a Gold‑rank party', 'Defeated a C‑rank earth elemental with a single Chain Lightning (it was already wounded, but she counts it)', 'Successfully copied a B‑rank spell after seeing it once during a joint mission'],
      teammates: [
        { id: 'alistair_valemont', name: 'Alistair Valemont', role: 'Tank', rel: 'He is overprotective; she is frustrated but loves him.', avBg: '#2C3E50', avColor: '#E8E8E8', avText: 'AV' },
        { id: 'cecilia_valemont', name: 'Cecilia Valemont', role: 'Duelist', rel: 'Looks up to her confidence; Cecilia encourages her to be bolder.', avBg: '#922B21', avColor: '#F9E79F', avText: 'CV' },
        { id: 'lucien_valemont', name: 'Lucien Valemont', role: 'Scout', rel: 'Closest sibling; she confides her doubts to him. He never judges.', avBg: '#1E8449', avColor: '#D5F5E3', avText: 'LV' }
      ],
      teamRole: 'Primary ranged damage and magical support.',
      reputation: 'Seen as a promising prodigy. Senior mages watch her career with interest. Some call her "the sheltered one", but quietly.',
      nickname: '"Liz" (only Lucien calls her that; Alistair disapproves)',
      misc: { Hobbies: 'Studying spell theory, writing letters, playing quiet games of chess with Lucien', Likes: 'Rainy afternoons, discovering new spells, hot chocolate', Dislikes: 'Being told to stay back, loud noises, her ribbon coming loose', Trivia: 'She can draw a perfect magic circle freehand – first time, every time.' },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 143, 'Phys DEF': 187, 'Magic ATK': 423, 'Magic DEF': 387, Mana: 478, Speed: 287, 'Spell Depth': 412, 'Control': 456 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Spell Depth': '#8E44AD', 'Control': '#BA7517' }
      }
    },
    // ========== LUCIEN VALEMONT (Scout / Utility) ==========
    {
      id: 'lucien_valemont',
      name: 'Lucien Valemont',
      title: 'The Quiet Eye',
      avBg: '#1E8449',
      avColor: '#D5F5E3',
      avText: 'LV',
      accentColor: '#27AE60',
      rankLabel: 'Silver',
      role: 'Scout / Utility',
      category: 'Parties',
      basic: {
        Age: '18',
        Gender: 'Male',
        Height: '1.72 m',
        Race: 'Human',
        Affiliation: 'Red Wings',
        Rank: 'Silver',
        Role: 'Scout / Utility'
      },
      appearance: 'Lean and wiry, with sandy brown hair that falls across his forehead. His eyes are a calm hazel, observant but not intense. He wears practical, muted clothing – a green hooded cloak, soft leather tunic, and sturdy boots – all designed for quiet movement. He carries a shortbow across his back and a dagger at his belt. There is a small scar on his left forearm from a branch that he does not remember getting. He often leans against walls, watching the exits.',
      personality: 'Relaxed, observant, and slightly rebellious against noble formality. He does not care about prestige; he cares about survival and the people he trusts. He is the most "street‑smart" of the siblings, having spent time among commoner adventurers. He speaks less than the others but listens more. He acts as an emotional bridge between the siblings – he knows when Alistair is worried, when Cecilia is frustrated, and when Elizabeth is scared. He does not judge. He simply stays nearby.',
      background: 'Lucien was never interested in being a knight or a mage. He learned archery from a hunter on the family estate and snuck out to watch adventurers in the city. He passed the Silver rank exam at seventeen, focusing on tracking and survival skills rather than combat. He joined Red Wings because they are his family – not for glory, but because he wants to keep them safe. He is the one who has actually spent time sleeping in fields and living on rations.',
      equipment: [
        { icon: '🏹', name: 'Wildwood Bow', note: 'A recurve shortbow made of yew, with a draw weight perfect for mobile shooting. Unadorned, practical. The string is replaced every three months.' },
        { icon: '🗡️', name: 'Trail Dagger', note: 'A straight, single‑edged blade with a leather grip. Used for knife work and bushcraft. He sharpens it irregularly – it just stays sharp.' },
        { icon: '🧥', name: 'Forest Cloak', note: 'A hooded green cloak treated to shed rain and muffle sound. Has several pockets sewn inside for small supplies.' }
      ],
      abilities: {
        'Scouting': ['Tracksense (identifies footprints, disturbed earth, and ambush signs)', 'Keen Hearing (can hear conversations from 100 m away)', 'Escape Route (if party retreats, Lucien finds quickest path)'],
        'Ranged Combat': ['Precise Shot (ignores cover, bonus to hit)', 'Paralytic Arrow (rare poison, immobilises target for 1 round)'],
        'Passive': ['Unseen (when not moving, Lucien is difficult to notice – +50% stealth)', 'Animal Friend (non‑hostile animals do not alert enemies to his presence)']
      },
      signature: {
        name: 'Eagle’s Mark',
        desc: 'Lucien takes 10 seconds to study the battlefield from a hidden vantage point. He then marks up to three enemies as "priority targets". For the next minute, all party members gain +20% accuracy and +15% critical chance against marked enemies. The effect ends early if Lucien is discovered or moves.'
      },
      strengths: ['Excellent battlefield information', 'Can avoid detection', 'Supports team with tactical advantage', 'Calm under pressure'],
      weaknesses: ['Low damage output', 'Limited direct combat ability', 'Relies on allies for killing power', 'Can be separated easily'],
      strategy: 'Move ahead, scout and report, then provide ranged support. Use paralytic arrows on dangerous targets. Call out enemy positions.',
      bestAgainst: ['Enemies that rely on ambush', 'Open terrain', 'Sentries and guards'],
      struggleAgainst: ['Indoor dungeons with no sight lines', 'Creatures with blindsight', 'Magical detection'],
      feats: ['Found a hidden back entrance to a B‑rank dungeon that cut mission time in half', 'Shot a spear out of an orc’s hand from 80 meters – the orc didn’t even see him', 'Once led a lost noble through a forest at night using only starlight and memory'],
      teammates: [
        { id: 'alistair_valemont', name: 'Alistair Valemont', role: 'Tank', rel: 'Trusts him completely; Lucien is his eyes.', avBg: '#2C3E50', avColor: '#E8E8E8', avText: 'AV' },
        { id: 'cecilia_valemont', name: 'Cecilia Valemont', role: 'Duelist', rel: 'Fond of her; she values his grounded advice.', avBg: '#922B21', avColor: '#F9E79F', avText: 'CV' },
        { id: 'elizabeth_valemont', name: 'Elizabeth Valemont', role: 'Mage', rel: 'Closest. He listens to her doubts. She trusts him implicitly.', avBg: '#512E5F', avColor: '#D2B4DE', avText: 'EV' }
      ],
      teamRole: 'Scout, tactician, and emotional support.',
      reputation: 'Underrated by nobles, respected by guild scouts. Known as "the one who actually knows the wild".',
      nickname: '"Luce" (used by Elizabeth only)',
      misc: { Hobbies: 'Tracking, birdwatching, reading travelogues', Likes: 'Forests, quiet evenings, hot soup', Dislikes: 'Noble balls, strict schedules, being inside too long', Trivia: 'He has walked the full perimeter of the kingdom’s capital – twice – just to know the terrain.' },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 287, 'Phys DEF': 267, 'Magic ATK': 187, 'Magic DEF': 243, Mana: 187, Speed: 423, 'Perception': 498, 'Stealth': 489 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Perception': '#27AE60', 'Stealth': '#1D9E75' }
      }
    }
  ];

  if (window.REGISTRY) {
    window.REGISTRY.registerParty('red_wings', 'Red Wings', members);
    console.log('Red Wings party loaded successfully.');
  } else {
    console.error('Registry core not loaded');
  }
})();