import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import vectoricons from "../assets/vectors/vectoricons.svg";
import InActiveRotate from "./InActiveRotate";
function Rotate() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const rightBoxes = [
    {
      title: "Box 1",
      count: 23,
      mainTitle: "All Courses",
      description: "courses you're powering through right now.",
    },
    {
      title: "Box 2",
      count: 5,
      mainTitle: "Upcoming Courses",
      description: "courses you will soon start.",
    },
    {
      title: "Box 3",
      count: 10,
      mainTitle: "Ongoing Courses",
      description: "courses currently in progress.",
    },
  ];

  return (
    <div className="flex gap-6">
      {rightBoxes.map((box, index) => (
        <motion.div
          key={index}
          initial={{ width: 280 }}
          animate={{
            width: expandedIndex === index ? 592 : 280,
            backgroundColor: expandedIndex === index ? "#C33241" : "#F9EBEC",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-[461px] rounded-[32px] cursor-pointer overflow-hidden relative flex-shrink-0"
          onClick={() =>
            setExpandedIndex(expandedIndex === index ? null : index)
          }
        >
          
          <motion.div
            className="absolute mt-[126px] ml-[66px] w-[459px] h-[93px]"
            animate={expandedIndex !== index ? { x: -550 } : { x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <img src={vectoricons} alt="vectoricons" />
          </motion.div>

          <motion.div
            className="absolute flex flex-col w-[236px] h-[98px] gap-[12px] text-white"
            style={{ transformOrigin: "left center" }}
            animate={{
              rotate: expandedIndex === index ? 0 : -90,
              top: expandedIndex === index ? 283 : 190,
              left: expandedIndex === index ? 340 : 120,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="mt-6 w-[164px] h-[40px]">
              <h1 className="font-[Outfit] w-[12px] -ml-6 font-bold text-[32px] text-nowrap">
                {box.mainTitle}
              </h1>
            </div>
            <div>
              <p className="font-[Outfit] -ml-6 text-[18px]">
                {box.description}
              </p>
            </div>
          </motion.div>

          <div className="absolute iflex flex-col">
            {expandedIndex === index ? (
              <div className="relative w-full h-full text-white">
                <div className="flex absolute w-[161px] h-[23px] mt-[40px] ml-[393px] gap-[8px] items-center">
                  <p className="font-[Outfit] text-[18px]">{`View all Courses`}</p>
                  <div>
                    <FaArrowRight />
                  </div>
                </div>

                <div className="absolute w-[442px] h-[138px] mt-[283px] ml-[66px] flex gap-[4px]">
                  <div className="w-[200px] h-[138px]">
                    <p
                      className="font-[NohemBold] text-[150px]"
                      style={{ lineHeight: "120%" }}
                    >
                      {box.count.toString().padStart(2, "0")}
                    </p>
                  </div>
                  <div
                    className="font-[NohemBold] text-[64px]"
                    style={{ lineHeight: "120%" }}
                  >
                    +
                  </div>
                </div>
              </div>
            ) : (
              <>
                <InActiveRotate
                  title={box.mainTitle}
                  description={box.description}
                  number={box.count.toString().padStart(2, "0")}
                />
              </>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Rotate;
