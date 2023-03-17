import { base_URL } from "./configURL";

export let postLogin = (data) => {
  return base_URL.post("/api/QuanLyNguoiDung/DangNhap", data);
};
export let postRegister = (data) => {
  return base_URL.post("/api/QuanLyNguoiDung/DangKy", data);
};
export let postUserInfor = (data) => {
  return base_URL.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", data);
};
export let putUserInfor = (data) => {
  return base_URL.put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);
};
