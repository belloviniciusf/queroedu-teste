const { Sequelize, Model } = require('sequelize');

class Offer extends Model {
  static init(sequelize) {
    super.init(
      {
        full_price: Sequelize.FLOAT,
        price_with_discount: Sequelize.FLOAT,
        discount_percentage: Sequelize.FLOAT,
        start_date: Sequelize.DATE,
        enabled: Sequelize.BOOLEAN,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Course, {
      foreignKey: 'course_id',
      as: 'course',
    });
    this.belongsTo(models.University, {
      foreignKey: 'university_id',
      as: 'university',
    });
    this.belongsTo(models.Campus, {
      foreignKey: 'campus_id',
      as: 'campus',
    });
  }
}

module.exports = Offer;
