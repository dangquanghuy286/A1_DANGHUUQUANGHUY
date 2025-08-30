import React from "react";
import Button from "@/components/ui/button";

import destinationIcon from "@/assets/location.png";
import activityIcon from "@/assets/bike.png";
import daysIcon from "@/assets/clock.png";
import priceIcon from "@/assets/money.png";

import dropdownIcon from "@/assets/dropDown.png";

const SearchFilter = () => {
  const searchFilters = [
    {
      icon: destinationIcon,
      dropdown: dropdownIcon,
      placeholder: "Destination",
      borderClass: "rounded-[4px_0px_0px_4px]",
    },
    {
      icon: activityIcon,
      dropdown: dropdownIcon,
      placeholder: "Activity",
      borderClass: "",
    },
    {
      icon: daysIcon,
      dropdown: dropdownIcon,
      placeholder: "0 Days - 6 Days",
      borderClass: "",
    },
    {
      icon: priceIcon,
      dropdown: dropdownIcon,
      placeholder: "$200 - $580",
      borderClass: "",
    },
  ];

  return (
    <div className="absolute h-[110px] w-[1320px] rounded-[16px] border-2 border-solid border-[#1ca8cb] bg-white">
      <div className="relative top-[27px] left-[34px] h-14 w-[1252px] rounded p-0">
        <div className="flex">
          {searchFilters.map((filter, index) => (
            <div
              key={index}
              className={`h-[41px] w-[249px] bg-white ${filter.borderClass} border-r-solid border-r border-[#e1e4e5] ${
                index === 0 ? "" : "ml-[25px]"
              }`}
            >
              <div className="relative h-[41px] w-[223px] rounded-lg">
                <img
                  className="absolute top-2.5 left-2.5 h-5 w-5"
                  alt="Filter icon"
                  src={filter.icon}
                />
                <img
                  className="absolute top-[18px] left-[213px] h-1.5 w-2.5"
                  alt="Dropdown"
                  src={filter.dropdown}
                />
                <div className="absolute top-0 left-0 h-[41px] w-[223px] overflow-hidden rounded-lg">
                  <div className="relative top-2.5 left-[38px] h-5 w-[147px]">
                    <div className="absolute -top-px left-0 h-5 w-full text-base font-normal text-[#6e7070]">
                      {filter.placeholder}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Button className="absolute top-0 left-[1094px] h-14 w-[158px] overflow-hidden rounded-[48px] bg-[#1ca8cb] text-base leading-4 font-medium tracking-[0] text-white">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
