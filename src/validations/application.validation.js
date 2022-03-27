const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    status: Joi.string().required().valid('reject', 'in-process', 'approved'),
    applicationType: Joi.string().required(),
    data: Joi.object().required(),
    dateTime: Joi.date().required(),
  }),
};

const update = {
  body: Joi.object().keys({
    status: Joi.string().required().valid('reject', 'in-process', 'approved'),
    applicationType: Joi.string().required().valid('application', 'leave', 'verification'),
    data: Joi.object().required(),
    dateTime: Joi.date().required(),
  }),
};

module.exports = {
  create,
  update,
};
