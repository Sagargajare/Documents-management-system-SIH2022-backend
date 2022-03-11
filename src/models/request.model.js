const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');

const requestSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  },
  sentBy: {
    type: Number,
    required: true,
  },
  sentTo: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  application: {
    type: Number,
    required: true,
  },
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
