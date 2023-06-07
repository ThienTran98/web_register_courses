import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faChartSimple,
  faCheck,
  faGraduationCap,
  faKey,
  faPlay,
  faStore,
  faTelevision,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { setRegisterCoursesList } from "../../redux-toolkit/coursesSlice";
import {
  getDetailCourses,
  postRegisterCourses,
} from "../../Service/coursesService";
import styles from "./DetailPage.module.scss";

import ImageError from "../../asset/img/icvgops1gqcosgv3dxde.jpg";

export default function DetailPage() {
  const param = useParams();
  const [show, setShow] = useState(false);
  const [detail, setDetail] = useState(null);
  const [fallbackImage, setFallbackImage] = useState("");

  const navigation = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.userSlice.user;
  });
  useEffect(() => {
    getDetailCourses(param.id)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {});
  }, [param.id]);
  useEffect(() => {
    document.title = "CourseList/Detail-Course";
  }, []);
  const handleClickButton = (e) => {
    e.preventDefault();
  };
  const handleRegisterCourses = () => {
    // ghi danh và tạo ra mảng để push khóa học đã ghi danh là tham số detail
    if (user) {
      postRegisterCourses({
        maKhoaHoc: detail?.maKhoaHoc,
        taiKhoan: user.taiKhoan,
      })
        .then((res) => {
          dispatch(setRegisterCoursesList(detail));
          Swal.fire({
            confirmButtonColor: "#49ae88",
            color: "#3098b1",
            title: "Register Course Successfully",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        })
        .catch((error) => {
          Swal.fire({
            confirmButtonColor: "#49ae88",
            title: "Already signed up for this course",
            color: "#3098b1",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        });
    } else {
      navigation("/login");
    }
  };
  const handleErrorImage = () => {
    setFallbackImage(ImageError);
  };
  return (
    <div>
      <div className="bg-gray-200">
        <div className="px-8 p-12 text-teal-500">
          <h2 className="text-3xl mb-2">COURSE INFORMATION</h2>
          <p className="font-light">GO FORWARD AND DON'T WAIT !!!</p>
        </div>
      </div>
      <div className="px-4 py-6 bg-gray-100">
        <div className="md:grid md:grid-cols-12 lg:grid lg:grid-cols-12 py-5">
          <div className="lg:col-span-8 md:col-span-7 md:px-4 lg:px-4">
            <h2 className="text-3xl mb-2 font-bold tracking-widest">
              {detail?.tenKhoaHoc}
            </h2>
            <ul className="mb-4 lg:flex items-center ">
              <li className="mr-4 text-teal-400 lg:bg-teal-200 lg:px-4 lg:py-1">
                <NavLink className="no-underline hover:no-underline hover:text-white">
                  {detail?.danhMucKhoaHoc.maDanhMucKhoahoc}
                </NavLink>
              </li>
              <li className="mr-4 text-gray-400">
                Student:
                <span className="text-teal-500">{detail?.soLuongHocVien}</span>
              </li>
              <li className=" text-gray-400">
                Start: <span className="text-teal-500">{detail?.ngayTao}</span>
              </li>
            </ul>
            <div className="mb-4 lg:flex items-center justify-between">
              <div className="flex items-center md:mb-3 lg:mb-0 mb-3 ">
                <img
                  alt=""
                  className="w-10 h-10 mr-4 rounded-full ring-2 ring-offset-4 ring-violet-400 ring-offset-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
                <div className="ml-1">
                  <h4 className="mb-1">Lecturer</h4>
                  <h3 className="text-teal-500">{detail?.nguoiTao.hoTen}</h3>
                </div>
              </div>
              <div className="flex items-center md:mb-3 lg:mb-0 mt-3">
                <div className="text-3xl mr-4 md:mr-4 lg:mr-2 text-teal-500">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div>
                  <h4 className=" mb-1 opacity-90">Field</h4>
                  <h3 className="text-teal-500">
                    {detail?.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                  </h3>
                </div>
              </div>
              <div className="mt-3 md:mt-0 lg:mt-0">
                <h2>
                  Access times:
                  <span className="text-teal-500">{detail?.luotXem}</span> views
                </h2>
              </div>
            </div>
            <div className="text-justify pb-6 border-b-2">
              <p>
                To create contemporary, responsive user interfaces for the
                online, React.js is the most well-known JavaScript toolkit you
                can use and learn today. This course will teach you React
                in-depth, starting with the fundamentals. You'll take a
                step-by-step look at all the key fundamentals, find many
                examples, and be introduced to advanced ideas. You'll learn all
                the theory, a ton of examples, tutorials, demos, exercises, and
                exercises in addition to a wealth of crucial information that is
                usually missed by other sources - After all, this course is
                excellent for a reason! And if you're just here for the
                advertisements or "algorithms" and don't even know why you want
                to learn React, don't worry: ReactJS is a crucial technology for
                web developers, and in this course I'll also explain WHY that
                matters!
              </p>
            </div>
            <div className="grid grid-cols-12 py-4">
              <h1 className="col-span-12 mt-0">What you will learn</h1>
              <div className="col-span-6">
                <ul className="leading-8">
                  <li className="">
                    <FontAwesomeIcon
                      className="text-xl text-teal-500 mr-2"
                      icon={faCheck}
                    />
                    Create web apps that are effective, quick, user-friendly,
                    and responsive.
                  </li>
                  <li className="">
                    <FontAwesomeIcon
                      className="text-xl text-teal-500 mr-2"
                      icon={faCheck}
                    />
                    Apply for a well-paying job or work as a freelancer in one
                    of the most sought-after professions in web development
                    right now.
                  </li>
                  <li className="">
                    <FontAwesomeIcon
                      className="text-xl text-teal-500 mr-2"
                      icon={faCheck}
                    />
                    Deliver a great user experience by leveraging the power of
                    JavaScript with ease
                  </li>
                  <li className="">
                    <FontAwesomeIcon
                      className="text-xl text-teal-500 mr-2"
                      icon={faCheck}
                    />
                    Learn all about React Hooks and React Components
                  </li>
                </ul>
              </div>
              <div className="col-span-6">
                <ul className="leading-8">
                  <li className="">
                    <FontAwesomeIcon
                      className="text-xl text-teal-500 mr-2"
                      icon={faCheck}
                    />
                    Fluent in React support toolchain, including Javascript NPM,
                    Webpack, Babel and ES6/ES2015 syntax
                  </li>
                  <li className="">
                    <FontAwesomeIcon
                      className="text-xl text-teal-500 mr-2"
                      icon={faCheck}
                    />
                    Recognize the potential of creating modular components
                  </li>
                  <li className="">
                    <FontAwesomeIcon
                      className="text-xl text-teal-500 mr-2"
                      icon={faCheck}
                    />
                    Be the engineer that explains how Redux works, because you
                    know the fundamentals so well
                  </li>
                  <li className="">
                    <FontAwesomeIcon
                      className="text-xl text-teal-500 mr-2"
                      icon={faCheck}
                    />
                    Learn the fundamental principles of Redux application
                    structure.
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-2xl font-bold tracking-wide pb-4">
              Course content
            </h2>
            <div className="py-4">
              <div className="bg-slate-200 py-3 px-2 md:p-0 flex items-center md:h-24 ">
                <h3 className="font-medium text-xl flex items-center">
                  SECTION 1: INTRODUCTION
                  <span className="text-sm p-2 ml-2 hidden lg:block text-teal-500 border-teal-500 border-2 cursor-pointer hover:text-white delay-150 duration-200 hover:bg-teal-500 hover:scale-75 transition-all hover:ease-linear">
                    PREVIEW
                  </span>
                </h3>
              </div>
              <div>
                <h3 className="py-3 text-lg">Lesson</h3>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>React Components Concepts</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>Setting up the environment for Windows</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>Create React Apps - React-Scripts</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>
                      An immediate comment on quotes for string interpolation
                    </h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="bg-slate-200 py-3 px-2 md:p-0 flex items-center">
                <h3 className="font-medium text-xl flex items-center md:h-24 ">
                  SECTION 2: BASIC KNOWLEDGE
                  <span className="text-sm p-2 ml-2 hidden lg:block text-teal-500 border-teal-500 border-2 cursor-pointer hover:text-white delay-150 duration-200 hover:bg-teal-500 hover:scale-75 transition-all hover:ease-linear">
                    PREVIEW
                  </span>
                </h3>
              </div>
              <div>
                <h3 className="py-3 text-lg">Lesson</h3>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>components of the home page and directory</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>Course Guide + Github Link</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>E-commerce homepage + SASS setup</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>CSS and SCSS files</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>React 17: Update Packages + Latest React Version</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <div className="bg-slate-200 py-3 px-2 md:p-0 flex items-center md:h-24 ">
                <h3 className="font-medium text-xl flex items-center">
                  SECTION 3: KNOWLEDGE OF THE DEPARTMENT
                  <span className="text-sm p-2 ml-2 hidden lg:block text-teal-500 border-teal-500 border-2 cursor-pointer hover:text-white delay-150 duration-200 hover:bg-teal-500 hover:scale-75 transition-all hover:ease-linear">
                    PREVIEW
                  </span>
                </h3>
              </div>
              <div>
                <h3 className="py-3 text-lg">Lesson</h3>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>Connect and mapStateToProps</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>Directory status into Redux</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
                <div className="flex items-center justify-between px-2 py-3 border-teal-500 border-2 border-t-transparent">
                  <div className="flex items-center">
                    <div className="mr-2 text-teal-500">
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <h2>Components Collection Overview</h2>
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon className="text-teal-500" icon={faClock} />
                    <h2 className="ml-2">14:35</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-5 md:px-2 lg:px-2">
            <div className="pb-3 shadow-xl">
              <div>
                <img
                  src={fallbackImage || detail?.hinhAnh}
                  className="w-full h-72 object-cover"
                  alt=""
                  onError={handleErrorImage}
                />
              </div>
              <div className="mt-3 flex items-center lg:justify-between md:justify-center lg:px-2">
                <h3 className="text-teal-500 font-bold text-2xl ">
                  $399
                  <span className="text-gray-500 font-medium ml-2 line-through">
                    $599
                  </span>
                </h3>
                <h4 className="hidden lg:block">Deals for every day</h4>
              </div>
              <div className="mt-3 flex items-center justify-between  sm:px-1 md:px-1 lg:px-2">
                <h3>
                  <FontAwesomeIcon
                    className="text-teal-500 mr-2"
                    icon={faTelevision}
                  />
                  OffLine Classes:
                </h3>
                <h4>No</h4>
              </div>

              <div className="mt-3 flex items-center justify-between sm:px-1 md:px-1 lg:px-2">
                <h3>
                  <FontAwesomeIcon
                    className="text-teal-500 mr-2"
                    icon={faChartSimple}
                  />
                  Category:
                </h3>
                <h4>Development</h4>
              </div>
              <div className="mt-3 flex items-center justify-between  sm:px-1 md:px-1 lg:px-2">
                <h3>
                  <FontAwesomeIcon
                    className="text-teal-500 mr-2"
                    icon={faClock}
                  />
                  Time:
                </h3>
                <h4>24 Hour</h4>
              </div>
              <div className="mt-3 lg:flex items-center justify-between hidden sm:px-1 md:px-1 lg:px-2">
                <h3>
                  <FontAwesomeIcon
                    className="text-teal-500 mr-2"
                    icon={faStore}
                  />
                  Source:
                </h3>
                <h4>Not update</h4>
              </div>
              <div className="mt-3 flex items-center justify-between sm:px-1 md:px-1 lg:px-2">
                <h3>
                  <FontAwesomeIcon
                    className="text-teal-500 mr-2"
                    icon={faUsers}
                  />
                  Student:
                </h3>
                <h4>20</h4>
              </div>
              <div className="mt-3 flex items-center justify-between sm:px-1 md:px-1 lg:px-2">
                <h3>
                  <FontAwesomeIcon
                    className="text-teal-500 mr-2"
                    icon={faVideo}
                  />
                  Video:
                </h3>
                <h4>28</h4>
              </div>
              <div className="mt-3 hidden  lg:flex items-center justify-between md:px-1 sm:px-1 lg:px-2">
                <h3>
                  <FontAwesomeIcon
                    className="text-teal-500 mr-2"
                    icon={faKey}
                  />
                  Access Time:
                </h3>
                <h4>Forever</h4>
              </div>
              <div className="mt-3">
                <h2
                  onClick={() => {
                    setShow(!show);
                  }}
                  className="text-teal-600 text-xl underline text-center cursor-pointer hover:opacity-80"
                >
                  Discount code
                </h2>
                {show ? (
                  <form className="flex px-3 justify-center mt-3" action="">
                    <input
                      className="lg:py-3 lg:px-2 md:py-2 md:px-1 py-2 px-1 flex items-center outline-transparent"
                      type="text"
                      placeholder="Enter discount code"
                    />
                    <button
                      onClick={handleClickButton}
                      className={`${styles["coupon"]} lg:px-2 lg:py-3 md:py-2 md:px-1 py-2 px-1 focus:outline-transparent hover:text-white`}
                    >
                      Apply
                    </button>
                  </form>
                ) : null}
              </div>
              <div className="mt-3 flex items-center justify-center">
                <button
                  onClick={handleRegisterCourses}
                  className={`${styles["coupon"]} px-14 py-3  text-xl focus:outline-transparent text-white  transition-all hover:opacity-80`}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
