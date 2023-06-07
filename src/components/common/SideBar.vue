<template>
  <v-navigation-drawer
    class="custom"
    color="sidebarBg"
    location="right"
    width="400"
  >
    <v-list>
      <v-list-item v-for="(portfolio, i) in portfolios" :key="i">
        <LineChart :portfolio="portfolio" />
        <v-divider></v-divider>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ComputedRef, computed } from "vue";
import LineChart from "@/components/common/LineChart.vue";
import { store } from "@/store";
import { PortfolioChartData } from "@/types/StockList";
let portfolios: ComputedRef<PortfolioChartData[]> = computed(() => {
  return store.portfolioStore.getPortfolio;
});
</script>

<style lang="scss" scoped></style>
