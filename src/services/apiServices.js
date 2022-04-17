import axiosConfig from "./axiosConfig";

const url = {
  CITY: "/db/city",
  POINT: "/db/point",
  CATEGORY: "/db/category",
  CAR: "/db/car",
};

export default {
  getCities() {
    return axiosConfig.get(url.CITY);
  },
  getPoints() {
    return axiosConfig.get(url.POINT);
  },
  getCategories() {
    return axiosConfig.get(url.CATEGORY);
  },
  // getCars() {
  //   return axiosConfig.get(url.CAR);
  // },
  getCars(params = {}) {
    return axiosConfig.get(url.CAR, {
      params,
    });
  },
};