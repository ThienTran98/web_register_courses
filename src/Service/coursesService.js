import { base_URL } from "./configURL";

export const getCoursesList = () => {
  return base_URL.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`);
};
export const getDetailCourses = (id) => {
  return base_URL.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`);
};

export const getCourseListPagination = (currentPage) => {
  return base_URL.get(
    `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${currentPage}&pageSize=12&MaNhom=GP01`
  );
};
export const postRegisterCourses = (data) => {
  return base_URL.post("/api/QuanLyKhoaHoc/DangKyKhoaHoc", data);
};
export const postCancelCourses = (data) => {
  return base_URL.post("/api/QuanLyKhoaHoc/HuyGhiDanh", data);
};
