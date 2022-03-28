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
    </ul>
    <!--Цена-->
    <p class="total__price" v-if="selectedCar.name">
      Цена:
      <span class="total__price total__price-thin"
        >от {{ selectedCar.priceMin }} до
        {{ selectedCar.priceMax }} &#8381;</span
      >
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
    const dateFrom = computed(() => store.state.dateFrom);
    const dateTo = computed(() => store.state.dateTo);
    const selectedRate = computed(() => store.state.selectedRate);

    const orderPlaceFilledUp = computed(() => {
      if (
        Object.keys(selectedCity.value).length &&
        Object.keys(selectedPoint.value).length !== 0
      ) {
        return true;
      }
      return false;
    });

    const orderModelFilledUp = computed(() => {
      if (Object.keys(selectedCar.value).length !== 0) {
        return true;
      }
      return false;
    });

    const orderAdditionalFilledUp = computed(() => {
      if (dateFrom.value && dateTo.value && selectedRate.value) {
        return true;
      }
      return false;
    });

    //methods
    function changeSelectedTabModel() {
      const newSelectedTab = props.tabs[props.selectedId + 1].id;
      context.emit("updateSelectedTab", newSelectedTab);
    }

    function changeSelectedTabAdditional() {
      const newSelectedTab = props.tabs[props.selectedId + 2].id;
      context.emit("updateSelectedTab", newSelectedTab);
    }

    function changeSelectedTabSummary() {
      const newSelectedTab = props.tabs[props.selectedId + 3].id;
      context.emit("updateSelectedTab", newSelectedTab);
    }

    return {
      selectedCity,
      selectedPoint,
      selectedCar,
      selectedColor,
      dateFrom,
      dateTo,
      selectedRate,
      orderPlaceFilledUp,
      orderModelFilledUp,
      orderAdditionalFilledUp,
      changeSelectedTabModel,
      changeSelectedTabAdditional,
      changeSelectedTabSummary,
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
