const express = require('express');
const app = express();
const Nexmo = require('nexmo');
const mongoose = require("mongoose");
const path = require('path');
const bodyParser = require('body-parser');
const usersinfo = require('./Users');
const mailerfun = require('./Mailer');
const loginrouter = require('./routers/router');
const usersroute = require('./routers/userrouter');
const crimialrouter = require('./routers/criminalroute');
const Fields = require('./Fields');
const ques = require("./Iques");
const data = require("./interfront");
const closecont = require('./closecontactsdb');
const surmodel = require('./survey');
const PORT =process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//process.env.MONGO_URL/////mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority
mongoose.connect(process.env.MONGO_URL

    ,{
    useUnifiedTopology: true,
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
   
});

app.use(express.static(path.join(__dirname,'public')));


app.get('/index',(req,res)=>{

    res.sendFile(path.join(__dirname , './public','index.html'));

});

app.get('/api/jobssector' , async(req,res)=>{

await surmodel.find({name:'counter'});

  const jobs =   await Fields.find();

  res.json({

  joby:jobs

  })

})

app.get('/a',async(req,res)=>{

 const d =  await closecont.find({_id:'5feb52c95cfd470017e33505',closecontact:'5fda60fc7eab4a0017120270'})
console.log(d);

})



app.post('/api/questions' , async(req,res)=>{

const {jobprofile} = req.body;

    const questions =   await ques.find({title:jobprofile});
  
    res.json({
  
    qs:questions
  
    })
  
  })

app.post('/api/accept',(req,res)=>{         // just for sending the text message using nexmo

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
console.log('sent');

});

app.post('/send/gmail',(req,res)=>{      // its for sending the email 
    var x=0;

    const {gmailid,mess} = req.body;

for(var i=0;i<10;i++){
    mailerfun({mailid:gmailid,
        message:mess
    });


}
            

});

// not using currently

app.post('/auth/login',async(req,res)=>{     

      const {userid,pass,num,loc1,loc2}=req.body;

try{

const user = await  usersinfo.create({name:userid,password:pass,number:num,location1:loc1,location2:loc2});

res.send("success");
}catch(err){


    res.send("Error signing up");

}

});

// App routes will be starting from here

app.use('/apifor/users',usersroute);  // All users routes handler


//  This route will be hit when the user will upload image/videos of the criminal

app.use('/api/criminal',crimialrouter);

      
// for interview app

app.get("/tasks" , (req,res)=>{

     var da = data;
     console.log(da);
     res.status(200).json(da);

});


app.use('/check/loggedin',loginrouter);
app.use('/location/toall',loginrouter);


app.listen(PORT,()=>{

console.log(`Connected to port ${PORT}`);

})



//GKDa0yvdKR1ZScgx

//mongodb+srv://niku:<password>@cluster0.fglxc.mongodb.net/test

//mongodb+srv://nicola:qObaF401D1ej4Vj4@cluster0.3uhra.mongodb.net/authusers?retryWrites=true&w=majority
//qObaF401D1ej4Vj4