<template>
  <v-card color="innerBg" width="70%" height="100%">
    <v-card-title>주식 포트폴리오</v-card-title>
    <v-card-text>
      <v-text-field
        v-model="searchKeyword"
        density="compact"
        variant="solo"
        label="Search Keyword"
        append-inner-icon="mdi:mdi-magnify"
        single-line
        hide-details
        @keyup.enter="search"
      ></v-text-field>
      {{ selectStock }}
      <v-autocomplete
        v-model="selectStock"
        :items="desserts"
        item-value="number"
        item-title="name"
      ></v-autocomplete>
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
          <td :style="plusPriceColor" v-if="+item.prePrice > 0">
            {{ item.prePrice }}
          </td>
          <td :style="minusPriceColor" v-else>{{ item.prePrice }}</td>
          <td><v-icon icon="cancel"></v-icon></td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { StyleValue, ref, Ref } from "vue";
import AxiosService from "@/services/AxiosService";

const theme = useTheme();
const styleObj: StyleValue = {
  borderBottom: `3px solid ${theme.current.value.colors.innerBg} !important`,
};
const plusPriceColor: StyleValue = {
  color: theme.current.value.colors.plusPriceColor,
};
const minusPriceColor: StyleValue = {
  color: theme.current.value.colors.minusPriceColor,
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
var selectStock: Ref<string> = ref("");
const searchKeyword: Ref<string> = ref("");
const search = async () => {
  const response = await AxiosService.searchStock(searchKeyword.value);
  console.log(response.data.item);
};
</script>

<style scoped></style>
