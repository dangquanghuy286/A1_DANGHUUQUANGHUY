import React, { useState } from "react";
import { ArrowRight, ArrowUp, ArrowDown } from "lucide-react";
import Button from "@/components/ui/button";
import background1 from "@/assets/Background.png";
import background2 from "@/assets/Container2.png";

const MainContentSection = () => {
  const backgrounds = [background1, background2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigationDots = backgrounds.map((_, index) => ({
    active: index === currentIndex,
    className: index === currentIndex ? "bg-[#1ca8cb]" : "bg-white",
  }));

  // Handler for Next button
  const handleNext = () => {
    console.log(
      "Next button clicked, new index:",
      (currentIndex + 1) % backgrounds.length,
    );
    setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
  };

  // Handler for Previous button
  const handlePrev = () => {
    console.log(
      "Previous button clicked, new index:",
      (currentIndex - 1 + backgrounds.length) % backgrounds.length,
    );
    setCurrentIndex(
      (prev) => (prev - 1 + backgrounds.length) % backgrounds.length,
    );
  };

  return (
    <section className="relative h-[805px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 h-full w-full transition-all duration-500">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgrounds[currentIndex]})`,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-full items-center">
        <div className="mr-[920px] ml-[300px] w-full">
          {/* Hero Text Section */}
          <div className="mb-[100px]">
            <h2 className="font-montez text-[40px] text-white">
              Get unforgettable pleasure with us
            </h2>
            <h1 className="font-manrope max-w-[700px] text-[80px] leading-[88px] font-bold text-white">
              Explore beauty of the whole world
            </h1>
          </div>

          {/* Buttons Section */}
          <div className="flex gap-[24px]">
            <Button className="flex h-[64px] items-center justify-center gap-x-2 px-[35px] text-base font-normal">
              <span>Explore Tours</span>
              <ArrowRight className="h-6 w-6 text-white" />
            </Button>
            <Button
              variant="outline"
              className="flex h-[64px] items-center justify-center gap-x-2 border-white px-[35px] text-base font-normal text-white hover:bg-white/10 hover:text-black"
            >
              <span>Our Services</span>
              <ArrowRight className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 right-[57px] flex -translate-y-1/2 flex-col items-center gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <ArrowUp className="h-6 w-6 text-white" />
        </button>

        {/* Navigation Dots */}
        <div className="my-8 flex flex-col gap-[38px]">
          {navigationDots.map((dot, index) => (
            <div
              key={index}
              className={`h-0.5 w-6 -rotate-90 cursor-pointer border border-solid transition-colors hover:opacity-80 ${dot.className}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>
  );
};

export default MainContentSection;
