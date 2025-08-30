import React from "react";
import Header from "./sections/header/header";
import { MainContentSection } from "./sections/maincontentsection/maincontentsection";
import SearchFilter from "./sections/maincontentsection/searchFilter";

const Home = () => {
  return (
    <>
      <Header />
      <div className="relative w-full">
        <MainContentSection />
        <div className="absolute top-[calc(100%-60px)] left-1/2 w-[1320px] -translate-x-1/2 transform">
          <SearchFilter />
        </div>
      </div>
    </>
  );
};

export default Home;
