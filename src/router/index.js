import { createRouter, createWebHistory } from "vue-router";

import Home from "../view/Home.vue";
// import MealList from "../view/MealByIngredient.vue";
import DefaultsLayout from "../components/DefaultsLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";
import MealByName from "../view/MealByName.vue";
import MealByLetter from "../view/MealByLetter.vue";
import MealByIngredient from "../view/MealByIngredient.vue";

const routes = [
  {
    path: "/",
    component: DefaultsLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealByLetter,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealByIngredient,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
    children: [
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealByName,
      },
    ],
  },

  // {
  //   path: "/letter/:letter",
  //   name: "byLetter",
  //   component: MealByName,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
