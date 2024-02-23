import React from "react";
import "./App.css";
import Body from "./Components/Body sec/Body";
import SideBar from "./Components/SideBar sec/SideBar";
const App = () => {
  return (
    <div className="container">
      <SideBar />
      <Body />
    </div>
  );
};
export default App;
