const Joi = require('joi');

const create = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    about: Joi.string().required(),
  }),
};

const update = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    about: Joi.string().required(),
  }),
};

module.exports = {
  create,
  update,
};
