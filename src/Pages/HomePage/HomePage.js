import React from "react";
import Banner from "./Banner/Banner";
import PopularCourses from "./PopularCourses/PopularCourses";
import ViewCourses from "./ViewCourses/ViewCourses";
import OurFeatures from "./OurFeatures/OurFeatures";

export default function HomePage() {
  return (
    <div>
      <Banner />
      <PopularCourses />
      <ViewCourses />
      <OurFeatures />
    </div>
  );
}
