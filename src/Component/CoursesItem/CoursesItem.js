import React, { useEffect, useState } from "react";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CoursesItem.module.scss";
import {
  getCoursesList,
  postRegisterCourses,
} from "./../../Service/coursesService";
import ImageCourse from "../../asset/img/icvgops1gqcosgv3dxde.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourseAddToCart,
  setCoursesListWishList,
} from "../../redux-toolkit/coursesSlice";
import Swal from "sweetalert2";

import ImageError from "../../asset/img/icvgops1gqcosgv3dxde.jpg";
import ImageError1 from "../../asset/img/r1ysgphohxnzf1t5a4m0.jpg";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CoursesItem({ course }) {
  const [fallbackImage, setFallbackImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  const navigate = useNavigate();
  // dispatch courses wish list
  const handleDispatchCourseWishList = (course) => {
    if (user) {
      dispatch(setCoursesListWishList(course));
    } else {
      navigate("/login");
    }
  };

  // set ảnh lỗi sẽ loạt vào
  const handleErrorImage = () => {
    setFallbackImage(ImageError || ImageError1);
  };
  const handleAddToCart = () => {
    if (user) {
      postRegisterCourses({
        maKhoaHoc: course?.maKhoaHoc,
        taiKhoan: user.taiKhoan,
      })
        .then((res) => {
          dispatch(setCourseAddToCart(course));
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Added course to cart",
            showConfirmButton: false,
            timer: 1000,
          });
        })
        .catch((err) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "The course is already in your cart",
            showConfirmButton: false,
            timer: 1000,
          });
        });
    } else {
      navigate("/login");
    }
  };
  return (
    <div
      key={course?.maKhoaHoc}
      className="px-3 md:px-0 lg:px-0 lg:shadow-2xl md:shadow-2xl shadow-none rounded-lg "
    >
      <SkeletonTheme baseColor="#fff" highlightColor="#f3f3f3">
        {loading ? (
          <Skeleton className="lg:w-[352px] lg:h-[442px] md:w-[352px] md:h-[442px] w-[322px] h-[442px]" />
        ) : (
          <div
            className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow relative ${styles["courses_item"]} overflow-hidden`}
          >
            <a href="#">
              <img
                className="w-full h-60 object-cover"
                src={fallbackImage || course?.hinhAnh}
                alt="product image"
                onError={handleErrorImage}
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 mt-2 min-h-[56px]">
                  Course :&nbsp;
                  {course?.tenKhoaHoc.length <= 40
                    ? course?.tenKhoaHoc
                    : course?.tenKhoaHoc.slice(0, 40) + "..."}
                </h5>
              </a>

              <div className="flex items-center mt-2.5 mb-5">
                <FontAwesomeIcon
                  className="w-5 h-5 text-yellow-300"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 h-5 text-yellow-300"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 h-5 text-yellow-300"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 h-5 text-yellow-300"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="w-5 h-5 text-yellow-300"
                  icon={faStar}
                />
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3">
                  5.0
                </span>
              </div>
              <h3>
                Mentor :&nbsp;
                {course?.nguoiTao.hoTen === null
                  ? "Ẩn danh"
                  : course?.nguoiTao.hoTen}
              </h3>
              <div className="flex items-center mt-2 font-medium">
                Price : &nbsp;
                <span className="text-2xl font-normal text-gray-500 line-through mr-3">
                  $599
                </span>
                <span
                  className={`text-3xl  font-bold ${styles["item__courses-coupon"]}`}
                >
                  $399
                </span>
              </div>
            </div>
            <div
              className={`px-[19px] py-[30px] ${styles["item__courses-hover"]}`}
            >
              <div>
                <h2 className="font-bold text-base mb-5">
                  Linux Administration Bootcamp: Go from Beginner to Advanced
                </h2>
                <h3>
                  Hello. My name is Admin Cannon and I'm the author of Linux for
                  Beginners, the founder of the Linux Training
                </h3>
                <h4 className="flex items-center justify-between mt-4 mb-8">
                  Like :
                  <FontAwesomeIcon
                    onClick={() => {
                      handleDispatchCourseWishList(course);
                    }}
                    className={`text-2xl flex items-center justify-center ${styles["heart__icon"]}`}
                    icon={faHeart}
                  />
                </h4>
                <div
                  className={`flex items-center justify-between ${styles["item__courses-footer"]}`}
                >
                  <button
                    onClick={handleAddToCart}
                    className={`${styles["courses__btn"]}`}
                  >
                    Add To Cart
                  </button>
                  <button className={`${styles["courses__btn"]}`}>
                    <NavLink
                      className="block"
                      to={`/detail/${course?.maKhoaHoc}`}
                    >
                      Detail
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </SkeletonTheme>
    </div>
  );
}
