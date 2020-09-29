module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'cities',
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
        state_id: {
          type: Sequelize.INTEGER,
          references: { model: 'states', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
          allowNull: true,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('cities');
  },
};
