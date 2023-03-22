<template>
  <v-app-bar title="News summary">
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
    <v-btn icon="light_mode"></v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderView",
});
</script>

<style scoped></style>
