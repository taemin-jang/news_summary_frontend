<template>
  <v-card class="d-flex justify-center" color="innerBg" :elevation="4" width="100%">
    <div>
      <v-card-title>뉴스</v-card-title>
      <v-dialog v-model="isModal" width="70%">
        <NewsView :article="article" @closeModal="closeModal" />
      </v-dialog>
      <div v-if="!route.query.search">
        <div class="flex" v-for="(articles, key) in news" :key="key">
          <div
            v-for="(article, id) in articles.article"
            :key="`${article.id}-${id}`"
            class="flex-child h-auto"
            @click="showModal(article)"
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
              <h1 class="text-h5 font-weight-bold mt-1 mb-3" v-html="article.title"></h1>
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
      <div class="flex" v-else>
        <div
          v-for="(article, id) in searchNews"
          :key="`${article.id}-${id}`"
          class="flex-child h-auto"
          @click="showModal(article)"
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
            <h1 class="text-h5 font-weight-bold mt-1 mb-3" v-html="article.title"></h1>
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

      <div class="d-flex justify-center">
        <font-awesome-icon
          class="ma-2"
          icon="fa-solid fa-spinner"
          spin
          size="2xl"
          v-if="!isLoading"
        />
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import NewsView from "@/components/common/NewsView.vue";
import AxiosService from "@/services/AxiosService";
import { ReNaverResponse, NaverResponse } from "@/types/NaverSearch";
import { ref, Ref, onBeforeMount, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const searchNews: Ref<NaverResponse[]> = ref([]);
const news: Ref<ReNaverResponse[]> = ref([]);
const isModal: Ref<boolean> = ref(false);
const article: Ref<NaverResponse> = ref({
  title: "",
  description: "",
  link: "",
  pubDate: "",
  images: [],
  keywords: [],
  content: "",
  id: 0,
  summary: "",
});
let page = 0;
let isLoading: Ref<boolean> = ref(true);

/**
 * Modal을 보여주는 함수
 * @param articleObj 기사의 정보가 담겨있음
 */
const showModal = (articleObj: NaverResponse) => {
  window.removeEventListener("scroll", handleScroll);
  isModal.value = true;
  article.value = articleObj;
};

/**
 * Modal을 닫는 함수
 */
const closeModal = () => {
  window.addEventListener("scroll", handleScroll);
  isModal.value = false;
};

/**
 * 서버와 비동기 통신하는 로직이 담긴 함수
 */
const load = async () => {
  setTimeout(async () => {
    const res = await AxiosService.getNaver(++page);
    news.value.push(...res);
  }, 500);
};

/**
 * scroll 이벤트 발생 시 처리하는 함수
 */
const handleScroll = async () => {
  if (isLoading.value) return;

  const windowHeight = document.documentElement.clientHeight;
  const scrollY = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;

  if (windowHeight + scrollY >= documentHeight) {
    isLoading.value = true;
    await load();
    isLoading.value = false;
  }
};

// 마운트 되기 전에 데이터를 불러옴
onBeforeMount(async () => {
  if (route.query.search) {
    const response = await AxiosService.getSearchArticle(route.query.search?.toString());
    searchNews.value = response.data[0].article;
  } else {
    const response = await AxiosService.getNaver(page);
    news.value = response.filter((v) => v.article.length);
  }
});

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
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
