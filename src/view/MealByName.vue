<template>
  <div class="p-6">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full py-4 px-2"
      v-model="keyWork"
      placeholder="Search for meals"
      :ref="keyWork"
      @change="SearchMeal"
    />
  </div>
  <div>
    <!-- <pre>{{ meals }}</pre> -->
    <p v-for="data in meals" :key="data.idIngredient">
      {{ data.strIngredient }}
    </p>
  </div>
</template>

<script setup>
import fetchData from "@/composable/FetchProduct";
import store from "@/store";

import { computed, ref } from "vue";
const { getAllProduct } = fetchData();

console.log(store.state.default.searchMeals);
const keyWork = ref("");
const meals = computed(() => store.state.default.searchMeals.data);
console.log(meals, "from index");

function SearchMeal() {
  // console.log(keyWork.value);
  store.dispatch("searchMeals", keyWork.value);
}
</script>


