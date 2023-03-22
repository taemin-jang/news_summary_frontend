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
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          headerBg: "#ffffff",
          surface: "#ffffff",
          sidebarBg: "#e5e5e5",
          mainBg: "#f2f2f2",
          innerBg: "#d9d9d9",
          newsBg: "#cccccc",
          fontColor: "#333333",
        },
      },
      dark: {
        colors: {
          headerBg: "#333333",
          surface: "#333333",
          sidebarBg: "#4c4c4c",
          mainBg: "#666666",
          innerBg: "#7f7f7f",
          newsBg: "#999999",
          fontColor: "#ffffff",
        },
      },
    },
  },
});
