/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import { Button, ButtonProps, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const QuestionBoxButton = ({
  children,
  isActive,
  isItalic,
  isBlack,
  onClickQuestionButton,
  ...otherProps
}: QuestionBoxButton) => {
  const defaultClasses = useStyles();

  const handleClick = () => {
    onClickQuestionButton();
  };

  return (
    <Button
      onClick={handleClick}
      classes={{
        root: clsx(
          defaultClasses.root,
          isActive && defaultClasses.activeRoot,
          isItalic && defaultClasses.italic,
        ),
        startIcon: defaultClasses.startIcon,
      }}
      variant="contained"
      {...otherProps}
    >
      <Typography
        className={clsx(defaultClasses.text, isBlack && !isActive && defaultClasses.black)}
      >
        {children}
      </Typography>
    </Button>
  );
};

type QuestionBoxButton = ButtonProps & {
  isActive: boolean;
  isItalic?: boolean;
  isBlack?: boolean;
  onClickQuestionButton: () => void;
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
    minHeight: 45,
    height: "100%",
    minWidth: 145,
    maxWidth: 360,
    width: "100%",
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
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
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
  italic: {
    fontStyle: "italic",
  },
  black: {
    fontWeight: 400,
    color: theme.palette.common.black,
  },
}));
