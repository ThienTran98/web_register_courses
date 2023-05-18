import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import styles from "./Top_Header.module.scss";
import { useSelector } from "react-redux";

export default function Top_Header_Tablet() {
  const user = useSelector((state) => {
    return state.userSlice.user;
  });

  return (
    <div className={`${styles["bg__top-header"]} py-2`}>
      <div className={`container ${styles["font-size-15"]} px-4 mx-auto `}>
        <div className={`${styles["text__header-color"]}`}>
          <div className=" flex justify-center">
            <p>Keep learning with free resources during COVID-19.</p>
            <a
              className="tracking-wider font-bold sm:inline-flex flex items-center hover:no-underline hover:text-white hover:opacity-70"
              href="#!"
            >
              Learn more
              <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </a>
          </div>
          <ul className="font-semibold tracking-tighter flex justify-center">
            <li>Become An Instructor</li>
            <li className={`${styles["li-item"]}`}></li>
            {!user ? (
              <li className="flex items-center">
                <NavLink
                  to="/login"
                  className="hover:no-underline hover:text-white hover:opacity-70"
                >
                  <i className="mr-2">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </i>
                  Sign in
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
  );
}
