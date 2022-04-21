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
    });

    onUnmounted(() => {
      observer.value.disconnect();
    });

    return {
      observer,
    };
  },
};
</script>
