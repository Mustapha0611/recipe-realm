<template>
  <div class="flex justify-center items-center gap-4 py-5">
    <section>
      <input
        type="text"
        name="recipe-search"
        placeholder="Search Recipe"
        v-model="searchedText"
        class="px-4 md:py-3 py-2 rounded-xl md:-[50dvw] w-[65dvw] font-style bg-red-100 accent-slate-100 focus:outline-none"
      />
    </section>
    <section>
      <button
        type="submit"
        @click.prevent="search()"
        class="bg-red-700 font-style text-white px-4 md:px-7 py-2 md:py-3 rounded-xl"
      >
        {{ recipe.searchbutton }}
      </button>
    </section>
  </div>
</template>
<script setup>
import { useRecipe } from "@/stores/getRecipe";
import { ref } from "vue";
import { useToast } from 'primevue/usetoast';

const toast = useToast()
const recipe = useRecipe();
const searchedText = ref(useRecipe.searchText);
const search = () => {
  if (!searchedText.value) {
    toast.add({ severity: 'error', summary: 'Content  required', detail: 'Please fill the form', life: 3000 });
  } else {
    console.log(searchedText.value)
    recipe.searchRecipe();
    
  }
};
</script>
