const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({

name:{
    type:String,
    unique:true
},
password:{
    type:String
}

});

const user = mongoose.model('MyUsers',Userschema);

module.exports = user;