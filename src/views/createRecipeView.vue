<template>
  <div class="flex  h-[87dvh] py-5">
    <section class="flex-1">
      <h2 class="text-red-700 font-semibold text-3xl my-5">Add your Recipe</h2>
      <form class="flex flex-col gap-4">
        <div class="flex gap-4">
          <div class="flex flex-col gap-1 flex-1">
        <label for="title" class="text-xs font-semibold">Title</label
        ><input
          type="input"
          class="px-3 text-xs py-4 text-red-700 bg-red-50 outline-none rounded-md"
          placeholder="Recipe title"
    
        />
      </div>
      <div class="flex flex-col gap-1 flex-1">
        <label for="duration" class="text-xs font-semibold">Duration</label
        ><input
          type="input"
          class="px-3 text-xs py-4 text-red-700 bg-red-50 outline-none rounded-md"
          placeholder="Recipe titile"
    
        />
      </div>
        </div>
        <div class="flex flex-col gap-1 flex-1">
        <label for="duration" class="text-xs font-semibold">Ingredients</label
        ><input
          type="input"
          class="px-3 text-xs py-4 text-red-700 bg-red-50 outline-none rounded-md"
          placeholder="Type ingredients"

        />
      </div>
      <div class="flex flex-col gap-1 flex-1">
        <label for="duration" class="text-xs font-semibold">Steps</label
        ><input
          type="input"
          class="px-3 text-xs py-4 text-red-700 bg-red-50 outline-none rounded-md"
          placeholder="Add a step"
          v-model="step"
        />
        <button @click.prevent="addStep()" class="border-2 rounded-md border-red-700 bg-red-700 text-white w-40 mt-4 py-2">Add a step</button>
      </div>
      </form>
    </section>
    <section class="flex-1 self-start py-5 px-10">
      <div>

      </div>
      <ul>
        <h3 class="text-3xl">Steps</h3>
        <li v-for="step of steps" :key="step.index">
         {{ step.index }} - {{ step.step }}
        </li>
      </ul>
    </section>
  </div>
</template>
<script setup>
import { ref } from 'vue'
 let index = ref(0);
  let step = ref('')
 const steps = ref([])
 const addStep = ()=>{
  index.value = index.value + 1
  steps.value.push({
    index: index.value,
    step: step.value
  })
  console.log(steps.value)
  step.value = ''

 }
</script>
<style scoped></style>