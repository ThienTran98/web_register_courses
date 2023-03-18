import React, { useEffect, useState } from "react";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CoursesItem.module.scss";
import { getCoursesList } from "./../../Service/coursesService";
import ImageCourse from "../../asset/img/icvgops1gqcosgv3dxde.jpg";
import { NavLink } from "react-router-dom";

export default function CoursesItem() {
  const [listCourses, setListCourses] = useState([]);

  useEffect(() => {
    getCoursesList()
      .then((res) => {
        setListCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderItemCourses = () => {
    return listCourses.slice(0, 4).map((course) => {
      return (
        <div key={course.maKhoaHoc} className="px-3 md:px-0 lg:px-0">
          <div
            className={`w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow relative ${styles["courses_item"]} overflow-hidden`}
          >
            <a href="#">
              <img
                className="w-full h-60 object-cover"
                src={course.hinhAnh === null ? ImageCourse : course.hinhAnh}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 mt-2 min-h-[56px]">
                  Khóa Học :&nbsp;
                  {course.tenKhoaHoc.length <= 40
                    ? course.tenKhoaHoc
                    : course.tenKhoaHoc.slice(0, 40) + "..."}
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
                Người Hướng Dẫn :&nbsp;
                {course.nguoiTao.hoTen === null
                  ? "Ẩn danh"
                  : course.nguoiTao.hoTen}
              </h3>
              <div className="flex items-center mt-2 font-medium">
                Giá : &nbsp;
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
                    className={`text-2xl flex items-center justify-center ${styles["heart__icon"]}`}
                    icon={faHeart}
                  />
                </h4>
                <div
                  className={`flex items-center justify-between ${styles["item__courses-footer"]}`}
                >
                  <button className={`${styles["courses__btn"]}`}>
                    Add To Cart
                  </button>
                  <button className={`${styles["courses__btn"]}`}>
                    <NavLink
                      className="block"
                      to={`/detail/${course.maKhoaHoc}`}
                    >
                      Detail
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return <>{renderItemCourses()}</>;
}
