const mongoose = require('mongoose');

const remarkSchema = mongoose.Schema(
  {
    applicationId: {
      type: mongoose.Schema.Types.String,
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
  },
  {
    timestamps: true,
  }
);

const ApplicationRemark = mongoose.model('ApplicationRemark', remarkSchema);
module.exports = ApplicationRemark;
