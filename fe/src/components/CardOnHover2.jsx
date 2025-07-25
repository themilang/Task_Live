import React from "react";
import image3 from "../assets/vectors/img3.png";

function CardOnHover2() {
  return (
    <div className="flex justify-center">
      <div className="rounded-[5px] opacity-100">
        <div
          className="relative  overflow-hidden w-[592px] h-[341px] rounded-[30px] mt-[40px] ml-[89px] opacity-100"
          style={{ backgroundColor: "#5492A0" }}
        >
          <div className=" absolute w-[241px] h-[48px] mt-[36px] ml-[80px]">
            <p className="font-[NohemBold] text-[20px] w-[241px] h-[48]  text-white ">
              Focused faces—learning mode: ON!
            </p>
          </div>
          <div className=" absolute w-[572px] h-[329px] ml-[62px] mt-[36px]   ">
            <img src={image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOnHover2;
