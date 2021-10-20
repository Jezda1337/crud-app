const express = require("express");
const router = express.Router();

const newJobController = require("../controllers/NewJobController");

router.get("/", newJobController);

module.exports = router;
