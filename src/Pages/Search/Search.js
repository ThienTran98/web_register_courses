import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCoursesList } from "../../Service/coursesService";
import styles from "./Search.module.scss";
import documentImage from "../../asset/img/a60759ad1dabe909c46a817ecbf71878.png";
import CoursesItem from "../../Component/CoursesItem/CoursesItem";

export default function Search() {
  const params = useParams();
  const [listCourses, setListCourses] = useState([]);
  useEffect(() => {
    getCoursesList()
      .then((res) => {
        setListCourses(res.data);
      })
      .catch((err) => {});
  }, []);
  useEffect(() => {
    document.title = "Search";
  }, []);
  // danh sách khóa học tìm dc
  const listSearchCoursesValues = listCourses.filter((course) => {
    return course.tenKhoaHoc
      .toLowerCase()
      .includes(params.values.toLowerCase());
  });
  // khi không tìm thấy kết quả nào
  const renderNoResultSearch = () => {
    return (
      <div className={`py-[100px] px-10 ${styles["search"]} relative`}>
        <div
          className={`${styles["search__text-result"]} text-center md:text-center lg:text-left mt-10 md:mt-10 lg:mt-0`}
        >
          <h3>
            Keywords Search : <span>{params.values}</span>
          </h3>
        </div>
        <img className="w-24 h-24" src={documentImage} alt="" />
        <div className={`${styles["search__text--content"]} text-center`}>
          <h3>No result is found</h3>
          <h4>Try using more generic keywords</h4>
        </div>
      </div>
    );
  };

  // khi tìm thấy kết quả
  const renderResultSearch = () => {
    return listSearchCoursesValues.map((course, index) => {
      return <CoursesItem key={index} course={course} />;
    });
  };
  return (
    <>
      {listSearchCoursesValues.length === 0 ? (
        renderNoResultSearch()
      ) : (
        <div className="py-[60px] md:py-[60px] lg:py-[100px] px-0 md:px-8 lg:px-8">
          <div
            className={`${styles["search__text-result"]} text-center md:text-center lg:text-left mt-10 md:mt-10 lg:mt-0`}
          >
            <h3>
              Keywords Search : <span>{params.values}</span>
            </h3>
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {renderResultSearch()}
          </div>
        </div>
      )}
    </>
  );
}
