'use client';
import Link from 'next/link';

const NAV_ITEMS = [
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
];

export default function NavBar() {
    return (
        <nav className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors">
            <div
                className="
                    w-full
                    max-w-[1216px]
                    mx-auto
                    flex
                    justify-between
                    items-center
                    h-[4.5rem]
                    px-6
                    py-5
                "
            >
                <div className="font-extrabold text-3xl select-none bg-gradient-to-r from-blue-500 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                    Portfolio
                </div>

                <div className="flex gap-2 sm:gap-6">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`
                                relative px-3 py-1
                                font-medium text-gray-700 dark:text-gray-200
                                transition-all
                                after:content-[''] after:block after:w-0 after:h-0.5
                                after:transition-all after:duration-300
                                hover:after:w-full
                                after:absolute after:left-0 after:bottom-0
                                hover:bg-gradient-to-r hover:from-blue-500 hover:via-violet-400 hover:to-emerald-400
                                hover:bg-clip-text hover:text-transparent
                            `}
                            scroll={true}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}
