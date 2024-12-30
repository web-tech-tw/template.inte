import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  scrollBehavior: () => ({
    behavior: "smooth",
    top: 0,
  }),
  history: createWebHashHistory(),
  routes,
});

export default router;
