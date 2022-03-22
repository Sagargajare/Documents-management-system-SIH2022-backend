const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    applicationId: Joi.string().required(),
    remark: Joi.string().required(),
  }),
};

module.exports = {
  create,
};
