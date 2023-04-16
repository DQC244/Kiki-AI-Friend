import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import { PathConstant } from "const";
import { AppTrans } from "components/common";
import RedirectLinkButton from "./RedirectLinkButton";

const SeeHarmonySection = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack direction="row" spacing={27.5}>
      <Stack spacing={4.5}>
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
        <Box
          className={classes.image}
          component="img"
          src={ImageAssets.PhoneHarmonyHomeBackground}
          draggable="false"
        />
      </Box>
    </Stack>
  );
};

export default memo(SeeHarmonySection);

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "71px",
  },
  text: {
    fontFamily: "Montserrat",
  },
  wrapperImage: {
    position: "relative",
  },
  image: {
    width: 327,
    height: 709,
  },
}));
