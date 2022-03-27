const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const dynamicForm = mongoose.Schema({
  formName: {},
  formDescription: {},
  dynamicForm: [],
});
dynamicForm.plugin(toJSON);

module.exports = mongoose.model('DynamicForm', dynamicForm);
