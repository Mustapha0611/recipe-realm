<template>
  <div class="flex items-center justify-center h-[85dvh] w-full">
    <form
      class="md:w-96 w-[96%] flex flex-col gap-4 rounded-xl shadow-xl shadow-orange-100 md:p-10 p-5"
    >
      <h1 class="text-2xl font-semibold font-Roboto text-orange-600">Login</h1>
      <div class="flex flex-col gap-2">
        <label for="username">Email</label
        ><input
          type="email"
          class="px-3 text-xs py-2 text-red-700 bg-red-50 outline-none rounded-md"
          placeholder="enter your email"
          v-model="email"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="Password">Password</label
        ><input
          type="password"
          class="px-3 py-2 text-xs bg-red-50  outline-none rounded-md"
          placeholder="enter your password"
          aria-label="password"
           v-model="password"
        />
      </div>
      <div>
        <button
        @click.prevent="SignIn()"
          class="w-full bg-red-700 font-bold hover:border-red-700 hover:bg-white hover:text-red-700 transition-colors duration-300 border-2 h py-2 text-slate-50 rounded-md"
        > <span v-if="loggingin"><i class="pi pi-spin pi-spinner"></i></span>
          <span v-else>Login</span>
        </button>
        <p class="pt-4">
          Don't have an account?
          <router-link to="/signup" class="text-red-700"
            >Click here</router-link
          >
        </p>
      </div>
      <div></div>
    </form>
  </div>
</template>
<script setup>
import { useToast } from "primevue/usetoast";
import 'primeicons/primeicons.css'
import { supabase } from "@/supabase/init";
import { ref } from "vue";
import { useRouter } from 'vue-router'

const email = ref("");
const password = ref("");
const toast = useToast();
const route = useRouter()
const loggingin= ref(false)

const SignIn = async () => {
   loggingin.value= true
  if ( !email.value || !password.value) {
    loggingin.value = false
    toast.add({
      severity: "error",
      summary: "Content required",
      detail: "Please fill the form",
      life: 3000,
    });
  } else {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });

    if (error) {
      toast.add({
        severity: "error",
        summary: "SignIn Failed",
        detail: error.message,
        life: 3000,
      });
      loggingin.value=false
    } else {
      route.push({
      name:'dashboard'
    })
    }
   
  }
 

};
</script>
