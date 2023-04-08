import { createRouter, createWebHistory } from "vue-router";

import Home from "../view/Home.vue";
import TodoList from "../view/todos/TodoList.vue";
import Product from "../view/E-Commerce/Product.vue";
import UploadProduct from "../view/E-Commerce/UploadProduct.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "product",
    component: Product,
  },
  {
    path: "/upload_Product",
    name: "UploadProduct",
    component: UploadProduct,
  },
  {
    path: "/todos",
    name: "TodoList",
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
