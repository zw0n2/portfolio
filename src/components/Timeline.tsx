'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

interface TimelineEvent {
    title: string;
    year?: number;
    month?: number;
    detail?: React.ReactNode;
    period?: { from: { year: number; month?: number }; to: { year: number; month?: number } };
    images?: string[];
    link?: string;
    linkLabel?: string;
}

const TIMELINE_EVENTS: TimelineEvent[] = [
    {
        title: '광운대학교 입학',
        year: 2021,
        month: 3,
        detail: (
            <>
                <div>• 프론트엔드 개발자를 희망하여 커리큘럼 확인 후 정보융합학부에 입학</div>
            </>
        ),
    },
    {
        title: 'AI투자 프로젝트 "투비" UI/UX 디자인',
        period: { from: { year: 2021, month: 12 }, to: { year: 2022, month: 2 } },
        detail: (
            <>
                <>
                    <div>• 선배 추천으로 단기 참여(8주)</div>
                    <div>• 시장 레퍼런스 리서치 및 AdobeXD로 UI 시안 제작</div>
                    <div>• 디자인 피드백 회의 참석, 기초 플로우 제안</div>
                </>
            </>
        ),
    },
    {
        title: '학부 학생회 홍보국 국장',
        period: { from: { year: 2022, month: 3 }, to: { year: 2024, month: 2 } },
        detail: (
            <>
                <div>• 미리캔버스, 캔바를 이용한 학과 행사 카드뉴스 제작</div>
                <div>• 학과 공식 인스타그램 운영</div>
                <div>• 행사 기획 및 회의 진행</div>
            </>
        ),
        images: ['/cardnews1.jpg', '/cardnews2.jpg', '/cardnews3.jpg'],
    },
    {
        title: '디지털 경험 분석 연구실 전공 동아리 CHIC',
        period: { from: { year: 2023, month: 1 }, to: { year: 2024, month: 12 } },
        detail: (
            <>
                <div>• 전공 수업 심화 스터디 및 실습</div>
                <div>• IT 재직자 정기 세미나 참여</div>
            </>
        ),
        link: 'https://github.com/kw-chi-community/CHIC_24_machine-learning-study.git',
        linkLabel: '스터디 GitHub 보기',
    },
    {
        title: '디랩 코딩학원 목동점 강사',
        period: { from: { year: 2023, month: 6 }, to: { year: 2024, month: 2 } },
        detail: (
            <>
                <div>• 파이썬, 마이크로비트, 앱인벤터 등 매주 토요일 6시간 강의</div>
                <div>• 방학 평일 사무 보조, 캠프 AI 프로그램 기획 및 강의</div>
            </>
        ),
    },
    {
        title: '컴퓨터-인간 상호작용 커뮤니티 아이디어톤 대회 최우수상',
        year: 2024,
        month: 1,
        detail: (
            <>
                <div>• 주제: 빅데이터를 활용한 미래 사회문제 해결 + 공공데이터 포털 활용</div>
                <div>• 5인팀에서 팀장을 맡아 진행</div>
            </>
        ),
        images: ['/chic.jpg'],
        link: 'https://www.notion.so/2238f7add80b807796fcfc98fe8179b3?source=copy_link',
        linkLabel: '발표 자료 보기',
    },
    {
        title: 'JS 스터디',
        period: { from: { year: 2024, month: 1 }, to: { year: 2024, month: 3 } },
        detail: (
            <>
                <div>• 온라인 인강 기반 독학</div>
                <div>• velog를 통한 학습 내용 기록</div>
            </>
        ),
        link: 'https://velog.io/@zw0n2/series/%ED%8C%A8%EC%BA%A0-JS',
        linkLabel: 'Velog 보기',
    },
    {
        title: '산학 연계 SW프로젝트 및 졸업 전시회',
        period: { from: { year: 2024, month: 2 }, to: { year: 2024, month: 10 } },
        detail: (
            <>
                <div>• 매주 팀 회의 및 기업 줌 미팅을 통한 피드백</div>
                <div>• AI 직물 패턴 생성 웹 서비스 개발</div>
            </>
        ),
        images: ['/ohmyservice.PNG', '/ohmyservice2.png'],
        link: 'https://github.com/Oh-MyService/FE.git',
        linkLabel: 'GitHub 보기',
    },
    {
        title: '9oormthonUNIV 3기 활동',
        period: { from: { year: 2024, month: 9 }, to: { year: 2025, month: 1 } },
        images: ['/univ2.png'],
        detail: (
            <>
                <div>• 프론트엔드 스터디</div>
                <div>• 온보딩 세미나(재직자 강연)</div>
            </>
        ),
        link: 'https://velog.io/@zw0n2/series/FE-%EC%8A%A4%ED%84%B0%EB%94%94',
        linkLabel: 'Velog 보기',
    },
    {
        title: '구름톤 유니브 3기 단풍톤',
        year: 2024,
        month: 11,
        detail: (
            <>
                <div>• 카카오테크 부트캠프 교육장에서 1박 2일로 진행</div>
                <div>• 주제: (소외계층/청년/지역불균형 중 택1 )의 문제 해결을 위한 솔루션 + 카카오 API 사용</div>
            </>
        ),
        images: ['/univ1.png'],
        link: 'https://github.com/9oormthon-univ/2024_DANPOONG_TEAM_20_FE.git',
        linkLabel: 'GitHub 보기',
    },

    {
        title: 'CS 스터디',
        period: { from: { year: 2025, month: 1 }, to: { year: 2025, month: 2 } },
        detail: (
            <>
                <div>• 도서와 온라인 자료를 활용해 독학</div>
                <div>• velog를 통한 학습 내용 기록</div>
            </>
        ),
        link: 'https://velog.io/@zw0n2/series/FE%EC%8A%A4%ED%84%B0%EB%94%94',
        linkLabel: 'Velog 보기',
    },
    {
        title: '이벤트 신청 서비스 단독 개발',
        year: 2025,
        month: 3,
        detail: (
            <>
                <div>• 지인 의뢰로 단독 개발한 외주 프로젝트</div>
                <div>• 배포 후 실사용 중</div>
            </>
        ),
        link: 'https://velog.io/@zw0n2/Next.js-Vercel-Supabase%EB%A1%9C-%EC%8B%A0%EC%B2%AD-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0',
        linkLabel: 'Velog 보기',
    },
    {
        title: '포트폴리오 사이트 개발',
        year: 2025,
        month: 6,
        detail: (
            <>
                <div>• Next.js, TypeScript, Tailwind CSS로 개발 및 Vercel 배포</div>
                <div>• 지속적으로 고도화 및 업데이트 중</div>
            </>
        ),
    },
];

