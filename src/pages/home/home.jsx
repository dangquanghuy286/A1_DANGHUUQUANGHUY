import React from "react";
import Header from "./sections/header/header";
import { MainContentSection } from "./sections/maincontentsection/maincontentsection";
import SearchFilter from "./sections/maincontentsection/searchFilter";
import { PopularDestinationsSection } from "./sections/popularDestination/PopularDestination";
import TopDestination from "./sections/topDestination/topDestination";

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative w-full">
        <MainContentSection />
        <div className="absolute top-[calc(100%-60px)] left-1/2 z-50 w-[1320px] -translate-x-1/2 transform">
          <SearchFilter />
        </div>
      </div>
      <TopDestination />

      {/* <PopularDestinationsSection /> */}
    </>
  );
};

export default Home;
