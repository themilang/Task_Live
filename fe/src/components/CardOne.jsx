import React from "react";
import { motion } from "framer-motion";

function ClarityCard() {
  return (
    <div className="flex justify-center">
      <div className="rounded-[5px] opacity-100">
        <div 
          className="relative w-[592px] h-[341px] rounded-[30px] mt-[40px] ml-[89px] opacity-100"
          style={{ backgroundColor: '#F45B5B' }} // Same red color as your other cards
        >
          {/* Floating vector animation */}
          <motion.div
            className="absolute mt-[29.59px] left-[-89px] opacity-100"
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
            <img src={vector1} alt="vector" /> {/* Use your vector image */}
          </motion.div>

          {/* Text content */}
          <div className="w-[351px] h-[225px] absolute top-[58px] left-[206px] text-right opacity-100 flex flex-col gap-[32px]">
            <div className="text-white w-[351px] h-[78px] opacity-100 gap-[10px] text-right">
              <h1 className="text-nowrap font-[NohemBold] text-[32px]">
                Clarity unlocked—
              </h1>
              <p className="font-[Outfit] text-nowrap text-[24px]">
                stickers, sips, and skills
              </p>
            </div>

            <p className="h-[115px] font-[OutfitLight] text-[18px] text-[#FAFAFA] text-right">
              all in one go!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClarityCard;