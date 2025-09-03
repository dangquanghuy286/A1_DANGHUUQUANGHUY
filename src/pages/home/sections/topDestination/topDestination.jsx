/* eslint-disable no-unused-vars */
import React from "react";

import bgTopDestination from "@/assets/topDestinationBackground.png";
import imgCategories from "@/assets/categories.png";
import imgCategories1 from "@/assets/categories1.png";
import imgCategories2 from "@/assets/categories2.png";
import imgCategories3 from "@/assets/categories3.png";
import imgCategories4 from "@/assets/categories4.png";
import Dots from "@/components/ui/Dots";

export const HeroSection = () => {
  const tourCategories = [
    {
      title: "Wildlife",
      image: imgCategories3,
      topPosition: "top-[35.76px]",
      leftPosition: "left-[25px]",
    },
    {
      title: "Walking",
      image: imgCategories4,
      topPosition: "top-[2.49px]",
      leftPosition: "left-[367.38px]",
    },
    {
      title: "Cruises",
      image: imgCategories,
      topPosition: "top-0",
      leftPosition: "left-[733.58px]",
    },
    {
      title: "Hiking",
      image: imgCategories1,
      topPosition: "top-[2.49px]",
      leftPosition: "left-[1076.8px]",
    },
    {
      title: "Airbirds",
      image: imgCategories2,
      topPosition: "top-[35.71px]",
      leftPosition: "left-[1419.91px]",
    },
  ];

  const paginationDots = [
    { active: true, leftPosition: "left-[25px]" },
    { active: false, leftPosition: "left-[71px]" },
    { active: false, leftPosition: "left-[117px]" },
    { active: false, leftPosition: "left-[163px]" },
    { active: false, leftPosition: "left-[209px]" },
  ];

  return (
    <section
      className="relative mx-auto min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTopDestination})` }}
    >
      <div className="relative mx-auto h-[907px] w-full max-w-[1774px] px-[73px]">
        {/* Header Section */}
        <header className="absolute left-1/2 -translate-x-1/2 text-center">
          <div className="font-montez mt-[185px] text-[40px] leading-10 font-normal text-[#113d48]">
            Wornderful Place For You
          </div>
          <h1 className="font-manrope text-5xl leading-[63.7px] font-bold text-[#113d48]">
            Tour Categories
          </h1>
        </header>
        {/* Categories Grid */}
        <div className="absolute top-[334px] left-0 h-[453px] w-[1774px]">
          {tourCategories.map((category, index) => (
            <div
              key={category.title}
              className={`absolute h-[380px] w-[307px] ${category.topPosition} ${category.leftPosition} cursor-pointer border-none bg-transparent`}
            >
              <div className="p-0">
                <div
                  className="relative mb-4 h-[306px] w-[306px] overflow-hidden rounded-3xl bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute inset-0 rounded-3xl" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-manrope mb-1 text-2xl leading-[34.0px] font-semibold tracking-[0] text-[#113d48]">
                    {category.title}
                  </h3>
                  <a
                    href="#"
                    className="h-auto p-0 text-sm leading-[26px] tracking-[0] text-[#6E7070] transition-colors hover:text-[#113D48]"
                  >
                    See More
                  </a>
                </div>
              </div>
            </div>
          ))}
          <Dots
            paginationDots={paginationDots}
            positionClass="absolute top-[428px] left-[925px] h-5 w-[250px]"
            ariaLabelPrefix="slide"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
