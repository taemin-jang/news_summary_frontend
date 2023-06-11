# 프로젝트 소개

## 기획 배경

- 출퇴근길, 등하굣길, 점심 시간 등 뉴스 기사를 간편하게 접하고 싶음
- 너무 많은 뉴스 기사 속에서 원하는 뉴스를 접하기 힘듦
- 나만의 포트폴리오로 등록된 관련 뉴스를 접하기 위해 기획

## 기대 효과

- 뉴스 기사 요약으로 시간 절약
- 핵심 키워드를 통해 현재 트렌드 파악 가능
- 포트폴리오에 등록된 주식에 한해 차트 제공으로 투자 결정에 반영

## 프로젝트 기간

23.04.15 ~ 23.06.08

## 개발 환경

### IDE

- Visual Studio Code

### DataBase

- MySql

### Primary Library

****\*\*****FrontEnd****\*\*****

- vue : 3.2.13
- vue-router : 4.0.3
- vuetify : 3.3.2
- vue-chart-3 : 3.1.8
- pinia : 2.0.36
- axios : 1.3.4
- chart.js : 4.3.0

**BackEnd**

- express : 4.18.2
- sequelize : 6.31.0
- axios : 1.3.4
- mysql2 : 3.2.3

# 기능 소개

## 카카오 OAuth 로그인

### localhost/login

![kakao_login](https://github.com/taemin-jang/algorithm/assets/82078896/77668d24-b6b2-49a0-aecb-b480688c2bbc)

![kakao_login-detail](https://github.com/taemin-jang/algorithm/assets/82078896/274fd3bb-1b6c-4966-889a-66422a5a28f3)

- 웹사이트 처음 접속 시 바로 로그인화면으로 이동하게됩니다.
- 카카오 로그인 버튼 클릭 시 카카오 계정으로 로그인하는 브라우저 창이 생성됩니다.

## 마이페이지

### localhost/mypage

![프로젝트 영상(카카오 로그인)](https://github.com/taemin-jang/algorithm/assets/82078896/f552ef3b-2a3a-4eae-8eb2-c03a3aac6377)

- 로그인 성공 시 포트폴리오 등록되어 있지 않으면 마이페이지로 이동합니다.

![포트폴리오등록](https://github.com/taemin-jang/algorithm/assets/82078896/37c07c7e-80a4-45e6-ab8f-6bb1faac3ed0)

- 현재 상장되어 있는 회사만 등록할 수 있습니다.
- 금융위원회의 주식시세정보 Open API 사용했습니다.
- 종목, 주식시장, 종목 번호, 현재 가격, 전일 대비 등락 정보를 제공합니다.
- x 버튼 클릭시 지울 수 있습니다.
- 이미 등록한 주식은 등록할 수 없습니다.

## 메인 페이지

### localhost/politics

![메인 뉴스](https://github.com/taemin-jang/algorithm/assets/82078896/b9836322-e2f4-4e89-9ebf-85fbd93216fc)

- 등록한 포트폴리오를 기반으로 뉴스 기사를 제공합니다.
- 해당 뉴스는 Naver Search API를 사용했습니다.
- Naver Clova Summary API를 사용하여 기사 내용을 3줄 요약해서 제공합니다.
- Openai API를 사용하여 기사의 핵심 키워드 5개를 추출합니다.
- 사용자 편의성을 위해 기사 클릭 시 페이지 이동하지 않고 모달을 사용했습니다.

![뉴스 검색](https://github.com/taemin-jang/algorithm/assets/82078896/43228062-e5cd-4377-a0f5-cbc3b3a8bc41)

- 등록된 포트폴리오에 해당하는 주식 명 검색 시 관련된 뉴스 기사만 제공합니다.
- 오른쪽 사이드바에는 등록한 주식의 최근 5일 차트를 제공합니다.
- chart.js를 사용하여 구현했습니다.

![새로등록시뉴스반환](https://github.com/taemin-jang/algorithm/assets/82078896/91126bb7-1e9d-406a-837a-e1651d0c6236)

- 등록하지 않은 기업 검색 시 뉴스 제공되지 않습니다.
- 마이페이지에서 포트폴리오에 등록 후 검색하면 최신 뉴스를 제공합니다.
- 또한 등록된 기업의 주식 차트도 제공합니다.
- 로그아웃 클릭 시 로그아웃 되며 로그인 페이지로 이동합니다.

![무한스크롤](https://github.com/taemin-jang/algorithm/assets/82078896/a8da4655-8886-4c02-a3d4-22f7af99a543)

- 사용자의 편의를 위해 무한 스크롤을 구현하여 제공합니다.
- 다크모드도 지원합니다.
