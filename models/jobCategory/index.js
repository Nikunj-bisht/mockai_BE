const mongoose = require('mongoose');

const jobCategorySchema = new mongoose.Schema({
  jobName: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  applicants: {
    type: Number,
  },
  jobImage: {
    type: String,
  },
  userId: {
    type: [
      {
        id: String,
      },
    ],
  },
  interviewRounds: {
    type: [
      {
        name: String,
      },
    ],
  },
});

const JobCategory = mongoose.model('JobCategory', jobCategorySchema);

module.exports = JobCategory;
