import { createStore } from "vuex";
import apiServices from "../services/apiServices";

const limit = 5; //лимит на количество загруженных авто в область видимости

export default createStore({
  state: {
    //API
    cityList: [],
    pointList: [],
    categoryList: [],
    cars: {},

    //USER SELECTED
    selectedCity: {},
    selectedPoint: {},
    checkedCategoryCars: "",
    selectedCar: {},
    selectedColor: "",
    dateFrom: 0,
    dateTo: 0,
    selectedRate: "",
  },
  mutations: {
    //API
    SET_CITYLIST_TO_STATE: (state, cityList) => {
      state.cityList = cityList.data.data;
    },
    SET_POINTLIST_TO_STATE: (state, pointList) => {
      state.pointList = pointList.data.data;
    },

    //категории
    SET_CATEGORYLIST_TO_STATE: (state, categories) => {
      state.categoryList = categories;

      state.cars["no-filter"] = {
        value: [],
        page: 0,
      };

      categories.forEach((category) => {
        state.cars[category.id] = {
          value: [],
          page: 0,
        };
      });
    },

    //авто
    SET_CARS_DATA: (state, { carsData, categoryId }) => {
      if (!categoryId) {
        const carsAllCategory = state.cars["no-filter"];

        carsAllCategory.value.push(...carsData.data.data);
        carsAllCategory.page++;
      } else {
        const carsByCategory = state.cars[categoryId];

        carsByCategory.value.push(...carsData.data.data);
        carsByCategory.page++;
      }
    },

    //CITY
    SET_SELECTEDCITY(state, selectedCity) {
      state.selectedCity = selectedCity;
    },
    RESET_SELECTEDCITY(state) {
      state.selectedCity = {};
    },
    //POINT
    SET_SELECTEDPOINT(state, selectedPoint) {
      state.selectedPoint = selectedPoint;
    },
    RESET_SELECTEDPOINT(state) {
      state.selectedPoint = {};
    },
    //CATEGORY CAR
    SET_CHECKEDCATEGORYCAR(state, checkedCategoryCars) {
      state.checkedCategoryCars = checkedCategoryCars;
    },
    RESET_CHECKEDCATEGORYCAR(state) {
      state.checkedCategoryCars = "";
    },
    //CAR
    SET_SELECTEDCAR(state, selectedCar) {
      state.selectedCar = selectedCar;
    },
    RESET_SELECTEDCAR(state) {
      state.selectedCar = {};
    },
  },
  actions: {
    //API
    GET_CITYLIST_FROM_API({ commit }) {
      apiServices
        .getCities()
        .then((cityList) => {
          commit("SET_CITYLIST_TO_STATE", cityList);
          return cityList;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_POINTLIST_FROM_API({ commit }) {
      apiServices
        .getPoints()
        .then((pointList) => {
          commit("SET_POINTLIST_TO_STATE", pointList);
          return pointList;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    async GET_CATEGORYLIST_FROM_API({ commit }) {
      const categories = await apiServices.getCategories();
      commit("SET_CATEGORYLIST_TO_STATE", categories.data.data);
    },
    async GET_FILTEREDCARLIST_FROM_API({ commit, state }, categoryId) {
      if (categoryId === "no-filter") {
        const page = state.cars["no-filter"]?.page;
        const carsData = await apiServices.getCars({ page, limit });
        commit("SET_CARS_DATA", { carsData });
      } else {
        const page = state.cars[categoryId]?.page;
        const carsData = await apiServices.getCars({ categoryId, page, limit });
        commit("SET_CARS_DATA", { carsData, categoryId });
      }
    },

    //SELECTED
    GET_SELECTEDCITY({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDCITY", chosenItem);
      } else {
        commit("RESET_SELECTEDCITY");
      }
    },
    GET_SELECTEDPOINT({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDPOINT", chosenItem);
      } else {
        commit("RESET_SELECTEDPOINT");
      }
    },
    GET_CHECKEDCATEGORY({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_CHECKEDCATEGORYCAR", chosenItem);
      } else {
        commit("RESET_CHECKEDCATEGORYCAR");
      }
    },
    GET_SELECTEDCAR({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDCAR", chosenItem);
      } else {
        commit("RESET_SELECTEDCAR");
      }
    },
  },
  getters: {
    FILTERED_POINTLIST(state) {
      if (state.selectedCity?.id) {
        return state.pointList.filter((point) => {
          if (point?.cityId?.id) {
            return point.cityId.id.includes(state.selectedCity.id);
          }
        });
      } else {
        const arr = [];
        return arr;
      }
    },
    FILTERED_CARSDATA_BY_CATEGORY: (state) => (categoryId) => {
      if (categoryId === "no-filter") {
        return state.cars["no-filter"]?.value;
      } else {
        return state.cars[categoryId]?.value;
      }
    },
  },
});
