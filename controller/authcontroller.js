const usersinfo = require('../Users');


exports.checklogin = async(req,res)=>{

try{

    const {userid,pass}=req.body;

const user = await usersinfo.find({name:userid});

if(user.password == pass){


    res.send("success");


}

res.send("not found");


}catch(error){


    res.send("not found");

}


}
