import React from "react";
import person from "../assets/person.jpg";
import "../styles/ProfilePage2.css";

function ProfilePage2() {
  return (
    <div>
      <div className="card">
        <img src={person} alt="Avatar" className="image" />
        <h1 className="cai"> Cai Jenko </h1>
        <h2 class="title"> Manchester </h2>
        <h3> 
        <ul className="list">
          <li> Football </li>
          <li> Rock Music </li>
          <li> Chicken </li>
        </ul>
        </h3>

        <p>
          <h4>
          <button>SMS me events in my area</button>
          </h4>
        </p>
      </div>
    </div>
  );
}

export default ProfilePage2;
