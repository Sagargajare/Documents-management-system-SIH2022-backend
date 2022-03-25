const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const dynamicForm = mongoose.Schema({
  name: {},
  description: {},
  formStructure: [],
});
dynamicForm.plugin(toJSON);

module.exports = mongoose.model('DynamicForm', dynamicForm);
