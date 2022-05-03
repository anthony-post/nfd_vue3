<template>
  <div class="summary__wrp">
    <div>
      <p class="summary__car-name">{{ selectedCar.name }}</p>
      <div class="car-number__wrp">
        <p class="summary__car-number">{{ selectedCar.number }}</p>
      </div>
      <dl v-if="selectedTank" class="summary__additional">
        <dt class="summary__additional-title">Топливо</dt>
        <dd class="summary__selected-value">100&percnt;</dd>
      </dl>
      <dl v-if="selectedBabyChair" class="summary__additional">
        <dt class="summary__additional-title">Детское кресло</dt>
        <dd class="summary__selected-value">Да</dd>
      </dl>
      <dl v-if="selectedRightHandDrive" class="summary__additional">
        <dt class="summary__additional-title">Правый руль</dt>
        <dd class="summary__selected-value">Да</dd>
      </dl>
      <dl class="summary__additional">
        <dt class="summary__additional-title">Доступна с</dt>
        <dd class="summary__selected-value">{{ selectedDateFrom }} {{ selectedTimeFrom }}</dd>
      </dl>
    </div>
    <!-- <img
      class="car__img"
      :src="selectedCar?.thumbnail?.path"
      :alt="selectedCar?.thumbnail?.originalname"
    /> -->
    <img
      class="car__img"
      :src="carImg.path"
      :alt="carImg.originalname"
    />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "order-summary",
  setup() {
    const store = useStore();

    //computed
    const selectedCar = computed(() => store.state.selectedCar);
    const selectedColor = computed(() => store.state.selectedColor);
    const selectedDateFrom = computed(() => store.state.selectedDateFrom);
    const selectedTimeFrom = computed(() => store.state.selectedTimeFrom);
    const selectedRate = computed(() => store.state.selectedRate);
    const selectedTank = computed(() => store.state.selectedTank);
    const selectedBabyChair = computed(() => store.state.selectedBabyChair);
    const selectedRightHandDrive = computed(() => store.state.selectedRightHandDrive);
    const carImg = computed(() => {
      return Object.keys(selectedCar.value.thumbnail).length !== 0 ? selectedCar.value.thumbnail : {};
    });

    return {
      selectedCar,
      selectedColor,
      selectedDateFrom,
      selectedTimeFrom,
      selectedRate,
      selectedTank,
      selectedBabyChair,
      selectedRightHandDrive,
      carImg,
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.summary__wrp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.summary__title {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: $color-title;
}

.summary__car-name {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: $color;
}

.car-number__wrp {
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px;
  width: 94px;
  text-align-last: center;
}

.summary__car-number {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  margin: 0;
}

.summary__additional {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  display: flex;
}

.summary__additional-title {
  padding: 0 5px 0 0;
}

.summary__selected-value {
  font-weight: 300;
  margin: 0;
}

.car__img {
  max-width: 50%;
}
</style>