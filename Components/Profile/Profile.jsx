import React from "react";

import { useAuth } from "../LoginProvider/Loginprovider";
function Profile() {
  const { token, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  if (!logout) {
    return null;
  }

  return (
    <div style={{ margin: "800px", color: "red", fontSize: "400px",position:"relative" }}>
      <h1> Profile</h1>
      <p> {token}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
