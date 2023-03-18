import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./TopCategories.module.scss";

export default function TopCategories() {
  return (
    <div className="py-[60px] md:py-[60px] lg:py-[100px] px-0 md:px-8 lg:px-8">
      <div className={`${styles["catagories__title"]}`}>
        <h2 className="md:text-base lg:text-base text-sm font-semibold">
          Top Categories
        </h2>
        <h1 className="text-[28px] md:text-[40px] lg:text-[40px] font-bold mb-[50px]">
          Browse Top Categories
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
            <h3>IT & Software</h3>
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
            <h3>Development</h3>
            <FontAwesomeIcon
              className={`${styles["catagories__icon"]}`}
              icon={faCode}
            />
          </div>
        </div>
      </div>
      <h3 className="flex items-center justify-center">Browse All</h3>
    </div>
  );
}
