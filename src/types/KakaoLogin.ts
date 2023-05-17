// 카카오 로그인 accessToken interface
export interface AuthResponse {
  access_token: string;
}

export interface UserProfile {
  email: string;
  id: number;
  nickname: string;
  profile_image: string;
  thumbnail_image: string;
}
