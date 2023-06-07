<template>
  <v-card color="innerBg" width="70%" height="100%">
    <v-card-title>주식 포트폴리오</v-card-title>
    <v-card-text>
      {{ selectStock }}
      <v-autocomplete
        v-model="selectStock"
        :items="stockList"
        item-value="srtnCd"
        item-title="itmsNm"
        label="주식을 검색하세요."
        @update:model-value="search"
      ></v-autocomplete>
    </v-card-text>
    <v-table fixed-header density="comfortable" class="elevation-4 text-center">
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
        <tr v-for="item in [...portfolio.values()]" :key="item.itmsNm">
          <td>{{ item.itmsNm }}</td>
          <td>{{ item.mrktCtg }}</td>
          <td>{{ item.srtnCd }}</td>
          <td>{{ item.clpr }}</td>
          <td :style="plusPriceColor" v-if="+item.vs > 0">+{{ item.vs }}</td>
          <td v-else-if="+item.vs === 0">{{ item.vs }}</td>
          <td :style="minusPriceColor" v-else>{{ item.vs }}</td>
          <td>
            <v-icon
              icon="cancel"
              :id="item.itmsNm"
              @click="deleteStock"
            ></v-icon>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { StyleValue, ref, Ref, onBeforeMount } from "vue";
import AxiosService from "@/services/AxiosService";
import { Stock, Portfolio } from "../types/StockList";

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

// 포트폴리오 종목 추가 시 중복 추가 방지하기 위해 Map객체 사용
const portfolio: Ref<Map<string, Portfolio>> = ref(new Map());

// 현재 선택된 주식의 srtnCd
let selectStock: Ref<string> = ref("");

// KRX 주식 리스트
let stockList: Ref<Array<Stock>> = ref([]);

/**
 * itmsNm으로 주식 정보 검색
 */
const search = async () => {
  try {
    // srtnCd로 itmsNm 추출
    const keyword = stockList.value.filter(
      (v) => v.srtnCd === selectStock.value
    )[0].itmsNm;

    const response = await AxiosService.searchStock(keyword);
    registStock(response.data[0]);
  } catch (err) {
    console.log(err);
  }
};

/**
 * 포트폴리오 등록하는 함수
 * @param stock 주식 정보
 */
const registStock = (stock: Portfolio) => {
  // 만약 종목이 있으면 1을 반환하므로 0이면 추가
  if (!portfolio.value.get(stock?.srtnCd)) {
    portfolio.value.set(stock?.itmsNm, {
      itmsNm: stock?.itmsNm,
      mrktCtg: stock?.mrktCtg,
      srtnCd: stock?.srtnCd,
      clpr: stock?.clpr,
      vs: stock?.vs,
    });
  } else {
    alert("이미 추가한 주식입니다.");
  }
};

/**
 * 삭제 버튼 클릭 시 포트폴리오에 등록된 해당 주식 삭제
 * @param event
 */
const deleteStock = (event: Event) => {
  portfolio.value.delete((event.target as HTMLElement)?.id);
  AxiosService.deleteStock((event.target as HTMLElement)?.id);
};

onBeforeMount(async () => {
  const response = await AxiosService.getStockList();
  const [stocks, portfolios] = response.data;
  const portfolioRes = await AxiosService.getPortfolio(portfolios);
  stockList.value = stocks;

  if (portfolioRes.data.length) {
    portfolioRes.data.forEach((v: Portfolio) => {
      if (v?.itmsNm) portfolio.value.set(v.itmsNm, v);
    });
  }
});
</script>

<style scoped></style>
