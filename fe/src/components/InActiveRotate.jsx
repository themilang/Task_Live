import React from "react";
import { motion } from "framer-motion";
import Hshapes from "../assets/vectors/Hand-drawn shapes.svg";

function InActiveRotate({ title, description, number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }} 
      className="relative"
    >
      <div className="relative w-[280px] h-[461px] rounded-[32px] bg-[#F9EBEC]">
        <div className="w-[174px] h-[422px] flex flex-col gap-[24px]">
          <div className="w-[218px] h-[138px] mt-[41px] flex gap-[12px]">
            <div className="mt-[41px] w-[218px] h-[80px] -rotate-90">
              <h1 className="text-[#C33241] font-[Outfit] font-bold text-[32px]">
                {title}
              </h1>
              <p className="text-[18px] text-[#C33241] font-[Outfit]">
                {description}
              </p>
            </div>
          </div>
          <div className="relative ml-12 mt-[41px]">
            <div
              className="w- text-[#C33241] font-[NohemBold] text-[150px] mt-12"
              style={{ lineHeight: "120%" }}
            >
              {number}
              <span
                className="absolute font-[NohemBold] text-[64px] text-[#C33241]"
                style={{
                  lineHeight: "120%",
                  top: "0.3em",
                  right: "-1.em",
                }}
              >
                +
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default InActiveRotate;