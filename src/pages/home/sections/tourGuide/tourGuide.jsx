import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import teamMember1 from "@/assets/team_1_2.jpg.png";
import teamMember2 from "@/assets/team_1_3.jpg.png";
import teamMember3 from "@/assets/team_1_4.jpg.png";
import teamMember4 from "@/assets/team_1_1.jpg.png";
import Dots from "@/components/ui/Dots";
const TourGuidesSection = () => {
  const tourGuides = [
    {
      name: "Jane Cooper",
      image: teamMember1,
    },
    {
      name: "Guy Hawkins",
      image: teamMember2,
    },
    {
      name: "Jenny Wilson",
      image: teamMember3,
    },
    {
      name: "Jacob Jones",
      image: teamMember4,
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
      <div className="container mx-auto" style={{ maxWidth: "1920px" }}>
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

            <Dots
              paginationDots={navigationDots}
              containerClass="justify-center gap-[30px]"
              ariaLabelPrefix="slide"
              dotClass="h-3 w-3 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourGuidesSection;
