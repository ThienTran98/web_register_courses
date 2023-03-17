import { useFormik } from "formik";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./registerPage.module.scss";
import * as Yup from "yup";

import { postRegister } from "../../Service/userService";
import Swal from "sweetalert2";

export default function RegisterPage() {
  const regexNumber = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/;
  const regexName = new RegExp("[A-zÀ-ÿ]");
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9_])/;

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      email: "",
      maNhom: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string()
        .min(4, "Please enter at least 4 characters")
        .required("Please enter this field! "),
      matKhau: Yup.string()
        .min(8, "Please enter at least 8 characters")
        .matches(
          regexPassword,
          "Password must contain at least one number and both uppercase and lowercase letters."
        )
        .required("Please enter this field! "),
      hoTen: Yup.string()
        .matches(regexName, "This field must be letter")
        .required("Please enter this field! "),
      soDT: Yup.string()
        .matches(regexNumber, "This field must be numeric")
        .required("Please enter this field! "),
      email: Yup.string()
        .matches(regexEmail, "Invalid Email, please try again!")
        .required("Please enter this field! "),
      maNhom: Yup.string().required("Please select this field! "),
    }),
    onSubmit: (values) => {
      postRegister(values)
        .then((res) => {
          console.log(res);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Đăng ký thành công",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            navigate("/login");
          }, 1000);
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${err.response.data} xin vui lòng thử lại`,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  });
  return (
    //
    <section className=" bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md">
          <div className="px-8 space-y-4 md:space-y-6 py-4">
            <h1 className={`text-2xl font-bold text-gray-900`}>
              Create new account
            </h1>
            <form
              onSubmit={formik.handleSubmit}
              className={`${styles["mt0"]}`}
              action="#"
            >
              <div className={`mt-1`}>
                <label
                  htmlFor="taiKhoan"
                  className="block text-sm font-medium text-gray-900"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="taiKhoan"
                  id="taiKhoan"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.taiKhoan}
                  className="bg-gray-50 border outline-0 text-gray-900 sm:text-sm rounded-lg focus:border-2 hover:border-green-500 block w-full p-2 "
                  placeholder="admin005"
                />
                {formik.errors.taiKhoan && (
                  <h2 className="text-red-500 text-sm">
                    {formik.errors.taiKhoan}
                  </h2>
                )}
              </div>
              <div className={`mt-1`}>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="bg-gray-50 border outline-0 text-gray-900 sm:text-sm rounded-lg focus:border-2 hover:border-green-500 block w-full  p-2 "
                  placeholder="name@company.com"
                />
                {formik.errors.email && (
                  <h2 className="text-red-500 text-sm">
                    {formik.errors.email}
                  </h2>
                )}
              </div>
              <div className={`mt-1`}>
                <label
                  htmlFor="matKhau"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="matKhau"
                  id="matKhau"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.matKhau}
                  placeholder="••••••••"
                  className="bg-gray-50 border outline-0  text-gray-900 sm:text-sm rounded-lg focus:border-2 hover:border-green-500 block w-full  p-2 "
                />
                {formik.errors.matKhau && (
                  <h2 className="text-red-500 text-sm">
                    {formik.errors.matKhau}
                  </h2>
                )}
              </div>
              <div className={`mt-1`}>
                <label
                  htmlFor="hoTen"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Full Name
                </label>
                <input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.hoTen}
                  type="text"
                  name="hoTen"
                  id="hoTen"
                  placeholder="Lê Thị Thùy Linh"
                  className="bg-gray-50 border outline-0 text-gray-900 sm:text-sm rounded-lg focus:border-2 hover:border-green-500 block w-full  p-2 "
                />
                {formik.errors.hoTen && (
                  <h2 className="text-red-500 text-sm">
                    {formik.errors.hoTen}
                  </h2>
                )}
              </div>
              <div className={`mt-1`}>
                <label
                  htmlFor="soDT"
                  className="block mb-1 text-sm font-medium text-gray-900 "
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  name="soDT"
                  id="soDT"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.soDT}
                  placeholder="0357456897"
                  className="bg-gray-50 border outline-0  text-gray-900 text-sm rounded-lg focus:border-2 hover:border-green-500 block w-full  p-2 "
                />
                {formik.errors.soDT && (
                  <h2 className="text-red-500 text-sm">{formik.errors.soDT}</h2>
                )}
              </div>
              <div className={`mt-1`}>
                <div>
                  <label
                    htmlFor="maNhom"
                    className="block mb-1 text-sm font-medium text-gray-900 "
                  >
                    ID Group
                  </label>
                  <select
                    id="maNhom"
                    name="maNhom"
                    onChange={formik.handleChange}
                    value={formik.values.maNhom}
                    className="bg-gray-50 border  outline-0 text-gray-900 text-sm rounded-lg focus:border-2 hover:border-green-500 block w-full  p-2 "
                  >
                    <option defaultValue>Choose a Group</option>
                    <option value="GP01">GP01</option>
                    <option value="GP02">GP02</option>
                    <option value="GP03">GP03</option>
                    <option value="GP04">GP04</option>
                    <option value="GP05">GP05</option>
                    <option value="GP06">GP06</option>
                    <option value="GP07">GP07</option>
                    <option value="GP07">GP08</option>
                    <option value="GP07">GP09</option>
                    <option value="GP07">GP10</option>
                  </select>
                  {formik.errors.maNhom && (
                    <h2 className="text-red-500 text-sm">
                      {formik.errors.maNhom}
                    </h2>
                  )}
                </div>
              </div>
              <div className={`mt-3 flex items-start`}>
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    required
                    className="w-4 h-4 border  rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 ">
                    I accept the
                    <a
                      className="font-medium text-primary-600 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className={`mt-3 w-full text-white bg-teal-500 hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
              >
                Create an account
              </button>
              <p className={`mt-3 text-sm font-light text-gray-500`}>
                Already have an account?
                <NavLink
                  to="/login"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Login here
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
