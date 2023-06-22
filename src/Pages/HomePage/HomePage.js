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
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  useEffect(() => {
    const timeId = setTimeout(() => {
      getCoursesList()
        .then((res) => {
          setListCourses(res.data);
        })
        .catch((err) => {});
    }, 1000);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  useEffect(() => {
    if (currentLanguage === "en") {
      document.title = "Courses - Register Course";
    } else {
      document.title = "Khóa học - Đăng kí khóa học";
    }
  }, [currentLanguage]);
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
