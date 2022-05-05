<template>
  <div class="tabs__border">
    <ul class="tab-list order-center">
      <li class="tab__item">
        <button
          class="tab__item-btn"
          v-for="tab in tabs"
          :key="tab.id"
          :class="{
            tab__item_active: selectedTab === tab.id,
            tab__item_filled: selectedTab !== tab.id && !tab.isDisabled,
          }"
          :disabled="tab.isDisabled"
          @click="switchTab(tab.id)"
        >
          {{ tab.label }}
          <span class="tab__item-icon">
            <Vicon icon-id="icon-arrow" width="6" height="8" />
          </span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import Vicon from "@/components/v-icon.vue";

export default {
  name: "v-tabs",
  components: {
    Vicon,
  },
  props: {
    tabs: {
      type: Array,
      required: false,
    },
    selectedTab: {
      type: String,
      required: false,
    },
  },
  setup(props, context) {
    function switchTab(idNewTab) {
      context.emit("switchTab", idNewTab);
    }

    return { switchTab };
  },
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";
@import "@/assets/variables.scss";

.tabs__border {
  border-top: 1px solid $color-grey-light;
  border-bottom: 1px solid $color-grey-light;

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
     //фиксируем табы при общем скроле страницы
     position: sticky;
     top: 98px;
     background-color: $color-white;
     z-index: 10;
   }
}

.tab-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0 64px;
  margin: 0;

  @media #{$media} and (min-width: $desktop-min) and (max-width: $desktop-max) {
    padding: 0 32px;
  }

  @media #{$media} and (min-width: $mobile-min) and (max-width: $mobile-max) {
    padding: 0 16px;
    flex-wrap: wrap;
  }
}

.tab__item-btn {
  font-family: $ff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: $color-grey;
  border: none;
  background-color: $color-white;
  cursor: pointer;
  margin: 7px 0;
  padding: 0;
}

.tab__item-btn:last-child svg {
  width: 0;
  height: 0;
}

.tab__item-icon {
  padding: 0 16px 0 16px;
}

.tab__item_active {
  color: $color-green;
}

.tab__item_filled {
  color: $color-black;
}
</style>
