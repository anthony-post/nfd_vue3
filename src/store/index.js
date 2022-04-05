import { createStore } from "vuex";
import apiServices from "../services/apiServices";

export default createStore({
  state: {
    //API
    cityList: [],
    pointList: [],
    //USER SELECTED
    selectedCity: {},
    selectedPoint: {},
    // selectedCar: {},
    selectedCar: {
      id: 1,
      name: "Aston Martin",
      priceMin: 8000,
      priceMax: 15000,
    }, //тестовый объект для переключения вкладки
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
