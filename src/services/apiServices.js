import axiosConfig from "./axiosConfig";

const url = {
  CITY: "/db/city",
  POINT: "/db/point",
};

// export const appApiService = {
//     getCities: () => axiosConfig
//         .get(url.CITY)
//         .then((res) => res.data),
// };

// export const appApiService = {
//     getCities: () => axiosConfig.get(url.CITY)
// };

export default {
  getCities() {
    return axiosConfig.get(url.CITY);
  },
  getPoints() {
    return axiosConfig.get(url.POINT);
  },
};
