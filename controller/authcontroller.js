const usersinfo = require('../Users');
const Nexmo = require('nexmo');
const mailerfun = require('../Mailer');


exports.checklogin = async(req,res)=>{

try{

    const {userid,pass}=req.body;

const user = await usersinfo.findOne({name:userid});
console.log(user);
console.log(user.password);

var password = user.password;

if(password.localeCompare(pass)==0){


    res.send("success");
return;

}

res.send("not found");


}catch(error){


    res.send("not found");
    console.log(error);

}


}



exports.sendmessagetoall = async(req,res)=>{

    // const nexmo = new Nexmo({
    //     apiKey:'d8204f2d',
    //     apiSecret:'6WIpSt4CiqR29yov'
    // });
    
    /*

const targetlocation = req.body.mylocation;

const matchedusers = await usersinfo.find({location1:targetlocation});



*/


//const {message,place} = req.body;
 
    // query to find all the users of that location
    const {gmailid,mess} = req.body;
  //  http://127.0.0.1:3000/location/toall/send

   for(var i=0;i<5;i++){

    // const from = 'Vonage APIs';
    // const to = '918700719343';
    // const text = 'Hello Nikunj'
    
    // nexmo.message.sendSms(from,to,text);
    
    mailerfun({mailid:gmailid,
        message:mess
   });   
     


}
}