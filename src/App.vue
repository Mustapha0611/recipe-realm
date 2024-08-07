<script setup>
import { RouterView } from "vue-router";
import navBar from "./components/navBar.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";

// const toast = useToast();
// const showSuccess = () => {
//     toast.add({ severity: 'success', summary: 'Success Message', detail: 'Message Content', life: 3000 });
// };
</script>

<template>
  <Toast
    :pt="{
      root: {
        class:'!w-72',
      },
    }"
  />
  <navBar />
  <div class="lg:px-32 md:px-10 px-4">
    <RouterView />
  </div>
</template>
<style scoped></style>
