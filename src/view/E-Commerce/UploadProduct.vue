<template>
  <!-- component -->
  <div class="flex items-center justify-center p-12">
    <!-- Author: FormBold Team -->
    <!-- Learn More: https://formbold.com -->
    <div class="mx-auto w-full max-w-[550px] bg-white border-slate-400">
      <form
        class="py-6 px-9"
        action="https://formbold.com/s/FORM_ID"
        method="POST"
      >
        <div class="mb-5">
          <label
            for="productName"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            product name
          </label>
          <input
            id="productName"
            name="productName"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="productDescrip"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            product Description
          </label>
          <input
            id="productDescrip"
            name="productDescrip"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="flex">
          <div class="mb-5">
            <label
              for="price"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              price
            </label>
            <input
              id="price"
              name="price"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div class="mb-5">
            <label
              for="category"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              category
            </label>
            <input
              id="category"
              name="category"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>

        <div>
          <button
            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          >
            Upload product
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
// [http://127.0.0.1:8000
<script>
import { ref } from "vue";
export default {
  setup() {
    const productName = ref(null);

    return { productName };
  },
};
</script>

<style>
</style>