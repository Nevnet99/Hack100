import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logo">Eventifind</div>
      <div className="ListOfButtons">
        <button> Home </button>
        <button> Profile </button>
        <button> Edit my preferences. </button>
      </div>
    </div>
  );
}

export default Navbar;
