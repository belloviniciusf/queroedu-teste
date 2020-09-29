const { Sequelize, Model } = require('sequelize');

class City extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.State, {
      foreignKey: 'state_id',
      as: 'state',
    });
  }
}

module.exports = City;
