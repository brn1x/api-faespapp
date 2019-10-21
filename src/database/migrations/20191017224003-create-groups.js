'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Groups', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nmGrupo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qtdMinP: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qtdMaxP: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      qtdEnc: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      tpGrupo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descGrupo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      objGrupo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      situacao: {
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
    return await queryInterface.dropTable('Groups');
  }
};
