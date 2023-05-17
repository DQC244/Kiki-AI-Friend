import React, { ReactNode, memo, useEffect, useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { useTranslation } from "react-i18next";
import RedirectLinkButton from "./RedirectLinkButton";
import { LangConstant, PathConstant } from "const";
import { ThemeProps } from "models/types";
import { isDesktop } from "react-device-detect";

const MysticZoneSection = ({ star, spaceship }: MysticZoneProps) => {
  const classes = useStyles();
  const { t: getLabel, i18n } = useTranslation();

  const [imgSrc, imgSrcHover] = useMemo(() => {
    switch (i18n.language) {
      case LangConstant.DEFAULT_LANG_CODE:
        return [ImageAssets.PhoneMysticHomeBackground, ImageAssets.PhoneMysticHomeBackgroundHover];
      case LangConstant.DEFAULT_LANG_VN_CODE:
        return [
          ImageAssets.PhoneMysticHomeBackgroundVI,
          ImageAssets.PhoneMysticHomeBackgroundVIHover,
        ];
      default:
        return [
          ImageAssets.PhoneMysticHomeBackgroundVI,
          ImageAssets.PhoneMysticHomeBackgroundHover,
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
    setImageUrl(imgSrc);
  }, [imgSrc]);

  return (
    <Stack direction={{ xs: "column-reverse", sm: "row" }} spacing={{ xs: 4, sm: 27.5 }}>
      <Box className={classes.imageWrapper}>
        {star}
        {spaceship}
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
      <Stack spacing={{ xs: 1, sm: 4.5 }} alignItems={{ xs: "flex-start", sm: "flex-end" }}>
        <Typography className={classes.title}>{getLabel("lMysticZone")}</Typography>
        <Typography className={classes.text}>{getLabel("lMysticZoneDesc")}</Typography>
        <RedirectLinkButton
          title={getLabel("lWantToKnowWhatTheUniverse")}
          link={PathConstant.DAILY_TAROT}
        />
      </Stack>
    </Stack>
  );
};

type MysticZoneProps = {
  star?: ReactNode;
  spaceship?: ReactNode;
};

export default memo(MysticZoneSection);

const useStyles = makeStyles((theme: ThemeProps) => ({
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
  title: {
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "71px",
    textAlign: "end",

    [theme.breakpoints.down("sm")]: {
      fontSize: 22,
      lineHeight: "30px",
      width: "100%",
    },
  },
  text: {
    textAlign: "end",

    [theme.breakpoints.down("sm")]: {
      textAlign: "start",
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  imageWrapper: {
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
}));
