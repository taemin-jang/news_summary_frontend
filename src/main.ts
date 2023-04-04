import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import axios from "axios";

loadFonts();

const app = createApp(App);

// axios 전역 변수 설정
app.config.globalProperties.$axios = axios;

app.use(router).use(vuetify).mount("#app");
