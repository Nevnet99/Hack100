import React, { useState } from "react";
import person from "../assets/person.jpg";
import "../styles/ProfilePage.css";
import axios from "axios";
var clockwork = require("clockwork")({
  key: "671f0162d38feb0e2ebdd86bbc3257821e4ac123"
});

function ProfilePage() {
  const [userPref, setuserPref] = useState([
    "QA Testing",
    "Books",
    "Knitting",
    "Coding",
    "Dancing"
  ]);
  const [userMobile, setUserMobile] = useState("07834409817");
  const handleClockWork = () => {
    axios
      .get("https://api.list.co.uk/v1/events", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2U1ZDU5ZGQtODQ5Yy00OWNhLWI3ODktYzIxMDM1ZTFlMDJkIiwia2V5X2lkIjoiNDExMmIxMzgtOTQ4YS00M2EyLWEzZDEtZWQ3OWE2MzYxMmFjIiwiaWF0IjoxNTcyMTI1MDE3fQ.iUdqQ3nxgYta3aN0zefCjVqLXX-lBhUXqXNd0SVedgw`
        }
      })
      .then(response => {
        clockwork.sendSms(
          {
            To: "07834409817",
            Content: `Hi Tony, we have ${userPref.length} events available near you!
              Just to name a few: 
              Intermediate Knitting Class,
              Weekly book club (Local Library),
              `
          },
          function(error, resp) {
            if (error) {
              console.log("Something went wrong", error);
            } else {
              console.log("Message sent", resp.responses[0].id);
            }
          }
        );
      });
  };

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
            <div className="likesSection">
              {userPref.map(pref => {
                return <p>{pref}</p>;
              })}
            </div>
          </div>
          <button onClick={handleClockWork} className="customProfileButton">
            Recieve SMS messages for events near you.
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
