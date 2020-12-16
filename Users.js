const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({

name:{
    type:String,
},
password:{
    type:String
},
number:{
    type:String
    
},
location1:{
    type:String
},
location2:{

type:String

},emailaccount:{
    type:String,
},profession:{
type:String
},
imagename:String,

fcmtoken:{
type:String

}

});



const user = mongoose.model('Info',Userschema);

module.exports = user;