'use client';
import { FaJs, FaReact, FaGithub, FaFigma, FaGitAlt, FaSlack, FaDiscord, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiNotion, SiVite, SiSwagger } from 'react-icons/si';
import { GiPalmTree } from 'react-icons/gi';
import { motion } from 'framer-motion';

const SKILLS = [
    {
        label: 'Languages',
        skills: [
            { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML' },
            { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS' },
            { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
            { icon: <SiTypescript className="text-blue-500" />, name: 'TypeScript' },
        ],
    },
    {
        label: 'Frameworks & Libraries',
        skills: [
            { icon: <FaReact className="text-sky-400" />, name: 'React' },
            { icon: <SiNextdotjs className="text-black dark:text-white" />, name: 'Next.js' },
            { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind CSS' },
            { icon: <GiPalmTree className="text-red-500" />, name: 'TanStack Query' },
        ],
    },
    {
        label: 'Tools',
        skills: [
            { icon: <FaFigma className="text-rose-600" />, name: 'Figma' },
            { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
            { icon: <SiVite className="text-violet-500" />, name: 'Vite' },
            { icon: <SiSwagger className="text-lime-500" />, name: 'Swagger' },
        ],
    },
    {
        label: 'Collaboration',
        skills: [
            { icon: <FaGithub className="text-black dark:text-white" />, name: 'GitHub' },
            { icon: <FaSlack className="text-green-500" />, name: 'Slack' },
            { icon: <FaDiscord className="text-indigo-500" />, name: 'Discord' },
            { icon: <SiNotion className="text-black dark:text-white" />, name: 'Notion' },
        ],
    },
];

export default function Skills() {
    return (
        <motion.section
            id="skills"
            className="py-12 w-full bg-white dark:bg-gray-900 transition-colors"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">Skills</h2>
                <div className="h-1 w-14 bg-gradient-to-r from-blue-500 via-violet-400 to-emerald-400 rounded-full"></div>
            </div>

            <div className="flex flex-col gap-8">
                {SKILLS.map((category) => (
                    <div key={category.label}>
                        <h3 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">
                            {category.label}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="flex flex-col items-center gap-1 bg-white/90 dark:bg-gray-800/90 shadow-sm rounded-xl py-3 transition hover:scale-105 hover:shadow-md"
                                >
                                    <span className="text-2xl">{skill.icon}</span>
                                    <span className="text-sm font-normal text-gray-900 dark:text-gray-100">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
