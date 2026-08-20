const { textToSpeech } = require("../services/ElevenLabs.service");

const generateSpeech = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        error: "Text is required",
      });
    }

    // we do add things here

    const audiostream = await textToSpeech(text);

    res.setHeader("Content-Type", "audio/mpeg");

    for await (const chunk of audiostream) {
      res.write(chunk);
    }

    res.end();
  } catch (err) {
    console.error("TTS Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = { generateSpeech };
