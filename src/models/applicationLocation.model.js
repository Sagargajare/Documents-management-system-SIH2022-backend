const mongoose = require('mongoose');

const applicationLocationSchema = mongoose.Schema({
  receivedFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  current: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sentTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const ApplicationLocation = mongoose.model('Application', applicationLocationSchema);

module.exports = ApplicationLocation;
