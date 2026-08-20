import React, { useEffect, useRef, useState } from "react";
import { useScribe } from "@elevenlabs/react";
import { GetScribeToken } from "../Services/Api_service";

export default function UseScribeHook({ onTranscript }) {
  const [partialTranscript, setPartialTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const isStoppingRef = useRef(false);

  const Scribe = useScribe({
    modelId: "scribe_v2_realtime",

    onPartialTranscript: (data) => {
      setPartialTranscript(data.text);
      console.log("Partial:-", data);
    },

    onCommittedTranscript: (data) => {
      if (onTranscript) {
        onTranscript(data.text);
      }
      if (isStoppingRef.current) {
        isStoppingRef.current = false;

        Scribe.disconnect();
        setIsListening(false);
      }
      console.log("Commited:-", data);
    },

    onCommittedTranscriptWithTimestamps: (data) => {
      console.log("Committed with timestamps:", data);
      console.log("Timestamps:", data);
    },
  });

  useEffect(() => {
    console.log("Status:", Scribe.status);
    console.log("Connected:", Scribe.isConnected);
    console.log("Error:", Scribe.error);
  }, [Scribe.status, Scribe.isConnected, Scribe.error]);

  const startListening = async () => {
    try {
      const res = await GetScribeToken();
      console.log("Before connect");
      await Scribe.connect({
        token: res.data.token.token,
        microphone: {
          echoCancellation: true,
          noiseSuppression: true,
        },
      });
      console.log("after connect");
      setIsListening(true);
      console.log("ye he token bhai:", res.data.token.token);
      console.log(Scribe);
    } catch (err) {
      console.error(err);
    }
  };

  const stopListening = () => {
    isStoppingRef.current = true;
    Scribe.mute();
    Scribe.commit();
    setIsListening(false);
  };

  return {
    startListening,
    stopListening,
    partialTranscript,
    isListening,
  };
}
