import React from "react";
import "./Activity.css";
// img>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
import user1 from "../../../media/user1.jpg";
import user2 from "../../../media/user2.jpg";
import user3 from "../../../media/user3.jpg";
import user4 from "../../../media/user4.jpg";
// >>>>>>>>>>>>>>>>>>>icons
import { BsArrowRightShort } from "react-icons/bs";
const Activity = () => {
  return (
    <div className="activitySec">
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="cus img" />
          <div className="customerDetails">
            <span className="name">sandy ibrahem</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user2} alt="cus img" />
          <div className="customerDetails">
            <span className="name">sandy ibrahem</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user3} alt="cus img" />
          <div className="customerDetails">
            <span className="name">sandy ibrahem</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user4} alt="cus img" />
          <div className="customerDetails">
            <span className="name">sandy ibrahem</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={user2} alt="cus img" />
          <div className="customerDetails">
            <span className="name">sandy ibrahem</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
};
export default Activity;
