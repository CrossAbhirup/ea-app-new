'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Games', [{
    gamesId: '1',
    gamesName: 'Star Wars JEDI Fallen Order',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '2',
    gamesName: 'NFS Heat',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '3',
    gamesName: 'Plants vs Zombies',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },{
    gamesId: '4',
    gamesName: 'Fifa 20',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '5',
    gamesName: 'Fifa Mobile',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '6',
    gamesName: 'NBA Live',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },{
    gamesId: '7',
    gamesName: 'NHL 20',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '8',
    gamesName: 'Madden Mobile',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '9',
    gamesName: 'Madden 20',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },{
    gamesId: '10',
    gamesName: 'Origin Access',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '11',
    gamesName: 'The SIMS4',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '12',
    gamesName: 'Pogo',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },{
    gamesId: '13',
    gamesName: 'APEX Legends',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '14',
    gamesName: 'Origin',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '15',
    gamesName: 'The Simpsons Tapped Out',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  },{
    gamesId: '16',
    gamesName: 'Star Wars Galaxy of Heroes',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '17',
    gamesName: 'The SIMS Mobile',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }, {
    gamesId: '18',
    gamesName: 'Star Wars Old Republic',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Games', null, {});
  }
};
