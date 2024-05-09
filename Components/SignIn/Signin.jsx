import React, { useState, useRef, useContext } from "react";
import "../SignIn/Sign.css";

import { useNavigate } from "react-router-dom";

import Authcontext from "../LoginProvider/Loginprovider";
function Signin() {
  const navigate = useNavigate();
  const [islogin, setislogin] = useState(true);
  const [loading, setloading] = useState(false);
  const emailref = useRef();
  const passref = useRef();
  const authCtx = useContext(Authcontext);
  const switchhandler = () => {
    setislogin((prevestate) => !prevestate);
  };

  const Submiting = (event) => {
    event.preventDefault();
    const enteredemail = emailref.current.value;
    const enteredpassword = passref.current.value;
    setloading(true);
    let url;
    if (islogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOD-cVUQG4pIYE1uRNv-KFcDQFvXv7JVU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOD-cVUQG4pIYE1uRNv-KFcDQFvXv7JVU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredemail,
        password: enteredpassword,
        returnsecuretoken: false,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        setloading(false);
        if (!res.ok) {
        } else {
          return res.json().then((data) => {
            const errormessage = "Authentication failed";
            // if (data && data.error && data.error.message) {
            //   errormessage = data.error.message;
            // }

            throw new Error(errormessage);
          });
        }
      })
      .then((data) => {
        navigate("/");
        authCtx.Login(data.idToken);
      })
      .catch((err) => {
        // alert(err.message);
      });
  };

  return (
    <div className="img_1">
      <div className="All_sign_in">
        <h1>{islogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={Submiting}>
          <h3>Your Mail</h3>
          <input
            type="email"
            placeholder="testing123@gmail.com"
            ref={emailref}
            autoComplete="off"
            required
          ></input>
          <h3>Your Password</h3>

          <input type="password" ref={passref}></input>
          <div>
            {!loading && (
              <button type="submit">
                {islogin ? "Login" : "Create Account"}
              </button>
            )}
            {loading && <p className="Load">Loading...</p>}
            <button className="create_new" onClick={switchhandler}>
              {islogin ? "Create new Account" : "Login with existing Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;
