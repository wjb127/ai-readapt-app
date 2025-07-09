# Readapt AI - 영어 독해 훈련 서비스 랜딩페이지

AI 기반 맞춤형 영어 독해 훈련 서비스 "Readapt AI"의 랜딩페이지입니다.

## 🚀 주요 기능

- **AI 맞춤형 지문 생성**: 개인의 실력과 관심사에 맞는 독해 지문 자동 생성
- **적응형 난이도 조정**: 응답 시간과 정답률 분석을 통한 자동 난이도 조정
- **완벽한 학습 지원**: 한국어 해석, 핵심 단어, 구문 분석 제공
- **매일 5분 학습**: 지속 가능한 짧은 학습 시간
- **즉시 피드백**: 문제 해결 직후 상세한 해설 제공

## 🛠 기술 스택

- **Next.js 15** - App Router 구조
- **TypeScript** - 타입 안정성
- **TailwindCSS** - 스타일링
- **Lucide React** - 아이콘
- **Supabase** - 데이터베이스 및 백엔드 서비스

## 📁 프로젝트 구조

```
ai-english-study/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProblemSolution.tsx
│   │   ├── KeyFeatures.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ExamplePassage.tsx
│   │   ├── CallToAction.tsx
│   │   ├── Footer.tsx
│   │   └── PreorderModal.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   └── supabase.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── .env.local.example
```

## 🎯 랜딩페이지 구성

1. **Hero Section**: 메인 슬로건과 CTA
2. **Problem vs Solution**: 기존 앱의 문제점 vs Readapt AI의 해결책
3. **Key Features**: 6가지 핵심 기능 소개
4. **How It Works**: 4단계 학습 프로세스
5. **Example Passage**: 실제 독해 지문 예시와 해설
6. **Call to Action**: 무료 체험 유도
7. **Footer**: 서비스 정보 및 링크

## 🚪 Fake Door 기능

### 사전예약 시스템
- **버튼 클릭 추적**: 모든 CTA 버튼 클릭 이벤트를 Supabase에 저장
- **이메일 수집**: 사전예약 모달을 통한 이메일 주소 수집
- **마케팅 동의**: 마케팅 수신 동의 여부 저장
- **개인정보 보호**: 개인정보처리방침 동의 필수

### 데이터 수집 항목
1. **preorder_clicks 테이블**
   - 서비스명 (service)
   - 클릭 시간 (clicked_at)

2. **preorders 테이블**
   - 서비스명 (service)
   - 이메일 주소 (email)
   - 마케팅 수신 동의 (marketing_opt_in)
   - 생성 시간 (created_at)

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local.example` 파일을 참고하여 `.env.local` 파일을 생성하고 Supabase 설정을 추가합니다:

```bash
cp .env.local.example .env.local
```

`.env.local` 파일에 다음 내용을 추가:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Supabase 테이블 생성

Supabase 프로젝트에서 다음 SQL을 실행하여 테이블을 생성합니다:

```sql
-- 버튼 클릭 이벤트 저장용
CREATE TABLE preorder_clicks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service TEXT NOT NULL,
  clicked_at TIMESTAMP DEFAULT now()
);

-- 이메일 + 마케팅 수신 동의 저장용
CREATE TABLE preorders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service TEXT NOT NULL,
  email TEXT NOT NULL,
  marketing_opt_in BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);
```

### 4. 개발 서버 실행

```bash
npm run dev
```

### 5. 브라우저에서 확인

http://localhost:3000 에서 확인할 수 있습니다.

## 📱 반응형 디자인

- 모바일, 태블릿, 데스크톱 모든 화면 크기에 최적화
- TailwindCSS의 반응형 유틸리티 클래스 활용
- 터치 친화적인 인터페이스

## 🎨 디자인 특징

- **Grammarly 스타일**: 전문적이고 신뢰할 수 있는 느낌
- **깔끔한 레이아웃**: 학습에 집중할 수 있는 미니멀한 디자인
- **일관된 컬러 팔레트**: Primary(Blue), Secondary(Purple) 기반
- **부드러운 애니메이션**: 사용자 경험 향상을 위한 트랜지션

## 🔧 빌드 및 배포

### 프로덕션 빌드

```bash
npm run build
```

### 프로덕션 서버 실행

```bash
npm start
```

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 🤝 기여하기

1. 프로젝트를 Fork 합니다
2. 새로운 기능 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 언제든지 연락주세요! 