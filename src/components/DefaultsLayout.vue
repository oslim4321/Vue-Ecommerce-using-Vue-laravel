<template>
  <div>
    <Outlet />
    <!-- this is navbar -->
    <router-view />
  </div>
</template>

<script setup>
import Outlet from "../router/Outlet.vue";
</script>
