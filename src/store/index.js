import { createStore } from "vuex";
import apiServices from "../services/apiServices";

const limit = 4; //лимит на количество загруженных авто в область видимости

export default createStore({
  state: {
    //API
    cityList: [],
    pointList: [],
    categoryList: [],
    cars: {},
    rateList: [],
    //ORDER
    orderId: "",
    orderConfirmed: {},
    errorStatus: null,
    //USER SELECTED
    selectedCity: {},
    selectedPoint: {},
    checkedCategoryCars: "",
    selectedCar: {},
    selectedColor: "",
    chosenDateFromMs: 0, //выбранная дата в миллисекундах в поле "С"
    chosenTimeFromMs: 0, //выбранное время в миллисекундах в поле "С"
    selectedDateFrom: "Введите дату и время...", //дата для отображения в инпуте
    selectedTimeFrom: "", //время для отображения в инпуте
    chosenDateToMs: 0, //выбранная дата в миллисекундах в поле "По" 
    chosenTimeToMs: 0, //выбранное время в миллисекундах в поле "С"
    selectedDateTo: "Введите дату и время...", //дата для отображения в инпуте
    selectedTimeTo: "", //время для отображения в инпуте
    dateFrom: 0, //дата со временем в миллисекундах
    dateTo: 0, //дата со временем в миллисекундах
    rentalDuration: "", //длительнотсь аренды
    selectedRate: null,
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
    SET_ERRORSTATUS_TO_STATE: (state, error) => {
      state.errorStatus = error;
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
      state.chosenDateFromMs = selectedDateFrom.value;

      state.selectedDateFrom = selectedDateFrom.dateString;
      state.dateFrom = selectedDateFrom.value;
    },
    RESET_SELECTEDDATEFROM(state) {
      state.chosenDateFromMs = 0;

      state.selectedDateFrom = "Введите дату и время...";
      state.dateFrom = 0;
    },
    //TIMEFROM
    SET_SELECTEDTIMEFROM(state, selectedTimeFrom) {
      state.chosenTimeFromMs = selectedTimeFrom.value;

      state.selectedTimeFrom = selectedTimeFrom.dateString;
      state.dateFrom = state.dateFrom + selectedTimeFrom.value;
    },
    RESET_SELECTEDTIMEFROM(state) {
      state.chosenTimeFromMs = 0;

      state.selectedTimeFrom = "";
      state.dateFrom = 0;
    },
    //DATETO
    SET_SELECTEDDATETO(state, selectedDateTo) {
      state.chosenDateToMs = selectedDateTo.value;

      state.selectedDateTo = selectedDateTo.dateString;
      state.dateTo = selectedDateTo.value;
    },
    RESET_SELECTEDDATETO(state) {
      state.chosenDateToMs = 0;

      state.selectedDateTo = "Введите дату и время...";
      state.dateTo = 0;
    },
    //TIMETO
    SET_SELECTEDTIMETO(state, selectedTimeTo) {
      state.chosenTimeToMs = selectedTimeTo.value;

      state.selectedTimeTo = selectedTimeTo.dateString;
      state.dateTo = state.dateTo + selectedTimeTo.value;
    },
    RESET_SELECTEDTIMETO(state) {
      state.chosenTimeToMs = 0;

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
      if (typeof selectedRate === 'string') {
        state.selectedRate = +selectedRate;
      } else {
        state.selectedRate = selectedRate;
      }
    },
    RESET_SELECTEDRATE(state) {
      state.selectedRate = null;
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
          return error;
        });
    },
    async GET_CATEGORYLIST_FROM_API({ commit }) {
      try {
        const categories = await apiServices.getCategories();
        commit("SET_CATEGORYLIST_TO_STATE", categories.data.data);
      } catch (error) {
        throw new Error(error);
      }
    },
    async GET_FILTEREDCARLIST_FROM_API({ commit, state }, categoryId) {
      try {
        if (categoryId === "no-filter") {
          const page = state.cars["no-filter"]?.page;
          const carsData = await apiServices.getCars({ page, limit });
          commit("SET_CARS_DATA", { carsData });
        } else {
          const page = state.cars[categoryId]?.page;
          const carsData = await apiServices.getCars({ categoryId, page, limit });
          commit("SET_CARS_DATA", { carsData, categoryId });
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    async GET_RATE_FROM_API({ commit }) {
      try {
        const rateList = await apiServices.getRate()
        commit("SET_RATE_TO_STATE", rateList);
      } catch (error) {
        throw new Error(error);
      }
    },
    async POST_ORDER_TO_API({ commit, state }) {
      const getRateTypeId = () => {
        return state.rateList.reduce((accumulator, rate) => {
          if (rate.id === state.selectedRate) {
            accumulator = rate.rateTypeId.id;
          }
          return accumulator;
        }, "");
      };

      try {
        const order = await apiServices.postOrder({
          // orderStatusId: orderNewStatusId,
          cityId: {
            id: state.selectedCity.id
          },
          pointId: {
            id: state.selectedPoint.id
          },
          carId: {
            id: state.selectedCar.id
          },
          color: state.selectedColor,
          dateFrom: state.dateFrom,
          dateTo: state.dateTo,
          rateId: {
            id: state.selectedRate,
            rateType_id: getRateTypeId(),
          },
          price: state.priceSummary,
          isFullTank: state.selectedTank,
          isNeedChildChair: state.selectedBabyChair,
          isRightWheel: state.selectedRightHandDrive,
        });
        commit("SET_ORDERID_TO_STATE", order);
      } catch (error) {
        commit("SET_ERRORSTATUS_TO_STATE", error);
      }
    },
    async GET_ORDER_FROM_API({ commit, state }) {
      try {
        const orderConfirmed = await apiServices.getOrder(state.orderId);
        commit("SET_ORDERCONFIRMED_TO_STATE", orderConfirmed);
      } catch (error) {
        throw new Error(error);
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
      if (Object.keys(state.selectedCity).length !== 0 && state.selectedCity?.id) {
        return state.pointList.filter((point) => {
          if (point?.cityId?.id) {
            return point.cityId.id === state.selectedCity.id
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
        // return state.cars[categoryId]?.value;

        //временное решение, так как на бэке перестали проходить запросы по фильтру по категориям авто
        return state.cars[categoryId]?.value.filter((car) => {
          if (car?.categoryId?.id) {
            return car.categoryId.id == categoryId
          }
        });
      }
    },
  },
});
