# 👽🏠 나만을 위한 AI 매물 추천 플랫폼, ZOOP
![main](https://github.com/user-attachments/assets/74fe4800-55e2-4487-8dad-421d757a258b)

## ♥️ 프로젝트 배경 및 소개
![사전 리서치](https://github.com/user-attachments/assets/eadb724d-c5d9-4768-bd20-b592ef484747)
![문제점 및 해결 방안](https://github.com/user-attachments/assets/dc1abbf4-3270-4966-967a-a2279d95752d)

1. 복잡한 조건 설정 없이, **원하는 매물을 빠르게 탐색**
    - 다양한 필터를 복잡하게 설정하지 않아도, AI 기반 채팅 인터페이스를 통해 자연어로 원하는 매물을 간편하게 탐색할 수 있습니다.
2. 리뷰 및 커뮤니티 기반의 **신뢰도 높은 매물 정보** 제공
    - 매물에 대한 실거주자의 리뷰와 별점을 통해 신뢰성있는 정보를 제공하며, 댓글과 공감 기능을 통해 사용자 간 상호작용이 가능합니다.
3. **사용자 친화적이고 직관적인 UX/UI** 제공
    - 복잡한 부동산 정보를 한눈에 파악할 수 있도록 카드형 매물 리스트, 지도 기반 시각화, 모바일 최적화 레이아웃 등을 적용하여 접근성과 사용성을 높였습니다.
  
## ⏳ 프로젝트 기간
| 2025.05.02 ~ 2025.06.27

## **프로젝트 일정**
| 주차 | 주요 내용 |
|------|-----------|
| 1주차 | 기획 및 RFP 분석 |
| 2주차 | 요구사항 정의서 / 기능 정의서 작성 |
| 3주차 | 기능 구체화 및 역할 분담 |
| 4주차 | API 명세서 가안 피드백, 공통 컴포넌트 개발 |
| 5주차 | 공통 컴포넌트 개발, 페이지 퍼블리싱 |
| 6주차 | 기능 개발, MSW 세팅 및 적용 |
| 7주차 | 기능 개발, MSW 적용, 백엔드와 실제 통신 |
| 8주차 | 기능 개발, 배포, README 작성 |

## 🔖 기능 소개
### 온보딩 및 소셜 로그인
| 항목 | 설명 |
|------|------|
| ![카카오 소셜 로그인 이미지](https://github.com/user-attachments/assets/66f30491-4769-4072-b76d-f873d185e9df) | - 카카오 소셜 로그인을 통해 간편한 회원가입/로그인<br>- 쿠키 기반 인증 토큰 관리<br>- 훅을 통한 페이지 접근 제어 |

### 채팅
| 항목 | 설명 |
|------|------|
| ![추천 기능 이미지](https://github.com/user-attachments/assets/b06d94a3-f797-41aa-916c-87b634e655ae) | - 지역/매매형태/주거형태/예산 등의 조건을 필터로 설정하고 그에 맞는 매물 추천<br>- 자연어 대화를 통해 사용자 맞춤형 매물 추천<br><br>**채팅 히스토리**<br>- 날짜별로 그룹화된 채팅방 목록 조회 및 검색<br>- 제목 수정 및 삭제 |


### 매물 상세 페이지
| 항목 | 설명 |
|------|------|
| ![상세 정보 이미지](https://github.com/user-attachments/assets/acabc02e-185e-4601-96df-022ac58b9f71) | - **상세 정보**: 매물의 기본 정보, 거래 정보, 위치 정보, 시설 정보 등 종합 제공<br>- **이미지 갤러리**: 매물 사진을 캐러셀로 제공하는 이미지 뷰어<br>- **찜하기 기능**: 매물 찜하기/해제<br>- **전화걸기 기능 제공**: 버튼 클릭 한번으로 중개사무소에 직접 연락 가능 |


### 매물 리뷰 페이지
| 항목 | 설명 |
|------|------|
| ![AI 리뷰 이미지](https://github.com/user-attachments/assets/743d1375-0956-4ab9-9181-0f20a3b7a750) | - AI가 자동 생성한 요약 리뷰 제공<br>- 매물에 대한 리뷰 및 댓글 작성<br>- 공감순/최신순 정렬 및 평균 별점 표시 |


### 부동산페이지
| 항목 | 설명 |
|------|------|
| ![부동산 정보 이미지](https://github.com/user-attachments/assets/cb20430f-e5ee-4d9d-9830-a46716ead9bc) | - **중개사무소 정보 상세 제공**: 등록번호, 대표자, 연락처 등 상세 정보 제공<br>- **해당 부동산의 등록 매물 조회**: 월세/전세/매매별 구분된 전체 매물 확인 가능 |


### 마이페이지
| 항목 | 설명 |
|------|------|
| ![마이페이지 이미지](https://github.com/user-attachments/assets/668fcb36-5c28-400e-93ef-9b69dbac3081) | - **사용자 프로필 관리**: 닉네임  프로필 이미지 수정 가<br>- **내가 쓴 글 관리**: 작성한 리뷰와 댓글 목록 관리<br>- **찜한 매물/최근 본 매물 관리**: 사용자 별 개인화된 매물을 한눈에 확인하고 쉽게 재접근<br>- **계정 관리**: 로그아웃, 회원탈퇴 등 기본 계정 관리 기능 |


### 지도보기
| 항목 | 설명 |
|------|------|
| ![지도 기반 매물 이미지](https://github.com/user-attachments/assets/832b4523-801e-47ad-a434-b92877858c99) | - 매물 목록(추천 매물, 찜한 매물, 최근 본 매물)을 지도 위에 시각적으로 표횬하여 위치 기반 탐색 가능<br>- **정렬 기능 제공**: 가격/면적 순 매물 목록을 정렬하여 탐색 편의성 향상 |


  
## 👨‍👩‍👧‍👦 팀원 구성
|<img src="https://avatars.githubusercontent.com/u/173143133?v=4,Jang-eunhye,,https://github.com/Jang-eunhye" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/81246338?v=4,gkfla668,임하림,https://github.com/gkfla668" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/150775699?v=4,girl0330,,https://github.com/girl0330" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/94222592?v=4,jiyoon04,,https://github.com/jiyoon04" width="150" height="150"/>
|:-:|:-:|:-:|:-:
|팀장 : [@jiyoon04](https://github.com/jiyoon04)|팀원 : [@gkfla668](https://github.com/gkfla668)|팀원 : [@girl0330](https://github.com/girl0330)|팀원 : [@Jang-eunhye](https://github.com/Jang-eunhye)


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

2. 패키지 설치

```jsx
npm install
```

3. 환경 변수 설정
    
    > 🔐 실제 키 값은 따로 공유된 `.env.local`을 참고하세요.
    > 

4. 로컬 서버 실행

```jsx
npm run dev
```
