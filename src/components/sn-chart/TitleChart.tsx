import React, { memo } from "react";
import { Typography, TypographyProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { ThemeProps } from "models/types";

const TitleChart = ({ title, className, ...otherProps }: TitleChartProps) => {
  const classes = useStyles();

  return (
    <Typography className={clsx(classes.root, className)} {...otherProps}>
      {title}
    </Typography>
  );
};

type TitleChartProps = TypographyProps & {
  title: string;
};

export default memo(TitleChart);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    background: "linear-gradient(83.8deg, #CAACF2 -0.96%, #9AA2FF 47.01%, #BBD0FF 98.49%)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      lineHeight: "30px",
    },
  },
}));
