<template>
  <div>
    <div class="radio-list">
      <VRadio
        label="Все модели"
        v-model="categoryCars"
        @change="resetSelectedCategoryCar"
      />
      <VRadio
        v-for="category in categories"
        :key="category.id"
        :label="category.name"
        :value="category.id"
        v-model="categoryCars"
      />
    </div>
    <ul class="cars-list">
      <li
        class="cars__item"
        v-for="car in filteredCars"
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

export default {
  name: "order-model",
  components: {
    VRadio,
  },
  setup(props, context) {
    //const
    const store = useStore();
    const categories = [
      { id: "600598a3ad015e0bb699774c", name: "Эконом" },
      { id: "60b943492aed9a0b9b7ed335", name: "Премиум" },
      { id: "5fd91add935d4e0be16a3c4b", name: "Спорт" },
    ];

    //computed
    const carList = computed(() => store.state.carList);
    const checkedCategoryCars = computed(() => store.state.checkedCategoryCars);
    const selectedCar = computed(() => store.state.selectedCar);

    const filteredCars = computed(() => {
      if (!checkedCategoryCars.value) {
        return carList.value;
      } else {
        return carList.value.filter((car) => {
          if (car?.categoryId?.id) {
            return car.categoryId.id.includes(checkedCategoryCars.value);
          }
        });
      }
    });

    const categoryCars = computed({
      get: () => {
        return checkedCategoryCars.value;
      },
      set: (chosenCategoryCar) => {
        store.dispatch("GET_CHECKEDCATEGORY", chosenCategoryCar);
      },
    });

    //methods
    const GET_CARLIST_FROM_API = () => store.dispatch("GET_CARLIST_FROM_API");

    const setSelectedCar = chosenCar => store.dispatch("GET_SELECTEDCAR", chosenCar);

    const resetSelectedCategoryCar = () => {
      store.dispatch("GET_CHECKEDCATEGORY");
      store.dispatch("GET_SELECTEDCAR");
      context.emit("on-tab-reset", "order-model");
    };

    //API
    GET_CARLIST_FROM_API();

    return {
      categories,
      carList,
      checkedCategoryCars,
      selectedCar,
      filteredCars,
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
}

.cars-list {
  margin: 0;
  padding: 48px 0 0 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: scroll;
  height: calc(100vh - 274px);
}

.cars__item {
  width: 370px;
  list-style: none;
  border: 1px solid $color-grey-light;
  box-sizing: border-box;
  padding: 16px;
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

@media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
  .cars-list {
    overflow: scroll;
    height: 40vh;
  }

  .cars__item {
    width: 285px;
  }
}
</style>
