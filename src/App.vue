<template>
  <v-app>
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts"></script>
