const nodemailer = require('nodemailer');

const sendfunction =async options =>{

var transporter = nodemailer.createTransport({

service:'gmail',
auth:{
    user:'callmedudefb@gmail.com',
    pass:'nikugokuu'
}

});

var mailoptions = {

    from:'callmedudefb@gmail.com',
    to:options.mailid,
    subject:'Undercover',
    text:options.message
};

await transporter.sendMail(mailoptions,(error,info)=>{
    if(error){
console.info('error bro');
    }else{
        console.info('send bro');

    }
});



}

module.exports = sendfunction;