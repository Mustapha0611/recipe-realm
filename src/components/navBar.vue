<template>
  <header
    class="flex justify-between items-center h-20 px-2 lg:px-32 shadow-md"
  >
    <section>
      <router-link to="/">
        <button class="w-24 h-20">
          <img src="@/assets/logo.png" alt="logo" class="w-24 h-20" />
        </button>
      </router-link>
    </section>
    <section class="flex items-center gap-4">
      <div>
        <span
          v-if="auth.user"
          @click="signOut()"
          to="login"
          :class="{'hidden':route.name =='login'}"
          class="border-2 cursor-pointer border-orange-700 px-6 font-Roboto text-orange-700 py-2 rounded-3xl"
        >
          Logout
        </span>
        <router-link
          v-else
          :to="{ name: 'login' }"
          class="border-2 border-orange-700 px-6 font-Roboto text-orange-700 py-2 rounded-3xl"
          :class="{'hidden':route.name =='login'}"
        >
          Login
        </router-link>
      </div>
      <!-- <div
        class="flex items-center gap-3 font-Roboto capitalize"
        v-if="auth.isLoggedIn"
      >
        <img src="@/assets/circle-user.png" alt="logo" class="w-8 h-8" />
      </div> -->
    </section>
  </header>
</template>
<script setup>
import { useAuth } from "../stores/auth.js";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute(); 
const auth = useAuth();

const signOut = () => {
  auth.logOut();
  router.push({
    name: "login",
  });
};
</script>
