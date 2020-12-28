import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/colors",
    name: "Colors",
    component: () =>
      import(/* webpackChunkName: "colors" */ "../views/Colors.vue")
  },
  {
    path: "/typography",
    name: "Typography",
    component: () =>
      import(/* webpackChunkName: "typography" */ "../views/Typography.vue")
  },
  {
    path: "/spaces",
    name: "Spaces",
    component: () =>
      import(/* webpackChunkName: "spaces" */ "../views/Spaces.vue")
  },
  {
    path: "/buttons",
    name: "Buttons",
    meta: { transition: "slide-right" },
    component: () =>
      import(/* webpackChunkName: "buttons" */ "../views/Buttons.vue")
  },
  {
    path: "/inputs",
    name: "Inputs",
    component: () =>
      import(/* webpackChunkName: "inputs" */ "../views/Inputs.vue")
  },
  {
    path: "/grid",
    name: "Grid",
    component: () => import(/* webpackChunkName: "grid" */ "../views/Grid.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
