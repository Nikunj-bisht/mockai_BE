const jobsCategory = require('../../models/jobCategory');
const JobCateoryValidationSchema = require('../../validation/jobCategory');

exports.getJobs = async (req, res) => {
  try {
    const jobs = await jobsCategory.find({});
    return res.send(jobs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createJob = async (req, res) => {
  try {
    const { error, value } = JobCateoryValidationSchema.jobSchema.validate(req.body, {
      abortEarly: true,
    });
    if (error) {
      return res.status(400).send('Invalid Request' + error.details[0].message);
    }
    const jobCategory = await jobsCategory.create({
      ...value,

      // id should be changed to current user's id
      userId: [{ _id: '647cad2a56836f4658cf10c7' }],
    });
    return res.status(200).send({ message: 'Job successfully created!', data: jobCategory });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
