const { Sequelize, Model } = require('sequelize');

class Shift extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
        timestamps: false,
      }
    );

    return this;
  }
}

module.exports = Shift;
