<template>
  <!-- component -->

  <div>
    <header
      class="bg-white shadow h-24 mb-2 flex justify-between items-stretch"
    >
      <router-link :to="{ name: 'home' }">Home</router-link>
      <div class="flex gap-x-5 items-center">
        <router-link
          :to="{ name: 'byName' }"
          class="inline-flex items-center hover:bg-green-400 py-3 px-2 h-full"
        >
          Search Meals
        </router-link>
        <router-link
          :to="{ name: 'byLetter' }"
          class="inline-flex items-center hover:bg-green-400 py-3 px-2 h-full"
        >
          Meals By Letter
        </router-link>
        <router-link
          :to="{ name: 'byIngredient' }"
          class="inline-flex items-center hover:bg-green-400 py-3 px-2 h-full"
        >
          Meals By Ingredient
        </router-link>
      </div>
    </header>
  </div>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
</style>