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
        :itemList="FILTERED_POINTLIST"
        :selectedItem="selectedPoint"
        @on-item-selected="setSelectedPoint"
        @on-item-reset="resetSelectedPoint"
      />
    </div>
    <p class="place__text">Выбрать на карте</p>
    <!-- <div class="place__pic">
      <img src="../assets/map.jpg" alt="карта" />
    </div> -->
    <div class="map-wrp">
      <MapComponent :key="componentKey" :chosenCityObj="chosenCityObj" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
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
    //const
    const store = useStore();
    //TO DO массив городов с координатами
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
    ];
    //TO DO массив пунктов с координатами
    const pointListCoords = [
      {
        id: "60bb074b2aed9a0b9b82fc71",
        name: "Арт-Квадрат",
        coords: [54.73995, 55.95737],
      },
      {
        id: "111111111111111111111111",
        name: "Какая-то улица",
        coords: [54.73945, 55.954502],
      },
    ];

    //ref
    const componentKey = ref(0);

    //computed
    const FILTERED_POINTLIST = computed(() => store.getters.FILTERED_POINTLIST);
    const cityList = computed(() => store.state.cityList);
    const selectedCity = computed(() => store.state.selectedCity);
    const selectedPoint = computed(() => store.state.selectedPoint);

    //TO DO выбранный объект города c координатми города и его пунктов выдачи
    const chosenCityObj = computed(() => {
      var newObjCity = {};
      for (var i = 0; i < cityListCoords.length; i++) {
        if (selectedCity.value.id === cityListCoords[i].id) {
          //в выбранный объект города добавляются его координаты
          //добавление  нового свойства (массив с пунктами выдачи и их координатами) в объект
          // newObjCity = { ...selectedCity.value, coords: cityListCoords[i].coords, coordsPoints: newPointListWithCoordsArr.value };
          newObjCity = {
            ...selectedCity.value,
            coords: cityListCoords[i].coords,
            points: [
              {
                id: "60bb074b2aed9a0b9b82fc71",
                name: "Арт-Квадрат",
                coords: [54.73995, 55.95737],
              },
              {
                id: "111111111111111111111111",
                name: "Какая-то улица",
                coords: [54.73945, 55.954502],
              },
            ],
          };
        }
      }
      //ререндеринг карты если выбран город
      if (Object.keys(newObjCity).length !== 0) {
        forceRerenderMap();
      }

      return newObjCity;
    });

    //TO DO добавить координаты пунктов выдачи в полученный массив с объектами пунктов выдачи
    const newPointListWithCoordsArr = computed(() => {
      const arr = [...FILTERED_POINTLIST.value]; //копия отфильтрованного массива по выбранному городу
      arr.forEach((item) => {
        var newArrObj = {};
        for (var i = 0; i < pointListCoords.length; i++) {
          if (item.id === pointListCoords[i].id) {
            newArrObj = { ...item, coordsPoint: pointListCoords[i].coords };
            // item = { ...item, coordsPoint: pointListCoords[i].coords };
          }
        }
        return newArrObj;
      });
      return arr;
    });

    //methods
    function GET_CITYLIST_FROM_API() {
      store.dispatch("GET_CITYLIST_FROM_API");
    }

    function GET_POINTLIST_FROM_API() {
      store.dispatch("GET_POINTLIST_FROM_API");
    }

    function setSelectedCity(chosenItem) {
      store.dispatch("GET_SELECTEDCITY", chosenItem);
    }

    function resetSelectedCity() {
      store.dispatch("GET_SELECTEDCITY");
      store.dispatch("GET_SELECTEDPOINT");
      context.emit("on-tab-reset", props.idTab); //отправляем событие в компонет v-tab, где будет вызван метод сброса вкладок
    }

    function setSelectedPoint(chosenItem) {
      store.dispatch("GET_SELECTEDPOINT", chosenItem);
    }

    function resetSelectedPoint() {
      store.dispatch("GET_SELECTEDPOINT");
      context.emit("on-tab-reset", props.idTab);
    }

    function forceRerenderMap() {
      componentKey.value += 1;
    }

    //API
    GET_CITYLIST_FROM_API();
    GET_POINTLIST_FROM_API();

    return {
      cityListCoords,
      pointListCoords,
      componentKey,
      cityList,
      selectedCity,
      selectedPoint,
      FILTERED_POINTLIST,
      chosenCityObj,
      newPointListWithCoordsArr,
      setSelectedCity,
      resetSelectedCity,
      setSelectedPoint,
      resetSelectedPoint,
      GET_CITYLIST_FROM_API,
      GET_POINTLIST_FROM_API,
      forceRerenderMap,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.input-block {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
