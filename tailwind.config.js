/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        utility: {
          brand: {
            400: '#3b82f6', // blue-500
            600: '#2563eb', // blue-600
            700: '#1d4ed8', // blue-700
          },
          neutral: {
            100: '#f5f5f5',
          },
        },
        tertiary: '#6b7280',
        primary: '#111827',
      },
      fontSize: {
        'display-xs': ['0.75rem', { lineHeight: '1rem' }],
        'display-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'display-md': ['1rem', { lineHeight: '1.5rem' }],
        'display-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'display-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'display-2xl': ['1.5rem', { lineHeight: '2rem' }],
      },
    },
  },
  plugins: [],
}