import { createStore } from "vuex";
import state from "./state";
import action from "./action";
import mutations from "./mutations";
import getters from "./getters";

const store = createStore({
  // modules: {
  //   Cart,
  // },
  state,
  actions,
  mutations,
  getters,
});

export default store;
