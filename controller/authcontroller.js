const usersinfo = require('../Users');


exports.checklogin = async(req,res)=>{

try{

    const {userid,pass}=req.body;

const user = await usersinfo.find({name:userid});

const password = user.password;

if(password.localeCompare(pass)==0){


    res.send("success");


}

res.send("not found");


}catch(error){


    res.send("not found");

}


}
