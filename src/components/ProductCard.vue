<template>
  <div v-if="loading">loading product...</div>
  <div
    v-for="product in prods?.product"
    :key="product?.id"
    class="flex flex-wrap justify-center items-center"
  >
    <Product-list :product="product" />
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
    const loading = ref(false);

    onMounted(() => {
      getAllProductFun(); // Fixed function call
    });

    async function getAllProductFun() {
      loading.value = true;
      try {
        prods.value = await getAllProduct("fetchProd");
        console.log(prods.value, "the claue");
        console.log("dhdh");
      } catch (error) {
        // Handle error
      } finally {
        loading.value = false;
      }
    }
    return {
      prods,
      loading,
    };
  },
};
</script>
