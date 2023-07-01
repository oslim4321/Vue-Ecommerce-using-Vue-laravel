import store from ".";

export const todoData = (state) => {
  return store.state.default.searchMeals.data;
};
