<template>
  <div class="tabs">
    <VTabs
      :tabs="filledUpData"
      :selectedIndexTabs="selectedIndexTabs"
      :selectedTab="selectedTab"
      @switchTab="updateSelectedTab"
    />
    <div class="order">
      <div class="order__window">
        <component
          :is="selectedTab"
          :idTab="selectedTab"
          @on-tab-reset="resetTabs"
        ></component>
      </div>
      <VTotal
        :tabs="tabs"
        :selectedId="selectedIndexTabs"
        :selectedTab="selectedTab"
        @updateSelectedTab="updateSelectedTab"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import VTabs from "@/components/v-tabs.vue";
import OrderPlace from "@/components/order-place.vue";
import OrderModel from "@/components/order-model.vue";
import OrderAdditional from "@/components/order-additional.vue";
import OrderSummary from "@/components/order-summary.vue";
import VTotal from "@/components/v-total.vue";

export default {
  name: "order-window",
  components: {
    VTabs,
    OrderPlace,
    OrderModel,
    OrderAdditional,
    OrderSummary,
    VTotal,
  },
  setup() {
    const store = useStore();

    //ref
    const tabs = ref([
      { label: "Местоположение", id: "order-place", isDisabled: true },
      { label: "Модель", id: "order-model", isDisabled: true },
      { label: "Дополнительно", id: "order-additional", isDisabled: true },
      { label: "Итого", id: "order-summary", isDisabled: true },
    ]);
    const selectedIndexTabs = ref(0);
    const selectedTab = ref("order-place");

    //computed
    const selectedCity = computed(() => store.state.selectedCity);
    const selectedPoint = computed(() => store.state.selectedPoint);
    const selectedCar = computed(() => store.state.selectedCar);
    const selectedColor = computed(() => store.state.selectedColor);
    const dateFrom = computed(() => store.state.dateFrom);
    const dateTo = computed(() => store.state.dateTo);
    const selectedRate = computed(() => store.state.selectedRate);
    //переключение по вкладкам по мере заполнения
    const filledUpData = computed(() => {
      const arr = tabs.value.slice();
      //условие для вкладки Местоположение
      if (
        Object.keys(selectedCity.value).length &&
        Object.keys(selectedPoint.value).length !== 0 &&
        selectedTab.value === "order-place"
      ) {
        arr[selectedIndexTabs.value].isDisabled = false;
        arr[selectedIndexTabs.value + 1].isDisabled = false;
        return arr;
      }
      //условие для вкладки Модель
      if (
        Object.keys(selectedCar.value).length !== 0 &&
        selectedTab.value === "order-model"
      ) {
        arr[selectedIndexTabs.value + 2].isDisabled = false;
        return arr;
      }
      //условие для вкладки Дополнительно
      if (
        selectedColor.value &&
        dateFrom.value &&
        dateTo.value &&
        selectedRate.value &&
        selectedTab.value === "order-additional"
      ) {
        arr[selectedIndexTabs.value + 3].isDisabled = false;
        return arr;
      }
      return arr;
    });

    // methods
    //обновление значения таба в случае прихода события из компонента Vtotal, которое возникает при нажатии на кнопку
    function updateSelectedTab(newSelectedTab) {
      selectedTab.value = newSelectedTab;
    }
    //сброс определенных табов в случае прихода события от из компонента конкретной вкладки, которое возникает если были сброшены какие-то ранее выбранные данные на этой вкладке
    function resetTabs(idTab) {
      if (idTab === "order-place") {
        for (var i = 0; i < tabs.value.length; i++) {
          tabs.value[i].isDisabled = true;
        }
      }
      if (idTab === "order-model") {
        for (var j = 1; j < tabs.value.length; j++) {
          tabs.value[j].isDisabled = true;
        }
      }
      if (idTab === "order-additional") {
        for (var k = 2; k < tabs.value.length; k++) {
          tabs.value[k].isDisabled = true;
        }
      }
    }

    return {
      tabs,
      selectedIndexTabs,
      selectedTab,
      filledUpData,
      selectedCity,
      selectedPoint,
      selectedCar,
      selectedColor,
      dateFrom,
      dateTo,
      selectedRate,
      updateSelectedTab,
      resetTabs,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.order {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    flex-wrap: wrap;
  }
}

.order__window {
  flex-basis: 70%;
  padding: 32px 150px 0 64px;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    padding: 32px 32px 0 32px;
  }

  @media #{$media} and (min-width: $tablet-min) and (max-width: $tablet-max) {
    padding: 32px 32px 0 64px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    flex-basis: 100%;
    padding: 16px 16px 0 16px;
  }
}
</style>
