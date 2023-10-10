/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundImage: {
      homeBg:
        "url('https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
    },

    fontFamily: {
      open: ["Open Sans", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