const YEARS = [2021, 2022, 2023, 2024, 2025];

// 연도별 "시작"인 이벤트만 반환
function getEventsByYear(year: number) {
    return TIMELINE_EVENTS.filter((ev) => (ev.year && ev.year === year) || (ev.period && ev.period.from.year === year));
}

export default function Timeline() {
    const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

    return (
        <section id="timeline" className="w-full py-16 bg-white dark:bg-gray-900 transition-colors">
            <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">Timeline</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-violet-400 to-emerald-400 rounded-full"></div>
            </div>

            <div className="grid grid-cols-5 gap-8">
                {YEARS.map((year) => (
                    <div
                        key={year}
                        className="bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow p-4 min-h-[260px] flex flex-col gap-2"
                    >
                        <div className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-2">{year}</div>
                        {getEventsByYear(year).map((ev, idx) => (
                            <div key={ev.title + idx} className="mb-3">
                                {/* 제목을 버튼으로 만들어 클릭 시 모달 오픈 */}
                                <button
                                    className="text-base font-semibold text-left text-gray-900 dark:text-gray-100 hover:text-neutral-500 dark:hover:text-neutral-300 focus:underline"
                                    onClick={() => setSelectedEvent(ev)}
                                >
                                    {ev.title}
                                </button>

                                {ev.period && (
                                    <div className="text-xs text-neutral-400 dark:text-neutral-300">
                                        {ev.period.from.year}.{ev.period.from.month ?? '??'} ~ {ev.period.to.year}.
                                        {ev.period.to.month ?? '??'}
                                    </div>
                                )}
                                {ev.year && ev.month && !ev.period && (
                                    <div className="text-xs text-neutral-400 dark:text-neutral-300">
                                        {ev.year}.{ev.month}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* ====== 모달 ====== */}
            {selectedEvent && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                    onClick={() => setSelectedEvent(null)}
                >
                    <div
                        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-3xl p-10 pr-16 relative transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedEvent(null)}
                            className="absolute top-3 right-5 text-4xl text-neutral-400 dark:text-neutral-600 hover:text-neutral-200 dark:hover:text-neutral-300 z-50"
                            aria-label="닫기"
                        >
                            ×
                        </button>
                        {/* 타이틀*/}
                        <h3 className="text-3xl text-blue-700 dark:text-blue-400 font-bold mb-2 mr-10">
                            {selectedEvent.title}
                        </h3>

                        {/* 기간 & 링크 한 줄 배치 */}
                        <div className="flex items-center gap-3 mb-5 text-lg text-neutral-400 dark:text-neutral-300">
                            {/* 기간/날짜 */}
                            {selectedEvent.period ? (
                                <span>
                                    {selectedEvent.period.from.year}.{selectedEvent.period.from.month ?? '??'} ~{' '}
                                    {selectedEvent.period.to.year}.{selectedEvent.period.to.month ?? '??'}
                                </span>
                            ) : selectedEvent.year && selectedEvent.month && !selectedEvent.period ? (
                                <span>
                                    {selectedEvent.year}.{selectedEvent.month}
                                </span>
                            ) : null}

                            {/* 구분선 | (기간만 있는 경우엔 표시X, 링크 있을 때만) */}
                            {selectedEvent.link && <span className="mx-2">|</span>}

                            {/* 링크 */}
                            {selectedEvent.link && (
                                <a
                                    href={selectedEvent.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-neutral-400 dark:text-neutral-300 hover:text-neutral-200 dark:hover:text-neutral-100 underline text-base font-semibold"
                                >
                                    {selectedEvent.link.includes('github.com') ? (
                                        <FaGithub className="text-lg" />
                                    ) : selectedEvent.link.includes('velog.io') ? (
                                        <SiVelog className="text-lg" />
                                    ) : (
                                        <FaExternalLinkAlt className="text-lg" />
                                    )}
                                    {selectedEvent.linkLabel ?? '자세히 보기'}
                                </a>
                            )}
                        </div>

                        {/* 상세내용*/}
                        {selectedEvent.detail && (
                            <div className="mb-5 text-lg text-black dark:text-gray-100">{selectedEvent.detail}</div>
                        )}

                        {/* 이미지*/}
                        {selectedEvent.images && selectedEvent.images.length > 0 && (
                            <div
                                className="mt-6 flex flex-row gap-6 justify-start overflow-x-auto max-w-full pb-2"
                                style={{ scrollbarWidth: 'thin' }}
                            >
                                {selectedEvent.images.map((img, idx) => (
                                    <Image
                                        key={img}
                                        src={img}
                                        alt={`${selectedEvent.title} 이미지 ${idx + 1}`}
                                        width={260}
                                        height={156}
                                        className="rounded-lg shadow flex-shrink-0"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
