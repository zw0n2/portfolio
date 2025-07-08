'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal, { Project } from '@/components/ProjectModal';
import Image from 'next/image';

// 프로젝트 데이터
const PROJECTS: Project[] = [
    {
        title: '산학 연계 SW프로젝트',
        period: '2024.02 - 2024.10',
        description: '생성형 AI를 활용한 심리스 원단 패턴디자인 생성 웹 서비스 연구개발',
        role: `• 서비스 기획(5인 공동, 30%): 웹사이트의 전반적인 구성 및 진행 방식 기획, 주요 아이디어 다수 채택
• UI/UX 디자인(2인 공동, 50%): 사용자 경험을 고려한 전체 화면 설계 및 시각적 디자인 작업
• 프론트엔드 개발(2인 공동, 50%): API 연동, UI 퍼블리싱, 클라이언트 사이드 기능 등 프론트엔드 전체 개발`,
        tech: ['Figma', 'React', 'TailwindCSS'],
        troubleshooting:
            `**문제:** 이미지 생성 진행 중 페이지를 이동하면 백엔드에서는 작업이 계속 진행되지만, 프론트엔드에서는 프로세스가 중단되어 페이지 복귀 시 결과가 안보이는 문제 발생.

**원인:** 프론트엔드 상태가 중단되고, 서버 상태와 동기화되지 않음.

**해결:** 작업 결과를 localStorage에 저장하고, 페이지 복귀 시 저장된 데이터를 복원 + 미완료 작업의 진행상황을 fetchProgress로 동기화, 작업이 완료되면 pollForImages로 생성된 이미지를 받아와 결과를 갱신.

**주요 코드:**
\`\`\`js
// 상태를 localStorage에 저장
useEffect(() => {
  localStorage.setItem('results', JSON.stringify(results));
}, [results]);

// 페이지 복귀 시 상태 복원 및 미완료 작업 동기화
useEffect(() => {
  const saved = localStorage.getItem('results');
  if (saved) {
    const parsed = JSON.parse(saved);
    setResults(parsed);
    parsed.forEach(r => r.isLoading && fetchProgress(r.task_id));
  }
}, []);

// 진행상황 확인 및 결과 동기화
async function fetchProgress(taskId) {
  const res = await fetch(\`/progress/\${taskId}\`);
  const { progress } = await res.json();
  if (progress >= 100) pollForImages(taskId);
}
\`\`\`
`.trim(),
        achievement: '졸업 작품 전시회 장려상 및 인기상 수상',
        link: 'https://www.notion.so/2218f7add80b80319c5eee868ffeae45?source=copy_link',
        image: '/project1.png',
    },
    {
        title: '카카오X구름 유니브 단풍톤',
        period: '2024.11.18 - 2024.11.24',
        description: '유학생을 위한 Streak 기반 SNS 서비스 개발',
        role: `• 서비스 기획(6인 공동, 30%): 서비스 개발 주제 채택, 서비스 구조 및 기능 기획
• UI/UX 디자인(3인 공동, 30%): 사용자 경험을 고려한 전체 화면 설계 및 시각적 디자인 도움
• 프론트엔드 개발(2인 공동, 50%): API 연동, UI 퍼블리싱, 클라이언트 사이드 기능 등 프론트엔드 전체 개발`,
        tech: ['ReactNative(CLI)', 'TypeScript', 'Styled-components', 'Axios', 'Kakao Login'],
        troubleshooting: `
**문제 1**
  
• React Native와 모바일 앱 개발을 처음 경험하여, 화면 구성과 초기 환경설정에 시간이 소요됨.

• 특히 expo를 사용하려 했으나 라이브러리 등의 호환성 문제가 지속적으로 발생함.

**해결**

• 시간적 여유가 적은 해커톤 특성상 다 구현할 수는 없다고 판단, 필요한 기능을 우선순위로 정리해 개발 진행. 

• 공식문서와 기술 블로그를 참조하며 CLI로 전환하였고, 대부분 구현에 성공. 

• 구현에 실패한 기능은 대체 기능을 추가하여 서비스 구조를 완성함. 

**문제 2:** '유학생을 위한 SNS'라는 광범위한 주제에서 구체적인 서비스 구조를 정하는 데 팀이 오랜 시간 방향을 잡지 못함.

**해결:** 직접 다양한 앱의 레퍼런스를 조사해 팀에 소개했고, 그 결과 Streak 기반 SNS라는 핵심 방향이 결정되어 개발이 본격화됨.
`.trim(),
        achievement: '총 68팀중 34위',
        link: 'https://www.notion.so/2228f7add80b80b5bcefd438d6b8c290?source=copy_link',
        image: '/project2.png',
    },

    {
        title: '이벤트 신청/관리 웹사이트 (외주, 단독 개발)',
        period: '2025.03',
        description: '유학생을 위한 Streak 기반 SNS 서비스 개발',
        role: `서비스 기획 및 개발(단독, 100%): 이벤트 신청 페이지 & 관리자 페이지 구성 및 디자인, 백엔드 및 프론트엔드 개발`,
        tech: ['React', 'Next.js', 'TailwindCSS', 'Supabase'],
        troubleshooting: `
**문제:** Supabase 무료 플랜에서 7일간 요청이 없을 경우 프로젝트가 자동 일시중지되어, 사용자 요청 시 오류 발생.

**해결**

• Supabase REST API에 주기적으로 요청을 보내는 GitHub Actions 워크플로를 작성하여, 프로젝트가 “활동 중”으로 유지되도록 자동화함.

• curl을 활용해 특정 테이블에 read 요청을 보내고, cron 스케줄로 3일마다 자동 실행되도록 구성.

• GitHub Secrets를 통해 API 키 등 민감 정보를 안전하게 관리하고, 워크플로 재사용성과 보안성을 확보함.
`.trim(),
        achievement: '배포 후 실사용 중',
        link: 'https://event-site-sandy.vercel.app/',
        image: '/project3.JPG',
    },
];

export default function Projects() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <motion.section
            id="projects"
            className="w-full py-16 bg-white dark:bg-gray-900 transition-colors"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">Projects</h2>
                <div className="h-1 w-14 bg-gradient-to-r from-blue-500 via-violet-400 to-emerald-400 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, idx) => (
                    <div
                        key={project.title}
                        className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow p-6 hover:shadow-lg cursor-pointer transition border border-gray-100 dark:border-gray-700"
                        onClick={() => setOpenIndex(idx)}
                    >
                        {/*  대표 이미지  */}
                        {project.image && (
                            <div className="w-full aspect-video mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-700">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} 대표 이미지`}
                                    width={600}
                                    height={320}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                {project.title}
                            </span>
                        </div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">{project.period}</div>
                        <div className="text-base text-gray-800 dark:text-gray-200 line-clamp-2">
                            {project.description}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* 분리된 모달 */}
            {openIndex !== null && <ProjectModal project={PROJECTS[openIndex]} onClose={() => setOpenIndex(null)} />}
        </motion.section>
    );
}
