import { StarIcon } from "lucide-react";
import React from "react";
import background from "@/assets/line2.png";
import iconShape from "@/assets/shape_7.png";
import client1 from "@/assets/client1.png";
import client2 from "@/assets/client2.png";
import client3 from "@/assets/client3.png";
import iconRate from "@/assets/icon.png";

const TourGuidesComment = () => {
  const testimonials = [
    {
      id: 1,
      name: "Angelina Rose",
      role: "Traveller",
      avatar: client1,
      rating: 5,
      testimonial:
        "Solar panels adorn the roof, harnessing renewable energy to power the home and even feed excess electricity back into the grid. High-performance insulation and triple-glazed",
      cardClass: "w-[616px] h-[335px]",
      position: "top-[133px] left-[22px]",
    },
    {
      id: 2,
      name: "Andrew Simon",
      role: "Traveller",
      avatar: client2,
      rating: 5,
      testimonial:
        "A home that perfectly blends sustainability with luxury until discovered Ecoland Residence. The moment I stepped community, I knew it was where I wanted to live.",
      cardClass: "w-[696px] h-[300px]",
      position: "top-[35px] left-[682px]",
    },
    {
      id: 3,
      name: "Maria Doe",
      role: "Traveller",
      avatar: client3,
      rating: 3,
      testimonial:
        "The home boasts sleek, contemporary architecture with clean lines and expansive windows, allowing natural light to flood the interiors It incorporates passive design principles",
      cardClass: "w-[616px] h-[335px]",
      position: "top-[133px] left-[1422px]",
    },
  ];

  const paginationDots = [
    { active: true, position: "left-[867px]" },
    { active: false, position: "left-[913px]" },
    { active: false, position: "left-[959px]" },
    { active: false, position: "left-[1005px]" },
    { active: false, position: "left-[1051px]" },
    { active: false, position: "left-[1097px]" },
  ];

  return (
    <section className="relative h-[967px] w-full overflow-hidden">
      <div className="relative top-[119px] h-[865px] w-full">
        <div
          className="absolute top-[91px] left-0 h-[774px] w-full bg-cover bg-[50%_50%]"
          style={{ backgroundImage: `url(${background})` }}
        />

        <div
          className="absolute top-[170px] left-[126px] h-[50px] w-[85px] bg-cover bg-[50%_50%]"
          style={{ backgroundImage: `url(${iconShape})` }}
        />

        <header className="text-center">
          <h3 className="font-montez absolute top-0 left-[919px] h-10 w-[143px] text-center text-[40px] leading-10 font-normal tracking-[0] whitespace-nowrap text-[#113d48]">
            Testimonial
          </h3>

          <h2 className="font-manrope absolute top-[35px] left-[696px] h-[65px] w-[588px] text-center text-5xl leading-[63.7px] font-bold tracking-[0] whitespace-nowrap text-[#113d48]">
            What Client Say About us
          </h2>
        </header>

        <div className="absolute top-[150px] left-0 h-[578px] w-full overflow-hidden">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`absolute ${testimonial.cardClass} ${testimonial.position} rounded-3xl border-0 bg-[#e9f6f9]`}
            >
              <div className="relative h-full p-0">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name} avatar`}
                  className="absolute top-10 left-10 h-[76px] w-[76px] rounded-full"
                />

                <div className="absolute top-[43px] left-[132px]">
                  <h3 className="font-manrope text-2xl leading-[34.0px] font-semibold tracking-[0] whitespace-nowrap text-[#113d48]">
                    {testimonial.name}
                  </h3>
                </div>

                <div className="absolute top-20 left-[132px] text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-[#6e7070]">
                  {testimonial.role}
                </div>

                <div className="absolute top-[47px] right-10 flex gap-[3px]">
                  {[...Array(5)].map((_, starIndex) => (
                    <StarIcon
                      key={starIndex}
                      className={`h-3.5 w-4 ${
                        starIndex < testimonial.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="absolute top-[140px] right-10 left-10 text-xl leading-[35px] font-medium tracking-[0] text-[#0d0d0c]">
                  "{testimonial.testimonial}"
                </blockquote>

                <img
                  className="absolute bottom-[-40px] left-1/2 h-[78px] w-[78px] -translate-x-1/2 transform"
                  alt="Background border"
                  src={iconRate}
                />
              </div>
            </div>
          ))}

          <nav
            className="absolute top-[543px] left-1/2 flex -translate-x-1/2 transform gap-[23px]"
            aria-label="Testimonial pagination"
          >
            {paginationDots.map((dot, index) => (
              <button
                key={index}
                className={`h-4 w-4 rounded-lg border border-solid transition-colors ${
                  dot.active
                    ? "border-[#1ca8cb] bg-[#1ca8cb]"
                    : "border-[#113d48] bg-transparent hover:bg-[#113d48]/10"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={dot.active ? "true" : "false"}
              />
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
};

export default TourGuidesComment;
