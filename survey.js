const mongoose = require('mongoose');

const Surveymodel = new mongoose.Schema({

    name:{
        type:String,
default:'counter'
    },

counter:{
    type:Number,
    default:0
}

});

Surveymodel.post(/^find/,function(next){

this.counter+=1;
next();
});

const surv = mongoose.model('Surveys',Surveymodel);

module.exports = surv;