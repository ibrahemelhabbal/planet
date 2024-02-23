import React from "react";
import "./Top.css";

// icons
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
// import img
import img from "../../../media/user.jpg";
import img2 from "../../../media/tree.webp";
// vid
import video from "../../../media/vid1.mp4";
const Top = () => {
  return (
    <div className="topSec">
      <div className="headerSec flex">
        <div className="title">
          <h1>Welcome to Planti.</h1>
          <p>Hello IsraTech,Welcome back!</p>
        </div>
        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>
        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <IoNotificationsOutline className="icon" />
          <div className="adminImage">
            <img src={img} alt="admin img" />
          </div>
        </div>
      </div>
      <div className="cardSec flex">
        <div className="rightCard flex">
          <h1>create and sell extraordinary products</h1>
          <p>
            The world's fast growing industry today are natural made products!
          </p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>
              <div className="flex">
                <span>
                  Today <br />
                  <small>4 Orders</small>
                </span>
                <span>
                  This Month <br />
                  <small> 122 Orders</small>
                </span>
              </div>
              <span className="flex link">
                Go to my orders <BsArrowRightShort className="icon" />
              </span>
            </div>
            <div className="imgDiv">
              <img src={img2} alt="img" />
            </div>
            {/* laterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}

            <div className="sideBarCard2">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>
                  Having trouble in planti,pleade contact us from for more
                  questions
                </p>
                <button className="btn">go to help center</button>
              </div>
            </div>
            {/* laterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
