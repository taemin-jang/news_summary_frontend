// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "material-design-icons-iconfont/dist/material-design-icons.css";

// Vuetify
import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";
import { mdi } from "vuetify/iconsets/mdi";

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides,
  icons: {
    defaultSet: "md",
    aliases,
    sets: {
      md,
      mdi,
    },
  },
});
