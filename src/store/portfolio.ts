import { defineStore } from "pinia";
import { ref, Ref, computed, ComputedRef } from "vue";
import { PortfolioChartData, ExPortfolio } from "@/types/StockList";

export const usePortfolioStore = defineStore("portfolio", () => {
  const portfolios: Ref<ExPortfolio[]> = ref([]);
  /**
   * portfolio의 정보를 가져오는 getters
   */
  const getPortfolio: ComputedRef<PortfolioChartData[]> = computed(() =>
    portfolios.value.map((portfolio) => {
      return {
        itmsNm: portfolio.itmsNm,
        list: portfolio.datas.map((data) => {
          const date = data.basDt || "";
          if (!date) {
            throw new Error("date is required");
          }
          return {
            date,
            clpr: data.clpr,
          };
        }),
      };
    })
  );
  /**
   * portfolio 정보를 저장하는 actions
   * @param portfolioDTO portfolio 데이터가 담겨 있음
   */
  const setPortfolio = (portfolioDTO: ExPortfolio[]) => {
    portfolios.value = portfolioDTO;
  };
  return { portfolios, getPortfolio, setPortfolio };
});
