<template>
  <div class="">
    <h1 class="font-Noto-San font-semibold mb-2">Categories</h1>
    <Splide :options="options" class="font-Noto-San w-full">
                <SplideSlide class="bg-red-100 transition-all e-y-4  text-xs font-semibold text-center text-slate-900  py-2 rounded-xl" >
                    <router-link to="/main-course">Main course</router-link>
                </SplideSlide>
                <SplideSlide class="bg-red-100 transition-all   text-xs font-semibold text-center text-slate-900  py-2 rounded-xl">
                    <router-link to="/break-fast">BreakFast</router-link>
                </SplideSlide>
                <SplideSlide class="bg-red-100 transition-all   text-xs font-semibold text-center text-slate-900  py-2 rounded-xl">
                    <router-link to="/dessert">Dessert</router-link>
                </SplideSlide>
                <SplideSlide class="bg-red-100 transition-all   text-xs font-semibold text-center text-slate-900  py-2 rounded-xl">
                    <router-link to="/appertizer">appetizer</router-link>
                </SplideSlide>
                <SplideSlide class="bg-red-100 transition-all   text-xs font-semibold text-center text-slate-900  py-2 rounded-xl">
                    <router-link to="side-dish">side dish</router-link>
                </SplideSlide>
                <SplideSlide class="bg-red-100 transition-all   text-xs font-semibold text-center text-slate-900  py-2 rounded-xl">
                    <router-link to="/snack">Snack</router-link>
                </SplideSlide>
                <SplideSlide class="bg-red-100 transition-all   text-xs font-semibold text-center text-slate-900  py-2 rounded-xl">
                    <router-link to="/drinks">Drinks</router-link>
                </SplideSlide>
                <SplideSlide class="bg-red-100 transition-all   text-xs font-semibold text-center text-slate-900  py-2 rounded-xl">
                    <router-link to="/beverages">Beverages</router-link>
                </SplideSlide>
                <SplideSlide class="bg-red-100 transition-all   text-xs font-semibold text-center text-slate-900  py-2 rounded-xl">
                    <router-link to="/soup">Soup</router-link>
                </SplideSlide>
        </Splide>
  </div>
</template>
<script setup>
// import { useRecipe } from "@/stores/getRecipe";
// const recipe = useRecipe();
import '@splidejs/vue-splide/css';
const options={
        type: 'loop',
        rewind: true,
        pagination:false,
        gap:'1rem',
        drag:'free',
        autoplay:true,
        interval:4000,
        // focus:0,
        perPage:7,
        arrows: false,
        breakpoints: {
            1240: {
            perPage: 6,
            },
          880: {
            perPage: 4,
            },
            640:{
                perPage:3
            }
        }
    }
</script>
