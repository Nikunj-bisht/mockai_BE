const mongoose = require('mongoose');

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    created_at: {
      type: Date,
    },
    updated_on: {
      type: Date,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  {
    versionKey: false,
  }
);

const user = mongoose.model('user', Userschema);

module.exports = user;
