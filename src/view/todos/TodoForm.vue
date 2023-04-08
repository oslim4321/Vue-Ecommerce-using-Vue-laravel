<template>
  <input class="border" type="text" v-model="newTodoItems" />
  <button @click="addNewTodoItem">Add</button>
</template>


<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const newTodoItems = ref("");

    function addNewTodoItem() {
      const newTodo = newTodoItems.value.trim();
      store.commit("NEW_TODO", newTodo);
      newTodoItems.value = "";
    }
    return { addNewTodoItem, newTodoItems };
  },
};
</script>



<style>
</style>