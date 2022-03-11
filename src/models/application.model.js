const mongoose = require('mongoose');
const uuid = require('node-uuid');

const applicationSchema = mongoose.Schema({
  id: {
    type: String,
    default: function genUUID() {
      return uuid.v1();
    },
  },
  status: {
    type: String,
    enum: ['reject', 'in-process', 'approved'],
    required: true,
  },
  initiatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  applicationType: {
    type: String,
    enum: ['application', 'leave', 'verification'],
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
