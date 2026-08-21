const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const router = require("./routes/assistant");
const tts_router = require("./routes/tts");
const stt_router = require("./routes/stt");
dotenv.config({ quiet: true });

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/assistant", router);
app.use("/tts", tts_router);
app.use("/Scribe", stt_router);

module.exports = app;
