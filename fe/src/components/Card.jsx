import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandableCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Card 1",
      content: "This is the content ",
    },
    {
      id: 2,
      title: "Card 2",
      content: " card 2. ",
    },
    {
      id: 3,
      title: "Card 3",
      content: " card 3.",
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="flex w-[1216px] space-x-6 h-[461px] ml-[40px] mt-[40px]">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="relative rounded-[32px] shadow-md overflow-hidden cursor-pointer"
            initial={false}
            animate={{
              height: expandedIndex === index ? "auto" : "461px",
              width: expandedIndex === index ? "auto" : "280px",
            }}
            whileTap={{
              width: "210px",
            }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 150,
              bounce: 0.5,
              mass: 0.8,
              velocity: 0.1,
            }}
            onClick={() => setExpandedIndex(index)}
          >
            <motion.div
              className="absolute inset-0 z-0"
              initial={{ backgroundColor: "#F9EBEC" }}
              animate={{
                backgroundColor:
                  expandedIndex === index ? "#C33241" : "#F9EBEC",
              }}
              transition={{
                duration: 0.7,
                backgroundColor: {
                  duration: 0.9,
                  ease: [0, 0, 0, 0],
                },
              }}
            >
              <motion.div
                className="absolute left-0 top-100 w-7 h-7 rounded-full bg-[#F9EBEC]"
                style={{ y: "-110%" }}
                initial={{ scale: 0 }}
                animate={{
                  scale: expandedIndex === index ? 0 : 60,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.7,
                  scale: {
                    duration: 0.9,
                    ease: [0, 0, 0, 0],
                  },
                }}
              />
            </motion.div>

            <div className="relative z-10 p-4">
              <motion.h3
                className={`text-lg ${
                  expandedIndex === index
                    ? "font-bold text-white"
                    : "font-medium"
                }`}
              >
                {card.title}
              </motion.h3>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pt-2 text-white"
                  >
                    <p>{card.content}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableCards;
