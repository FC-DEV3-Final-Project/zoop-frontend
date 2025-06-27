# 👽🏠 나만을 위한 AI 매물 추천 플랫폼, ZOOP
![1](https://github.com/user-attachments/assets/74fe4800-55e2-4487-8dad-421d757a258b)

## ♥️ 프로젝트 소개
1. 복잡한 조건 설정 없이, 원하는 매물을 빠르게 탐색
    - 다양한 필터를 복잡하게 설정하지 않아도, AI 기반 채팅 인터페이스를 통해 자연어로 원하는 매물을 간편하게 탐색할 수 있습니다.
2. 리뷰 및 커뮤니티 기반의 신뢰도 높은 매물 정보 제공
    - 매물에 대한 실거주자의 리뷰와 별점을 통해 신뢰성있는 정보를 제공하며, 댓글과 공감 기능을 통해 사용자 간 상호작용이 가능합니다.
3. 사용자 친화적이고 직관적인 UX/UI 제공
    - 복잡한 부동산 정보를 한눈에 파악할 수 있도록 카드형 매물 리스트, 지도 기반 시각화, 모바일 최적화 레이아웃 등을 적용하여 접근성과 사용성을 높였습니다.
  
## ⏳ 프로젝트 기간
| 2025.05.02 ~ 2025.06.27

## 🔖 기능 소개
### 온보딩 및 소셜 로그인
![Image](https://github.com/user-attachments/assets/66f30491-4769-4072-b76d-f873d185e9df)
- 카카오 소셜 로그인을 통해  간편한 회원가입/로그인
- 쿠키 기반 인증 토큰 관리
- 훅을 통한 페이지 접근 제어

### 채팅
![Image](https://github.com/user-attachments/assets/b06d94a3-f797-41aa-916c-87b634e655ae)
- 지역/매매형태/주거형태/예산 등의 조건을 필터로 설정하고 그에 맞는 매물 추천
- 자연어 대화를 통해 사용자 맞춤형 매물 추천
- **채팅 히스토리**
    - 날짜별로 그룹화된 채팅방 목록 조회 및 검색
    - 제목 수정 및 삭제

### 매물 상세 페이지
![Image](https://github.com/user-attachments/assets/acabc02e-185e-4601-96df-022ac58b9f71)
- **상세 정보**: 매물의 기본 정보, 거래 정보, 위치 정보, 시설 정보 등 종합 제공
- **이미지 갤러리**: 매물 사진을 캐러셀로 제공하는 이미지 뷰어
- **찜하기 기능**: 매물 찜하기/해제
- 전화걸기: 해당 부동산 전화번호로 연결

### 매물 리뷰 페이지
![Image](https://github.com/user-attachments/assets/743d1375-0956-4ab9-9181-0f20a3b7a750)
- AI 리뷰 제공
- 매물에 대한 리뷰 작성 및 댓글
- 공감순/최신순 정렬 및 평균 별점 표시

### 부동산페이지
![Image](https://github.com/user-attachments/assets/cb20430f-e5ee-4d9d-9830-a46716ead9bc)
- **부동산 정보**: 공인중개사 정보, 등록번호, 대표자, 연락처 등 상세 정보 제공
- **부동산 매물 확인**: 월세/전세/매매별 등록된 매물 확인
- **전화걸기**: 해당 부동산 전화번호로 연결

### 마이페이지
![Image](https://github.com/user-attachments/assets/668fcb36-5c28-400e-93ef-9b69dbac3081)
- **사용자 프로필**: 닉네임, 프로필 이미지 관리 및 수정
- **내가 쓴 글**: 작성한 리뷰와 댓글 목록 관리
- **찜한 매물/최근 본 매물**: 사용자 별 개인화된 매물 수집/관리 기능
- **계정 관리:** 로그아웃, 회원탈퇴 등

### 지도보기

- 매물 목록(추천매물, 찜/최근 본 매물)을 지도 상의 마커로 표시
- **정렬 기능**: 가격/면적 순 매물 목록의 정렬 기능

  
## 👨‍👩‍👧‍👦 팀원 구성
|<img src="https://avatars.githubusercontent.com/u/173143133?v=4,Jang-eunhye,,https://github.com/Jang-eunhye" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/81246338?v=4,gkfla668,임하림,https://github.com/gkfla668" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/150775699?v=4,girl0330,,https://github.com/girl0330" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/94222592?v=4,jiyoon04,,https://github.com/jiyoon04" width="150" height="150"/>
|:-:|:-:|:-:|:-:
|팀장 : [@jiyoon04](https://github.com/jiyoon04))|팀원 : [@gkfla668](https://github.com/gkfla668)|팀원 : [@girl0330](https://github.com/girl0330)|팀원 : [@Jang-eunhye](https://github.com/Jang-eunhye)

## **프로젝트 일정**

1주차 - 기획 및 RFP 분석

2주차 - 요구사항 정의서 / 기능 정의서 작성

3주차 - 기능 구체화 및 역할 분담

4주차 - API 명세서 가안 피드백, 공통 컴포넌트 개발 

5주차 - 공통 컴포넌트 개발, 페이지 퍼블리싱

6주차 - 기능 개발, MSW 세팅 및 적용

7주차 - 기능 개발, MSW 적용, 백엔드와 실제 통신

8주차 - 기능 개발, 배포, README 작성

## 🪚 기술 스택
| 구분             | 사용 기술                         |
|------------------|-----------------------------------|
| 💻 프로그래밍 도구 | `TypeScript`, `Next.js`           |
| ⚙️ 상태 관리자     | `Zustand`                          |
| 🔄 서버 상태 관리  | `TanStack Query`                  |
| 🎨 스타일링       | `Tailwind CSS`, `shadcn/ui`       |
| 🧹 포맷팅/린트     | `ESLint`, `Prettier`              |

## 폴더구조

```tsx
📦 src
├── 📁 apis 
├── 📁 app # Next.js App Router 기반 페이지 디렉토리
│ ├── 📁 chat
│ ├── 📁 filter
│ ├── 📁 login
│ ├── 📁 mypage
│ ├── 📁 property
│ ├── 📁 real-estate
│ ├── globals.css
│ ├── layout.tsx 
│ ├── page.tsx 
│ └── providers.tsx
├── 📁 components 
├── 📁 hooks 
├── 📁 layout 
├── 📁 lib 
├── 📁 mocks # MSW
├── 📁 queries 
├── 📁 stores 
└── 📁 types
```


## 실행방법

1. 프로젝트 클론

```jsx
git clone https://github.com/FC-DEV3-Final-Project/zoop-frontend.git
```

1. 패키지 설치

```jsx
npm install
```

1. 환경 변수 설정
    
    > 🔐 실제 키 값은 따로 공유된 `.env.local`을 참고하세요.
    > 

1. 로컬 서버 실행

```jsx
npm run dev
```
