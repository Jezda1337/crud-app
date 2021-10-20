const JobModel = require("../models/Job");

const newJob = async (req, res, next) => {
  const job = new JobModel({
    companyName: "Facebook",
    dayOfApplication: "20.10.2021",
    coverLetter: "yes",
    imagePath: "/images/image1",
  });

  try {
    await job.save();
    res.redirect("/jobs");
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = newJob;
