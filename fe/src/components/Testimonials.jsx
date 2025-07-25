import React from "react";
import img1 from "../assets/images/img1.png";
import like from "../assets/images/like.gif";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import likecount from "../assets/images/likecount.gif";
import img6 from "../assets/images/img6.png";
import trophy from "../assets/images/trophy.gif";
import img5 from "../assets/images/img5.png";
import smileemoji from "../assets/images/smile.gif";
import img4 from "../assets/images/img4.png";
import arrow from "../assets/images/arrow.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import video from "../assets/videos/video.mp4";
function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [hoveredImg, setHoveredImg] = useState(null);
  const [hoveredImg6, setHoveredImg6] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowStars(true);
      setTimeout(() => setShowStars(false), 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const imagePosition = {
    initial: {
      img1: { x: 0, y: 0 },
      like: { x: 0, y: 0 },
      img2: { x: 0, y: 0 },
      img3: { x: 0, y: 0 },
      likecount: { x: 0, y: 0 },
      img4: { x: 0, y: 0 },
      img5: { x: 0, y: 0 },
      img6: { x: 0, y: 0 },
      smileemoji: { x: 0, y: 0 },
      trophy: { x: 0, y: 0 },
    },
    spread: {
      img1: { x: -46, y: -118 },
      like: { x: 0, y: -86 },
      img2: { x: -178 + 256, y: -292 + 152 },

      img3: { x: 189, y: 0 },
      likecount: { x: 178, y: -12 },
      img4: { x: -178, y: -292 + 130 },
      img5: { x: -178 + 8, y: +330 - 292 },
      img6: { x: -178 + 357, y: -259 + 292 },
      smileemoji: { x: -178 - 32, y: -292 + 213 },
      trophy: { x: 0, y: 100 },
    },
  };
  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 20,
    mass: 1,
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative  w-[1304px] h-[3738px] opacity-100 rounded-[5px] "
    >
      <div className="absolute  w-[193px] h-[193px] top-[118px] left-[144px] rounded-full bg-[#68BFA4] opacity-100 blur-[100px]" />
      <div className="absolute w-[193px] h-[193px] top-[474px] left-[1058px] rounded-full bg-[#68BFA4] opacity-100 blur-[100px]" />
      <div className="flex justify-center  ml-32">
        <div className="relative  w-[630px] h-[314px] mt-[178px] mx-[292px]">
          <div className="relative">
            <motion.div
              className="absolute w-[97px] h-[97px] top-[6px] left-[106px] rounded-[32px]"
              animate={
                isHovered
                  ? imagePosition.spread.img1
                  : imagePosition.initial.img1
              }
              transition={springConfig}
              onMouseEnter={() => setHoveredImg("img1")}
              onMouseLeave={() => setHoveredImg(null)}
            >
              <img
                className="w-full h-full rounded-[32px] hover:border-6  hover:border-[#97D3C0] hover:shadow-lg  "
                src={img1}
                alt="Profile 1"
              />

              <motion.div
                className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 "
                initial={{ opacity: 0 }}
                animate={{ opacity: showStars ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className=" bg-white ight-0 transform translate-x-1/4 -translate-y-1/4  shadow-2xl  px-2 py-1 rounded-lg text-xs whitespace-nowrap">
                  Amazing ⭐⭐⭐⭐
                </p>
              </motion.div>
            </motion.div>
            {hoveredImg === "img1" && (
              <motion.div
                className="absolute w-[325px] shadow-2xl h-[182px] p-4 top-[10px] left-[0px] rounded-lg bg-[#FAFAFA] text-[#2B2B2B] z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: "Outfit",
                  fontStyle: "regular",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "100%",
                }}
              >
                "I was amazed and impressed by the course structure as it was
                distinctly different from other courses in the market. The
                classes were highly interactive and the instructor was very
                humble and friendly. Recordings of the classes were provided
                within a short time after each class, which made revision very
                easy and beneficial. I have recommended the same course to my
                data-enthusiast friends."
                <p className="text-end">
                  Rajesh Dhakal <br />
                  Digital Marketing Student
                </p>
              </motion.div>
            )}
            <motion.img
              className="absolute w-[96px] h-[97px] top-[1px] left-[227px] rounded-[32px] opacity-100 mix-blend-multiply"
              src={like}
              alt="Like animation"
              animate={
                isHovered
                  ? imagePosition.spread.like
                  : imagePosition.initial.like
              }
              transition={springConfig}
            />

            <motion.img
              className="absolute w-24 h-[97px] top-0 left-[359px] rounded-[32px] opacity-100"
              src={img2}
              alt="Profile 2"
              animate={
                isHovered
                  ? imagePosition.spread.img2
                  : imagePosition.initial.img2
              }
              transition={springConfig}
            />
            <motion.img
              className="absolute w-[96px] h-[97px] top-[99px] left-[534px] rounded-[32px] opacity-100 object-cover"
              src={img3}
              alt="Profile 3"
              animate={
                isHovered
                  ? imagePosition.spread.img3
                  : imagePosition.initial.img3
              }
              transition={springConfig}
            />
            <motion.img
              className="absolute w-[96px] h-[97px] top-[213px] left-[495px] rounded-[32px] opacity-100 object-cover mix-blend-multiply"
              src={likecount}
              alt="Like count"
              animate={
                isHovered
                  ? imagePosition.spread.likecount
                  : imagePosition.initial.likecount
              }
              transition={springConfig}
            />
            <motion.img
              onMouseEnter={() => setHoveredImg6("img6")}
              onMouseLeave={() => setHoveredImg6(null)}
              className="absolute w-[97px] h-[98px] top-[239px] left-[375px] rounded-[32px] opacity-100 object-cover"
              src={img6}
              alt="Profile 6"
              animate={
                isHovered
                  ? imagePosition.spread.img6
                  : imagePosition.initial.img6
              }
              transition={springConfig}
            />

            {hoveredImg6 === "img6" && (
              <motion.div
                className="absolute w-[185.71px] p-2 z-50 bg-white  h-[313.24px] top-[-35px] left-[500px] rounded-lg overflow-hidden shadow-2xl "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  src={video}
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </motion.div>
            )}

            <motion.img
              className="absolute w-[96px] h-[97px] top-[239px] left-[257px] rounded-[32px] opacity-100 mix-blend-multiply object-cover"
              src={trophy}
              alt="Trophy"
              animate={
                isHovered
                  ? imagePosition.spread.trophy
                  : imagePosition.initial.trophy
              }
              transition={springConfig}
            />
            <motion.img
              className="absolute w-[96px] h-[97px] top-[244px] left-[128px] rounded-[32px] opacity-100 object-cover"
              src={img5}
              alt="Profile 5"
              animate={
                isHovered
                  ? imagePosition.spread.img5
                  : imagePosition.initial.img5
              }
              transition={springConfig}
            />
            <motion.img
              className="absolute w-[96px] h-[97px] top-[213px] left-[32px] rounded-[32px] opacity-100 mix-blend-multiply object-cover"
              src={smileemoji}
              alt="Smile emoji"
              animate={
                isHovered
                  ? imagePosition.spread.smileemoji
                  : imagePosition.initial.smileemoji
              }
              transition={springConfig}
            />
            <motion.img
              className="absolute w-[96px] h-[97px] top-[130px] left-0 rounded-[32px] opacity-100 mix-blend-multiply object-cover"
              src={img4}
              alt="Profile 4"
              animate={
                isHovered
                  ? imagePosition.spread.img4
                  : imagePosition.initial.img4
              }
              transition={springConfig}
            />
          </div>

          <div className="absolute w-[399px] h-[131px] top-[114px] left-[144px] flex flex-col items-center gap-5">
            <div
              className="text-[24px] leading-[100%] tracking-[0%] text-[#414141]"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              Hear How They Level Up Their Game!
            </div>

            <div
              className="text-[32px] leading-[120%] text-[#414141]"
              style={{
                fontFamily: "'Nohemi', sans-serif",
                fontWeight: 700,
                fontStyle: "normal",
              }}
            >
              Skill <span className="text-[#1DA077]">Masters</span> Unite! 🤝
            </div>

            <button className="flex items-center gap-2 font-semibold font-[Outfit]">
              View all Testimonials
              <img className="w-5 h-5" src={arrow} alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;
