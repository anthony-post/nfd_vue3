<template>
  <header class="sidebar">
    <nav class="navigation">
      <div class="burger-button">
        <vicon
          @click="toggleNav"
          v-show="burgerButton"
          icon-id="icon-bars"
          width="32"
          height="32"
        />
      </div>
      <div class="burger-button burger-button_black">
        <vicon
          @click="toggleNav"
          v-show="burgerButton_Black"
          icon-id="icon-bars-black"
          width="32"
          height="32"
        />
      </div>
      <transition name="nav">
        <div v-show="dropdownNav" class="dropdown-nav">
          <div class="x-button">
            <vicon
              @click="toggleNav"
              v-show="burgerButton"
              icon-id="icon-x"
              width="32"
              height="32"
            />
            <vicon
              @click="toggleNav"
              v-show="burgerButton_Black"
              icon-id="icon-x"
              width="32"
              height="32"
            />
          </div>
          <div class="menu-wrp">
            <ul class="menu">
              <li
                class="menu__item"
                v-for="menuItem in bmMenuList"
                :key="menuItem.id"
              >
                <router-link class="link" :to="{ name: menuItem.link }">{{
                  menuItem.title
                }}</router-link>
              </li>
            </ul>
            <ul class="socialicons">
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
          <div v-if="checkScreen()">
            <VLangButton :checkScreen="checkScreen" />
          </div>
        </div>
      </transition>
    </nav>
    <div v-if="!checkScreen()">
      <VLangButton :checkScreen="checkScreen" />
    </div>
  </header>
</template>

<script>
import Vicon from "@/components/v-icon.vue";
import VLangButton from "@/components/v-lang-button.vue";

export default {
  name: "v-navigation",
  components: {
    Vicon,
    VLangButton,
  },
  data() {
    return {
      burgerButton: true,
      dropdownNav: null,
      windowWidth: null,
      burgerButton_Black: null,
      langButton: true,
      bmMenuList: [
        { id: 1, title: "Парковка", link: "" },
        { id: 2, title: "Страховка", link: "" },
        { id: 3, title: "Бензин", link: "" },
        { id: 4, title: "Обслуживание", link: "" },
      ],
      socialMediaList: [
        { id: 1, iconId: "icon-telegram", width: "32", height: "32", link: "" },
        { id: 2, iconId: "icon-facebook", width: "32", height: "32", link: "" },
        {
          id: 3,
          iconId: "icon-instagram",
          width: "32",
          height: "32",
          link: "",
        },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleNav() {
      this.dropdownNav = !this.dropdownNav;
      this.burgerButton = !this.burgerButton;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 767) {
        this.burgerButton = false;
        return (this.burgerButton_Black = true);
      }
      this.burgerButton = true;
      this.burgerButton_Black = false;
    },
    toggleLangIcon() {
      this.langButton = !this.langButton;
    },
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

  @media #{$media} and (min-width: 320px) and (max-width: 767px) {
    height: 0;
    transition: none;
  }
}

.navigation {
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 32px 0 0 0;
  transition: 0.5s ease all;

  @media #{$media} and (min-width: 320px) and (max-width: 767px) {
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
.socialicons {
  list-style: none;
  margin: 0;
  padding: 0 0 38px 128px;

  @media #{$media} and (min-width: 320px) and (max-width: 767px) {
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

.socialicons {
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
}

.burger-button_black {
  position: fixed;
  top: 16px;
  left: 16px;
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

  @media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
    background: linear-gradient(
      to right,
      #111518 62.3vw,
      rgba(21, 27, 31, 0.81) 40vw
    );
  }
  @media #{$media} and (min-width: 768px) and (max-width: 1023px) {
    background: #111518;
  }
  @media #{$media} and (min-width: 320px) and (max-width: 767px) {
    background: #111518;
  }
}

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
