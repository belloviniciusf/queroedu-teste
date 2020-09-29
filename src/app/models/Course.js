const { Sequelize, Model } = require('sequelize');

class Course extends Model {
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
    this.belongsTo(models.Kind, {
      foreignKey: 'kind_id',
      as: 'kind',
    });
    this.belongsTo(models.Level, {
      foreignKey: 'level_id',
      as: 'level',
    });
    this.belongsTo(models.Shift, {
      foreignKey: 'shift_id',
      as: 'shift',
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

module.exports = Course;
