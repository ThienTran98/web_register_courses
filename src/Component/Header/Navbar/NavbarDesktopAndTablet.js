import {
  faArrowCircleLeft,
  faBars,
  faBook,
  faCaretDown,
  faCaretUp,
  faCartShopping,
  faCreditCard,
  faGear,
  faHeart,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserLogOut } from "../../../redux-toolkit/userSlice";
import logoIcon from "../../../asset/img/logo.png";

import styles from "./navbar.module.scss";

export default function NavbarDesktopAndTablet() {
  const [show, setShow] = useState(false);
  const [showInfor, setShowInfor] = useState(false);
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  // Log Out
  const handleLogOut = () => {
    dispatch(setUserLogOut(null));
    setShowInfor(false);
    message.success("Đăng xuất thành công ");
    setTimeout(() => {
      navigation("/login");
    }, 1500);
  };
  //

  return (
    <div>
      <div className="container px-8 mx-auto py-4 lg:py-2.5">
        <div className="flex justify-between items-center">
          <div className="mr-8">
            <NavLink to="/">
              <img className="w-full h-full" src={logoIcon} alt="" />
            </NavLink>
          </div>
          <div className="hidden lg:flex justify-center items-center grow ">
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="flex items-center flex-col p-4 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
                <li>
                  <NavLink
                    to="/"
                    className="block py-4  hover:no-underline focus:text-teal-600 pl-3 pr-4 text-base hover:scale-x-125 rounded ease-in duration-300 hover:bg-transparent hover:text-teal-700"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses-list"
                    className="block py-4 hover:no-underline pl-3 pr-4 text-base  focus:text-teal-600 hover:scale-x-125 rounded  ease-in duration-300 hover:bg-transparent hover:text-teal-700"
                  >
                    Course
                  </NavLink>
                </li>
                <li>
                  <NavLink className="block py-4 hover:no-underline pl-3 pr-4 text-base  focus:text-teal-600 rounded hover:scale-x-125  hover:bg-transparent ease-in duration-300 hover:text-teal-700">
                    Become An Instructor
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex justify-between items-center">
            <li className="px-8 md:mr-8  lg:mr-8 lg:border-x-zinc-400  lg:border-y-transparent text-3xl lg:text-2xl lg:border-2">
              <NavLink to="/infor" className="relative">
                <FontAwesomeIcon
                  className="text-teal-600 block"
                  icon={faCartShopping}
                />
                <p className={`${styles["item__cart--number"]}`}>0</p>
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
                    Register Now
                  </NavLink>
                </button>
              </li>
            ) : (
              <li className="relative">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full block ring-2 ring-offset-4 ring-violet-400 ring-offset-gray-800"
                    src="https://source.unsplash.com/40x40/?portrait?1"
                    alt=""
                  />
                  {!showInfor ? (
                    <FontAwesomeIcon
                      className="cursor-pointer text-xl md:ml-3 lg:ml-3 px-2 py-1"
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
                      className="text-xl cursor-pointer md:ml-3 lg:ml-3 px-2 py-1"
                      icon={faCaretUp}
                    />
                  )}
                </div>
                {showInfor ? (
                  <div className={`${styles["arrow__position"]} bg-gray-50`}>
                    <div className="flex items-center ">
                      <img
                        className="w-8 h-8 mr-2 rounded-full ring-2 ring-offset-4 ring-violet-400 ring-offset-gray-800"
                        src="https://source.unsplash.com/40x40/?portrait?1"
                        alt=""
                      />
                      <div>
                        <h3>{user.hoTen}</h3>
                        <p>{user.email}</p>
                      </div>
                    </div>
                    <ul className="mt-3">
                      <li
                        onClick={() => {
                          setShowInfor(false);
                        }}
                        className="py-2"
                      >
                        <NavLink
                          to="/infor"
                          className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                        >
                          <FontAwesomeIcon
                            className="mr-3 block"
                            icon={faBook}
                          />
                          My Learning
                        </NavLink>
                      </li>
                      <li className="py-2">
                        <a
                          href=""
                          className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                        >
                          <FontAwesomeIcon
                            className="mr-3 block"
                            icon={faCreditCard}
                          />
                          My Purchase
                        </a>
                      </li>
                      <li className="py-2">
                        <a
                          href=""
                          className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                        >
                          <FontAwesomeIcon
                            className="mr-3 block"
                            icon={faHeart}
                          />
                          Wishlist
                        </a>
                      </li>
                      <li className="py-2">
                        <NavLink to="/infor">
                          <a
                            href=""
                            className="flex items-center no-underline hover:no-underline hover:text-teal-500"
                          >
                            <FontAwesomeIcon
                              className="mr-3 block"
                              icon={faGear}
                            />
                            Account Setting
                          </a>
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
                      Log Out
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
                  className="text-3xl px-2.5 lg:hidden py-2 text-teal-600 bg-gray-200 cursor-pointer ml-4"
                >
                  <FontAwesomeIcon className="block" icon={faBars} />
                </li>
              </>
            ) : (
              <li
                onClick={() => {
                  setShow(!show);
                }}
                className="text-4xl px-2.5 lg:hidden py-2 text-teal-600 bg-gray-200 cursor-pointer ml-4"
              >
                <FontAwesomeIcon className="block " icon={faXmark} />
              </li>
            )}
          </ul>
        </div>
      </div>
      {show ? (
        <div className="border-t lg:hidden">
          <ul className="px-6 py-3">
            <li className="mt-3 hover:text-teal-600">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mt-3 hover:text-teal-600">Courses</li>
            <li className="mt-3 hover:text-teal-600">Become An Instructor</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
