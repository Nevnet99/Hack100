import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [userDeets, setUserDeets] = useState({ username: "", password: "" });
  const handleChange = e => {
    setUserDeets({ ...userDeets, [e.target.name]: e.target.value });
    console.log(userDeets);
  };
  return (
    <div className="loginContainer">
      <div className="loginModal">
        <div className="usernameContainer">
          <label for="uname">Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            onChange={handleChange}
            value={userDeets.username}
            required
          />
        </div>

        <div className="passwordContainer">
          <label for="psw">Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
            value={userDeets.password}
            required
          />
        </div>
        <button type="submit">Login</button>
        <Link to="/Signup">
          <button type="submit">Don't have an account ?</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
