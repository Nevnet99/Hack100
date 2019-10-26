import React, { useState, useEffect } from "react";
import "../styles/UserPreferences.css";
import { useHistory } from "react-router-dom";

function UserPreferences() {
  const [pane, setPane] = useState(0);

  let history = useHistory();

  return (
    <div className="UserPreferences">
      {pane === 0 ? (
        <div className="pane1">
          <h1>First, Tell us a bit about yourself</h1>
          <button onClick={() => setPane(1)}>Next</button>
        </div>
      ) : null}

      {pane === 1 ? (
        <div className="pane2">
          <h1>What do you enjoy?</h1>
          <button onClick={() => setPane(2)}>Next</button>
        </div>
      ) : null}

      {pane === 2 ? (
        <div className="pane3">
          <h1>Have we missed anything?</h1>
          <button onClick={() => history.push("/")}>Finished!</button>
        </div>
      ) : null}
    </div>
  );
}

export default UserPreferences;
