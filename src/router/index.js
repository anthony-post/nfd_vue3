import { createRouter, createWebHistory } from "vue-router";
import Vmain from "../views/v-main.vue";
import Vorder from "../views/v-order.vue";

const routes = [
  {
    path: "/",
    name: "v-main",
    component: Vmain,
  },
  {
    path: "/order",
    name: "v-order",
    component: Vorder,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
