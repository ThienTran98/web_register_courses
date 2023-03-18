import React from "react";
import Banner from "./Banner/Banner";
import PopularCourses from "./PopularCourses/PopularCourses";
import ViewCourses from "./ViewCourses/ViewCourses";
import OurFeatures from "./OurFeatures/OurFeatures";
import TopCategories from "./TopCategories/TopCategories";
import OnlineEducation from "./OnlineEducation/OnlineEducation";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <PopularCourses />
      <ViewCourses />
      <TopCategories />
      <OnlineEducation />
      <OurFeatures />
    </div>
  );
}
