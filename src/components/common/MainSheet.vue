<!-- @format -->

<template>
  <v-tabs bg-color="mainBg" height="100" grow location="bottom" center-active>
    <v-tab direction="horizontal" v-for="(tab, key) in tabs" :key="key">{{
      tab
    }}</v-tab>
  </v-tabs>
  <v-main class="bg-mainBg pl-0 pt-0">
    <v-container class="d-flex justify-start">
      <router-view />
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const tabs = [
      "정치",
      "경제",
      "사회",
      "생활/문화",
      "세계",
      "기술/IT",
      "연예",
      "스포츠",
    ];
    return { tabs };
  },
});
</script>

<style scoped></style>
