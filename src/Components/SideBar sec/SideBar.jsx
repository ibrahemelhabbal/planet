import React from "react";
import "./SideBar.css";
import logo from "../../media/logo.png";
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
const SideBar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="image name" />
        <h2>planti.</h2>
      </div>
      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">dashbord</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">delev</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">explore</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">goal</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="settingDiv">
        <h3 className="divTitle">SETTING</h3>
        <ul className="menuList grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">dashbord</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">delev</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">explore</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">goal</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>
            Having trouble in planti,pleade contact us from for more questions
          </p>
          <button className="btn">go to help center</button>
        </div>
      </div>
    </div>
  );
};
export default SideBar;
