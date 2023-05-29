const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
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
    validate(value) {
      if (!value.matches('/d{3}())?(-|s)? d{3}(-|s)d{4}$/')) {
        throw new Error('Invalid!!');
      }
    },
  },
});

const user = mongoose.model('user', Userschema);

module.exports = user;
