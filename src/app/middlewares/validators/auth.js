const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
  login: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(6),
    }),
  }),
};
