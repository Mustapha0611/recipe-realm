<script setup>
import { RouterView } from "vue-router";
import navBar from "./components/navBar.vue";
import Toast from "primevue/toast";
import "animate.css";


</script>

<template>
  <Toast
    :pt="{
      root: {
        class: '!w-72',
      },
    }"
  />
  <navBar />
  <div class="lg:px-32 md:px-10 px-4">
   <router-view></router-view>
  </div>
</template>
<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
