import React, { useEffect, useState, Suspense, lazy } from "react";
// import Banner from "./Banner/Banner";
// import PopularCourses from "./PopularCourses/PopularCourses";
// import ViewCourses from "./ViewCourses/ViewCourses";
// import OurFeatures from "./OurFeatures/OurFeatures";
// import TopCategories from "./TopCategories/TopCategories";
// import OnlineEducation from "./OnlineEducation/OnlineEducation";
// import SayAboutUs from "./SayAboutUs/SayAboutUs";
// import NumberYears from "./NumberYears/NumberYears";
import { getCoursesList } from "../../Service/coursesService";
import Skeleton from "react-loading-skeleton";

const Banner = lazy(() => import("./Banner/Banner"));
const PopularCourses = lazy(() => import("./PopularCourses/PopularCourses"));
const ViewCourses = lazy(() => import("./ViewCourses/ViewCourses"));
const OurFeatures = lazy(() => import("./OurFeatures/OurFeatures"));
const TopCategories = lazy(() => import("./TopCategories/TopCategories"));
const OnlineEducation = lazy(() => import("./OnlineEducation/OnlineEducation"));
const SayAboutUs = lazy(() => import("./SayAboutUs/SayAboutUs"));
const NumberYears = lazy(() => import("./NumberYears/NumberYears"));

export default function HomePage() {
  const [listCourses, setListCourses] = useState([]);
  useEffect(() => {
    const timeId = setTimeout(() => {
      getCoursesList()
        .then((res) => {
          setListCourses(res.data);
        })
        .catch((err) => {});
    }, 500);
    return () => {
      clearTimeout(timeId);
    };
  }, []);
  useEffect(() => {
    document.title = "Courses";
  }, []);
  return (
    <div>
      <Suspense fallback={<Skeleton className="w-screen h-screen" />}>
        <Banner />
        <PopularCourses listCourses={listCourses} />
        <ViewCourses listCourses={listCourses} />
        <TopCategories />
        <OnlineEducation />
        <OurFeatures />
        <SayAboutUs />
        <NumberYears />
      </Suspense>
    </div>
  );
}
