import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setloading] = useState(false);

  return (
    <UserContext.Provider value={{ loading, setloading, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}