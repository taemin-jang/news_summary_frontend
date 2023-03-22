<template>
  <v-app-bar title="News summary" color="headerBg">
    <v-card-text>
      <v-text-field
        density="compact"
        variant="solo"
        label="Search keyword"
        append-inner-icon="mdi:mdi-magnify"
        single-line
        hide-details></v-text-field>
      <!-- @click:append-inner="onClick" -->
    </v-card-text>
    <v-spacer></v-spacer>
    <v-btn
      icon="dark_mode"
      @click="toggleTheme"
      v-if="theme.current.value.dark"></v-btn>
    <v-btn icon="light_mode" @click="toggleTheme" v-else></v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTheme } from "vuetify";

export default defineComponent({
  name: "HeaderView",
  setup() {
    const theme = useTheme();
    console.log(theme);
    return {
      theme,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark";
      },
    };
  },
});
</script>

<style scoped></style>
