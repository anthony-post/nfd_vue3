<template>
  <div class="additional-wrp">
    <p class="additional__text">Цвета</p>
    <div class="radio-list">
      <VRadio
        v-model:checkedValue="checkedColor"
        label="Любой"
        @change="resetSelectedColor"
      />
      <VRadio
        v-model:checkedValue="checkedColor"
        v-for="color in selectedCar.colors"
        :key="color"
        :label="color"
        :value="color"
      />
    </div>
    <p class="additional__text">Дата аренды</p>
    <div class="additional-input__wrp">
      <p>
        <VSelectDouble
          :optionsDate="arrayDate"
          :optionsTime="arrayTime"
          @selectDate="setSelectedDateFrom"
          @selectTime="setSelectedTimeFrom"
          @reset="resetSelectedFrom"
          :selectedDate="selectedDateFrom"
          :selectedTime="selectedTimeFrom"
          pretext="C"
        />
      </p>
      <p>
        <VSelectDouble
          :class="{ select_blocked: !isSelectedDateFrom }"
          :optionsDate="arrayDate"
          :optionsTime="arrayTime"
          @selectDate="setSelectedDateTo"
          @selectTime="setSelectedTimeTo"
          @reset="resetSelectedTo"
          :selectedDate="selectedDateTo"
          :selectedTime="selectedTimeTo"
          pretext="По"
        />
      </p>
    </div>
    <p class="additional__text">Тариф</p>
    <div class="tarif-wrp" :class="{ select_blocked: !isSelectedDateFromTo }">
      <!-- <VRadio
        v-model:checkedValue="checkedRate"
        v-for="rate in rateList"
        :key="rate.id"
        :label="
          rate?.rateTypeId?.name +
          ', ' +
          rate?.price +
          'Р/' +
          rate?.rateTypeId?.unit
        "
        :value="rate.id"
      /> -->
      <VRadio
        v-model:checkedValue="checkedRate"
        v-for="rate in rateList"
        :key="rate.id"
        :label="`${rate?.rateTypeId?.name} ${rate?.price}Р/${rate?.rateTypeId?.unit}`"
        :value="rate.id"
      />
    </div>
    <p class="additional__text">Доп услуги</p>
    <div
      class="services-wrp"
      :class="{
        select_blocked: !isSelectedDateRate,
      }"
    >
      <VCheckbox v-model="checkedTank" label="Полный бак, 500р" />
      <VCheckbox v-model="checkedBabyChair" label="Детское кресло, 200р" />
      <VCheckbox v-model="checkedRightHandDrive" label="Правый руль, 1600р" />
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
import VRadio from "@/components/v-radio.vue";
import VSelectDouble from "@/components/v-selectdouble.vue";
import VCheckbox from "@/components/v-checkbox.vue";

