const express = require('express');

const iamController = require('../../controller/iam');

const router = express.Router();

router.route('/').post(iamController.createUser);
router.route('/').get(iamController.getUser);

// router.route('/get-user')

module.exports = router;
