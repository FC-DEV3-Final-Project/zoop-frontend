/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.text-largeTitle': {
          fontSize: '30px',
          fontWeight: '600',
        },
        '.text-title1': {
          fontSize: '24px',
          fontWeight: '700',
        },
        '.text-title2': {
          fontSize: '20px',
          fontWeight: '700',
        },
        '.text-title3': {
          fontSize: '18px',
          fontWeight: '700',
        },
        '.text-title4': {
          fontSize: '16px',
          fontWeight: '700',
        },
        '.text-subtitle1': {
          fontSize: '18px',
          fontWeight: '600',
        },
        '.text-subtitle2': {
          fontSize: '16px',
          fontWeight: '600',
        },
        '.text-subtitle3': {
          fontSize: '16px',
          fontWeight: '400',
        },
        '.text-subtitle4': {
          fontSize: '14px',
          fontWeight: '700',
        },
        '.text-body1': {
          fontSize: '16px',
          fontWeight: '500',
        },
        '.text-body2': {
          fontSize: '14px',
          fontWeight: '400',
        },
        '.text-body3': {
          fontSize: '12px',
          fontWeight: '400',
        },
        '.text-caption1': {
          fontSize: '14px',
          fontWeight: '600',
        },
        '.text-caption2': {
          fontSize: '14px',
          fontWeight: '500',
        },
        '.text-caption3': {
          fontSize: '12px',
          fontWeight: '500',
        },
        '.text-footnote': {
          fontSize: '11px',
          fontWeight: '300',
        },
      });
    },
  ],
};