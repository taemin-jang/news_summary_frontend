<template>
  <v-card color="innerBg" width="70%" height="100%">
    <v-card-title>주식 포트폴리오</v-card-title>
    <v-card-text>
      <v-text-field
        density="compact"
        variant="solo"
        label="Search keyword"
        append-inner-icon="mdi:mdi-magnify"
        single-line
        hide-details
      ></v-text-field>
    </v-card-text>
    <v-table fixed-header density="compact" class="elevation-4 text-center">
      <thead class="table-head">
        <tr>
          <th class="text-center" :style="styleObj">종목</th>
          <th class="text-center" :style="styleObj">주식 시장</th>
          <th class="text-center" :style="styleObj">번호</th>
          <th class="text-center" :style="styleObj">현재 가격</th>
          <th class="text-center" :style="styleObj">전일 대비 등락</th>
          <th class="text-center" :style="styleObj"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.stockMarket }}</td>
          <td>{{ item.number }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.prePrice }}</td>
          <td><v-icon icon="cancel"></v-icon></td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { StyleValue } from "vue";

const theme = useTheme();

const styleObj: StyleValue = {
  borderBottom: `3px solid ${theme.current.value.colors.innerBg} !important`,
};
const desserts = [
  {
    name: "삼성전자",
    stockMarket: "KOSPI",
    number: "005930",
    price: "65300",
    prePrice: "+200",
  },
  {
    name: "SK하이닉스",
    stockMarket: "KOSPI",
    number: "000660",
    price: "88500",
    prePrice: "-800",
  },
  {
    name: "에코프로",
    stockMarket: "KOSDAQ",
    number: "086520",
    price: "617000",
    prePrice: "+6000",
  },
  {
    name: "NAVER",
    stockMarket: "KONEX",
    number: "035420",
    price: "197000",
    prePrice: "-2000",
  },
];
</script>

<style scoped></style>
