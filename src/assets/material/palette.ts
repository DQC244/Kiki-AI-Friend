const white = "#FFFFFF";
const black = "#000000";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TPalette = Record<string, any> & { mode: "light" | "dark" };

const palette: TPalette = {
  mode: "light",
  common: {
    black,
    white,
  },
  primary: {
    main: "#CAACF2",
    light: "#FFD6FF",
    dark: "#B8C0FF",
    contrastText: black,
  },
  secondary: {
    main: "#B8C0FF",
    light: "#BBD0FF",
    dark: "#756CBF",
    contrastText: black,
  },
  error: {
    dark: "#A93131",
    light: "#FF9F9F",
    main: "#FF6F6F",
    contrastText: black,
  },
  warning: {
    main: "#FCFF62",
    light: "",
    dark: "#D3B239",
    contrastText: black,
  },
  success: {
    main: "#6AD74F",
    light: "",
    dark: "",
    contrastText: black,
  },
  link: {
    primary: "",
    secondary: "#55A1FF",
    link: "#2C8CFF", // rgb 44, 140, 255
  },
  grey: {
    50: "",
    100: "#D3D5DA",
    200: "#B8BCC6",
    300: "rgba(255, 255, 255, 0.6)",
    400: "rgba(255, 255, 255, 0.4)",
    500: "rgba(255, 255, 255, 0.3)",
    600: "rgba(255, 255, 255, 0.2)",
    700: "rgba(255, 255, 255, 0.1)",
    800: "rgba(255, 255, 255, 0.08)",
    900: "linear-gradient(180deg, rgba(255, 255, 255, 0.0798) 85.21%, rgba(255, 255, 255, 0.1) 100%)",
    A100: "#B5B5B5",
    A200: "rgba(8, 17, 41, 0.8)",
    A400: "rgba(8, 17, 41, 0.4)",
    A700: "rgba(8, 17, 41, 0.3)",
  },
  text: {
    primary: black,
    secondary: "rgba(255, 255, 255, 0.4)",
    disabled: "rgba(255, 255, 255, 0.6)",
    icon: "",
  },
  divider: "",
  background: {
    default: white,
    paper: white,
  },
  gradient: {
    main: "linear-gradient(90deg, #756CBF 0%, #CAACF2 100%)",
  },
  light: {
    light1: "#E7C6FF",
    light2: "#F1C3F2",
    light3: "#FFD6FF",
    light4: "#FFC8DD",
  },
  shadow: {
    disabled: "#565861",
    primary: "#2D49A0",
    secondary: "#8E5D24",
  },
};

export default palette;
