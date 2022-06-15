/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#004b5a',
        danger: '#ef4444',
        txtPrimary: '#111827',
        txtSecondary: '#374151',
        txtTertiary: '#6b7280'
      }
    },
  },
  plugins: [],
}
