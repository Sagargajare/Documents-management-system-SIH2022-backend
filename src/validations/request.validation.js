const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    status: Joi.string().required().valid('reject', 'in-process', 'approved'),
    comment: Joi.string().required(),
    application: Joi.object().required(),
    sentTo: Joi.object().required(),
  }),
};

module.exports = {
  create,
};
