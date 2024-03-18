import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'ibm-plex-sans-400': ['"IBMPlexSans-Regular"', 'sans-serif'],
      'ibm-plex-sans-500': ['"IBMPlexSans-Medium"', 'sans-serif'],
      'ibm-plex-sans-600': ['"IBMPlexSans-SemiBold"', 'sans-serif'],
      'ibm-plex-sans-700': ['"IBMPlexSans-Bold"', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#C9984F',
        background: 'var(--color-background)',
        card: 'var(--color-card)',
        green: '#068b1d',
        darkGreen: '#68CF16',
        gray: '#D0CCC5',
        golden: '#E7AF00',
        iconBg: 'var(--color-icon-background)',
      },
      fontSize: {
        '3xl': ['3.625rem', '1'],
        '26px': ['1.625rem', '1'],
        '32px': ['2rem', '1'],
        '58px': ['3.625rem', '1'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
