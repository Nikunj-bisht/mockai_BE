const express = require('express');

const Criminalcontroller = require('../controller/Criminalcontroller');
const router = express.Router();



router.patch('/uploadimage',Criminalcontroller.uploadimage,Criminalcontroller.createnewcriminal);

router.post('/getcriminal',Criminalcontroller.getalllocationcrim);

module.exports = router;