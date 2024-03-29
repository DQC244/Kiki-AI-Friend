import React, { memo, useEffect, useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import { LangConstant, PathConstant } from "const";
import { AppTrans } from "components/common";
import RedirectLinkButton from "./RedirectLinkButton";
import { ThemeProps } from "models/types";
import { isDesktop } from "react-device-detect";
import AnimationRightToLeft from "./AnimationRightToLeft";
import { useMobile } from "hooks";

const SeeHarmonySection = () => {
  const classes = useStyles();
  const isMobile = useMobile();

  const { t: getLabel, i18n } = useTranslation();

  const [imgSrc, imgSrcHover] = useMemo(() => {
    switch (i18n.language) {
      case LangConstant.DEFAULT_LANG_CODE:
        return [
          ImageAssets.PhoneHarmonyHomeBackground,
          ImageAssets.PhoneHarmonyHomeBackgroundHover,
        ];
      case LangConstant.DEFAULT_LANG_VN_CODE:
        return [
          ImageAssets.PhoneHarmonyHomeBackgroundVI,
          ImageAssets.PhoneHarmonyHomeBackgroundVIHover,
        ];
      default:
        return [
          ImageAssets.PhoneHarmonyHomeBackground,
          ImageAssets.PhoneHarmonyHomeBackgroundHover,
        ];
    }
  }, [i18n.language]);

  const [imageUrl, setImageUrl] = useState(imgSrc);

  const handleClickImage = () => {
    if (imageUrl === imgSrc) {
      setImageUrl(imgSrcHover);
    } else {
      setImageUrl(imgSrc);
    }
  };

  useEffect(() => {
    if (isDesktop) return;
    setImageUrl(imgSrc);
  }, [imgSrc]);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      position="relative"
      spacing={{ xs: 4, sm: 27.5 }}
    >
      {isMobile && (
        <Box className={classes.animation}>
          <AnimationRightToLeft />
        </Box>
      )}
      <Stack spacing={{ xs: 1, sm: 4.5 }}>
        <Typography className={classes.title}>{getLabel("lSeeHarmony")}</Typography>
        <Typography className={classes.text}>
          <AppTrans i18nKey={getLabel("lSeeHarmonyDesc")} />
        </Typography>
        <RedirectLinkButton
          title={getLabel("lLetSeeYourHarmonyWith")}
          link={PathConstant.SYNASTRY_CHART}
        />
      </Stack>
      <Box className={classes.wrapperImage}>
        {isDesktop ? (
          <Box
            className={classes.image}
            sx={{
              background: `no-repeat top left / 100% 100% url(${imgSrc})`,
              "&:hover": {
                backgroundImage: `url(${imgSrcHover})`,
              },
            }}
          />
        ) : (
          <Box
            onClick={handleClickImage}
            className={classes.image}
            component="img"
            src={imageUrl}
            draggable="false"
          />
        )}
      </Box>
    </Stack>
  );
};

export default memo(SeeHarmonySection);

const useStyles = makeStyles((theme: ThemeProps) => ({
  title: {
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "71px",
    zIndex: 2,

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      lineHeight: "30px",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  wrapperImage: {
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  image: {
    position: "relative",
    width: 327,
    height: 709,
    zIndex: 2,

    [theme.breakpoints.down("lg")]: {
      width: 241,
      height: 521,
    },
    [theme.breakpoints.down("sm")]: {
      width: 158,
      height: 341,
    },
  },
  animation: {
    position: "absolute",
    width: 680,
    bottom: -243,
    left: 40,
    transform: "translateX(-100%)",

    [theme.breakpoints.down("lg")]: {
      width: 420,
      bottom: -180,
    },
    [theme.breakpoints.down("sm")]: {
      width: 400,
      bottom: -60,
      left: "50%",
      transform: "translateX(-50%) scaleX(-1)",
    },
  },
}));
