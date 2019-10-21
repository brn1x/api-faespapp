'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('StudentGroups', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Groups', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Students', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    return await queryInterface.dropTable('StudentGroups');
  }
};
