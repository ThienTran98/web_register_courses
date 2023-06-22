import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigation = useNavigate();
  const { t, i18n } = useTranslation("notFound");
  const currentLanguage = i18n.language;
  const handleGoBackPage = () => {
    navigation(-1);
  };
  useEffect(() => {
    if (currentLanguage === "en") {
      document.title = "It looks like something is missing!";
    } else {
      document.title = "Có vẻ như thiếu một cái gì đó !";
    }
  }, [currentLanguage]);
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        {t("notFound.Page Not Found")}
      </div>
      <div>
        <NavLink to="/">
          <button className="mt-5 mr-2">
            <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative text-white block px-8 py-3 bg-[#1A2238] border border-current">
                {t("notFound.Go Home")}
              </span>
            </a>
          </button>
        </NavLink>
        <button onClick={handleGoBackPage} className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block px-8 text-white py-3 bg-[#1A2238] border border-current">
              {t("notFound.Go Back")}
            </span>
          </a>
        </button>
      </div>
    </main>
  );
}
