const express = require("express");
const { AskAgentQuestion } = require("../controller/Agent_Access_controller");
const router = express.Router();

router.post("/ask", AskAgentQuestion);

module.exports = router;
