<template>
  <header class="sidebar">
    <div class="navigation-wrp">
      <div class="burger-button" @click="toggleNav">
        <span class="burger-button__line"></span>
        <span class="burger-button__line"></span>
        <span class="burger-button__line"></span>
      </div>
      <transition name="nav">
        <div class="dropdown-nav" v-show="dropdownNav">
          <div class="x-button">
            <vicon icon-id="icon-x" width="32" height="32" @click="toggleNav" />
          </div>
          <div class="menu-wrp">
            <nav>
              <ul class="menu">
                <li
                  class="menu__item"
                  v-for="menuItem in bmMenuList"
                  :key="menuItem.id"
                >
                  <router-link class="link" :to="{ name: menuItem.link }">
                    {{ menuItem.title }}
                  </router-link>
                </li>
              </ul>
            </nav>
            <ul class="socialicons-list">
              <li
                class="socialicons__item"
                v-for="icon in socialMediaList"
                :key="icon.id"
              >
                <router-link class="link" :to="{ name: icon.link }">
                  <vicon
                    class="icon_green"
                    :icon-id="icon.iconId"
                    :width="icon.width"
                    :height="icon.height"
                  />
                </router-link>
              </li>
            </ul>
          </div>
          <div class="langbutton-mobile">
            <VLangButton />
          </div>
        </div>
      </transition>
    </div>
    <div class="langbutton">
      <VLangButton />
    </div>
  </header>
</template>

<script>
import { ref } from "vue";
import Vicon from "@/components/v-icon.vue";
import VLangButton from "@/components/v-lang-button.vue";

export default {
  name: "v-navigation",
  components: {
    Vicon,
    VLangButton,
  },
  setup() {
    const bmMenuList = [
      { id: 1, title: "Парковка", link: "" },
      { id: 2, title: "Страховка", link: "" },
      { id: 3, title: "Бензин", link: "" },
      { id: 4, title: "Обслуживание", link: "" },
    ];
    const socialMediaList = [
      { id: 1, iconId: "icon-telegram", width: "32", height: "32", link: "" },
    ];

    const burgerButton = ref(true);
    const dropdownNav = ref(null);

    function toggleNav() {
      dropdownNav.value = !dropdownNav.value;
      burgerButton.value = !burgerButton.value;
    }

    return {
      burgerButton,
      dropdownNav,
      bmMenuList,
      socialMediaList,
      toggleNav,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #151b1f;
  z-index: 99;
  min-width: 64px;
  height: 100vh;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    height: 0;
    transition: none;
  }
}

.navigation-wrp {
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 32px 0 0 0;
  transition: 0.5s ease all;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    margin: 0;
  }
}

.menu-wrp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.link {
  text-decoration: none;
}

.menu,
.socialicons-list {
  list-style: none;
  margin: 0;
  padding: 0 0 38px 128px;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 0 0 38px 28px;
  }
}

.menu__item {
  padding: 0 0 19px 0;
}

.menu .link {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  color: $color-white;
  text-transform: uppercase;

  &:hover {
    color: $color-green;
  }
}

.socialicons-list {
  display: flex;
  flex-direction: row;
}

.socialicons__item {
  padding: 0 24px 0 0;
}

.icon_green:hover {
  fill: $color-green;
}

.burger-button {
  cursor: pointer;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    position: fixed;
    top: 16px;
    left: 16px;
  }
}

.burger-button__line {
  display: block;
  border: 2px solid $color-white;
  border-radius: 5px;
  width: 24px;
  margin: 5px 0;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    border: 2px solid $color-black;
  }
}

.x-button {
  margin: 32px 0 0 16px;
  cursor: pointer;
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    #111518 52.3vw,
    rgba(21, 27, 31, 0.81) 50vw
  );

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    background: linear-gradient(
      to right,
      #111518 62.3vw,
      rgba(21, 27, 31, 0.81) 40vw
    );
  }
  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    background: #111518;
  }
  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    background: #111518;
  }
}

.langbutton {
  display: block;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    display: none;
  }
}

.langbutton-mobile {
  display: none;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    display: block;
  }
}

//для анимации меню
.nav-enter-active,
.nav-leave-active {
  transition: 1s ease all;
}

.nav-enter-from,
.nav-leave-to {
  transform: translateX(-100%);
}

.nav-enter-to {
  transform: translateX(0);
}
</style>
