const mongoose = require('mongoose');

const applicationLocationSchema = mongoose.Schema({
  receivedFrom: {
    type: Number,
    required: true,
  },
  current: {
    type: Number,
    required: true,
  },
  sentTo: {
    type: Number,
    required: true,
  },
});

const ApplicationLocation = mongoose.model('Application', applicationLocationSchema);

module.exports = ApplicationLocation;
