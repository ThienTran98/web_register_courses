import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.scss";
import Bg_banner from "../../asset/img/banner-img-1.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { putUserInfor } from "../../Service/userService";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  const { t, i18n } = useTranslation("profile");
  const currentLanguage = i18n.language;
  useEffect(() => {
    if (currentLanguage === "en") {
      document.title = "Profile";
    } else {
      document.title = "Hồ sơ";
    }
  }, [currentLanguage]);
  const handleResetForm = () => {
    document.querySelector(".form-submit").reset();
  };
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDT: "",
      maLoaiNguoiDung: user.maLoaiNguoiDung,
      maNhom: "GP01",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Please enter this field!"),
      matKhau: Yup.string().required("Please enter this field!"),
      hoTen: Yup.string().required("Please enter this field!"),
      email: Yup.string().required("Please enter this field!"),
      soDT: Yup.string().required("Please enter this field!"),
    }),
    onSubmit: (values) => {
      putUserInfor(values)
        .then((res) => {
          if (currentLanguage === "en") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Update Success",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Cập Nhật Thành Công !",
              showConfirmButton: false,
              timer: 1500,
            });
          }
          handleResetForm();
        })
        .catch((err) => {
          if (currentLanguage === "en") {
            Swal.fire({
              position: "center",
              icon: "error",
              title: `${err.response.data} please try again !`,
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: `${err.response.data} xin vui lòng thử lại !`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    },
  });
  return (
    <div className="px-3 md:px-10 lg:px-10 py-[100px]">
      <div className="grid-cols-1 grid md:grid-cols-1 lg:grid-cols-2 ">
        <div className={`px-0 md:px-3 lg:px-3 ${styles["profile__left"]}`}>
          <div
            className={`${styles["profile__title"]} text-center md:text-center lg:text-left`}
          >
            <h2>{t("profile.Profile & Settings")}</h2>
          </div>
          <div>
            <form className="mt-5 form-submit" onSubmit={formik.handleSubmit}>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">{t("profile.User Name")}</label>
                <input
                  className="w-full "
                  type="text"
                  placeholder={user.taiKhoan}
                  id="taiKhoan"
                  name="taiKhoan"
                  onChange={formik.handleChange}
                />
                {formik.errors.taiKhoan && (
                  <h2 className="text-red-600 text-sm">
                    {formik.errors.taiKhoan}
                  </h2>
                )}
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">{t("profile.Password")}</label>
                <input
                  className="w-full "
                  type="password"
                  id="matKhau"
                  name="matKhau"
                  onChange={formik.handleChange}
                  placeholder="********"
                />
                {formik.errors.matKhau && (
                  <h2 className="text-red-600 text-sm">
                    {formik.errors.matKhau}
                  </h2>
                )}
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">{t("profile.Full Name")}</label>
                <input
                  className="w-full "
                  type="text"
                  id="hoTen"
                  name="hoTen"
                  onChange={formik.handleChange}
                  placeholder={user.hoTen}
                />
                {formik.errors.hoTen && (
                  <h2 className="text-red-600 text-sm">
                    {formik.errors.hoTen}
                  </h2>
                )}
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">{t("profile.Phone Number")}</label>
                <input
                  className="w-full "
                  type="text"
                  id="soDT"
                  name="soDT"
                  onChange={formik.handleChange}
                  placeholder="039965822"
                />

                {formik.errors.soDT && (
                  <h2 className="text-red-600 text-sm">{formik.errors.soDT}</h2>
                )}
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">{t("profile.Email")}</label>
                <input
                  className="w-full "
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  placeholder={user.email}
                />
                {formik.errors.email && (
                  <h2 className="text-red-600 text-sm">
                    {formik.errors.email}
                  </h2>
                )}
              </div>
              <div className="text-center md:text-center lg:text-left">
                <button
                  type="submit"
                  className={`md:py-4 md:px-16 py-4 px-20 lg:py-4 lg:px-12 ${styles["profile__btn"]}`}
                >
                  {t("profile.Save")}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className={`px-0 md:px-3 lg:px-3 ${styles["profile__right"]} relative hidden md:hidden lg:block`}
        >
          <img className="mt-[100px]" src={Bg_banner} alt="" />
        </div>
      </div>
    </div>
  );
}
