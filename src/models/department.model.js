const mongoose = require('mongoose');

const documentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Department = mongoose.model('Department', documentSchema);
module.exports = Department;
