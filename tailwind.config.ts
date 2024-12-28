import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      sm: '12px',
      md: '14px',
      lg: '16px',
      xl: '18px',
      '2xl': '20px',
      '3xl': '24px',
    },
    borderRadius: {
      none: '0',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '30px',
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#1E6F9F',
        primary100: '#195b82',
        secondary: '#8284FA',
        dark: '#0D0D0D',
        gray: '#1A1A1A',
        gray100: '#808080',
        lightGray: '#333333',
        white: '#F2F2F2',
        error: '#df2647',
        surface: '#EFF0EF',
        warning: '#F1942C',
        info: '#1865D8',
      },
    },
  },
  plugins: [],
} satisfies Config;
