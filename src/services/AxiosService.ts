import axios from "@/plugins/http-common";
import { AxiosResponse } from "axios";
import { NaverResponse } from "@/types/NaverSearch";

class AxiosService {
  getAll(): Promise<any> {
    return axios.get("/tutorials");
  }

  async getNaver(id: string | number): Promise<NaverResponse[]> {
    const response: AxiosResponse<NaverResponse[]> = await axios.get(
      `/naver/${id}`
    );
    return response.data;
  }

  async sendAccessTokenToServer(accessToken: string): Promise<any> {
    const response = await axios.post("/kakao-login", {
      access_token: accessToken,
    });
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
