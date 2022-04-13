import { createStore } from "vuex";
import apiServices from "../services/apiServices";

export default createStore({
  state: {
    //API
    cityList: [],
    pointList: [],
    categoryList: [],
    carList: [],
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
    SET_CATEGORYLIST_TO_STATE: (state, categoryList) => {
      state.categoryList = categoryList.data.data;
    },
    SET_CARLIST_TO_STATE: (state, carList) => {
      state.carList = carList.data.data;
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
    GET_CATEGORYLIST_FROM_API({ commit }) {
      apiServices
        .getCategory()

        .then((categoryList) => {
          commit("SET_CATEGORYLIST_TO_STATE", categoryList);
          return categoryList;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    GET_CARLIST_FROM_API({ commit }) {
      apiServices
        .getCars()
        .then((carList) => {
          commit("SET_CARLIST_TO_STATE", carList);
          return carList;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
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
  },
});
