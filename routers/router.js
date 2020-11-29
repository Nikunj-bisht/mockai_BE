const express = require('express');
const loggincontroller = require('../controller/authcontroller');

const router = express.Router();

router
.route('/')
.post(loggincontroller.checklogin);


router
.route('/send')
.post(loggincontroller.sendmessagetoall);

module.exports =  router;