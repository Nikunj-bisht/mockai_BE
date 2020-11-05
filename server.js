const express = require('express');
const app = express();
const Nexmo = require('nexmo');
const mongoose = require("mongoose");
const path = require('path');
const bodyParser = require('body-parser');
const usersinfo = require('./Users');
const mailerfun = require('./Mailer');



const PORT =process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority',{
    useUnifiedTopology: true,
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
   
}).then(()=>console.log('connected'));

app.get('/',(req,res)=>{
console.log(`sent`);
const nexmo = new Nexmo({
    apiKey:'d8204f2d',
    apiSecret:'6WIpSt4CiqR29yov'
});


const from = 'Vonage APIs';
const to = '918700719343';
const text = 'Hello Nikunj'

nexmo.message.sendSms(from,to,text);

})


app.get('/index',(req,res)=>{

    res.sendFile(path.join(__dirname , './public','index.html'));

});

app.post('/accept',(req,res)=>{

const {num,message}  = req.body;
const nexmo = new Nexmo({
    apiKey:'d8204f2d',
    apiSecret:'6WIpSt4CiqR29yov'
});

console.info(`sent`)
const from = 'Vonage APIs';
const to = num.toString();
const text = message;

nexmo.message.sendSms(from,to,text);


});

app.post('/send/gmail',(req,res)=>{
    var x=0;

    const {gmailid,mess} = req.body;


   var recursion =  setInterval(()=>{
x++;

        mailerfun({mailid:gmailid,
            message:mess
        });
        if(x==100){
            window.clearInterval(recursion);
        }
    },3000);
      ;
       
     

});


app.post('/auth/login',async(req,res)=>{

      const {userid,pass}=req.body;

try{

const user = await  usersinfo.create({name:userid,password:pass});
console.log(user);

res.send("success");
}catch(err){


    res.send("Error signing up");

}

});



app.listen(PORT,()=>{

console.log(`Connected to port ${PORT}`);

})



//GKDa0yvdKR1ZScgx

//mongodb+srv://niku:<password>@cluster0.fglxc.mongodb.net/test

//mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority
//qObaF401D1ej4Vj4