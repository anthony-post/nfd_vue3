import { createStore } from "vuex";
import axios from "axios";

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
      axios("https://api-factory.simbirsoft1.com/api/db/city", {
        method: "GET",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
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
      axios("https://api-factory.simbirsoft1.com/api/db/point", {
        method: "GET",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
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
    getSelectedCity({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDCITY", chosenItem);
      } else {
        commit("RESET_SELECTEDCITY");
      }
    },
    getSelectedPoint({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDPOINT", chosenItem);
      } else {
        commit("RESET_SELECTEDPOINT");
      }
    },
  },
  getters: {
    CITYLIST(state) {
      return state.cityList;
    },
    POINTLIST(state) {
      return state.pointList;
    },
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
