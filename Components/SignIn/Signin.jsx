import React, { useState } from "react";
import "../SignIn/Sign.css";

import { useAuth } from "../LoginProvider/Loginprovider";
function Signin() {
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  const { Login } = useAuth();
  const [loading, setloading] = useState(false);

  const fetching = () => {
    setloading(true);
    setTimeout(() => {
      setloading(false);

      const token = "Getting the token";
      Login(token);
    }, 1000); 
  };
  return (
    <div className="img_1">
      <div className="All_sign_in">
        <h1>Sign Up</h1>
        <h3>Your Mail</h3>
        <input
          type="email"
          placeholder="testing123@gmail.com"
          value={mail}
          onChange={(event) => {
            setmail(event.target.value);
          }}
          autoComplete="off"
        ></input>
        <h3>Your Password</h3>
        <input
          type="password"
          value={pass}
          onChange={(event) => {
            setpass(event.target.value);
          }}
        ></input>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : (
          <button type="submit" onClick={fetching}>
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
}

export default Signin;
