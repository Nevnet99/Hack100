import React from "react";
import person from "../assets/person.jpg";
import "../styles/ProfilePage2.css";

function ProfilePage2() {
  return (
    <div>
      <div className="card">
        <img src={person} alt="Avatar" className="image" />
        <h1> Cai Jenko </h1>
        <p class="title"> Manchester </p>
        <ul className="list">
          <li> Football </li>
          <li> Rock Music </li>
          <li> Chicken </li>
        </ul>

        <p>
          <button>SMS me events in my area</button>
        </p>
      </div>
    </div>
  );
}

export default ProfilePage2;
