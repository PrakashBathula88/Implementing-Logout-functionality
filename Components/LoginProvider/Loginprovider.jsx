import React, { useState } from "react";

 const Authcontext = React.createContext({
  token: '',
  isLoggedin: false,
  Login: (token) => {},
  Logout: () => {},
});

 export const AuthContextProvider = (props) => {
  const [token, settoken] = useState(null);

  const userisloggedin = !!token;

  const loginHandler = (token) => {
    settoken(token);
  };

  const logoutHandler = () => {
    settoken(null);
  };

  const Handling = {
    token: token,
    isLoggedin: userisloggedin,
    Login: loginHandler,
    Logout: logoutHandler,
  };

  return (
    <Authcontext.Provider value={Handling}>
      {props.children}
    </Authcontext.Provider>
  );
};

export default Authcontext;