import { defineStore } from "pinia";
import { supabase } from "@/supabase/init";


export const useAuth = defineStore({
  id: "Auth",
  state: () => ({
    isLoggedIn: null,
    user:[]
  }),
  actions: {
    setLoggedIn() {
      this.isLoggedIn = true;
    },
    async getCurrentUser() {
      this.isLoggedIn = true
      const user = await supabase.auth.getUser();
      this.user = user
      console.log('user sign in')
       console.log(user);
    },
    async logOut() {
      const { error } = await supabase.auth.signOut();
      this.isLoggedIn =false
      console.log('user sign out')
    },
  },
});
