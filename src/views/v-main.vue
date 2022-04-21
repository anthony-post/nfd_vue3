<template>
  <div class="main-wrp">
    <div class="left-wrp">
      <Vheader />
      <div class="about">
        <h1 class="about__title">Каршеринг</h1>
        <p class="about__title about__title_green">Need for drive</p>
        <p class="about__text">Поминутная аренда авто твоего города</p>
        <router-link :to="{ name: 'v-order' }">
          <button class="about__button">Забронировать</button>
        </router-link>
      </div>
      <footer class="footer">
        <p class="footer__copyright">&#169; 2016-2019 «Need for drive»</p>
        <address class="footer__phone">
          <a class="footer__link" href="tel:+74952342244">8 (495) 234-22-44</a>
        </address>
      </footer>
    </div>
    <div class="right-wrp">
      <Vslider />
    </div>
  </div>
</template>

<script>
import Vheader from "@/components/v-header.vue";
import Vslider from "@/components/v-slider.vue";

export default {
  name: "v-main",
  components: {
    Vheader,
    Vslider,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.main-wrp {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100vw - 64px);
  height: 100vh;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    width: 100vw;
  }
}

.left-wrp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    width: 60%;
  }

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    width: 100%;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    width: 100%;
    margin: 0;
  }
}

.right-wrp {
  width: 50%;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    width: 40%;
  }

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    width: 0%;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    width: 0;
  }
}

.about {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 150px 0 0 0;
  }
}

.about__title {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 70px;
  line-height: 66px;
  color: $color-title;
  margin: 0 64px;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    margin: 0 32px 0 32px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    margin: 0 16px;
    font-size: 32px;
    line-height: 100%;
  }
}

.about__title_green {
  color: $color-green;
}

.about__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  color: $color-grey;
  padding: 1em 0 2em 0;
  margin: 0 64px;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    margin: 0 32px 0 32px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    margin: 0 16px;
    font-size: 18px;
    line-height: 21px;
  }
}

.about__button {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: $color-white;
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  background-blend-mode: darken;
  border-radius: 8px;
  border: none;
  padding: 1em 3em;
  margin: 0 64px;
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

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    margin: 0 32px 0 32px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    width: 100vw;
    border-radius: 0px;
    margin: 0;
  }
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    background: $color;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}

.footer__copyright {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: $color-grey;
  margin: 0 0 32px 64px;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    margin: 0 0 32px 32px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    margin: 0 16px 16px 0;
    color: $color-grey-light;
    order: 1;
  }
}

.footer__phone {
  margin: 0 64px 32px 0;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    margin: 0 32px 32px 0;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    margin: 16px 16px 8px 0;
  }
}

.footer__link {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 15px;
  color: $color-title;
  text-decoration: none;

  &:hover {
    color: $color-text;
  }

  &:active {
    color: $color-text;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    color: $color-text;
    order: 0;

    &:hover {
      color: $color-grey-light;
    }

    &:active {
      color: $color-grey-light;
    }
  }
}
</style>
