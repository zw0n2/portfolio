/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media', // 'class' → 'media'로 변경
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        // 필요하다면 public, pages 등 추가
    ],
    theme: {
        extend: {
            fontFamily: {
                pretendard: ['Pretendard', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
