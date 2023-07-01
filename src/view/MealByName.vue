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
    <pre>{{ meals }}</pre>
  </div>
</template>

<script setup>
import fetchData from "@/composable/FetchProduct";
import { computed } from "@vue/reactivity";
import store from "@/store";

import { ref, watch } from "vue";
const { getAllProduct } = fetchData();

const keyWork = ref("");
const meals = computed(() => store.state.default.searchMeals.data);

console.log(meals);
console.log("dd");

function SearchMeal() {
  // console.log(keyWork.value);
  store.dispatch("searchMeals", keyWork.value);
}
</script>


