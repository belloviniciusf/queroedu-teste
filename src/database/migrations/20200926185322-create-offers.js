module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('offers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      full_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      price_with_discount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      discount_percentage: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      enrollment_semester: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      enabled: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: { model: 'courses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      university_id: {
        type: Sequelize.INTEGER,
        references: { model: 'universities', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      campus_id: {
        type: Sequelize.INTEGER,
        references: { model: 'campuses', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('offers');
  },
};
