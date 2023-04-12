import { Button, ButtonProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import React, { ReactNode, memo } from "react";

const AppGradientButton = ({ label, ...otherProps }: AppGradientButtonProps) => {
  const defaultClasses = useStyles();
  return (
    <Button classes={{ root: defaultClasses.root }} {...otherProps}>
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
