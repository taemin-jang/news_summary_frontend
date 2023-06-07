<template>
  <div><LineChart v-bind="lineChartProps" :width="350" :height="150" /></div>
</template>
<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { ChartDate } from "@/types/StockList";

Chart.register(...registerables);

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
      backgroundColor: ["#77CEFF", "#0079AF", "#123E6B", "#97B0C4", "#A5C8ED"],
    },
  ],
}));

/**
 * 차트 옵션 설정
 */
const options = computed<ChartOptions<"line">>(() => ({
  responsive: true,
  maintainAspectRatio: false,
}));
const { lineChartProps } = useLineChart({
  chartData: testData,
  options,
});
</script>
