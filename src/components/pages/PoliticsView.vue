<template>
  <v-card color="innerBg" :elevation="4" width="70%">
    <v-card-title>경제</v-card-title>
    <v-row no-gutters>
      <v-col>
        <v-sheet :elevation="2" color="newsBg" class="pa-2 ma-2 rounded-t-xl">
          <v-img
            class="bg-white rounded-xl elevation-4"
            width="100%"
            :elevation="2"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            cover></v-img>
          <div class="text-subtitle-1 font-weight-bold mt-1">경제 제목</div>
          <p class="text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet
          :elevation="2"
          height="200"
          class="pa-2 ma-2 bg-newsBg rounded-t-xl">
          .v-col-auto
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-sheet
          :elevation="2"
          color="newsBg"
          height="200"
          class="pa-2 ma-2 rounded-t-xl">
          .v-col-auto
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet
          :elevation="2"
          color="newsBg"
          class="pa-2 ma-2 rounded-t-xl"
          v-if="arr">
          <v-img
            class="bg-white rounded-xl elevation-4"
            width="100%"
            :src="arr[0]?.images[0]"
            cover></v-img>
          <div class="text-subtitle-1 font-weight-bold mt-1">
            {{ arr[0]?.title }}
          </div>
          <p class="text-start" v-html="arr[0]?.description"></p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import AxiosService from "@/services/AxiosService";
import { NaverSearch, NaverResponse } from "@/types/NaverSearch";
import { reactive, ref } from "vue";

let AxiosInstance = AxiosService;
// const naverSearch: NaverSearch = reactive({
//   title: ref(""),
//   description: ref(""),
//   link: ref(""),
//   originallink: ref(""),
//   pubDate: ref(""),
//   images: ref([]),
// });
let arr: NaverResponse[] = [];
async function searchNaver() {
  arr = await AxiosInstance.getNaver("코스피");
  console.log(arr);
}

searchNaver();
console.log(arr);
// console.log(data);
// console.log(data.description);
</script>

<style scoped></style>
