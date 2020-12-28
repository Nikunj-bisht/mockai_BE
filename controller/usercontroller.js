
const userinfo = require('../Users');
const closecont = require('../closecontactsdb');

exports.signupnewuser = async(req,res) =>{

    const {nam,pass,num,loc1,loc2,email,prof,fcm} = req.body;

    try{

        const userdata = await userinfo.create({

name:nam,
password:pass,
number:num,
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

allusers:users

    });
}catch(err){

res.json({

    status:"failed"
});

}



}

exports.getcurrentuser = async(req,res)=>{ 

const {num} = req.body;

const current =await userinfo.findOne({number:num});

  res.json({

me:current

  })


}

exports.updateuser = async(req,res)=>{
  
const {nam,num,account} = req.body;

     // const update =await userinfo.find({number:num});

       const updatenow =await userinfo.findOneAndUpdate({emailaccount:account},{name:nam,number:num},function(err,result){


           if(err){
               res.send("error");
           }else{
               res.send("noerror");
           }

       });


}

exports.checkforcloseuser = async(req,res)=>{

   const {num} = req.body;

try{

    const user =await userinfo.findOne({number:num});

    if(user !=null){
    
    res.json({
        status:"success",
        youruser:user
    });
    
    }else{

        res.json({
            status:"failed",
            youruser:user
        });    
    }
}catch(error){
    res.send("error");
}
}

exports.createclosecontact = async(req,res)=>{

const {usernumber,contactid} = req.body;

try{
    const create =await closecont.create({user:usernumber,closecontact:contactid});
res.send("created");

}catch(error){
    res.send('error');
}





}