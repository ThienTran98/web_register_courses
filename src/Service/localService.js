const USER_LOCAL = "USER_LOCAL";
const COURSES_LOCAL_WISHLIST = "COURSES_LOCAL_WISHLIST";
const COURSES_LIST_LOCAL_ADD_TO_CART = "COURSES_LIST_LOCAL_ADD_TO_CART";
const COURSES_LIST_REGISTER = "COURSES_LIST_REGISTER";
// đặt 1 key dung chung để setItem
export const userLocalStorage = {
  set: (userData) => {
    // convert dữ liệu từ Ob sang json
    let userJSON = JSON.stringify(userData);
    // lưu xuống local
    localStorage.setItem(USER_LOCAL, userJSON);
  },
  get: () => {
    //lấy dữ liệu lên
    let userJSON = localStorage.getItem(USER_LOCAL);
    if (userJSON) {
      return JSON.parse(userJSON);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem(USER_LOCAL);
  },
};

///
export const coursesListWishListLocalStorage = {
  set: (coursesData) => {
    // convert dữ liệu từ Ob sang json
    let coursesListWishListJSON = JSON.stringify(coursesData);
    // lưu xuống local
    localStorage.setItem(COURSES_LOCAL_WISHLIST, coursesListWishListJSON);
  },
  get: () => {
    //lấy dữ liệu lên
    let coursesListWishList = localStorage.getItem(COURSES_LOCAL_WISHLIST);
    if (coursesListWishList) {
      return JSON.parse(coursesListWishList);
    } else {
      return [];
    }
  },
  remove: () => {
    localStorage.removeItem(COURSES_LOCAL_WISHLIST);
  },
};

//

export const coursesListAddToCartStorage = {
  set: (coursesData) => {
    // convert dữ liệu từ Ob sang json
    let coursesListAddToCartJSON = JSON.stringify(coursesData);
    // lưu xuống local
    localStorage.setItem(
      COURSES_LIST_LOCAL_ADD_TO_CART,
      coursesListAddToCartJSON
    );
  },
  get: () => {
    //lấy dữ liệu lên
    let coursesListAddToCartJSON = localStorage.getItem(
      COURSES_LIST_LOCAL_ADD_TO_CART
    );
    if (coursesListAddToCartJSON) {
      return JSON.parse(coursesListAddToCartJSON);
    } else {
      return null;
    }
  },
  remove: () => {
    localStorage.removeItem(COURSES_LIST_LOCAL_ADD_TO_CART);
  },
};

export const coursesListRegisterStorage = {
  set: (coursesData) => {
    // convert dữ liệu từ Ob sang json
    let coursesListRegisterJSON = JSON.stringify(coursesData);
    // lưu xuống local
    localStorage.setItem(COURSES_LIST_REGISTER, coursesListRegisterJSON);
  },
  get: () => {
    //lấy dữ liệu lên
    let coursesListRegisterJSON = localStorage.getItem(COURSES_LIST_REGISTER);
    if (coursesListRegisterJSON) {
      return JSON.parse(coursesListRegisterJSON);
    } else {
      return [];
    }
  },
  remove: () => {
    localStorage.removeItem(COURSES_LIST_REGISTER);
  },
};
