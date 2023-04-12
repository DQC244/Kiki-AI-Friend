import { createTheme } from "@mui/material";
import breakpoints from "../breakpoints";
const customBreakpoints = createTheme({ breakpoints }).breakpoints;
const maxWidth = 1330;

export default {
  styleOverrides: {
    root: {
      [customBreakpoints.up(maxWidth)]: {
        paddingLeft: 60,
        paddingRight: 60,
      },
    },
    maxWidthLg: {
      maxWidth: maxWidth,
      [customBreakpoints.up("lg")]: {
        maxWidth: maxWidth,
      },
    },
  },
};
