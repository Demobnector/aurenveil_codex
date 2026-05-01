// don-montajes-data.js
(function() {
  const don = {
    id:'don', name:'Don Montajes', title:'Young Blade of House Montajes', avBg:'#FAEEDA', avColor:'#633806', avText:'DM', accentColor:'#BA7517',
    rankLabel:'Gold', role:'DPS / Hybrid', category:'Solo',
    basic:{Age:'19',Gender:'Male',Height:'1.78 m',Race:'Human',Affiliation:'Adventurer\'s Guild / House Montajes',Rank:'Gold',Role:'DPS / Hybrid Halberdier'},
    appearance:'Young enough that people in the guild still do a double-take...',
    personality:'Earnest, composed, and carrying the low-level weight...',
    background:'The youngest of the Montajes family to register at the guild...',
    equipment:[{icon:'⚔️',name:'Halberd — "Longreach"',note:'A full-length halberd with balanced weight...'}],
    abilities:{'Halberd Arts':['Wide Sweep','Thrust Chain','Vault Strike'],'Mana Techniques':['Mana Coat','Guard Break','Stance Shift'],'Passive':['Noble\'s Bearing','Equipment Reading']},
    signature:{name:'Montajes Cross',desc:'A two-step halberd combination...'},
    strengths:['Well-rounded stat base','Reach advantage'], weaknesses:['Limited experience in high-stakes encounters','Noble identity is known'],
    strategy:'Control spacing with the halberd\'s reach...', bestAgainst:['Medium-range fighters'], struggleAgainst:['Close-range specialists'], feats:['Cleared a B-rank dungeon solo at 19'],
    teammates:[], teamRole:'Solo operative.', reputation:'Broadly respected and watched carefully.', nickname:'None yet.',
    misc:{Hobbies:'Equipment maintenance, dungeon cartography',Likes:'A well-balanced weapon',Dislikes:'Being underestimated',Trivia:'Memorized the entire Montajes material catalog by age twelve.'},
    stats:{rank:'Gold',values:{'Phys ATK':414,'Phys DEF':403,'Magic ATK':370,'Magic DEF':384,Mana:388,Speed:394,Strength:408,Charisma:424}, bars:{'Phys ATK':'#D85A30','Phys DEF':'#D85A30','Magic ATK':'#534AB7','Magic DEF':'#534AB7',Mana:'#7F77DD',Speed:'#1D9E75',Strength:'#BA7517',Charisma:'#BA7517'}}
  };
  if (window.REGISTRY) window.REGISTRY.registerAdventurer(don);
  else console.error('Registry core not loaded');
})();