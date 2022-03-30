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
    <div class="place__pic">
      <img src="../assets/map.jpg" alt="карта" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import VDropdown from "@/components/v-dropdown.vue";

export default {
  name: "order-place",
  components: {
    VDropdown,
  },
  props: ["idTab"],
  setup(props, context) {
    const store = useStore();
    //computed
    const FILTERED_POINTLIST = computed(() => store.getters.FILTERED_POINTLIST);
    const cityList = computed(() => store.state.cityList);
    const selectedCity = computed(() => store.state.selectedCity);
    const selectedPoint = computed(() => store.state.selectedPoint);
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

    //API
    GET_CITYLIST_FROM_API();
    GET_POINTLIST_FROM_API();

    return {
      cityList,
      selectedCity,
      selectedPoint,
      FILTERED_POINTLIST,
      setSelectedCity,
      resetSelectedCity,
      setSelectedPoint,
      resetSelectedPoint,
      GET_CITYLIST_FROM_API,
      GET_POINTLIST_FROM_API,
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

@media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
  .input-block {
    width: 250px;
    margin: 0 auto;
  }
}
</style>
