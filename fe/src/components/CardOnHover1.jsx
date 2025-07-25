import React from "react";
import wow from "../assets/vectors/wow.png";
import image1 from "../assets/vectors/img1.png";
function CardOnHover1() {
  return (
    <div className="flex justify-center">
      <div className="rounded-[5px] opacity-100">
        <div
          className="relative w-[592px] h-[341px] rounded-[30px] mt-[40px] ml-[89px] opacity-100"
          style={{ backgroundColor: "#F45B5B" }}
        >
          <div className=" absolute w-[352px]  h-[341px] ml-[24px] rounded-[23px] overflow-hidden ">
            <img className=" " src={image1} alt="image1" />
          </div>
          <div className=" font-[NohemBold] text-[20px] absolute w-[241px] h-[72px] mt-[32px] ml-[326px] text-white">
            <p>Clarity unlocked—stickers, sips, and skills all in one go!</p>
          </div>

          <div
            className="absolute top-[24px] left-[67px] opacity-100 "
            style={{
              width: "88.00000162382196px",
              height: "88.00000162382196px",
              transform: "rotate(11.91deg)",
            }}
          >
            <img src={wow} alt="wow" />
          </div>
          <div
            className="absolute top-[193px] left-[385px] opacity-100"
            style={{
              width: "87.99999949239495px",
              height: "87.99999949239495px",
              transform: "rotate(142.56)",
            }}
          >
            <img src={wow} alt="wow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOnHover1;
