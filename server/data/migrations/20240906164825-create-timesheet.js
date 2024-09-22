'use strict';

/** @type {import('sequelize-cli').Migration} */

/*

CREATE TABLE timesheet (
	id INT AUTO_INCREMENT PRIMARY KEY,
    driver_id INT NOT NULL,
    clock_in TIMESTAMP,
    clock_pause TIMESTAMP,
    clock_resume TIMESTAMP,
    clock_out TIMESTAMP,
    date DATE NOT NULL,
    FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

*/

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('timesheet', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      driver_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'drivers',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      clock_in: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      clock_pause: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      clock_resume: {
        type: Sequelize.DATE,
        allowNull: true
      },
      clock_out: {
        type: Sequelize.DATE,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('timesheet');
  }
};
