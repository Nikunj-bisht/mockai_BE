const express  = require('express');

const Usercontroller = require('../controller/usercontroller');


const router = express.Router();


router
.route('/')
.post(Usercontroller.signupnewuser);

router
.route('/getusers')
.post(Usercontroller.getmatchedusers);

router.post('/getme',Usercontroller.getcurrentuser);

router.post('/checkforclosecontact',Usercontroller.checkforcloseuser); // check whether the user is available or not

router.patch('/updateme',Usercontroller.updateuser);

router.post('/createclosecontact',Usercontroller.createclosecontact); // creating close contact for user 

module.exports = router;