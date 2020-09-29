module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'shifts',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        name: {
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
    await queryInterface.dropTable('shifts');
  },
};
