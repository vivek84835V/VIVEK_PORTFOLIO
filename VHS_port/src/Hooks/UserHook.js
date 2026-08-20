import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { AskQue, TextToSpeak } from "../Services/Api_service";

function UserHook() {
  const context = useContext(UserContext);

  const { loading, setloading, user, setUser } = context;

  const handleUser = async (question) => {
    setloading(true);
    try {
      const data = await AskQue(question);
      console.log("UserHook data:", data);
      setUser(data);
      return data;
    } catch (err) {
      console.log(err);
      return null;
    } finally {
      setloading(false);
    }
  };

  const handleTextToSpeak = async (text) => {
    setloading(true);
    try {
      const audio = await TextToSpeak(text);
      console.log("UserHook data:", audio);
      setUser(audio);
      return audio;
    } catch (err) {
      console.log(err);
      return null;
    } finally {
      setloading(false);
    }
  };

  return {
    user,
    loading,
    handleUser,
    handleTextToSpeak,
  };
}

export default UserHook;
