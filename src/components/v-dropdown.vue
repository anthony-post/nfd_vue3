<template>
  <div class="dropdown input-wrp">
    <label class="input-block__label" :for="name">{{ label }}</label>
    <!-- Dropdown Input -->
    <input
      class="dropdown-input input-block__input"
      type="text"
      :name="name"
      :placeholder="placeholder"
      v-if="isItemSelected"
      v-model.trim="inputValue"
    />
    <!-- Dropdown Selected Input -->
    <input
      v-else
      class="dropdown-input input-block__input"
      type="text"
      :name="name"
      :value="selectedItem.name"
    /><span
      class="input-block__cross-icon"
      v-if="!isItemSelected"
      @click="resetSelection"
      ><vicon icon-id="icon-cross" width="8" height="8"
    /></span>
    <!-- Dropdown List -->
    <ul class="dropdown-list" v-show="inputValue">
      <li
        class="dropdown-item"
        v-show="itemVisible(item)"
        v-for="item in itemList"
        :key="item.id"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import Vicon from "@/components/v-icon.vue";

export default {
  name: "v-dropdown",
  components: {
    Vicon,
  },
  props: {
    itemList: {
      type: Array,
      required: true,
    },
    selectedItem: {
      type: Object,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const inputValue = ref("");

    const isItemSelected = computed(() => {
      return Object.keys(props.selectedItem).length === 0;
    });

    function resetSelection() {
      context.emit("on-item-reset");
    }

    function selectItem(chosenItem) {
      inputValue.value = ""; //обнуляем для того, чтобы список городов полученный по API не отображался по-умолчанию
      context.emit("on-item-selected", chosenItem);
    }

    function itemVisible(item) {
      let currentName = item.name.toLowerCase();
      let currentInput = inputValue.value.toLowerCase();
      return currentName.startsWith(currentInput); //поиск с начала ввода
    }

    return {
      inputValue,
      isItemSelected,
      resetSelection,
      selectItem,
      itemVisible,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.dropdown {
  position: relative;
}

.input-wrp {
  padding: 7px 0;
}

.input-block__label {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color-black;
  margin: 0 5px 0 0;
}

.input-block__input {
  width: 224px;
  border: none;
  border-bottom: 1px solid $color-grey;
  position: relative;
}

.input-block__cross-icon {
  position: absolute;
  right: 10px;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    right: 30px;
  }
}

.dropdown-list {
  list-style-type: none;
  padding: 0;
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin: 4px 0 0 0;
  overflow-y: auto;
  z-index: 1;
  background: $color-white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.dropdown-item {
  display: flex;
  padding: 11px 16px;
  cursor: pointer;

  &:hover {
    background: #edf2f7;
  }
}
</style>
