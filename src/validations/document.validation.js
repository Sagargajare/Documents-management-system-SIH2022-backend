const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    type: Joi.string().required().valid('ResidenceVerification', 'CasteVerification', 'DisabilityVerification'),
    note: Joi.string().required(),
  }),
};

module.exports = {
  create,
};
