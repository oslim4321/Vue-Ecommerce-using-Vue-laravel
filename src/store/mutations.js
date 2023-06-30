export function setSearchMeals(state, meals) {
  state.default.searchMeals.data = meals;
}
export function setTodo(state, todo) {
  state.default.todo.data.push({
    id: Math.floor(Math.random() * 3456789),
    title: todo,
  });
}
