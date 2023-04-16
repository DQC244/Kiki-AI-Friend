import React, { ReactNode, memo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import { PathConstant } from "const";
import { AppTrans } from "components/common";
import RedirectLinkButton from "./RedirectLinkButton";

const AIFriendSection = ({ star, spaceship }: AIFriendSectionProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack direction="row" spacing={27.5}>
      <Stack spacing={2.25}>
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
          component="img"
          src={ImageAssets.PhoneAIFriendHomeBackground}
          draggable="false"
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
    fontFamily: "Montserrat",
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "71px",
  },
  wrapperImage: {
    position: "relative",
  },
  image: {
    width: 327,
    height: 709,
  },
}));
