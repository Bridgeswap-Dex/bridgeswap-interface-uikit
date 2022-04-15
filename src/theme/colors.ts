import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#f7ad19",
  primaryBright: "#EC836E",
  primaryDark: "#b92608",
  secondary: "#330099",
  success: "#faca6b",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#0773C9",
  overlay: "#452a7a"
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#09092b",
  backgroundDisabled: "#9595e9",
  contrast: "#311b17",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  bright: "#ffffff",
  blue: "#17D2FB",
  input: "#ffffff",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#ffffff",
  textDisabled: "#dad5d5",
  textSubtle: "#8c8c8c",
  borderColor: "#551b10",
  card: "#080844",
  menuHover: "#F7AD19",
  gradients: {
    bluePurple: "linear-gradient(90.82deg, #FA00FF -73.84%, #17D2FB 141.1%)",
    bubblegum: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#a279f5",
  background: "#202136",
  backgroundDisabled: "#9595e9",
  contrast: "#FFFFFF",
  dropdown: "#2c2624",
  invertedContrast: "#662a1e",
  bright: "#ffffff",
  blue: "#17D2FB",
  input: "#7a534c",
  inputSecondary: "#b18179",
  primaryDark: "#c73316",
  tertiary: "#8a6058",
  text: "#f0745c",
  textDisabled: "#745a55",
  textSubtle: "#fc7358",
  borderColor: "#e67761",
  card: "#27262c",
  menuHover: "#F7AD19",
  gradients: {
    bluePurple: "linear-gradient(90.82deg, #FA00FF -73.84%, #17D2FB 141.1%)",
    bubblegum: "linear-gradient(245.94deg, rgba(8, 8, 56, 0.2) -63.8%, rgba(17, 17, 139, 0.2) 73.44%)",
  },
};
