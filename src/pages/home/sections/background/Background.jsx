import React from "react";
import background from "@/assets/bg.png";
const Background = () => {
  return (
    <div className="mx-auto mb-10">
      <img
        className="mx-auto block h-[150px] w-full max-w-[1776px]"
        alt="Container"
        src={background}
      />
    </div>
  );
};

export default Background;
