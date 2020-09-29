const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      fullname: Joi.string().required().trim(),
      email: Joi.string().required().trim().email(),
      password: Joi.string().required().min(6),
    }),
  }),
};
