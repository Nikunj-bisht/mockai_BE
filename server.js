const express = require('express');
const app = express();
const Nexmo = require('nexmo');
const path = require('path');

const PORT =process.env.PORT || 3000;


app.get('/',(req,res)=>{
console.log(`sent`);
const nexmo = new Nexmo({
    apiKey:'d8204f2d',
    apiSecret:'6WIpSt4CiqR29yov'
});

app.get('/index',(req,res)=>{

    res.sendFile(path.join(__dirname , './public','index.html'));

});

const from = 'Vonage APIs';
const to = '918700719343';
const text = 'Hello Nikunj'

nexmo.message.sendSms(from,to,text);

})


app.listen(PORT,()=>{

console.log(`Connected to port ${PORT}`);

})



