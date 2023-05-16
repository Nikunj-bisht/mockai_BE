const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  location: {
    type: String,
  },
  description: {
    type: String,
  },

  videolocation: String,
});

const videoobject = mongoose.model('Allvideos', VideoSchema);

module.exports = videoobject;
