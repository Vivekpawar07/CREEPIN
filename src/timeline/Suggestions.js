import React from "react";
import "./Suggestions.css";
import Logout from "./Logout";

function Suggestions() {
  return (
    <div className="profile"> 
    <Logout />
    <div className="suggestions">
      <div className="suggestions__title">Suggestions for you 
      <botton className=" show_all"> Show All</botton>
      </div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar1">
            <img src="https://i.pinimg.com/736x/03/5b/87/035b87bc8329c48a69b0c3693ccd4e1e.jpg"   alt="gal godat " className="img" />
            </span>
            <div className="username__info">
              <span className="username">handemiyy</span>
              <span className="relation">New to CREEPI'N</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar1">
            <img src="https://wallpapercave.com/dwp1x/wp7549761.jpg"   alt="gal godat " className="img" />
            </span>
            <div className="username__info">
              <span className="username">gal_godat</span>
              <span className="relation">New to CREEPI'N</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar1">
            <img src="https://tse2.mm.bing.net/th?id=OIP.JrDnGpz_h51TRGKhZxDLDQHaI4&pid=Api&P=0"   alt="gal godat " className="img" />
            </span>
            <div className="username__info">
              <span className="username">emilia_clark</span>
              <span className="relation">New to CREEPI'N</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>

        <div className="suggestions__username">
          <div className="username__left">
            <span className="avatar1">
            <img src="https://tse1.mm.bing.net/th?id=OIP.hIPyFYa_G7rsgW3_s4j3MAHaJE&pid=Api&P=0"   alt="gal godat " className="img" />
            </span>
            <div className="username__info">
              <span className="username">dualipa</span>
              <span className="relation">New to CREEPI'N</span>
            </div>
          </div>
          <button className="follow__button">Follow</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Suggestions;