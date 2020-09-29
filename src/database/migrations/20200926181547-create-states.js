module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'states',
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
        initials: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        country_id: {
          type: Sequelize.INTEGER,
          references: { model: 'countries', key: 'id' },
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
    await queryInterface.dropTable('states');
  },
};
