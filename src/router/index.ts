import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import AxiosService from "@/services/AxiosService";

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
        //todo props객체로 넘겨줘서 로그인 페이지에서 getnaver 호출 후 값을 넘겨줄 수 잇는지?
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
