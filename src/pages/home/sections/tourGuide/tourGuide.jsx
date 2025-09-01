import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const TourGuidesSection = () => {
  const tourGuides = [
    {
      name: "Jane Cooper",
      image: "https://c.animaapp.com/mexa0dzzVr4grv/img/team-1-2-jpg.png",
    },
    {
      name: "Guy Hawkins",
      image: "https://c.animaapp.com/mexa0dzzVr4grv/img/team-1-3-jpg.png",
    },
    {
      name: "Jenny Wilson",
      image: "https://c.animaapp.com/mexa0dzzVr4grv/img/team-1-4-jpg.png",
    },
    {
      name: "Jacob Jones",
      image: "https://c.animaapp.com/mexa0dzzVr4grv/img/team-1-1-jpg.png",
    },
  ];

  const navigationDots = Array(8)
    .fill(false)
    .map((_, i) => ({ active: i === 0 }));

  return (
    <section
      className="relative w-full bg-[#e9f6f9] bg-[url('https://c.animaapp.com/mexa0dzzVr4grv/img/background-2.png')] bg-center"
      style={{ height: "854.02px" }}
    >
      <div className="container mx-auto px-4" style={{ maxWidth: "1920px" }}>
        {/* Header */}
        <header className="text-center" style={{ paddingTop: "120px" }}>
          <div className="font-montez text-[40px] font-normal text-[#113d48]">
            Meet with Guide
          </div>
          <h2 className="font-manrope text-5xl font-bold text-[#113d48]">
            Tour Guide
          </h2>
        </header>

        <div style={{ marginTop: "150.59px" }}>
          <div className="mx-auto w-[1344px]">
            <div className="mb-[55px] flex items-start justify-center gap-6">
              {tourGuides.map((guide, index) => (
                <div
                  key={index}
                  className="relative h-[290.33px] w-[312px] rounded-2xl bg-white"
                  style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                >
                  {/* Profile Image */}
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="absolute top-[-100px] left-1/2 h-[200px] w-[200px] -translate-x-1/2 transform rounded-full border-[3px] border-white object-contain"
                  />

                  {/* Guide Info */}
                  <div className="absolute bottom-[16px] left-1/2 h-[144.33px] w-[280px] -translate-x-1/2 rounded-2xl bg-[#e9f6f9] p-4 text-center">
                    <h3 className="font-manrope mb-[1px] text-2xl font-semibold text-[#0d0d0c]">
                      {guide.name}
                    </h3>
                    <p className="mb-6 text-base text-[#0d0d0c]">
                      Tourist Guide
                    </p>

                    {/* Social Icons */}
                    <div className="mb-6 flex justify-center gap-[5px]">
                      <a
                        href="#"
                        className="rounded-full border border-[#1ca8cb] p-2"
                      >
                        <Facebook
                          size={16}
                          className="fill-[#1ca8cb] text-[#1ca8cb]"
                        />
                      </a>
                      <a
                        href="#"
                        className="rounded-full border border-[#1ca8cb] p-2"
                      >
                        <Twitter
                          size={16}
                          className="fill-[#1ca8cb] text-[#1ca8cb]"
                        />
                      </a>
                      <a
                        href="#"
                        className="rounded-full border border-[#1ca8cb] p-2"
                      >
                        <Instagram size={16} className="text-[#1ca8cb]" />
                      </a>
                      <a
                        href="#"
                        className="rounded-full border border-[#1ca8cb] p-2"
                      >
                        <Youtube size={16} className="text-[#1ca8cb]" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-[10px]">
              {navigationDots.map((dot, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full border transition-colors ${
                    dot.active
                      ? "border-[#1ca8cb] bg-[#1ca8cb]"
                      : "border-[#113d48] bg-transparent hover:bg-[#113d48]/10"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGuidesSection;
