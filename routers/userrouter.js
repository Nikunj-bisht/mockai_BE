const express  = require('express');

const Usercontroller = require('../controller/usercontroller');


const router = express.Router();


router
.route('/')
.post(Usercontroller.signupnewuser);

router
.route('/getusers')
.get(Usercontroller.getmatchedusers);


module.exports = router;