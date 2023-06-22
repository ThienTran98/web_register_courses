import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HEADER__EN from "./locales/en/header.json";
import HOME_EN from "./locales/en/home.json";
import FOOTER_EN from "./locales/en/footer.json";
import COURSES_ITEM_EN from "./locales/en/coursesItem.json";
import DETAIL_EN from "./locales/en/detail.json";
import CHECKOUT_EN from "./locales/en/checkout.json";
import INFOR_EN from "./locales/en/infor.json";
import LOGIN_EN from "./locales/en/login.json";
import NOT_FOUND_EN from "./locales/en/notFound.json";
import REGISTER_EN from "./locales/en/register.json";
import PROFILE_EN from "./locales/en/profile.json";
import SEARCH_EN from "./locales/en/search.json";

import HEADER__VI from "./locales/vi/header.json";
import HOME_VI from "./locales/vi/home.json";
import FOOTER_VI from "./locales/vi/footer.json";
import COURSES_ITEM_VI from "./locales/vi/coursesItem.json";
import DETAIL_VI from "./locales/vi/detail.json";
import CHECKOUT_VI from "./locales/vi/checkout.json";
import INFOR_VI from "./locales/vi/infor.json";
import LOGIN_VI from "./locales/vi/login.json";
import NOT_FOUND_VI from "./locales/vi/notFound.json";
import REGISTER_VI from "./locales/vi/register.json";
import PROFILE_VI from "./locales/vi/profile.json";
import SEARCH_VI from "./locales/vi/search.json";

export const localLanguage = {
  en: "English",
  vi: "Tiếng Việt",
};
const resources = {
  en: {
    header: HEADER__EN,
    home: HOME_EN,
    footer: FOOTER_EN,
    coursesItem: COURSES_ITEM_EN,
    detail: DETAIL_EN,
    checkout: CHECKOUT_EN,
    infor: INFOR_EN,
    login: LOGIN_EN,
    notFound: NOT_FOUND_EN,
    register: REGISTER_EN,
    profile: PROFILE_EN,
    search: SEARCH_EN,
  },
  vi: {
    header: HEADER__VI,
    home: HOME_VI,
    footer: FOOTER_VI,
    coursesItem: COURSES_ITEM_VI,
    detail: DETAIL_VI,
    checkout: CHECKOUT_VI,
    infor: INFOR_VI,
    login: LOGIN_VI,
    notFound: NOT_FOUND_VI,
    register: REGISTER_VI,
    profile: PROFILE_VI,
    search: SEARCH_VI,
  },
};

i18n.use(initReactI18next).init({
  resources,
  language: "en",
  ns: [
    "header",
    "home",
    "footer",
    "coursesItem",
    "detail",
    "checkout",
    "infor",
    "login",
    "notFound",
    "register",
    "profile",
    "search",
  ],
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});