export default {
  name: "order-additional",
  components: {
    VRadio,
    VSelectDouble,
    VCheckbox,
  },
  setup(_, context) {
    const store = useStore();

    //ref
    const arrayDate = ref([]);
    const arrayTime = ref([]);

    //computed
    const rateList = computed(() => store.state.rateList);
    const selectedCar = computed(() => store.state.selectedCar);
    const selectedColor = computed(() => store.state.selectedColor);
    const selectedDateFrom = computed(() => store.state.selectedDateFrom);
    const selectedTimeFrom = computed(() => store.state.selectedTimeFrom);
    const selectedDateTo = computed(() => store.state.selectedDateTo);
    const selectedTimeTo = computed(() => store.state.selectedTimeTo);
    const dateStateFrom = computed(() => store.state.dateFrom);
    const dateStateTo = computed(() => store.state.dateTo);
    const selectedRate = computed(() => store.state.selectedRate);
    const selectedTank = computed(() => store.state.selectedTank);
    const selectedBabyChair = computed(() => store.state.selectedBabyChair);
    const selectedRightHandDrive = computed(
      () => store.state.selectedRightHandDrive
    );

    const checkedColor = computed({
      get: () => selectedColor.value,
      set: (checkedColorCar) =>
        store.dispatch("GET_CHECKEDCOLOR", checkedColorCar),
    });

    const checkedRate = computed({
      get: () => selectedRate.value,
      set: (checkedRateCar) =>
        store.dispatch("GET_CHECKEDRATE", checkedRateCar),
    });

    const checkedTank = computed({
      get: () => selectedTank.value,
      set: (checkedTankCar) => store.commit("SET_SELECTEDTANK", checkedTankCar),
    });

    const checkedBabyChair = computed({
      get: () => selectedBabyChair.value,
      set: (checkedBabyChairCar) =>
        store.commit("SET_SELECTEDBABYCHAIR", checkedBabyChairCar),
    });

    const checkedRightHandDrive = computed({
      get: () => selectedRightHandDrive.value,
      set: (checkedRightHandDriveCar) =>
        store.commit("SET_SELECTEDRIGHTHANDDRIVE", checkedRightHandDriveCar),
    });

    const isSelectedDateFrom = computed(() => dateStateFrom.value);
    const isSelectedDateFromTo = computed(
      () => dateStateFrom.value && dateStateTo.value
    );
    const isSelectedDateRate = computed(
      () => dateStateFrom.value && dateStateTo.value && selectedRate.value
    );

    //methods
    //получение списка тарифов по API
    const getRateFromApi = () => store.dispatch("GET_RATE_FROM_API");

    //сброс выбранного цвета авто
    const resetSelectedColor = () => {
      store.dispatch("GET_CHECKEDCOLOR");
    };

    //генерация массива с объектами дат
    const createArrayDate = () => {
      const dateObj = new Date();
      dateObj.setHours(0, 0, 0);
      for (let i = 0; i <= 90; i++) {
        dateObj.setDate(dateObj.getDate() + 1);
        const newDate = formatedDate(dateObj);
        const newObjDate = {
          id: i,
          value: dateObj.getTime(),
          dateString: newDate,
        };
        arrayDate.value.push(newObjDate); //запись в массив дат для выбора в селекте
      }
    };

    //генерация массива с объектами времени
    const createArrayTime = () => {
      const time = [
        "00:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ];
      for (let j = 0; j < time.length; j++) {
        const time_parts = time[j].split(":");
        const millisecond =
          time_parts[0] * (60000 * 60) + time_parts[1] * 60000;
        const newObjTime = { id: j, value: millisecond, dateString: time[j] };
        arrayTime.value.push(newObjTime); //запись в массив время для выбора во втором селекте
      }
    };

    //форматирование даты
    const formatedDate = (dateObj) => {
      const date =
        dateObj.getDate().toString().length < 2
          ? "0" + dateObj.getDate()
          : dateObj.getDate();
      const month =
        dateObj.getMonth().toString().length < 2
          ? "0" + (dateObj.getMonth() + 1)
          : dateObj.getMonth() + 1;
      const year = dateObj.getFullYear().toString();

      return `${date}.${month}.${year}`;
    };

    //SELECTED DATE FROM
    const setSelectedDateFrom = (chosenDateFrom) => {
      store.dispatch("GET_SELECTEDDATEFROM", chosenDateFrom);
    };
    const resetSelectedDateFrom = () => {
      store.dispatch("GET_SELECTEDDATEFROM");
      store.dispatch("GET_SELECTEDDATETO");
      store.dispatch("GET_SELECTEDTIMETO");
      store.dispatch("GET_RENTALDURATION");
      store.dispatch("GET_CHECKEDRATE");
      store.dispatch("GET_CHECKEDTANK");
      store.dispatch("GET_CHECKEDBABYCHAIR");
      store.dispatch("GET_CHECKEDRIGHTHANDDRIVE");
      context.emit("on-tab-reset", "order-additional");
    };
    //SELECTED TIME FROM
    const setSelectedTimeFrom = (chosenTimeFrom) => {
      store.dispatch("GET_SELECTEDTIMEFROM", chosenTimeFrom);
    };
    const resetSelectedTimeFrom = () => {
      store.dispatch("GET_SELECTEDTIMEFROM");
    };
    const resetSelectedFrom = () => {
      store.dispatch("GET_SELECTEDDATEFROM");
      store.dispatch("GET_SELECTEDTIMEFROM");
      store.dispatch("GET_SELECTEDDATETO");
      store.dispatch("GET_SELECTEDTIMETO");
      store.dispatch("GET_RENTALDURATION");
      store.dispatch("GET_CHECKEDRATE");
      store.dispatch("GET_CHECKEDTANK");
      store.dispatch("GET_CHECKEDBABYCHAIR");
      store.dispatch("GET_CHECKEDRIGHTHANDDRIVE");
      context.emit("on-tab-reset", "order-additional");
    };

    //SELECTED DATE TO
    const setSelectedDateTo = (chosenDateTo) => {
      store.dispatch("GET_SELECTEDDATETO", chosenDateTo);
    };
    const resetSelectedDateTo = () => {
      store.dispatch("GET_SELECTEDDATETO");
      store.dispatch("GET_SELECTEDTIMETO");
      store.dispatch("GET_RENTALDURATION");
    };
    //SELECTED TIME TO
    const setSelectedTimeTo = (chosenTimeTo) => {
      store.dispatch("GET_SELECTEDTIMETO", chosenTimeTo);
      const duration = dateStateTo.value - dateStateFrom.value;
      store.dispatch("GET_RENTALDURATION", duration);
    };
    const resetSelectedTimeTo = () => {
      store.dispatch("GET_SELECTEDTIMETO");
      store.dispatch("GET_RENTALDURATION");
    };
    const resetSelectedTo = () => {
      store.dispatch("GET_SELECTEDDATETO");
      store.dispatch("GET_SELECTEDTIMETO");
      store.dispatch("GET_RENTALDURATION");
      store.dispatch("GET_CHECKEDRATE");
      store.dispatch("GET_CHECKEDTANK");
      store.dispatch("GET_CHECKEDBABYCHAIR");
      store.dispatch("GET_CHECKEDRIGHTHANDDRIVE");
      context.emit("on-tab-reset", "order-additional");
    };

    //SELECTED RATE
    const setSelectedRate = (checkedRate) => {
      store.dispatch("GET_CHECKEDRATE", checkedRate);
    };
    const resetSelectedRate = () => {
      store.dispatch("GET_CHECKEDRATE");
      store.dispatch("GET_CHECKEDTANK");
      store.dispatch("GET_CHECKEDBABYCHAIR");
      store.dispatch("GET_CHECKEDRIGHTHANDDRIVE");
    };

    //SELECTED TANK
    const setSelectedTank = (checkedTank) => {
      store.dispatch("GET_CHECKEDTANK", checkedTank);
    };
    const resetSelectedTank = () => {
      store.dispatch("GET_CHECKEDTANK");
    };

    //SELECTED BABY CHAIR
    const setSelectedBabyChair = (checkedBabyChair) => {
      store.dispatch("GET_CHECKEDBABYCHAIR", checkedBabyChair);
    };
    const resetSelectedBabyChair = () => {
      store.dispatch("GET_CHECKEDBABYCHAIR");
    };

    //SELECTED RIGHT HAND DRIVE
    const setSelectedRightHandDrive = (checkedRightHandDrive) => {
      store.dispatch("GET_CHECKEDRIGHTHANDDRIVE", checkedRightHandDrive);
    };
    const resetSelectedRightHandDrive = () => {
      store.dispatch("GET_CHECKEDRIGHTHANDDRIVE");
    };

    onMounted(() => {
      createArrayDate();
      createArrayTime();
    });

    //получение списка доступных тарифов
    getRateFromApi();

    return {
      arrayDate,
      arrayTime,
      rateList,
      selectedCar,
      selectedColor,
      selectedDateFrom,
      selectedTimeFrom,
      selectedDateTo,
      selectedTimeTo,
      dateStateFrom,
      dateStateTo,
      selectedRate,
      selectedTank,
      selectedBabyChair,
      selectedRightHandDrive,
      checkedColor,
      checkedRate,
      checkedTank,
      checkedBabyChair,
      checkedRightHandDrive,
      isSelectedDateFrom,
      isSelectedDateFromTo,
      isSelectedDateRate,
      getRateFromApi,
      resetSelectedColor,
      setSelectedDateFrom,
      resetSelectedDateFrom,
      setSelectedTimeFrom,
      resetSelectedTimeFrom,
      resetSelectedFrom,
      setSelectedDateTo,
      resetSelectedDateTo,
      setSelectedTimeTo,
      resetSelectedTimeTo,
      resetSelectedTo,
      setSelectedRate,
      resetSelectedRate,
      setSelectedTank,
      resetSelectedTank,
      setSelectedBabyChair,
      resetSelectedBabyChair,
      setSelectedRightHandDrive,
      resetSelectedRightHandDrive,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.additional-wrp {
  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    overflow-y: scroll;
    height: 40vh;
  }
}

.radio-list {
  display: flex;
  margin-bottom: 30px;
}

.item_blocked {
  pointer-events: none;
  opacity: 0.5;
}

.item_available {
  opacity: 1;
  pointer-events: unset;
}

.additional__text {
  font-family: $ff;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: $color;
  margin-top: 0;
}

.additional-input__wrp {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: fit-content;
}

.additional-input__wrp:first-child p {
  margin: 0;
}

.select_blocked {
  pointer-events: none;
  opacity: 0.5;
}

.additional-input__wrp,
.tarif-wrp {
  margin-bottom: 30px;
}

.tarif__radiobutton {
  margin-bottom: 12px;
}
</style>
