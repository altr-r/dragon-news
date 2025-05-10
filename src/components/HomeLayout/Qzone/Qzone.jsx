import React from "react";
import swim from "/swimming.png";
import cls from "/class.png";
import play from "/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-6">Q-zone</h2>
      <div className="space-y-5 flex flex-col w-[90%] mx-auto">
        <img src={swim} alt="" />
        <img src={cls} alt="" />
        <img src={play} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
