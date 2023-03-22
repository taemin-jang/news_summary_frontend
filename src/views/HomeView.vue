<template>
  <Header></Header>
  <SideBar></SideBar>
  <v-main>
    <router-view />
  </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Header from "@/components/common/HeaderView.vue";
import SideBar from "@/components/common/SideBar.vue";
export default defineComponent({
  name: "HomeView",

  components: {
    Header,
    SideBar,
  },
});
</script>
