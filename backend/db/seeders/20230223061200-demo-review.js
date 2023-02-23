'use strict';

/** @type {import('sequelize-cli').Migration} */

if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Reviews';
  
      await queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        review: 'bueno',
        stars: 3
      },
      {
        spotId: 2,
        userId: 2,
        review: 'mas',
        stars: 1
      },
      {
        spotId: 3,
        userId: 3,
        review: 'perfecto',
        stars: 4
      },
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
  

    options.tableName = 'Reviews'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3] }
    }, {});

  }
};
