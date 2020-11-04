const express = require('express');
const app = express();
const Nexmo = require('nexmo');
const path = require('path');
const bodyParser = require('body-parser');
const PORT =process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

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

app.listen(PORT,()=>{

console.log(`Connected to port ${PORT}`);

})



