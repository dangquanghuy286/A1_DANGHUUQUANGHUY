import React from "react";
import Button from "../../../../components/ui/button";

export const PopularDestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      name: "Island",
      listings: "22 Listing",
      image:
        "https://c.animaapp.com/met4ud2uDv3jx9/img/destination-1-3-jpg.png",
      size: "small",
      position: "left-0",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(270deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]",
      width: "w-[277px]",
      height: "h-[408px]",
      top: "top-[114px]",
      buttonIcon: "https://c.animaapp.com/met4ud2uDv3jx9/img/mask-group-17.svg",
      showViewAll: true,
    },
    {
      id: 2,
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
      buttonIcon: "https://c.animaapp.com/met4ud2uDv3jx9/img/mask-group-13.svg",
      showViewAll: true,
    },
    {
      id: 3,
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
      buttonIcon: "https://c.animaapp.com/met4ud2uDv3jx9/img/mask-group-12.svg",
      showViewAll: true,
    },
    {
      id: 4,
      name: "Thailand",
      listings: "22 Listing",
      image:
        "https://c.animaapp.com/met4ud2uDv3jx9/img/destination-1-1-jpg.png",
      size: "xlarge",
      position: "left-[607px]",
      blur: "",
      gradient: "",
      width: "w-[432px]",
      height: "h-[636px]",
      top: "top-0",
      buttonIcon: "https://c.animaapp.com/met4ud2uDv3jx9/img/mask-group-19.svg",
      showViewAll: true,
    },
    {
      id: 5,
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
      buttonIcon: "https://c.animaapp.com/met4ud2uDv3jx9/img/mask-group-15.svg",
      showViewAll: true,
    },
    {
      id: 6,
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
      buttonIcon: "https://c.animaapp.com/met4ud2uDv3jx9/img/mask-group-14.svg",
      showViewAll: true,
    },
    {
      id: 7,
      name: "Island",
      listings: "22 Listing",
      image:
        "https://c.animaapp.com/met4ud2uDv3jx9/img/destination-1-4-jpg.png",
      size: "small",
      position: "left-[1369px]",
      blur: "blur-[2px]",
      gradient:
        "bg-[linear-gradient(90deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0)_100%)]",
      width: "w-[277px]",
      height: "h-[408px]",
      top: "top-[114px]",
      buttonIcon: "",
      showViewAll: false,
    },
  ];

  return (
    <section className="relative h-[636px] w-full overflow-hidden">
      <div className="relative left-[-151px] h-[636px] w-[1646px]">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className={`absolute ${destination.width} ${destination.height} ${destination.top} ${destination.position} overflow-hidden rounded-3xl ${destination.blur}`}
          >
            <div className="relative h-full p-0">
              <div className="relative h-full">
                <div className="absolute h-full w-full overflow-hidden rounded-3xl">
                  <div className="h-full overflow-hidden rounded-3xl">
                    <div className="relative h-full w-full rounded-3xl">
                      <div
                        className="absolute inset-0 rounded-3xl bg-cover bg-center"
                        style={{ backgroundImage: `url(${destination.image})` }}
                      />

                      <div className="absolute h-full w-full rounded-3xl bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.3)_90%)]" />

                      {destination.size === "xlarge" && (
                        <div className="absolute top-[544px] left-0 h-[52px] w-[423px]">
                          <div className="absolute -top-2 left-[43px] h-[33px] w-[98px]">
                            <h3 className="absolute -top-px left-0 h-[33px] w-[99px] [font-family:'Manrope',Helvetica] text-2xl leading-[34.0px] font-semibold tracking-[0] whitespace-nowrap text-white">
                              {destination.name}
                            </h3>
                          </div>
                          <p className="absolute top-7 left-[43px] h-5 w-[74px] [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                            {destination.listings}
                          </p>
                          <Button
                            variant="outline"
                            className="absolute top-0 left-[226px] h-[51px] w-[154px] rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                          >
                            <span className="text-center [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] text-white">
                              View All
                            </span>
                            <img
                              className="ml-2 h-4 w-4"
                              alt="Arrow"
                              src={destination.buttonIcon}
                            />
                          </Button>
                        </div>
                      )}

                      {destination.size === "large" && (
                        <div className="absolute top-[458px] left-0 h-11 w-[357px]">
                          <div className="absolute -top-1.5 left-[41px] h-7 w-[85px]">
                            <h3 className="absolute -top-px left-0 h-7 w-[101px] [font-family:'Manrope',Helvetica] text-2xl leading-[34.0px] font-semibold tracking-[0] whitespace-nowrap text-white">
                              {destination.name}
                            </h3>
                          </div>
                          <p className="absolute top-6 left-[41px] h-[17px] w-[74px] [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                            {destination.listings}
                          </p>
                          <Button
                            variant="outline"
                            className="absolute top-0 left-[185px] h-[43px] w-[130px] rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                          >
                            <span className="text-center [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] text-white">
                              View All
                            </span>
                            <img
                              className="ml-2 h-[13px] w-[13px]"
                              alt="Arrow"
                              src={destination.buttonIcon}
                            />
                          </Button>
                        </div>
                      )}

                      {destination.size === "medium" && (
                        <div className="absolute top-[396px] left-0 h-[38px] w-[308px]">
                          <div className="absolute -top-1.5 left-8 h-6 w-[67px]">
                            <h3 className="absolute -top-px left-0 h-6 w-[68px] [font-family:'Manrope',Helvetica] text-2xl leading-[34.0px] font-semibold tracking-[0] whitespace-nowrap text-white">
                              {destination.name}
                            </h3>
                          </div>
                          <p className="absolute top-5 left-8 h-[15px] w-[54px] [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                            {destination.listings}
                          </p>
                          {destination.showViewAll && (
                            <Button
                              variant="outline"
                              className="absolute top-0 left-40 h-[37px] w-28 rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                            >
                              <span className="text-center [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] text-white">
                                View All
                              </span>
                              <img
                                className="ml-2 h-3 w-3"
                                alt="Arrow"
                                src={destination.buttonIcon}
                              />
                            </Button>
                          )}
                        </div>
                      )}

                      {destination.size === "small" &&
                        destination.showViewAll && (
                          <div className="absolute top-[349px] left-0 h-[34px] w-[271px]">
                            <Button
                              variant="outline"
                              className="relative left-36 h-[33px] w-[99px] rounded-[48px] border-white bg-transparent transition-colors hover:bg-white/10"
                            >
                              <span className="text-center [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] text-white">
                                View All
                              </span>
                              <img
                                className="ml-2 h-2.5 w-2.5"
                                alt="Arrow"
                                src={destination.buttonIcon}
                              />
                            </Button>
                          </div>
                        )}

                      {destination.size === "small" &&
                        !destination.showViewAll && (
                          <div className="absolute top-[349px] left-0 h-[34px] w-[271px]">
                            <div className="absolute top-[-5px] left-[31px] h-[21px] w-11">
                              <h3 className="absolute -top-px left-0 h-[21px] w-11 [font-family:'Manrope',Helvetica] text-2xl leading-[34.0px] font-semibold tracking-[0] whitespace-nowrap text-white">
                                {destination.name}
                              </h3>
                            </div>
                            <p className="absolute top-[18px] left-[31px] h-[13px] w-[50px] [font-family:'Inter',Helvetica] text-base leading-[26px] font-normal tracking-[0] whitespace-nowrap text-white">
                              {destination.listings}
                            </p>
                            <div className="absolute top-0 left-[141px] h-[33px] w-[99px] overflow-hidden rounded-[48px] border border-solid border-white">
                              <div className="relative top-[11px] left-[66px] h-2.5 w-2.5 bg-white" />
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>

                {destination.gradient && (
                  <div
                    className={`absolute top-0 left-0 h-full w-full ${destination.gradient}`}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
