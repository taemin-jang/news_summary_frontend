<template>
  <v-card color="innerBg" :elevation="4" width="100%">
    <v-card-title>경제</v-card-title>

    <div class="flex">
      <div class="flex" v-for="(articles, key) in news" :key="key">
        <div
          v-for="(article, id) in articles.article"
          :key="`${article.id}-${id}`"
          class="flex-child h-auto"
        >
          <v-sheet
            :elevation="2"
            color="newsBg"
            class="pa-2 ma-2 rounded-t-xl"
            v-if="article"
          >
            <v-img
              class="bg-white rounded-xl elevation-4"
              width="100%"
              :aspect-ratio="16 / 9"
              :cover="false"
              :src="article.images[0]"
              v-if="article.images[0] !== null"
            >
            </v-img>
            <v-img
              class="bg-white rounded-xl elevation-4"
              width="100%"
              :aspect-ratio="16 / 9"
              :cover="false"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              v-else
            ></v-img>
            <h1
              class="text-h5 font-weight-bold mt-1 mb-3"
              v-html="article.title"
            ></h1>
            <p
              class="text-start text-body-1 $card-subtitle-text-overflow mb-2"
              v-html="article.summary"
            ></p>
            <div class="flex justify-center">
              <v-chip
                v-for="(keyword, idx) in article.keywords"
                class="ma-1 text-body-2"
                :key="idx"
                variant="elevated"
                size="small"
              >
                {{ keyword }}
              </v-chip>
            </div>
          </v-sheet>
        </div>
      </div>
    </div>
    <div class="d-flex justify-center">
      <font-awesome-icon
        class="ma-2"
        icon="fa-solid fa-spinner"
        spin
        size="2xl"
        v-if="!isLoading"
      />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import AxiosService from "@/services/AxiosService";
import { ReNaverResponse } from "@/types/NaverSearch";
import { reactive, ref, onBeforeMount, Ref } from "vue";
import { useInfiniteScroll } from "@/services/InfiniteScroll";
let AxiosInstance = AxiosService;

const allNews: Ref<ReNaverResponse[]> = ref([]);
const news = reactive(allNews);
let page = 0;

const load = async () => {
  setTimeout(async () => {
    const res = await AxiosInstance.getNaver(++page);
    news.value.push(...res);
  }, 500);
};

const isLoading = useInfiniteScroll(load);

// 마운트 되기 전에 데이터를 불러옴
onBeforeMount(async () => {
  const response = await AxiosInstance.getNaver(page);
  console.log(response);
  news.value = response.filter((v) => v.article.length);
});
</script>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}

.flex .flex-child {
  width: 50%;
  height: 100%;
}
</style>
