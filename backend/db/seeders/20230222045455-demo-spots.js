'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}


module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      { ownerId: 2, 
        address: '123 South Wall Maria',
        State: 'Shiganshina',
        country: 'United States',
        lat: 45.07,
        lng: 93.45,
        name: 'Titan Forest',
        description: 'A gated forrest comprised of beautiful tall trees standing at 262 feet tall. ',
        price: 840
      },
      { ownerId: 3, 
        address: '104 South Wall Rose',
        State: 'Trost District',
        country: 'United States',
        lat: 48.07,
        lng: 92.45,
        name: 'Party Like a Titan',
        description: 'A lively escatic party neighborhood',
        price: 540
      },
      { ownerId: 3, 
        address: '104 South Wall Sheena',
        State: 'Mitras District',
        country: 'United States',
        lat: 58.07,
        lng: 82.45,
        name: 'Underground',
        description: 'A traditional neighborhood that meets all your food needs',
        price: 240
      },

    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },




  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
