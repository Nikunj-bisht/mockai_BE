const express = require('express');

const iamController = require('../../controller/iam');

const router = express.Router();

router.route('/').post(iamController.createUser);

module.exports = router;
