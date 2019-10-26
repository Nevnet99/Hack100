import React from "react";
import "../styles/MainPage.css";

function MainPage() {
  return (
    <div className="MainPage">
      <h1 className="MainPageTitle">
        Weekly Reminders, Delivered to Your Phone.
      </h1>
      <p className="MainPageDetails">
        We use your preferences, to build a list of events tailored for you.
      </p>
      <div className="inline-buttons">
        <button>Signup </button>
        or
        <button> Login</button>
      </div>
    </div>
  );
}

export default MainPage;
