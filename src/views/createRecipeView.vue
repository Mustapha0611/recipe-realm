<template>
  <div class="flex h-[87dvh] py-5">
    <section class="flex-1">
      <h2 class="text-red-700 font-semibold text-3xl my-5">Add your Recipe</h2>
      <form class="flex flex-col gap-4">
        <!-- Recipe Form Inputs -->
        <div class="flex gap-4">
          <div class="flex flex-col gap-1 flex-1">
            <label for="title" class="text-xs font-semibold">Title</label>
            <input
              type="input"
              class="px-3 text-xs py-4 text-red-700 bg-red-50 outline-none rounded-md"
              v-model="title"
              placeholder="Recipe title"
            />
          </div>
          <div class="flex flex-col gap-1 flex-1">
            <label for="duration" class="text-xs font-semibold">Duration</label>
            <input
              type="input"
              class="px-3 text-xs py-4 text-red-700 bg-red-50 outline-none rounded-md"
              placeholder="Recipe duration"
              v-model="time"
            />
          </div>
        </div>

        <!-- Ingredients Input -->
        <div class="flex flex-col gap-1 flex-1">
          <label for="ingredients" class="text-xs font-semibold">Ingredients</label>
          <input
            type="input"
            class="px-3 text-xs py-4 text-red-700 bg-red-50 outline-none rounded-md"
            placeholder="Type ingredients"
            v-model="ingredients"
          />
        </div>

        <!-- Steps Input and List -->
        <div class="flex flex-col gap-1 flex-1">
          <label for="steps" class="text-xs font-semibold">Steps</label>
          <input
            type="input"
            class="px-3 text-xs py-4 text-red-700 bg-red-50 outline-none rounded-md"
            placeholder="Add a step"
            v-model="step"
          />
          <button
            @click.prevent="addStep()"
            class="border-2 rounded-md border-red-700 bg-red-700 text-white w-40 mt-4 py-2"
          >
            Add a step
          </button>
        </div>

        <!-- Image Upload -->
        <div class="flex flex-col gap-2">
          <label for="image" class="text-xs font-semibold">Recipe Image:</label>
          <input
            type="file"
            id="image"
            class="text-red-200"
            @change="onFileChange"
            accept="image/*"
            required
          />
        </div>

        <!-- Submit Button -->
        <button
          @click.prevent="submitRecipe()"
          :disabled="isLoading"
          class="w-full bg-red-700 font-semibold border-red-700 hover:bg-white hover:text-red-700 transition-colors duration-300 border-2 py-2 text-slate-50 rounded-md"
        >
          <span v-if="isLoading">Adding</span>
          <span v-else>Add recipe</span>
        </button>
      </form>
    </section>

    <!-- Recipe Steps Section -->
    <section class="flex-1 self-start py-5 px-10">
      <h3 class="text-3xl">Steps</h3>
      <ul>
        <li v-for="step of steps" :key="step.index">
          {{ step.index }} - {{ step.step }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@/stores/auth";
import { useToast } from "primevue/usetoast";
import { supabase } from "@/supabase/init";
import "primeicons/primeicons.css";

// Auth and Toast setup
const auth = useAuth();
const toast = useToast();

// Form data and state
let title = ref("");
let time = ref("");
let ingredients = ref("");
let step = ref("");
let steps = ref([]);
let imageFile = ref(null);
let index = ref(0);
const isLoading = ref(false);

// User ID from auth
const user_id = auth.user.data.user.id;

// Add Step Logic
const addStep = () => {
  index.value += 1;
  steps.value.push({
    index: index.value,
    step: step.value,
  });
  step.value = ""; // Reset step input
};

// File Change Handler
const onFileChange = (event) => {
  imageFile.value = event.target.files[0];
};

// Submit Recipe Function
const submitRecipe = async () => {
  if (!imageFile.value) {
    alert("Please select an image.");
    return;
  }

  try {
    isLoading.value = true;

    // Step 1: Insert recipe details into the database
    const { data: recipeData, error: insertError } = await supabase
      .from("Recipe-details")
      .insert({
        userID: user_id,
        details: {
          title: title.value,
          ingredients: ingredients.value.split(","),
          time: parseInt(time.value),
          steps: steps.value,
        },
      })
      .select();

    if (insertError) {
      throw new Error(`Recipe submission failed: ${insertError.message}`);
    }

    // Get the newly created recipe ID
    const recipe_id = recipeData[0].id;

    // Step 2: Generate unique image name
    const imagePath = `recipes/${recipe_id}-${Date.now()}-${imageFile.value.name}`;

    // Step 3: Upload the image
    const { error: imageError } = await supabase.storage
      .from("recipe-images")
      .upload(imagePath, imageFile.value);

    if (imageError) {
      console.error(`Image upload failed: ${imageError.message}`);
      throw new Error("Image upload failed. Check Supabase storage permissions and file size limits.");
    }

    // Step 4: Get the public URL for the uploaded image
    const { publicUrl } = supabase.storage
      .from("recipe-images")
      .getPublicUrl(imagePath);

    if (!publicUrl) {
      throw new Error("Failed to retrieve the public URL for the image.");
    }

    // Step 5: Update the recipe with the image URL
    const { error: updateError } = await supabase
      .from("Recipe-details")
      .update({ imgUrl: publicUrl })
      .eq("id", recipe_id);

    if (updateError) {
      throw new Error(
        `Failed to update recipe with image: ${updateError.message}`
      );
    }

    toast.add({ severity: "success", summary: "Success", detail: "Recipe submitted successfully!" });

    // Clear the form after submission
    title.value = "";
    ingredients.value = "";
    steps.value = [];
    imageFile.value = null;
  } catch (error) {
    console.error("Error during submission:", error.message);
    toast.add({ severity: "error", summary: "Error", detail: error.message });
  } finally {
    isLoading.value = false;
  }
};

</script>

<style scoped>
/* Add your styles here */
</style>
