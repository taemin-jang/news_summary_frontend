<template>
  <v-card color="innerBg" :elevation="4" width="100%">
    <v-card-title>경제</v-card-title>
    <div no-gutters class="flex" v-for="(articles, key) in news" :key="key">
      <div
        class="flex-child"
        v-for="(article, id) in articles.article"
        :key="`${article.id}-${id}`"
      >
        <v-sheet
          :elevation="2"
          color="newsBg"
          class="pa-2 ma-2 rounded-t-xl"
          height="78vh"
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
            class="text-subtitle-1 font-weight-bold mt-1 mb-3"
            v-html="article.title"
          ></h1>
          <p
            class="text-start $card-subtitle-text-overflow mb-2"
            v-html="article.summary"
          ></p>
        </v-sheet>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import AxiosService from "@/services/AxiosService";
import { ReNaverResponse } from "@/types/NaverSearch";
import { reactive, ref, onBeforeMount, Ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let AxiosInstance = AxiosService;

const allNews: Ref<ReNaverResponse[]> = ref([]);
const news = reactive(allNews);

// 마운트 되기 전에 데이터를 불러옴
onBeforeMount(async () => {
  const response = await AxiosInstance.getNaver("삼성전자");
  console.log(response);
  // if (!response.length) router.push("/mypage");

  allNews.value = response;
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
