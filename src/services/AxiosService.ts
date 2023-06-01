import axios from "@/plugins/http-common";
import { AxiosResponse } from "axios";
import { NaverResponse } from "@/types/NaverSearch";
import { UserProfile } from "@/types/KakaoLogin";
import { useUserStore } from "@/store/user";
axios.defaults.withCredentials = true;
const store = useUserStore();

class AxiosService {
  async getNaver(id = ""): Promise<NaverResponse[]> {
    const response: AxiosResponse<NaverResponse[]> = await axios.get(
      `/naver/${id}`
    );
    return response.data;
  }

  async sendAccessTokenToServer(
    accessToken: string
  ): Promise<AxiosResponse<UserProfile>> {
    const response: AxiosResponse<UserProfile> = await axios.post(
      "/kakao/login",
      {
        access_token: accessToken,
      }
    );
    return response;
  }

  async getKakaoProfile(): Promise<void> {
    await axios
      .get("/kakao/info", { withCredentials: true })
      .then((result) => {
        if (result.status === 200) store.setUser(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async logout() {
    await axios.get("/kakao/logout", { withCredentials: true });
  }

  async searchStock(searchItem: string): Promise<AxiosResponse> {
    const response: AxiosResponse = await axios.get(
      `/stock?search=${searchItem}`
    );
    return response;
  }

  async getStockList(): Promise<AxiosResponse> {
    const response: AxiosResponse = await axios.get("/stock/list");
    return response;
  }

  async getPortfolio(portfolios: any) {
    const response: AxiosResponse = await axios.post(
      "/stock/portfolio",
      portfolios
    );
    return response;
  }

  async deleteStock(deleteItem: string) {
    await axios.delete(`/stock?delete=${deleteItem}`);
  }
}

export default new AxiosService();
