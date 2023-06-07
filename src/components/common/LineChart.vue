<template>
  <div><LineChart v-bind="lineChartProps" :width="350" :height="150" /></div>
</template>
<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { ChartDate } from "@/types/StockList";
import { useTheme } from "vuetify";

Chart.register(...registerables);

const theme = useTheme();
const props = defineProps(["portfolio"]);
const dataValues = ref(
  props.portfolio.list.toReversed().map((data: ChartDate) => data.clpr)
);
const dataLabels = ref(
  props.portfolio.list.toReversed().map((data: ChartDate) => data.date.slice(4))
);

/**
 * chart 데이터 설정
 */
const testData = computed<ChartData<"line">>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      label: props.portfolio.itmsNm,
      data: dataValues.value,
      backgroundColor: [theme.current.value.colors.fontColor],
      borderColor: theme.current.value.colors.innerBg,
      fill: theme.current.value.colors.innerBg,
      fontColor: theme.current.value.colors.fontColor,
    },
  ],
}));

/**
 * 차트 옵션 설정
 */
const options = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: theme.current.value.colors.fontColor,
      },
    },
  },
  scales: {
    x: {
      border: {
        color: theme.current.value.colors.fontColor,
      },
      ticks: {
        color: theme.current.value.colors.fontColor,
      },
    },
    y: {
      border: {
        color: theme.current.value.colors.fontColor,
      },
      ticks: {
        color: theme.current.value.colors.fontColor,
      },
    },
  },
}));
const { lineChartProps } = useLineChart({
  chartData: testData,
  options,
});
</script>
