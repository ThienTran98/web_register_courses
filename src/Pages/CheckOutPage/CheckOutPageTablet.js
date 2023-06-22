import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CheckOutPage.module.scss";
import bgBook from "../../asset/img/footer-shape-2 (1).png";
import bgTree from "../../asset/img/courses-shape.png";
import { faCircleRadiation } from "@fortawesome/free-solid-svg-icons";
import { setDeleteCoursesListRegister } from "../../redux-toolkit/coursesSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { postCancelCourses } from "../../Service/coursesService";
import { coursesListRegisterStorage } from "../../Service/localService";
import { useState } from "react";
import image from "../../asset/img/icvgops1gqcosgv3dxde.jpg";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useTranslation } from "react-i18next";

export default function CheckOutPageTablet() {
  const [fallbackImage, setFallbackImage] = useState("");
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("checkout");
  const currentLanguage = i18n.language;
  const listCoursesRegister = useSelector((state) => {
    return state.coursesSlice.coursesListRegister;
  });
  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  const handleErrorImage = () => {
    setFallbackImage(image);
  };
  const handleRenderCoursesCheckOut = () => {
    return listCoursesRegister.map((course, index) => {
      return (
        <div
          key={index}
          className={`shadow-2xl rounded-md col-span-2 ${styles["check__register--left"]} mb-4`}
        >
          <div
            className={`flex items-center justify-between p-[30px] ${styles["check__register--item"]}`}
          >
            <div className="flex items-center ">
              <img
                className="w-[114px]
              h-20 rounded-sm mr-4"
                src={fallbackImage || course.hinhAnh}
                alt=""
                onError={handleErrorImage}
              />
              <div className={`flex-grow ${styles["check__register--text"]}`}>
                <h2>
                  {t("checkout.Course")} &nbsp;
                  {course.tenKhoaHoc.length > 30
                    ? course.tenKhoaHoc.slice(0, 30) + "..."
                    : course.tenKhoaHoc}
                </h2>
                <h3>
                  {t("checkout.By")} &nbsp;{course.nguoiTao.hoTen}{" "}
                </h3>
                <div>
                  <h2>
                    {course.luotXem} &nbsp; {t("checkout.Lectures")}
                  </h2>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="mr-2 line-through">{course.giaHienTai}</h3>
                <h4
                  className={`text-[24px] font-bold  ${styles["check__register--text-price"]}`}
                >
                  {course.giaKhuyenMai}
                </h4>
              </div>
              <button
                onClick={() => {
                  handleDeleteCoursesListRegister(course);
                }}
                className={`${styles["check__register--text-btn"]} text-lg font-semibold hover:opacity-70`}
              >
                {t("checkout.Remove")}
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  // hủy ghi khóa học trong danh sách
  const handleDeleteCoursesListRegister = (course) => {
    postCancelCourses({
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: user.taiKhoan,
    })
      .then((res) => {
        dispatch(setDeleteCoursesListRegister(course));
        if (currentLanguage === "en") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Unsubscribe successfully !",
            showConfirmButton: false,
            timer: 1000,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Hủy đăng ký khóa học thành công !",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((err) => {
        if (currentLanguage === "en") {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "The course has actually been canceled !",
            showConfirmButton: false,
            timer: 1000,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Khóa học đã thực sự bị hủy bỏ !",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };
  // thanh toán thành công
  const handleCheckOutFinish = () => {
    if (currentLanguage === "en") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Payment Success !",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thanh toán thành công !",
        showConfirmButton: false,
        timer: 1000,
      });
    }
    setTimeout(() => {
      coursesListRegisterStorage.remove();
      window.location.reload();
    }, 1500);
  };
  // render cart or k có sản phẩm
  const handleRenderCartOrEmpty = () => {
    if (listCoursesRegister.length === 0) {
      return (
        <div className="text-[32px] text-teal-500 font-bold py-[60px] md:py-[60px] lg:py-[100px] text-center">
          <h2>{t("checkout.Empty")}</h2>
        </div>
      );
    } else {
      return (
        <div className="py-[60px] md:py-[60px] lg:py-[100px] px-0 lg:px-8 md:px-8">
          <div className="px-3">
            <h2 className="font-medium mb-4 text-xl">
              {currentLanguage === "en"
                ? `${listCoursesRegister.length} courses in your cart`
                : `${listCoursesRegister.length} khóa học trong giỏ hàng của bạn`}
            </h2>
          </div>
          <div className="px-3">
            {handleRenderCoursesCheckOut()}
            <div className="shadow-2xl">
              <div className="p-[30px] ">
                <div className="items-center justify-between flex">
                  <h2 className="text-base md:text-[22px] lg:text-[25px] font-bold">
                    {t("checkout.Total")}
                  </h2>
                  <span className="text-base md:text-[22px] lg:text-[25px] text-teal-600 font-bold">
                    $ {handlePriceDiscount()}
                  </span>
                </div>
                <h3 className="text-right text-base mt-3 line-through">
                  {handlePriceCurrent()}
                </h3>
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleCheckOutFinish}
                    className={`text-[15px] md:text-lg lg:text-lg px-[30px] py-[16px] md:px-[24px] md:py-[12px] ${styles["check__register--right-btn"]}`}
                  >
                    {t("checkout.Place Order")}
                  </button>
                  <span className="mx-3 text-red-600 font-bold">Or</span>
                  <PayPalScriptProvider
                    options={{
                      clientId:
                        "AS_jJfCvVZszUm3ucrsNmZ2OEgsCSoNSBVq26vsDT4ui0wR-N43HfU6pWOPzfrISjtM4OFPz_qP0xil2",
                    }}
                  >
                    <PayPalButtons
                      className="h-[60px] flex items-center"
                      style={{
                        color: "silver",
                        layout: "horizontal",
                        height: 52,
                        tagline: false,
                        shape: "rect",
                      }}
                    />
                  </PayPalScriptProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  const handlePriceCurrent = () => {
    return listCoursesRegister.reduce((acc, course) => {
      return acc + course.giaHienTai;
    }, 0);
  };
  const handlePriceDiscount = () => {
    return listCoursesRegister.reduce((acc, course) => {
      return acc + course.giaKhuyenMai;
    }, 0);
  };
  return (
    <div className={`${styles["checkout__pages"]}`}>
      <div>
        <div
          className={`${styles["checkout__pages-heading"]} relative py-[60px] md:py-[60px] lg:py-[100px]`}
        >
          <div className="text-center">
            <h2 className="text-[30px] md:text-[30px] lg:text-[60px] font-bold">
              {t("checkout.Checkout")}
            </h2>
            <p className="text-[15px] md:text-[15px] lg:text-base">
              {t("checkout.Courses")}
              <FontAwesomeIcon className="mx-3" icon={faCircleRadiation} />
              {t("checkout.Checkout")}
            </p>
          </div>
          <img
            className={`${styles["checkout__pages-img1"]} animate-pulse   hidden md:hidden lg:block`}
            src={bgTree}
            alt=""
          />
          <img
            className={`${styles["checkout__pages-img2"]} animate-bounce  hidden md:hidden lg:block`}
            src={bgBook}
            alt=""
          />
        </div>
        {handleRenderCartOrEmpty()}
      </div>
    </div>
  );
}
