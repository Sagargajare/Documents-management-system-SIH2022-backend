const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

const create = {
  body: Joi.object().keys({
    receivedFrom: Joi.objectId().required(),
    current: Joi.objectId().required(),
    sentTo: Joi.objectId().required(),
  }),
};

const update = {
  body: Joi.object().keys({
    // receivedFrom: Joi.objectId.required(),
    current: Joi.objectId().required(),
    sentTo: Joi.objectId().required(),
  }),
};

module.exports = {
  create,
  update,
};
