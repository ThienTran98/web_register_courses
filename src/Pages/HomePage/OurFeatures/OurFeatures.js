import React from "react";
import feature1 from "../../../asset/img/feature-1.svg";
import feature2 from "../../../asset/img/feature-2.svg";
import feature3 from "../../../asset/img/feature-3.svg";
import feature4 from "../../../asset/img/feature-4.svg";
import book from "../../../asset/img/feature-shape-1.svg";

import styles from "./OurFeatures.module.scss";

export default function OurFeatures() {
  return (
    <div
      className={`${styles["feature"]} pt-[60px] pb-[30px] md:pt-[60px] md:pb-[30px] lg:pt-[100px] lg:pb-[70px]`}
    >
      <div className="px-3 md:px-8 lg:px-8">
        <div className={`${styles["features__title"]} text-center mb-[50px]`}>
          <h3 className="text-[15px] md:text-base lg:text-base">
            Our Features
          </h3>
          <h2 className="text-[28px] md:text-[40px] lg:text-[40px]">
            Why You Should Choose Edmy
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className={`px-0 lg:px-3 md:px-3 mb-[30px] md:mb-0 lg:mb-0`}>
            <div
              className={`p-[38px] flex flex-col items-center justify-center shadow-xl ${styles["features__item"]} ease-out duration-300 hover:translate-y-[-10px]`}
            >
              <img src={feature1} alt="" />
              <h2 className="mt-[33px] mb-[20px]">Expert-Led Video Courses</h2>
              <p className="text-center leading-7">
                Instructors from around the world teach millions of students on
                Edmy through video.
              </p>
            </div>
          </div>
          <div className={`px-0 lg:px-3 md:px-3 mb-[30px] md:mb-0 lg:mb-0`}>
            <div
              className={`p-[38px] flex flex-col items-center justify-center shadow-xl ${styles["features__item"]} ease-out duration-300 hover:translate-y-[-10px]`}
            >
              <img src={feature2} alt="" />
              <h2 className="mt-[33px] mb-[20px]">Expert-Led Video Courses</h2>
              <p className="text-center leading-7">
                Instructors from around the world teach millions of students on
                Edmy through video.
              </p>
            </div>
          </div>
          <div className={`px-0 lg:px-3 md:px-3 mb-[30px] md:mb-0 lg:mb-0`}>
            <div
              className={`p-[38px] flex flex-col items-center justify-center shadow-xl ${styles["features__item"]} ease-out duration-300 hover:translate-y-[-10px]`}
            >
              <img src={feature3} alt="" />
              <h2 className="mt-[33px] mb-[20px]">Expert-Led Video Courses</h2>
              <p className="text-center leading-7">
                Instructors from around the world teach millions of students on
                Edmy through video.
              </p>
            </div>
          </div>
          <div className={`px-0 lg:px-3 md:px-3 mb-[30px] md:mb-0 lg:mb-0`}>
            <div
              className={`p-[38px] flex flex-col items-center justify-center shadow-xl ${styles["features__item"]} ease-out duration-300 hover:translate-y-[-10px]`}
            >
              <img src={feature4} alt="" />
              <h2 className="mt-[33px] mb-[20px]">Expert-Led Video Courses</h2>
              <p className="text-center leading-7">
                Instructors from around the world teach millions of students on
                Edmy through video.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
