# Jalan Durian - 프리미엄 두리안 랜딩 사이트

말레이시아 프리미엄 두리안 브랜드 'Jalan Durian'의 미니멀·고급 랜딩 사이트입니다.

## 🚀 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **애니메이션**: Framer Motion
- **UI 컴포넌트**: Custom components (shadcn/ui inspired)
- **아이콘**: Lucide React
- **폰트**: Inter (Google Fonts)

## 📋 주요 기능

- **반응형 디자인**: 모바일 퍼스트 접근법
- **다크모드 지원**: 시스템 테마 기반
- **부드러운 애니메이션**: Framer Motion 기반 인터랙션
- **카운트다운 타이머**: 출시일까지 실시간 카운트다운
- **프로그레스 바**: 예약 진행률 시각화
- **스크롤 애니메이션**: 섹션별 인뷰 애니메이션
- **SEO 최적화**: 메타데이터 및 오픈그래프 지원
- **성능 최적화**: 이미지 및 폰트 최적화

## 🏗️ 프로젝트 구조

```
jalan-durian/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   └── page.tsx           # 메인 페이지
│   ├── components/
│   │   ├── sections/          # 페이지 섹션 컴포넌트
│   │   │   ├── Hero.tsx       # 히어로 섹션
│   │   │   ├── Countdown.tsx  # 카운트다운 섹션
│   │   │   ├── Story.tsx      # 스토리 섹션
│   │   │   ├── Tiers.tsx      # 가격 섹션
│   │   │   ├── FAQ.tsx        # FAQ 섹션
│   │   │   └── Footer.tsx     # 푸터
│   │   ├── ui/                # 재사용 가능한 UI 컴포넌트
│   │   ├── ProgressBar.tsx    # 프로그레스 바
│   │   └── VideoWithFallback.tsx # 비디오 컴포넌트
│   ├── hooks/                 # 커스텀 훅
│   │   ├── useCountdown.ts    # 카운트다운 훅
│   │   └── useInViewMotion.ts # 인뷰 애니메이션 훅
│   ├── lib/                   # 유틸리티 및 타입
│   │   ├── types.ts           # TypeScript 타입 정의
│   │   └── utils.ts           # 유틸리티 함수
│   └── styles/
│       └── globals.css        # 글로벌 스타일
├── content/
│   └── site.json              # 사이트 콘텐츠 설정
├── public/
│   └── assets/                # 정적 자산
│       ├── images/
│       └── videos/
└── package.json
```

## 🛠️ 로컬 개발 환경 설정

### 1. 저장소 클론

```bash
git clone <repository-url>
cd jalan-durian
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경변수 설정 (선택사항)

`.env.local` 파일을 생성하고 필요한 환경변수를 설정하세요:

```bash
# 카운트다운 날짜 (ISO 8601 형식)
NEXT_PUBLIC_LAUNCH_DATE=2025-02-15T00:00:00+09:00

# 프리오더 URL
NEXT_PUBLIC_NAVER_URL=https://smartstore.naver.com/jalan-durian
NEXT_PUBLIC_TOSS_URL=https://toss.me/jalan-durian
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📝 사용 가능한 스크립트

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린팅
npm run lint

# 타입 체크
npm run type-check

# 코드 포맷팅
npm run format
```

## 🎨 콘텐츠 관리

모든 사이트 콘텐츠는 `content/site.json` 파일에서 관리됩니다:

- 브랜드 정보 및 카피
- 출시일 및 재고 정보
- 상품 정보 및 가격
- FAQ 데이터
- 회사 정보

콘텐츠를 수정하려면 해당 파일을 편집하고 개발 서버를 재시작하세요.

## 🖼️ 이미지 관리

이미지는 `public/assets/images/` 디렉토리에 저장됩니다:

- `hero-farm.jpg`: 히어로 섹션 배경 이미지
- `farmer-lee.jpg`, `farmer-kim.jpg`: 농장주 프로필 이미지
- `farm-location.jpg`: 농장 위치 이미지

최적의 성능을 위해 WebP 형식을 권장합니다.

## 🚀 배포

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com)에 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정 완료

### 수동 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드된 파일을 서버에 업로드
# out/ 디렉토리의 내용을 웹 서버에 복사
```

## 🎯 성능 최적화

- **이미지 최적화**: Next.js Image 컴포넌트 사용
- **폰트 최적화**: Google Fonts 최적화 및 font-display: swap
- **코드 분할**: 자동 코드 스플리팅
- **CSS 최적화**: Tailwind CSS 퍼지 기능
- **번들 분석**: `npm run build`로 번들 크기 확인

## 🔧 커스터마이징

### 테마 색상 변경

`tailwind.config.ts`에서 브랜드 색상을 수정할 수 있습니다:

```typescript
colors: {
  primary: { /* 메인 브랜드 색상 */ },
  accent: { /* 강조 색상 */ },
  // ...
}
```

### 애니메이션 조정

`src/hooks/useInViewMotion.ts`에서 애니메이션 variants를 수정하여 모션을 커스터마이징할 수 있습니다.

## 📱 브라우저 지원

- Chrome (최신 2버전)
- Firefox (최신 2버전)
- Safari (최신 2버전)
- Edge (최신 2버전)

## 🐛 문제 해결

### 일반적인 문제

1. **빌드 오류**: `node_modules` 삭제 후 `npm install` 재실행
2. **타입 오류**: `npm run type-check`로 타입 문제 확인
3. **스타일 문제**: 브라우저 캐시 삭제

### 개발 도구

- React Developer Tools
- Next.js DevTools
- Tailwind CSS IntelliSense (VS Code)

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

- 이메일: hello@jalan-durian.com
- 전화: 02-1234-5678

---

**Made with ❤️ for premium durian lovers**
