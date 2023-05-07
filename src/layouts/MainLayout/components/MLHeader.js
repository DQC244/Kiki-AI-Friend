import React from "react";
import { AppBar, Container, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import LanguageButton from "./LanguageButton";
import clsx from "clsx";
import Logo from "./Logo";
import MenuList from "./MenuList";
import { useMobile } from "hooks";
import MenuMobile from "./MenuMobile";

const MLHeader = () => {
  const classes = useStyles();

  const isMobile = useMobile();

  return (
    <AppBar className={classes.appBar}>
      <Container classes={{ root: clsx("space-between-root", classes.container) }}>
        <Logo />
        {isMobile ? (
          <MenuMobile />
        ) : (
          <Stack direction="row" alignItems="center" spacing={{ sm: 3, lg: 5 }}>
            <MenuList />
            <LanguageButton />
          </Stack>
        )}
      </Container>
    </AppBar>
  );
};

export default MLHeader;
export const HEADER_HEIGHT_IN_PX = 135;
export const HEADER_HEIGHT_TABLET_IN_PX = 82;
export const HEADER_HEIGHT_MOBILE_IN_PX = 40;

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: HEADER_HEIGHT_IN_PX,
    background: `linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 125.18%), no-repeat top left / 100% 100% url(${ImageAssets.BackgroundHeaderImage})`,
    boxShadow: "unset",

    [theme.breakpoints.down("lg")]: {
      height: HEADER_HEIGHT_TABLET_IN_PX,
    },

    [theme.breakpoints.down("sm")]: {
      height: HEADER_HEIGHT_MOBILE_IN_PX,
      background: `linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), no-repeat bottom right / auto 100% url(${ImageAssets.BackgroundHeaderImage})`,
      filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.25))",
    },
  },
  container: {
    height: "100%",
  },
}));
