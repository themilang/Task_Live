import React, { useRef, useEffect, useState } from "react";

const Journey = () => {
  const totalBoxes = 300;

  const [randomNumbers, setRandomNumbers] = useState([]);
  const arrRef = useRef([]);

  useEffect(() => {
    const generateRandomNumbers = () => {
      const newNumbers = [];
      while (newNumbers.length < 10) {
        const num = Math.floor(Math.random() * totalBoxes);
        if (!newNumbers.includes(num)) {
          newNumbers.push(num);
        }
      }
      setRandomNumbers(newNumbers);
   
    };

    const interval = setInterval(generateRandomNumbers, 2000);
    return () => clearInterval(interval);
  }, []);

  console.log("Highlighted boxes:", randomNumbers);

  return (
    <div className="w-full h-full grid grid-cols-20">
      <div
        className="grid   w-max "
        style={{ gridTemplateColumns: "repeat(40, minmax(0, 1fr))" }}
      >
        {[...Array(totalBoxes)].map((_, i) => (
          <div
            key={i}
            className={`aspect-square w-[80px] h-[120px] border  border-gray-300 transition-colors duration-200 ${
              randomNumbers.includes(i)
                ? "  ease-in-out transition delay-300 bg-purple-500"
                : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
