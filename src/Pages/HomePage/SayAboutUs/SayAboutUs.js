import React from "react";
import ImgAbout from "../../../asset/img/testimonial-1.png";
import styles from "./SayAboutUs.module.scss";

export default function SayAboutUs() {
  return (
    <div className="pt-[60px] pb-[30px] md:pt-[60px] md:pb-[30px] lg:pt-[100px] lg:pb-[70px]">
      <div className="px-3 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div
            className={`px-0 md:px-3 lg:px-3 ${styles["about__left"]} flex items-center justify-center mr-[100px] mb-[30px] md:mb-0 lg:mb-0`}
          >
            <img className="" src={ImgAbout} alt="" />
          </div>
          <div
            className={`flex items-center justify-center px-0 md:px-3 lg:px-3  ${styles["about__right"]}`}
          >
            <h2 className="text-[28px] md:text-[40px] lg:text-[40px] leading-10 md:leading-[60px] lg:leading-[40px] ">
              Our Students Are Our Strength. See What They Say About Us
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
