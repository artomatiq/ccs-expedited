'use strict';

/** @type {import('sequelize-cli').Migration} */

const timesheetGenerator = require('../../utils/timesheetGenerator');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('timesheet', timesheetGenerator());
  },

  async down (queryInterface, Sequelize) {

  }
};
