const { Sequelize, Model } = require('sequelize');

class Country extends Model {
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
}

module.exports = Country;
