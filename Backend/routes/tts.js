const express = require("express");
const { generateSpeech } = require("../controller/tts_controller");
const router = express.Router();

router.post("/speak", generateSpeech);

module.exports = router;
