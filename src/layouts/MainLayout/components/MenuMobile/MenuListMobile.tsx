import React, { useMemo } from "react";
import { getMenuList } from "../MenuList";
import { useTranslation } from "react-i18next";
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import AppAccordion from "components/common/AppAccordion";
import { CaretIcon } from "components/icons";

const MenuListMobile = ({ onCloseMenu }: MenuListMobileProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const { t: getLabel } = useTranslation();

  const menuList = useMemo(() => getMenuList(getLabel), [getLabel]);

  const handleRedirect = (path: string) => {
    onCloseMenu();
    navigate(path);
  };

  return (
    <>
      {menuList?.map((item, index) => {
        const isSelected = [item.path].includes(location.pathname);
        if (item.isDropDown) {
          const isSelected = Boolean(
            item.path.filter((path) => location.pathname.startsWith(path)).length,
          );
          return (
            <AppAccordion
              accordionSummaryProps={{
                classes: { expandIconWrapper: clsx(isSelected && classes.selected) },
              }}
              key={index}
              labelProps={{
                label: item.label,
                className: clsx(classes.link, isSelected && classes.selected),
              }}
            >
              {item.item.map((itemMenu, index) => (
                <Typography
                  key={index}
                  onClick={() => handleRedirect(itemMenu.path)}
                  className={clsx(
                    classes.link,
                    itemMenu.path === location.pathname && classes.selected,
                  )}
                >
                  {itemMenu.label}
                </Typography>
              ))}
            </AppAccordion>
          );
        }
        return (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            onClick={() => handleRedirect(item.path as string)}
          >
            <Typography className={clsx(classes.link, isSelected && classes.selected)}>
              {item.label}
            </Typography>
            <CaretIcon sx={{ transform: "rotate(180deg)", fontSize: 24 }} />
          </Stack>
        );
      })}
    </>
  );
};

type MenuListMobileProps = {
  onCloseMenu: () => void;
};

export default MenuListMobile;

const useStyles = makeStyles(() => ({
  link: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "22px",
    padding: "6px 0",
    marginRight: 10,
  },
  selected: {
    color: "#603DBF",

    "&+svg": {
      color: "#603DBF",
    },
  },
}));
