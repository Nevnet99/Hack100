import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="heroImage"></div>
      <div className="Logo">Eventifind</div>
      <div className="ListOfButtons">
        <Link to="/">
          <button className="custom-button"> Home </button>
        </Link>
        <Link to="/Profile/:id">
          <button className="custom-button"> Profile </button>
        </Link>
        <Link to="/Preferences">
          <button className="custom-button"> Edit my preferences. </button>
        </Link>
      </div>
      {/* <div className="Login-Section">
        <button> Signup </button>
        <button> Login </button>
      </div> */}
    </div>
  );
}

export default Navbar;
