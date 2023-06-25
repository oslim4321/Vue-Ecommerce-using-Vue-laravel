<template>
  <div class="flex justify-center p-8s flex-col">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full py-4"
      placeholder="Search for meals"
    />
    <div class="flex justsify-center gap-x-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        >{{ letter }}</router-link
      >
    </div>
  </div>
</template>

<script setup>
import store from "@/store";
import { computed } from "vue";
// const {meals} = store.state;

// const meals = computed(() => store.state.meals.meals);
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
</script>

<style>
</style>