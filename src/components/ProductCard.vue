<template>
  <div class="flex flex-wrap justify-center items-center">
    <Product-list />
    <Product-list />
    <Product-list />
    <Product-list />
    <Product-list />
    <Product-list />
    <Product-list />
    <Product-list />
    <Product-list />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
export default {
  components: { ProductList },
};
</script>

<style>
</style>