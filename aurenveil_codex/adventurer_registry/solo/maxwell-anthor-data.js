// solo/maxwell-anthor-data.js
(function() {
  const maxwellAnthor = {
    id: 'maxwell_anthor',
    name: 'Maxwell Anthor',
    title: 'The Distant Wanderer · Cartographer of the Unknown',
    avBg: '#FAEED6',
    avColor: '#6B4A1A',
    avText: 'MA',
    accentColor: '#D4A05A',
    rankLabel: 'Diamond',
    role: 'Explorer / Halberdier',
    category: 'Solo',
    basic: {
      Age: '32',
      Gender: 'Male',
      Height: '1.81 m',
      Race: 'Human',
      Affiliation: 'Adventurer\'s Guild — Special Operations (Solo Exploration Division)',
      Rank: 'Diamond',
      Role: 'Explorer / Halberdier'
    },
    appearance: 'Tall and lean with the weathered look of someone who has spent years in the wilderness. Sun-kissed blonde hair kept short and practical, often slightly wind-tousled. Dark brown eyes that carry the calm confidence of someone who has survived situations most adventurers only hear about in warnings. Wears light rogue-style exploration gear – reinforced leather vest over a breathable linen shirt, baggy pants with reinforced knees, soft-soled boots built for silent movement across varied terrain. A well-worn leather satchel hangs at his waist, containing dried rations, basic medical supplies, and his expedition notebooks. Carries no visible weapon – those who know him understand he doesn\'t need one. A faint silver bracelet on his left wrist houses a custom detection enchantment that vibrates subtly when hostile entities are near.',
    personality: 'Calm, observant, and deeply curious about the world. He speaks with the measured cadence of someone used to being alone for long stretches. Not cold – just comfortable with silence. He genuinely loves discovery for its own sake, not for fame or profit. The guild values him because he returns with maps, not because he clears dungeons for glory. He is methodical in preparation but flexible in execution – a necessary trait when you never know what lies beyond the next ridge. Paperwork frustrates him because it means sitting still. He has a dry sense of humor that surfaces when least expected, often at his own expense.',
    background: 'From childhood, Maxwell was drawn to the unknown. He explored forests and caves as a boy, ignoring warnings about danger. His natural survival instincts and ability to navigate unmarked terrain earned him early recognition at the guild. Rather than pursue standard dungeon clearing, he petitioned for a specialized role: long-range exploration and cartography. The guild, recognizing his unique value, granted him Solo Exploration Division status – one of only a handful of adventurers trusted to operate independently beyond kingdom borders. Over years of expeditions, he has mapped the 200 km radius around the kingdom, discovered new environments, catalogued unknown species, and identified rare material deposits that advanced the kingdom\'s technology. His most recent discovery – the Abysmal Dungeon – is his greatest find and his greatest warning. He reported its existence but refused to enter deeper, marking it as "Do Not Engage" on his maps. The guild trusts his judgment.',
    equipment: [
      { icon: '🗡️', name: 'Conjured Halberd (Weapon Inventory)', note: 'Through his unique magic, Maxwell can summon a durable halberd from an extradimensional space. The weapon materializes in his hands instantly, allowing him to be unencumbered while traveling. The halberd itself is standard but well-balanced, created from stored mana and physical components he has attuned over time.' },
      { icon: '⌚', name: 'Detection Bracelet', note: 'A silver bracelet enchanted with a custom proximity alert. It vibrates with increasing intensity based on nearby hostile presence – subtle at first, violent when danger is imminent. Saved his life more times than he can count.' },
      { icon: '🎒', name: 'Expedition Satchel', note: 'Magically reinforced leather satchel with waterproof lining and weight-distribution enchantments. Contains: dried rations (2 weeks), basic medical kit, mana crystals, quills and inkpots, rolled parchment, compass, whetstone, spare boot laces, a small notebook for field observations, and three unlabeled vials he refuses to explain.' },
      { icon: '📜', name: 'Field Journals (Collection)', note: 'Twenty-three notebooks filled with hand-drawn maps, elevation sketches, environmental notes, creature observations, and material samples. His journals are considered kingdom treasures; copies are held in the royal archives.' }
    ],
    abilities: {
      'Healing Magic': ['Heal — single-target restoration, moderate efficiency, self-cast primarily'],
      'Buff Magic': ['Strength Buff — enhances physical output', 'Senses Buff — sharpens perception and reaction time', 'Speed Buff — increases movement and attack speed', 'Durability Buff — reinforces body against damage'],
      'Defensive Magic': ['Divine Shield — short-duration invulnerability against a single attack', 'Barrier — stationary magic wall, lasts 30 seconds', 'Dark Bind — shadow-based restraint', 'Light Bind — holy-based restraint'],
      'Unique Magic': ['Weapon Inventory — stores and summons a conjured halberd from extradimensional space; weapon materializes instantly in hand'],
      'Passive Magic': ['Presence Detection — senses living creatures within 50 m', 'Trap Detection — identifies magical trap signatures at 20 m', 'Light — ambient illumination, low mana cost']
    },
    signature: {
      name: 'Emergence Strike',
      desc: 'Maxwell summons his halberd mid-stride while closing distance, using the instant materialization as a surprise element. The weapon appears already mid-swing, catching enemies off-guard. A technique only possible because he carries no visible weapon – enemies read him as unarmed until the blade materializes in their space.'
    },
    strengths: [
      'Exceptional survival instincts – has walked away from encounters that should have killed him',
      'Versatile toolkit – healing, buffs, restraints, and detection cover most exploration needs',
      'Unmatched expedition endurance – can operate for weeks without resupply',
      'Guild trust – his reports are taken seriously, and he has authority to mark areas as off-limits'
    ],
    weaknesses: [
      'No heavy armor – relies entirely on positioning and detection to avoid ambushes',
      'Offensive magic is nonexistent – his combat style is purely physical with buff support',
      'Solo limitation – no backup means a single mistake can be fatal',
      'Weapon Inventory has a limit – the halberd is conjured, not indestructible; if destroyed, must wait 24 hours to resummon'
    ],
    strategy: 'Avoid engagement when possible. Observe, document, and retreat. When combat is unavoidable: buff preemptively, summon weapon, end the fight quickly or create distance. He never stays in a losing battle – discretion is his primary survival tool.',
    bestAgainst: ['Mid-tier creatures that can be killed quickly', 'Encounters he has prepared for', 'Terrain he has scouted ahead of time'],
    struggleAgainst: ['Enemies that ambush him first', 'High-speed opponents he cannot outrun', 'Magical area attacks he cannot detect in time', 'Large swarm encounters'],
    feats: [
      'Discovered the Abysmal Dungeon (S-rank minimum estimated difficulty) – first and only documented return from its entrance',
      'Mapped over 200 km radius around the kingdom – the most complete wilderness cartography in guild history',
      'Identified 14 new material deposits, leading to technological advancements in alchemy and enchantment',
      'First adventurer to solo-survive a Gold-rank encounter while unarmed (pre-halberd training)',
      'Has not been home in over 8 months – currently on an extended northern expedition'
    ],
    teammates: [],
    teamRole: 'Independent operative. Occasionally partners with researchers but works best alone.',
    reputation: 'Respected across guild ranks as the authority on uncharted territory. His maps are used by traders, military scouts, and adventurers. Younger adventurers sometimes joke that he is "lost" – he ignores them. Senior guild staff consider him indispensable.',
    nickname: '"The Distant Wanderer." He finds it mildly amusing but doesn\'t use it himself.',
    misc: {
      Hobbies: 'Cartography, journal-keeping, stargazing during expeditions',
      Likes: 'Unmarked trails, quiet campsites, discovering something new on a map',
      Dislikes: 'Desk duty, pointless meetings, adventurers who rush into unknown areas unprepared',
      Trivia: 'He can estimate his position within 500 m in any terrain without a compass or map, using only environmental cues and the stars.'
    },
    stats: {
      rank: 'Diamond',
      values: {
        'Phys ATK': 587,
        'Phys DEF': 423,
        'Magic ATK': 487,
        'Magic DEF': 452,
        Mana: 612,
        Speed: 523,
        'Survival Instinct': 684,
        'Expedition Endurance': 638,
        'Halberd Precision': 576
      },
      bars: {
        'Phys ATK': '#D85A30',
        'Phys DEF': '#D85A30',
        'Magic ATK': '#534AB7',
        'Magic DEF': '#534AB7',
        Mana: '#7F77DD',
        Speed: '#1D9E75',
        'Survival Instinct': '#F9A825',
        'Expedition Endurance': '#F9A825',
        'Halberd Precision': '#BA7517'
      }
    }
  };

  if (window.REGISTRY) {
    window.REGISTRY.registerAdventurer(maxwellAnthor);
    console.log('Maxwell Anthor (Distant Wanderer) loaded successfully.');
  } else {
    console.error('Registry core not loaded. Make sure registry-core.html is loaded first.');
  }
})();