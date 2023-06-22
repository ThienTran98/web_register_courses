import React from "react";
import styles from "./Footer.module.scss";
import white_logo from "../../asset/img/logo.png";
import { useTranslation } from "react-i18next";
// import book_blue from "../../assets/img/footer-shape-1.png";
// import book_orange from "../../assets/img/footer-shape-2.png";

export default function Footer() {
  const { t } = useTranslation("footer");
  return (
    <div className={`${styles["footer__container"]}`}>
      <div className="pt-16 pb-8 md:pt-24 md:pb-20 lg:pt-24 lg:pb-20 px-4">
        <div className="md:grid md:grid-cols-12 lg:grid lg:grid-cols-12 text-zinc-400">
          <div className="lg:col-span-3 md:col-span-6 px-3 lg:mb-0 md:mb-8 sm:mb-0">
            <img
              className={`block max-w-full mb-[20px]`}
              src={white_logo}
              alt="logo"
            />
            <p className="text-left leading-8">
              {t(
                "footer.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis misuscipit bibendum sit amet, consectetur."
              )}
            </p>
          </div>
          <div className="lg:col-span-3 md:col-span-6 px-3 mt-8 md:mt-0 lg:mt-0 lg:mb-0 md:mb-8 sm:mb-0">
            <h3 className={`text-xl mb-[20px] font-bold text-black`}>
              {t("footer.Quick Link")}
            </h3>
            <ul>
              <li className="mb-3">
                <a
                  className="hover:no-underline hover:text-teal-700  hover:transition hover:duration-150 hover:ease-out block"
                  href=""
                >
                  {t("footer.Courses")}
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="hover:no-underline hover:text-teal-700  hover:transition hover:duration-150 hover:ease-out block"
                  href="
          "
                >
                  {t("footer.About Us")}
                </a>
              </li>
              <li>
                <a
                  className="hover:no-underline hover:text-teal-700  hover:transition hover:duration-150 hover:ease-out block"
                  href=""
                >
                  {t("footer.Terms & Conditions")}
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-6 px-3 mt-8 md:mt-0 lg:mt-0">
            <h3 className={`text-xl mb-[20px] font-bold text-black`}>
              {t("footer.Help Center")}
            </h3>
            <ul>
              <li className="mb-3">
                <a
                  className="hover:no-underline hover:text-teal-700  hover:transition hover:duration-150 hover:ease-out block"
                  href=""
                >
                  {t("footer.Support")}
                </a>
              </li>
              <li className="mb-3">
                <a
                  className="hover:no-underline hover:text-teal-700  hover:transition hover:duration-150 hover:ease-out block"
                  href=""
                >
                  {t("footer.Get Help")}
                </a>
              </li>
              <li>
                <a
                  className="hover:no-underline hover:text-teal-700  hover:transition hover:duration-150 hover:ease-out block"
                  href=""
                >
                  {t("footer.Privacy Policy")}
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-6 px-3 leading-8 mt-8 md:mt-0 lg:mt-0">
            <h3 className={`text-xl mb-[20px] font-bold text-black`}>
              {t("footer.Contact Info")}
            </h3>
            <ul>
              <li className="text-teal-600 font-semibold">
                {t("footer.Call Us")}
                <span className="text-zinc-400 tracking-widest">
                  1-01-01-2023
                </span>
              </li>
              <li className="text-teal-600 font-semibold">
                {t("footer.Address")}

                <span className="text-zinc-400 tracking-widest">
                  {t("footer.+7011 Linh Trung, Thu Duc City, HCM")}
                </span>
              </li>
              <li className="text-teal-600 font-semibold">
                {t("footer.Mail Us")}
                <span className="text-zinc-400 tracking-widest">
                  hello@edmy.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4">
        <div className="text-zinc-400 text-center py-5 border-t">
          <p>
            {t("footer.© Edmy 2023 is Proudly Owned by")}
            <a className="text-teal-600 ml-2" href="https://cybersoft.edu.vn/">
              HiCyber
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
