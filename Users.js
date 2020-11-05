const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({

name:{
    type:String
},
password:{
    type:String
}

});

const user = mongoose.model('MyUsers',Userschema);

module.exports = user;