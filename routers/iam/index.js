const express = require('express');
const auth = require('../../middleware/auth');

const iamController = require('../../controller/iam');

const router = express.Router();

router.route('/').post(iamController.createUser);
router.route('/').get(auth, iamController.getUser);

// router.route('/get-user')

module.exports = router;
