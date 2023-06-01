<template>
  <v-card color="innerBg" :elevation="4" width="70%">
    <v-card-title>경제</v-card-title>
    <div no-gutters class="flex" v-for="(articles, key) in news" :key="key">
      <div
        class="flex-child"
        v-for="(article, id) in articles.list"
        :key="`${article}-${id}`"
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
            :src="article[0]?.images[0]"
            v-if="article[0]?.images !== null"
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
            class="text-subtitle-1 font-weight-bold mt-1"
            v-html="article[1]?.title"
          ></h1>
          <p class="text-start" v-html="article[1]?.description"></p>
        </v-sheet>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import AxiosService from "@/services/AxiosService";
import { NaverResponse } from "@/types/NaverSearch";
import { reactive, ref, onBeforeMount, Ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let AxiosInstance = AxiosService;

const allNews: Ref<NaverResponse[]> = ref([]);
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
