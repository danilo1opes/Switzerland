/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        ogg: ['"Ogg TRIAL"', 'serif'],
      },
      colors: {
        brand: {
          primary: '#fff',
          secundary: '#000',
        },
      },
    },
  },
  plugins: [],
};
