'use strict';

/** @type {import('sequelize-cli').Migration} */

/*
  INSERT INTO drivers (id, name, email, phone, hourly_rate, profile_picture) 
  VALUES
    (1, 'John Doe', 'johndoe@example.com', '555-1234', 20.00, 'john_doe.jpg'),
    (2, 'George Smith', 'georgesmith@example.com', '555-5678', 22.50, 'george_smith.jpg'),
    (3, 'Paul Brown', 'paulbrown@example.com', '555-8765', 19.75, 'paul_brown.jpg'),
    (4, 'Robert Taylor', 'roberttaylor@example.com', '555-4321', 25.00, 'robert_taylor.jpg'),
    (5, 'Daniel Wilson', 'danielwilson@example.com', '555-9876', 18.00, 'daniel_wilson.jpg');
*/

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('drivers', [
      {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '704-555-1234',
        hourly_rate: 20.00,
        profile_picture: 'john_doe.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'George Smith',
        email: 'georgesmith@example.com',
        phone: '704-555-5678',
        hourly_rate: 22.50,
        profile_picture: 'george_smith.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Paul Brown',
        email: 'paulbrown@example.com',
        phone: '704-555-8765',
        hourly_rate: 19.75,
        profile_picture: 'paul_brown.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Robert Taylor',
        email: 'roberttaylor@example.com',
        phone: '704-555-4321',
        hourly_rate: 22.50,
        profile_picture: 'george_smith.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'Daniel Wilson',
        email: 'danielwilson@example.com',
        phone: '704-555-9876',
        hourly_rate: 18.00,
        profile_picture: 'daniel_wilson.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drivers', null, { truncate: true })
  }
};
