<template>
  <div>
    Search By letter'

    <input type="text" class="border border-green-400" v-model="inputData" />
    <button @click="addTodo">Submit</button>

    <div
      v-for="todo in store.state.default.todo.data"
      :key="todo.id"
      class="border"
    >
      <span> {{ todo.id }} </span>
      <p>
        {{ todo.title }}
      </p>
    </div>
  </div>
</template>

<script setup>
import store from "@/store";
import { computed, ref } from "vue";

const inputData = ref();
const todos = ref();

todos.value = computed(() => store.state.default.todo.data);
console.log(todos.value);

function addTodo() {
  store.dispatch("AddTodo", inputData.value);
}
</script>