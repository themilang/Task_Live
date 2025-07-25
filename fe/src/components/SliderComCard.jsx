import { motion } from "framer-motion";

export const SliderComCard = ({ 
  image, 
  title, 
  subtitle, 
  description 
}) => {
  return (
    <div className="relative w-[592px] h-[341px] rounded-[30px] mt-[40px] ml-[89px] opacity-100 bg-[#F45B5B]">
    
      <motion.div
        className="absolute mt-[29.59px] ml-[-89px] opacity-100"
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
        <img src={image} alt={title} />
      </motion.div>

      
      <div className="text-right w-[351px] h-[225px] absolute top-[58px] left-[206px] opacity-100 flex flex-col gap-[32px]">
        <div className="text-right text-white w-[351px] h-[78px] opacity-100 gap-[10px]">
          <h1 className="font-[NohemBold] mb-2 text-[32px]">{title}</h1>
          <p className="font-[Outfit] text-[24px]">{subtitle}</p>
        </div>

        <p className="h-[115px] font-[OutfitLight] text-[18px] text-right text-[#FAFAFA]">
          {description}
        </p>
      </div>
    </div>
  );
};