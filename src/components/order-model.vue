<template>
  <div>
    <div class="radio-list">
      <VRadio
        label="Все модели"
        v-model:checkedValue="categoryCars"
        @change="resetSelectedCategoryCar"
      />
      <VRadio
        v-for="category in categoryList"
        :key="category.id"
        :label="category.name"
        :value="category.id"
        v-model:checkedValue="categoryCars"
      />
    </div>
    <!-- <Preloader v-if="togglePreloader" /> -->
    <ul class="cars-list">
      <li
        class="cars__item"
        v-for="car in carListByCategory"
        :key="car.id"
        :class="{ cars__item_active: selectedCar.id === car.id }"
        @click="setSelectedCar(car)"
      >
        <p class="cars__model">{{ car.name }}</p>
        <p class="cars__price">{{ car.priceMin }} - {{ car.priceMax }} руб.</p>
        <img
          loading="lazy"
          class="cars__img"
          :src="car.thumbnail.path"
          :alt="car.thumbnail.originalname"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import VRadio from "@/components/v-radio.vue";
// import Preloader from "@/components/v-preloader.vue";

export default {
  name: "order-model",
  components: {
    VRadio,
    // Preloader,
  },
  setup(_, context) {
    //const
    const store = useStore();

    //computed
    const categoryList = computed(() => store.state.categoryList);
    const carListByCategory = computed(() => store.getters.FILTERED_CARSDATA_BY_CATEGORY(categoryCars.value));
    // const carList = computed(() => store.state.carList);
    const checkedCategoryCars = computed(() => store.state.checkedCategoryCars);
    const selectedCar = computed(() => store.state.selectedCar);

    const togglePreloader = computed(() => {
      if (carList.value.length > 0) {
        return false;
      }
      return true;
    });

//рабочий фильтр списка авто по категориям (без запроса по API)
    // const filteredCars = computed(() => {
    //   if (!checkedCategoryCars.value) {
    //     return carList.value;
    //   } else {
    //     return carList.value.filter((car) => {
    //       if (car?.categoryId?.id) {
    //         return car.categoryId.id.includes(checkedCategoryCars.value);
    //       }
    //     });
    //   }
    // });

    const categoryCars = computed({
      get: () => {
        return checkedCategoryCars.value;
      },
      set: (chosenCategoryCar) => {
        store.dispatch("GET_CHECKEDCATEGORY", chosenCategoryCar);
      },
    });

    //methods
    const GET_CATEGORYLIST_FROM_API = () => store.dispatch("GET_CATEGORYLIST_FROM_API");
    const GET_FILTEREDCARLIST_FROM_API = (chosenCategoryCar) => store.dispatch("GET_FILTEREDCARLIST_FROM_API", chosenCategoryCar);

    // const GET_CARLIST_FROM_API = () => store.dispatch("GET_CARLIST_FROM_API");

    const setSelectedCar = (chosenCar) =>
      store.dispatch("GET_SELECTEDCAR", chosenCar);

    const resetSelectedCategoryCar = () => {
      store.dispatch("GET_CHECKEDCATEGORY");
      store.dispatch("GET_SELECTEDCAR");
      context.emit("on-tab-reset", "order-model");
    };

    //API
    GET_CATEGORYLIST_FROM_API();
    GET_FILTEREDCARLIST_FROM_API(categoryCars.value);
    // GET_CATEGORYLIST_FROM_API();
    // GET_CARLIST_FROM_API();

    return {
      categoryList,
      carListByCategory,
      // carList,
      checkedCategoryCars,
      selectedCar,
      // togglePreloader,
      // filteredCars,
      categoryCars,
      setSelectedCar,
      resetSelectedCategoryCar,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.radio-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 48px 0;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    margin: 0 0 24px 0;
  }
}

.cars-list {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
  height: calc(100vh - 274px);

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    overflow: scroll;
    height: 40vh;
  }
}

.cars__item {
  width: 370px;
  list-style: none;
  border: 1px solid $color-grey-light;
  box-sizing: border-box;
  padding: 16px;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    width: 285px;
  }
}

.cars__item:hover {
  border: 1px solid $color-grey;
}

.cars__item_active {
  border: 1px solid $color-text;
}

.cars__model {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: $color;
  margin: 0;
}

.cars__price {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
  margin: 0;
}

.cars__img {
  max-width: 100%;
}
</style>
