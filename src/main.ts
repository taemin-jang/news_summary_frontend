import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";
declare const Kakao: any;
loadFonts();

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(vuetify).use(pinia).mount("#app");

// Kakao Developers에서 요약 정보 -> JavaScript 키
if (Kakao) {
  Kakao.init("830f4c1628e35b3abb879f8f98fd7841");
}
