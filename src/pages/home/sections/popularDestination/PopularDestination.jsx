import React from "react";
import Button from "@/components/ui/button";
import destination from "@/assets/destination_1_1.jpg.png";
import destination1 from "@/assets/destination_1_2.jpg.png";
import destination2 from "@/assets/destination_1_3.jpg.png";
import destination3 from "@/assets/destination_1_4.jpg.png";
import destination4 from "@/assets/destination_1_5.jpg.png";
import { ArrowRight } from "lucide-react";
const PopularDestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Island",
      listings: "22 Listing",
      image: destination,
      size: "medium",
      position: "left-[147px]",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(270deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.7)_50%)]",
      width: "w-[315px]",
      height: "h-[463px]",
      top: "top-[86px]",
    },
    {
      id: 2,
      name: "Nepal",
      listings: "22 Listing",
      image: destination1,
      size: "large",
      position: "left-[341px]",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(270deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%)]",
      width: "w-[364px]",
      height: "h-[536px]",
      top: "top-[50px]",
    },
    {
      id: 3,
      name: "Thailand",
      listings: "22 Listing",
      image: destination2,
      size: "xlarge",
      position: "left-[607px]",
      blur: "",
      gradient: "",
      width: "w-[432px]",
      height: "h-[636px]",
      top: "top-0",
    },
    {
      id: 4,
      name: "Maldives",
      listings: "22 Listing",
      image: destination3,
      size: "large",
      position: "left-[941px]",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_100%)]",
      width: "w-[364px]",
      height: "h-[536px]",
      top: "top-[50px]",
    },
    {
      id: 5,
      name: "Belgium",
      listings: "22 Listing",
      image: destination4,
      size: "medium",
      position: "left-[1184px]",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.7)_100%)]",
      width: "w-[315px]",
      height: "h-[463px]",
      top: "top-[86px]",
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="font-montez text-center text-[40px] leading-10 font-normal tracking-[0] whitespace-nowrap text-[#113d48]">
          Top Destination
        </div>
        <div className="font-manrope text-center text-5xl leading-[63.7px] font-bold tracking-[0] whitespace-nowrap text-[#113d48]">
          Popular Destination
        </div>
      </div>

      <div className="relative left-[-151px] mx-auto mt-[48.69px] h-[636px] w-[1344px]">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className={`absolute ${destination.width} ${destination.height} ${destination.top} ${destination.position} overflow-hidden rounded-3xl transition-all duration-500 ${
              destination.size === "xlarge"
                ? "z-20 opacity-100"
                : destination.id === 5
                  ? "z-0"
                  : "z-10"
            }`}
          >
            <div className="relative h-full w-full p-0">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <div
                    className="absolute inset-0 rounded-3xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  />
                  <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.3)_90%)]" />
                  {destination.gradient && (
                    <div
                      className={`absolute inset-0 ${destination.gradient}`}
                    />
                  )}

                  {destination.size === "xlarge" && (
                    <div className="absolute bottom-10 left-0 h-[51px] w-[423px]">
                      <div className="absolute left-10">
                        <h3 className="font-manrope absolute top-0 left-0 text-2xl leading-[34.0px] tracking-[0] whitespace-nowrap text-white">
                          {destination.name}
                        </h3>
                      </div>
                      <p className="absolute top-6 left-10 mt-2 text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                        {destination.listings}
                      </p>
                      <Button
                        variant="outline"
                        className="absolute top-0 right-[44px] flex h-[51px] w-[154px] items-center justify-center gap-2 rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                      >
                        <span className="text-base leading-[26px] font-normal text-white">
                          View All
                        </span>
                        <ArrowRight className="h-6 w-6 text-white" />
                      </Button>
                    </div>
                  )}

                  {destination.size === "large" && (
                    <div className="absolute bottom-10 left-0 h-11 w-[357px]">
                      <div className="absolute top-[-1.5px] left-10">
                        <h3 className="font-manrope absolute top-0 left-0 text-2xl leading-[34.0px] tracking-[0] whitespace-nowrap text-white">
                          {destination.name}
                        </h3>
                      </div>
                      <p className="absolute top-6 left-10 mt-2 text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                        {destination.listings}
                      </p>
                      <Button
                        variant="outline"
                        className="absolute top-0 right-[44px] flex h-[43px] w-[130px] items-center justify-center gap-2 rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                      >
                        <span className="text-base leading-[26px] tracking-[0] text-white">
                          View All
                        </span>
                        <ArrowRight className="h-5 w-5 text-white" />
                      </Button>
                    </div>
                  )}

                  {destination.size === "medium" && (
                    <div className="absolute bottom-10 left-0 h-[38px] w-[308px]">
                      <div className="absolute top-[-1.5px] left-8">
                        <h3 className="font-manrope absolute top-0 left-0 text-2xl leading-[34.0px] tracking-[0] whitespace-nowrap text-white">
                          {destination.name}
                        </h3>
                      </div>
                      <p className="absolute top-5 left-8 mt-2 text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                        {destination.listings}
                      </p>
                      <Button
                        variant="outline"
                        className="absolute top-0 right-[44px] h-[37px] w-28 rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                      >
                        <span className="text-center text-base leading-[26px] font-normal tracking-[0] text-white">
                          View All
                        </span>
                        <ArrowRight className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default PopularDestinationsSection;
