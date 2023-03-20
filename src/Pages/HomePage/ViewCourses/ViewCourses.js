import React from "react";
import { NavLink } from "react-router-dom";
import CoursesItem from "../../../Component/CoursesItem/CoursesItem";
import styles from "./ViewCourses.module.scss";
import CoursesShapeIcon from "../../../asset/img/courses-shape.png";

export default function ViewCourses({ listCourses }) {
  const handleViewCourses = () => {
    return listCourses.slice(0, 4).map((item, index) => {
      return <CoursesItem key={index} course={item} />;
    });
  };
  return (
    <div
      className={`lg:pt-[100px] lg:pb-[70px] pt-[60px] pb-[30px] md:pt-[60px] md:pb-[30px] ${styles["view__courses"]} sm:px-0 md:px-8 lg:px-8 relative`}
    >
      <div
        className={`${styles["view__title"]} md:flex lg:flex items-center justify-between px-3 md:px-0 lg:px-0 mb-[30px] md:mb-0 lg:mb-0`}
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h2 className="text-sm font-semibold mb-[10px] md:text-base lg:text-base">
            Featured Courses
          </h2>
          <h1 className="text-[26px] md:text-[40px] lg:text-[40px] font-bold mb-0 md:mb-[50px] lg:mb-[50px]">
            Find Yours From The Featured
          </h1>
        </div>
        <button className={`${styles["view__btn"]} mt-3 md:mt-0 lg:mt-0`}>
          <NavLink to="/courses-list" className="block">
            View All
          </NavLink>
        </button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {handleViewCourses()}
      </div>
      <div className={`${styles["view__shape-icon"]} hidden md:block lg:block`}>
        <img className="animate-bounce" src={CoursesShapeIcon} alt="" />
      </div>
    </div>
  );
}
