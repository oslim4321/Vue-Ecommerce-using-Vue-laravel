<template>
  <div>
    <p>list todo</p>
    <p>Total Todos: {{ totalTodoItems }}</p>
    <p>completed todo: {{ completedTodoItem }}</p>
    <p>pennding todo: {{ penndingTodoItem }}</p>
    <Todo v-for="todo in note" :key="todo.title" :todo="todo" />
    <TodoForm />
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed, onMounted } from "@vue/runtime-core";
import Todo from "./Todo.vue";
import TodoForm from "./TodoForm.vue";
export default {
  components: { Todo, TodoForm },
  setup() {
    const store = useStore();

    const title = ref();
    const note = computed(() => store.state.todo);
    const totalTodoItems = computed(() => store.getters.totalTodo);
    const completedTodoItem = computed(() => store.getters.completedTodo);
    const penndingTodoItem = computed(() => store.getters.pendingTodo);

    onMounted(() => {
      console.log(store.getters);
      // console.log(store.getters);
      // console.log(totalTodoItems.value);
      // console.log(note.value);
      // console.log([...note]);
    });

    return { note, title, totalTodoItems, completedTodoItem, penndingTodoItem };
  },
};
</script>


<style>
</style>