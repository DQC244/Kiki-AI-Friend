import React, { memo, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Theme } from "@mui/system";
import clsx from "clsx";
import { Outlet, useLocation } from "react-router-dom";
import { AppHead, CookiePopup } from "components/common";
import { IProps } from "models";
import MLHeader, {
  HEADER_HEIGHT_IN_PX,
  HEADER_HEIGHT_MOBILE_IN_PX,
  HEADER_HEIGHT_TABLET_IN_PX,
} from "./components/MLHeader";
import { makeStyles } from "@mui/styles";
import Footer, { FOOTER_HEIGHT_IN_PX } from "./components/Footer";
import { AppConstant, PathConstant } from "const";

const MainLayout = ({ className, ...otherProps }: MainLayoutProps): JSX.Element => {
  const classesDefault = useStyles();

  const location = useLocation();

  const [isShowSettingCookie, setIsShowSettingCookie] = useState(false);
  const [isUSA, setIsUSA] = useState(false);

  const handleShowPopUp = () => {
    if (localStorage.getItem(AppConstant.COOKIES_SETTING_KEY) === null) {
      setIsShowSettingCookie(true);
    } else {
      setIsShowSettingCookie(false);
    }
  };

  const handleToggleScroll = () => {
    const rootEl = document.getElementById("root");
    if (rootEl) {
      if (location.pathname === PathConstant.ROOT) {
        rootEl.style.overflow = "visible";
      } else {
        rootEl.style.overflow = "hidden scroll";
      }
    }
  };

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone.startsWith(AppConstant.USA_TIME_ZONE)) {
      setIsUSA(true);
    } else {
      setIsUSA(false);
    }
    handleShowPopUp();
  }, []);

  useEffect(() => {
    handleToggleScroll();
  }, [location.pathname]);

  return (
    <>
      <AppHead />
      <MLHeader />
      <Box className={clsx(classesDefault.main, className)} {...otherProps}>
        <Outlet />
      </Box>
      {isShowSettingCookie && (
        <CookiePopup
          isOpen={isShowSettingCookie}
          isUSA={isUSA}
          onClose={() => setIsShowSettingCookie(false)}
        />
      )}
      <Footer />
    </>
  );
};

type MainLayoutProps = IProps;

MainLayout.defaultProps = {};

export default memo(MainLayout);

export const MAIN_ID = "MAIN_ID";

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    position: "relative",
    width: "100%",
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
    marginTop: HEADER_HEIGHT_IN_PX,
    background: theme.palette.background.default,
    overflow: "hidden",

    [theme.breakpoints.down("lg")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_TABLET_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
      marginTop: HEADER_HEIGHT_TABLET_IN_PX,
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: `calc(100vh - ${HEADER_HEIGHT_MOBILE_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
      marginTop: HEADER_HEIGHT_MOBILE_IN_PX,
    },
  },
}));
