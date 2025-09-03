import React from "react";

const Dots = ({ paginationDots, positionClass, ariaLabelPrefix }) => {
  return (
    <nav
      className={`absolute left-1/2 flex -translate-x-1/2 transform gap-[23px] ${positionClass}`}
      aria-label={`${ariaLabelPrefix} pagination`}
    >
      {paginationDots.map((dot, index) => (
        <button
          key={index}
          className={`h-4 w-4 rounded-lg border border-solid transition-colors ${
            dot.active
              ? "border-[#1ca8cb] bg-[#1ca8cb]"
              : "border-[#113d48] bg-transparent hover:bg-[#113d48]/10"
          }`}
          aria-label={`Go to ${ariaLabelPrefix} ${index + 1}`}
          aria-current={dot.active ? "true" : "false"}
        />
      ))}
    </nav>
  );
};

export default Dots;
