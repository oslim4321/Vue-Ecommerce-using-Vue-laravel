<template>
  <div class="flex justify-around cursor-pointer">
    <p
      @click="toggleTodoStatus(todo)"
      :class="{ 'line-through text-red-400': todo.completed }"
    >
      {{ todo.title }}
    </p>
    <button
      class="border p-3 text-red-500 my-1 rounded"
      @click="deleteTodo(todo)"
    >
      delete Todo
    </button>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["todo"],
  setup() {
    const store = useStore();

    function toggleTodoStatus(todo) {
      store.commit("TOGGLE_STATUS", todo);
    }
    function deleteTodo(item) {
      store.commit("DELETE_TODO", item);
    }
    return { toggleTodoStatus, deleteTodo };
  },
};

// export default {
//   props: ["todo"],

//   methods: {
//     deleteTodo(item) {
//       //   console.log(this.todo);
//       this.$store.dispatch("deleteTodo", this.todo);
//     },
//     toggleTodoStatus() {
//       console.log(this.todo);
//       this.$store.dispatch("toggleTodoStatus", this.todo);
//     },
//   },
// };
</script>




<style>
</style>