import React from "react";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./Logout.css";


function Logout() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
          <span className="username">
            {user.username}{" "}</span><br></br>
            <span className="profile">User_name</span>
          </span>
          <br></br>
          <div>
            <button onClick={handelLogout} className="logout__button">
              Logout
            </button>
           
                 <label className="switch">
                 <input type="checkbox" ></input>
                  <span className="slider round">  </span>
                    </label>
              
            </div>
          </button>
      </div>
  );
}

export default Logout;