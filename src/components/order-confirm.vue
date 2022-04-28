<!--TO DO-->
<template>
    <div class="order-wrp">
        <Vheader class="order-center" />
        Страница с подтвержденным заказом
    </div>
</template>

<script>
import Vheader from "@/components/v-header.vue";

export default {
  name: "order-confirm",
  components: {
    Vheader,
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.order-wrp {
  display: flex;
  flex-direction: column;
  width: 100vw;
}
    
</style>