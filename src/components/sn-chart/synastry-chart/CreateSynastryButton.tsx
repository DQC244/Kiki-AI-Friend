import React, { memo } from "react";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { AppGradientButton } from "components/common";
import { Box, Stack } from "@mui/material";
import { ImageAssets } from "assets";

const CreateSynastryButton = ({ onClickButtonView }: CreateSynastryButtonProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack>
      <Box
        className={classes.img}
        component="img"
        src={ImageAssets.CreateSynastryChartImage}
        draggable="false"
      />
      <AppGradientButton
        onClick={onClickButtonView}
        classes={{ root: classes.rootBtn }}
        label={getLabel("lViewSynastryChart")}
      />
    </Stack>
  );
};

type CreateSynastryButtonProps = {
  onClickButtonView?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default memo(CreateSynastryButton);

const useStyles = makeStyles(() => ({
  img: {
    width: 282,
    height: 203,
    zIndex: 1,
  },
  rootBtn: {
    minWidth: 250,
    height: 63,
    marginTop: -13,
  },
}));
