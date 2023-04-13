import React, { memo, useState } from "react";
import { Button, ButtonProps, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const QuestionBoxButton = ({ children, ...otherProps }: ButtonProps) => {
  const defaultClasses = useStyles();
  const [isActiveIcon, setIsActiveIcon] = useState(false);

  const handleClick = () => {
    setIsActiveIcon(!isActiveIcon);
  };

  return (
    <Button
      onClick={handleClick}
      classes={{
        root: clsx(defaultClasses.root, isActiveIcon && defaultClasses.activeRoot),
        startIcon: defaultClasses.startIcon,
      }}
      variant="contained"
      {...otherProps}
    >
      <Typography className={defaultClasses.text}>{children}</Typography>
    </Button>
  );
};

export default memo(QuestionBoxButton);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.dark,
    border: "1px solid #603DBF",
    borderRadius: 8,
    boxShadow: "unset",
    padding: "4px 8px",
    minHeight: 42,
    minWidth: 145,
    textTransform: "unset",

    "&:hover": {
      backgroundColor: theme.palette.common.white,
      borderColor: "#603DBF",
    },
  },
  startIcon: {
    marginLeft: 0,
    "&>*:nth-of-type(1)": {
      fontSize: 30,
    },
  },
  text: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: 13,
    lineHeight: "22px",
  },
  activeRoot: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.dark,
    borderColor: theme.palette.secondary.dark,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
      borderColor: theme.palette.secondary.dark,
    },
  },
}));
