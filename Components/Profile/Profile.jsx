import React from "react";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../Profile/Profile.css";

import Authcontext from "../LoginProvider/Loginprovider";
const Profile = () => {
  const navigate=useNavigate();
  const newpasswordInputref = useRef();
  const authCtx = useContext(Authcontext);
  const SubmitHandler = (event) => {
    event.preventDefault();
    const enteredNewpassword = newpasswordInputref.current.value;
      
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAOD-cVUQG4pIYE1uRNv-KFcDQFvXv7JVU",
      {
        method: "POST",
        body: JSON.stringify({
          idtoken: authCtx.token,
          password: enteredNewpassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(res =>{
      navigate('/')
    });
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div
        style={{
          backgroundColor: "red",
          position: "fixed",
          height: "110%",
          width: "100vw",
        }}
      >
        <div className="profile_page">
          <h1> Profile</h1>
          <h3>New Password</h3>
          <input
            type="passsword"
            minLength="8"
            ref={newpasswordInputref}
          ></input>
          <button>Change passsword</button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
