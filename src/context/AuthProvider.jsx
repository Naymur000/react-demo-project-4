import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/localStorage";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({employees: [], admin:null});

  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
