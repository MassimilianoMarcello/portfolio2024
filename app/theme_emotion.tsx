
const fontFace = `
  @font-face {
    font-family: 'Almaq Refined'; 
    src: url('../public/fonts/Almaq Refined.ttf') format('truetype');
    
  }
`;



const theme = {
  colors: {
    gold: " #f5a800",
    goldText: "#e88e06",
    blueLight: "#277fdd",
    blue: "#1b61d9",
    blueDark: " #0741a4",
    blueDarker: "#00286b",
    blueDarkest: "#001d53",
    white: "fefffe",
  },

  layout: {
    containerWidth: "60rem",
    containerPadding: "2rem",
    margin: "1rem",
    padding: "1rem",
    spacingSmall: "0.5rem",
    spacingMedium: "1rem",
    spacingLarge: "2rem",
  },

  breakpoints: {
    small: "600px",
    medium: "768px",
    large: "1024px",
  },

  fontSize: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
    heading1: "2rem",
    heading2: "1.5rem",
    paragraph: "1rem",
  },

  image: {
    maxWidth: "100%",
  },
  borderRadius: {
    small: "4px",
    medium: "8px",
    large: "12px",
  },

  lineHeight: "1.5",

  lineThickness: "1px",

  iconSize: {
    small: "1rem",
    medium: "1.5rem",
    large: "2rem",
  },

  button: {
    height: "2rem",
    width: "6rem",
  },

  input: {
    height: "2rem",
    width: "10rem",
  },

  fontFamily: {
    customFont: "'Almaq Refined', sans-serif", 
  },
  fontWeight: {
    light: 200,
    regular: 400,
    bold: 700,
  },
};

export default theme;
