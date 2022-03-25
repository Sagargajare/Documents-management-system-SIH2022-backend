const express = require('express');
const validate = require('../../middlewares/validate');
const dynamicFormValidation = require('../../validations/dynamicForm.validation');
const dynamicFormController = require('../../controllers/dynamicForm.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(dynamicFormValidation.createDynamicForm), dynamicFormController.createDynamicForm)
  .get(dynamicFormController.getDynamicForms);
module.exports = router;
