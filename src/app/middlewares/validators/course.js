const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  list: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
      kind: Joi.string(),
      level: Joi.string(),
      shift: Joi.string(),
      city: Joi.string(),
    }),
  }),
};
