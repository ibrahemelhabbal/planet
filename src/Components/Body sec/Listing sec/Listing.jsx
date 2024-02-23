import React from "react";
import "./Listing.css";
// img>>>>>>>>>>>>>>>>>>>>>>>>>
import img from "../../../media/plant1.png";
import img1 from "../../../media/plant2.png";
import img2 from "../../../media/plant3.png";
import img3 from "../../../media/plant4.png";
import user1 from "../../../media/user1.jpg";
import user2 from "../../../media/user2.jpg";
import user3 from "../../../media/user3.jpg";
import user4 from "../../../media/user4.jpg";
// icon>>>>>>>>>>>>>>>>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
const Listing = () => {
  return (
    <div className="listingSec">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img} alt="img name" />
          <h3> hema Vince</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img1} alt="img name" />
          <h3> Spider plant</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="img name" />
          <h3> Coffe plant</h3>
        </div>
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img3} alt="img name" />
          <h3> Annual Vince</h3>
        </div>
      </div>
      <div className="seller flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user4} alt="img name" />
              <img src={user2} alt="img name" />
              <img src={user1} alt="img name" />
              <img src={user3} alt="img name" />
            </div>
            <div className="cardText">
              <span>
                14.836 Plant sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        {/* ................................. */}
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={user1} alt="img name" />
              <img src={user2} alt="img name" />
              <img src={user3} alt="img name" />
              <img src={user4} alt="img name" />
            </div>
            <div className="cardText">
              <span>
                126.786 Plant sold <br />
                <small>
                  88 Sellers <span className="date">18 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Listing;
