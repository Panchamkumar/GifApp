import React from "react";
import "./App.css";
import Random from "./components/Random";
import Tag from "./components/Tag";

function App() {
  return (
    <div>
      <h1>Random Gif Application</h1>
      <div className="maingifbody">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
