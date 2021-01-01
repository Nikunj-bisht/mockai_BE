const mongoose = require('mongoose');

const Closemember = new mongoose.Schema({

user:{
    type:String
},
closecontact:{

    type:mongoose.Schema.ObjectId,
    ref:'Info'
}


},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
}

);

Closemember.pre(/^find/,function(next){

// this will populate the closecontact with the data assosiated
// with that id whenever the find query will be made

 this.populate({        
    path:'closecontact',
    select:['fcmtoken','number','profession']

 });
next();

});


const Closecon = mongoose.model('Closecontact' , Closemember);

module.exports = Closecon;