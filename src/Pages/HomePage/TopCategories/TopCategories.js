import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./TopCategories.module.scss";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function TopCategories() {
  const { t } = useTranslation("home");
  return (
    <div className="py-[60px] md:py-[60px] lg:py-[100px] px-0 md:px-8 lg:px-8">
      <div className={`${styles["catagories__title"]}`}>
        <h2 className="md:text-base lg:text-base text-sm font-semibold">
          {t("top-categories.Top Categories")}
        </h2>
        <h1 className="text-[28px] md:text-[40px] lg:text-[40px] font-bold mb-[50px]">
          {t("top-categories.Browse Top Categories")}
        </h1>
      </div>
      <div
        className={`${styles["catagories__content"]} grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-2`}
      >
        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>HTML</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>
        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>CSS</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>Javascript</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>React</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>Redux</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>Spinner</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>PHP</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>Ruby</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>Python</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>Java</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>{t("top-categories.IT & Software")}</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>

        <div className="px-3 md:px-0 lg:px-0">
          <div
            className={`flex items-center justify-between px-[30px] py-5 ${styles["catagories__item"]} mb-[30px] `}
          >
            <h3>{t("top-categories.Development")}</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {t("top-categories.Browse All")}
        <NavLink to="/courses-list">
          <h3
            className={`flex items-center ml-2 ${styles["catagories__link-course"]} hover:opacity-70 `}
          >
            {t("top-categories.Courses")}
            <span className="relative top-[2px] ml-2">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </h3>
        </NavLink>
      </div>
    </div>
  );
}
