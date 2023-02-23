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
      {
        ownerId: 1,
        address: 'p sherman 42',
        city: 'wallaby way',
        state: 'sydney',
        country: 'United States',
        lat: 12.34,
        lng: -56.23,
        name: 'Dorys Crib',
        description: "Come here and get aterograde amnesia",
        price: 350
      },
      {
        ownerId: 2,
        address: '123 pacific',
        city: 'dasffda',
        state: 'adfadf',
        country: 'United States',
        lat: 67.16,
        lng: -12.78,
        name: 'asfasdf',
        description: "dsfasdfasdfa",
        price: 155
      },
      {
        ownerId: 3,
        address: 'asdfafd',
        city: 'dfadf',
        state: 'adfadf',
        country: 'United States',
        lat: 955.22,
        lng: -120.83,
        name: 'sdfafdsaf',
        description: "dsfasdfas",
        price: 125
      }, 
    ], {});

  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Spots'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      country: { [Op.in]: ['United States'] }
    }, {});
  }
};
