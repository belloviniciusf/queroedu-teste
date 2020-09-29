module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'countries',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('countries');
  },
};
