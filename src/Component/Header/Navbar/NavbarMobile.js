import {
  faArrowCircleLeft,
  faBars,
  faBook,
  faCaretDown,
  faCaretUp,
  faCartShopping,
  faCreditCard,
  faGear,
  faGlobe,
  faHeart,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logoIcon from "../../../asset/img/logo.png";
import {
  setCourseAddToCart,
  setRegisterCoursesList,
} from "../../../redux-toolkit/coursesSlice";
import { setUserLogOut } from "../../../redux-toolkit/userSlice";
import {
  coursesListRegisterStorage,
  userLocalStorage,
} from "../../../Service/localService";
import styles from "./navbar.module.scss";
import { useTranslation } from "react-i18next";

export default function NavbarMobile() {
  const [show, setShow] = useState(false);
  const [showInfor, setShowInfor] = useState(false);
  const [showChangeLanguage, setShowChangeLanguage] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  const { t, i18n } = useTranslation("header");
  const currentLanguage = i18n.language;
  // Log Out
  const handleLogOut = () => {
    dispatch(setUserLogOut(null));
    userLocalStorage.remove();
    coursesListRegisterStorage.remove();
    setShowInfor(false);
    if (currentLanguage === "en") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Log out successfully !",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đăng xuất thành công !",
        showConfirmButton: false,
        timer: 1000,
      });
    }

    setShow(false);
    navigation("/login");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const listRegisterCourses = useSelector((state) => {
    return state.coursesSlice.coursesListRegister;
  });
  return (
    <div>
      <div className="container px-2 mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="mr-8">
            <NavLink to="/">
              <img src={logoIcon} alt="" />
            </NavLink>
          </div>
          <ul className="flex justify-between items-center">
            <li className="px-8 md:mr-8 lg:mr-8 lg:border-x-zinc-400  lg:border-y-transparent text-3xl lg:text-2xl lg:border-2 relative">
              <NavLink to="/check-out">
                <div className="relative block">
                  <FontAwesomeIcon
                    className="text-teal-600 block"
                    icon={faCartShopping}
                  />
                  <div
                    className={`${styles["item__cart--number"]} font-bold w-6 h-6`}
                  >
                    <p className="relative top-[2px]">
                      {listRegisterCourses.length}
                    </p>
                  </div>
                </div>
              </NavLink>
            </li>
            {!user ? (
              <li
                className={` text-white rounded ${styles["bg__background"]} transition duration-300 linear hidden  focus:outline-none lg:block`}
              >
                <button className="block px-10 py-4 focus:outline-none font-semibold text-base">
                  <NavLink
                    to="/register"
                    className="block hover:text-white no-underline hover:no-underline"
                  >
                    {t("navbar.Register Now")}
                  </NavLink>
                </button>
              </li>
            ) : (
              <li className="relative">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full block ring-2 ring-offset-4 ring-violet-400 ring-offset-gray-100"
                    src="https://source.unsplash.com/40x40/?portrait?1"
                    alt=""
                  />
                  {!showInfor ? (
                    <FontAwesomeIcon
                      className="text-3xl cursor-pointer text-teal-600 py-1 mx-3"
                      onClick={() => {
                        setShowInfor(!showInfor);
                      }}
                      icon={faCaretDown}
                    />
                  ) : (
                    <FontAwesomeIcon
                      onClick={() => {
                        setShowInfor(!showInfor);
                      }}
                      className="text-3xl cursor-pointer text-teal-600 py-1 mx-3"
                      icon={faCaretUp}
                    />
                  )}
                </div>
                {showInfor ? (
                  <div
                    className={`${styles["arrow__position-mobile"]} bg-gray-50`}
                  >
                    <div className="flex items-center ">
                      <img
                        className="w-8 h-8 mr-2 rounded-full ring-2 ring-offset-4 ring-violet-400 ring-offset-gray-800"
                        src="https://source.unsplash.com/40x40/?portrait?1"
                        alt=""
                      />
                      <div className="ml-3">
                        <h3>{user.hoTen}</h3>
                        <p>{user.email}</p>
                      </div>
                    </div>
                    <ul className="mt-3">
                      <li className="py-2">
                        <a
                          href=""
                          className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                        >
                          <FontAwesomeIcon
                            className="mr-3 block"
                            icon={faBook}
                          />
                          {t("navbar.My Learning")}
                        </a>
                      </li>
                      <li className="py-2">
                        <NavLink
                          onClick={() => {
                            setShowInfor(!showInfor);
                          }}
                          to="/check-out"
                          className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                        >
                          <FontAwesomeIcon
                            className="mr-3 block"
                            icon={faCreditCard}
                          />
                          {t("navbar.My Purchase")}
                        </NavLink>
                      </li>
                      <li className="py-2">
                        <NavLink to="/wishList">
                          <a
                            href=""
                            className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                          >
                            <FontAwesomeIcon
                              onClick={() => {
                                setShowInfor(!showInfor);
                              }}
                              className="mr-3 block"
                              icon={faHeart}
                            />
                            {t("navbar.Wishlist")}
                          </a>
                        </NavLink>
                      </li>
                      {showChangeLanguage ? (
                        <li className="py-2 block md:block lg:hidden">
                          <NavLink
                            onClick={() => {
                              setShowInfor(!showInfor);
                              i18n.changeLanguage("vi");
                              setShowChangeLanguage(!showChangeLanguage);
                            }}
                            className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                          >
                            <FontAwesomeIcon
                              className="mr-3 block"
                              icon={faGlobe}
                            />
                            {t("navbar.Change Language")}
                          </NavLink>
                        </li>
                      ) : (
                        <li className="py-2 block md:block lg:hidden">
                          <NavLink
                            onClick={() => {
                              setShowInfor(!showInfor);
                              i18n.changeLanguage("en");
                              setShowChangeLanguage(!showChangeLanguage);
                            }}
                            className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                          >
                            <FontAwesomeIcon
                              className="mr-3 block"
                              icon={faGlobe}
                            />
                            {t("navbar.Change Language")}
                          </NavLink>
                        </li>
                      )}

                      <li className="py-2">
                        <NavLink
                          onClick={() => {
                            setShowInfor(!showInfor);
                          }}
                          to="/profile/basic-information"
                          className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                        >
                          <FontAwesomeIcon
                            className="mr-3 block"
                            icon={faGear}
                          />
                          {t("navbar.Account Setting")}
                        </NavLink>
                      </li>
                    </ul>
                    <div
                      onClick={handleLogOut}
                      className="flex items-center hover:text-teal-500 py-2 cursor-pointer"
                    >
                      <FontAwesomeIcon
                        className="mr-3 block"
                        icon={faArrowCircleLeft}
                      />
                      {t("navbar.Log Out")}
                    </div>
                  </div>
                ) : null}
              </li>
            )}
            {!show ? (
              <>
                <li
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="text-3xl ml-2 px-2.5 lg:hidden py-2 text-teal-600 bg-gray-200 cursor-pointer ml-4"
                >
                  <FontAwesomeIcon
                    className="block transition duration-300 ease-linear"
                    icon={faBars}
                  />
                </li>
              </>
            ) : (
              <li
                onClick={() => {
                  setShow(!show);
                }}
                className="text-4xl px-2.5 lg:hidden py-2 text-teal-600 bg-gray-200 cursor-pointer ml-4"
              >
                <FontAwesomeIcon
                  className="block  transition duration-300 ease-linear"
                  icon={faXmark}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
      {show ? (
        <div className="border-t lg:hidden transition duration-300 ease-linear">
          <ul className="px-6 py-3 transition duration-300 ease-linear">
            <li className="mt-3 hover:text-teal-600">
              <NavLink to="/">{t("navbar.Home")}</NavLink>
            </li>
            <li className="mt-3 hover:text-teal-600">{t("navbar.Course")}</li>
            <li className="mt-3 hover:text-teal-600">
              {t("navbar.Become An Instructor")}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
