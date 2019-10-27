import React from "react";
import person from "../assets/person.jpg";
import "../styles/ProfilePage.css";

function ProfilePage() {
  return (
    <div className="background">
      <div className="profileContainer">
        <div className="profileAside">
          <div className="imageContainer">
            <img src={person} alt="Avatar" className="image" />
          </div>
          <div className="helloSection">
            <h1 className="hello"> Hi {"Tony"}</h1>
            <p>
              Hi my name is Tony, Im a QA tester at heart. <br />
              I love long walks in the server room, as well <br />
              as attending the best meetups that Manchester <br />
              has to offer.
            </p>
          </div>
        </div>

        <div className="profileInfo">
          <p>Full Name: Tony Tester</p>
          <p>Email: Tony@Tester.com</p>
          <p>Mobile: 0000 0000 000</p>
          <hr />
          <div>
            <h2>Likes</h2>
            <div>QA Testing</div>
            <div>Hackathons</div>
            <div>Memes</div>
          </div>
          <button className="customProfileButton">
            Recieve SMS messages for events near you.
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
