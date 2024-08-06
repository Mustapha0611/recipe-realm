<template>
  <div>
    <div
      v-if="recipeDetails.length === 0"
      class="flex items-center justify-center h-[80dvh]"
    >
      <PulseLoader color="#bf0004" />
    </div>
    <div class="flex flex-col justify-center items-center md:items-start md:flex-row gap-5 pt-5" v-else >
      <section class="flex-1 flex-col justify-start items-center ">
        <div class="md:w-[90%] w-full m:h-96  rounded-3xl overflow-hidden">
          <img :src="recipeDetails.image" class="w-full h-full" :alt="recipeDetails.title" />
        </div>
        <div class="my-4 flex gap-3 flex-wrap items-center justify-between md:w-[90%] w-full" >
            <span class="font-style text-red-500">{{ recipeDetails.title }}</span><span class="flex items-center font-Noto-San gap-2 shadow-lg text-xs rounded-md py-2 px-3 text-red-600"><i class="pi pi-clock"></i> {{ recipeDetails.readyInMinutes }} mins</span>
        </div>
      </section>
      <section class="flex-1 font-Noto-San py-5 md:py-0">
        <h2 class="text-xl  font-semibold mb-2">Ingredients</h2>
        <ul class="flex gap-3 flex-wrap">
          <li class="py-2 px-4 hover:scale-105 hover:skew-x-2 transition-all cursor-pointer rounded-lg text-red-600 shadow-md " v-for="(ingredient, index) of recipeDetails.extendedIngredients">
            {{ ingredient.name }}
          </li>
        </ul>
        <h2 class="text-xl  font-semibold mt-3 mb-1">Instructions</h2>
        <ul class="flex flex-col gap-2 pb-5">
          <li v-for="step of recipeDetails.analyzedInstructions[0].steps">
            {{ step.number }}. {{ step.step }}
          </li>
        </ul>

      </section>
    </div>
  </div>
</template>
<script setup>
import { useRecipe } from "@/stores/getRecipe";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import axios from "axios";
import 'primeicons/primeicons.css'
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
// onMounted(() => {
//
// }),
const route = useRoute();
const recipeDetails = ref([]);
const recipe = useRecipe();
onMounted(() => {
  getRecipeDetails();
});
const getRecipeDetails = async () => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${
        route.params.id
      }/information?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    recipeDetails.value = response.data;
    console.log(recipeDetails.value);
  } catch (error) {
    console.error("Error fetching foods:", error);
  }
};
</script>
