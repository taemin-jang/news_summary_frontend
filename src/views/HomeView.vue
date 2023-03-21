<template>
  <Header></Header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
import Header from "@/components/HeaderView.vue";
export default defineComponent({
  name: "HomeView",

  components: {
    Header,
  },
});
</script>
