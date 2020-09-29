const { Sequelize, Model } = require('sequelize');

class Campus extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.University, {
      foreignKey: 'university_id',
      as: 'university',
    });
    this.belongsTo(models.City, {
      foreignKey: 'city_id',
      as: 'city',
    });
    this.belongsTo(models.State, {
      foreignKey: 'state_id',
      as: 'state',
    });
  }
}

module.exports = Campus;
