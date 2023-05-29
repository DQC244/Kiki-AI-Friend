import { ReactNode } from "react";
import { Theme } from "@mui/system";
import { SvgIconProps } from "@mui/material";

export interface IProps {
  children?: ReactNode;
  className?: string;
  classes?: object;
}

export interface IIconProps extends SvgIconProps {
  sx?: object;
  className?: string;
}

export interface ThemeProps extends Theme {
  typography?: {
    h1?: object;
    h2?: object;
    h3?: object;
    h4?: object;
    h5?: object;
    h6?: object;
    body1?: object;
    body2?: object;
    subtitle1?: object;
    subtitle2?: object;
    caption?: object;
    overline?: object;
  };
}

export interface ObjectMultiLanguageProps {
  [x: string]: string;
}
