import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CardOnHover2 from "./CardOnHover2";
import ChangeCard from "./ChageCard";

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const cards = [<CardOnHover2 key="1" />, <ChangeCard key="2" />];

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="relative flex justify-center items-center">
      <div className="">
        {cards[index]}

        <button
          onClick={prevCard}
          className="absolute top-[200px] cursor-pointer left-[89px] transform -translate-y-1/2 w-[62px] h-[62px] bg-white rounded-full shadow flex items-center justify-center"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={nextCard}
          className="absolute cursor-pointer top-[200px] right-[-4px] transform -translate-y-1/2 w-[62px] h-[62px] bg-white rounded-full shadow flex items-center justify-center"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
