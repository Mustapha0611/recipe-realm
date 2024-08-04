<template>
  <div class="">
    <h1 class="font-Noto-San font-semibold my-2">Popular Picks</h1>
    <div
      class="flex items-center  justify-center w-full lg:h-44 h-20"
      v-if="recipe.trending.length === 0"
    >
      <PulseLoader color="#bf0004" />
    </div>
    <Splide :options="options" class="font-Noto-San" v-else>
      <SplideSlide
        v-for="recipe of recipe.trending.recipes"
        class="bg-red-200 text-xs overflow-hidden relative h-64 font-semibold text-center text-slate-900 rounded-3xl"
      >
        <div>
          <router-link :to="{name:'recipe-details', params:{id:recipe.id}}">
            <img
              :src="recipe.image"
              alt=""
              class="overflow-hidden absolute w-full h-full" />

            <p
              class="absolute bottom-10 text-center text-white text-base px-5"
            >
              {{ recipe.title }}
            </p>
            <div class="absolute w-full h-full bg-slate-900/40"></div
          ></router-link>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { useRecipe } from "@/stores/getRecipe";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import "@splidejs/vue-splide/css";

const recipe = useRecipe();
onMounted(() => {
  recipe.getRandomRecipe();
});
const options = {
  type: "loop",
  // rewind: true,
  drag: "free",
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
    440: {
      perPage: 1,
    },
  },
};
</script>
