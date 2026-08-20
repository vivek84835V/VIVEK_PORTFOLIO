const { ElevenLabsClient } = require("@elevenlabs/elevenlabs-js");

const GetScribeToken = async (req, res) => {
  try {
    const elevenlabs = new ElevenLabsClient({
      apiKey: process.env.ELEVENLABS_API_KEY,
    });

    const token = await elevenlabs.tokens.singleUse.create("realtime_scribe");

    if (!token) {
      return res.status(401).json({
        message: "Scribe Token Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Successfully generated scribe token.",
      token,
    });
  } catch (err) {
    console.log(err.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while generating the scribe token.",
      error: err.message,
    });
  }
};

module.exports = GetScribeToken;
