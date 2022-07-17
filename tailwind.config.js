module.exports = {
  mode:"jit",
    content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./src/**/*.{html,ts}",
    "./pages/**/*.{html,js,ts,jsx}",
    "./components/**/*.{html,js,ts,jsx}",
    './*.{html,js,ts,jsx}'    
  ],
  theme: {
    extend: {
      colors:{
        ColorOne:"#f06b04",
        ColorTow:"#000000",
        ColorThree:"#2f2e2e",
        ColorFour:"#fafafa",
        ColorFive:"#f0f0f0",
        TextColor1:"#989898",
        TextColor2:"#06edff",
        TextColor3:"#ef0028",
        
        },
        backgroundImage: {
          'bkgImag': "url('/bkg1.webp')",
        }

    },
    
  },
    variants:{
      extend:{},
    },
  plugins: [],
};