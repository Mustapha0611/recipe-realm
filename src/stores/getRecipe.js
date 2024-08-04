import { defineStore } from "pinia";
import axios from "axios";
import { isShallow } from "vue";
export const useRecipe = defineStore({
  id: "allRecipe",
  state: () => ({
    recipes: [],
    trending: [],
    searchedRecipes: [],
    searchText: "Cook",
    isLoading:false
  }),
  actions: {
    async getCategory(apiUrl) {
      try {
        this.recipes = [];
        console.log(this.recipes);
        const response = await axios.get(apiUrl);
        this.recipes = response.data;
        console.log(this.recipes);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    },
    async getRandomRecipe() {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        this.trending = response.data;
        console.log(this.trending.recipes);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    },
    async getForYou() {
      try {
        this.recipes = []
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?number=8&diet=whole30&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        this.recipes = response.data;
        console.log(this.recipe.recipes);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    },
    async searchRecipe() {
      try {
        this.isLoading=true
        this.searchText = "Cooking";
        this.recipes = [];
        console.log(this.recipes);
        const response = await axios.get(apiUrl);
        this.recipes = response.data;
        this.searchText = "Cook";
        console.log(this.recipes);
      } catch (error) {
        console.error("Error fetching foods:", error);
      }
    },
  },
});
