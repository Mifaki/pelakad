import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
      },
      fontSize: {
        'caption-1': ['14px', 'auto'],
        'caption-2': ['12px', 'auto'],
        'caption-3': ['10px', 'auto'],
        'body-1': ['18px', 'auto'],
        'body-2': ['16px', 'auto'],
        'heading-1': ['48px', 'auto'],
        'heading-2': ['38px', 'auto'],
        'heading-3': ['32px', 'auto'],
        'heading-4': ['28px', 'auto'],
        'heading-5': ['24px', 'auto'],
        'heading-6': ['20px', 'auto'],
        'display-1': ['72px', 'auto'],
        'display-2': ['54px', 'auto'],
      },
      colors: {
        'pd-primary': '#96B8E6',
        'pd-primary-action': '#3B82F6',
        'pd-primary-bold': '#1F1688',
        'pd-primary-text': '#19397F',
        'pd-accent': '#BE0575',
        'pd-gray': '#454F5C',
      },
    },
  },
  plugins: [],
} satisfies Config;
