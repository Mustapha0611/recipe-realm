<template>
  <div class="pt-5">
    <section class="flex justify-between">
      <div>
        <h1 class="text-2xl text-red-700 capitalize">
          Welcome
          {{ auth.user?.data?.user?.user_metadata?.user_name || "user" }}
        </h1>
      </div>
      <div v-if="isLoading">
        <button
          class="flex gap-2 items-center text-white hover:bg-slate-50 hover:text-red-700 border-2 border-red-700 transition-all bg-red-700 rounded-md py-2 px-4 font-semibold"
        >
          Create <i class="pi pi-plus"></i>
        </button>
      </div>
    </section>
    <section class="flex flex-col justify-center items-center w-full">
      <span class="">
        <img src="@/assets/men.png" alt="chefs" class="w-96 h-96" />
      </span>
      <span>
        <button
          class="flex gap-2 items-center text-white hover:bg-slate-50 hover:text-red-700 border-2 border-red-700 transition-all bg-red-700 rounded-md py-2 px-4 font-semibold"
        >
          Create new recipe <i class="pi pi-plus"></i>
        </button>
      </span>
      <div></div>
    </section>
  </div>
</template>

<script setup>

import { useAuth } from "../stores/auth.js";
import 'primeicons/primeicons.css'
import { useRouter } from "vue-router";
import {ref} from 'vue'
const auth = useAuth();
const router = useRouter();
const isLoading = ref(false);

const createNewRecipe = () => {
  router.push("/create-recipe");
};
</script>
