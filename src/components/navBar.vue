<template>
    <header class="flex justify-between items-center h-20 px-2 lg:px-32 shadow-md">
        <section>
            <router-link to="/" >
                <button class="w-24 h-20">
                <img src="@/assets/logo.png" alt="logo" class="w-full h-full">
                </button>
            </router-link>
         
        </section>
        <section>
            <router-link to="/">
                <button class="w-10 h-10 opacity-75">
                <img src="@/assets/circle-user.png" alt="logo" class="w-full h-full">
                </button>
            </router-link>
        </section>
    </header>
</template>