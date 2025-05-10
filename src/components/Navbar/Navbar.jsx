import React from "react";
import { NavLink } from "react-router";
import userpng from "/user.png";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center">
      <div className="navbar-start"></div>
      <div className="navbar-center gap-6 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="navbar-end gap-6">
        <img src={userpng} alt="" />
        <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
