import React from "react";
import logo from "/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-4">
      <img src={logo} alt="" />
      <p className="text-accent">Journalism without Fear or Favour</p>
      <div className="flex">
        <p className="text-semibold">{format(new Date(), "EEEE")}</p>
        <p className="text-accent">{format(new Date(), ", MMMM MM, yyyy")}</p>
      </div>
    </div>
  );
};

export default Header;
