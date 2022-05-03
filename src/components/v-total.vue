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
    <!--Кнопки-->
    <div v-for="button in buttons" :key="button.id">
      <button
        v-if="selectedTab === button.id"
        :class="{ total__button_active: !isButtonDisabled(button) }"
        :disabled="isButtonDisabled(button)"
        @click="buttonAction(button)"
        class="total__button"
      >
        {{ button.name }}
      </button>
    </div>
    <PopUp v-if="!popUpIsActive" @close-popup="closePopUp" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import PopUp from "@/components/pop-up.vue";

export default {
  name: "v-total",
  components: {
    PopUp,
  },
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

    const buttons = [
      { id: "order-place", name: "Выбрать модель" },
      { id: "order-model", name: "Дополнительно" },
      { id: "order-additional", name: "Итого" },
      { id: "order-summary", name: "Заказать" },
    ];

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
      return rateList.value.reduce((accumulator, rate) => {
        if(rate.id === selectedRate.value) {
          accumulator = rate.rateTypeId.name;
        }
        return accumulator;
      }, '');
    });

    //подсчет итоговой суммы заказа
    const getPriceSummary = computed(() => {
      const rateDayId = "62593cac73b61100181028ee";
      const rateWeekId = "62593cca73b61100181028ef";
      const rateMonthId = "6259003d73b61100181028d9";
      const rateQuarterSaleId = "62593cf073b61100181028f1";
      const rateQuarterId = "626ac00373b611001810412b";
      const rateYearId = "62593d0273b61100181028f2";
      const priceTank = 500;
      const priceBabyChair = 200;
      const priceRightHandDrive = 1600;
      const day = 1;
      const week = 7;
      const month = 30;
      const qourter = 90;
      const quorterSale = 93;
      const year = 365;
      const dayMs = 86400000;
      const duration = dateStateTo.value - dateStateFrom.value;
      let priceCalculated;

      rateList.value.forEach((rate) => {

        //day rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateDayId
        ) {
          if (duration >= dayMs && duration < week * dayMs) {
            priceCalculated = calcPrice(
              rate.price,
              day,
              duration
            );
          } else {
            resetRateAndAdditional();
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }

        //week rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateWeekId
        ) {
          if (duration === week * dayMs) {
            priceCalculated = calcPrice(
              rate.price,
              week,
              duration
            );
          } else {
            resetRateAndAdditional();
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }

        //month rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateMonthId
        ) {
          if (duration === month * dayMs) {
            priceCalculated = calcPrice(
              rate.price,
              month,
              duration
            );
          } else {
            resetRateAndAdditional();
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
          if (duration === qourter * dayMs) {
            priceCalculated = calcPrice(
              rate.price,
              qourter,
              duration
            );
          } else {
            resetRateAndAdditional();
          }
          priceCalculated = calcAddService(
            priceCalculated,
            priceTank,
            priceBabyChair,
            priceRightHandDrive
          );
        }

        //3 months sale rate
        if (
          selectedRate.value === rate.id &&
          selectedRate.value === rateQuarterSaleId
        ) {
          if (duration === quorterSale * dayMs) {
            priceCalculated = calcPrice(
              rate.price,
              qourter,
              duration
            );
          } else {
            resetRateAndAdditional();
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
          if (duration === year * dayMs) {
            priceCalculated = calcPrice(
              rate.price,
              year,
              duration
            );
          } else {
            resetRateAndAdditional();
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

    const orderPlaceFilledUp = computed(() => 
        Object.keys(selectedCity.value).length &&
        Object.keys(selectedPoint.value).length !== 0
    );

    const orderModelFilledUp = computed(() => 
      Object.keys(selectedCar.value).length !== 0
    );

    const orderAdditionalFilledUp = computed(() => 
      dateStateFrom.value && dateStateTo.value && selectedRate.value
    );

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

    const calcPrice = (ratePrice, durationDays, durationMs) => {
      const durationPrice = ratePrice / (durationDays * 86400000);
      const priceSummary = Math.round(durationMs * durationPrice);
      return priceSummary;
    };

    const resetRateAndAdditional = () => {
      store.dispatch("GET_CHECKEDRATE");
      store.dispatch("GET_CHECKEDTANK");
      store.dispatch("GET_CHECKEDBABYCHAIR");
      store.dispatch("GET_CHECKEDRIGHTHANDDRIVE");
      alert(
        "Выберите, пожалуйста, другой тариф или укажите другой диапазон времени"
      );
    };

    const isButtonDisabled = button => {
      if(button.id === props.tabs[0].id) {
        return !orderPlaceFilledUp.value;
      }

      if(button.id === props.tabs[1].id) {
        return !orderModelFilledUp.value;
      }

      if(button.id === props.tabs[2].id) {
        return !orderAdditionalFilledUp.value;
      }
    };

    const buttonAction = button => {
      if(button.id === props.tabs[0].id) {
        changeSelectedTabModel();
      }

      if(button.id === props.tabs[1].id) {
        changeSelectedTabAdditional();
      }

      if(button.id === props.tabs[2].id) {
        changeSelectedTabSummary();
      }

      if(button.id === props.tabs[3].id) {
        showPopUp();
      }
    };

    //pop-up
    const popUpIsActive = ref(true);
    const showPopUp = () => {
      popUpIsActive.value = !popUpIsActive.value;
      store.dispatch("POST_ORDER_TO_API");
    };
    const closePopUp = () => {
      popUpIsActive.value = !popUpIsActive.value;
    };

    return {
      buttons,
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
      calcPrice,
      resetRateAndAdditional,
      popUpIsActive,
      showPopUp,
      closePopUp,
      isButtonDisabled,
      buttonAction,
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
