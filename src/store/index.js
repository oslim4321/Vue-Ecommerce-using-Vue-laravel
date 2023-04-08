import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex";
import Cart from "./Cart";

// Vue.use(Vuex);
const store = createStore({
  modules: {
    Cart,
  },
});

export default store;
