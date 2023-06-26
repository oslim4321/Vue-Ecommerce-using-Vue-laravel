<template>
  <div class="flex justify-center p-8s flex-col">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full py-4"
      placeholder="Search for meals"
    />
    <div class="flex justify-center gap-x-2 mt-2">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        >{{ letter }}</router-link
      >
    </div>
    <pre>{{ ingredientRef }}</pre>
  </div>
</template>

<script setup>
import fetchData from "@/composable/FetchProduct";
import store from "@/store";
import { computed, onMounted, ref } from "vue";
// const {meals} = store.state;

// const meals = computed(() => store.state.meals.meals);
const { getAllProduct } = fetchData();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredientRef = ref();

onMounted(async () => {
  const { meals } = await getAllProduct("/list.php?i=list");
  console.log(meals);
  ingredientRef.value = meals;
});
</script>

<style>
</style> 