<template>
  <div>
    <p
      @click.self="toggleDropDown"
      class="w-20 h-10 bg-slate-500 text-white flex items-center justify-center cursor-pointer"
    >
      0 Cart
    </p>
    <div
      v-if="showCartDropDown"
      class="drop-down w-60 overflow-hidden bg-white rounded-md shadow absolute top-12 right-3 p-3"
    >
      <div class="flex justify-between border-b py-3">
        <div>
          <p>product title</p>
          <span>1 X $234</span>
        </div>
        <div class="">
          <span class="bg-slate-700 text-white font-bold py-1 rounded-lg px-2"
            >remove</span
          >
        </div>
      </div>

      <div class="flex justify-between items-center">
        <p>total: $23</p>
        <span><a href="">Clear cart</a></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showCartDropDown = ref(false);

    function toggleDropDown() {
      showCartDropDown.value = !showCartDropDown.value;
    }

    return { showCartDropDown, toggleDropDown };
  },
};
</script>

<style>
</style>