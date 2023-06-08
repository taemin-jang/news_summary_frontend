import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import localStorage from "@/plugins/localStorage";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
    children: [
      {
        path: "politics",
        name: "politics",
        component: () => import("@/components/pages/PoliticsView.vue"),
        props: { test: "tests" },
        beforeEnter: async (to, from) => {
          if (!localStorage.getLocalStoage("portfolio").length) {
            alert("포트폴리오를 등록해주세요.");
            return false;
          }
        },
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
