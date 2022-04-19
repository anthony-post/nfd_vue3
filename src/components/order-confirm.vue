<template>
  <div class="order-wrp">
    <Vheader class="order-center" />
    <div class="tabs">
      <div class="tabs__border">
        <ul class="tab-list order-center">
          <li class="tab__item">Заказ номер {{ orderId }}</li>
        </ul>
      </div>
      <div class="order">
        <div class="order__window">
          <p class="order__title">Ваш заказ подтверждён</p>
          <!--Order-->
          <div class="summary__wrp">
            <div>
              <p class="summary__car-name" v-if="orderConfirmed?.carId">
                {{ orderConfirmed.carId.name }}
              </p>
              <div class="car-number__wrp">
                <p class="summary__car-number" v-if="orderConfirmed?.carId">
                  {{ orderConfirmed.carId.number }}
                </p>
              </div>
              <p class="summary__additional" v-if="orderConfirmed?.isFullTank">
                Топливо <span class="summary__selected-value">100%</span>
              </p>
              <p
                class="summary__additional"
                v-if="orderConfirmed?.isNeedChildChair"
              >
                Детское кресло <span class="summary__selected-value">Да</span>
              </p>
              <p
                class="summary__additional"
                v-if="orderConfirmed?.isRightWheel"
              >
                Правый руль <span class="summary__selected-value">Да</span>
              </p>
              <p class="summary__additional">
                Доступна с
                <span class="summary__selected-value">{{ convertToDate }}</span>
              </p>
            </div>
            <img
              class="car__img"
              v-if="orderConfirmed?.carId"
              :src="orderConfirmed?.carId?.thumbnail?.path"
              :alt="orderConfirmed?.carId?.thumbnail?.originalname"
            />
          </div>
        </div>
        <!---Total--->
        <div class="total">
          <p class="total__title">Ваш заказ:</p>
          <ul class="total__list">
            <li>
              <span class="item__title">Пункт выдачи</span>
              <div class="item__value">
                <span v-if="orderConfirmed?.cityId">{{ orderConfirmed.cityId.name }}</span>
                <span v-if="orderConfirmed?.pointId">{{ orderConfirmed.pointId.name }}</span>
              </div>
            </li>
            <li v-if="orderConfirmed?.carId">
              <span class="item__title">Модель</span>
              <span class="item__value">{{ orderConfirmed.carId.name }}</span>
            </li>
            <li v-if="orderConfirmed?.color">
              <span class="item__title">Цвет</span>
              <span class="item__value">{{ orderConfirmed.color }}</span>
            </li>
            <li v-if="rentalDuration">
              <span class="item__title">Длительность аренд</span>
              <span class="item__value" v-if="rentalDuration.days">{{ rentalDuration.days }}д</span>
              <span class="item__value" v-if="rentalDuration.hours">{{ rentalDuration.hours }}ч</span>
            </li>
            <li v-if="orderConfirmed?.rateId">
              <span class="item__title">Тариф</span>
              <span class="item__value">{{ orderConfirmed.rateId.rateTypeId.name }}</span>
            </li>
            <li v-if="orderConfirmed?.isFullTank">
              <span class="item__title">Полный бак</span>
              <span class="item__value">Да</span>
            </li>
            <li v-if="orderConfirmed?.isNeedChildChair">
              <span class="item__title">Детское кресло</span>
              <span class="item__value">Да</span>
            </li>
            <li v-if="orderConfirmed?.isRightWheel">
              <span class="item__title">Правый руль</span>
              <span class="item__value">Да</span>
            </li>
          </ul>
          <!--Цена-->
          <p class="total__price">
            Цена:
            <span class="total__price total__price-thin">{{ orderConfirmed.price }} &#8381;</span>
          </p>
          <!--Кнопка Отменить-->
          <router-link :to="{ name: 'v-order' }">
            <button
              class="total__button total__button_active button-colored"
              @click="cancelOrder"
            >
              Отменить
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Vheader from "@/components/v-header.vue";

export default {
  name: "order-confirm",
  components: {
    Vheader,
  },
  setup() {
    const store = useStore();

    //computed
    const orderId = computed(() => store.state.orderId);
    const rentalDuration = computed(() => store.state.rentalDuration);
    const orderConfirmed = computed(() => store.state.orderConfirmed);
    //конвертирование даты из мс в строку
    const convertToDate = computed(() => {
      const mlsDate = orderConfirmed.value.dateFrom;
      const dateObj = new Date(mlsDate);

      let dd = dateObj.getDate();
      if (dd < 10) dd = "0" + dd;

      let mm = dateObj.getMonth() + 1;
      if (mm < 10) mm = "0" + mm;

      let yy = dateObj.getFullYear();
      if (yy < 10) yy = "0" + yy;

      let hh = dateObj.getHours();
      if (hh < 10) hh = "0" + hh;

      let min = dateObj.getMinutes();
      if (min < 10) min = "0" + min;

      return dd + "." + mm + "." + yy + " " + hh + ":" + min;
    });

    //methods
    const getOrderFromApi = () => store.dispatch("GET_ORDER_FROM_API");
    const putCancelOrderToApi = () =>
      store.dispatch("PUT_CANCEL_ORDERID_TO_API");

    const cancelOrder = () => {
      putCancelOrderToApi();

      store.dispatch("GET_ORDERID");
      store.dispatch("GET_ORDERCONFIRMED");

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
    };

    //API
    getOrderFromApi();

    return {
      orderId,
      rentalDuration,
      orderConfirmed,
      convertToDate,
      getOrderFromApi,
      putCancelOrderToApi,
      cancelOrder,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.order-wrp {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.tabs__border {
  border-top: 1px solid $color-grey-light;
  border-bottom: 1px solid $color-grey-light;
}

.tab-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0 64px;
  margin: 0;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    padding: 0 32px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 0 16px;
    flex-wrap: wrap;
  }
}

.tab__item {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: $color-black;
  padding: 8px 0;
}

.tab__item-icon {
  padding: 0 0 0 20px;
}

.tab__item_active {
  color: $color-black;
}

.order {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    flex-wrap: wrap;
  }
}

.order__window {
  flex-basis: 70%;
  padding: 32px 150px 0 64px;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    padding: 32px 32px 0 32px;
  }

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    padding: 32px 32px 0 64px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    flex-basis: 100%;
    padding: 16px 16px 0 16px;
  }
}

.order__title {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: $color-black;
  margin: 0;
}

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
  color: $color-black;
}

.summary__car-name {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: $color-black;
}

.car-number__wrp {
  border: 1px solid $color-grey;
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
  color: $color-black;
  margin: 0;
}

.summary__additional {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: $color-black;
}

.summary__selected-value {
  font-weight: 300;
}

.car__img {
  max-width: 50%;
}

.total {
  width: 288px;
  padding: 32px 64px 0 32px;
  border-left: 1px solid $color-grey-light;
  height: calc(100vh - 180px);

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
  color: $color-black;
  margin-top: 0;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 0 16px;
  }
}

.total__list {
  list-style: none;
  padding: 0;
}

.total__list li {
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

.total__list li .item__title {
  order: 1;
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-black;
  margin: 0;
}

.total__list li .item__value {
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

.total__list li::after {
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
  color: $color-black;
}

.total__price {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: $color-black;

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
  background: $color-black;
  cursor: pointer;
}

.button-colored {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
  border-radius: 4px;
}
</style>
