import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.scss";
import Bg_banner from "../../asset/img/banner-img-1.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { putUserInfor } from "../../Service/userService";
import Swal from "sweetalert2";

export default function Profile() {
  const user = useSelector((state) => {
    return state.userSlice.user;
  });

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
      taiKhoan: Yup.string().required(""),
      matKhau: Yup.string().required(""),
      hoTen: Yup.string().required(""),
      Email: Yup.string().required(""),
      soDT: Yup.string().required(""),
    }),
    onSubmit: (values) => {
      putUserInfor(values)
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Update Success",
            showConfirmButton: false,
            timer: 1500,
          });
          handleResetForm();
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${err.response.data} please try again`,
            showConfirmButton: false,
            timer: 1500,
          });
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
            <h2>Profile & Settings</h2>
          </div>
          <div>
            <form className="mt-5 form-submit" onSubmit={formik.handleSubmit}>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">User</label>
                <input
                  className="w-full "
                  type="text"
                  placeholder={user.taiKhoan}
                  id="taiKhoan"
                  name="taiKhoan"
                  onChange={formik.handleChange}
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">Password</label>
                <input
                  className="w-full "
                  type="password"
                  id="matKhau"
                  name="matKhau"
                  onChange={formik.handleChange}
                  placeholder="********"
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">Full Name</label>
                <input
                  className="w-full "
                  type="text"
                  id="hoTen"
                  name="hoTen"
                  onChange={formik.handleChange}
                  placeholder={user.hoTen}
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">Phone Number</label>
                <input
                  className="w-full "
                  type="text"
                  id="soDT"
                  name="soDT"
                  onChange={formik.handleChange}
                  placeholder="039965822"
                />
              </div>
              <div className={`${styles["form-group"]}`}>
                <label htmlFor="">Email</label>
                <input
                  className="w-full "
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  placeholder={user.email}
                />
              </div>
              <div className="text-center md:text-center lg:text-left">
                <button
                  type="submit"
                  className={`md:py-4 md:px-16 py-4 px-20 lg:py-4 lg:px-12 ${styles["profile__btn"]}`}
                >
                  Save
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
