const mongoose = require('mongoose');

const remarkSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.Uuid,
    ref: 'Application',
    required: true,
  },
  remarkBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  remark: {
    type: String,
    required: true,
  },
});

const Remark = mongoose.model('Remark', remarkSchema);
module.exports = Remark;
