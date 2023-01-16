<template>
  <div>
    <div class="input-block">
      <VDropdown
        label="Город"
        name="city"
        placeholder="Начните вводить город ..."
        :itemList="cityList"
        :selectedItem="selectedCity"
        @on-item-selected="setSelectedCity"
        @on-item-reset="resetSelectedCity"
      />
      <VDropdown
        label="Пункт выдачи"
        name="point"
        placeholder="Начните вводить пункт ..."
        :class="{ input_blocked: isSelectedCity }"
        :itemList="filteredPointList"
        :selectedItem="selectedPoint"
        @on-item-selected="setSelectedPoint"
        @on-item-reset="resetSelectedPoint"
      />
    </div>
    <p class="place__text">Выбрать на карте</p>
    <div class="map-wrp">
      <MapComponent :key="componentKey" :chosenCityObj="chosenCityObj" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, watch } from "vue";
import VDropdown from "@/components/v-dropdown.vue";
import MapComponent from "@/components/map-component.vue";

export default {
  name: "order-place",
  components: {
    VDropdown,
    MapComponent,
  },
  props: ["idTab"],
  setup(props, context) {
    const store = useStore();
    //массив городов с координатами
    const cityListCoords = [
      {
        id: "6011452fad015e0bb6997e1d",
        name: "Уфа",
        coords: [54.735152, 55.958736],
      },
      {
        id: "60d6e4d32aed9a0b9b84fa82",
        name: "Краснодар",
        coords: [45.03547, 38.975313],
      },
      {
        id: "6005b8f9ad015e0bb6997778",
        name: "Санкт-Петербург",
        coords: [59.939099, 30.315877],
      },
      {
        id: "61a3675e05c99b2812794ed7",
        name: "Ростов-на-Дону",
        coords: [47.222078, 39.720358],
      },
      {
        id: "61ab1310bb7a006c05c5497f",
        name: "Екатеринбург",
        coords: [56.838011, 60.597474],
      },
      {
        id: "61b30fe9bb7a006c05c54e2b",
        name: "Ульяновск",
        coords: [54.314192, 48.403132],
      },
      {
        id: "6238c42573b61100181018e1",
        name: "Омск",
        coords: [54.989347, 73.368221],
      },
      {
        id: "615a1d1218f5c2264119b91a",
        name: "Саранск",
        coords: [54.187433, 45.183938],
      },
      {
        id: "61585c3818f5c2264119b859",
        name: "Сочи",
        coords: [43.585472, 39.723098],
      },
      {
        id: "6114e2a22aed9a0b9b85083e",
        name: "Воронеж",
        coords: [51.660786, 39.200269],
      },
      {
        id: "5ea07c3b099b810b946c627b",
        name: "Саратов",
        coords: [51.533562, 46.034266],
      },
    ];
    //массив пунктов с координатами
    const pointListCoords = [
      {
        id: "60bb074b2aed9a0b9b82fc71",
        name: "Арт-Квадрат",
        coords: [54.73995, 55.95737],
      },
      {
        id: "6114630f2aed9a0b9b850806",
        name: "Автомобильная парковка",
        coords: [45.046319, 39.030356],
      },
      {
        id: "615ae47018f5c2264119b939",
        name: "Пункт",
        coords: [59.935119, 30.349339],
      },
      {
        id: "61a391e605c99b2812794f1c",
        name: "Администрация",
        coords: [47.221705, 39.712156],
      },
      {
        id: "61adef6bbb7a006c05c54a8a",
        name: "Магнит",
        coords: [56.901277, 60.585967],
      },
      {
        id: "61b310cfbb7a006c05c54e2c",
        name: "Мариинская гимназия",
        coords: [54.31228, 48.395406],
      },
    ];

    //ref
    const componentKey = ref(0);

    //computed
    const filteredPointList = computed(() => store.getters.FILTERED_POINTLIST);
    const cityList = computed(() => store.state.cityList);
    const selectedCity = computed(() => store.state.selectedCity);
    const selectedPoint = computed(() => store.state.selectedPoint);

    //выбранный объект города c координатми города и его пунктов выдачи
    const chosenCityObj = computed(() => {
      let newObjCity = {};
      for (let i = 0; i < cityListCoords.length; i++) {
        if (selectedCity.value.id === cityListCoords[i].id) {
          //в выбранный объект города добавляются его координаты
          //добавление  нового свойства (массив с пунктами выдачи и их координатами) в объект
          newObjCity = {
            ...selectedCity.value,
            coords: cityListCoords[i].coords,
            points: newPointListWithCoordsArr.value,
          };
        }
      }
      return newObjCity;
    });

    //добавление координат пунктов выдачи в отфильтрованный массив с объектами пунктов выдачи
    const newPointListWithCoordsArr = computed(() => {
      return filteredPointList.value.map((item) => {
        const foundPoint = pointListCoords.find(
          point => point.id === item.id
        );

        return foundPoint ? { ...item, coordsPoint: foundPoint.coords } : item;
      });
    });

    const isSelectedCity = computed(() => {
      return Object.keys(selectedCity.value).length === 0
    });

    //methods
    const getCityListFromApi = () => {
      store.dispatch("GET_CITYLIST_FROM_API");
    };

    const getPointListFromApi = () => {
      store.dispatch("GET_POINTLIST_FROM_API");
    };

    const setSelectedCity = (chosenItem) => {
      store.dispatch("GET_SELECTEDCITY", chosenItem);
    };

    const resetSelectedCity = () => {
      store.dispatch("GET_SELECTEDCITY");
      store.dispatch("GET_SELECTEDPOINT");
      store.dispatch("GET_CHECKEDCATEGORY");
      store.dispatch("GET_SELECTEDCAR");
      store.dispatch("GET_CHECKEDCOLOR");
      store.dispatch("GET_SELECTEDDATEFROM");
      store.dispatch("GET_SELECTEDTIMEFROM");
      store.dispatch("GET_SELECTEDDATETO");
      store.dispatch("GET_SELECTEDTIMETO");
      store.dispatch("GET_RENTALDURATION");
      store.dispatch("GET_CHECKEDRATE");
      store.dispatch("GET_CHECKEDTANK");
      store.dispatch("GET_CHECKEDBABYCHAIR");
      store.dispatch("GET_CHECKEDRIGHTHANDDRIVE");
      context.emit("on-tab-reset", props.idTab); //отправляем событие в компонет order-window, где будет вызван метод сброса вкладок
    };

    const setSelectedPoint = (chosenItem) => {
      store.dispatch("GET_SELECTEDPOINT", chosenItem);
    };

    const resetSelectedPoint = () => {
      store.dispatch("GET_SELECTEDPOINT");
      store.dispatch("GET_CHECKEDCATEGORY");
      store.dispatch("GET_SELECTEDCAR");
      store.dispatch("GET_CHECKEDCOLOR");
      store.dispatch("GET_SELECTEDDATEFROM");
      store.dispatch("GET_SELECTEDTIMEFROM");
      store.dispatch("GET_SELECTEDDATETO");
      store.dispatch("GET_SELECTEDTIMETO");
      store.dispatch("GET_RENTALDURATION");
      store.dispatch("GET_CHECKEDRATE");
      store.dispatch("GET_CHECKEDTANK");
      store.dispatch("GET_CHECKEDBABYCHAIR");
      store.dispatch("GET_CHECKEDRIGHTHANDDRIVE");
      context.emit("on-tab-reset", props.idTab);
    };

    const forceRerenderMap = () => {
      componentKey.value += 1;
    };

    //API
    getCityListFromApi();
    getPointListFromApi();

    //ререндеринг компонента карты если выбран/сброшен город или пункт выдачи
    watch([selectedCity, selectedPoint], () => {
      forceRerenderMap();
    });

    return {
      cityListCoords,
      pointListCoords,
      componentKey,
      cityList,
      selectedCity,
      selectedPoint,
      filteredPointList,
      chosenCityObj,
      newPointListWithCoordsArr,
      isSelectedCity,
      setSelectedCity,
      resetSelectedCity,
      setSelectedPoint,
      resetSelectedPoint,
      getCityListFromApi,
      getPointListFromApi,
      forceRerenderMap,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.input-block {
  width: 330px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.input_blocked {
  pointer-events: none;
  opacity: 0.5;
}

.place__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  padding: 30px 0 0 0;
}

.place__pic img {
  max-width: 100%;
}

.map-wrp {
  width: 80%;
  height: calc(70vh - 165px);

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    width: 100%;
    height: calc(50vh - 185px);
  }
}

@media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
  .input-block {
    width: 250px;
    margin: 0 auto;
  }
}
</style>
