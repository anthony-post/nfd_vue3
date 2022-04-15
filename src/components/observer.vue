<template>
  <div class="observer" />
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  props: ["options"],
  setup(props, context) {
    const observer = ref(null);

    onMounted(() => {
      const options = props.options || {};

      observer.value = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
          context.emit("intersect");
        }
      }, options);

      const rootDiv = document.querySelector(".observer");
      observer.value.observe(rootDiv);
      // observer.value.observe($el);
    });

    onUnmounted(() => {
      observer.value.disconnect();
    });

    return {
      observer,
    };
  },
  // data: () => ({
  //   observer: null
  // }),
  // mounted() {
  //   const options = this.options || {};
  //   this.observer = new IntersectionObserver(([entry]) => {
  //     if (entry && entry.isIntersecting) {
  //       this.$emit('intersect');
  //     }
  //   }, options);

  //   this.observer.observe(this.$el);
  // },
  // destroyed() {
  //   observer.disconnect();
  // }
};
</script>
