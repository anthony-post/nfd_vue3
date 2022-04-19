<template>
  <div class="total">
    <p class="total__title">Ваш заказ:</p>
    <ul class="total-list">
      <li class="total__item">
        <span class="total__item-title">Пункт выдачи</span>
        <div class="total__item-value">
          <span>{{ selectedCity.name }}</span>
          <span>{{ selectedPoint.name }}</span>
        </div>
      </li>
      <li class="total__item" v-if="selectedCar.name">
        <span class="total__item-title">Модель</span>
        <span class="total__item-value">{{ selectedCar.name }}</span>
      </li>
      <li class="total__item" v-if="selectedColor">
        <span class="total__item-title">Цвет</span>
        <span class="total__item-value">{{ selectedColor }}</span>
      </li>
      <li class="total__item" v-if="rentalDuration">
        <span class="total__item-title">Длительность аренды</span>
        <span class="total__item-value" v-if="rentalDuration.days">
          {{ rentalDuration.days }}д
        </span>
        <span class="total__item-value" v-if="rentalDuration.hours">
          {{ rentalDuration.hours }}ч
        </span>
      </li>
      <li class="total__item" v-if="getNameRate">
        <span class="total__item-title">Тариф</span>
        <span class="total__item-value">{{ getNameRate }}</span>
      </li>
      <li class="total__item" v-if="selectedTank">
        <span class="total__item-title">Полный бак</span>
        <span class="total__item-value">Да</span>
      </li>
      <li class="total__item" v-if="selectedBabyChair">
        <span class="total__item-title">Детское кресло</span>
        <span class="total__item-value">Да</span>
      </li>
      <li class="total__item" v-if="selectedRightHandDrive">
        <span class="total__item-title">Правый руль</span>
        <span class="total__item-value">Да</span>
      </li>
    </ul>
    <!--Цена-->
    <p class="total__price" v-if="selectedCar.name">
      Цена:
      <span class="total__price total__price-thin" v-if="getPriceSummary">
        {{ getPriceSummary }} &#8381;
      </span>
      <span class="total__price total__price-thin" v-else>
        от {{ selectedCar.priceMin }} до {{ selectedCar.priceMax }} &#8381;
      </span>
    </p>
    <!--Кнопка Выбрать модель-->
    <button
      class="total__button"
      v-if="selectedTab === 'order-place'"
      :class="{ total__button_active: orderPlaceFilledUp }"
      :disabled="!orderPlaceFilledUp"
      @click="changeSelectedTabModel"
    >
      Выбрать модель
    </button>
    <!--Кнопка Дополнительно-->
    <button
      class="total__button"
      v-if="selectedTab === 'order-model'"
      :class="{ total__button_active: orderModelFilledUp }"
      :disabled="!orderModelFilledUp"
      @click="changeSelectedTabAdditional"
    >
      Дополнительно
    </button>
    <!--Кнопка Итого-->
    <button
      class="total__button"
      v-if="selectedTab === 'order-additional'"
      :class="{ total__button_active: orderAdditionalFilledUp }"
      :disabled="!orderAdditionalFilledUp"
      @click="changeSelectedTabSummary"
    >
      Итого
    </button>
    <!--Кнопка Заказать-->
    <button
      class="total__button total__button_active"
      v-if="selectedTab === 'order-summary'"
      @click="showPopUp"
    >
      Заказать
    </button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "v-total",
  props: {
    tabs: {
      type: Array,
      required: false,
    },
    selectedId: {
      type: Number,
      required: false,
    },
    selectedTab: {
      type: String,
      required: false,
    },
  },
  setup(props, context) {
    const store = useStore();

    //computed
    const selectedCity = computed(() => store.state.selectedCity);
    const selectedPoint = computed(() => store.state.selectedPoint);
    const selectedCar = computed(() => store.state.selectedCar);
    const selectedColor = computed(() => store.state.selectedColor);
    const dateStateFrom = computed(() => store.state.dateFrom);
    const dateStateTo = computed(() => store.state.dateTo);
    const rentalDuration = computed(() => store.state.rentalDuration);
    const rateList = computed(() => store.state.rateList);
    const selectedRate = computed(() => store.state.selectedRate);
    const selectedTank = computed(() => store.state.selectedTank);
    const selectedBabyChair = computed(() => store.state.selectedBabyChair);
    const selectedRightHandDrive = computed(
      () => store.state.selectedRightHandDrive
    );

    //поиск выбранного id тарифа в массиве и получение его наименования
    const getNameRate = computed(() => {
      let nameRate = "";
      rateList.value.filter(item => {
        if(item.id === selectedRate.value) {
          nameRate = item.rateTypeId.name;
        } 
      });
      return nameRate;
    }, '');

    //подсчет итоговой суммы заказа
    const getPriceSummary = computed(() => {
      const rateMinuteId = "62593c9d73b61100181028ed";
      const rateDayId = "62593cac73b61100181028ee";
      const rateWeekId = "62593cca73b61100181028ef";
      const rateWeekSaleId = "62593cd573b61100181028f0";
      const rateMonthId = "6259003d73b61100181028d9";
      const rateQuarterId = "62593cf073b61100181028f1";
      const rateYearId = "62593d0273b61100181028f2";
      const priceTank = 500;
      const priceBabyChair = 200;
      const priceRightHandDrive = 1600;

      let priceCalculated;
      const duration = dateStateTo.value - dateStateFrom.value;

      rateList.value.forEach((rate) => {
        //monthly rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateMonthId
        ) {
          const rateMonthPrice = rate.price / (30 * 86400000);
          if (duration === 30 * 86400000) {
            priceCalculated = Math.round(duration * rateMonthPrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }

        //minute rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateMinuteId
        ) {
          const rateMinutePrice = rate.price / 60000;
          if (duration > 60000 && duration < 1 * 86400000) {
            priceCalculated = Math.round(duration * rateMinutePrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }

        //dayly rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateDayId
        ) {
          const rateDayPrice = rate.price / 86400000;
          if (duration >= 86400000 && duration < 7 * 86400000) {
            priceCalculated = Math.round(duration * rateDayPrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }

        //weekly rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateWeekId
        ) {
          const rateWeekPrice = rate.price / (7 * 86400000);
          if (duration === 7 * 86400000) {
            priceCalculated = Math.round(duration * rateWeekPrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }

        //weekly rate sale
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateWeekSaleId
        ) {
          const rateWeekSalePrice = rate.price / (7 * 86400000);
          if (duration === 7 * 86400000) {
            priceCalculated = Math.round(duration * rateWeekSalePrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }

        //3 months rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateQuarterId
        ) {
          const rateQuarterPrice = rate.price / (90 * 86400000);
          if (duration === 90 * 86400000) {
            priceCalculated = Math.round(duration * rateQuarterPrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }

        //year rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateYearId
        ) {
          const rateYearPrice = rate.price / (365 * 86400000);
          if (duration === 365 * 86400000) {
            priceCalculated = Math.round(duration * rateYearPrice);
          } else {
            alert(
              "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
            );
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }
      });

      store.dispatch("GET_PRICESUMMARY", priceCalculated);
      return priceCalculated;
    });

    const orderPlaceFilledUp = computed(() => {
      return (
        Object.keys(selectedCity.value).length &&
        Object.keys(selectedPoint.value).length !== 0
      )
    });

    const orderModelFilledUp = computed(() => {
      return Object.keys(selectedCar.value).length !== 0
    });

    const orderAdditionalFilledUp = computed(() => {
      return (dateStateFrom.value && dateStateTo.value && selectedRate.value)
    });

    //methods
    const changeSelectedTabModel = () => {
      const newSelectedTab = props.tabs[props.selectedId + 1].id;
      context.emit("updateSelectedTab", newSelectedTab);
    };

    const changeSelectedTabAdditional = () => {
      const newSelectedTab = props.tabs[props.selectedId + 2].id;
      context.emit("updateSelectedTab", newSelectedTab);
    };

    const changeSelectedTabSummary = () => {
      const newSelectedTab = props.tabs[props.selectedId + 3].id;
      context.emit("updateSelectedTab", newSelectedTab);
    };

    const calcAddService = (
      priceCalculated,
      priceTank,
      priceBabyChair,
      priceRightHandDrive
    ) => {
      if (selectedTank.value) {
        priceCalculated += priceTank;
      }
      if (selectedBabyChair.value) {
        priceCalculated += priceBabyChair;
      }
      if (selectedRightHandDrive.value) {
        priceCalculated += priceRightHandDrive;
      }
      return priceCalculated;
    };

    const showPopUp = () => {
      const popUpIsActive = true;
      store.dispatch("GET_POPUPCONFIRM", popUpIsActive);
      store.dispatch("POST_ORDER_TO_API");
    };

    return {
      selectedCity,
      selectedPoint,
      selectedCar,
      selectedColor,
      dateStateFrom,
      dateStateTo,
      rentalDuration,
      rateList,
      selectedRate,
      selectedTank,
      selectedBabyChair,
      selectedRightHandDrive,
      getNameRate,
      getPriceSummary,
      orderPlaceFilledUp,
      orderModelFilledUp,
      orderAdditionalFilledUp,
      changeSelectedTabModel,
      changeSelectedTabAdditional,
      changeSelectedTabSummary,
      calcAddService,
      showPopUp,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.total {
  width: 288px;
  padding: 32px 64px 0 32px;
  border-left: 1px solid $color-grey-light;
  height: calc(100vh - 165px);

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    padding: 32px 32px 0 32px;
  }

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    width: 25vw;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    width: 100vw;
    height: auto;
    border: none;
    padding: 16px 0;
  }
}

.total__title {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: right;
  color: $color-title;
  margin-top: 0;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 0 16px;
  }
}

.total-list {
  list-style: none;
  padding: 0;
}

.total__item {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 0 0 16px 0;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 0 16px;
  }
}

.total__item .total__item-title {
  order: 1;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-title;
  margin: 0;
}

.total__item .total__item-value {
  order: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
}

.total__item::after {
  background-image: radial-gradient(
    circle,
    currentcolor 1px,
    transparent 1.5px
  );
  background-position: bottom;
  background-size: 1ex 4.5px;
  background-repeat: space no-repeat;
  content: "";
  flex-grow: 1;
  height: 1em;
  order: 2;
}

.total__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-title;
  margin: 0;
}

.total__price {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: $color-title;
  margin: 32px 0;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 0 16px;
  }
}

.total__price-thin {
  font-weight: 400;
}

.total__button {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: $color-white;
  background: $color-grey-light;
  border-radius: 8px;
  border: none;
  padding: 15px 0;
  width: 100%;

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    font-size: 16px;
  }
}

.total__button_active {
  background: $color-text;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg, #0b934a 2.61%, #026e47 112.6%);
  }

  &:focus {
    background: linear-gradient(90deg, #0b934a 2.61%, #026e47 112.6%);
  }

  &:active {
    background: linear-gradient(90deg, #076432 2.61%, #013c27 112.6%);
  }
}

.button-colored {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
  border-radius: 4px;
}
</style>
