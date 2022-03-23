<template>
  <router-link class="link" v-show="langButton" :to="{ name: '' }">
    <button
      class="link__langbutton link__langbutton_mobile"
      @click="toggleLangIcon"
    >
      Eng
    </button>
  </router-link>
  <router-link class="link" v-show="!langButton" :to="{ name: '' }">
    <button
      class="link__langbutton link__langbutton_mobile"
      @click="toggleLangIcon"
    >
      Рус
    </button>
  </router-link>
</template>

<script>
import { ref } from "vue";
export default {
  name: "v-lang-button",
  setup() {
    const langButton = ref(true);
    function toggleLangIcon() {
      langButton.value = !langButton.value;
    }
    return { langButton, toggleLangIcon };
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
  border: 1px solid $color-title;
  border-radius: 50%;
  box-sizing: border-box;
  margin: 0 0 20px 0;
  width: 48px;
  height: 48px;
  cursor: pointer;

  &:hover {
    color: $color-grey-light;
    border: 1px solid $color-grey-light;
  }

  &:active {
    border: 1px solid $color-grey-light;
    color: $color-text;
  }
}

.link__langbutton_mobile {
  @media #{$media} and (min-width: 320px) and (max-width: 767px) {
    margin: 0 0 20px 10px;
  }
}
</style>
