const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  dayOfApplication: {
    type: String,
    required: true,
  },
  coverLetter: {
    type: String,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model("jobs", JobSchema);

module.exports = Job;
