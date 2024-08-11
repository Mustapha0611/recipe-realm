<template>
  <div class="flex items-center justify-center h-[85dvh] w-full">
    <form
      class="md:w-96 w-[96%] flex flex-col gap-4 rounded-xl shadow-xl shadow-orange-100 md:p-10 p-5"
    >
      <h1 class="text-2xl font-semibold font-Roboto text-orange-600">SignUp</h1>
      <div class="flex flex-col gap-2">
        <label for="email">Email</label>
        <input
          type="email"
          class="px-3 py-2 bg-red-50 outline-none font-Roboto text-xs text-orange-800 rounded-md"
          placeholder="Enter your Email"
          v-model="email"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="username">Username</label>
        <input
          type="text"
          class="px-3 py-2 bg-red-50 outline-none font-Roboto text-xs text-orange-800 rounded-md"
          placeholder="Select a username"
          aria-label="username"
          v-model="username"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password">Password</label>
        <input
          type="password"
          class="px-3 py-2 bg-red-50 outline-none font-Roboto text-xs text-orange-800 rounded-md"
          placeholder="Select your password"
          v-model="password"
          required
        />
      </div>
      <div>
        <button
          class="w-full bg-red-700 font-bold hover:border-red-700 hover:bg-white hover:text-red-700 transition-colors duration-300 border-2 h py-2 text-slate-50 rounded-md"
          @click.prevent="SignUp()"
        >
          <span v-if="signUploading"
            ><i class="pi pi-spin pi-spinner"></i
          ></span>
          <span v-else>Sign Up</span>
        </button>
        <p class="pt-4">
          Already have an account?
          <router-link to="/login" class="text-red-700">Click here</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { supabase } from "@/supabase/init";
import { ref } from "vue";
import { useRouter } from "vue-router";
import "primeicons/primeicons.css";

const username = ref("");
const email = ref("");
const password = ref("");
const toast = useToast();
const route = useRouter();
let signUploading = ref(false);
const SignUp = async () => {
  signUploading.value = true;
  console.log(signUploading)
  if (!email.value || !password.value) {
    signUploading.value = false;
    toast.add({
      severity: "error",
      summary: "Content required",
      detail: "Please fill the form",
      life: 3000,
    });
  } else if (password.value.length < 5) {
    toast.add({
      severity: "warn",
      summary: "Warning",
      detail: "Password too short",
      life: 3000,
    });
  } else {
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      options: {
        data: {
          user_name: username.value,
        },
      },
    });

    if (error) {
      toast.add({
        severity: "error",
        summary: "Signup Failed",
        detail: error.message,
        life: 3000,
      });
    } else {
      toast.add({
        severity: "success",
        summary: "Signup Successful",
        detail: "Proceed to login",
        life: 3000,
      });
      route.push({
        name: "login",
      });
    }
    signUploading.value = false;
    console.log(signUploading.value)
    password.value = "";
    email.value = "";
    username.value = "";
  }
};
</script>
