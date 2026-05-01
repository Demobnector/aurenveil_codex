// faction/adventurer-guild-data.js
(function() {
  const guild = {
    id: 'adventurer_guild',
    name: 'Adventurer\'s Guild',
    sub: 'Governing Body · Adventurer Management',
    rankLabel: 'N/A',
    category: 'Faction',
    avBg: '#2E5A4A',
    avColor: '#E8F0E8',
    avText: 'AG',
    accentColor: '#4A9B7C',
    desc: 'The Adventurer\'s Guild is the central organization that registers, ranks, and manages adventurers across the kingdom. Headquartered in Aurenveil, it oversees quest distribution, rank promotions, dungeon access, and emergency response. The Guild works closely with the City Council and the Crown. Founded 120 years ago, the Guild has registered over 10,000 adventurers in its history.',
    members: [
	  {
		id: 'garrick_stoneheart',
		name: 'Garrick Stoneheart',
		role: 'Guild Master',
		note: 'Former Diamond-rank adventurer. Oversees all guild operations. Has final say on rank promotions and emergency classifications. Serves on the City Council as Guild Liaison.',
		avBg: '#4A4A5A',
		avColor: '#E0E0E8',
		avText: 'GS',
		accentColor: '#C0392B'
	  },
	  {
		id: 'thorne_ironside',
		name: 'Thorne Ironside',
		role: 'Reception Desk Lead',
		note: 'Handles quest assignments, rank verifications, and daily guild operations. Knows every active adventurer by name. Has worked at the guild for thirty years.',
		avBg: '#6E5E4A',
		avColor: '#F0E0C0',
		avText: 'TI',
		accentColor: '#8E6E3E'
	  },
	  {
		id: 'elara_vance',
		name: 'Elara Vance',
		role: 'Guild Scribe',
		note: 'Records expedition logs, maintains the registry, and files quest reports. Mother of Elias Vance (Summoner). Known for her impeccable handwriting and memory.',
		avBg: '#C8D6C0',
		avColor: '#3A5A2A',
		avText: 'EV',
		accentColor: '#6A9B4A'
	  },
	  {
		id: 'ronan_blackthorn',
		name: 'Ronan Blackthorn',
		role: 'Quest Coordinator',
		note: 'Evaluates and prices quests. Determines rank requirements and rewards. Former Gold-rank rogue. Known for his fair assessments.',
		avBg: '#5A4A5A',
		avColor: '#E0D0E0',
		avText: 'RB',
		accentColor: '#8E44AD'
	  },
	  {
		id: 'serra_ironvein',
		name: 'Serra Ironvein',
		role: 'Rank Examiner',
		note: 'Conducts rank promotion exams. Former Silver-rank fighter. Strict but fair. Has failed more adventurers than she has passed – and they respect her for it.',
		avBg: '#5A5A4A',
		avColor: '#E0E0D0',
		avText: 'SI',
		accentColor: '#B87333'
	  },
	  {
		id: 'alistair_hummingbird',
		name: 'Alistair Hummingbird',
		role: 'Senior Combat Examiner',
		note: 'Former Gold-rank adventurer and former member of the Red Wings. Conducts promotional exams for physical fighters (Iron → Silver → Gold). Known as the "Iron Hummingbird" for his immovable defense. Has tested over 800 adventurers in 12 years. Retired due to hip injury but remains the Guild\'s most respected combat examiner.',
		avBg: '#6E4A3A',
		avColor: '#E0C8B0',
		avText: 'AH',
		accentColor: '#D4A04A'
	  },
	  {
		id: 'master_lyn',
		name: 'Master Lyn',
		role: 'Guild Archivist',
		note: 'Maintains the guild\'s library of monster lore, dungeon maps, and expedition records. Retired Gold-rank mage. Never leaves the archives.',
		avBg: '#4A6A6A',
		avColor: '#D0E0E0',
		avText: 'ML',
		accentColor: '#00Bcd4'
	  },
	  {
		id: 'kaelen_mori',
		name: 'Kaelen Mori',
		role: 'Field Consultant (Occasional)',
		note: 'Iron-rank spell-fencer. Called upon for his unique magical analysis. His reports are dense but invaluable.',
		avBg: '#2C3E4E',
		avColor: '#D5E8F0',
		avText: 'KM',
		accentColor: '#5D8AA8'
	  }
	],
    importance: 'Central to the kingdom\'s economy and defense. The Guild has the authority to declare dungeons off-limits, coordinate emergency responses, and issue evacuation orders. No adventurer operates without guild registration.',
    notes: 'The Guild Master has the final say on rank promotions. The Guild also maintains a library of monster lore and dungeon maps. The Guild receives funding from the Crown and quest rewards. Annual revenue exceeds the kingdom\'s tax income.'
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerFaction(guild);
    console.log('Adventurer\'s Guild faction loaded.');
  }
})();