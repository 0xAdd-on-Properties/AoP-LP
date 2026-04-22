/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'addon-orange': '#FF6B35',
        'addon-red': '#FF3B21',
        'addon-green': '#10B981',
        'addon-blue': '#3B82F6',
        'addon-purple': '#8B5CF6',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        addonprop: {
          "primary": "#10B981",
          "secondary": "#3B82F6",
          "accent": "#FF6B35",
          "neutral": "#1E293B",
          "base-100": "#0F172A",
          "base-200": "#1E293B",
          "base-300": "#334155",
          "info": "#06B6D4",
          "success": "#10B981",
          "warning": "#F59E0B",
          "error": "#EF4444",
        },
      },
      "dark",
      "light",
    ],
  },
};
