'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Lists', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      task: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Lists');
  },
};
