const Joi = require('joi');

const createDynamicForm = {
  name: Joi.string().required(),
  description: Joi.string().required(),
  formStructure: Joi.array().items(
    Joi.object().keys({
      component: Joi.string().required(),
      label: Joi.string().required(),
      _uid: Joi.string().required(),
      fields: Joi.array().items(
        Joi.object().keys({
          component: Joi.string().required(),
          label: Joi.string().required(),
          _uid: Joi.string().required(),
          fields: Joi.array().items(
            Joi.object().keys({
              component: Joi.string().required(),
              label: Joi.string().required(),
              _uid: Joi.string().required(),
              type: Joi.string().required(),
            })
          ),
        })
      ),
    })
  ),
};

module.exports = {
  createDynamicForm,
};
