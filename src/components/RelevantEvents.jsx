import React, { useEffect, useState } from "react";
import "../styles/RelevantEvents.css";
import axios from "axios";
import { Link } from "react-router-dom";

function RelevantEvents() {
  const [relevantEvents, setRelevantEvents] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.list.co.uk/v1/events", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2U1ZDU5ZGQtODQ5Yy00OWNhLWI3ODktYzIxMDM1ZTFlMDJkIiwia2V5X2lkIjoiNDExMmIxMzgtOTQ4YS00M2EyLWEzZDEtZWQ3OWE2MzYxMmFjIiwiaWF0IjoxNTcyMTI1MDE3fQ.iUdqQ3nxgYta3aN0zefCjVqLXX-lBhUXqXNd0SVedgw`
        }
      })
      .then(response => {
        console.log(response);
        setRelevantEvents(response.data.splice(0, 15));
      });
  }, []);

  return (
    <div className="RelevantEvents">
      <div className="eventContainer">
        <h1>Relevant Events.</h1>
        <div className="events-section">
          {relevantEvents.map(event => {
            return (
              <div className="event-card">
                <h1>{event.name}</h1>
                <p>
                  {" "}
                  {event.descriptions[0]
                    ? event.descriptions[0].descriptions
                    : null}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RelevantEvents;
