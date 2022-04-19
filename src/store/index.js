import { createStore } from "vuex";
import apiServices from "../services/apiServices";
import axios from "axios";

const limit = 5; //лимит на количество загруженных авто в область видимости

export default createStore({
  state: {
    //API
    cityList: [],
    pointList: [],
    categoryList: [],
    cars: {},
    rateList: [],
    //ORDER
    popUpConfirm: false,
    orderId: "",
    orderConfirmed: {},
    orderNewStatusId: "5e26a191099b810b946c5d89",
    orderConfirmedStatusId: "5e26a1f0099b810b946c5d8b",
    orderCanceledStatusId: "5e26a1f5099b810b946c5d8c",
    //USER SELECTED
    selectedCity: {},
    selectedPoint: {},
    checkedCategoryCars: "",
    selectedCar: {},
    selectedColor: "",
    selectedDateFrom: "Введите дату и время...", //дата для отображения в инпуте
    selectedTimeFrom: "", //время для отображения в инпуте
    selectedDateTo: "Введите дату и время...", //дата для отображения в инпуте
    selectedTimeTo: "", //время для отображения в инпуте
    dateFrom: 0, //дата в миллисекундах
    dateTo: 0, //дата в миллисекундах
    rentalDuration: "", //длительнотсь аренды
    selectedRate: "",
    selectedTank: false,
    selectedBabyChair: false,
    selectedRightHandDrive: false,
    priceSummary: 0,
  },
  mutations: {
    //API
    //города
    SET_CITYLIST_TO_STATE: (state, cityList) => {
      state.cityList = cityList.data.data;
    },
    //пункты выдачи
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

        if (carsAllCategory.value.length <= carsData.data.count) {
          carsAllCategory.page++;
        }
      } else {
        const carsByCategory = state.cars[categoryId];
        carsByCategory.value.push(...carsData.data.data);

        if (carsByCategory.value.length <= carsData.data.count) {
          carsByCategory.page++;
        }
      }
    },
    //тарифы
    SET_RATE_TO_STATE: (state, rateList) => {
      state.rateList = rateList.data.data;
    },
    //заказ
    SET_ORDERID_TO_STATE: (state, order) => {
      state.orderId = order.data.data.id;
    },
    RESET_ORDERID_TO_STATE: (state) => {
      state.orderId = "";
    },
    SET_ORDERCONFIRMED_TO_STATE: (state, orderConfirmed) => {
      state.orderConfirmed = orderConfirmed.data.data;
    },
    RESET_ORDERCONFIRMED_TO_STATE: (state) => {
      state.orderConfirmed = {};
    },

    //SELECTED
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
    //COLOR
    SET_SELECTEDCOLOR(state, selectedColor) {
      state.selectedColor = selectedColor;
    },
    RESET_SELECTEDCOLOR(state) {
      state.selectedColor = "";
    },
    //DATEFROM
    SET_SELECTEDDATEFROM(state, selectedDateFrom) {
      state.selectedDateFrom = selectedDateFrom.dateString;
      state.dateFrom = selectedDateFrom.value;
    },
    RESET_SELECTEDDATEFROM(state) {
      state.selectedDateFrom = "Введите дату и время...";
      state.dateFrom = 0;
    },
    //TIMEFROM
    SET_SELECTEDTIMEFROM(state, selectedTimeFrom) {
      state.selectedTimeFrom = selectedTimeFrom.dateString;
      state.dateFrom = state.dateFrom + selectedTimeFrom.value;
    },
    RESET_SELECTEDTIMEFROM(state) {
      state.selectedTimeFrom = "";
      state.dateFrom = 0;
    },
    //DATETO
    SET_SELECTEDDATETO(state, selectedDateTo) {
      state.selectedDateTo = selectedDateTo.dateString;
      state.dateTo = selectedDateTo.value;
    },
    RESET_SELECTEDDATETO(state) {
      state.selectedDateTo = "Введите дату и время...";
      state.dateTo = 0;
    },
    //TIMETO
    SET_SELECTEDTIMETO(state, selectedTimeTo) {
      state.selectedTimeTo = selectedTimeTo.dateString;
      state.dateTo = state.dateTo + selectedTimeTo.value;
    },
    RESET_SELECTEDTIMETO(state) {
      state.selectedTimeTo = "";
      state.dateTo = 0;
    },
    //RENTAL DURATION
    SET_RENTALDURATION(state, duration) {
      //конвертация миллисекунд в количество дней, часов, минут
      function convertToDays(milliSeconds) {
        let days = Math.floor(milliSeconds / (86400 * 1000));
        milliSeconds -= days * (86400 * 1000);
        let hours = Math.floor(milliSeconds / (60 * 60 * 1000));
        milliSeconds -= hours * (60 * 60 * 1000);
        let minutes = Math.floor(milliSeconds / (60 * 1000));
        return {
          days,
          hours,
          minutes,
        };
      }

      state.rentalDuration = convertToDays(duration);
    },
    RESET_RENTALDURATION(state) {
      state.rentalDuration = "";
    },
    //RATE
    SET_SELECTEDRATE(state, selectedRate) {
      state.selectedRate = selectedRate;
    },
    RESET_SELECTEDRATE(state) {
      state.selectedRate = "";
    },
    //TANK
    SET_SELECTEDTANK(state, selectedTank) {
      state.selectedTank = selectedTank;
    },
    RESET_SELECTEDTANK(state) {
      state.selectedTank = false;
    },
    //BABY CHAIR
    SET_SELECTEDBABYCHAIR(state, selectedBabyChair) {
      state.selectedBabyChair = selectedBabyChair;
    },
    RESET_SELECTEDBABYCHAIR(state) {
      state.selectedBabyChair = false;
    },
    //RIGHT HAND DRIVE
    SET_SELECTEDRIGHTHANDDRIVE(state, selectedRightHandDrive) {
      state.selectedRightHandDrive = selectedRightHandDrive;
    },
    RESET_SELECTEDRIGHTHANDDRIVE(state) {
      state.selectedRightHandDrive = false;
    },
    //PRICE SUMMARY
    SET_PRICESUMMARY(state, priceSummary) {
      state.priceSummary = priceSummary;
    },
    RESET_PRICESUMMARY(state) {
      state.priceSummary = 0;
    },
    //POP UP CONFIRM
    SET_POPUPCONFIRM(state) {
      state.popUpConfirm = true;
    },
    RESET_POPUPCONFIRM(state) {
      state.popUpConfirm = false;
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
    GET_RATE_FROM_API({ commit }) {
      apiServices
        .getRate()
        .then((rateList) => {
          commit("SET_RATE_TO_STATE", rateList);
          console.log(rateList);
          return rateList;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    //не разобрался как сделать вызов из файла apiServices - POST, PUT, GET запросов с данными заказа,
    //поэтому сделал так 
    POST_ORDER_TO_API({ commit }) {
      // apiServices
      //   .postOrder()
      axios("https://api-factory.simbirsoft1.com/api/db/order", {
        method: "POST",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
        data: {
          orderStatusId: this.state.orderNewStatusId,
          cityId: this.state.selectedCity.id,
          pointId: this.state.selectedPoint.id,
          carId: this.state.selectedCar.id,
          color: this.state.selectedColor,
          dateFrom: this.state.dateFrom,
          dateTo: this.state.dateTo,
          rateId: this.state.selectedRate,
          price: this.state.priceSummary,
          isFullTank: this.state.selectedTank,
          isNeedChildChair: this.state.selectedBabyChair,
          isRightWheel: this.state.selectedRightHandDrive,
        },
      })
        .then((order) => {
          commit("SET_ORDERID_TO_STATE", order);
          return order;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    PUT_CONFIRM_ORDERID_TO_API() {
      const mainUrl = "https://api-factory.simbirsoft1.com/api/db/order/";
      const orderUrl = mainUrl + this.state.orderId;
      axios(orderUrl, {
        method: "PUT",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
        data: {
          orderStatusId: this.state.orderConfirmedStatusId,
        },
      }).catch((error) => {
        console.log(error);
        return error;
      });
    },
    GET_ORDER_FROM_API({ commit }) {
      const mainUrl = "https://api-factory.simbirsoft1.com/api/db/order/";
      const orderUrl = mainUrl + this.state.orderId;
      axios(orderUrl, {
        method: "GET",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
      })
        .then((orderConfirmed) => {
          commit("SET_ORDERCONFIRMED_TO_STATE", orderConfirmed);
          console.log(orderConfirmed);
          return orderConfirmed;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    PUT_CANCEL_ORDERID_TO_API() {
      const mainUrl = "https://api-factory.simbirsoft1.com/api/db/order/";
      const orderUrl = mainUrl + this.state.orderId;
      axios(orderUrl, {
        method: "PUT",
        headers: {
          "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        },
        data: {
          orderStatusId: this.state.orderCanceledStatusId,
        },
      }).catch((error) => {
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
    GET_CHECKEDCOLOR({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDCOLOR", chosenItem);
      } else {
        commit("RESET_SELECTEDCOLOR");
      }
    },
    GET_SELECTEDDATEFROM({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDDATEFROM", chosenItem);
      } else {
        commit("RESET_SELECTEDDATEFROM");
      }
    },
    GET_SELECTEDTIMEFROM({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDTIMEFROM", chosenItem);
      } else {
        commit("RESET_SELECTEDTIMEFROM");
      }
    },
    GET_SELECTEDDATETO({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDDATETO", chosenItem);
      } else {
        commit("RESET_SELECTEDDATETO");
      }
    },
    GET_SELECTEDTIMETO({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDTIMETO", chosenItem);
      } else {
        commit("RESET_SELECTEDTIMETO");
      }
    },
    GET_RENTALDURATION({ commit }, duration) {
      if (duration) {
        commit("SET_RENTALDURATION", duration);
      } else {
        commit("RESET_RENTALDURATION");
      }
    },
    GET_CHECKEDRATE({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDRATE", chosenItem);
      } else {
        commit("RESET_SELECTEDRATE");
      }
    },
    GET_CHECKEDTANK({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDTANK", chosenItem);
      } else {
        commit("RESET_SELECTEDTANK");
      }
    },
    GET_CHECKEDBABYCHAIR({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDBABYCHAIR", chosenItem);
      } else {
        commit("RESET_SELECTEDBABYCHAIR");
      }
    },
    GET_CHECKEDRIGHTHANDDRIVE({ commit }, chosenItem) {
      if (chosenItem) {
        commit("SET_SELECTEDRIGHTHANDDRIVE", chosenItem);
      } else {
        commit("RESET_SELECTEDRIGHTHANDDRIVE");
      }
    },
    GET_PRICESUMMARY({ commit }, pricesummary) {
      if (pricesummary) {
        commit("SET_PRICESUMMARY", pricesummary);
      } else {
        commit("RESET_PRICESUMMARY");
      }
    },
    GET_POPUPCONFIRM({ commit }, popUpIsActive) {
      if (popUpIsActive) {
        commit("SET_POPUPCONFIRM", popUpIsActive);
      } else {
        commit("RESET_POPUPCONFIRM");
      }
    },
    GET_ORDERID({ commit }, order) {
      if (order) {
        commit("SET_ORDERID_TO_STATE", order);
      } else {
        commit("RESET_ORDERID_TO_STATE");
      }
    },
    GET_ORDERCONFIRMED({ commit }, order) {
      if (order) {
        commit("SET_ORDERCONFIRMED_TO_STATE", order);
      } else {
        commit("RESET_ORDERCONFIRMED_TO_STATE");
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
