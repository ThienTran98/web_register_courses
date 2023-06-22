import React from "react";
import CoursesItem from "../../../Component/CoursesItem/CoursesItem";
import styles from "./PopularCourses.module.scss";
import { useTranslation } from "react-i18next";

export default function PopularCourses({ listCourses }) {
  const renderPopularCourses = () => {
    return listCourses.slice(0, 4).map((item) => {
      return <CoursesItem course={item} />;
    });
  };
  const { t } = useTranslation("home");
  return (
    <div
      className={`${styles["popular"]} lg:pt-[100px] lg:pb-[60px] md:pt-[60px] md:pb-[30px] pt-[60px] pb-[30px] sm:px-0 md:px-8 lg:px-8`}
    >
      <div
        className={`${styles["popular__title"]} text-center pb-[50px] animate__animated animate__fadeInUp animate__delay-3s`}
      >
        <h2 className="text-base font-semibold">
          {t("popular-courses.Popular Courses")}
        </h2>
        <h1 className="text-[40px] font-bold">
          {t("popular-courses.Expand Your Career Opportunity With Our Courses")}
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {renderPopularCourses()}
      </div>
    </div>
  );
}
