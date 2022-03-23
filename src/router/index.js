import { createRouter, createWebHistory } from "vue-router";
import Vmain from "../views/v-main.vue";

const routes = [
  {
    path: "/",
    name: "v-main",
    component: Vmain,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
