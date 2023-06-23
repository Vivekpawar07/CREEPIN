import React ,{ useState}from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import {  useSelector } from "react-redux";


import Reels from "../Reels";






function Sidenav() {
  const user = useSelector((state) => state.data.user.user);

const handleChange = () => {
  <Reels/>
  };

  
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
      src="https://i.ibb.co/2vzjzfr/creepin2.png" 
        alt="Instagram Logo"
      />
    
      <div className="sidenav__buttons">
     
        <button className="sidenav__button">
         <HomeIcon />
          <span>Home</span>
        </button>
        
        <button className="sidenav__button" >
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        
        <button  onClick={handleChange} className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
        <button className="sidenav__button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}{" "}
            
          </span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
      
    </div>
    
   
  );
}

export default Sidenav ;