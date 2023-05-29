import React, { ReactNode, memo, useEffect, useMemo, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import { LangConstant, PathConstant } from "const";
import { AppTrans } from "components/common";
import RedirectLinkButton from "./RedirectLinkButton";
import { ThemeProps } from "models/types";
import { isDesktop } from "react-device-detect";

const AIFriendSection = ({ star, spaceship }: AIFriendSectionProps) => {
  const classes = useStyles();
  const { t: getLabel, i18n } = useTranslation();

  const [imgSrc, imgSrcHover] = useMemo(() => {
    switch (i18n.language) {
      case LangConstant.DEFAULT_LANG_CODE:
        return [
          ImageAssets.PhoneAIFriendHomeBackground,
          ImageAssets.PhoneAIFriendHomeBackgroundHover,
        ];
      case LangConstant.DEFAULT_LANG_VN_CODE:
        return [
          ImageAssets.PhoneAIFriendHomeBackgroundVI,
          ImageAssets.PhoneAIFriendHomeBackgroundVIHover,
        ];
      default:
        return [
          ImageAssets.PhoneAIFriendHomeBackground,
          ImageAssets.PhoneAIFriendHomeBackgroundHover,
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
    <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 4, sm: 27.5 }}>
      <Stack spacing={{ xs: 1, sm: 2.25 }} zIndex={1}>
        <Typography className={classes.title}>{getLabel("lAIFriend")}</Typography>
        <Typography className={classes.desc}>
          <AppTrans i18nKey={getLabel("lAIFriendDesc")} />
        </Typography>
        <RedirectLinkButton title={getLabel("lWannaSayHello")} link={PathConstant.BIRTH_CHART} />
      </Stack>
      <Box className={classes.wrapperImage}>
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
    </Stack>
  );
};

type AIFriendSectionProps = {
  star?: ReactNode;
  spaceship?: ReactNode;
};

export default memo(AIFriendSection);

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
  wrapperImage: {
    position: "relative",
    zIndex: 2,

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
  desc: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
}));
