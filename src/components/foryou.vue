<template>
    <div class="">
      <h1 class="font-Noto-San font-semibold my-2">For You</h1>
      <div class="flex items-center justify-center w-full h-44" v-if="recipe.trending.length === 0">
          <PulseLoader />
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
  const options = {
    type: "loop",
    // rewind: true,
    pagination: false,
    gap: "2rem",
    autoplay: true,
    interval: 3000,
    // focus:0,
    perPage: 3,
    arrows: false,
    breakpoints: {
      640: {
        perPage: 2,
      },
    },
  };
  </script>
  