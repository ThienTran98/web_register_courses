import React from "react";
import CoursesItem from "../../../Component/CoursesItem/CoursesItem";
import styles from "./PopularCourses.module.scss";

export default function PopularCourses() {
  return (
    <div
      className={`${styles["popular"]} lg:pt-[100px] lg:pb-[60px] md:pt-[60px] md:pb-[30px] sm:pt-[60px] sm:pb-[30px] sm:px-0 md:px-8 lg:px-8`}
    >
      <div className={`${styles["popular__title"]} text-center pb-[50px]`}>
        <h2 className="text-base font-semibold">Popular Courses</h2>
        <h1 className="text-[40px] font-bold">
          Expand Your Career Opportunity With Our Courses
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
        <CoursesItem />
      </div>
    </div>
  );
}
