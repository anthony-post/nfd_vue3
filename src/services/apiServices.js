import axiosConfig from "./axiosConfig";

const url = {
  CITY: "/db/city",
  POINT: "/db/point",
  CATEGORY: "/db/category",
  CAR: "/db/car",
  RATE: "/db/rate",
  ORDER: "db/order",
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
  getCars(params = {}) {
    return axiosConfig.get(url.CAR, {
      params,
    });
  },
  getRate() {
    return axiosConfig.get(url.RATE);
  },
  postOrder(data = {}) {
    return axiosConfig.post(url.ORDER, {
      ...data,
    });
  },
  putOrder(idOrder, data = {}) {
    return axiosConfig.put(url.ORDER + '/' + idOrder, {
      ...data,
    });
  },
  getOrder(idOrder) {
    return axiosConfig.get(url.ORDER + '/' + idOrder);
  },
};
