import React, { useState } from "react";
import "../styles/Signup.css";
import { useHistory, Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const handleSubmit = e => {
    // Need to hook up to backend.
    history.push("/Preferences");
    console.log("Submitted :) ");
  };
  const handleChange = e => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="Signup">
      <div className="userProfile">
        <h1 className="signUp"> Sign Up</h1>
        <label className="usernameInput">
          Username:
          <input
            placeholder="Enter your Username..."
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>

        <label className="passwordInput">
          Password:
          <input
            placeholder="Enter your Password..."
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button className="button" onClick={handleSubmit}>Create Account</button>
        <Link to="/Login">
          <button className="button">Already have an account?</button>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
