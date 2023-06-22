import React from "react";
import { faArrowRight, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styles from "./Top_Header.module.scss";
import { useSelector } from "react-redux";
import logoFlagVN from "../../../asset/img/flagVN.png";
import logoFlagEngland from "../../../asset/img/Flag_of_the_United_States.svg";
import { useTranslation } from "react-i18next";
import { localLanguage } from "../../../i18n/i18n";

export default function Top_Header_Desktop() {
  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  // changLanguages
  const { t, i18n } = useTranslation();
  const handleChangeLanguages = (language) => {
    i18n.changeLanguage(language);
  };
  // current language
  const currentChangeLanguages = localLanguage[i18n.language];
  return (
    <div className={`${styles["bg__top-header"]} py-2`}>
      <div className={`container ${styles["font-size-15"]} px-8 mx-auto `}>
        <div className="grid grid-cols-12 leading-8 text-base">
          <div className="col-span-8 ">
            <div
              className={`flex items-center ${styles["text__header-color"]}`}
            >
              <p>
                {t(
                  "top-header.Keep learning with free resources during COVID-19."
                )}
              </p>
              <a
                className="tracking-wider font-bold sm:inline-flex flex items-center hover:no-underline hover:text-white hover:opacity-70"
                href="#!"
              >
                {t("top-header.Learn more")}
                <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </a>
            </div>
          </div>
          <div className="  col-span-4  text-white  flex items-center justify-end">
            <ul className=" font-semibold tracking-tighter flex">
              <li
                className={`flex items-center hover:opacity-80 cursor-pointer ${styles["li__item-flag"]} min-w-[110px]`}
              >
                <img
                  style={{
                    width: 26,
                    height: 14,
                    objectFit: "cover",
                  }}
                  // src={logoFlagVN}
                  src={i18n.language === "en" ? logoFlagEngland : logoFlagVN}
                  alt=""
                />
                <span className="mx-2">{currentChangeLanguages}</span>
                <div
                  className={`${styles["li__item-languages"]} px-2 pt-2 shadow-2xl rounded-sm`}
                >
                  <div
                    onClick={() => {
                      handleChangeLanguages("vi");
                    }}
                    className="flex items-center hover:text-teal-600 "
                  >
                    <FontAwesomeIcon className="mr-4" icon={faGlobeAsia} />
                    <h3 className="">Tiếng Việt</h3>
                  </div>
                  <div
                    onClick={() => {
                      handleChangeLanguages("en");
                    }}
                    className="flex items-center hover:text-teal-600 "
                  >
                    <FontAwesomeIcon className="mr-4" icon={faGlobeAsia} />
                    <h3 className="">English</h3>
                  </div>
                </div>
              </li>
              <li className="ml-3">{t("top-header.Become An Instructor")}</li>
              <li className={`${styles["li__item"]}`}></li>
              {!user ? (
                <li className="flex items-center">
                  <NavLink
                    to="/login"
                    className="hover:no-underline hover:text-white hover:opacity-70"
                  >
                    <i className="mr-2">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </i>
                    {t("top-header.Sign in")}
                  </NavLink>
                </li>
              ) : (
                <li className="flex items-center">
                  <a
                    href="https://www.facebook.com/"
                    className="hover:no-underline hover:text-white hover:opacity-70"
                  >
                    <i className="mr-2">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </i>
                    Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
