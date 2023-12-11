/**
 * Tailwind CSS configuration file.
 * 
 * Defines the project's settings, such as the content to process, theme extensions,
 * and additional plugins. The content property specifies the files to process for Tailwind styles.
 * The theme property extends the default theme, including custom font families (Satoshi and Inter).
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

