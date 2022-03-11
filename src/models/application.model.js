const mongoose = require('mongoose');
const uuid = require('node-uuid');
const Enum = require('enum');

const applicationSchema = mongoose.Schema({
  id: {
    type: String,
    default: function genUUID() {
      return uuid.v1();
    },
  },
  status: {
    type: Enum,
    required: true,
  },
  initiatedBy: {
    type: Number,
    required: true,
  },
  applicationType: {
    type: Enum,
    required: true,
  },
  data: {
    type: JSON,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
