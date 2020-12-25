const mongoose = require('mongoose');

const Closemember = new mongoose.Schema({

user:{
    type:String
},
closecontact:{

    type:mongoose.Schema.ObjectId,
    ref:'Info'
}


});

Closemember.pre(/^find/,function(next){

 this.populate({
    path:'closecontact',
    select:['fcmtoken','number','profession']

 });


});


const Closecon = mongoose.model('Closecontact' , Closemember);

module.exports = Closecon;