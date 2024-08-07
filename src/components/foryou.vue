<template>
    <div class="">
      <h1 class="font-Noto-San font-semibold my-2">For You</h1>
      <div class="flex items-center justify-center w-full h-44" v-if="recipe.trending.length === 0">
          <PulseLoader color="#bf0004" />
      </div>
      <recipeByType :data="recipe.recipes" v-else/>
    </div>
  </template>
  <script setup>
  import { onMounted } from "vue";
  import { useRecipe } from "@/stores/getRecipe";
  import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
  import recipeByType from '@/components/recipeByType.vue'
  import "@splidejs/vue-splide/css";
  
  const recipe = useRecipe();
  onMounted(() => {
    recipe.getForYou();
  });
 
  </script>
  