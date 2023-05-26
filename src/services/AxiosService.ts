import axios from "@/plugins/http-common";
import { AxiosResponse } from "axios";
import { NaverResponse } from "@/types/NaverSearch";
import { UserProfile } from "@/types/KakaoLogin";
import { useUserStore } from "@/store/user";
axios.defaults.withCredentials = true;
const store = useUserStore();

class AxiosService {
  async getNaver(id: string | number): Promise<NaverResponse[]> {
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

  create(data: any): Promise<any> {
    return axios.post("/tutorials", data);
  }

  update(id: any, data: any): Promise<any> {
    return axios.put(`/tutorials/${id}`, data);
  }

  delete(id: any): Promise<any> {
    return axios.delete(`/tutorials/${id}`);
  }

  deleteAll(): Promise<any> {
    return axios.delete(`/tutorials`);
  }

  findByTitle(title: string): Promise<any> {
    return axios.get(`/tutorials?title=${title}`);
  }
}

export default new AxiosService();
