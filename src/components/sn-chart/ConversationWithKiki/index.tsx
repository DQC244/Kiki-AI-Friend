import React, { memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import ChartConversationKiki from "./ChartConversationKiki";
import { ImageAssets } from "assets";
import clsx from "clsx";

const ConversationWithKiki = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack>
      <Typography className={classes.title}>{getLabel("lWantToTryHave")}</Typography>
      <Stack mt={4} direction="row" spacing={18.25} alignItems="flex-end">
        <ChartConversationKiki />
        <Box position="relative">
          <Box className={clsx("center-root", classes.labelWrapper)}>
            <Typography className={classes.label}>{getLabel("lPleaseChooseTheTopic")}</Typography>
          </Box>
          <Box
            component="img"
            src={ImageAssets.BackgroundBirthChartChat}
            className={classes.img}
            draggable="false"
          />
        </Box>
      </Stack>
    </Stack>
  );
};

export default memo(ConversationWithKiki);

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 600,
    fontSize: 36,
    lineHeight: "38px",
    color: "#59518C",
    textAlign: "center",
    zIndex: 0,
  },
  img: {
    width: 376,
    height: 524,
    zIndex: 0,
  },
  labelWrapper: {
    position: "absolute",
    top: 0,
    left: 30,
    right: 30,
    height: 105,
    textAlign: "center",
  },
  label: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
  },
}));
