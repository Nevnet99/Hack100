import React from "react";
import "../styles/Signup.css";

function Signup() {
  return (
    <div className="Signup">
      <h1>Signup</h1>
      <label>
        Username:
        <input
          className="usernameInput"
          placeholder="Enter your Username..."
          type="text"
          name="username"
        />
      </label>

      <label>
        Password:
        <input
          className="passwordInput"
          placeholder="Enter your Password..."
          type="text"
          name="password"
        />
      </label>
    </div>
  );
}

export default Signup;
