<script setup>
import { RouterView } from "vue-router";
import navBar from "./components/navBar.vue";
</script>

<template>
  <navBar />
  <div class="lg:px-32 md:px-10 px-4">
    <RouterView />
  </div>
</template>
<style scoped>
 
</style>
