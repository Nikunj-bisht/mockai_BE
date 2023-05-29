const express = require('express');
const loggincontroller = require('../../controller/iam/authcontroller');

const router = express.Router();

router.route('/').post(loggincontroller.checklogin);

router.route('/send').post(loggincontroller.sendmessagetoall);

router.route('/user').post();

module.exports = router;
