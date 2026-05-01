// izgon-data.js
(function() {
  const izgon = {
    id:'izgon', name:"Iz'gon", title:'The Demon Who Chose Leisure', avBg:'#FBEAF0', avColor:'#72243E', avText:'IZ', accentColor:'#D4537E',
    rankLabel:'~Diamond', role:'Unknown / Unclassified', category:'Unregistered',
    basic:{Age:'30',Gender:'Male',Height:'2.11 m',Race:'Demon',Affiliation:'None — registered citizen',Rank:'~Diamond (unverified)',Role:'Unknown'},
    appearance:'Tall enough that most doorframes require a decision...', personality:'Relaxed to a degree that requires context...',
    background:'Iz\'gon was a significant figure in the Demon Lord\'s hierarchy before simply leaving...',
    equipment:[{icon:'🖐️',name:'None',note:'Fights with bare hands and dark magic.'}],
    abilities:{'Dark Magic':['Dark Pulse','Void Grasp','Shadow Anchor'],'Physical Combat':['Bare-hand strikes with demon-grade physical output'],'Passive':['Dark Mana Saturation','Threat Presence']},
    signature:{name:'Void Descent',desc:'Iz\'gon concentrates his dark mana into a single full-force strike...'},
    strengths:['Broadly terrifying across all combat parameters','No weapon dependency'], weaknesses:['Light magic and holy-type attacks are a genuine vulnerability'],
    strategy:'Unknown. Presumed: minimum necessary force, maximum efficiency.', bestAgainst:['Everything that does not involve sustained holy or light magic'], struggleAgainst:['Light magic / holy-type sustained assault (theoretical)'],
    feats:['Stopped a charging Diamond-estimate creature with a single open-handed strike','Has been approached by guild recruitment three times. Has declined each time.'],
    teammates:[], teamRole:'None. Citizen.', reputation:'The kingdom has quietly stopped worrying about him...', nickname:'"The Relaxed One."',
    misc:{Hobbies:'Sitting in parks, visiting markets, napping',Likes:'Good food, pleasant weather',Dislikes:'Being asked when he\'s going back',Trivia:'Has a preferred bench in the central market district.'},
    stats:{rank:'Diamond',values:{'Phys ATK':748,'Phys DEF':722,'Magic ATK':741,'Magic DEF':712,'Mana (Dark)':760,Speed:694,Strength:774,'Threat Level':793}, bars:{'Phys ATK':'#D85A30','Phys DEF':'#D85A30','Magic ATK':'#534AB7','Magic DEF':'#534AB7','Mana (Dark)':'#7F77DD',Speed:'#1D9E75',Strength:'#BA7517','Threat Level':'#E24B4A'}}
  };
  if (window.REGISTRY) window.REGISTRY.registerAdventurer(izgon);
  else console.error('Registry core not loaded');
})();