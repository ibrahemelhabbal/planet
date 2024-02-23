import React from "react";
import "./Body.css";
import Top from "./Top sec/Top";
import Listing from "./Listing sec/Listing";
import Activity from "./activity sec/Activity";
const Body = () => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};
export default Body;
