import { defineStore } from "pinia";
import axios from "axios";
export const useRecipe = defineStore({
  id: "allRecipe",
  state: () => ({
    recipes: [],
    trending: [],
    searchedRecipes: [],
    searchText:'',
    searchbutton: "Cook",
    isLoading: false,
  }),
  actions: {
    async getCategory(apiUrl) {
      try {
        this.recipes = [];
        // console.log(this.recipes);
        const response = await axios.get(apiUrl);
        this.recipes = response.data;
        // console.log(this.recipes);
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
        this.$toast.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
      }
    },
    async getForYou() {
      try {
        this.recipes = [];
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?number=8&diet=whole30&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        this.recipes = response.data;
        // console.log(this.recipes.recipes);
      } catch (error) {
        console.error("Error fetching foods:", error);
        // console.error("Error fetching foods:", error);
       }
    },
    async searchRecipe() {
      try {
        this.isLoading = true;
        this.searchbutton = "Cooking";
        this.searchedRecipes = [];
        // console.log(this.searchText)
        // console.log(this.searchedRecipes.results);
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${this.searchText}&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );
        this.searchedRecipes = response.data;
        this.searchbutton = "Cook";
        // console.log(this.searchedRecipes.results);
      } catch (error) {
        console.error("Error fetching foods:", error);
       
};
      }
    },
  },
);
