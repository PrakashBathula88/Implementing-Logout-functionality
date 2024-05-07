import React, { useState } from "react";
import "../SignIn/Sign.css";
import axios from "axios";
function Signin() {
  const [mail, setmail] = useState("");
  const [pass, setpass] = useState("");
  // const [sign, setsign] = useState({});
  const [loading, setloading] = useState("");
  const fetching = () => {
    setloading(true);

    const data = {
      email: mail,
      password: pass,
      token: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[https://commerce-24c08-default-rtdb.firebaseio.com/]/",
        data
      )

      .then((response) => {
        console.log(response.data);
        const { idToken } = response.data;
        console.log(idToken);
        setmail("");
        setpass("");
      })

      .catch((err) => {
        console.error(err);
        alert("Authentication Failed");
      })

      .finally(() => {
        setloading(false);
      });
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
            CREATE NEW ACCOUNT
          </button>
        )}
      </div>
    </div>
  );
}

export default Signin;
