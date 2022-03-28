<!--TO DO-->
<template>
  <div>
    <div class="radio-list">Вкладка выбора модели {{ selectedCar }}</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "order-model",
  setup() {
    const store = useStore();

    const selectedCar = computed(() => store.state.selectedCar);

    return { selectedCar };
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
