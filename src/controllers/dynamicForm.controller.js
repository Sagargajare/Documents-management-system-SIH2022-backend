const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { dynamicFormService } = require('../services');

const createDynamicForm = catchAsync(async (req, res) => {
  const dynamicForm = await dynamicFormService.createDynamicForm(req.body);
  res.status(httpStatus.CREATED).send({ dynamicForm });
});

const getDynamicForms = catchAsync(async (req, res) => {
  const dynamicForms = await dynamicFormService.getDynamicForms();
  res.send({ dynamicForms });
});

module.exports = {
  createDynamicForm,
  getDynamicForms,
};
