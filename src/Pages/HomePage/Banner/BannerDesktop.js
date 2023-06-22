import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import bannerImg from "../../../asset/img/banner-img-1.png";
import client1 from "../../../asset/img/client-1.jpg";
import client2 from "../../../asset/img/client-2.jpg";
import client3 from "../../../asset/img/client-3.jpg";
import shape1 from "../../../asset/img/shape-1.svg";
import shape2 from "../../../asset/img/shape-2 (1).svg";
import shape3 from "../../../asset/img/shape-3.svg";

import styles from "./Banner.module.scss";
import { useTranslation } from "react-i18next";

export default function BannerDesktop() {
  // tạo biến và truyền vào nút search
  const [valueSearch, setValueSearch] = useState("");
  const navigate = useNavigate();
  const handleSearchValues = (e) => {
    if (valueSearch.trim().length !== 0) {
      navigate(`/search/keyword/${valueSearch}`);
    } else {
      e.preventDefault();
    }
  };
  const { t } = useTranslation("home");
  return (
    <div className={`${styles["homePage__banner"]} pt-[166px] pb-[185px]`}>
      <div className={`${styles["container-banner"]}`}>
        <div className="items-center grid grid-cols-2">
          {/* LEFT-CORNER  */}
          <div className="banner-left">
            <div className={`${styles["homePage__banner--img"]}`}>
              <img src={bannerImg} alt="banner" style={{ transform: "none" }} />
            </div>
          </div>

          {/* RIGHT-CORNER  */}
          <div className="banner-right">
            <div className={`${styles["homePage__banner__content"]}`}>
              <h1 className="animate-pulse text-[50px]">
                {t(
                  "banner.Improve Your Online Learning Experience Better Instantly"
                )}
              </h1>

              <p
                className="animate__animated animate__backInRight animate__slow  animate__delay-2s"
                style={{ opacity: 1, transform: "none" }}
              >
                {t("banner.We have")} <span>{t("banner.40k+")}</span>{" "}
                {t("banner.Online courses")}
                <span className="mx-1">{t("banner.500K+")}</span>
                {t(
                  "banner.Online registered student. Find your desired Courses from them."
                )}
              </p>

              <form className={`${styles["search-form"]} flex items-center`}>
                <input
                  type="text"
                  className={`${styles["form-control"]} grow`}
                  placeholder={t("banner.Search Courses")}
                  name="search"
                  onChange={(e) => {
                    setValueSearch(e.target.value);
                  }}
                />
                <button
                  onClick={handleSearchValues}
                  className={`${styles["default-btn"]} flex items-center`}
                >
                  {t("banner.Search Now")}
                  <FontAwesomeIcon className="ml-2" icon={faSearch} />
                </button>
              </form>

              <ul className={`${styles["client-list"]} flex `}>
                <li className="flex items-center ">
                  <img src={client1} alt="banner" />
                  <img
                    src={client2}
                    className={`${styles["client"]} `}
                    alt="banner"
                  />
                  <img
                    src={client3}
                    className={`${styles["client"]} `}
                    alt="banner"
                  />
                </li>
                <li className="flex items-center">
                  <p>
                    {t("banner.500K+ People already trusted us.")}
                    <NavLink
                      className="underline underline-offset-4 hover:opacity-75"
                      to="/courses-list"
                    >
                      {t("banner.View Courses")}{" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </NavLink>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <img
        src={shape1}
        className={`${styles["shape"]} ${styles["shape-1"]} animate-pulse`}
        alt="banner"
      />
      <img
        src={shape2}
        className={`${styles["shape"]} ${styles["shape-2"]} animate-pulse`}
        alt="banner"
      />
      <img
        src={shape3}
        className={`${styles["shape"]} ${styles["shape-3"]} animate-pulse`}
        alt="banner"
      />
    </div>
  );
}
