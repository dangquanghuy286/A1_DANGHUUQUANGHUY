import React from "react";
import gallery from "@/assets/gallery0.png";
import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";
import gallery7 from "@/assets/shape_4.png";
import gallery8 from "@/assets/line.png";

const OverlapGroupWrapperSubsection = () => {
  const galleryImages = [
    {
      className: "w-[282px] h-[264px]",
      position: "top-[395px] left-[220px]",
      src: gallery,
      alt: "Gallery 1",
    },
    {
      className: "w-[281.83px] h-[218.09px]",
      position: "top-[301px] left-[518px]",
      src: gallery1,
      alt: "Container 1",
    },
    {
      className: "w-[281.83px] h-[218.09px]",
      position: "top-[535px] left-[518px]",
      src: gallery2,
      alt: "Container 1",
    },
    {
      className: "w-[282px] h-[455px]",
      position: "top-[300px] left-[817px]",
      src: gallery3,
      alt: "Gallery 2",
    },
    {
      className: "w-[281.83px] h-[218.39px]",
      position: "top-[300px] left-[1108px]",
      src: gallery4,
      alt: "Container 2",
    },
    {
      className: "w-[281.83px] h-[218.39px]",
      position: "top-[535px] left-[1108px]",
      src: gallery5,
      alt: "Container 2",
    },
    {
      className: "w-[282px] h-[264px]",
      position: "top-[395px] left-[1415px]",
      src: gallery6,
      alt: "Gallery 3",
    },
  ];

  return (
    <section className="relative h-[604px] w-full overflow-hidden">
      <div
        className="relative top-[-151px] h-[859px] bg-[50%_60%]"
        style={{ backgroundImage: `url(${gallery8})` }}
      >
        <div
          className="absolute top-[332px] left-14 h-[52px] w-[85px] bg-[50%_50%]"
          style={{ backgroundImage: `url(${gallery7})` }}
        />

        <header className="absolute top-[150px] left-[756px] h-[100px] w-[405px]">
          <h3 className="font-montez absolute top-0 left-0 h-10 w-[405px] text-center text-[40px] leading-10 font-normal tracking-[0] whitespace-nowrap text-[#113d48]">
            Make Your Tour More Pleasure
          </h3>
          <h2 className="font-manrope absolute top-[35px] left-8 h-[65px] w-[340px] text-center text-5xl leading-[63.7px] font-bold tracking-[0] whitespace-nowrap text-[#113d48]">
            Recent Gallery
          </h2>
        </header>

        {galleryImages.map((image, index) => (
          <img
            key={`gallery-image-${index}`}
            className={`absolute ${image.className} ${image.position} rounded-3xl object-cover`}
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>
    </section>
  );
};

export default OverlapGroupWrapperSubsection;
