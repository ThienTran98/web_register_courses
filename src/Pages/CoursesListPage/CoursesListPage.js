import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { getCourseListPagination } from "../../Service/coursesService";
import CoursesItem from "../../Component/CoursesItem/CoursesItem";
export default function CoursesListPage() {
  const [listCourses, setListCourses] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizeItem, setSizeItem] = useState(10);

  const onChange = (pageNumber, pageSize) => {
    setCurrentPage(pageNumber);
    setSizeItem(pageSize);
  };

  useEffect(() => {
    document.title = "CoursesListPage";
  }, []);
  useEffect(() => {
    getCourseListPagination(currentPage, sizeItem)
      .then((res) => {
        setListCourses(res.data);
      })
      .catch((err) => {});
  }, [currentPage, sizeItem]);
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
