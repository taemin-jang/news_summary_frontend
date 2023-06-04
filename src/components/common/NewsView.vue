<template>
  <v-card width="100%" color="innerBg" :elevation="4">
    <div class="d-flex justify-space-between">
      <v-card-title
        class="text-h5 font-weight-bold mt-1"
        v-html="article.title"
      ></v-card-title>
      <v-icon icon="cancel" @click="close"></v-icon>
    </div>
    <v-card-subtitle>{{ article.stock_id }} </v-card-subtitle>
    <v-card-subtitle> {{ article.pubDate }}</v-card-subtitle>

    <v-img
      :src="article.images[0]"
      alt=""
      class="rounded-xl elevation-4 ma-auto mt-1"
      width="50%"
      :cover="true"
    />
    <v-card-text
      v-for="(content, i) in contents"
      :key="i"
      v-html="content"
    ></v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onUnmounted } from "vue";

const props = defineProps(["article"]);
const emit = defineEmits(["closeModal"]);
const contents = props.article.content
  .split("\n")
  .filter(
    (v: string) => v !== "\t" && v !== "\t\t" && v !== "\t\t\t" && v !== ""
  );

const close = () => {
  emit("closeModal");
};

onUnmounted(() => {
  close();
});
</script>

<style scoped></style>
