<template>
  <div>
    <backButton />
    <section
      class="flex items-center justify-center w-full h-[80dvh]"
      v-if="recipe.recipes.length === 0"
    >
      <PulseLoader color="#bf0004" />
    </section>

    <recipeByType :data="recipe.recipes" v-else />
  </div>
</template>
<script setup>
import { useRecipe } from "@/stores/getRecipe";
import { onMounted } from "vue";
import backButton from '../components/backButton.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import recipeByType from "../components/recipeByType.vue";

// const apiKey =
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?number=12&type=beverage&apiKey=${
  import.meta.env.VITE_API_KEY
}`;
const recipe = useRecipe();
onMounted(() => {
  recipe.getCategory(apiUrl);
  console.log(apiUrl);
  // Add fetch or axios code to retrieve data here
});
</script>
