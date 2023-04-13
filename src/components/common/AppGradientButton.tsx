import React, { ReactNode, memo } from "react";
import { Button, ButtonProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const AppGradientButton = ({ label, classes, ...otherProps }: AppGradientButtonProps) => {
  const defaultClasses = useStyles();

  return (
    <Button
      classes={{ ...classes, root: clsx(defaultClasses.root, classes?.root) }}
      {...otherProps}
    >
      {label}
    </Button>
  );
};

type AppGradientButtonProps = ButtonProps & {
  label: ReactNode;
};

export default memo(AppGradientButton);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    background: theme.palette.gradient.main,
    padding: 8,
    minWidth: 216,
    minHeight: 56,
    color: theme.palette.common.white,
    textTransform: "unset",
    borderRadius: 20,
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "30px",
  },
}));
