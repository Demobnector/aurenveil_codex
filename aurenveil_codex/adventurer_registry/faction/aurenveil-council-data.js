// faction/aurenveil-council-data.js
(function() {
  const council = {
    id: 'aurenveil_council',
    name: 'Aurenveil City Council',
    sub: 'Governing Body · Seven Seats',
    rankLabel: 'N/A',
    category: 'Faction',
    avBg: '#2C3E50',
    avColor: '#D4D4D4',
    avText: 'AC',
    accentColor: '#C0392B',
    desc: 'The Aurenveil City Council governs the kingdom, balancing the interests of nobles, guilds, the military, and the common people. They meet weekly in the council chambers. The guild has a permanent seat, ensuring adventurers have a voice. The Council has the authority to declare emergencies, approve dungeon expeditions below floor 30, and sanction new noble houses.',
    members: [
      {
        id: 'lord_valemont',
        name: 'Lord Aldric Valemont',
        role: 'Noble Representative · Council Chairman',
        note: 'Head of House Valemont, father of Alistair, Cecilia, Elizabeth, and Lucien (Red Wings). Oversees noble interests and the dungeon economy. A former Gold-rank adventurer himself.',
        avBg: '#1A3A4A',
        avColor: '#C8D8E8',
        avText: 'LV',
        accentColor: '#C0392B'
      },
      {
        id: 'garrick_stoneheart',
        name: 'Garrick Stoneheart',
        role: 'Guild Liaison',
        note: 'Guild Master of the Adventurer\'s Guild. Former Diamond-rank adventurer. Oversees guild operations, rank promotions, and dungeon access policies. Has the final say on emergency quest classifications.',
        avBg: '#4A4A5A',
        avColor: '#E0E0E8',
        avText: 'GS',
        accentColor: '#8E44AD'
      },
      {
        id: 'captain_croft',
        name: 'Captain Alistair Croft',
        role: 'City Guard Commander',
        note: 'Responsible for city security, monster containment, and dungeon breach protocols. Commands the City Guard and coordinates with the Guild on emergency responses.',
        avBg: '#3A5A5A',
        avColor: '#D0E0E0',
        avText: 'AC',
        accentColor: '#2E8B57'
      },
      {
        id: 'merrick_blackwood',
        name: 'Merrick Blackwood',
        role: 'Artisan Representative',
        note: 'Master Blacksmith of Blackwood Forge. Represents craftsmen and trade guilds. Known for his blunt honesty and legendary craftsmanship. Has crafted weapons for three generations of adventurers.',
        avBg: '#C0B8A0',
        avColor: '#3A2A1A',
        avText: 'MB',
        accentColor: '#B87333'
      },
      {
        id: 'sister_miriam',
        name: 'Sister Miriam',
        role: 'Temple of Light Representative',
        note: 'High Priestess of the Temple of Light. Oversees spiritual matters, healing, and purification rites. Coordinates holy support for undead-related emergencies.',
        avBg: '#E8E0D0',
        avColor: '#5A4A3A',
        avText: 'SM',
        accentColor: '#D4AF37'
      },
      {
        id: 'duke_ashford',
        name: 'Duke Ashford',
        role: 'Royal Advisor',
        note: 'Advises on matters of state, commerce, and foreign relations. Represents the Crown\'s interests in council decisions. Father of Serena Ashford (Iron Reckoning).',
        avBg: '#5A4A3A',
        avColor: '#E0D0C0',
        avText: 'DA',
        accentColor: '#8B4513'
      },
      {
        id: 'master_scholar_loren',
        name: 'Master Scholar Loren',
        role: 'Academy Head',
        note: 'Oversees research, education, and the Royal Archives. Provides scholarly advice on dungeon phenomena, ancient ruins, and magical anomalies.',
        avBg: '#4A6A5A',
        avColor: '#D0E0D8',
        avText: 'ML',
        accentColor: '#4A9B7C'
      },
	  {
		id: 'delsaran',
		name: 'Delsaran Dorjeon',
		role: 'Dungeon Scholar Advisor',
		note: '163-year-old elf, professor at the Noble Academy. Consulted on dungeon ecology, ancient ruins, and magical anomalies. Rarely attends meetings – prefers fieldwork. Has outlived four guild directors.',
		avBg: '#EEEDFE',
		avColor: '#26215C',
		avText: 'DE',
		accentColor: '#534AB7'
	  }
    ],
    importance: 'Key political entity. Any major change to dungeon policy, guild regulations, or city defense requires their approval. The Council has the authority to declare a "Dungeon Emergency" and evacuate floors.',
    notes: 'The Council is currently debating new regulations on dungeon access for lower-ranked adventurers after recent incidents on floor 25. The Guild Master has proposed a training requirement; the Artisan Representative supports it; the Royal Advisor is skeptical.'
  };
  
  if (window.REGISTRY) {
    window.REGISTRY.registerFaction(council);
    console.log('Aurenveil City Council faction loaded.');
  }
})();