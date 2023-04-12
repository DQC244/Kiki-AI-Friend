import React from "react";
import { AppBar, Container, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import LanguageButton from "./LanguageButton";
import clsx from "clsx";
import Logo from "./Logo";
import MenuList from "./MenuList";

const MLHeader = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Container classes={{ root: clsx("space-between-root", classes.container) }}>
        <Logo />
        <Stack direction="row" alignItems="center" spacing={5}>
          <MenuList />
          <LanguageButton />
        </Stack>
      </Container>
    </AppBar>
  );
};

export default MLHeader;
export const HEADER_HEIGHT_IN_PX = 135;

const useStyles = makeStyles(() => ({
  appBar: {
    height: HEADER_HEIGHT_IN_PX,
    background: `linear-gradient(360deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 125.18%), no-repeat top left / 100% 100% url(${ImageAssets.BackgroundHeaderImage})`,
    boxShadow: "unset",
  },
  container: {
    height: HEADER_HEIGHT_IN_PX,
  },
}));
