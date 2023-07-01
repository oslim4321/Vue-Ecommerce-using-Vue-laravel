import store from ".";

export function setSearchMeals(state, meals) {
  state.default.searchMeals.data = meals;

  // console.log(state.default.searchMeals.data, "data from mtation");
  console.log(store.getters.todoData, "getter");
}
export function setTodo(state, todo) {
  state.default.todo.data.push({
    id: Math.floor(Math.random() * 3456789),
    title: todo,
  });
}
