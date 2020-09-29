const { Sequelize, Model } = require('sequelize');

class University extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        score: Sequelize.FLOAT,
        logo_url: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.City, {
      foreignKey: 'city_id',
      as: 'city',
    });
    this.belongsTo(models.State, {
      foreignKey: 'state_id',
      as: 'state',
    });
    this.hasMany(models.Campus);
  }
}

module.exports = University;
