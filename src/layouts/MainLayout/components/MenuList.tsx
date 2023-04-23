import React, { memo, useMemo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { ThemeProps } from "models/types";
import { PathConstant } from "const";
import { useLocation, useNavigate } from "react-router-dom";
import AppMenuItem from "./AppMenuItem";
import clsx from "clsx";

const MenuList = () => {
  const classes = useStyle();
  const { t: getLabel } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const menuList = useMemo(() => getMenuList(getLabel), [getLabel]);

  return (
    <Stack spacing={5} direction="row">
      {menuList.map((item, index) => {
        const isSelected = [item.path].includes(location.pathname);
        if (item.isDropDown) {
          const isSelected = Boolean(
            item.path.filter((path) => location.pathname.startsWith(path)).length,
          );
          return (
            <Box key={index} className={classes.linkDropdown}>
              <Typography className={clsx(classes.link, isSelected && classes.selected)}>
                {item.label}
              </Typography>
              <Box className={classes.menuBox}>
                {item.item.map((itemMenu, index) => (
                  <AppMenuItem
                    key={index}
                    onClick={() => navigate(itemMenu.path)}
                    className={clsx(
                      itemMenu.path === location.pathname && classes.isActiveMenuItem,
                    )}
                  >
                    {itemMenu.label}
                  </AppMenuItem>
                ))}
              </Box>
            </Box>
          );
        }
        return (
          <Typography
            className={clsx(classes.link, isSelected && classes.selected)}
            key={index}
            onClick={() => navigate(item.path as string)}
          >
            {item.label}
          </Typography>
        );
      })}
    </Stack>
  );
};

export default memo(MenuList);

const getMenuList = (getLabel: (key: string, obj: object) => ObjectMultiLanguageProps) => {
  const objMenu = getLabel("ObjMenu", { returnObjects: true });
  return [
    {
      label: objMenu.lHome,
      path: PathConstant.ROOT,
    },
    {
      label: objMenu.lChart,
      isDropDown: true,
      path: [PathConstant.BIRTH_CHART, PathConstant.TRANSIT_CHART, PathConstant.SYNASTRY_CHART],
      item: [
        { label: objMenu.lBirthChart, path: PathConstant.BIRTH_CHART },
        { label: objMenu.lTransitChart, path: PathConstant.TRANSIT_CHART },
        { label: objMenu.lSynastryChart, path: PathConstant.SYNASTRY_CHART },
      ],
    },
    {
      label: objMenu.lTarot,
      isDropDown: true,
      path: [PathConstant.DAILY_TAROT, PathConstant.TAROT_CARD_MEANING],
      item: [
        { label: objMenu.lDailyTarot, path: PathConstant.DAILY_TAROT },
        { label: objMenu.lTarotCardMeaning, path: PathConstant.TAROT_CARD_MEANING },
      ],
    },
    {
      label: objMenu.lDownload,
      path: PathConstant.DOWNLOAD,
    },
    {
      label: objMenu.lShop,
      path: PathConstant.SHOP,
    },
  ];
};

const SPACING_MENU_WITH_LINK = 10;

const useStyle = makeStyles((theme: ThemeProps) => ({
  link: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
    color: theme.palette.common.black,
    cursor: "pointer",
    "&:hover": {
      color: "#603DBF",
    },
  },
  selected: {
    color: "#603DBF",
  },
  menuBox: {
    position: "absolute",
    top: `calc(100% + ${SPACING_MENU_WITH_LINK}px)`,
    display: "none",
    padding: "2px",
    background: "linear-gradient(83.8deg, #CAACF2 -0.96%, #9AA2FF 47.01%, #BBD0FF 98.49%)",
    borderRadius: 10,

    "&:before": {
      content: "''",
      position: "absolute",
      top: -SPACING_MENU_WITH_LINK,
      width: "100%",
      height: SPACING_MENU_WITH_LINK,
    },
  },
  linkDropdown: {
    position: "relative",
    "&:hover $link": {
      color: "#603DBF",
    },

    "&:hover $menuBox": {
      display: "block",
    },
  },
  isActiveMenuItem: {
    background: "transparent",
    color: theme.palette.common.white,
  },
}));
