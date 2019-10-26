import React from "react";
import person from "../assets/person.jpg"
import "../styles/ProfilePage.css";


function ProfilePage() {
    return (
<div className="back">
<h1 className="hello"> Hello ${'User'}</h1>
<div className="container">
    <img src={person} alt="Avatar" className="image" />
    </div>
    <div className="text">The user's name imported here</div>

  
<h3 className="email"> Email </h3> 
<h3 className="interests"> Interests </h3>
<ul className="list">
    <li> </li>
    <li> </li>
    <li> </li>
</ul>
<button className="button"> Text me an event of interest </button>
</div>

    )};

export default ProfilePage;