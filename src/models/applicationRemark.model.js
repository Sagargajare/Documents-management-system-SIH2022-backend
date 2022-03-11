const mongoose = require('mongoose');

const remarkSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  remarkBy: {
    type: Number,
    required: true,
  },
  remark: {
    type: String,
    required: true,
  },
});

const Remark = mongoose.model('Remark', remarkSchema);
module.exports = Remark;
