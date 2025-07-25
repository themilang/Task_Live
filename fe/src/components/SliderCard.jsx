import React, { useState } from "react";
import { motion } from "framer-motion";

function SliderCard({ layout = "default", ...props }) {
     

  return (
    <div className="flex justify-center">
      <div className="rounded-[5px] opacity-100">
        <div className="relative w-[592px] h-[341px] rounded-[30px] mt-[40px] ml-[89px] opacity-100 " 
        style={{ backgroundColor: props.bgcolor }}>
       
          <motion.div
            className={`absolute mt-[29.59px] ${
              layout === "flipped" ? "right-[-89px]" : "left-[-89px]"
            } opacity-100`}
            animate={{
              y: [0, -22, 0],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <img src={props.vector} alt="vector" />
          </motion.div>

          <div
            className={`w-[351px] h-[225px] absolute top-[58px] ${
              layout === "flipped" ? "left-[40px] text-left" : "left-[206px] text-right"
            } opacity-100 flex flex-col gap-[32px]`}
          >
            <div className={`text-white w-[351px] h-[78px] opacity-100 gap-[10px] ${
              layout === "flipped" ? "text-left" : "text-right"
            }`}>
              <h1 className="  text-nowrap font-[NohemBold]   text-[32px] ">
                {props.title}
              </h1>
              <p className="font-[Outfit] text-nowrap text-[24px]">
                {props.subhead}
              </p>
            </div>

            <p className={`h-[115px] font-[OutfitLight] text-[18px] text-[#FAFAFA] ${
              layout === "flipped" ? "text-left" : "text-right"
            }`}>
              {props.para}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderCard;