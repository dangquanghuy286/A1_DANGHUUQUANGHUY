import React from "react";
import bgTopDestination from "@/assets/topDestinationBackground.png";

const TopDestination = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTopDestination})` }}
    >
      {/* Text Block */}
      <div className="absolute left-1/2 -translate-x-1/2 text-center">
        <div className="font-montez mt-[185px] text-[40px] leading-10 font-normal tracking-[0] whitespace-nowrap text-[#113d48]">
          Wornderful Place For You
        </div>
        <div className="font-manrope text-5xl leading-[63.7px] font-bold tracking-[0] whitespace-nowrap text-[#113d48]">
          Tour Categories
        </div>
      </div>
    </section>
  );
};

export default TopDestination;
