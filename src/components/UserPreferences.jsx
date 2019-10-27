import React, { useState, useEffect } from "react";
import "../styles/UserPreferences.css";
import { useHistory } from "react-router-dom";
import Confetti from "react-confetti";

function UserPreferences() {
  const [pane, setPane] = useState(0);
  const [answer, setAnswer] = useState({
    firstName: "",
    lastName: ""
  });

  let history = useHistory();

  const handleChange = e => {
    if (e.target.name === "firstName") {
      setAnswer({ ...answer, firstName: e.target.value });
    } else if (e.target.name === "lastName") {
      setAnswer({ ...answer, lastName: e.target.value });
    }
  };

  const handleCheckBox = e => {
    setAnswer({ ...answer, [e.target.name]: e.target.value });
  };

  return (
    <div className="UserPreferences">
      {pane === 0 ? (
        <div className="pane1">
          <h1>First, Tell us a bit about yourself</h1>
          <label>
            First name:
            <input type="text" name="firstName" onChange={handleChange} />
          </label>
          <label>
            Last name:
            <input type="text" name="lastName" onChange={handleChange} />
          </label>
          <button className="button" onClick={() => setPane(1)}>Next</button>
        </div>
      ) : null}

      {pane === 1 ? (
        <div className="pane2">
          <h1>What do you enjoy?</h1>

          <div className="checkbox-valley">
            <label>
              MOVIES:
              <input onClick={handleCheckBox} name="movies" type="checkbox" />
            </label>
            <label>
              COFFEE:
              <input onClick={handleCheckBox} name="coffee" type="checkbox" />
            </label>
            <label>
              LIVE MUSIC:
              <input
                onChange={handleCheckBox}
                name="live_music"
                type="checkbox"
              />
            </label>
            <label>
              DINNER PARTIES:
              <input
                onClick={handleCheckBox}
                name="dinner_parties"
                type="checkbox"
              />
            </label>
            <label>
              SPORTS:
              <input onClick={handleCheckBox} name="sports" type="checkbox" />
            </label>
            <label>
              THEATRE:
              <input onClick={handleCheckBox} name="theatre" type="checkbox" />
            </label>
            <label>
              COMEDY:
              <input onClick={handleCheckBox} name="comedy" type="checkbox" />
            </label>
            <label>
              QUIZZES:
              <input onClick={handleCheckBox} name="quizzes" type="checkbox" />
            </label>
            <label>
              BOOKCLUBS:
              <input
                onClick={handleCheckBox}
                name="bookclubs"
                type="checkbox"
              />
            </label>
          </div>
          <button className="button" onClick={() => setPane(2)}>Next</button>
        </div>
      ) : null}

      {pane === 2 ? (
        <div className="pane3">
          {}
          <h1>You're all Done!</h1>
          <h2>Welcome to Eventifind {`${answer.firstName}`}.</h2>
          <Confetti></Confetti>
          <button className="button" onClick={() => history.push("/")}>Finished!</button>
        </div>
      ) : null}
    </div>
  );
}

export default UserPreferences;
