const nodemailer = require('nodemailer');
const fs = require('fs').promises;
const htmltotext = require('html-to-text');


const sendfunction =async options =>{

var transporter = nodemailer.createTransport({

service:'gmail',
auth:{
    user:'callmedudefb@gmail.com',
    pass:'nikugokuu'
}

});

//const html = await fs.readFile(path.join(__dirname , './public','sendfile.html'))

var mailoptions = {

    from:'callmedudefb@gmail.com',
    to:options.mailid,
    subject:'Undercover',
    text:options.mess
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