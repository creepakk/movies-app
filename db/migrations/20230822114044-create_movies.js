// import { DATE, DOUBLE, INTEGER, QueryInterface, STRING, Sequelize } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATE
      },
      director: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.DOUBLE
      },
      duration: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      }
    });
    queryInterface.removeColumn('movies', 'createdAt')
    queryInterface.removeColumn('movies', 'updatedAt')
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};
