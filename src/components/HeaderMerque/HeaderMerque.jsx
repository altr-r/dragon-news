import React from "react";
import Marquee from "react-fast-marquee";

const HeaderMerque = () => {
  return (
    <div className="flex items-center gap-6 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="gap-6" pauseOnHover={true}>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
          perferendis.
        </p>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
          perferendis.
        </p>
        <p className="font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
          perferendis.
        </p>
      </Marquee>
    </div>
  );
};

export default HeaderMerque;
