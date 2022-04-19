<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-body">
          Подтвердить заказ
          </div>
          <div class="modal-footer">
              <router-link
                v-if="orderId"
                :to="{ name: 'v-orderid', params: { id: orderId } }"
              >
                <button class="modal-button" @click="confirmOrder">
                  Подтвердить
                </button>
              </router-link>
              <button
                class="modal-button modal-button_colored"
                @click="closePopUp"
              >
                Вернуться
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "popup",
  setup() {
    const store = useStore();

    //computed
    const orderId = computed(() => store.state.orderId);

    //methods
    const confirmOrder = () => {
      store.dispatch("PUT_CONFIRM_ORDERID_TO_API");
    };

    const closePopUp = () => {
      store.dispatch("GET_POPUPCONFIRM");
    };

    return {
      orderId,
      confirmOrder,
      closePopUp,
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/variables.scss";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.modal-container {
  margin: 0 auto;
  transition: all 0.3s ease;
}

.modal-body {
  margin: 0 0 30px 0;
  font-family: $ff;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: $color-title;
  text-align: center;
}

.modal-footer {
  text-align: center;
}

.modal-button {
  font-family: $ff;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: $color-white;
  background: linear-gradient(90deg, #0ec261 2.61%, #039f67 112.6%);
  background-blend-mode: darken;
  border-radius: 8px;
  border: none;
  padding: 15px 20px;
  background: $color-text;
  cursor: pointer;
  margin: 0 8px 0 0;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
}

.modal-button_colored {
  background: linear-gradient(90deg, #493013 0%, #7b0c3b 100%);
  border-radius: 4px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
