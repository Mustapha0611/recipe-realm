import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSplide from '@splidejs/vue-splide';
import axios from 'axios';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSplide);
app.mount('#app')
