import Image from 'next/image';
import { FaGithub, FaEnvelope, FaRegCalendar, FaGraduationCap, FaPhone } from 'react-icons/fa';
import { SiVelog } from 'react-icons/si';

export default function AboutMe() {
    return (
        <section id="about" className="w-full py-16 min-h-[40vh] bg-white dark:bg-gray-900 transition-colors">
            <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">About Me</h2>
                <div className="h-1 w-14 bg-gradient-to-r from-blue-500 via-violet-400 to-emerald-400 rounded-full"></div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-[100px] justify-center">
                {/* 왼쪽: 프로필 사진 */}
                <div className="flex-shrink-0 mb-20">
                    <Image src="/profile.jpeg" alt="프로필 사진" width={210} height={210} className="rounded-4xl" />
                </div>
                {/* 오른쪽: 텍스트 소개 */}
                <div className="w-full sm:w-auto ">
                    <div className="flex items-baseline gap-3 mb-3">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">김지원</h1>
                        <span className="text-lg text-neutral-700 dark:text-neutral-300">Frontend Developer</span>
                    </div>

                    <p className="text-lg mb-4 text-neutral-600 dark:text-neutral-300">
                        유연한 협업과 소통능력, 변화에 대한 빠른 적응력,
                        <br />
                        그리고 이성적이고 긍정적인 마인드로 팀의 시너지를 이끌어냅니다.
                        <br />
                        새로운 기술과 트렌드에 대한 학습을 멈추지 않는 개발자가 되고자 합니다.
                    </p>
                    {/* 키워드 뱃지 */}
                    <div className="flex gap-2 flex-wrap mb-8">
                        <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                            #책임감과 성실함을 갖춰 신뢰받는 사람
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                            #리더와 팔로워 모두 가능한 팀원
                        </span>
                        <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium">
                            #UI/UX 고민을 함께할 수 있는 개발자
                        </span>
                    </div>
                    {/* 2열 3행 아이콘 명칭 그리드 */}
                    <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-4 mb-2 min-w-0">
                        {/* 1행 */}
                        <div className="flex items-center gap-2">
                            <FaRegCalendar className="text-xl text-black dark:text-white" />

                            <span className="text-gray-600 dark:text-gray-400">2002.04.12</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaGraduationCap className="text-xl  text-black dark:text-white" />

                            <span className="text-gray-600 dark:text-gray-400">
                                광운대학교 정보융합학부 비주얼테크놀로지 전공
                            </span>
                        </div>
                        {/* 2행 */}
                        <div className="flex items-center gap-2">
                            <FaEnvelope className="text-xl  text-black dark:text-white" />

                            <span className="text-gray-600 dark:text-gray-400">daniela0412@naver.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhone className="text-xl  text-black dark:text-white" />

                            <span className="text-gray-600 dark:text-gray-400">010-9983-9732</span>
                        </div>

                        {/* 3행 */}
                        <div className="flex items-center gap-2">
                            <FaGithub className="text-xl text-black dark:text-white" />

                            <a
                                href="https://github.com/zw0n2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300 transition"
                            >
                                github.com/zw0n2
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <SiVelog className="text-xl text-black dark:text-white" />

                            <a
                                href="https://velog.io/@zw0n2"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 dark:text-blue-400 underline hover:text-blue-500 dark:hover:text-blue-300 transition"
                            >
                                velog.io/@zw0n2
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
