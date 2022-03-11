const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
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
    type: mongoose.Schema.Types.Uuid,
    ref: 'Application',
    required: true,
  },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
