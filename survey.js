const mongoose = require('mongoose');

const Surveymodel = new mongoose.Schema({
  name: {
    type: String,
    default: 'counter',
  },

  counter: {
    type: Number,
    default: 0,
  },
});

Surveymodel.methods.updatecounter = function () {
  this.counter += 1;
};

const surv = mongoose.model('Surveys', Surveymodel);

module.exports = surv;
