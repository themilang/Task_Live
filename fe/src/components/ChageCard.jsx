import React from "react";
import image2 from "../assets/vectors/img2.png";

function ChangeCard() {
  return (
    <div className="flex justify-center">
      <div className="rounded-[5px] opacity-100">
        <div
          className="relative  overflow-hidden w-[592px] h-[341px] rounded-[30px] mt-[40px] ml-[89px] opacity-100"
          style={{ backgroundColor: "#5492A0" }}
        >
          <div className="w-[353px] h-[48px] mt-[41px] ml-[119px] ">
            <p className=" font-[NohemBold] text-[20px] text-white">
              Laptops, lessons, and a whole lot of growth!
            </p>
            <div className="absolute top-[24px] left-[10px] w-[572px] h-[329px] opacity-100 rotate-0">
              <img src={image2} alt="image2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeCard;
