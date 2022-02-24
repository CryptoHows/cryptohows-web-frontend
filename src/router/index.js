import { createRouter, createWebHistory } from "vue-router";
import RoundAndInfo from "@/views/RoundAndInfo.vue";
import VentureCapitals from "@/views/VentureCapitals.vue";
import Projects from "@/views/Projects.vue";
import Profile from "@/views/Profile.vue";
import SignIn from "@/views/SignIn.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/round-and-info",
  },
  {
    path: "/round-and-info",
    name: "RoundAndInfo",
    component: RoundAndInfo,
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
    path: "/profile",
    name: "Profile",
    component: Profile,
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
