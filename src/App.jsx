import React from "react";
import "./styles/App.css";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;
