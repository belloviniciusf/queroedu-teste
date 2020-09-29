const { Op, Sequelize } = require('sequelize');

module.exports = {
  like(field) {
    return { [Op.like]: [`%${field}%`] };
  },
  formatDate(target, format = '%d/%m/%Y') {
    return [Sequelize.fn('date_format', Sequelize.col(target), format), target];
  },
  renameColumn(target, newColumn) {
    return [Sequelize.col(target), newColumn];
  },
};
