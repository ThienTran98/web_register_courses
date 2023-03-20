import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import {
  coursesListRegisterStorage,
  coursesListWishListLocalStorage,
} from "./../Service/localService";

const initialState = {
  coursesListWishList: [],
  coursesListRegister: coursesListRegisterStorage.get(),
};

const coursesSlice = createSlice({
  name: "coursesSlice",
  initialState,
  reducers: {
    // danh sách khóa học yêu thích
    setCoursesListWishList: (state, action) => {
      let newCoursesListWishList = [...state.coursesListWishList];

      const index = newCoursesListWishList.findIndex((course, index) => {
        return course.maKhoaHoc === action.payload.maKhoaHoc;
      });
      if (index == -1) {
        let newCourseWishList = { ...action.payload };
        newCoursesListWishList.push(newCourseWishList);
        message.success("Add From WishList");
        state.coursesListWishList = newCoursesListWishList;
      } else {
        newCoursesListWishList.splice(index, 1);
        message.success("Remove From WishList");
        state.coursesListWishList = newCoursesListWishList;
      }
    },
    setCoursesListAddToCart: (state, action) => {
      let newCoursesListAddToCart = [...state.coursesListAddToCart];

      const index = newCoursesListAddToCart.findIndex((course) => {
        return course.maKhoaHoc === action.payload.maKhoaHoc;
      });
      if (index == -1) {
        let newCourseAdd = { ...action.payload };
        newCoursesListAddToCart.push(newCourseAdd);
        message.success("Add To Cart Success");
        state.coursesListAddToCart = newCoursesListAddToCart;
      } else {
        newCoursesListAddToCart.splice(index, 1);
        message.success("Remove To Cart Success");
        state.coursesListAddToCart = newCoursesListAddToCart;
      }
    },
    // đăng kí ghi danh , danh sách khóa học
    setRegisterCoursesList: (state, action) => {
      let newCoursesListRegister = [...state.coursesListRegister];
      const index = newCoursesListRegister.findIndex((course) => {
        return course.maKhoaHoc === action.payload.maKhoaHoc;
      });
      if (index == -1) {
        let newCourseRegister = {
          ...action.payload,
          giaHienTai: 599,
          giaKhuyenMai: 399,
        };
        newCoursesListRegister.push(newCourseRegister);
        state.coursesListRegister = newCoursesListRegister;
      } else {
        newCoursesListRegister.splice(index, 1);
        state.coursesListRegister = newCoursesListRegister;
      }
      coursesListRegisterStorage.set(newCoursesListRegister);
    },
    // hủy ghi danh
    setDeleteCoursesListRegister: (state, action) => {
      let newCoursesListRegister = [...state.coursesListRegister];
      const index = newCoursesListRegister.findIndex((course) => {
        return course.maKhoaHoc === action.payload.maKhoaHoc;
      });
      if (index !== -1) {
        newCoursesListRegister.splice(index, 1);
        state.coursesListRegister = newCoursesListRegister;
      }
      coursesListRegisterStorage.set(newCoursesListRegister);
    },
  },
});

export const {
  setCoursesListWishList,
  setCoursesListAddToCart,
  setRegisterCoursesList,
  setDeleteCoursesListRegister,
} = coursesSlice.actions;

export default coursesSlice.reducer;
