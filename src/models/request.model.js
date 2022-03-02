const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');
//Request Schema
const requestSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  },
  sent_by: {
    type: BigInt,
    required: true,
  },
  sent_to: {
    type: BigInt,
    required: true,
  },
  status: {
    type: Enumerator,
    required: true,
  },
  comment: {
    type: Comment,
    required: true,
  },
  application: {
    type: BigInt,
    required: true,
  }
});

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
