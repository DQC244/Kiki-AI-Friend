import React, { ReactNode, memo, useMemo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import { LangConstant, PathConstant } from "const";
import { AppTrans } from "components/common";
import RedirectLinkButton from "./RedirectLinkButton";

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

  return (
    <Stack direction="row" spacing={27.5}>
      <Stack spacing={2.25} zIndex={1}>
        <Typography className={classes.title}>{getLabel("lAIFriend")}</Typography>
        <Typography>
          <AppTrans i18nKey={getLabel("lAIFriendDesc")} />
        </Typography>
        <RedirectLinkButton title={getLabel("lWannaSayHello")} link={PathConstant.BIRTH_CHART} />
      </Stack>
      <Box className={classes.wrapperImage}>
        {star}
        {spaceship}
        <Box
          className={classes.image}
          sx={{
            background: `no-repeat top left / 100% 100% url(${imgSrc})`,
            "&:hover": {
              backgroundImage: `url(${imgSrcHover})`,
            },
          }}
        />
      </Box>
    </Stack>
  );
};

type AIFriendSectionProps = {
  star?: ReactNode;
  spaceship?: ReactNode;
};

export default memo(AIFriendSection);

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "71px",
    zIndex: 2,
  },
  wrapperImage: {
    position: "relative",
    zIndex: 2,
  },
  image: {
    width: 327,
    height: 709,
    zIndex: 2,
  },
}));
