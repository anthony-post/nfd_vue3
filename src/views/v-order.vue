<template>
  <div class="order-wrp">
    <Vheader class="order-center" />
    <OrderWindow />
  </div>
</template>

<script>
import Vheader from "@/components/v-header.vue";
import OrderWindow from "@/components/order-window.vue";

export default {
  name: "v-order",
  components: {
    Vheader,
    OrderWindow,
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
