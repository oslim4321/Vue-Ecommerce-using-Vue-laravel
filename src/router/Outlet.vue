<template>
  <!-- component -->

  <div>
    <header class="bg-white shadow h-24 mb-2">
      <router-link :to="{ name: '/' }">Home</router-link>
      <div>
        <router-link :to="{ name: '/' }"> Search Meals </router-link>
        <router-link :to="{ name: '/' }"> Meals By Ingredient </router-link>
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