<template>
  <div class="dropdown input-wrp">
    <label class="input-block__label" :for="name">{{ label }}</label>
    <!-- Dropdown Input -->
    <input
      class="dropdown-input input-block__input"
      v-model.trim="inputValue"
      :name="name"
      :placeholder="placeholder"
      type="text"
      @focus="isDropDownVisible = true"
    /><span
      class="input-block__cross-icon"
      v-if="inputValue"
      @click="resetSelection"
      ><vicon icon-id="icon-cross" width="8" height="8" />
    </span>
    <!-- Dropdown List -->
    <ul class="dropdown-list" v-show="isDropDownVisible">
      <li
        class="dropdown-item"
        v-for="item in filteredList"
        :key="item.id"
        @click="selectItem(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, computed, onMounted, watch, toRef } from "vue";
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
    //подставляет в инпут выбранное значение из store, если оно было выбрано и происходило переключение по вкладкам
    onMounted(() => {
      if (Object.keys(props.selectedItem).length !== 0) {
        inputValue.value = props.selectedItem.name;
      } else {
        inputValue.value = "";
      }
    });
    //отслеживает пустой объект в store.
    //если объект пустой, то значение инпута сбрасывается.
    //необходимо для того, чтобы в случае сброса города, пункт выдачи тоже сбрасывался
    watch(
      toRef(props, "selectedItem"),
      () => {
        if (Object.keys(props.selectedItem).length === 0) {
          inputValue.value = "";
        }
      },
      { deep: true }
    );

    const inputValue = ref("");
    const isDropDownVisible = ref(null);

    const filteredList = computed(() => {
      let currentInput = inputValue.value.toLowerCase();
      if (currentInput) {
        return props.itemList.filter((item) => {
          if (item?.name) {
            let currentName = item.name.toLowerCase();
            return currentName.startsWith(currentInput);
          }
        });
      } else {
        return props.itemList;
      }
    });

    function selectItem(chosenItem) {
      if (chosenItem) {
        inputValue.value = chosenItem.name;
      } else {
        inputValue.value = "";
      }
      isDropDownVisible.value = false;
      context.emit("on-item-selected", chosenItem);
    }

    function resetSelection() {
      inputValue.value = "";
      context.emit("on-item-reset");
    }

    return {
      inputValue,
      isDropDownVisible,
      filteredList,
      selectItem,
      resetSelection,
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
