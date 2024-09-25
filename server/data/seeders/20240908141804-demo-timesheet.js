'use strict';

/** @type {import('sequelize-cli').Migration} */

const createDummyData = require('../../utils/timesheetGenerator');

const beginningDate = '2023-08-01';
const endingDate = '2023-09-31';

const dummyData = createDummyData(beginningDate, endingDate);

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('timesheet', dummyData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('timesheet', null, {});
  }

};
