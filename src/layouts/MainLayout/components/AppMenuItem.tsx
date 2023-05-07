import React, { memo } from "react";
import { MenuItem, MenuItemProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { ThemeProps } from "models/types";

const AppMenuItem = ({ children, classes, ...otherProps }: MenuItemProps) => {
  const defaultClasses = useStyles();

  return (
    <MenuItem
      classes={{
        ...classes,
        root: clsx(defaultClasses.root, classes?.root),
      }}
      {...otherProps}
    >
      {children}
    </MenuItem>
  );
};

export default memo(AppMenuItem);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    marginBottom: 1,
    minWidth: 207,
    height: 42,
    padding: "0 8px",
    color: "#000000",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "24px",
    background: "#ffffff",

    [theme.breakpoints.down("lg")]: {
      padding: "0 4px",
    },

    "&:hover": {
      color: "#ffffff",
      background: "transparent",
    },
    "&:first-child": {
      borderRadius: "8px 8px 0px 0px",
    },
    "&:last-child": {
      borderRadius: "0px 0px 8px 8px",
      marginBottom: 0,
    },
  },
}));
