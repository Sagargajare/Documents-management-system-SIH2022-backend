const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const create = {
  body: Joi.object().keys({
    status: Joi.string().required().valid('reject', 'in-process', 'approved'),
    comment: Joi.string().required(),
    application: Joi.string().guid(),
    sentTo: Joi.objectId(),
  }),
};

module.exports = {
  create,
};
