import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Profile from "@/views/Profile";
import Features from "@/views/Features";
import Ultimate from "@/views/Ultimate";
import Vote from "@/views/Vote";
import Docs from "@/views/Docs";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/docs",
    name: "Docs",
    component: Docs
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/features",
    name: "Features",
    component: Features
  },
  {
    path: "/ultimate",
    name: "Ultimate",
    component: Ultimate
  },
  {
    path: "/vote",
    name: "Vote",
    component: Vote
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
