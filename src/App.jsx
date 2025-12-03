import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { projects } from "./data/ProjectsData";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    color-scheme: dark;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at 0% 0%, rgba(31, 111, 235, 0.35), transparent 55%),
      radial-gradient(circle at 100% 100%, rgba(31, 111, 235, 0.18), #020617 70%);
    color: #e6edf3;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    min-height: 100vh;
  }

  ::selection {
    background: rgba(31, 111, 235, 0.6);
    color: #f9fafb;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const cardReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AppShell = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 4rem 1.5rem;
  animation: ${fadeIn} 0.7s ease-out forwards;
`;

const Content = styled.main`
  width: 100%;
  max-width: 1120px;
  display: flex;
  flex-direction: column;
  gap: 2.75rem;
`;

const HeaderCard = styled.section`
  background: linear-gradient(120deg, rgba(15, 23, 42, 0.88), rgba(15, 23, 42, 0.78));
  border-radius: 28px;
  padding: 2.5rem clamp(2rem, 4vw, 3rem);
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow:
    0 18px 45px rgba(15, 23, 42, 0.75),
    0 0 0 1px rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(26px);
  display: grid;
  grid-template-columns: minmax(0, 2.1fr) minmax(0, 1.4fr);
  gap: 2rem;
  align-items: center;

  @media (max-width: 880px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 2rem 1.75rem;
  }
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: radial-gradient(circle at 0% 0%, rgba(31, 111, 235, 0.35), rgba(15, 23, 42, 0.9));
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #cbd5f5;
`;

const PillDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #1f6feb;
  box-shadow: 0 0 0 6px rgba(31, 111, 235, 0.3);
`;

const HeroTitle = styled.h1`
  margin: 1rem 0 0.75rem;
  font-size: clamp(2.6rem, 4vw, 3.2rem);
  letter-spacing: -0.04em;
  line-height: 1.05;
  color: #f9fafb;
`;

const HeroAccent = styled.span`
  background: linear-gradient(120deg, #60a5fa, #1f6feb, #38bdf8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const HeroSubtitle = styled.p`
  margin: 0;
  margin-top: 0.6rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #9ca3af;
  max-width: 34rem;
`;

const HeroMeta = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.5rem;
  font-size: 0.88rem;
  color: #9ca3af;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.45rem;
`;

const MetaDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.7);
`;

const HeroActions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  color: #f9fafb;
  background: linear-gradient(135deg, #1f6feb, #2563eb);
  box-shadow:
    0 10px 30px rgba(31, 111, 235, 0.55),
    0 0 0 1px rgba(37, 99, 235, 0.55);
  transform-origin: center;
  transition:
    transform 0.16s ease-out,
    box-shadow 0.16s ease-out,
    translate 0.16s ease-out,
    background 0.16s ease-out;

  &:hover {
    transform: scale(1.05);
    translate: 0 -1px;
    box-shadow:
      0 16px 40px rgba(31, 111, 235, 0.75),
      0 0 0 1px rgba(37, 99, 235, 0.8);
  }
`;

const GhostButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1.35rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  color: #cbd5f5;
  border: 1px solid rgba(148, 163, 184, 0.4);
  background: radial-gradient(circle at 0% 0%, rgba(148, 163, 184, 0.18), rgba(15, 23, 42, 0.9));
  box-shadow: 0 16px 35px rgba(15, 23, 42, 0.85);
  transform-origin: center;
  transition:
    transform 0.16s ease-out,
    box-shadow 0.16s ease-out,
    border-color 0.16s ease-out,
    background 0.16s ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow:
      0 18px 40px rgba(15, 23, 42, 0.95),
      0 0 0 1px rgba(148, 163, 184, 0.5);
    border-color: rgba(209, 213, 219, 0.65);
  }
`;

const HeroRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  justify-content: center;
  align-items: flex-start;
  padding-left: 1rem;

  @media (max-width: 880px) {
    padding-left: 0;
  }
`;

const HeroBadge = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #9ca3af;
`;

const HeroBadgeItem = styled.span`
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.4);
  backdrop-filter: blur(14px);
`;

const HeroSummary = styled.p`
  margin: 0.25rem 0 0;
  font-size: 0.88rem;
  line-height: 1.7;
  color: #9ca3af;
`;

const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1rem;
`;

const SectionTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.35rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9ca3af;
`;

const SectionSubTitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #e5e7eb;
`;

const SectionCaption = styled.p`
  margin: 0;
  font-size: 0.82rem;
  color: #6b7280;
`;

const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 880px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

const ProjectCard = styled.article`
  position: relative;
  padding: 1.6rem 1.5rem 1.5rem;
  border-radius: 22px;
  background: radial-gradient(circle at 0% 0%, rgba(31, 111, 235, 0.2), transparent 60%),
    linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.9));
  border: 1px solid rgba(148, 163, 184, 0.35);
  backdrop-filter: blur(24px);
  box-shadow:
    0 18px 40px rgba(15, 23, 42, 0.85),
    0 0 0 1px rgba(15, 23, 42, 0.9);
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  overflow: hidden;
  transform-origin: center;
  opacity: 0;
  transform: translateY(24px);
  animation: ${cardReveal} 0.75s ease-out forwards;
  animation-delay: ${({ delay }) => `${delay}ms`};
  transition:
    transform 0.18s ease-out,
    box-shadow 0.18s ease-out,
    border-color 0.18s ease-out,
    background 0.18s ease-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow:
      0 24px 55px rgba(15, 23, 42, 0.95),
      0 0 0 1px rgba(31, 111, 235, 0.68);
    border-color: rgba(59, 130, 246, 0.85);
    background: radial-gradient(circle at 0% 0%, rgba(31, 111, 235, 0.28), transparent 65%),
      linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(15, 23, 42, 0.95));
  }
`;

const ProjectHeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.6rem;
  align-items: baseline;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  color: #f9fafb;
`;

const ProjectPeriod = styled.span`
  font-size: 0.8rem;
  color: #9ca3af;
`;

const ProjectDesc = styled.p`
  margin: 0.25rem 0 0.3rem;
  font-size: 0.9rem;
  line-height: 1.65;
  color: #9ca3af;
`;

const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.3rem;
`;

const TechTag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.45);
  color: #cbd5f5;
`;

const CardFooter = styled.div`
  margin-top: 0.85rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
`;

const ProjectLink = styled.a`
  font-size: 0.82rem;
  font-weight: 500;
  text-decoration: none;
  color: #bfdbfe;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(59, 130, 246, 0.6);
  background: radial-gradient(circle at 0% 0%, rgba(31, 111, 235, 0.4), rgba(15, 23, 42, 0.9));
  box-shadow:
    0 14px 30px rgba(31, 111, 235, 0.55),
    0 0 0 1px rgba(15, 23, 42, 0.95);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  transform-origin: center;
  transition:
    transform 0.16s ease-out,
    box-shadow 0.16s ease-out,
    border-color 0.16s ease-out,
    background 0.16s ease-out;

  &:hover {
    transform: scale(1.05) translateY(-1px);
    box-shadow:
      0 18px 40px rgba(31, 111, 235, 0.8),
      0 0 0 1px rgba(37, 99, 235, 0.9);
    border-color: rgba(191, 219, 254, 0.95);
  }
`;

const ProjectMeta = styled.div`
  font-size: 0.78rem;
  color: #6b7280;
  text-align: right;
`;

const AccentDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #1f6feb;
  margin-right: 0.3rem;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppShell>
        <Content>
          <HeaderCard>
            <div>
              <Pill>
                <PillDot />
                Portfolio
                <span>Frontend · AI · RAG</span>
              </Pill>
              <HeroTitle>
                  정준용 
                  <div style ={{fontSize: "1.5rem", marginTop: "0.6rem"}}>

                 <HeroAccent>사용자 중심의 개발 경험</HeroAccent>을 만드는 개발자입니다.
                  </div>

              </HeroTitle>
              <HeroSubtitle>
                React 기반 프론트엔드와 kotlin기반 안드로이드, AI·RAG 프로젝트를 동시에 다루는 개발자입니다.
                사용성이 좋은 인터페이스, 읽기 쉬운 코드, 재사용 가능한 구조를 고민하며 만들고 있습니다.
              </HeroSubtitle>
              <HeroMeta>
                <MetaItem>
                  <MetaDot />
                  React ·TypeScript · Kotlin · TypeScript · styled-components
                </MetaItem>
                <MetaItem>
                  <MetaDot />
                  Spring · Python · LLM · RAG
                </MetaItem>
              </HeroMeta>
              <HeroActions>
                <PrimaryButton href="https://github.com/beshurl" target="_blank" rel="noreferrer">
                  View GitHub
                </PrimaryButton>
                <GhostButton href="#" target="_blank" rel="noreferrer">
                  Download Resume
                </GhostButton>
              </HeroActions>
            </div>
            <HeroRight>
              <HeroBadge>
                <HeroBadgeItem>Sequence · SPA 플랫폼</HeroBadgeItem>
                <HeroBadgeItem>DX 해커톤 우수상</HeroBadgeItem>
                <HeroBadgeItem>RAG 기반 청년 정책 서비스</HeroBadgeItem>
              </HeroBadge>
              <HeroSummary>
                React + SPA 아키텍처, 상태 관리, Axios 인터셉터, RAG 파이프라인 설계 등
                실제 서비스에 필요한 전반적인 흐름을 경험했습니다. 아래에는 그중 일부 프로젝트를 정리했습니다.
              </HeroSummary>
            </HeroRight>
          </HeaderCard>

          <ProjectsSection>
            <SectionHeader>
              <SectionTitleBlock>
                <SectionTitle>Selected Work</SectionTitle>
                <SectionSubTitle>최근에 진행한 프로젝트들</SectionSubTitle>
              </SectionTitleBlock>
              <SectionCaption>
                React UI · 해커톤 서비스 · RAG/LLM 실험 중심으로 선별했습니다.
              </SectionCaption>
            </SectionHeader>
            <ProjectsGrid>
              {projects.map((project, index) => (
                <ProjectCard key={project.id} delay={110 * index}>
                  <ProjectHeaderRow>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectPeriod>{project.period}</ProjectPeriod>
                  </ProjectHeaderRow>
                  <ProjectDesc>{project.shortDesc}</ProjectDesc>
                  <TagsRow>
                    {project.tech.map((t) => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </TagsRow>
                  <CardFooter>
                    <ProjectLink href={project.link} target="_blank" rel="noreferrer">
                      <AccentDot />
                      View project
                    </ProjectLink>
                    <ProjectMeta>
                      {project.startDate} – {project.endDate}
                    </ProjectMeta>
                  </CardFooter>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </ProjectsSection>
        </Content>
      </AppShell>
    </>
  );
};

export default App;
