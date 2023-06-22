import { AuthResponse } from "@/types/KakaoLogin";
import AxiosService from "@/services/AxiosService";

// 카카오 로그인 함수
export const kakaoLogin = async () => {
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

    return serverResponse;
  } catch (error) {
    console.error("카카오 로그인 오류:", error);
  }
};
