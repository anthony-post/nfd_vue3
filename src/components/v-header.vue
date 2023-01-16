<template>
  <header class="header">
    <p class="logo header__logo header__logo-order">Need for drive</p>
    <p class="header__map header__map-order">
      <router-link class="city header__city" :to="{ name: '' }">
        <vicon
          class="header__icon"
          icon-id="icon-map"
          width="20"
          height="20"
        /><span>Ульяновск</span>
      </router-link>
    </p>
  </header>
</template>

<script>
import Vicon from "@/components/v-icon.vue";

export default {
  name: "v-header",
  components: {
    Vicon,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    //фиксируем шапку при общем скроле страницы
    position: fixed;
    background-color: $color-white;
    width: 100%;
    z-index: 10;
  }
}

.logo {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  color: $color-green;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    line-height: 100%;
  }
}

.header__logo {
  margin: 32px 0 32px 64px;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    margin: 32px 0 32px 32px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    margin: 16px 16px 0 0;
  }
}

.header__map {
  margin: 32px 64px 32px 0;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    margin: 32px 32px 32px 0;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    margin: 16px 16px 16px 0;
  }
}

.header__icon {
  padding: 0 5px 0 0;
}

.city {
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
  text-decoration: none;
}

.header__city {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
