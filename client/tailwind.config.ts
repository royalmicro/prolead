import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Palanquin", "sans-serif"],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
        'primary-dark': '#4A3E94',
        'primary-light': '#F0ECFF',
        primary: '#D4C9F9',
        dark: {
          1: '#28293D',
          2: '#555770',
          3: '#8F90A6',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
