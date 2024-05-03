import React, { useState, useEffect, createContext, useContext } from "react";
import ApiCall from "./ApiCall";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserContextProvider, useUser };
