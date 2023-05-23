<template>
  <Header></Header>
  <v-container class="d-flex justify-center align-center h-100">
    <v-btn
      color="kakaoColor"
      elevation="4"
      @click="kakaoLogin"
      v-if="!store.getUser.value"
      >카카오 로그인</v-btn
    >
    <Portfolio class="pt-10 pl-10 pr-10 mt-8 elevation-4" v-else />
  </v-container>
</template>

<script setup lang="ts">
import Header from "@/components/common/HeaderView.vue";
import Portfolio from "@/views/PortfolioView.vue";
import { AuthResponse } from "@/types/KakaoLogin";
import AxiosService from "@/services/AxiosService";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";

const router = useRouter();
const store = useUserStore();
// 카카오 로그인 함수
const kakaoLogin = async () => {
  if (typeof Kakao === "undefined") {
    alert("카카오 SDK를 로드하지 못했습니다. 다시 시도해주세요.");
    return;
  }

  try {
    // 카카오 access_token이 담긴 응답
    const response = await new Promise<AuthResponse>((resolve, reject) => {
      Kakao.Auth.login({
        success: (authObj: any) => resolve(authObj),
        fail: (err: Error) => reject(err),
      });
    });

    // 로그인 성공 시 엑세스 토큰 발급
    const accessToken = response.access_token;
    // 서버에 엑세스 토큰 전송후 응답
    const serverResponse = await AxiosService.sendAccessTokenToServer(
      accessToken
    );

    // 응답에 맞는 처리
    handleResponse(serverResponse);
  } catch (error) {
    console.error("카카오 로그인 오류:", error);
  }
};

// 서버에서 받은 응답을 처리하는 함수
const handleResponse = (response: any) => {
  if (response.statusText === "OK") {
    store.setUser(response.data);
    router.push("/politics");
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
