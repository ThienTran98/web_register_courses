import { faArrowRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import bannerImg from "../../../asset/img/banner-img-1.png";
import client1 from "../../../asset/img/client-1.jpg";
import client2 from "../../../asset/img/client-2.jpg";
import client3 from "../../../asset/img/client-3.jpg";
import styles from "./Banner.module.scss";
import { useTranslation } from "react-i18next";

export default function BannerTabletAndMobile() {
  const [valueSearch, setValueSearch] = useState("");
  const { t } = useTranslation("home");
  const navigate = useNavigate();
  const handleSearchValues = (e) => {
    if (valueSearch.trim().length !== 0) {
      navigate(`/search/keyword/${valueSearch}`);
    } else {
      e.preventDefault();
    }
  };
  return (
    <div className={`${styles["homePage__banner"]} pt-[60px] pb-[60px]`}>
      <div className={`${styles["container-banner"]}`}>
        <div className="items-center">
          {/* LEFT-CORNER  */}
          <div className="banner-left">
            <div className={`${styles["homePage__banner--img"]}`}>
              <img src={bannerImg} alt="banner" style={{ transform: "none" }} />
            </div>
          </div>

          {/* RIGHT-CORNER  */}
          <div className="banner-right">
            <div className={`${styles["homePage__banner__content"]} `}>
              <h1 className="animate-pulse md:text-[35px] text-[29px] text-center">
                {t(
                  "banner.Improve Your Online Learning Experience Better Instantly"
                )}
              </h1>

              <p
                className="text-center"
                style={{ opacity: 1, transform: "none" }}
              >
                {t("banner.We have")} <span>{t("banner.40k+")}</span>{" "}
                {t("banner.Online courses &")}
                <span>{t("banner.500K+")}</span>{" "}
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
                </button>
              </form>

              <ul className={`${styles["client-list"]} text-center`}>
                <li className="flex items-center justify-center ">
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
    </div>
  );
}
