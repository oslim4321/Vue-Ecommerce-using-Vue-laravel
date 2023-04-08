<template>
  <div class="container m-5">
    <div class="flex flex-wrap gap-11">
      <div class="w-[40%]">
        <img
          class="w-[100%]"
          src="https://via.placeholder.com/150x100"
          alt=""
        />
      </div>

      <div class="flex flex-col gap-5">
        <p class="text-3xl font-bold">Product title</p>
        <p class="font font-bold text-2xl">NGN 35</p>
        <div class="flex">
          <input type="text" class="border shadow-md" />
          <button class="p-3 bg-blue-600 text-white flex-1">Add to cart</button>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur,
          dolorem?
        </p>
      </div>
    </div>
    <h2 v-for="cart in cartItems" :key="cart">{{ cart }} mee</h2>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const productId = route.params.id;
    console.log(productId);
    const cartItems = computed(() => store.getters.cartItems);

    onMounted(() => {
      console.log(cartItems._value);
    });

    return { productId, cartItems };
  },
};
</script>

<style>
</style>