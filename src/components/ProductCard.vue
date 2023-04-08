<template>
  <div class="flex flex-wrap justify-center items-center">
    <Product-list />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import fetchData from "../composable/FetchProduct";
import { onMounted, ref } from "vue";
export default {
  components: { ProductList },

  setup() {
    const { getAllProduct } = fetchData();
    const prods = ref(null);

    onMounted(() => {
      getAllProductFun();
    });

    async function getAllProductFun() {
      try {
        prods.value = await getAllProduct("fetchProd");
        console.log(prods.value);
      } catch (error) {}
    }
  },
};
</script>

<style>
</style>