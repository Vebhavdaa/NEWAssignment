import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [email, setemail] = useState(null);
  const [password,setPassword]=useState(null)
  const[user,setUser]=useState(false)

  const login = (email) => {
    setemail(email);
    setPassword(password)
    setUser(true)
  };

  const logout = () => {
    setemail(null);
    setPassword(null)
    setUser(false)
  };
  return (
    <AuthContext.Provider value={{ email,password,user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};
