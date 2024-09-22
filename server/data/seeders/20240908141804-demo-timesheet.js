'use strict';

/** @type {import('sequelize-cli').Migration} */

const dummyData = require('../dummyData/dummyData');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('timesheet', dummyData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('timesheet', null, {});
  }
};
