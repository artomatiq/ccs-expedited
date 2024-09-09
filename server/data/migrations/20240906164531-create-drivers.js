'use strict';

/** @type {import('sequelize-cli').Migration} */

/*

CREATE TABLE drivers (
	id INT PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	email VARCHAR (100) NOT NULL,
    phone VARCHAR (20) NOT NULL,
    hourly_rate DECIMAL (10, 2) NOT NULL,
    profile_picture VARCHAR(255)
);

*/


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('drivers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      hourly_rate: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      profile_picture: {
        type: Sequelize.STRING,
        allowNull: true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('drivers');
  }
};
