<template>
  <div class="select">
    <div class="select__text pretext">{{ pretext }}</div>
    <div class="select-block">
      <p
        class="select__title select__text"
        :class="{ placeholder: selectedDate === 'Введите дату и время...' }"
      >
        <!--делает видимым/скрытым список с опциями-->
        <span
          class="select__text-inside"
          @click="areOptionsVisible = !areOptionsVisible"
        >{{ selectedDate }} {{ selectedTime }}
        </span>
        <span v-if="selectedDate !== 'Введите дату и время...'" @click="resetOption">
          <vicon icon-id="icon-cross" width="8" height="8"/>
        </span>
      </p>
      <!--Option list-->
      <div class="select__options" v-if="areOptionsVisible">
        <!--по-умолчанию блок с опциями НЕ виден-->
        <div class="select__options-list">
          <p
            class="select__options-item select__text"
            v-for="option in optionsDate"
            :key="option.id"
            :class="{ item_blocked: option.value < chosenDateFromMs }"
            @click="selectDate(option)"
          >
            <!--обработчик клика по опции из списка-->
            {{ option.dateString }}
          </p>
        </div>
        <div
          class="select__options-list"
          :class="{ list_blocked: selectedDate === 'Введите дату и время...' }"
        >
          <p
            class="select__options-item select__text"
            v-for="option in optionsTime"
            :key="option.id"
            :class="{ item_blocked: chosenDateFromMs === chosenDateToMs && option.value <= chosenTimeFromMs }"
            @click="selectTime(option)"
          >
            <!--обработчик клика по опции из списка-->
            {{ option.dateString }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { computed } from "vue";
import Vicon from "@/components/v-icon.vue";
import { useStore } from "vuex";

export default {
  name: "v-selectdouble",
  components: {
    Vicon,
  },
  props: {
    optionsDate: {
      type: Array,
      default() {
        return [];
      },
    },
    optionsTime: {
      type: Array,
      default() {
        return [];
      },
    },
    selectedDate: {
      type: String,
      default: "",
    },
    selectedTime: {
      type: String,
      default: "",
    },
    pretext: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const store = useStore();
    //ref
    const areOptionsVisible = ref(false);
    //computed
    const chosenDateFromMs = computed(() => store.state.chosenDateFromMs);
    const chosenTimeFromMs = computed(() => store.state.chosenTimeFromMs);
    const chosenDateToMs = computed(() => store.state.chosenDateToMs);
    const chosenTimeToMs = computed(() => store.state.chosenTimeToMs);
    //methods
    const selectDate = option => {
      context.emit("selectDate", option);
      if (props.selectedTime !== "") {
        areOptionsVisible.value = false;
      }
    };
    const selectTime = option => {
      context.emit("selectTime", option);
      if (props.selectedDate !== "Введите дату и время...") {
        areOptionsVisible.value = false;
      }
    };
    const resetOption = () => {
      context.emit("reset");
      if (
        props.selectedDate !== "Введите дату и время..." &&
        props.selectedTime !== ""
      ) {
        areOptionsVisible.value = false;
      }
    };
    return {
      areOptionsVisible,
      chosenDateFromMs,
      chosenTimeFromMs,
      chosenDateToMs,
      chosenTimeToMs,
      selectDate,
      selectTime,
      resetOption,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";

.select {
  position: relative;
  display: flex;
}

.select-block {
  width: 224px;
}

.select__title {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-bottom: 1px solid $color-grey;
}

.select__text-inside {
  margin-left: 20px;
  cursor: pointer;
}

.select__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
}

.pretext {
  margin-right: 10px;
}

.placeholder {
  margin-left: 0;
  color: $color-grey;
}

.select__options {
  border: 0.5px solid $color-grey;
  position: absolute;
  top: 20px;
  left: 20px;
  right: 0;
  background: $color-white;
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 20vh;
}

.select__options-list {
  overflow: scroll;
  padding: 0 15px 0 0;
  color: $color;
}

.list_blocked {
  pointer-events: none;
  color: $color-grey;
}

.select__options-item {
  text-align: center;
  cursor: pointer;
  &:hover {
    background: $color-grey-light;
  }
}

.item_blocked {
  pointer-events: none;
  opacity: 0.5;
}
</style>