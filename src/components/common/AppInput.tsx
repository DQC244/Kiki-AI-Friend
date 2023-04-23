import React, { memo } from "react";
import { IconButton, Input, InputProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { ImageAssets } from "assets";

const AppInput = ({ onSubmit, ...otherProps }: AppInputProps) => {
  const classes = useStyles();

  return (
    <Input
      classes={{ root: classes.inputRoot, input: classes.input }}
      endAdornment={
        <IconButton
          onClick={onSubmit}
          classes={{
            root: classes.button,
          }}
          size="small"
        />
      }
      {...otherProps}
    />
  );
};

type AppInputProps = InputProps & {
  onSubmit: () => void;
};

export default memo(AppInput);

const useStyles = makeStyles((theme: ThemeProps) => ({
  inputRoot: {
    width: 668,
    maxWidth: "100%",
    borderRadius: 15,
    minHeight: 54,
    background: theme.palette.gradient.main,

    "&:after,&:before": {
      display: "none",
    },
  },
  input: {
    background: theme.palette.common.white,
    margin: 1,
    height: 52,
    width: "calc(100% - 2px)",
    borderRadius: 15,
    padding: "4px 24px",
  },
  button: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: `no-repeat top left / 100% 100% url(${ImageAssets.ArrowButtonBackground})`,
    position: "absolute",
    right: 25,
  },
}));
