const colors: {
  dark: string | number;
  incognito: string | number;
  white: string | number;
  background_white: string | number;
  background_dark: string | number;
  primary: string | number;
  primary_burger: string | number;
  green: string | number;
  success: string | number;
  red: string | number;
  redSecondary: string | number;
  blue: string | number;
  greyLight: string | number;
  greyMedium: string | number;
  greySemiDark: string | number;
  greyDark: string | number;
  greyBlue: string | number;
} = {
  dark: "#17161a",
  incognito: "#333",
  white: "#fff",
  background_white: "#f5f5f7",
  background_dark: "#292729",
  primary: "#ffa01b",
  primary_burger: "#ff9f1b",
  green: "green",
  success: "#60bd4f",
  red: "#e25549",
  redSecondary: "#c4151c",
  blue: "#51a7e1",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
};

const spacing: {
  xxs: string | number;
  xs: string | number;
  sm: string | number;
  md: string | number;
  lg: string | number;
  xl: string | number;
  xxl: string | number;
} = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const fonts: {
  XXXS: string | number;
  XXS: string | number;
  XS: string | number;
  P0: string | number;
  P1: string | number;
  P2: string | number;
  P3: string | number;
  P4: string | number;
  P5: string | number;
  P6: string | number;
} = {
  XXXS: "8px",
  XXS: "10px",
  XS: "12px",
  P0: "15px",
  P1: "18px",
  P2: "20px",
  P3: "24px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
};

const gridUnit = 8;

const borderRadius: {
  subtle: number;
  round: string | number;
  extraRound: string | number;
  circle: string | number;
} = {
  subtle: 1,
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};

const shadows = {};

const weights: {
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  heavy: number;
} = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
};

export const theme = {
  colors,
  fonts,
  gridUnit,
  borderRadius,
  shadows,
  weights,
  spacing,
};
