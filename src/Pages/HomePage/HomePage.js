import React, { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import PopularCourses from "./PopularCourses/PopularCourses";
import ViewCourses from "./ViewCourses/ViewCourses";
import OurFeatures from "./OurFeatures/OurFeatures";
import TopCategories from "./TopCategories/TopCategories";
import OnlineEducation from "./OnlineEducation/OnlineEducation";
import SayAboutUs from "./SayAboutUs/SayAboutUs";
import NumberYears from "./NumberYears/NumberYears";
import { getCoursesList } from "../../Service/coursesService";

export default function HomePage() {
  const [listCourses, setListCourses] = useState([]);
  useEffect(() => {
    getCoursesList()
      .then((res) => {
        setListCourses(res.data);
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    document.title = "Courses/HomePage";
  }, []);
  return (
    <div>
      <Banner />
      <PopularCourses listCourses={listCourses} />
      <ViewCourses listCourses={listCourses} />
      <TopCategories />
      <OnlineEducation />
      <OurFeatures />
      <SayAboutUs />
      <NumberYears />
    </div>
  );
}
