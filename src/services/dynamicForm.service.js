const { DynamicForm } = require('../models');

const createDynamicForm = async (dynamicFormBody) => {
  return DynamicForm.create(dynamicFormBody);
};

const getDynamicForms = async () => {
  return DynamicForm.find();
  // return await DynamicForm.find();
};

module.exports = {
  createDynamicForm,
  getDynamicForms,
};
