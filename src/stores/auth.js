import { defineStore } from "pinia";
import { supabase } from "@/supabase/init";

export const useAuth = defineStore({
  id: "Auth",
  state: () => ({
    isLoggedIn: null,
    user: null,
  }),
  actions: {
    setLoggedIn() {
      this.isLoggedIn = true;
      localStorage.setItem("loggedIn", this.isLoggedIn);
    },
    loadUser() {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        this.user = JSON.parse(storedUser);
        console.log(this.user)
      }
    },
    loadSession() {
      const sessionStatus = localStorage.getItem('loggedIn');
      if (sessionStatus) {
        this.isLoggedIn = sessionStatus;
      }
    },
    async getCurrentUser() {
      const user = await supabase.auth.getUser();
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      console.log(localStorage.getItem('user'))
      console.log("user sign in");
      console.log(user);
    },
    async logOut() {
      const { error } = await supabase.auth.signOut();
      this.user = null
      localStorage.removeItem("user");
      localStorage.removeItem("loggedIn");
      console.log("user sign out");
    },
  },
});
