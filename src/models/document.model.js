const mongoose = require('mongoose');
const uuid = require('uuid');

const documentSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  uuidv1: {
    type: String,
    default: function genUUID() {
      uuid.v1();
    },
  },
  type: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
  },
});

const Document = mongoose.model('Document', documentSchema);
module.exports = Document;
