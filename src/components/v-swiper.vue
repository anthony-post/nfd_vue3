<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="my-swiper"
  >
    <swiper-slide v-for="slide in sliderList" :key="slide.id" :style="slide">
      <div class="slider-about">
        <p class="slider-title">
          {{ slide.title }}
        </p>
        <p class="slider-text">
          {{ slide.text }}
        </p>
        <button class="sliderbtn" v-if="slide.id === 1">
          <span class="sliderbtn__text">Подробнее</span>
        </button>
        <button
          class="sliderbtn"
          v-if="slide.id === 2"
          :class="{ sliderbtn_insurance: slide.id === 2 }"
        >
          <span class="sliderbtn__text">Подробнее</span>
        </button>
        <button
          class="sliderbtn"
          v-if="slide.id === 3"
          :class="{ sliderbtn_petrol: slide.id === 3 }"
        >
          <span class="sliderbtn__text">Подробнее</span>
        </button>
        <button
          class="sliderbtn"
          v-if="slide.id === 4"
          :class="{ sliderbtn_service: slide.id === 4 }"
        >
          <span class="sliderbtn__text">Подробнее</span>
        </button>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const BASE_SLIDER_ITEM = {
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
};

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderList: [
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
      ],
    };
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

//START swiper styles
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.swiper-button-prev,
.swiper-button-next {
  color: $color-grey-light;
  height: 100vh;
  width: 64px;
  top: 0%;
  margin: 0;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 18px;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background: $color-text;
  opacity: 0.2;
}

.swiper-button-prev {
  left: 0px;
}

.swiper-button-next {
  right: 0px;
}

.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 32px;
}

.swiper-pagination-bullet {
  background: $color-grey-light;
  opacity: 1;
}

.swiper-pagination-bullet-active {
  background: $color-text;
}
//END swiper styles

.slider-about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 96px 0 96px;
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
  cursor: pointer;
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
</style>
