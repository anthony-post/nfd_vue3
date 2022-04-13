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
  getCategory() {
    return axiosConfig.get(url.CATEGORY);
  },
  getCars() {
    return axiosConfig.get(url.CAR);
  },
  // запрос с параметром категории авто
  getFilteredCars(categoryToFilter) {
    return axiosConfig.get(url.CAR, {
      params: {
        categoryId: categoryToFilter,
      }
    });
  },
};
