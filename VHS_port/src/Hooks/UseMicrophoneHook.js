import { useState } from "react";

export const UseMicrophone = () => {
  const [isrecording, setIsrecording] = useState(null);
  const [stream, setStream] = useState(false);
  const [error, setError] = useState(null);

  const startRecording = async () => {
    try {
      const mediastream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      setStream(mediastream);
      setIsrecording(true);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const stopRecording = async () => {
    if (!stream) return;

    stream.getTracks().forEach((track) => {
      track.stop();
    });

    setStream(null);
    setIsrecording(false);
  };

  return {
    isrecording,
    stream,
    error,
    startRecording,
    stopRecording,
  };
};
