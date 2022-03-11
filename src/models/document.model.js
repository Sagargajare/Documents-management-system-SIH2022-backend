const mongoose = require('mongoose');
const uuid = require('uuid');

const documentSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  uuid: {
    type: String,
    default: function genUUID() {
      uuid.v1();
    },
  },
  type: {
    type: String,
    required: true,
    enum: ['ResidenceVerification', 'CasteVerification', 'DisabilityVerification'],
  },
  note: {
    type: String,
    required: true,
  },
  uploadedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
});

const Document = mongoose.model('Document', documentSchema);
module.exports = Document;
