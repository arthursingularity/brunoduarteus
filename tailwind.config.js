module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thin: ['Poppins Thin'],
        extralight: ['Poppins Extra Light'],
        light: ['Poppins Light'],
        regular: ['Poppins Regular'],
        medium: ['Poppins Medium'],
        psemibold: ['Poppins SemiBold'],
        bold: ['Poppins Bold'],
        extrabold: ['Poppins ExtraBold'],
      },
      colors: {
        'bgreen': '#aaff00',
        'verde': '#4ce560',
      },
    },
  },
  plugins: [],
}
