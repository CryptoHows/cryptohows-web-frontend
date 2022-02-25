import { createRouter, createWebHistory } from "vue-router";
import Round from "@/views/Round.vue";
import VentureCapitals from "@/views/VentureCapitals.vue";
import Projects from "@/views/Projects.vue";
import SignIn from "@/views/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/round",
  },
  {
    path: "/round",
    name: "Round",
    component: Round,
  },
  {
    path: "/venture-capitals",
    name: "Venture Capitals",
    component: VentureCapitals,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
