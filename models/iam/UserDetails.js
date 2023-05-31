const mongoose = require('mongoose');

const UserDetailSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      default: '',
    },
    fcmToken: {
      type: String,
      default: '',
    },
    profession: {
      type: String,
      default: '',
    },
    dob: {
      type: Date,
      default: null,
    },
    created_at: {
      type: Date,
      default: new Date(),
    },
    updated_on: {
      type: Date,
      default: new Date(),
    },
  },
  {
    versionKey: false,
  }
);

const userDetailModel = mongoose.model('UserDetail', UserDetailSchema);

module.exports = userDetailModel;
