<template>
  <div class="order-wrp">
    <Vheader class="order-center" />
    <Vtabs />
  </div>
</template>

<script>
import Vheader from "@/components/v-header.vue";
import Vtabs from "@/components/v-tabs.vue";

export default {
  name: "v-order",
  components: {
    Vheader,
    Vtabs,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.order-wrp {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
</style>
