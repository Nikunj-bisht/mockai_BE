const express = require('express');

const Criminalcontroller = require('../controller/Criminalcontroller');
const router = express.Router();



router.post('/uploadimage',Criminalcontroller.createnewcriminal);

module.exports = router;