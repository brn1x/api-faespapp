'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Students', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      raStudent: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      passStudent: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nmStudent: {
        type: Sequelize.STRING,
        allowNull: false
      },
      period: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      curso: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }

    });
  },

  down: (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Students');
  }
};
