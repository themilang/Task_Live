import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CustomCarousel = () => {
  return (
    <div className="relative w-full max-w-[1100px] mx-auto bg-[#5BA2AE] rounded-[60px] p-10 flex items-center justify-between overflow-hidden">
      {/* Left Arrow */}
      <button className="w-[70px] h-[70px] bg-white rounded-full shadow-md flex items-center justify-center z-10">
        <FaArrowLeft className="text-2xl text-gray-600" />
      </button>

      {/* Center Content */}
      <div className="flex flex-col items-center text-center z-0">
        <p className="text-white text-xl font-semibold">
          Laptops, lessons, and a whole lot of <br /> growth!
        </p>

        {/* Image Layer */}
        <img
          src="/your-cutout-image.png" // <-- Transparent PNG with pink stroke pre-applied
          alt="Learning Session"
          className="mt-6 w-[800px] max-w-full drop-shadow-[0_0_15px_fuchsia]"
        />
      </div>

      {/* Right Arrow */}
      <button className="w-[70px] h-[70px] bg-white rounded-full shadow-md flex items-center justify-center z-10">
        <FaArrowRight className="text-2xl text-gray-600" />
      </button>
    </div>
  );
};

export default CustomCarousel;