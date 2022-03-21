<template>
  <div class="wrapper">
    <Vnavigation />
    <router-view />
  </div>
</template>

<script>
import Vnavigation from "@/components/v-navigation.vue";

export default {
  components: {
    Vnavigation,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.wrapper {
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  min-width: 1440px;

  @media #{$media} and (min-width: 1024px) and (max-width: 1439px) {
    min-width: 1024px;
    max-width: 1439px;
  }

  @media #{$media} and (min-width: 768px) and (max-width: 1023px) {
    min-width: 768px;
    max-width: 1023px;
  }

  @media #{$media} and (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 320px;
    max-width: 767px;
    height: calc(100vh - 80px);
    height: -webkit-fill-available;
  }
}
</style>
