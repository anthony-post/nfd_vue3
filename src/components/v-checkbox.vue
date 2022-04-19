<template>
  <label class="checkbox-item" :class="{ item_active: isChecked }">
    {{ label }}
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="isChecked"
      :value="value"
      @change="updateInput"
    />
    <span class="checkmark-box"></span>
  </label>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    value: { type: String },
    modelValue: { type: String, default: "" },
    label: { type: String, required: true },
    trueValue: { default: true },
    falseValue: { default: false },
  },

  setup(props, context) {
    //computed
    const isChecked = computed(() => {
      if (props.modelValue instanceof Array) {
        return props.modelValue.includes(props.value);
      }
      return props.modelValue === props.trueValue;
    });

    //methods
    const updateInput = (event) => {
      const isChecked = event.target.checked;
      if (props.modelValue instanceof Array) {
        const newValue = [...props.modelValue];
        if (isChecked) {
          newValue.push(props.value);
        } else {
          newValue.splice(newValue.indexOf(props.value), 1);
        }
        context.emit("update:modelValue", newValue);
      } else {
        context.emit(
          "update:modelValue",
          isChecked ? props.trueValue : props.falseValue
        );
      }
    };

    return {
      isChecked,
      updateInput,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.checkbox-item {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 6px;
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
}

.item_active {
  color: $color-black;
}

.checkbox__input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark-box {
  position: absolute;
  top: 0;
  left: 0;
  height: 12px;
  width: 12px;
  border: 1px solid $color-grey;
}

.checkbox-item:hover input ~ .checkmark-box {
  border: 1px solid $color-text;
}

.checkbox__input:checked ~ .checkmark-box {
  border: 1px solid $color-text;
}

.checkmark-box:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox__input:checked ~ .checkmark-box:after {
  display: block;
}

.checkbox-item .checkmark-box:after {
  left: 5px;
  top: -3px;
  width: 5px;
  height: 10px;
  border: solid $color-black;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
