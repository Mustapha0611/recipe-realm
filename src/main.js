import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import VueSplide from "@splidejs/vue-splide";
// import axios from 'axios';
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { useAuth } from "./stores/auth";
import ToastService from "primevue/toastservice";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
const auth = useAuth();
auth.loadUser();

app.use(ToastService);

app.use(VueSplide);
app.mount("#app");
