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

const Footer = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const location = useLocation();

  return (
    <Stack>
      <Box className={clsx("center-root", classes.root)}>
        {location.pathname === PathConstant.ROOT && <GenerateBirthChart mt={20} mb={10} />}
        <Typography className={classes.title}>{getLabel("lComingSoonQ3")}</Typography>
        <Typography className={classes.followUs} mt={2}>
          {getLabel("lFollowUsOn")}
        </Typography>
        <Stack direction="row" spacing={1} mt={1}>
          <Link href={LinkConstant.TIKTOK_URL} target="_blank">
            <Box
              draggable="false"
              className={classes.logo}
              component="img"
              src={ImageAssets.TiktokImage}
            />
          </Link>
          <Link href={LinkConstant.INSTAGRAM_URL} target="_blank">
            <Box
              draggable="false"
              className={classes.logo}
              component="img"
              src={ImageAssets.InstagramImage}
            />
          </Link>
          <Link href={LinkConstant.YOUTUBE_URL} target="_blank">
            <Box
              draggable="false"
              className={classes.logo}
              component="img"
              src={ImageAssets.YoutubeLogo}
            />
          </Link>
          <Link href={LinkConstant.TWITTER_URL} target="_blank">
            <Box
              draggable="false"
              className={classes.logo}
              component="img"
              src={ImageAssets.TwitterLogo}
            />
          </Link>
        </Stack>
        <Stack direction="row" spacing={1} mt={2}>
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

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
    width: "100%",
    minHeight: FOOTER_HEIGHT_IN_PX,
    flexDirection: "column",
    boxShadow: "unset",
    background: `linear-gradient(180deg, #FFFFFF 16.15%, rgba(255, 255, 255, 0) 100%), no-repeat bottom left / 100% auto url(${ImageAssets.BackgroundFooterImage})`,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
    marginTop: 16,
  },
  followUs: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: "22px",
  },
  logo: {
    width: 30,
    height: 30,
  },
  text: {
    color: theme.palette.common.black,
    fontWeight: 400,
    fontSize: 9,
    lineHeight: "17px",
  },
}));
