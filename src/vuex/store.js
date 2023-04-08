import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex";

// Vue.config.productionTip = false;

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
// });

// Create a new store instance.
export const store = createStore({
  state() {
    return {
      todo: [
        {
          title: "todo items a",
          completed: false,
        },
        {
          title: "todo items b",
          completed: false,
        },
      ],
    };
  },
  getters: {
    totalTodo: (state) => {
      const length = state.todo.length;
      console.log(length);
      return length;
    },
    completedTodo: (state) => {
      const length = state.todo.filter((elem) => elem.completed === true);
      return length.length;
    },
    pendingTodo: (state) => {
      const length = state.todo.filter((elem) => !elem.completed === true);
      return length.length;
    },
  },
  mutations: {
    NEW_TODO(state, payload) {
      state.todo.push({
        title: payload,
        completed: false,
      });
    },
    DELETE_TODO(state, payload) {
      let index = state.todo.indexOf(payload);
      state.todo.splice(index, 1);
    },
    TOGGLE_STATUS(state, payload) {
      payload.completed = !payload.completed;
    },
  },
  // actions: {
  //   addNewTodo({ commit }, todoItem) {
  //     commit("NEW_TODO", todoItem);
  //   },
  //   deleteTodo({ commit }, item) {
  //     commit("DELETE_TODO", item);
  //   },
  //   toggleTodoStatus({ commit }, todo) {
  //     commit("TOGGLE_STATUS", todo);
  //   },
  // },
});
