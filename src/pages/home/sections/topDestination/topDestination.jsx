import React from "react";
import bgTopDestination from "@/assets/topDestinationBackground.png";
import imgCategories from "@/assets/categories.png";
import imgCategories1 from "@/assets/categories1.png";
import imgCategories2 from "@/assets/categories2.png";
import imgCategories3 from "@/assets/categories3.png";
import imgCategories4 from "@/assets/categories4.png";

export const HeroSection = () => {
  const tourCategories = [
    {
      title: "Wildlife",
      image: imgCategories3,
      rotation: "rotate-[-2.09deg]",
      topPosition: "top-[35.76px]",
      leftPosition: "left-[25px]",
    },
    {
      title: "Walking",
      image: imgCategories4,
      rotation: "rotate-[-3.55deg]",
      topPosition: "top-[2.49px]",
      leftPosition: "left-[367.38px]",
    },
    {
      title: "Cruises",
      image: imgCategories,
      rotation: "",
      topPosition: "top-0",
      leftPosition: "left-[733.58px]",
    },
    {
      title: "Hiking",
      image: imgCategories1,
      rotation: "rotate-[3.55deg]",
      topPosition: "top-[2.49px]",
      leftPosition: "left-[1076.8px]",
    },
    {
      title: "Airbirds",
      image: imgCategories2,
      rotation: "rotate-[2.09deg]",
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
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTopDestination})` }}
    >
      <div className="relative mx-auto h-[907px] w-full max-w-[1774px] px-[73px]">
        {/* Text Block */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <div className="font-montez mt-[185px] text-[40px] leading-10 font-normal tracking-[0] whitespace-nowrap text-[#113d48]">
            Wornderful Place For You
          </div>
          <div className="font-manrope text-5xl leading-[63.7px] font-bold tracking-[0] whitespace-nowrap text-[#113d48]">
            Tour Categories
          </div>
        </div>

        <div className="absolute top-[334px] left-0 h-[453px] w-[1774px]">
          {tourCategories.map((category) => (
            <div
              key={category.title}
              className={`absolute h-[380px] w-[307px] ${category.topPosition} ${category.leftPosition} ${category.rotation} border-none bg-transparent shadow-none`}
            >
              <div className="p-0">
                <div
                  className="h-[306px] w-[306px] rounded-3xl bg-cover bg-[50%_50%] transition-transform duration-300"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
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

          <nav
            className="absolute top-[428px] left-[762px] h-5 w-[250px] translate-y-[-1rem]"
            aria-label="Category pagination"
          >
            {paginationDots.map((dot, index) => (
              <button
                key={index}
                className={`absolute top-0 h-4 w-4 ${dot.leftPosition} rounded-lg border border-solid transition-colors hover:bg-[#1ca8cb] ${
                  dot.active
                    ? "border-[#1ca8cb] bg-[#1ca8cb]"
                    : "border-[#113d48] bg-transparent"
                }`}
                aria-label={`Go to category page ${index + 1}`}
                aria-current={dot.active ? "page" : undefined}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};
