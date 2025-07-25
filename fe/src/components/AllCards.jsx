import React, { useState } from "react";
import SliderCard from "./SliderCard";
import vector1 from "../assets/vectors/vector1.svg";
import vector2 from "../assets/vectors/vector2.svg";
import vector32 from "../assets/vectors/vector32.svg";
import vector4 from "../assets/vectors/vector4.svg";
import CardOnHover1 from "./CardOnHover1";
import Carousel from "./Carousel";

const AllCards = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredCard2, setIsHoveredCard2] = useState(false);

  return (
    <>
      <div className="">
        <p className=" ml-[112px] font-[Outfit] text-[24px] font-[500]">
          Your SkillShikshya Journey
        </p>
        <h1 className="font-[NohemBold] text-[32px] ml-[112px] font-bold">
          <span className="text-[#1DA077]">Step </span>In.{" "}
          <span className="text-[#1DA077]">Skill </span>Up.{" "}
          <span className="text-[#1DA077]">Stand </span>Out
        </h1>

        <div className="flex gap-1 items-center justify-center">
          <div className="flex flex-col gap-2">
            <div
              className="relative cursor-pointer overflow-hidde"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`transition-all duration-700 ease-in-out ${
                  isHovered ? "-translate-x-full opacity-0" : "fade "
                }`}
              >
                <SliderCard
                  title="Start with Clarity"
                  para="Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth."
                  vector={vector1}
                  subhead="Step into a better learning path."
                  bgcolor="#F45B5B"
                />
              </div>

              <div
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  isHovered ? " opacity-100" : "opacity-0"
                }`}
              >
                <CardOnHover1 />
              </div>
            </div>

            <SliderCard
              title="Mentored & Supported"
              para="Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own."
              vector={vector32}
              subhead="You're not learning alone."
              bgcolor="#F45B5B"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div
              className="relative cursor-pointer overflow-hidde"
              onMouseEnter={() => setIsHoveredCard2(true)}
              onMouseLeave={() => setIsHoveredCard2(false)}
            >
              <div
                className={`transition-all duration-700 ease-in-out ${
                  isHoveredCard2 ? "-translate-x-50 opacity-0" : "fade "
                }`}
              >
                <SliderCard
                  title="Learn by Doing"
                  para="Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery."
                  vector={vector4}
                  subhead="Practical skills, real projects."
                  bgcolor="#5492A0"
                  layout="flipped"
                />
              </div>

              <div
                className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                  isHoveredCard2 ? " opacity-100" : "opacity-0"
                }`}
              >
                <Carousel />
              </div>
            </div>

            <SliderCard
              title="Achieve & Showcase"
              para="Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture."
              vector={vector2}
              subhead="Build your portfolio, get job-ready."
              layout="flipped"
              bgcolor="#A88964"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCards;
