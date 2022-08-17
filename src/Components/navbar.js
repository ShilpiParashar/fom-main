import React from "react";
// import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import classes from "./LandingPage.module.css";
// import {Link, Routes ,Route} from 'react-router-dom' ;
import classes from "./AboutPage.module.css";

function Navbar() {
  return (
    <div>
      <div className={classes.nav}>
        <ul className={classes.list}>
          <li className={classes.listitem}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={classes.listitem}>Meditation</li>
          <li className={classes.listitem}>Yoga Accessories</li>
          <li className={classes.listitem}>Travel Accessories </li>
          <li className={classes.listitem}>Personal Coaching</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
