import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userpng from "/user.png";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handeLogout = () => {
    console.log("User trying to logout");
    logOut()
      .then(() => {
        alert("Logged Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" flex justify-between items-center">
      <div className="navbar-start">
        <div>{user && user.email}</div>
      </div>
      <div className="navbar-center gap-6 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="navbar-end gap-6">
        <img src={userpng} alt="" />
        {user ? (
          <button onClick={handeLogout} className="btn btn-primary">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
