import React from "react";
import "./styles/App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";

import { Switch, Route } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
