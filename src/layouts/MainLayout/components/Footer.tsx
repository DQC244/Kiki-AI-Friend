import React, { memo } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { LinkConstant, PathConstant } from "const";
import { ThemeProps } from "models/types";
import { useLocation } from "react-router-dom";
import { GenerateBirthChart } from "components/sn-home";
import { useResponsive } from "hooks";

const Footer = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const location = useLocation();
  const isMobile = useResponsive("down", "md");

  return (
    <Stack>
      <Box className={clsx("center-root", classes.root)}>
        {location.pathname === PathConstant.ROOT && !isMobile && (
          <GenerateBirthChart mt={{ xs: 10, sm: 17.5, lg: 20 }} mb={{ xs: 5, sm: 7.5, lg: 10 }} />
        )}
        <Typography className={classes.title}>{getLabel("lComingSoonQ3")}</Typography>
        <Typography className={classes.followUs} mt={{ xs: 0.25, sm: 1.5, lg: 2 }}>
          {getLabel("lFollowUsOn")}
        </Typography>
        <Stack direction="row" spacing={{ xs: 2, sm: 1.5, lg: 1 }} mt={{ xs: 1, sm: 0.75, lg: 1 }}>
          <Link height={{ xs: 30, sm: 23, lg: 30 }} href={LinkConstant.TIKTOK_URL} target="_blank">
            <Box
              draggable="false"
              className={classes.logo}
              component="img"
              src={ImageAssets.TiktokImage}
            />
          </Link>
          <Link
            height={{ xs: 30, sm: 23, lg: 30 }}
            href={LinkConstant.INSTAGRAM_URL}
            target="_blank"
          >
            <Box
              draggable="false"
              className={classes.logo}
              component="img"
              src={ImageAssets.InstagramImage}
            />
          </Link>
          <Link height={{ xs: 30, sm: 23, lg: 30 }} href={LinkConstant.YOUTUBE_URL} target="_blank">
            <Box
              draggable="false"
              className={classes.logo}
              component="img"
              src={ImageAssets.YoutubeLogo}
            />
          </Link>
          <Link height={{ xs: 30, sm: 23, lg: 30 }} href={LinkConstant.TWITTER_URL} target="_blank">
            <Box
              draggable="false"
              className={classes.logo}
              component="img"
              src={ImageAssets.TwitterLogo}
            />
          </Link>
        </Stack>
        <Stack direction="row" spacing={1} mt={{ xs: 1, lg: 2 }} mb={{ xs: 1, lg: 0 }}>
          <Typography
            className={classes.text}
            component={Link}
            target="_blank"
            href={LinkConstant.TERMS_CONDITION}
          >
            {getLabel("lTermsConditions")}
          </Typography>
          <Typography className={classes.text}>-</Typography>
          <Typography className={classes.text}>{getLabel("lAllRightsReserved")}</Typography>
        </Stack>
      </Box>
    </Stack>
  );
};

export default memo(Footer);

export const FOOTER_HEIGHT_IN_PX = 195;
export const FOOTER_HEIGHT_TABLET_IN_PX = 420;
export const FOOTER_HEIGHT_TABLET_MD_IN_PX = 220;
export const FOOTER_HEIGHT_MOBILE_IN_PX = 108;

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
    width: "100%",
    minHeight: FOOTER_HEIGHT_IN_PX,
    flexDirection: "column",
    boxShadow: "unset",
    background: `linear-gradient(180deg, #FFFFFF 16.15%, rgba(255, 255, 255, 0) 100%), no-repeat bottom left / 100% auto url(${ImageAssets.BackgroundFooterImage})`,

    [theme.breakpoints.down("lg")]: {
      background: `linear-gradient(180deg, #FFFFFF 3.95%, rgba(255, 255, 255, 0.552099) 59.52%, rgba(255, 255, 255, 0) 149.46%), no-repeat bottom left / 100% auto url(${ImageAssets.BackgroundFooterImage})`,
      minHeight: FOOTER_HEIGHT_TABLET_IN_PX,
    },
    [theme.breakpoints.down("md")]: {
      minHeight: FOOTER_HEIGHT_TABLET_MD_IN_PX,
    },
    [theme.breakpoints.down("sm")]: {
      background: `linear-gradient(180deg, #FFFFFF 16.15%, rgba(255, 255, 255, 0) 100%), no-repeat bottom left / 100% auto url(${ImageAssets.BackgroundFooterImage})`,
      minHeight: FOOTER_HEIGHT_MOBILE_IN_PX,
    },
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
    marginTop: 16,

    [theme.breakpoints.down("lg")]: {
      fontSize: 18,
      lineHeight: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 11,
      lineHeight: "18px",
    },
  },
  followUs: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "22px",

    [theme.breakpoints.down("lg")]: {
      fontSize: 10,
      lineHeight: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 9,
      lineHeight: "17px",
    },
  },
  logo: {
    width: 30,
    height: 30,

    [theme.breakpoints.between("sm", "lg")]: {
      width: 23,
      height: 23,
    },
  },
  text: {
    color: theme.palette.common.black,
    fontWeight: 400,
    fontSize: 9,
    lineHeight: "17px",
  },
}));
