// solo/vincent-data.js
(function() {
  const vincent = {
    id:'vincent', name:'Vincent Ashworth', title:'The Archer Who Didn\'t Stay Back',
    avBg:'#EAF3DE', avColor:'#27500A', avText:'VI', accentColor:'#639922',
    rankLabel:'Gold', role:'Ranged DPS / Thief', category:'Solo',
    basic:{Age:'24',Gender:'Male',Height:'1.74 m',Race:'Human',Affiliation:"Adventurer's Guild",Rank:'Gold',Role:'Ranged DPS / Self-defending Archer'},
    appearance:'Wiry and economical...', // full text from original
    personality:'Straightforward, slightly sardonic...',
    background:'Trained as a traditional guild archer...',
    equipment:[{icon:'🏹',name:'Recurve Longbow — "Splitline"',note:'A high-draw-weight recurve bow...'},{icon:'🗡️',name:'Short Blade (Close-Range)',note:'A practical single-edge short blade...'},{icon:'🧤',name:'Archer\'s Bracer + Range Notation Wrap',note:'Standard left-arm bracer...'}],
    abilities:{'Archery':['Precision Shot','Rapid Sequence','Armor-Pierce Draw'],'Close Combat':['Blade Counter','Gap Deny','Pivot Escape'],'Passive':['Range Calibration','Elevation Preference']},
    signature:{name:'Dead Angle',desc:'Vincent takes a positioning move to reach a point the target cannot physically cover...'},
    strengths:['Archery accuracy among the highest','Self-sufficient'], weaknesses:['Light armor','Magic defense limited'], strategy:'Elevation when available...', bestAgainst:['Slow large targets'], struggleAgainst:['Fast enemies'], feats:['Only Gold-rank archer...','Shot the core of a moving Sonic Slime...'],
    teammates:[], teamRole:'Solo. Occasionally hired as a specialist.', reputation:'Respected among serious adventurers.', nickname:'"Splitline"', misc:{Hobbies:'Bowcraft, range notation',Likes:'Good sightlines',Dislikes:'Enclosed spaces',Trivia:'Longest confirmed shot distance: 340 meters.'},
    stats:{rank:'Gold',values:{'Phys ATK':434,'Phys DEF':378,'Magic ATK':355,'Magic DEF':362,Mana:353,Speed:442,Accuracy:468,Dexterity:450}, bars:{'Phys ATK':'#D85A30','Phys DEF':'#D85A30','Magic ATK':'#534AB7','Magic DEF':'#534AB7',Mana:'#7F77DD',Speed:'#1D9E75',Accuracy:'#639922',Dexterity:'#1D9E75'}}
  };
  if (window.REGISTRY) window.REGISTRY.registerAdventurer(vincent);
})();