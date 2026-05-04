// party/arcane-weavers-data.js
(function() {
  const members = [
    // ========== 1. CAELUS EMBERFALL (Fire Mage - Extreme Firepower) ==========
    {
      id: 'caelus_emberfall',
      name: 'Caelus Emberfall',
      title: 'The Crimson Conflagration',
      avBg: '#8B1A1A',
      avColor: '#FFD4D4',
      avText: 'CE',
      accentColor: '#E25822',
      rankLabel: 'Silver',
      role: 'Fire Mage / Artillery',
      category: 'Parties',
      basic: {
        Age: '24',
        Gender: 'Male',
        Height: '1.82 m',
        Race: 'Human',
        Affiliation: 'Arcane Weavers',
        Rank: 'Silver',
        Role: 'Fire Mage / Artillery'
      },
      appearance: 'Tall and lean, with sharp angular features and fiery red hair that he keeps cropped short. His eyes are a striking amber that seem to glow when he channels mana. He wears a dark crimson robe embroidered with flame patterns in gold thread, scorched at the cuffs from his own spells. A leather harness across his chest holds three mana crystals – his emergency reserves. His hands are calloused from years of spell-casting, and faint burn scars trace his forearms.',
      personality: 'Confident bordering on arrogant, Caelus believes overwhelming firepower solves most problems – and he is usually right. He is loud, passionate, and surprisingly friendly to those who can handle his intensity. He respects power above all else and has little patience for subtlety. When nervous, he fidgets with his mana crystals. Deep down, he fears running out of mana in a critical moment – the one thing fire cannot solve.',
      background: 'Born in a small mining town, Caelus discovered his affinity for fire when he accidentally set the family barn ablaze at age nine. A wandering pyromancer recognized his raw talent and took him as an apprentice. For seven years, he trained in remote mountains, learning to shape and control flames. He joined the guild two years ago and quickly made a name for himself by soloing a D‑rank fire‑weak monster. He sought out a party after realizing that even he has limits – and that a healer is nice to have when your own spells catch you.',
      equipment: [
        { icon: '🔥', name: 'Emberheart Focus', note: 'A polished ruby set in a brass ring, worn on his index finger. It amplifies fire magic by 25% but drains mana 15% faster.' },
        { icon: '💎', name: 'Mana Reserve Crystals (x3)', note: 'Small blue crystals that store emergency mana. Each provides 50 MP when crushed. He carries three at all times.' },
        { icon: '🧥', name: 'Crimson Robe of Cinders', note: 'A flame‑resistant robe embroidered with gold. Singed at the cuffs – he refuses to replace it. "It has character."' }
      ],
      abilities: {
        'Offensive Fire Magic': [
          'Flare Bolt – Rapid‑fire small fireballs. Low mana cost, high rate of fire. Great for suppression.',
          'Inferno Blast – A concentrated beam of fire that pierces through enemies and melts armor. High damage, high mana cost.',
          'Meteor Strike – Calls down a single massive fireball from the sky. Area of effect, destroys terrain. Takes 3 seconds to cast – vulnerable during charge.'
        ],
        'Utility Fire Magic': [
          'Flame Wall – Creates a line of fire on the ground that blocks enemy movement and deals damage over time.',
          'Smoke Screen – Fills an area with thick smoke, blinding enemies and providing cover for escape.'
        ],
        'Passive': [
          'Pyromancer’s Frenzy – Each successive fire spell costs 5% less mana and deals 5% more damage, stacking up to 3 times. Resets if he does not cast for 10 seconds.'
        ]
      },
      signature: {
        name: 'Prometheus’ Wrath',
        desc: 'Caelus channels every ounce of his remaining mana into a single, cataclysmic explosion centered on himself. Deals 500 damage to all enemies within 20 meters, but leaves him completely drained (0 mana, cannot cast for 2 minutes). Friendly fire – do not stand near him when he does this.'
      },
      strengths: [
        'Highest damage output in the party',
        'Excellent crowd control with area spells',
        'Can melt armor and destroy structures',
        'Confident – rarely hesitates'
      ],
      weaknesses: [
        'Mana hungry – burns out quickly if not careful',
        'Low physical defense – robes offer little protection',
        'Fire immunity ruins his day',
        'Impulsive – sometimes casts before tank is ready'
      ],
      strategy: 'Stay at maximum range, open with Flare Bolt to build Frenzy stacks, then unleash Inferno Blast on priority targets. Use Flame Wall to control chokepoints. Save Meteor Strike for bosses. If overwhelmed, use Prometheus’ Wrath as a last resort.',
      bestAgainst: ['Fire‑weak enemies', 'Armored foes (melts armor)', 'Giant creatures (easy to hit)'],
      struggleAgainst: ['Fire‑immune enemies', 'Fast enemies that close distance', 'Reflective magic shields'],
      feats: [
        'Soloed a D‑rank Ice Troll (triple weakness to fire) in under 30 seconds',
        'Melted through a reinforced steel door that an entire party of physical fighters could not breach',
        'Survived a mana burnout – collapsed for three days, but woke up with 15% higher mana capacity'
      ],
      teammates: [
        { id: 'thalia_brookstone', name: 'Thalia Brookstone', role: 'Healing Mage', rel: 'Grateful for her healing. He once caught himself on fire and she saved his hands.', avBg: '#4A7A5A', avColor: '#E8FFE8', avText: 'TB' },
        { id: 'sera_valoris', name: 'Sera Valoris', role: 'Buff Mage', rel: 'Appreciates her speed buffs – faster casting means more fire.', avBg: '#6A4A8A', avColor: '#F0E0FF', avText: 'SV' }
      ],
      teamRole: 'Primary damage dealer and area denial.',
      reputation: 'Known in the guild as "that loud fire mage with the singed sleeves." Respected for his power, but some find him exhausting.',
      nickname: '"The Walking Inferno" (self‑given, others just call him Caelus)',
      misc: {
        Hobbies: 'Shaping fire into small sculptures, collecting rare mana crystals, arm‑wrestling (he always loses)',
        Likes: 'Grilled meat, warm weather, being right',
        Dislikes: 'Water magic, being ignored, fire resistance potions',
        Trivia: 'He once sneezed while casting Flare Bolt and set a guild clerk’s paperwork on fire. He still apologizes every time he sees her.'
      },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 0, 'Phys DEF': 187, 'Magic ATK': 487, 'Magic DEF': 243, Mana: 512, Speed: 312, 'Fire Mastery': 543, 'Mana Capacity': 498 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Fire Mastery': '#E25822', 'Mana Capacity': '#5A3A8A' }
      }
    },

    // ========== 2. THALIA BROOKSTONE (Healing Mage) ==========
    {
      id: 'thalia_brookstone',
      name: 'Thalia Brookstone',
      title: 'The Gentle Spring',
      avBg: '#4A7A5A',
      avColor: '#E8FFE8',
      avText: 'TB',
      accentColor: '#6AAA7A',
      rankLabel: 'Silver',
      role: 'Healing Mage / Support',
      category: 'Parties',
      basic: {
        Age: '22',
        Gender: 'Female',
        Height: '1.65 m',
        Race: 'Half-Elf',
        Affiliation: 'Arcane Weavers',
        Rank: 'Silver',
        Role: 'Healing Mage / Support'
      },
      appearance: 'Slender and graceful, with long chestnut hair she keeps in a practical braid. Her eyes are a soft leaf‑green, warm and comforting. She wears cream‑colored robes with green embroidery – simple, practical, and always clean. A wooden staff topped with a glowing green crystal hangs across her back. Small pouches on her belt hold dried herbs for non‑magical remedies.',
      personality: 'Gentle, patient, and endlessly compassionate. Thalia believes that everyone deserves a second chance – even enemies, though she will heal her party first. She speaks softly and rarely raises her voice. She is the emotional core of the party, mediating arguments and soothing wounded egos. Under stress, she becomes quieter and more focused, but never panics.',
      background: 'Thalia was raised in a small temple dedicated to a nature deity, where she learned both herbalism and divine healing magic. Her half‑elf heritage gives her a longer lifespan than her human companions, a fact she does not dwell on. She left the temple to see the world and found her calling in keeping reckless adventurers alive. She joined the Arcane Weavers because she saw potential in Caelus – and because someone needs to heal him when his own spells backfire.',
      equipment: [
        { icon: '🪄', name: 'Verdant Staff of Renewal', note: 'A wooden staff topped with a glowing green crystal. Doubles as a focus for healing spells – increases healing output by 25%.' },
        { icon: '🌿', name: 'Herbalist’s Kit', note: 'Dried herbs, bandages, and small vials of salve. Used for non‑magical healing when mana runs low.' },
        { icon: '📿', name: 'Pendant of the Grove', note: 'A wooden pendant carved into a leaf shape. A gift from her temple. It has no magical properties – but she never takes it off.' }
      ],
      abilities: {
        'Healing Magic': [
          'Spring’s Kiss – Heals a single target for 150 HP. Low mana cost. Her most used spell.',
          'Circle of Renewal – AoE heal that affects all allies within 15 meters. Heals 80 HP per second for 5 seconds. High mana cost.',
          'Revitalize – Restores a downed ally to 50% HP. Can only be used once per battle per ally. Long cast time (5 seconds).'
        ],
        'Cleansing Magic': [
          'Purify – Removes poison, disease, and minor curses. Essential for dungeon diving.',
          'Cleanse Burn – Specifically removes burn effects and heals fire damage over time.'
        ],
        'Passive': [
          'Gentle Touch – Thalia’s healing spells also remove minor pain and reduce stress, granting +10% morale to healed allies for 1 minute.'
        ]
      },
      signature: {
        name: 'Life’s Blessing',
        desc: 'Thalia channels pure life energy into a single ally, fully restoring their HP and removing all negative effects. If the target was downed, they revive at 100% HP. This spell has a 10‑minute cooldown and leaves Thalia exhausted (50% mana, cannot cast for 30 seconds).'
      },
      strengths: [
        'Best healer in the party by far',
        'Can remove most status effects',
        'Calm under pressure – does not panic',
        'Excellent bedside manner – allies trust her'
      ],
      weaknesses: [
        'No offensive magic – cannot defend herself',
        'Frail – low physical defense',
        'Healing attracts enemy attention',
        'Her compassion can be exploited (she will heal enemies if asked)'
      ],
      strategy: 'Stay behind Sera’s barriers. Heal priority: Caelus (he hurts himself) → Kaelen (frontline) → Sera → herself. Save Revitalize for emergencies. Never let Caelus drop below 30% HP – he will do something reckless.',
      bestAgainst: ['Poison enemies (she can cleanse)', 'Undead (healing spells damage them)', 'Any encounter where allies take damage'],
      struggleAgainst: ['Burst damage (cannot out‑heal one‑shots)', 'Silence effects', 'Enemies that target healers first'],
      feats: [
        'Kept Caelus alive after his Prometheus’ Wrath left him at 1 HP and burning – the heal was so fast he did not even scar',
        'Purified a village’s water supply after a necromancer poisoned it, saving over 200 people',
        'Has never lost a patient (though some came very close)'
      ],
      teammates: [
        { id: 'caelus_emberfall', name: 'Caelus Emberfall', role: 'Fire Mage', rel: 'She calls him "my favorite problem." He calls her "the reason I still have eyebrows."', avBg: '#8B1A1A', avColor: '#FFD4D4', avText: 'CE' },
        { id: 'sira_valoris', name: 'Sera Valoris', role: 'Buff Mage', rel: 'Close friends. Sera makes her faster, she keeps Sera alive.', avBg: '#6A4A8A', avColor: '#F0E0FF', avText: 'SV' }
      ],
      teamRole: 'Primary healer and status cleanser.',
      reputation: 'Well‑liked by everyone who meets her. The guild clerks have a betting pool on how long until she heals an enemy – current odds favor "eventually."',
      nickname: '"The Green Lady" (among grateful villagers she has treated)',
      misc: {
        Hobbies: 'Herbalism, pressing flowers, writing letters home to the temple',
        Likes: 'Fresh tea, quiet mornings, peaceful resolutions',
        Dislikes: 'Needless violence, mushrooms (they are suspicious), getting her robes dirty',
        Trivia: 'She once healed a goblin that was attacking her party. The goblin was so confused it ran away and never came back.'
      },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 0, 'Phys DEF': 187, 'Magic ATK': 243, 'Magic DEF': 387, Mana: 487, Speed: 298, 'Healing Output': 523, 'Cleansing Power': 412 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Healing Output': '#6AAA7A', 'Cleansing Power': '#4A8A5A' }
      }
    },

    // ========== 3. SERA VALORIS (Buff Mage) ==========
    {
      id: 'sera_valoris',
      name: 'Sera Valoris',
      title: 'The Gilded Catalyst',
      avBg: '#6A4A8A',
      avColor: '#F0E0FF',
      avText: 'SV',
      accentColor: '#B87DC9',
      rankLabel: 'Silver',
      role: 'Buff Mage / Force Multiplier',
      category: 'Parties',
      basic: {
        Age: '21',
        Gender: 'Female',
        Height: '1.58 m',
        Race: 'Human',
        Affiliation: 'Arcane Weavers',
        Rank: 'Silver',
        Role: 'Buff Mage / Force Multiplier'
      },
      appearance: 'Petite and energetic, with platinum‑blonde hair styled in twin braids adorned with small brass beads. Her eyes are a striking lavender – a sign of her innate enchantment affinity. She wears a form‑fitting purple tunic over dark leggings, with a short cape that billows dramatically when she wants it to (she practiced). Brass bracelets cover both wrists, each inscribed with runes of empowerment.',
      personality: 'Bubbly, optimistic, and impossibly energetic. Sera believes everyone can be better – and she has the spells to prove it. She talks fast, moves faster, and is always looking for the next way to improve her party’s performance. She keeps a small notebook of spell combinations and test results. Under pressure, she talks even faster – a tell that she is nervous, but she never stops casting.',
      background: 'Sera was born into a family of enchanting artisans who craft magical items for adventurers. She showed an early talent for augmentation magic – enhancing weapons, armor, and people. Dissatisfied with just enchanting items, she joined the guild to test her buffs on real adventurers. She sought out a party that could appreciate her work and found the Arcane Weavers – where every member benefits from her enhancements.',
      equipment: [
        { icon: '⌛', name: 'Enchanter’s Brass Bracelets (pair)', note: 'Brass bangles inscribed with empowerment runes. Channel her buff spells. Without them, her range and duration are halved.' },
        { icon: '📘', name: 'Sera’s Spell Journal', note: 'A worn notebook filled with test results, spell combinations, and notes like "Caelus + Haste + Bravery = 312% damage output but 0% mana left."' },
        { icon: '🧣', name: 'Lavender Capelet', note: 'A short purple cape that flutters when she casts. She insists it helps her focus. It probably does not – but it looks good.' }
      ],
      abilities: {
        'Offensive Buffs': [
          'Bravery – Increases damage output by 25% for 30 seconds. Stacks with other buffs.',
          'Precision’s Blessing – Increases critical hit chance by 20% for 30 seconds.',
          'Elemental Infusion – Adds 20 bonus damage of a chosen element to an ally’s attacks for 30 seconds.'
        ],
        'Defensive Buffs': [
          'Stone Skin – Reduces incoming physical damage by 25% for 30 seconds.',
          'Verdant Aegis – Increases magic defense by 25% for 30 seconds.',
          'Haste – Increases movement and attack speed by 30% for 30 seconds.'
        ],
        'Passive': [
          'Catalyst Resonance – Sera’s buffs last 10% longer and are 10% stronger when cast on party members she has a positive relationship with (all of them).'
        ]
      },
      signature: {
        name: 'Grand Empowerment',
        desc: 'Sera channels for 4 seconds, then releases a wave of golden light, applying all of her buffs to the entire party simultaneously for 30 seconds. Afterwards, she is exhausted (0 mana, cannot cast for 1 minute). The empowered party deals approximately 200% normal damage during this window – enough to end most fights.'
      },
      strengths: [
        'Transforms the entire party’s effectiveness',
        'No offensive magic needed – she makes others better',
        'Excellent at adapting buffs to situations',
        'High utility – can fill gaps in party composition'
      ],
      weaknesses: [
        'Cannot defend herself – no offensive or healing spells',
        'Frail – lowest defense in the party',
        'Buffs require mana management – cannot spam',
        'Overly optimistic – sometimes underestimates danger'
      ],
      strategy: 'Apply Haste and Bravery to Caelus first (more fire faster). Apply Stone Skin to Kaelen (frontline defense). Apply Precision to Thalia (faster healing). Rotate buffs based on enemy type. Save Grand Empowerment for boss fights.',
      bestAgainst: ['Long fights (buffs shine over time)', 'Bosses (Grand Empowerment burst)', 'Any situation where party needs an edge'],
      struggleAgainst: ['Dispel magic enemies (remove her buffs)', 'Silence effects', 'Fights where she cannot stay safe'],
      feats: [
        'Designed a buff rotation that increased the party’s boss kill speed by 150%',
        'Once kept Haste on Caelus for a full 5 minutes without dropping concentration – her personal record',
        'Her spell journal is now used as a reference by junior enchanters at her family’s shop'
      ],
      teammates: [
        { id: 'caelus_emberfall', name: 'Caelus Emberfall', role: 'Fire Mage', rel: 'Her favorite test subject. She tracks his damage output obsessively.', avBg: '#8B1A1A', avColor: '#FFD4D4', avText: 'CE' },
        { id: 'thalia_brookstone', name: 'Thalia Brookstone', role: 'Healing Mage', rel: 'Her closest friend. Sera makes her faster; Thalia keeps her alive.', avBg: '#4A7A5A', avColor: '#E8FFE8', avText: 'TB' }
      ],
      teamRole: 'Primary buffer and force multiplier.',
      reputation: 'Known in the guild as "the girl with the notebook." Some adventurers rent her buff services for difficult quests – she charges reasonable fees.',
      nickname: '"The Catalyst" (her preferred title) or "Sera the Buff" (less flattering)',
      misc: {
        Hobbies: 'Journaling, testing new spell combinations, optimizing routines',
        Likes: 'Numbers, efficiency, seeing her party succeed',
        Dislikes: 'Imprecision, wasting mana, lack of data',
        Trivia: 'She once spent three hours calculating the optimal buff rotation for a 30‑second fight. The fight lasted 12 seconds. She was delighted.'
      },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 0, 'Phys DEF': 143, 'Magic ATK': 312, 'Magic DEF': 343, Mana: 456, Speed: 387, 'Buff Strength': 498, 'Buff Duration': 467 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Buff Strength': '#B87DC9', 'Buff Duration': '#9A6AB0' }
      }
    },

    // ========== 4. KAELEN SHATTERSTONE (Earth/Water Mage - Defense) ==========
    {
      id: 'kaelen_shatterstone',
      name: 'Kaelen Shatterstone',
      title: 'The Tidebringer',
      avBg: '#3A6B5E',
      avColor: '#D4F5E8',
      avText: 'KS',
      accentColor: '#4A8A7A',
      rankLabel: 'Silver',
      role: 'Earth/Water Mage / Defense',
      category: 'Parties',
      basic: {
        Age: '27',
        Gender: 'Male',
        Height: '1.75 m',
        Race: 'Human',
        Affiliation: 'Arcane Weavers',
        Rank: 'Silver',
        Role: 'Earth/Water Mage / Defense'
      },
      appearance: 'Stocky and broad‑shouldered, with a thick beard and weathered skin. His hair is dark brown, cropped close. His eyes are a deep sea‑green, calm and steady. He wears earth‑toned robes – browns, dark greens, and slate – with leather reinforcements at the shoulders and knees. A pouch on his belt holds smooth river stones, each etched with a protection rune.',
      personality: 'Calm, methodical, and quietly dependable. Kaelen speaks slowly and thinks before he acts. He is the oldest member of the party and serves as its anchor, both literally (with his defensive spells) and emotionally. He has a dry, understated sense of humor that catches people off guard. Under pressure, he becomes even calmer – almost meditative.',
      background: 'Kaelen was a stonemason before he discovered his magical affinity. He could feel the stone’s "memory" – where it had been, what it had seen. A travelling geomancer recognized the talent and trained him in earth and water magic. He spent years learning to shape stone and command water. He joined the Arcane Weavers because he recognized that raw power (Caelus) needs a steady hand – and because he wanted to protect something instead of just building walls.',
      equipment: [
        { icon: '🪨', name: 'Runestones of Warding (pouch)', note: 'Smooth stones etched with protection runes. He places them on the ground to anchor his defensive spells.' },
        { icon: '💧', name: 'Canteen of Living Water', note: 'A small metal flask filled with magically enhanced water. Doubles as a focus for water spells. Never runs dry.' },
        { icon: '🧱', name: 'Geomancer’s Mantle', note: 'A heavy robe woven with earth elemental threads. Increases earth spell effectiveness by 20%.' }
      ],
      abilities: {
        'Defensive Earth Magic': [
          'Stone Wall – Creates a 3‑meter wide, 2‑meter high wall of solid stone. Blocks enemies, provides cover, lasts 2 minutes.',
          'Earthen Armor – Coats an ally in stone, reducing physical damage by 40% for 30 seconds. Slows movement by 10% (worth it).',
          'Tremor Step – Stomps the ground, creating a shockwave that staggers nearby enemies for 3 seconds.'
        ],
        'Support Water Magic': [
          'Healing Rain – A gentle rain that heals 30 HP per second for 10 seconds in a 10‑meter radius. Stacks with Thalia’s healing.',
          'Cleanse Flow – Removes dirt, poison, and minor curses. Lower efficiency than Thalia’s version, but useful in emergencies.',
          'Water Shield – Creates a hovering sphere of water that blocks 200 damage before breaking.'
        ],
        'Passive': [
          'Stone’s Patience – Kaelen’s defensive spells last 20% longer if he remains stationary.'
        ]
      },
      signature: {
        name: 'Living Bastion',
        desc: 'Kaelen raises a massive, multi‑layered barrier of stone and water around the entire party. Blocks 1000 damage total and lasts 1 minute. Can be cast even while the party is moving (the barriers follow them). Does not require him to remain stationary. Cooldown: 10 minutes.'
      },
      strengths: [
        'Best defense in the party – shields and armor',
        'Can block enemy advances with stone walls',
        'Excellent battlefield control (terrain manipulation)',
        'Secondary healing – can assist Thalia'
      ],
      weaknesses: [
        'Low damage output – not an offensive specialist',
        'Earth spells are slow – enemies can dodge',
        'Water spells require water source (or his canteen)',
        'His calmness can be mistaken for passivity'
      ],
      strategy: 'Open with Earthen Armor on himself and Kaelen (yes, same name as him). Use Stone Wall to control enemy approach. Apply Water Shield to Thalia and Sera (squishy targets). Use Tremor Step to stagger enemies before Caelus’s Meteor Strike. Save Living Bastion for boss fights.',
      bestAgainst: ['Physical attackers (stone blocks them)', 'Large groups (tremor stuns)', 'Enemies with predictable patterns'],
      struggleAgainst: ['Magic penetration (shields less effective)', 'Fast enemies that bypass barriers', 'Enemies that burrow'],
      feats: [
        'Held a collapsing cave ceiling long enough for his previous party to escape – the Mage Guild awarded him a medal',
        'Created a bridge of stone across a 50‑meter chasm in under 3 minutes – the party walked across safely',
        'Diverted a flash flood using water magic, saving a village downstream'
      ],
      teammates: [
        { id: 'caelus_emberfall', name: 'Caelus Emberfall', role: 'Fire Mage', rel: 'Respects his power, but worries about his recklessness. "Fire destroys; stone endures."', avBg: '#8B1A1A', avColor: '#FFD4D4', avText: 'CE' },
        { id: 'thalia_brookstone', name: 'Thalia Brookstone', role: 'Healing Mage', rel: 'Gentle friendship. He supplies water for her herbs, she heals his bruises.', avBg: '#4A7A5A', avColor: '#E8FFE8', avText: 'TB' }
      ],
      teamRole: 'Primary defender and battlefield controller.',
      reputation: 'Quietly respected. Other mages seek his advice on defensive spellcraft. Clerks appreciate that he never causes trouble.',
      nickname: '"The Wall" (earned, not claimed)',
      misc: {
        Hobbies: 'Stone carving, meditating by rivers, collecting unusual rocks',
        Likes: 'Stillness, fresh water, a good night’s sleep',
        Dislikes: 'Seismic activity, fire magic (destabilizes his walls), hurry',
        Trivia: 'He once carved a perfect statue of a guildmaster’s face from memory. The guildmaster kept it.'
      },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 187, 'Phys DEF': 487, 'Magic ATK': 343, 'Magic DEF': 456, Mana: 423, Speed: 243, 'Shield Strength': 512, 'Terrain Control': 478 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Shield Strength': '#4A8A7A', 'Terrain Control': '#3A6B5E' }
      }
    },

    // ========== 5. MORWEN SILVERLEAF (Defensive Mage - Barriers) ==========
    {
      id: 'morwen_silverleaf',
      name: 'Morwen Silverleaf',
      title: 'The Aegis Weaver',
      avBg: '#2A5A6A',
      avColor: '#D0F0FF',
      avText: 'MS',
      accentColor: '#5AA0B0',
      rankLabel: 'Silver',
      role: 'Barrier Mage / Abjuration',
      category: 'Parties',
      basic: {
        Age: '20',
        Gender: 'Female',
        Height: '1.62 m',
        Race: 'Elf',
        Affiliation: 'Arcane Weavers',
        Rank: 'Silver',
        Role: 'Barrier Mage / Abjuration'
      },
      appearance: 'Petite and elfin (appropriately), with silver‑blonde hair that falls past her shoulders. Her eyes are a pale, almost translucent blue – typical of high elves. She wears white and silver robes with blue trim, embroidered with geometric barrier patterns. A silver circlet rests on her forehead, set with a pale blue moonstone. She moves with elven grace, rarely making noise.',
      personality: 'Reserved and analytical, Morwen watches before she acts. She speaks precisely, choosing each word carefully. She is not cold – merely focused, believing that emotional displays waste mental energy better spent on spells. Among the party, she is closest to Sera, whose energy balances her reserve. Under pressure, she becomes even quieter, retreating into pure concentration.',
      background: 'Morwen was trained in traditional elven abjuration – magic of protection, warding, and negation. She left her people to experience the wider world and was shocked by how fragile humans are. She joined the Arcane Weavers specifically to protect them, viewing it as a worthy challenge. She is still adjusting to human lifespans – she is 20, which is young for an elf, but she is already more composed than most adult humans.',
      equipment: [
        { icon: '👑', name: 'Silver Circlet of Warding', note: 'A delicate circlet with a pale moonstone. Amplifies barrier spells by 30%. Without it, her shields are half as strong.' },
        { icon: '📜', name: 'Spell Scroll of Emergency Recall', note: 'A single‑use scroll that teleports the party to a predetermined safe location. She has never used it. She hopes she never has to.' },
        { icon: '🧣', name: 'Silver-thread Mantle', note: 'A white mantle threaded with silver and enchanted with minor protection. Adds to her own defense.' }
      ],
      abilities: {
        'Barrier Magic': [
          'Personal Aegis – A personal barrier that absorbs 300 damage. Recharges at 50 HP per minute out of combat.',
          'Party Ward – Creates a shared barrier that absorbs 150 damage per party member. Cannot be cast on herself alone.',
          'Dome of Protection – A stationary 10‑meter radius dome that blocks all incoming projectiles and reduces magical damage by 50%. Lasts 1 minute.'
        ],
        'Negation Magic': [
          'Spell Break – Attempts to cancel an enemy’s spell. Success rate depends on relative magic power (70% vs same rank, 30% vs higher rank).',
          'Dispel Ward – Removes magical effects from an area, including enemy buffs and harmful terrain.'
        ],
        'Passive': [
          'Elven Composure – Morwen is immune to fear effects and her barriers are 10% stronger when she is not surprised.'
        ]
      },
      signature: {
        name: 'Aegis of the Silverleaf',
        desc: 'Morwen creates a massive, shimmering barrier around the entire party that absorbs 2000 total damage. While the barrier holds, party members take no damage. The barrier lasts 30 seconds or until broken. Cooldown: 15 minutes. Morwen is exhausted afterwards (50% mana, cannot cast for 1 minute).'
      },
      strengths: [
        'Best barrier specialist in the party',
        'Can negate enemy spells',
        'Protects against projectiles and area attacks',
        'Elven composure – never panics'
      ],
      weaknesses: [
        'Barriers have limited capacity – can be overwhelmed',
        'Low HP – if barrier breaks, she is vulnerable',
        'No offensive magic – cannot fight back',
        'Elven reserve can be mistaken for aloofness'
      ],
      strategy: 'Open with Personal Aegis on herself. Apply Party Ward before combat. Use Dome of Protection against archers or enemy mages. Save Spell Break for enemy nukes. Use Aegis of the Silverleaf for boss ultimate attacks.',
      bestAgainst: ['Archers (projectile denial)', 'Enemy mages (spell break)', 'Area attacks (dome reduces damage)'],
      struggleAgainst: ['Melee rushers (dome ineffective)', 'Multiple spellcasters (can only break one)', 'Barrier‑piercing attacks'],
      feats: [
        'Shielded her previous party from a dragon’s breath weapon – the barrier held for 3 seconds, just long enough for everyone to scatter',
        'Negated a necromancer’s mass raise spell, preventing 50 skeletons from animating',
        'Her personal barrier has never been broken (she is very careful)'
      ],
      teammates: [
        { id: 'sera_valoris', name: 'Sera Valoris', role: 'Buff Mage', rel: 'Fascinated by her energy. Sera calls her "my quiet backup."', avBg: '#6A4A8A', avColor: '#F0E0FF', avText: 'SV' },
        { id: 'kaelen_shatterstone', name: 'Kaelen Shatterstone', role: 'Earth/Water Mage', rel: 'Respects her calmness. They often meditate together before missions.', avBg: '#3A6B5E', avColor: '#D4F5E8', avText: 'KS' }
      ],
      teamRole: 'Primary barrier caster and spell negation. Protects the party from burst damage.',
      reputation: 'Less known than Caelus, but highly respected among mages who understand abjuration. The Mage Guild has offered her a teaching position (she declined).',
      nickname: '"The Shield Elf" (accurate but unimaginative)',
      misc: {
        Hobbies: 'Weaving (cloth, not magic), stargazing, calligraphy',
        Likes: 'Completeness, symmetry, silence',
        Dislikes: 'Unexpected loud noises, broken promises, disorganization',
        Trivia: 'She has a small collection of shields from different cultures – not magical, just aesthetic.'
      },
      stats: {
        rank: 'Silver',
        values: { 'Phys ATK': 0, 'Phys DEF': 343, 'Magic ATK': 312, 'Magic DEF': 487, Mana: 498, Speed: 312, 'Barrier Strength': 543, 'Spell Negation': 467 },
        bars: { 'Phys ATK': '#D85A30', 'Phys DEF': '#D85A30', 'Magic ATK': '#534AB7', 'Magic DEF': '#534AB7', Mana: '#7F77DD', Speed: '#1D9E75', 'Barrier Strength': '#5AA0B0', 'Spell Negation': '#2A5A6A' }
      }
    }
  ];

  if (window.REGISTRY) {
    window.REGISTRY.registerParty('arcane_weavers', 'Arcane Weavers', members);
    console.log('Arcane Weavers party loaded successfully.');
  } else {
    console.error('Registry core not loaded');
  }
})();