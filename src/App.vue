<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
const store = useUserStore();
const router = useRouter();
if (store.getUser.value === null) {
  router.push("/login");
}
</script>
