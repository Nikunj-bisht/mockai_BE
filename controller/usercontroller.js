
const userinfo = require('../Users');


exports.signupnewuser = async(req,res) =>{

    const {nam,pass,num,loc1,loc2,email,prof,fcm} = req.body;

    try{

        const userdata = await userinfo.create({

name:nam,
password:pass,
number,num,
location1:loc1,
location2:loc2,
emailaccount:email,
profession:prof,
fcmtoken:fcm

        });

res.send('success');

    }

catch(err){

res.send("Sorry try again");

}

}


exports.getmatchedusers = async(req,res)=>{

const {location} = req.body;

try{

    const users = await userinfo.find({location1:location});


    res.json({

users

    });
}catch(err){

res.json({

    status:"success"
});

}



}