import React, { useEffect, useState } from "react";
import "../styles/MainPage.css";
import axios from "axios";
import { Link } from "react-router-dom";
import RelevantEvents from "./RelevantEvents";

function MainPage() {
  const [relevantEvents, setRelevantEvents] = useState([]);
  useEffect(() => {
    // axios
    //   .get("https://api.list.co.uk/v1/events", {
    //     headers: {
    //       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2U1ZDU5ZGQtODQ5Yy00OWNhLWI3ODktYzIxMDM1ZTFlMDJkIiwia2V5X2lkIjoiNDExMmIxMzgtOTQ4YS00M2EyLWEzZDEtZWQ3OWE2MzYxMmFjIiwiaWF0IjoxNTcyMTI1MDE3fQ.iUdqQ3nxgYta3aN0zefCjVqLXX-lBhUXqXNd0SVedgw`
    //     }
    //   })
    //   .then(response => {
    //     console.log(response);
    //     setRelevantEvents(response.data.splice(0, 15));
    //   });
  }, []);

  return (
    <div className="MainPage">
      <div className="heroImage"></div>
      <h1 className="MainPageTitle">
        Weekly Reminders, Delivered to Your Phone.
      </h1>
      <p className="MainPageDetails">
        We use your preferences, to build a list of events tailored for you and
        your needs.
      </p>
      <div className="inline-buttons">
        <Link to="/SignUp">
          <button className="mainpage-buttons">Signup </button>
        </Link>
        or
        <Link to="/Login">
          <button className="mainpage-buttons"> Login</button>
        </Link>
      </div>
      <RelevantEvents />
    </div>
  );
}

export default MainPage;
