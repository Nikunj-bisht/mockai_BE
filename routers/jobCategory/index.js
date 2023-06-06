const express = require('express');
const jobCategoryontroller = require('../../controller/jobCategory');
const auth = require('../../middleware/auth');

const router = express.Router();

router.route('/get-category').get(jobCategoryontroller.getJobs);
router.route('/create-category').post(jobCategoryontroller.createJob);

module.exports = router;
