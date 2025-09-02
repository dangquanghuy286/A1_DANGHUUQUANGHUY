import React from "react";
import Button from "@/components/ui/button";
import imgAbout1 from "@/assets/about_1_1.png";
import imgAbout2 from "@/assets/about_1_2.png";
import imgAbout3 from "@/assets/about_1_3.png";
import imgBg from "@/assets/about_bg.png";
import maskPoint from "@/assets/maskPoint.png";
import map from "@/assets/map.png";
import user from "@/assets/user.png";
import shape_1 from "@/assets/shape_1.png";
import shape_2 from "@/assets/shape_2.png";
import shape_3 from "@/assets/shape_3.png";

const PlanTrip = () => {
  const aboutImages = [
    {
      src: imgAbout1,
      className:
        "w-[312px] h-[630px] rounded-[156px_156px_0px_156px] object-cover",
      position: "absolute top-0 left-0",
    },
    {
      src: imgAbout2,
      className:
        "w-[312px] h-[315px] rounded-[156px_156px_156px_0px] object-cover",
      position: "absolute top-0 left-[336px]",
    },
    {
      src: imgAbout3,
      className:
        "w-[312px] h-[315px] rounded-[156px_0px_156px_156px] object-cover",
      position: "absolute top-[335px] left-[336px]",
    },
  ];

  const decorativeShapes = [
    {
      src: shape_1,
      position: "absolute top-[60px] left-[38px]",
      size: "w-[15px] h-[21px]",
    },
    {
      src: shape_2,
      position: "absolute top-[100px] left-[58px]",
      size: "w-14 h-[78px]",
    },
    {
      src: shape_3,
      position: "absolute top-[70px] left-[154px]",
      size: "w-[35px] h-[47px]",
    },
  ];

  const features = [
    {
      icon: map,
      title: "Exclusive Trip",
      description:
        "There are many variations of passages\nof available but the majority.",
    },
    {
      icon: user,
      title: "Professional Guide",
      description:
        "There are many variations of passages\nof available but the majority.",
    },
  ];

  return (
    <section className="mx-auto flex h-[800px] max-w-[1920px] flex-col items-start gap-16 lg:flex-row">
      {/* left side*/}
      <div className="relative flex flex-2 items-center justify-end">
        {/* decorativeShapes */}
        {decorativeShapes.map((shape, index) => (
          <img
            key={index}
            src={shape.src}
            alt={`decorative-shape-${index}`}
            className={`${shape.size} ${shape.position}`}
          />
        ))}
        {/* about images */}
        <div className="relative h-[650px] w-[648px]">
          {aboutImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`about-${index}`}
              className={`${image.className} ${image.position}`}
            />
          ))}
        </div>
      </div>

      {/* right side text */}
      <div className="relative flex-2 space-y-8">
        <div>
          <div className="font-montez mb-4 text-[40px] leading-10 font-normal text-[#113d48]">
            Let&apos;s Go Together
          </div>
          <div className="font-manrope text-5xl leading-[63.7px] font-bold text-[#113d48]">
            Plan Your Trip
            <br />
            With us
          </div>
        </div>

        <div className="text-lg leading-[26px] font-normal text-[#6e7070]">
          There are many variations of passages of available but the
          <br />
          majority have suffered alteration in some form, by injected
          <br />
          hum randomised words which don&apos;t look even slightly.
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-6">
              <img
                className="h-[72px] w-[72px] flex-shrink-0"
                alt="Feature icon"
                src={feature.icon}
              />
              <div>
                <div className="font-manrope mb-2 text-2xl leading-[34px] font-semibold text-[#113d48]">
                  {feature.title}
                </div>
                <div className="text-base leading-7 font-normal whitespace-pre-line text-[#6e7070]">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button className="relative z-10 h-auto rounded-[48px] bg-[#113d48] px-8 py-5 transition-colors hover:bg-[#113d48]/90">
          <span className="mr-3 text-base leading-[26px] font-normal text-white">
            Learn More
          </span>
          <img className="h-6 w-6" alt="Arrow" src={maskPoint} />
        </Button>

        {/* Background Image - positioned to appear behind content */}
        <div className="absolute top-3/4 right-0 -z-10 -translate-y-1/2 transform">
          <div className="relative">
            <div className="h-[396px] w-[396px] rounded-[198px] bg-[#e9f6f9]" />
            <img
              src={imgBg}
              alt="About slide"
              className="absolute top-1/2 left-1/2 h-[546px] w-[217px] -translate-x-1/2 -translate-y-1/2 transform object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip;
