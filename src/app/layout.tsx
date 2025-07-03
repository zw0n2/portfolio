import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '김지원 | 프론트엔드 개발자 포트폴리오',
    description: 'Frontend Developer Portfolio of Ji-Won Kim. 프로젝트, 기술 스택 등 다양한 정보를 담았습니다.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`
                    ${geistSans.variable} ${geistMono.variable} antialiased
                    bg-white dark:bg-gray-900 min-h-screen
                `}
            >
                {children}
                <footer className="w-full py-8 text-center text-gray-300 dark:text-gray-600 text-sm">
                    © {new Date().getFullYear()} Jiwon Kim. All rights reserved.
                </footer>
            </body>
        </html>
    );
}
