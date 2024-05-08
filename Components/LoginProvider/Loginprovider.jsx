import { createContext, useState, useContext } from "react";
const Authcontext = createContext();

export const useAuth = () => {
  return useContext(Authcontext);
};

function Loginprovider({ children }) {
  const [token, settoken] = useState(localStorage.getItem("Token") || "");

  const Login = () => {
    localStorage.setItem("Token", token);
    settoken(token);
  };

  const Logout = () => {
    localStorage.removeItem("Token");
    settoken("");
  };
  return (
    <div>
      <Authcontext.Provider value={{ token, Login, Logout }}>
        {children}
      </Authcontext.Provider>
    </div>
  );
}

export default Loginprovider;
