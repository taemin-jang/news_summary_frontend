export interface NaverResponse {
  title: string;
  description: string;
  link: string;
  originallink?: string;
  pubDate: string;
  images: Array<string>;
  keywords: Array<string>;
  content: string;
  id: number;
  summary: string;
}

export interface ReNaverResponse {
  article: NaverResponse[];
  id: number;
  kakao_id: number;
  stock_id: string;
}
