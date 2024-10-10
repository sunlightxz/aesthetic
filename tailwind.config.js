/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
       
        padding: {
          'custom-1': 'calc(2.875rem + 5.47368vw)',
          'custom-2': 'calc(2.25rem + 3.36842vw)',
          'custom-3': '5.2631578947vw',
          'custom-4': '7.8947368421vw',
          'custom-5': 'calc(6rem + 16vw)',
          'custom-6': '21.0526315789vw',
          'custom-7': 'calc(4.75rem + 11.78947vw)',
          'custom-8': 'calc(1.3125rem + .21053vw)',
        },
      },
      fontFamily: {
        adamina: ["Adamina", 'serif'],
        poppins: ["Poppins", 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
