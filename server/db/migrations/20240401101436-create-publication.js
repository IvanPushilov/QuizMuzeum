'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      img: {
        type: Sequelize.TEXT,
        allowNull:true,
      },
      file: {    
        type: Sequelize.BLOB,
        allowNull: true,
      },
      date:{ 
        type: Sequelize.DATE,
      defaultValue: new Date(),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};