<template>
  <div class="flex justify-center items-center gap-4 py-5">
    <section>
      <input
        type="text"
        name="recipe-search"
        placeholder="Search Recipe"
        class="px-4 md:py-3 py-2 rounded-xl md:-[50dvw] w-[65dvw] font-style bg-red-100 accent-slate-100 focus:outline-none"
      />
    </section>
    <section>
      <button type="submit" class="bg-red-400 font-style text-white px-4 md:px-7 py-2 md:py-3 rounded-xl">{{ recipe.searchText }}</button>
    </section>
  </div>
</template>
<script setup>
import { useRecipe } from "@/stores/getRecipe";
const recipe = useRecipe();
</script>
