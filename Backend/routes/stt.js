const express = require("express");
const GetScribeToken = require("../controller/sst_controller");
const router = express.Router();

router.get("/token", GetScribeToken);

module.exports = router;
