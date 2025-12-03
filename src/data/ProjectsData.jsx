// src/data/projects.js

export const projects = [
  {
    id: "sequence",
    title: "Sequence",
    period: "2025.01 ~ 2024.06",
    startDate: "2025.01",
    endDate: "2025.06",
    shortDesc: "IT 개발·디자인 대학생들이 프로젝트를 공유하고 협업할 수 있는 SPA 플랫폼",
    detail: `
Sequence는 IT 서비스를 만들고 싶은 대학생들을 위한 프로젝트 공유 및 협업 플랫폼입니다.
React + TypeScript 기반 SPA 구조로 제작되었으며, 로그인·회원가입·프로젝트/아카이브 목록·상세·등록/수정·팀원 평가 기능까지 전체 흐름을 설계했습니다.
프로젝트 카드는 태그 필터링·검색·페이지네이션을 적용해 다양한 조건에서 탐색이 가능하며,
Axios 인터셉터 기반 세션 갱신 로직도 직접 구현해 사용자 경험을 개선했습니다.
    `,
    tech: ["React", "TypeScript", "styled-components", "Axios", "SPA"],
    link: "https://github.com/Sequence-Front/sequence"
  },
  {
    id: "job-calendar",
    title: "My Job Calendar",
    period: "2024.07 ~ 2024.08",
    startDate: "2024.07",
    endDate: "2024.08",
    shortDesc: "DX 해커톤 우수상 — 취업/지원사업/자격증 정보를 한눈에 보여주는 캘린더 서비스",
    detail: `
My Job Calendar는 세종시 취업 공고·학생지원사업·자격증 일정을 수집하여
사용자가 한눈에 확인할 수 있도록 만든 캘린더 기반 정보 플랫폼입니다.
React로 UI를 구현했고, 스크랩 기능·태그 필터링·반응형 디자인을 담당했습니다.
또한 구글 캘린더 연동 기능을 통해 외부 일정 관리도 지원합니다.
    `,
    tech: ["React", "JavaScript", "styled-components", "Recoil"],
    link: "https://myjobcalendar.netlify.app"
  },
  {
    id: "secheongmaru",
    title: "세청마루",
    period: "2025.08 ~ 2025.08",
    startDate: "2025.08",
    endDate: "2025.08",
    shortDesc: "청년 정책 추천·검색 서비스 — RAG 기반 AI 챗봇 프로젝트",
    detail: `
세청마루는 청년 정책·복지 정보를 수집해 RAG 기반으로 검색하고 추천해주는 프로젝트입니다.
프론트엔드 UI 구현(React 기반)과 데이터 전처리, RAG 파이프라인 일부 구성에 참여했습니다.
필요한 정책 데이터를 정제해 벡터 임베딩으로 변환하여 검색 품질을 높였습니다.
    `,
    tech: ["React", "Node.js", "Python", "RAG", "Vector DB"],
    link: "https://github.com/"
  },
  {
    id: "traffic-lawyer-llm",
    title: "교통 AI 변호사 LLM",
    period: "2025.03 ~ 2025.05",
    startDate: "2025.03",
    endDate: "2025.05",
    shortDesc: "공공데이터 기반 교통법 위반 판단 AI — Polyglot-ko QLoRA Fine-Tuning",
    detail: `
교통 상황을 입력하면 어떤 법률 조항을 위반했는지 자동으로 판단하는 LLM 프로젝트입니다.
경찰청·법률민원센터 공공데이터를 직접 정제해 instruction–input–output 데이터셋을 만들고,
Polyglot-ko 모델을 QLoRA 방식으로 파인튜닝하여 Colab 환경에서도 학습 가능하도록 최적화했습니다.
또한 샘플별 Loss 분석을 통해 데이터 품질 문제를 파악하고 개선 방향을 도출했습니다.
    `,
    tech: ["Python", "Transformers", "PEFT", "QLoRA", "Polyglot-ko"],
    link: "https://colab.research.google.com/drive/1Wv_PeCr2R3XojNL-4DxI_u89ZS8C0CJE"
  }
];
