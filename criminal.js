const mongoose = require('mongoose');

const Criminalschema = new mongoose.Schema({

crimname:{
    type:String
},

crimetype:{
    type:String
},

criimage:String,

criminallocation:{
type:String
}


})

const Criml = mongoose.model('Criminal',Criminalschema);

module.exports = Criml ; 