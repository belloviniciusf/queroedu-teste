const Course = require('../models/Course');
const University = require('../models/University');
const Campus = require('../models/Campus');
const Kind = require('../models/Kind');
const Level = require('../models/Level');
const Shift = require('../models/Shift');
const City = require('../models/City');
const { like, renameColumn } = require('../../utils/sequelizeFunctions');

class CourseController {
  async list(req, res) {
    const { page = 1, kind = '', level = '', shift = '', city = '' } = req.query;

    const { count: total, rows: courses } = await Course.findAndCountAll({
      attributes: [
        'name',
        renameColumn('kind.name', 'kind'),
        renameColumn('level.name', 'level'),
        renameColumn('shift.name', 'shift'),
        renameColumn('campus.city.description', 'campus.city'),
      ],
      include: [
        {
          model: Kind,
          as: 'kind',
          attributes: [],
          where: { name: like(kind) },
        },
        {
          model: Level,
          as: 'level',
          attributes: [],
          where: { name: like(level) },
        },
        {
          model: Shift,
          as: 'shift',
          attributes: [],
          where: { name: like(shift) },
        },
        {
          model: University,
          as: 'university',
          attributes: ['name', 'score', 'logo_url'],
        },
        {
          model: Campus,
          as: 'campus',
          attributes: ['name'],
          required: true,
          include: [
            {
              model: City,
              as: 'city',
              attributes: [],
              where: { description: like(city) },
            },
          ],
        },
      ],
      limit: 20,
      offset: (page - 1) * 20,
      order: [['createdAt', 'ASC']],
      raw: true,
      nest: true,
    });

    return res.status(200).json({ total, courses });
  }
}

module.exports = new CourseController();
