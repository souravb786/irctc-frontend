import React, { useState } from "react";
export const AuthContext = React.createContext(undefined);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const data = { auth, setAuth };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
