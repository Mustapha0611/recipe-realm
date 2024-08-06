<template>
  <div>
    <section
      class="grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10"
    >
      <div
        v-for="main in data.results"
        :key="main.id"
        class="shadow-lg rounded-xl bg-red-50/50 hover:bg-pink-500 text-pink-500 hover:scale-105 transition-all duration-200 hover:text-slate-100"
      >
        <div class="w-[100%] h-40 mx-auto object-contain overflow-hidden">
          <router-link
            :to="{ name: 'recipe-details', params: { id: main.id } }"
          >
            <img
              :src="main.image"
              :alt="main.title"
              class="w-full h-full rounded-t-lg object-cover"
          /></router-link>
        </div>
        <p class="text-center font-style text-xs px-3 pt-3 pb-1.5 font-light">
          {{ main.title }}
        </p>
      </div>
    </section>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps({
  data: Object,
});
</script>
