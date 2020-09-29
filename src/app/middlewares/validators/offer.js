const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  list: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      university: Joi.any(),
      course: Joi.any(),
      kind: Joi.string(),
      level: Joi.string(),
      shift: Joi.string(),
      city: Joi.string(),
      orderBy: Joi.string().valid('asc', 'desc'),
    }),
  }),
};
