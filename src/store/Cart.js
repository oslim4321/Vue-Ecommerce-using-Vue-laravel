// cart.js

const state = {
  items: ["rtyu", "ete", "shhs", "bdvgh"],
};

const mutations = {
  addItem(state, item) {
    state.items.push(item);
  },
  removeItem(state, index) {
    state.items.splice(index, 1);
  },
};

const actions = {
  addToCart({ commit }, item) {
    commit("addItem", item);
  },
  removeFromCart({ commit }, index) {
    commit("removeItem", index);
  },
};

const getters = {
  cartItems(state) {
    return state.items;
  },
  cartTotal(state) {
    return state.items.reduce((total, item) => total + item.price, 0);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
