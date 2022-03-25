const mongoose = require('mongoose');

const requestSchema = mongoose.Schema(
  {
    sentBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    sentTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: ['accept', 'reject', 'revert'],
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    application: {
      type: String,
      ref: 'Application',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
