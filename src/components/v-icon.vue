<template>
  <svg class="icon" :width="width" :height="height">
    <use :xlink:href="iconPath" />
  </svg>
</template>

<script>
import spriteUrl from "@/assets/sprite.svg";

export default {
  name: "v-icon",
  props: {
    iconId: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 32,
    },
    height: {
      type: [Number, String],
      default: 32,
    },
  },
  computed: {
    iconPath() {
      return `${spriteUrl}#${this.iconId}`;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.icon {
  fill: $color-white;
  display: inline-block;
  vertical-align: baseline;
  // margin: 0 20px 0 0;
}
</style>
