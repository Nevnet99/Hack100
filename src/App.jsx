import React from "react";
import "./styles/App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";
import ProfilePage from "./components/ProfilePage";
import AboutUs from "./components/AboutUs";

import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";
import UserPreferences from "./components/UserPreferences";

function App() {
  const handleUserLogin = () => {};

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/SignUp">
          <Signup />
        </Route>
        <Route exact path="/Login">
          <Signup />
        </Route>
        <Route exact path="/Preferences">
          <UserPreferences />
        </Route>
        <Route exact path="/ProfilePage">
          <ProfilePage />
        </Route>
        <Route exact path="/AboutUs">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
