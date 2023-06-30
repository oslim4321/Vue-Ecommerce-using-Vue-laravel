<template>
  <div>Search By letter</div>
</template>

<script setup>
import store from "@/store";
import { computed } from "vue";

const todo = computed(() => store);
console.log(todo);
</script>


