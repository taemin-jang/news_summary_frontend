<!-- @format -->

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
        <v-sheet :elevation="2" color="newsBg" class="pa-2 ma-2 rounded-t-xl">
          <v-img
            class="bg-white rounded-xl elevation-4"
            width="100%"
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
    </v-row>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped></style>
