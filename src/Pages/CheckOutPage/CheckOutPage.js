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

export default function CheckOutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listCoursesRegister = useSelector((state) => {
    return state.coursesSlice.coursesListRegister;
  });
  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  const handleRenderCoursesCheckOut = () => {
    return listCoursesRegister.map((course) => {
      return (
        <div
          className={`shadow-2xl rounded-md col-span-2 ${styles["check__register--left"]}`}
        >
          <div
            className={`flex items-center justify-between p-[30px] ${styles["check__register--item"]}`}
          >
            <div className="flex items-center ">
              <img
                className="w-[114px]
              h-20 rounded-sm mr-4"
                src={course.hinhAnh}
                alt=""
              />
              <div className={`flex-grow ${styles["check__register--text"]}`}>
                <h2>
                  Course : &nbsp;
                  {course.tenKhoaHoc.length > 30
                    ? course.tenKhoaHoc.slice(0, 30) + "..."
                    : course.tenKhoaHoc}
                </h2>
                <h3>By : &nbsp;{course.nguoiTao.hoTen} </h3>
                <div>
                  <h2>{course.luotXem} &nbsp;Lectures</h2>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="mr-2 line-through">$399</h3>
                <h4
                  className={`text-[24px] font-bold  ${styles["check__register--text-price"]}`}
                >
                  $599
                </h4>
              </div>
              <button
                onClick={() => {
                  handleDeleteCoursesListRegister(course);
                }}
                className={`${styles["check__register--text-btn"]} text-lg font-semibold hover:opacity-70`}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  const handleDeleteCoursesListRegister = (course) => {
    postCancelCourses({
      maKhoaHoc: course.maKhoaHoc,
      taiKhoan: user.taiKhoan,
    })
      .then((res) => {
        dispatch(setDeleteCoursesListRegister(course));
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data,
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: err.response.data,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };
  const handleCheckOutFinish = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Payment Success",
      showConfirmButton: false,
      timer: 1000,
    });
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  return (
    <div className={`${styles["checkout__pages"]}`}>
      <div>
        <div
          className={`${styles["checkout__pages-heading"]} relative py-[60px] md:py-[60px] lg:py-[100px]`}
        >
          <div className="text-center">
            <h2 className="text-[30px] md:text-[30px] lg:text-[60px] font-bold">
              Checkout
            </h2>
            <p className="text-[15px] md:text-[15px] lg:text-base">
              Courses
              <FontAwesomeIcon className="mx-3" icon={faCircleRadiation} />
              Checkout
            </p>
          </div>
          <img
            className={`${styles["checkout__pages-img1"]} animate-pulse`}
            src={bgTree}
            alt=""
          />
          <img
            className={`${styles["checkout__pages-img2"]} animate-bounce`}
            src={bgBook}
            alt=""
          />
        </div>
        <div className="py-[60px] md:py-[60px] lg:py-[100px] px-8">
          <div className="px-3">
            <h2 className="font-medium mb-4">{`${listCoursesRegister.length} courses in your cart`}</h2>
          </div>
          <div className="px-3 grid grid-cols-3 gap-5">
            {handleRenderCoursesCheckOut()}
            <div className="col-span-1">
              <div className="p-[30px] shadow-xl">
                <div className="items-center justify-between flex">
                  <h2 className="text-base md:text-[22px] lg:text-[25px] font-bold">
                    Total
                  </h2>
                  <span className="text-base md:text-[22px] lg:text-[25px] text-teal-600 font-bold">
                    $1000
                  </span>
                </div>
                <h3 className="text-right text-base mt-3">$1500</h3>
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleCheckOutFinish}
                    className={`text-[15px] md:text-lg lg:text-lg px-[15px] py-[9px] md:px-[15px] md:py-[9px] lg:px-10 lg:py-4 ${styles["check__register--right-btn"]}`}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
