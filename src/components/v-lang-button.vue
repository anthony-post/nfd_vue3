<template>
  <router-link class="link" v-show="langButton" :to="{ name: '' }">
    <button
      class="link__langbutton"
      :class="{ link__langbutton_mobile: checkScreen() }"
      @click="toggleLangIcon"
    >
      Eng
    </button>
  </router-link>
  <router-link class="link" v-show="!langButton" :to="{ name: '' }">
    <button
      class="link__langbutton"
      :class="{ link__langbutton_mobile: checkScreen() }"
      @click="toggleLangIcon"
    >
      Рус
    </button>
  </router-link>
</template>

<script>
export default {
  name: "v-lang-button",
  props: {
    checkScreen: {
      type: Function,
    },
  },
  data() {
    return {
      langButton: true,
    };
  },
  methods: {
    toggleLangIcon() {
      this.langButton = !this.langButton;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.link {
  text-decoration: none;
}

.link__langbutton {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 15px;
  color: $color-text;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: transparent;
  cursor: pointer;
  margin: 0 0 20px 0;
  width: 48px;
  height: 48px;
  border: 1px solid $color-title;
  border-radius: 50%;
  box-sizing: border-box;

  &:hover {
    color: $color-grey-light;
    border: 1px solid $color-grey-light;
  }

  &:active {
    border: 1px solid $color-grey-light;
    color: $color-text;
  }

  @media #{$media} and (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
}

.link__langbutton_mobile {
  @media #{$media} and (min-width: 320px) and (max-width: 767px) {
    display: block;
    margin: 0 0 20px 10px;
  }
}
</style>
