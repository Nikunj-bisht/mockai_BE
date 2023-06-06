const Joi = require('joi');

class JobCateoryValidationSchema {
  jobSchema = Joi.object({
    jobName: Joi.string().required(),
    jobDescription: Joi.string().required(),
    applicants: Joi.number().required(),
    jobImage: Joi.string(),
    // userId: Joi.string(),
    // interviewRounds: Joi.array().items(Joi.string())
  });
}

const jobCateoryValidationSchema = new JobCateoryValidationSchema();
module.exports = jobCateoryValidationSchema;
