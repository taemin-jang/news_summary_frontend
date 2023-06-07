import { useUserStore } from "./user";
import { usePortfolioStore } from "./portfolio";

export const store = {
  userStore: useUserStore(),
  portfolioStore: usePortfolioStore(),
};
