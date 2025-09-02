import { ClockIcon, MapPinIcon, ArrowRight } from "lucide-react";
import React from "react";
import Button from "@/components/ui/button";
import imgTour1 from "@/assets/tour_box_1.png";
import imgTour2 from "@/assets/tour_box_2.png";
import imgTour3 from "@/assets/tour_box_3.png";
import imgTour4 from "@/assets/tour_box_4.png";
import bgRecommend from "@/assets/backgrondRecommend.png";

const RecommendPlace = () => {
  const tripData = [
    {
      id: 1,
      title: "Ghorepani Poon Hill Trek",
      location: "Bhutan, Pokhara",
      price: "$569.00",
      duration: "5 Days",
      image: imgTour1,
      bookIcon: ArrowRight,
    },
    {
      id: 2,
      title: "Langtang Valley Trekking",
      location: "Bhutan, India, Pokhara",
      price: "$600.00",
      duration: "6 Days",
      image: imgTour2,
      bookIcon: ArrowRight,
    },
    {
      id: 3,
      title: "Short Trek around Pokhara",
      location: "Bhutan, India, Tibet",
      price: "$250.00",
      duration: "6 Days",
      image: imgTour3,
      bookIcon: ArrowRight,
    },
    {
      id: 4,
      title: "Island Peak Climbing",
      location: "Nepal, Pokhara, Tibet",
      price: "$569.00",
      duration: "3 Days",
      image: imgTour4,
      bookIcon: ArrowRight,
    },
  ];

  const paginationDots = [
    { active: false },
    { active: true },
    { active: false },
    { active: false },
    { active: false },
    { active: false },
    { active: false },
    { active: false },
  ];

  return (
    <section
      className="relative w-full py-[95px]"
      style={{
        backgroundImage: `url(${bgRecommend})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <header className="mb-[98px] text-center">
          <div className="font-montez text-[40px] leading-10 font-normal text-[#113d48]">
            Best Recommended Places
          </div>
          <h2 className="font-manrope mb-[23px] text-5xl leading-[63.7px] font-bold text-[#113d48]">
            Popular Destination we offer for all
          </h2>
          <p className="mx-auto max-w-[676px] text-lg leading-[31.5px] font-normal text-[#113d48]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
            <br />
            incididunt ut labore et dolore magna aliqua.
          </p>
        </header>

        {/* Trip Cards Grid */}
        <div className="mx-auto mb-[65px] grid max-w-[1344px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tripData.map((trip) => (
            <div
              key={trip.id}
              className="mx-auto h-[482.98px] w-full max-w-[312px] overflow-hidden rounded-2xl border border-[#bcced2] bg-white"
            >
              {/* Trip Image */}
              <div
                className="relative h-[272px] w-full rounded-t-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${trip.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
              </div>

              {/* Trip Details */}
              <div className="p-6">
                {/* Title */}
                <h3 className="font-manrope text-lg leading-[25.5px] font-medium text-[#0d0d0c]">
                  {trip.title}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPinIcon className="h-4 w-4 text-[#6e7070]" />
                  <span className="text-base leading-[26px] font-normal text-[#6e7070]">
                    {trip.location}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6 flex items-baseline gap-1">
                  <span className="text-2xl leading-9 font-medium tracking-[0.48px] text-[#0d0d0c]">
                    {trip.price}
                  </span>
                  <span className="text-lg leading-[24px] font-normal text-[#6e7070]">
                    /Person
                  </span>
                </div>

                {/* Duration and Book Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-[#113d48]" />
                    <span className="text-base leading-[26px] font-normal text-[#113d48]">
                      {trip.duration}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    className="flex h-12 items-center gap-2 rounded-[48px] border-[#e1e4e5] px-5 text-base font-medium text-[#113d48] transition-colors hover:bg-[#113d48]"
                  >
                    Book Now
                    <trip.bookIcon className="h-5 w-5 text-[#113D48]" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-[23px]">
          {paginationDots.map((dot, index) => (
            <button
              key={index}
              className={`h-4 w-4 rounded-lg border border-solid transition-colors hover:bg-[#1ca8cb] ${
                dot.active
                  ? "border-[#1ca8cb] bg-[#1ca8cb]"
                  : "border-[#113d48] hover:border-[#1ca8cb]"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecommendPlace;
