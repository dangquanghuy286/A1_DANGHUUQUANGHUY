import React from "react";
import Header from "./sections/header/header";
import { MainContentSection } from "./sections/maincontentsection/maincontentsection";
import SearchFilter from "./sections/maincontentsection/searchFilter";

import { HeroSection } from "./sections/topDestination/topDestination";
import PopularDestinationsSection from "./sections/popularDestination/PopularDestination";
import OverlapGroupWrapperSubsection from "./sections/overlapGroupWrapperSubsection/OverlapGroupWrapperSubsection";
import TourGuidesSection from "./sections/tourGuide/tourGuide";
import ClientTestimonialsSection from "./sections/clientSay/ClientTestimonialsSection";
import TourGuidesComment from "./sections/clientSay/clientComment";
import FooterSection from "./sections/footer/FooterSection";
import BackToTop from "../../components/ui/BackToTop";

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
      <HeroSection />
      <PopularDestinationsSection />
      <OverlapGroupWrapperSubsection />

      <TourGuidesSection />
      <TourGuidesComment />
      <ClientTestimonialsSection />
      <FooterSection />
      <BackToTop />
    </>
  );
};

export default Home;
