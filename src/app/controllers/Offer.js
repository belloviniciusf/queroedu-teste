const Offer = require('../models/Offer');
const Course = require('../models/Course');
const University = require('../models/University');
const Campus = require('../models/Campus');
const Kind = require('../models/Kind');
const Level = require('../models/Level');
const Shift = require('../models/Shift');
const City = require('../models/City');
const { like, formatDate, renameColumn } = require('../../utils/sequelizeFunctions');

class OfferController {
  async list(req, res) {
    const { page = 1, university = '', course = '', kind = '', level = '', shift = '', city = '', orderBy } = req.query;

    const order = [['createdAt', 'ASC']];

    if (orderBy) order.push(['price_with_discount', orderBy]);

    const { count, rows: offers } = await Offer.findAndCountAll({
      attributes: [
        'full_price',
        'price_with_discount',
        'discount_percentage',
        formatDate('start_date'),
        'enrollment_semester',
        'enabled',
        renameColumn('course.kind.name', 'course.kind'),
        renameColumn('course.level.name', 'course.level'),
        renameColumn('course.shift.name', 'course.shift'),
        renameColumn('campus.city.description', 'campus.city'),
      ],
      include: [
        {
          model: Course,
          as: 'course',
          attributes: ['name'],
          where: { name: like(course) },
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
          ],
        },
        {
          model: University,
          as: 'university',
          attributes: ['name', 'score', 'logo_url'],
          where: { name: like(university) },
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
      order,
      raw: true,
      nest: true,
    });

    return res.status(200).json({ count, offers });
  }
}

module.exports = new OfferController();
