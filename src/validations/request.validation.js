const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const create = {
  body: Joi.object().keys({
    status: Joi.string().required().valid('reject', 'in-process', 'approved'),
    comment: Joi.string().required(),
    application: Joi.string().required().guid(),
    sentTo: Joi.objectId().required(),
  }),
};

const update = {
  body: Joi.object().keys({
    status: Joi.string().required().valid('reject', 'in-process', 'approved'),
    comment: Joi.string().required(),
    application: Joi.string().required().guid(),
  }),
};

module.exports = {
  create,
  update,
};
