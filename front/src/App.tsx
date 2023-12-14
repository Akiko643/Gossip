import React from "react";
import "./App.css";
import Thread from "./components/Thread";
import ButtonAppBar from "./components/AppBar";
import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <ButtonAppBar />
      <div className="App">
        <Thread />
      </div>
    </>
  );
}

export default App;
