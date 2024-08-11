<script setup>
import { RouterView } from "vue-router";
import navBar from "./components/navBar.vue";
import Toast from "primevue/toast";
// import { useToast } from "primevue/usetoast";
import "animate.css";

// const toast = useToast();
// const showSuccess = () => {
//     toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
// };
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
/* we will explain what these classes do next! */
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
} */

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
