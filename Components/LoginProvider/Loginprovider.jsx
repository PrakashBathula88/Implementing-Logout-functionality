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

  const loginhandler = (token) => {
    settoken(token);
  };

  const logouthandler = () => {
    settoken(null);
  };

  const Handling = {
    token: token,
    isLoggedin: userisloggedin,
    Login: loginhandler,
    Logout: logouthandler,
  };

  return (
    <Authcontext.Provider value={Handling}>
      {props.children}
    </Authcontext.Provider>
  );
};

export default Authcontext;