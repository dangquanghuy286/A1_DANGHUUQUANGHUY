import React from "react";
import Button from "../../../../components/ui/button";

export const PopularDestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Island",
      listings: "22 Listing",
      image:
        "https://c.animaapp.com/met4ud2uDv3jx9/img/destination-1-4-jpg-1.png",
      size: "medium",
      position: "left-[147px]",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(270deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]",
      width: "w-[315px]",
      height: "h-[463px]",
      top: "top-[86px]",
    },
    {
      id: 2,
      name: "Nepal",
      listings: "22 Listing",
      image:
        "https://c.animaapp.com/met4ud2uDv3jx9/img/destination-1-5-jpg.png",
      size: "large",
      position: "left-[341px]",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(270deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]",
      width: "w-[364px]",
      height: "h-[536px]",
      top: "top-[50px]",
    },
    {
      id: 3,
      name: "Thailand",
      listings: "22 Listing",
      image:
        "https://c.animaapp.com/met4ud2uDv3jx9/img/destination-1-1-jpg.png",
      size: "xlarge",
      position: "left-[607px]", // Trung tâm layout 1344px
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
      image:
        "https://c.animaapp.com/met4ud2uDv3jx9/img/destination-1-2-jpg.png",
      size: "large",
      position: "left-[941px]",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]",
      width: "w-[364px]",
      height: "h-[536px]",
      top: "top-[50px]",
    },
    {
      id: 5,
      name: "Belgium",
      listings: "22 Listing",
      image:
        "https://c.animaapp.com/met4ud2uDv3jx9/img/destination-1-3-jpg-1.png",
      size: "medium",
      position: "left-[1184px]",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]",
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
            className={`absolute ${destination.width} ${destination.height} ${destination.top} ${destination.position} overflow-hidden rounded-3xl ${destination.blur}`}
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
                    <div className="absolute bottom-4 left-0 h-[52px] w-[423px]">
                      <div className="absolute top-[-2px] left-10 h-[33px] w-[98px]">
                        <h3 className="font-manrope absolute top-0 left-0 h-[33px] w-[99px] text-2xl leading-[34.0px] font-semibold tracking-[0] whitespace-nowrap text-white">
                          {destination.name}
                        </h3>
                      </div>
                      <p className="absolute top-6 left-10 h-5 w-[74px] text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                        {destination.listings}
                      </p>
                      <Button
                        variant="outline"
                        className="absolute top-0 right-0 h-[51px] w-[154px] rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                      >
                        <span className="text-center text-base leading-[26px] font-normal tracking-[0] text-white">
                          View All
                        </span>
                        <img
                          className="ml-2 h-4 w-4"
                          alt="Arrow"
                          src="https://c.animaapp.com/met4ud2uDv3jx9/img/mask-group-19.svg"
                        />
                      </Button>
                    </div>
                  )}
                  {destination.size === "large" && (
                    <div className="absolute bottom-4 left-0 h-11 w-[357px]">
                      <div className="absolute top-[-1.5px] left-10 h-7 w-[85px]">
                        <h3 className="absolute top-0 left-0 h-7 w-[101px] [font-family:'Manrope',Helvetica] text-2xl leading-[34.0px] font-semibold tracking-[0] whitespace-nowrap text-white">
                          {destination.name}
                        </h3>
                      </div>
                      <p className="absolute top-6 left-10 h-[17px] w-[74px] [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                        {destination.listings}
                      </p>
                      <Button
                        variant="outline"
                        className="absolute top-0 right-0 h-[43px] w-[130px] rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                      >
                        <span className="text-center [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] text-white">
                          View All
                        </span>
                        <img
                          className="ml-2 h-[13px] w-[13px]"
                          alt="Arrow"
                          src="https://c.animaapp.com/met4ud2uDv3jx9/img/mask-group-12.svg"
                        />
                      </Button>
                    </div>
                  )}
                  {destination.size === "medium" && (
                    <div className="absolute bottom-4 left-0 h-[38px] w-[308px]">
                      <div className="absolute top-[-1.5px] left-8 h-6 w-[67px]">
                        <h3 className="absolute top-0 left-0 h-6 w-[68px] [font-family:'Manrope',Helvetica] text-2xl leading-[34.0px] font-semibold tracking-[0] whitespace-nowrap text-white">
                          {destination.name}
                        </h3>
                      </div>
                      <p className="absolute top-5 left-8 h-[15px] w-[54px] [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                        {destination.listings}
                      </p>
                      <Button
                        variant="outline"
                        className="absolute top-0 right-0 h-[37px] w-28 rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                      >
                        <span className="text-center [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] text-white">
                          View All
                        </span>
                        <img
                          className="ml-2 h-3 w-3"
                          alt="Arrow"
                          src="https://c.animaapp.com/met4ud2uDv3jx9/img/mask-group-13.svg"
                        />
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
