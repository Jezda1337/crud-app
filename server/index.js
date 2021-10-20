const express = require("express");
const mongoose = require("mongoose");
const app = express();

const JobRoute = require("./routes/JobRoute");

require("dotenv").config();
app.use(express.json());

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

app.use("/newJob", JobRoute);

app.listen("3000", () => {
  console.log("Server is running on port => 3000");
});
