<template>
  <v-card color="innerBg" :elevation="4" width="70%">
    <v-card-title>경제</v-card-title>
    <v-row no-gutters v-for="(article, key) in news" :key="key">
      <v-col>
        <v-sheet
          :elevation="2"
          color="newsBg"
          class="pa-2 ma-2 rounded-t-xl"
          v-if="article">
          <v-img
            class="bg-white rounded-xl elevation-4"
            width="100%"
            :src="article?.images[0]"
            cover></v-img>
          <div class="text-subtitle-1 font-weight-bold mt-1">
            {{ article?.title }}
          </div>
          <p class="text-start" v-html="article?.description"></p>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet :elevation="2" color="newsBg" class="pa-2 ma-2 rounded-t-xl">
          <v-img
            class="bg-white rounded-xl elevation-4"
            width="100%"
            :src="article?.images[0]"
            cover></v-img>
          <div class="text-subtitle-1 font-weight-bold mt-1">
            {{ article?.title }}
          </div>
          <p class="text-start" v-html="article?.description"></p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import AxiosService from "@/services/AxiosService";
import { NaverResponse } from "@/types/NaverSearch";
import { reactive, ref, onBeforeMount, Ref } from "vue";

let AxiosInstance = AxiosService;

const allNews: Ref<NaverResponse[]> = ref([]);
const news = reactive(allNews);

// 마운트 되기 전에 데이터를 불러옴
onBeforeMount(async () => {
  const response: NaverResponse[] = await AxiosInstance.getNaver("삼성");
  allNews.value = response;
});

console.log(news);
</script>

<style scoped></style>
