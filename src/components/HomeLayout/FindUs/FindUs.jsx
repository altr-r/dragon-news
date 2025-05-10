import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="mb-5 font-bold">Find Us On:</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 join-item justify-start">
          <FaFacebook size={24} />
          <span className="text-accent">Facebook</span>
        </button>
        <button className="btn bg-base-100 join-item justify-start">
          <FaX size={24} />
          <span className="text-accent">Twitter</span>
        </button>
        <button className="btn bg-base-100 join-item justify-start">
          <FaInstagram size={24} />
          <span className="text-accent">Instagram</span>
        </button>
      </div>
    </div>
  );
};

export default FindUs;
