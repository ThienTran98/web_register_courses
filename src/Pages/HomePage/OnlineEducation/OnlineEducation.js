import React from "react";

import styles from "./OnlineEducation.module.scss";
import imageVideo from "../../../asset/img/course-16.jpg";
import imageTransform from "../../../asset/img/transform-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function OnlineEducation() {
  const { t } = useTranslation("home");
  return (
    <div className="px-3 md:px-8 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div
          className={`px-0 md:px-3 lg:px-3 ${styles["onlineEducation__title"]} mb-[30px] md:mb-0 lg:mb-0`}
        >
          <h1 className="text-[26px] md:text-[40px] lg:text-[40px] mb-4 font-bold">
            {t("online-education.Transform Your Life Through Online Education")}
          </h1>
          <p className="text-[15px] md:text-base lg:text-base mb-[30px]">
            {t(
              "online-education.Instructors from around the world teach millions of students on Edmy. We provide the tools and skills to teach what you love. And you can also achieve your goal."
            )}
          </p>
          <div
            className={`block md:flex lg:flex items-center justify-between p-5 ${styles["onlineEducation__img-left"]} shadow-2xl mb-[30px]`}
          >
            <div
              className={`mr-0 md:mr-5 lg:mr-5 ${styles["onlineEducation__image"]}`}
            >
              <img className=" w-full" src={imageVideo} alt="education" />
              <div
                className={`${styles["onlineEducation__icon"]} w-16 h-16 md:w-10 md:h-10 lg:w-10 lg:h-10`}
              >
                <FontAwesomeIcon
                  className={`${styles["onlineEducation__icon-play"]}`}
                  icon={faPlay}
                />
              </div>
            </div>
            <div
              className={` ${styles["onlineEducation__img-right"]} mt-3 md:mt-0 lg:mt-0 `}
            >
              <h2 className="text-lg mb-2">
                {t(
                  "online-education.Watch Video From the Community How Edmy Change Their Life"
                )}
              </h2>
              <h3 className="text-sm">{t("online-education.My Courses")}</h3>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start md:justify-center">
            <button
              className={`${styles["onlineEducation__btn"]} text-base font-semibold px-10 pt-4 pb-[12px]`}
            >
              <NavLink className="block " to="/courses-list">
                {t("online-education.Find Out How")}
              </NavLink>
            </button>
          </div>
        </div>
        <div
          className={`px-0 md:px-3 lg:px-3 relative ${styles["onlineEducation__image-transform"]}`}
        >
          <img
            src={imageTransform}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
