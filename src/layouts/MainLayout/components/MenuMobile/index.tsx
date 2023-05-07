import React, { memo, useState } from "react";
import { Container, Drawer, IconButton, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MenuIcon } from "components/icons";
import { ThemeProps } from "models/types";
import { HEADER_HEIGHT_MOBILE_IN_PX } from "../MLHeader";
import MenuListMobile from "./MenuListMobile";
import LanguageButton from "../LanguageButton";

const MenuMobile = () => {
  const classes = useStyles();

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <IconButton className={classes.iconButton} onClick={() => setIsOpenDrawer(!isOpenDrawer)}>
        {<MenuIcon />}
      </IconButton>
      <Drawer
        classes={{ root: classes.paperRoot, paper: classes.paper }}
        ModalProps={{
          BackdropProps: { classes: { root: classes.backdrop } },
        }}
        anchor="right"
        open={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      >
        <Container className={classes.wrapper}>
          <Stack alignItems="flex-end" spacing={1}>
            <MenuListMobile onCloseMenu={() => setIsOpenDrawer(false)} />
            <LanguageButton />
          </Stack>
        </Container>
      </Drawer>
    </>
  );
};

export default memo(MenuMobile);

const useStyles = makeStyles((theme: ThemeProps) => ({
  iconButton: {
    "&,&:hover": {
      width: 32,
      height: 32,
      background: "transparent",
      fontSize: 32,
      marginLeft: theme.spacing(1),
    },
  },
  paperRoot: {
    top: HEADER_HEIGHT_MOBILE_IN_PX,
  },
  paper: {
    marginTop: HEADER_HEIGHT_MOBILE_IN_PX,
    backgroundColor: theme.palette.common.white,
    height: `calc(100% - ${HEADER_HEIGHT_MOBILE_IN_PX}px)`,
  },
  backdrop: {
    top: HEADER_HEIGHT_MOBILE_IN_PX,
  },
  wrapper: {
    width: "100vw",
    height: "calc(var(--vh, 1vh) * 100)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(3),
  },
}));
