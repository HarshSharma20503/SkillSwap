import React, { useState, useEffect, createContext, useContext } from "react";
import ApiCall from "./ApiCall";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      console.log("******** Inside fetchUser function ********");
      // Perform API call to fetch user data
      const response = await ApiCall("/user/registered/getDetails", "GET", navigate, null);
      const userData = response.data;
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      fetchUser(); // Fetch user data only if not available in local storage
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, []); // Run only on mount, including page reload

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUser = () => {
  return useContext(UserContext);
};

export { UserContextProvider, useUser };
