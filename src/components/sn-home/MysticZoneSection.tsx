import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import React, { ReactNode, memo } from "react";
import { useTranslation } from "react-i18next";
import RedirectLinkButton from "./RedirectLinkButton";
import { PathConstant } from "const";

const MysticZoneSection = ({ star, spaceship }: MysticZoneProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack direction="row" spacing={27.5}>
      <Box className={classes.imageWrapper}>
        {star}
        {spaceship}
        <Box
          className={classes.image}
          component="img"
          src={ImageAssets.PhoneMysticHomeBackground}
          draggable="false"
        />
      </Box>
      <Stack spacing={4.5} alignItems="flex-end">
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

const useStyles = makeStyles(() => ({
  image: {
    width: 327,
    height: 709,
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "71px",
  },
  text: {
    fontFamily: "Montserrat",
    textAlign: "end",
  },
  imageWrapper: {
    position: "relative",
  },
}));
