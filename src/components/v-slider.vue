<template>
  <div class="slider-wrp">
    <ul class="slider-list">
      <li v-for="(slide, index) in sliderList"
          :key="slide.id"
          :index="index"
      >
        <transition :name="slideDirection">
          <div
            class="slider__item"
            v-show="visibleSlide === index"
            :style="slide"
          >
            <div class="slider-content">
              <p class="slider-title">
                {{ slide.title }}
              </p>
              <p class="slider-text">
                {{ slide.text }}
              </p>
              <router-link :to="{ name: '' }">
                <button
                  class="sliderbtn"
                  :class="{
                    sliderbtn_insurance: slide.id === 2,
                    sliderbtn_petrol: slide.id === 3,
                    sliderbtn_service: slide.id === 4,
                  }"
                >
                  <span class="sliderbtn__text">Подробнее</span>
                </button>
              </router-link>
            </div>
          </div>
        </transition>
      </li>
      <div class="arrow-wrp arrow-wrp_prev" @click="changeSlidePrev">
        <vicon
          class="arrow-slide arrow-slide_prev"
          icon-id="icon-arrow-slider-prev"
          width="10"
          height="20"
        />
      </div>
      <div class="arrow-wrp arrow-wrp_next" @click="changeSlideNext">
        <vicon
          class="arrow-slide arrow-slide_next"
          icon-id="icon-arrow-slider-next"
          width="10"
          height="20"
        />
      </div>
      <ul class="pagination-list">
        <li
          class="pagination__item"
          v-for="(slide, index) in sliderList"
          :key="slide.id"
          :index="index"
          :class="{ pagination__item_active: visibleSlide === index }"
        ></li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import Vicon from "@/components/v-icon.vue";

export default {
  name: "v-slider",
  components: {
    Vicon,
  },
  setup() {
    const BASE_SLIDER_ITEM = {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    };

    const sliderList = [
      {
        ...BASE_SLIDER_ITEM,
        backgroundImage: `url(${require("../assets/slide_parking.jpg")})`,
        title: "Бесплатная парковка",
        text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        id: 1,
      },
      {
        ...BASE_SLIDER_ITEM,
        backgroundImage: `url(${require("../assets/slide_insurance.jpg")})`,
        title: "Страховка",
        text: "Полная страховка страховка автомобиля",
        id: 2,
      },
      {
        ...BASE_SLIDER_ITEM,
        backgroundImage: `url(${require("../assets/slide_petrol.jpg")})`,
        title: "Бензин",
        text: "Полный бак на любой заправке города за наш счёт",
        id: 3,
      },
      {
        ...BASE_SLIDER_ITEM,
        backgroundImage: `url(${require("../assets/slide_service.jpg")})`,
        title: "Обслуживание",
        text: "Автомобиль проходит еженедельное ТО",
        id: 4,
      },
    ];

    const visibleSlide = ref(0);
    const slideDirection = ref("");

    function changeSlidePrev() {
      if (visibleSlide.value > 0) {
        visibleSlide.value--;
      }
      slideDirection.value = "right";
    }

    function changeSlideNext() {
      if (visibleSlide.value < sliderList.length - 1) {
        visibleSlide.value++;
      }
      slideDirection.value = "left";
    }

    return {
      sliderList,
      visibleSlide,
      slideDirection,
      changeSlidePrev,
      changeSlideNext,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.slider-wrp {
  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    display: none;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    display: none;
  }
}

.slider-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: 100vh;
  position: relative;
  overflow: hidden; //для анимации слайдера
}

.slider__item {
  height: 100vh;
  display: flex;
  align-items: center;
  //для анимации слайдера
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slider-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 96px 0 96px;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    padding: 0 52px 0 52px;
  }
}

.slider-title {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  color: $color-white;
  margin: 0;
}

.slider-text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 100%;
  color: $color-white;
}

.sliderbtn {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: $color-grey-light;
  background: linear-gradient(90deg, #13493f 0%, #0c7b1b 100%);
  border-radius: 4px;
  border: none;

  &:hover {
    cursor: pointer;
  }
}

.sliderbtn__text {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 1em 2em;
}

.sliderbtn_insurance {
  background: linear-gradient(90deg, #132949 0%, #0c7b67 100%);
}

.sliderbtn_petrol {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
}

.sliderbtn_service {
  background: linear-gradient(90deg, #281349 0%, #720c7b 100%);
}

.arrow-wrp {
  height: 100%;
  width: 64px;
  position: absolute;
  top: 0;

  &:hover {
    background: $color-green;
    opacity: 0.2;
    cursor: pointer;
  }

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    width: 32px;
  }

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    display: none;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    display: none;
  }
}

.arrow-wrp_prev {
  left: 0;
}

.arrow-wrp_next {
  right: 0;
}

.arrow-slide {
  position: absolute;
  top: calc(50% - 20px);

  &:hover {
    cursor: pointer;
  }

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    display: none;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    display: none;
  }
}

.arrow-slide_prev {
  left: calc(50% - 8px);
}

.arrow-slide_next {
  right: calc(50% - 8px);
}

.pagination-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 38px;
  left: calc(50% - 16px);

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    display: none;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    display: none;
  }
}

.pagination__item {
  background: $color-grey-light;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 0 4px;
}

.pagination__item_active {
  background: $color-green;
}

//для анимации слайдера
.left-enter-active {
  animation: leftInAnimation 0.5s ease-in-out;
}

.left-leave-active {
  animation: leftOutAnimation 0.5s ease-in-out;
}

@keyframes leftInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leftOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.right-enter-active {
  animation: rightInAnimation 0.5s ease-in-out;
}

.right-leave-active {
  animation: rightOutAnimation 0.5s ease-in-out;
}

@keyframes rightInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes rightOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
