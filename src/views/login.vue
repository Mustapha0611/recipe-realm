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
          class="px-3 py-2 bg-red-50 outline-none rounded-md"
          placeholder="enter your email"
          aria-label="username"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="Password">Password</label
        ><input
          type="password"
          class="px-3 py-2 bg-red-50 outline-none rounded-md"
          placeholder="enter your password"
          aria-label="password"
        />
      </div>
      <div>
        <button
          class="w-full bg-red-700 font-bold hover:border-red-700 hover:bg-white hover:text-red-700 transition-colors duration-300 border-2 h py-2 text-slate-50 rounded-md"
        >
          Login
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
