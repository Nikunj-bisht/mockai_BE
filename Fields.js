const mongoose = require('mongoose');

const fieldschema = new mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },
});

const Fieldmodel = mongoose.model('Fields', fieldschema);

module.exports = Fieldmodel;
