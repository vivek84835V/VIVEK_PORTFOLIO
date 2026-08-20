const { ElevenLabsClient } = require("@elevenlabs/elevenlabs-js");

const client = new ElevenLabsClient({
  apikey: process.env.ELEVENLABS_API_KEY,
});

const textToSpeech = async (text) => {
  const audiostream = await client.textToSpeech.convert(
    process.env.ELEVENLABS_VOICE_ID,
    {
      text,
      modelId: "eleven_flash_v2_5",
      outputFormat: "mp3_44100_128",
    },
  );
  return audiostream;
};

module.exports = { textToSpeech };
