import React from "react";
import "../styles/MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="heroImage"></div>
      <h1 className="MainPageTitle">
        Weekly Reminders, Delivered to Your Phone.
      </h1>
      <p className="MainPageDetails">
        We use your preferences, to build a list of events tailored for you.
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
    </div>
  );
}

export default MainPage;
