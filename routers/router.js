const express = require('express');
const loggincontroller = require('../controller/authcontroller');

const router = express.Router();

router
.route('/')
.post(loggincontroller.checklogin);


module.exports =  router;