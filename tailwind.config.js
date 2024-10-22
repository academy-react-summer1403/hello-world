/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        tshort: "440px",
        short: "500px",
        bb:"510px",
        smm: "540px",
        mini: "550px",
        mini1: "600px",
        min:"690px",
        sm: "640px",
        ss:"717px",
        md: "768px",
        mmd: "840px",
        cc:"945px",
        dd: "950px",
        lg: "1024px",
        gg:"1052px",
        lgg: "1110px", 
        lgx: "1150px",
        aa:"1160px", 
        ff:"1204px",
        gg:"1210px",
        xx:"1232px",
        xll: "1250px", 
        ll:"1256px",
        xl: "1280px",
        xxl: "1405px",
        "2xl": "1536px",
      },
      colors: {
        gray: "rgba(38, 50, 56, 1)",
        gray2: "rgba(69, 90, 100, 1)",
        blue: "#bae6fd",
        blue1: "#2196F3",
        gray3: "rgba(38, 50, 56, 1)",
        gray4: "rgba(69, 90, 100, 1)",
        white: "rgb(255 255 255 )",
        white3: " rgba(255, 255, 255, 0.6)",
        bluee: "rgba(33, 150, 243, 1)",
        grayy: "rgba(38, 50, 56, 1)",
        graylight: "rgba(236, 239, 241, 1)",
        graylight2: "rgba(207, 216, 220, 1)",
      },
      backgroundColor: {
        white2: "rgba(250, 251, 252, 1)",
        melopink: "rgba(255, 235, 238, 1)",
        white: "rgb(255 255 255)",
        whitee: "rgb(255 255 255,1)",
        yellow: "rgba(255, 245, 219, 1)",
        blue: "rgba(227, 242, 253, 1)",
        purple: " rgba(37, 38, 65, 1)",
        blue1: "rgba(33, 150, 243, 1)",
        purple1: "rgba(0, 0, 0, 0.2)",
        purple2: "rgba(231, 240, 252, 1)",
        darkwhite: " rgba(236, 239, 241, 1)",
        grayyy: " rgba(236, 239, 241, 1)",
        blueee: "#e0f2fe",
        darkpink: "rgba(255, 0, 122, 1)",
        primaryColor: "#2196F3",
      },
    },
  },
  plugins: [],
};
