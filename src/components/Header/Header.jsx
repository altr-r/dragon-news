import React from "react";
import logo from "/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-4">
      <img src={logo} alt="" />
      <p>Journalism without Fear or Favour</p>
    </div>
  );
};

export default Header;
