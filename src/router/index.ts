import { createRouter, createWebHistory } from "vue-router";
import StartPage from "@/pages/StartPage/StartPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: StartPage,
    },
    {
      path: "/log",
      name: "log",
      component: () => import("../pages/ProtokollPage/ProtokollPage.vue"),
    },
    {
      path: "/graphs",
      name: "graph",
      component: () => import("../pages/GraphPage/GraphPage.vue"),
    },
    {
      path: "/patients",
      name: "patients",
      component: () => import("../pages/PatientPage/PatientPage.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../pages/SettingsPage/SettingsPage.vue"),
    },
    {
      path: "/imprint",
      name: "imprint",
      component: () => import("../pages/ImprintPage/ImprintPage.vue"),
    },
    {
      path: "/data-protection",
      name: "data-protection",
      component: () => import("../pages/DataProtectionPage/DataProtectionPage.vue"),
    },
  ],
});

export default router;
