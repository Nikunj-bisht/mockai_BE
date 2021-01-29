const mongoose = require('mongoose');

const fieldschema = new mongoose.Schema({

title:{
    type:String
},

questions:{

type:String

}




})


const quesmodel = mongoose.model("Iquestions" , fieldschema);

module.exports = quesmodel;