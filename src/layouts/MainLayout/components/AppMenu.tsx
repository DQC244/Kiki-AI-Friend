import React, { memo } from "react";
import { Menu, MenuItemProps, MenuProps } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AppMenuItem from "./AppMenuItem";
import clsx from "clsx";

const AppMenu = ({ listItem, classes, menuItemProps, ...otherProps }: AppMenuProps) => {
  const defaultClasses = useStyles();

  return (
    <Menu
      classes={{
        ...classes,
        list: clsx(defaultClasses.list, classes?.list),
        paper: clsx(defaultClasses.paper, classes?.paper),
      }}
      {...otherProps}
    >
      {listItem?.map((item, index) => (
        <AppMenuItem key={index} {...item} {...menuItemProps}>
          {item.label}
        </AppMenuItem>
      ))}
    </Menu>
  );
};

type AppMenuProps = MenuProps & {
  listItem: Array<any>;
  menuItemProps?: MenuItemProps;
};

export default memo(AppMenu);

const useStyles = makeStyles(() => ({
  list: {
    padding: "2px",
    background: "linear-gradient(83.8deg, #CAACF2 -0.96%, #9AA2FF 47.01%, #BBD0FF 98.49%)",
  },
  paper: {
    borderRadius: 10,
    boxShadow: "unset",
  },
}));
