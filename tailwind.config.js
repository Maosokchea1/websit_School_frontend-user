/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 👈 ត្រូវតែបន្ថែមបន្ទាត់នេះទើប Dark/Light Mode ដំណើរការ
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          DEFAULT: '#2563eb', // Primary Blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        // កំណត់ 'Times New Roman' ជា Font ដើមសម្រាប់ English (font-sans)
        sans: ['"Times New Roman"', 'Times', 'serif'],
        
        // Class font-khmer សម្រាប់ Khmer (ប្រើ Font Battambang)
        khmer: ['Battambang', 'Khmer OS Battambang', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        // បន្ថែម Animation អក្សររត់ទៅវិញទៅមក (Ping-Pong)
        'text-ping-pong': 'pingPong 4s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        // បន្ថែម Keyframes សម្រាប់ការរត់ទៅវិញទៅមក
        pingPong: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-15px)' }, // អាចប្តូរលេខ -15px ទៅតាមចំណូលចិត្ត
        },
      },
    },
  },
  plugins: [],
}