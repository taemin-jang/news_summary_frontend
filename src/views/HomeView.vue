<template>
  <v-card>
    <Header></Header>
    <SideBar></SideBar>
    <MainSheet> </MainSheet>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Header from "@/components/common/HeaderView.vue";
import SideBar from "@/components/common/SideBar.vue";
import MainSheet from "@/components/common/MainSheet.vue";
export default defineComponent({
  name: "HomeView",

  components: {
    Header,
    SideBar,
    MainSheet,
  },
});
</script>
