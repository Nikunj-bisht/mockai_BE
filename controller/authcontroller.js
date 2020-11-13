const usersinfo = require('../Users');


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
