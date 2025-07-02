import { FaExternalLinkAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

export interface Project {
    title: string;
    period: string;
    description: string;
    role: string;
    tech: string[];
    troubleshooting: string;
    achievement: string;
    link?: string;
    image?: string;
}

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white dark:bg-gray-900 rounded-4xl shadow-xl w-full max-w-4xl p-8 relative overflow-hidden transition-colors"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="max-h-[90vh] overflow-y-auto hide-scrollbar">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-6 text-5xl text-gray-400 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300"
                        aria-label="닫기"
                    >
                        ×
                    </button>
                    {/* 제목 */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-gray-100 mb-1 tracking-wider">
                        {project.title}
                    </h3>
                    <div className="text-gray-400 dark:text-gray-400 mb-6">{project.period}</div>

                    {/* 주제/내용 */}
                    <div className="mb-2">
                        <span className="font-semibold text-blue-700 dark:text-blue-400">주제/내용</span>
                        <div className="text-gray-900 dark:text-gray-200 leading-relaxed">{project.description}</div>
                        <div className="mb-2 pb-2 border-b border-gray-200 dark:border-gray-700"></div>
                    </div>

                    {/* 역할/기여도 */}
                    <div className="mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-semibold text-blue-700 dark:text-blue-400">역할/기여도</span>
                        <div className="text-gray-900 dark:text-gray-200 leading-relaxed tracking-wide whitespace-pre-line">
                            {project.role}
                        </div>
                    </div>

                    {/* 사용 기술 */}
                    <div className="mb-2 pb-2 border-b border-gray-200 dark:border-gray-700">
                        <span className="font-semibold text-blue-700 dark:text-blue-400">사용 기술</span>
                        <div className="text-gray-800 dark:text-gray-300">{project.tech.join(', ')}</div>
                    </div>

                    {/* 트러블슈팅 */}
                    {project.troubleshooting && (
                        <div className="mb-5 pb-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="font-semibold text-blue-700 dark:text-blue-400">트러블 슈팅</span>
                            <div className="mt-1 prose max-w-none text-gray-900 dark:text-gray-200">
                                <ReactMarkdown
                                    components={{
                                        code({ className, children, ...props }) {
                                            return (
                                                <pre className="bg-gray-100 dark:bg-gray-800 rounded px-3 py-2 font-mono text-sm my-2 whitespace-pre-wrap">
                                                    <code className={className} {...props}>
                                                        {children}
                                                    </code>
                                                </pre>
                                            );
                                        },
                                    }}
                                >
                                    {project.troubleshooting}
                                </ReactMarkdown>
                            </div>
                        </div>
                    )}
                    {/* 성과 */}
                    <div className="mb-4">
                        <span className="font-semibold text-blue-700 dark:text-blue-400">성과</span>
                        <div className="text-gray-900 dark:text-gray-200">{project.achievement}</div>
                    </div>

                    {/* 링크 */}
                    {project.link && (
                        <div className="mt-2">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full font-semibold hover:bg-blue-200 dark:hover:bg-blue-800 transition inline-flex items-center gap-1"
                            >
                                프로젝트 바로가기 <FaExternalLinkAlt />
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
