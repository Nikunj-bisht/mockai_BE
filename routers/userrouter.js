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
router.patch('/updateme',Usercontroller.updateuser);

module.exports = router;