import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCourseListPagination } from "../../Service/coursesService";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./CoursesListPage.module.scss";
import ImageCourse from "../../asset/img/icvgops1gqcosgv3dxde.jpg";
import { setCoursesListWishList } from "../../redux-toolkit/coursesSlice";
import CoursesItem from "../../Component/CoursesItem/CoursesItem";
export default function CoursesListPage() {
  const [listCourses, setListCourses] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch;
  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  const onChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    getCourseListPagination(currentPage)
      .then((res) => {
        setListCourses(res.data);
      })
      .catch((err) => {});
  }, [currentPage]);
  const handleRenderListCourses = () => {
    return listCourses?.items.map((course, index) => {
      return <CoursesItem key={index} course={course} />;
    });
  };
  return (
    <div>
      <div className="bg-gray-50">
        <div className="py-10 px-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 ">
            {handleRenderListCourses()}
          </div>
          <div className="mt-4 text-center">
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              total={listCourses?.totalCount}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
