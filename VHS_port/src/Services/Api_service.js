import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export async function AskQue(question) {
  try {
    const response = await api.post("/assistant/ask", {
      question,
    });
    return response.data.reply;
  } catch (err) {
    console.log("something wrong", err);
  }
}

export async function TextToSpeak(text) {
  try {
    const response = await api.post(
      "/tts/speak",
      { text },
      { responseType: "blob" },
    );
    return response.data;
  } catch (err) {
    console.log("something wrong in tts api service", err);
  }
}

export async function GetScribeToken() {
  try {
    const token = await api.get("/Scribe/token");
    return token;
  } catch (err) {
    console.log(err);
  }
}
