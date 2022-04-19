<template>
  <label class="radio-item" :class="{ item_active: isChecked }">
    {{ label }}
    <input
      class="radio__input"
      type="radio"
      :checked="isChecked"
      :value="value"
      @change="$emit('update:checkedValue', $event.target.value)"
    />
    <span class="checkmark"></span>
  </label>
</template>

<script>
import { computed } from "vue";

export default {
  name: "v-radio",
  props: {
    label: {
      type: String,
      default: "",
      required: true,
    },
    checkedValue: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const isChecked = computed(() => props.checkedValue === props.value);

    return {
      isChecked,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

/* Customize the label (the wrapper) */
.radio-item {
  display: block;
  position: relative;
  padding-left: 20px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
  margin-right: 10px;
}

.item_active {
  color: $color-black;
}

/* Hide the browser's default radio button */
.radio__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 1.5px;
  left: 0;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 1px solid $color-grey;
  box-sizing: border-box;
}

/* On mouse-over */
.radio__input:hover ~ .checkmark {
  border: 1px solid gray;
}

/* When the radio button is checked */
.radio__input:checked ~ .checkmark {
  border: 3px solid $color-text;
}
</style>
