import React from "react";
import imgTree from "@/assets/shape_6.png";
import shape_1 from "@/assets/shape_1.png";
import shape_2 from "@/assets/shape_2.png";
import shape_3 from "@/assets/shape_3.png";
import shape_4 from "@/assets/shape_5.png";
const Rate = () => {
  const statisticsData = [
    {
      value: "12",
      label: "Years Experience",
      position: "top-[350px] left-[324px]",
      dotPosition: "top-[232px] left-[272px]",
    },
    {
      value: "97%",
      label: "Retention Rate",
      position: "top-[150px] left-[660px]",
      dotPosition: "top-[25px] left-[244px]",
    },
    {
      value: "8k",
      label: "Tour Completed",
      position: "top-[350px] left-[996px]",
      dotPosition: "top-[232px] left-[272px]",
    },
    {
      value: "19k",
      label: "Happy Travellers",
      position: "top-[150px] left-[1332px]",
      dotPosition: "top-[25px] left-[244px]",
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
      position: "absolute top-[120px] left-[58px]",
      size: "w-14 h-[78px]",
    },
    {
      src: shape_3,
      position: "absolute top-[70px] left-[154px]",
      size: "w-[35px] h-[47px]",
    },
    {
      src: shape_4,
      position: "absolute top-0 left-[1772px]",
      size: "w-[52px] h-[60px]",
    },
    {
      src: imgTree,
      position: "absolute bottom-0  left-[58px]",
      size: "w-[177px] h-[111px]",
    },
  ];
  return (
    <section className="relative h-[800px] max-h-[800px] max-w-[1920px] py-16">
      {decorativeShapes.map((shape, index) => (
        <img
          key={index}
          src={shape.src}
          alt={`decorative-shape-${index}`}
          className={`${shape.size} ${shape.position}`}
        />
      ))}
      {statisticsData.map((stat, index) => (
        <div
          key={index}
          className={`absolute h-[264px] w-[264px] ${stat.position} rounded-[132px] border-0 bg-[#e9f6f9]`}
        >
          <div className="relative -top-6 -left-6 h-[312px] w-[312px] rounded-[156px] p-0">
            <div className="font-manrope absolute top-[107px] left-[131px] h-[65px] w-[50px] text-center text-5xl leading-[48px] font-bold tracking-[0] text-[#0d0d0c]">
              {stat.value}
            </div>
            <div className="font-manrope absolute top-[171px] left-0 h-9 w-full px-4 text-center text-2xl leading-9 font-medium tracking-[0] text-[#0d0d0c]">
              {stat.label}
            </div>
            <div className="absolute top-0 left-0 h-[312px] w-[312px] rounded-[156px] border border-solid border-[#1ca8cb]">
              <div
                className={`relative h-6 w-6 ${stat.dotPosition} rounded-xl`}
              >
                <div className="absolute top-[7px] left-[7px] h-2.5 w-2.5 rounded-[5px] bg-[#1ca8cb]" />
                <div className="absolute top-0 left-0 h-6 w-6 rounded-xl bg-[#1ca8cb33]" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rate;
