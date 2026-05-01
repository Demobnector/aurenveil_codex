// unregistered/sven-data.js
(function() {
  const sven = {
    id:'sven', name:'Sven Miory', title:'Dragon Slayer',
    avBg:'#FAECE7', avColor:'#4A1B0C', avText:'SV', accentColor:'#D85A30',
    rankLabel:'~Diamond', role:'Berserker / Greatswordsman', category:'Unregistered',
    basic:{Age:'37',Gender:'Male',Height:'1.96 m',Race:'Human',Affiliation:'None',Rank:'~Diamond (estimated by kingdom surveyors)',Role:'Berserker / Greatswordsman'},
    appearance:'Built like something that has survived things...', personality:'Sparse with words...', background:'Sven\'s village was destroyed by a dragon when he was nineteen...',
    equipment:[{icon:'⚔️',name:'Greatsword — "Ashmark"',note:'A greatsword of exceptional quality that Sven forged himself...'},{icon:'🧥',name:'Reinforced Leather Layering',note:'Practical over ceremonial...'},{icon:'🪨',name:'Wyvern Tooth Pendant',note:'A single wyvern tooth on a cord...'}],
    abilities:{'Greatsword Arts':['Dragon Cleave','Spine Drive','Counter Surge'],'Berserker Arts':['Pain Resistance','Sustained Output','Dragon Sense'],'Passive':['Scar Tissue Reinforcement','Survival Baseline']},
    signature:{name:'Last Village',desc:'An internal state rather than a technique...'},
    strengths:['Highest physical attack output','Dragon physiology knowledge categorical'], weaknesses:['Magic defense real but not exceptional','Operates entirely alone'], strategy:'Find the dragon. Kill the dragon. Return.',
    bestAgainst:['Dragons','Wyverns'], struggleAgainst:['Sustained magical assault (theoretical)'], feats:['Killed a dragon alone and unscathed','Current confirmed dragon kill count is unknown'],
    teammates:[], teamRole:'None. Entirely independent.', reputation:'The kingdom does not celebrate him...', nickname:'"Dragon Slayer."',
    misc:{Hobbies:'Hunting, forge work',Likes:'Silence, a clean sword',Dislikes:'Titles, being asked if he\'s healed',Trivia:'The Ashmark greatsword has been assessed by two master blacksmiths...'},
    stats:{rank:'Diamond',values:{'Phys ATK':799,'Phys DEF':700,'Magic ATK':561,'Magic DEF':633,Mana:600,Speed:682,Strength:799,'Dragon Kill Count':800}, bars:{'Phys ATK':'#D85A30','Phys DEF':'#D85A30','Magic ATK':'#534AB7','Magic DEF':'#534AB7',Mana:'#7F77DD',Speed:'#1D9E75',Strength:'#BA7517','Dragon Kill Count':'#E24B4A'}}
  };
  if (window.REGISTRY) window.REGISTRY.registerAdventurer(sven);
})();