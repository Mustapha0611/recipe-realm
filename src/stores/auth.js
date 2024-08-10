import { defineStore } from "pinia";
export const useAuth = defineStore({
  id: "Auth",
  state: () => ({
    isLoggedIn: false
  }),
  actions:{
    
  }
});
