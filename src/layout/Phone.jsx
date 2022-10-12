import React from "react";
import ImgOne from "../images/ImgOne.png";

export default function Phone() {
  return (
    <div className="bg-white">
      <div
        data-aos="flip-left"
        data-aos-duration="2000"
        className="mockup-phone border-base-content w-[320px] drop-shadow-lg"
      >
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 bg-black  px-4">
            <img src={ImgOne} alt="" className="w-[255px] h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
