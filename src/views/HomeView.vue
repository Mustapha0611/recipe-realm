<script setup>
import searchBar from "@/components/searchBar.vue";
import categories from "@/components/categories.vue";
import Trending from "@/components/Trending.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import recipeByType from "@/components/recipeByType.vue";
import foryou from "@/components/foryou.vue";
import { useRecipe } from "@/stores/getRecipe.js";

const recipe = useRecipe();
</script>

<template>
  <main>
    <searchBar />
    <div v-if="recipe.isLoading">
      <div class="w-full flex justify-center items-center h-[80dvh]">
        <PulseLoader color="#bf0004" />
      </div>
      <recipeByType :data="recipe.recipes" />
    </div>
    <div v-else>
      <categories />
      <Trending />
      <foryou />
    </div>
  </main>
</template>
