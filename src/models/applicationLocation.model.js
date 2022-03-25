const mongoose = require('mongoose');

const applicationLocationSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

const ApplicationLocation = mongoose.model('ApplicationLocation', applicationLocationSchema);

module.exports = ApplicationLocation;
