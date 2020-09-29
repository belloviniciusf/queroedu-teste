const { Sequelize, Model } = require('sequelize');

class State extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        initials: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Country, {
      foreignKey: 'country_id',
      as: 'country',
    });
  }
}

module.exports = State;
